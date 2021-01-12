function initThemeSwitcher() {
    const themeSwitch = document.querySelector(".theme-switch");
    const radios = themeSwitch.querySelectorAll("input[type='radio']");

    for (var i = 0; i < radios.length; ++i) {
        radios[i].addEventListener("click", teamSwticherChange);
    }
}

function teamSwticherChange(event) {
    document.documentElement.dataset.theme = event.target.value;
}

initThemeSwitcher();
