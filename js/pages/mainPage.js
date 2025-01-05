import {getProductCard} from "../components/productCard.js"

// Главная страница
export function getMainPage() {
    const page = document.createElement("div")
    page.classList.add("main__page")

    const list = document.createElement("div")
    list.classList.add("product__list")

    list.append(
        getProductCard("Товар 1", 100, 1),
        getProductCard("Товар 2", 200, 2),
        getProductCard("Товар 3", 300, 3)
    )

    page.append(list)

    return page
}