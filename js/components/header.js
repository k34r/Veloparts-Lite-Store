import {navigation} from "../main.js"

// Шапка с навигацией
export function getHeader() {

    const header = document.createElement("header")
    header.classList.add("header")

    const container = document.createElement("div")
    container.classList.add("header__container")

    const title = document.createElement("h1")
    title.classList.add("header__title",)
    title.textContent = "Велозапчасти Лайт"

    const nav = document.createElement("nav")
    nav.classList.add("nav")

    // Ссылка на главную
    let link1 = document.createElement("a")
    link1.href = ""
    link1.classList.add("btn")
    link1.textContent = "На главную"

    link1.addEventListener("click", function(event){
        event.preventDefault()
        navigation()
    })

    // Ссылка корзина
    let link2 = document.createElement("a")
    link2.href = ""
    link2.classList.add("btn")
    link2.textContent = "Корзина"

    link2.addEventListener("click", function(event){
        event.preventDefault()
        navigation("bascet")
    })

    header.append(container)
    container.append(title)
    container.append(nav)
    nav.append(link1,link2)

    return header
}