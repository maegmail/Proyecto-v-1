document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://proyecto-v-1.onrender.com';

    // Manejar el formulario de registro de usuario
    document.getElementById('form-registrar-usuario').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const nombre = formData.get('nombre');
        const email = formData.get('email');

        fetch(`${apiUrl}/api/registrar-usuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email })
        })
        .then(response => response.json())
        .then(data => console.log('Usuario registrado:', data))
        .catch(error => console.error('Error:', error));
    });

    // Manejar el formulario de validación de ingreso (inicio de sesión)
    document.getElementById('form-validar-ingreso').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        fetch(`${apiUrl}/api/validar-ingreso`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => console.log('Ingreso validado:', data))
        .catch(error => console.error('Error:', error));
    });

    // Manejar el formulario de creación de descriptivo
    document.getElementById('form-crear-descriptivo').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const titulo = formData.get('titulo');
        const descripcion = formData.get('descripcion');

        fetch(`${apiUrl}/api/crear-descriptivo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo, descripcion })
        })
        .then(response => response.json())
        .then(data => console.log('Descriptivo creado:', data))
        .catch(error => console.error('Error:', error));
    });

    // Manejar el formulario de notificación a usuarios
    document.getElementById('form-notificar-usuarios').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const mensaje = formData.get('mensaje');

        fetch(`${apiUrl}/api/notificar-usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mensaje })
        })
        .then(response => response.json())
        .then(data => console.log('Usuarios notificados:', data))
        .catch(error => console.error('Error:', error));
    });
});

// Función para abrir el modal
function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
}

// Funciones adicionales
function editarDescriptivo() {
    console.log('Editar Descriptivo');
}

function borrarDescriptivo() {
    console.log('Borrar Descriptivo');
}

function imprimirDescriptivo() {
    console.log('Imprimir Descriptivo');
}
