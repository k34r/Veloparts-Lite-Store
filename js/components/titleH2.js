// Заголовок h2
export function getTitleH2(text) {
    const title = document.createElement("h2")
    title.classList.add("title__h2")
    title.textContent = text

    return title
}