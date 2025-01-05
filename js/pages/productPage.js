import {getTitleH2} from "../components/titleH2.js"
import {getDescription} from "../components/description.js"

// Страница товара
export function getProductPage(title) {
    const page = document.createElement("div")
    page.classList.add("card__page")

    const cardTitle = getTitleH2("Название товара")

    const desc = getDescription("Страница в разработке")

    page.append(cardTitle,desc)

    return page
}