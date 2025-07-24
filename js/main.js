// Función principal para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover clase active de todos los botones
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
}

// Función para ocultar todas las secciones
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
}


// Función para cargar contenido real desde archivo externo
async function loadFromFile(filename) {
    try {
        const response = await fetch(filename);
        const html = await response.text();
        document.getElementById('dynamic-content').innerHTML = html;
        
        hideAllSections();
        document.getElementById('dynamic-content').innerHTML = 
            `<div class="content-section active">${html}</div>`;
            
    } catch (error) {
        console.error('Error cargando archivo:', error);
        alert('No se pudo cargar el contenido externo');
    }
}