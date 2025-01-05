import {getTitleH2} from "../components/titleH2.js"
import {getDescription} from "../components/description.js"

// Страница корзины
export function getBascetPage() {
    const page = document.createElement("div")
    page.classList.add("bascet__page")

    const title = getTitleH2("Корзина")
    const desc = getDescription("Страница в разработке")

    page.append(title,desc)

    return page
}
