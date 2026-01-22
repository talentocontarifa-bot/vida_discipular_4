
// --- ESTADO DE LA APP ---
let state = {
    weekIdx: 0,
    dayIdx: 0,
    fontSize: 18,
    theme: 'light', // 'light' | 'dark'
    answers: {}
};

// --- INICIALIZACIÓN ---
function init() {
    // Cargar datos guardados
    const savedData = localStorage.getItem('vidaDiscipularStateV6Full');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        state.answers = parsed.answers || {};
        state.fontSize = parsed.fontSize || 18;
        state.weekIdx = parsed.weekIdx || 0;
        state.dayIdx = parsed.dayIdx || 0;
        state.theme = parsed.theme || 'light';
    }

    applyTheme(state.theme); // Aplicar tema al iniciar
    renderMenu();
    renderContent();
    updateStyles();
}

// --- RENDERIZADO ---
function renderContent() {
    const currentWeek = bookData.weeks[state.weekIdx];
    const currentDay = currentWeek.days[state.dayIdx];
    const contentDiv = document.getElementById('book-content');

    let html = `
        <div class="header-day">
            <div class="header-meta">${currentWeek.title}</div>
            <h1 style="font-size: ${state.fontSize * 1.6}px">${currentDay.title}</h1>
            ${state.dayIdx === 0 ? `<div class="verse-box"><strong>Versículo para Memorizar:</strong><br>${currentWeek.verse}</div>` : ''}
        </div>
    `;

    currentDay.content.forEach(block => {
        const fs = state.fontSize;
        if (block.type === 'text') {
            html += `<p class="content-text" style="font-size: ${fs}px">${block.text}</p>`;
        } else if (block.type === 'header') {
            html += `<h2 style="font-size: ${fs * 1.3}px">${block.text}</h2>`;
        } else if (block.type === 'list') {
            html += `<ul class="content-list" style="font-size: ${fs}px">`;
            block.items.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        } else if (block.type === 'question') {
            const val = state.answers[block.id] || '';
            html += `
                <div class="input-group">
                    <label class="input-label" style="font-size: ${fs}px">
                        <span style="background:#dbeafe; padding:4px; border-radius:4px;">✏️</span> 
                        ${block.prompt}
                    </label>
                    <textarea style="font-size: ${fs}px" oninput="saveAnswer('${block.id}', this.value)" placeholder="${block.placeholder}">${val}</textarea>
                </div>
            `;
        } else if (block.type === 'checklist') {
            const checks = state.answers[block.id] || [];
            html += `
                <div class="checklist-group">
                    <label class="input-label" style="font-size: ${fs}px">
                        <span style="background:#e2e8f0; padding:4px; border-radius:4px;">✅</span>
                        ${block.prompt}
                    </label>
                    <div>
            `;
            block.options.forEach(opt => {
                const isChecked = checks.includes(opt);
                html += `
                    <div class="check-item ${isChecked ? 'checked' : ''}" onclick="toggleCheck('${block.id}', '${opt}')">
                        <div class="check-box">${isChecked ? '<div class="check-mark"></div>' : ''}</div>
                        <span style="font-size: ${fs}px">${opt}</span>
                    </div>
                `;
            });
            html += `</div></div>`;
        }
    });

    contentDiv.innerHTML = html;

    // Actualizar botones de navegación
    const isFirst = state.weekIdx === 0 && state.dayIdx === 0;
    const isLast = state.weekIdx === bookData.weeks.length - 1 && state.dayIdx === currentWeek.days.length - 1;

    document.getElementById('prevBtn').disabled = isFirst;
    document.getElementById('prevBtn').style.opacity = isFirst ? 0.5 : 1;

    document.getElementById('nextBtn').disabled = isLast;
    document.getElementById('nextBtn').style.opacity = isLast ? 0.5 : 1;

    document.getElementById('page-indicator').innerText = `Día ${state.dayIdx + 1} de ${currentWeek.days.length}`;

    // Guardar posición
    saveState();
}

function renderMenu() {
    const menuDiv = document.getElementById('menu-content');
    let html = '';
    bookData.weeks.forEach((week, wIdx) => {
        html += `<div class="menu-week-title">${week.title}</div>`;
        week.days.forEach((day, dIdx) => {
            const isActive = (wIdx === state.weekIdx && dIdx === state.dayIdx);
            html += `<button class="menu-item ${isActive ? 'active' : ''}" onclick="goTo(${wIdx}, ${dIdx})">
                ${isActive ? '👉 ' : ''} ${day.title}
            </button>`;
        });
    });
    menuDiv.innerHTML = html;
}

// --- LÓGICA DE DATOS ---
function saveAnswer(id, value) {
    state.answers[id] = value;
    saveState();
}

function toggleCheck(id, option) {
    const current = state.answers[id] || [];
    if (current.includes(option)) {
        state.answers[id] = current.filter(x => x !== option);
    } else {
        state.answers[id] = [...current, option];
    }
    saveState();
    renderContent();
}

function saveState(syncToCloud = true) {
    localStorage.setItem('vidaDiscipularStateV6Full', JSON.stringify(state));
    if (syncToCloud && typeof window.saveToFirestore === 'function') {
        window.saveToFirestore();
    }
}

// --- NAVEGACIÓN Y AJUSTES ---
function goTo(w, d) {
    state.weekIdx = w;
    state.dayIdx = d;
    toggleMenu();
    renderContent();
    renderMenu();
    window.scrollTo(0, 0);
}

function navNext() {
    const currentWeek = bookData.weeks[state.weekIdx];
    if (state.dayIdx < currentWeek.days.length - 1) {
        state.dayIdx++;
    } else if (state.weekIdx < bookData.weeks.length - 1) {
        state.weekIdx++;
        state.dayIdx = 0;
    }
    renderContent();
    renderMenu();
    window.scrollTo(0, 0);
}

function navPrev() {
    if (state.dayIdx > 0) {
        state.dayIdx--;
    } else if (state.weekIdx > 0) {
        state.weekIdx--;
        state.dayIdx = bookData.weeks[state.weekIdx].days.length - 1;
    }
    renderContent();
    renderMenu();
    window.scrollTo(0, 0);
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
    saveState();
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#111827");
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#ffffff");
    }
    // Actualizar texto del botón si existe (se renderizará dinámicamente)
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    }
}

function toggleSettings() {
    document.getElementById('settingsPanel').classList.toggle('open');
}

function changeFontSize(delta) {
    state.fontSize = Math.max(14, Math.min(28, state.fontSize + delta));
    document.getElementById('font-display').innerText = state.fontSize;
    renderContent();
    saveState();
}

function updateStyles() {
    // Placeholder para futuras actualizaciones de estilo
}

// --- IMPORTAR / EXPORTAR ---
function downloadData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.answers));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "mis_respuestas_vida_discipular.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function uploadData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const json = JSON.parse(e.target.result);
            state.answers = json;
            saveState();
            renderContent();
            alert("¡Progreso cargado correctamente!");
            toggleSettings();
        } catch (err) {
            alert("Error al leer el archivo.");
        }
    };
    reader.readAsText(file);
}

// Iniciar
init();
