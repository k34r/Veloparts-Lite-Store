import {getTitleH2} from "../components/titleH2.js"
import {getDescription} from "../components/description.js"

// Страница товара
export function getProductPage(title) {
    const page = document.createElement("div")
    page.classList.add("card__page")

    const cardTitle = getTitleH2("Название товара 1")

    const desc = getDescription("Страница в разработке")

    const addBascet = document.createElement("button")
    addBascet.classList.add("card__btn")
    addBascet.textContent = "В корзину"

    page.append(cardTitle,desc,addBascet)

    return page
}