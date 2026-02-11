const THEMES = ["light", "dark"]

function initThemeSwitcher() {
    const themeSwitch = document.querySelector(".theme-switch")
    const radios = themeSwitch.querySelectorAll("input[type='radio']")

    for (var i = 0; i < radios.length; ++i) {
        radios[i].addEventListener("click", themeSwitcherChange)
    }
}

function themeSwitcherChange(event) {
    if (document.documentElement.dataset.theme === event.target.value) {
        document.documentElement.dataset.theme = THEMES.find((theme) => theme !== event.target.value)
        const input = document.querySelector(`.theme-switch input[value="${document.documentElement.dataset.theme}"]`)
        input.checked = true
        return
    }

    document.documentElement.dataset.theme = event.target.value
}

initThemeSwitcher()
