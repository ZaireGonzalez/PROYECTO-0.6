document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registro realizado exitosamente');
    document.getElementById('registerForm').style.display = 'none';
    showMenu();
});

function showMenu() {
    const menuModules = document.querySelectorAll('.module');
    menuModules.forEach(module => module.style.display = 'none');
    document.getElementById('modules').style.display = 'block';
}

function goBack() {
    const menuModules = document.querySelectorAll('.module');
    menuModules.forEach(module => module.style.display = 'none');
    showMenu();
}

function logout() {
    alert('Sesión cerrada');
    document.location.reload();
}
