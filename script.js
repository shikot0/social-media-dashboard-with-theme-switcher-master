const darkModeToggle = document.getElementById('dark-mode-checkbox');
const main = document.querySelector('main')

darkModeToggle.checked = true; 
darkModeToggle.addEventListener('input', () => {
    if(darkModeToggle.checked) {
        main.classList.remove('light-mode')
    }else {
        main.classList.add('light-mode') 
    }
})