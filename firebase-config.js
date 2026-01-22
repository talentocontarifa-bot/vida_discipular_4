// --- CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyDrQ3VCBaEmEAbrUk1JVIJuQN7qo12sQSY",
    authDomain: "desarrollopersonal-75769.firebaseapp.com",
    projectId: "desarrollopersonal-75769",
    storageBucket: "desarrollopersonal-75769.firebasestorage.app",
    messagingSenderId: "855094842857",
    appId: "1:855094842857:web:1340fb0500afd16f45e778",
    measurementId: "G-G6E682K70P"
};

// Inicializar Firebase
let app, auth, db;

if (typeof firebase !== 'undefined') {
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    // Analytics opcional si se agregara el script
    if (firebase.analytics) {
        firebase.analytics();
    }
    console.log("Firebase inicializado correctamente con config del usuario.");
} else {
    console.warn("SDK de Firebase no detectado.");
}
