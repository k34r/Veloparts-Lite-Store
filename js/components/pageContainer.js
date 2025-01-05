// Контейнер для страниц
export function getPageContainer() {
    const main = document.createElement("main")
    main.classList.add("page__container")

    return main
}