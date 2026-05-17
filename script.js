const display = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input;
}

function cleardisp(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    } 
}

// Theme toggle: loads theme CSS from assets/themes and persists choice
const themeLink = document.getElementById('theme-link');
const themeToggle = document.getElementById('theme-toggle');
if(themeLink && themeToggle){
    const saved = localStorage.getItem('calc-theme') || 'light';
    themeLink.href = `assets/themes/${saved}.css`;
    themeToggle.textContent = saved === 'light' ? '🌙' : '☀️';
    themeToggle.addEventListener('click', () => {
        const current = themeLink.getAttribute('href').includes('light') ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        themeLink.href = `assets/themes/${next}.css`;
        themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
        localStorage.setItem('calc-theme', next);
    });
}