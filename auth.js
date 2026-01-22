// --- AUTENTICACIÓN Y SINCRONIZACIÓN ---

let currentUser = null;
const COLLECTION_NAME = "vida_discipular_users_v4";

// Escuchar cambios de estado
if (auth) {
    auth.onAuthStateChanged((user) => {
        currentUser = user;
        updateUserUI(user);
        if (user) {
            loadFromFirestore(user);
        }
    });
}

function loginWithGoogle() {
    if (!auth) {
        alert("Firebase no está configurado. Revisa firebase-config.js");
        return;
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("Sesión iniciada:", result.user.email);
            toggleSettings(); // Cierra el panel si quieres, o déjalo abierto para ver la confirmación
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión: " + error.message);
        });
}

function logout() {
    if (!auth) return;
    auth.signOut().then(() => {
        console.log("Sesión cerrada");
        // Opcional: Limpiar estado local o preguntar
        // localStorage.removeItem('vidaDiscipularStateV6Full');
        // location.reload(); 
    });
}

function updateUserUI(user) {
    const loggedOutView = document.getElementById('logged-out-view');
    const loggedInView = document.getElementById('logged-in-view');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userPhoto = document.getElementById('user-photo');

    if (user) {
        loggedOutView.classList.add('hidden');
        loggedInView.classList.remove('hidden');
        userName.innerText = user.displayName || "Usuario";
        userEmail.innerText = user.email;
        userPhoto.src = user.photoURL || "https://ui-avatars.com/api/?name=" + (user.displayName || "U");
    } else {
        loggedOutView.classList.remove('hidden');
        loggedInView.classList.add('hidden');
    }
}

// --- SINCRONIZACIÓN FIRESTORE ---

async function loadFromFirestore(user) {
    if (!db) return;
    const docRef = db.collection(COLLECTION_NAME).doc(user.uid);

    try {
        const doc = await docRef.get();
        if (doc.exists) {
            const data = doc.data();
            console.log("Datos cargados de la nube:", data);

            // Fusión de datos (Estrategia: Nube gana si hay conflicto, o merge inteligente)
            // Aquí simplemente cargamos lo de la nube
            if (data.answers) {
                state.answers = { ...state.answers, ...data.answers }; // Merge simple
                state.weekIdx = data.weekIdx || state.weekIdx;
                state.dayIdx = data.dayIdx || state.dayIdx;
                state.theme = data.theme || state.theme; // Load theme
                applyTheme(state.theme); // Apply loaded theme
                saveState(false); // Guardar en local sin re-subir
                renderContent();
                // alert("Tu progreso se ha sincronizado con la nube.");
            }
        } else {
            console.log("No hay datos previos en la nube para este usuario. Creando registro...");
            saveToFirestore(); // Subir lo que tengamos localmente
        }
    } catch (error) {
        console.error("Error al cargar de Firestore:", error);
    }
}

async function saveToFirestore() {
    if (!currentUser || !db) return;

    try {
        await db.collection(COLLECTION_NAME).doc(currentUser.uid).set({
            answers: state.answers,
            weekIdx: state.weekIdx,
            dayIdx: state.dayIdx,
            theme: state.theme, // Also sync theme
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("Progreso guardado en la nube.");
    } catch (error) {
        console.error("Error al guardar en Firestore:", error);
    }
}

// Exponer globalmente para que app.js pueda llamar a saveToFirestore si es necesario
window.saveToFirestore = saveToFirestore;
