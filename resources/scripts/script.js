const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

let mode = localStorage.getItem('theme');
console.log('first state: ' + mode);
// Switch images based on mode
const replaceImages = () => {
    image1.src = `/resources/images/undraw_proud_coder_${mode}.svg`;
    image2.src = `/resources/images/undraw_feeling_proud_${mode}.svg`;
    image3.src = `/resources/images/undraw_conceptual_idea_${mode}.svg`;
}

// Switch between toggle icons (sun and moon)
const switchIcons = () => {
    if (mode === 'dark') {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
}

// Switch between light and dark mode
const toggleLightDarkMode = () => {
    let isDark = mode === 'dark' ? true : false;
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    replaceImages();
    switchIcons();
    console.log('switched to ' + mode);
}

// Switch theme dynamically
const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        mode = 'dark';
        toggleLightDarkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        mode = 'light';
        localStorage.setItem('theme', 'light');
        toggleLightDarkMode();
    }
}

// Event Listener when toggleSwitch is toggled
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for preffered theme
document.documentElement.setAttribute('data-theme', mode);
if (mode === 'dark') {
    toggleSwitch.checked = true;
    toggleLightDarkMode();
}

