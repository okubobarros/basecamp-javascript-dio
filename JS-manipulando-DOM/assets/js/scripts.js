function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    myButton.classList.toggle(darkModeClass);
    myH1.classList.toggle(darkModeClass);
    myBody.classList.toggle(darkModeClass);
    myFooter.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(myBody.classList.contains(darkModeClass)) {
        myButton.innerHTML = lightMode;
        myH1.innerHTML = darkMode + "ON";
        return;
    }
    myButton.innerHTML = darkMode;
    myH1.innerHTML = lightMode + "ON";
}

const darkModeClass = 'dark-mode'
const myButton = document.getElementById("mode-selector");
const myH1 = document.getElementById("page-title");
const myBody = document.getElementsByTagName("body")[0];
const myFooter = document.getElementsByTagName("footer")[0];

myButton.addEventListener('click', changeMode)

