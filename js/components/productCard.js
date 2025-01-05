// Карточка товара
export function getProductCard(title,price) {
    const card = document.createElement("div")
    card.classList.add("product__card")

    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("card__title")
    cardTitle.textContent = title

    const cardPrice = document.createElement("h2")
    cardPrice.classList.add("card__price")
    cardPrice.textContent = `${price} руб.`

    const addBascet = document.createElement("button")
    addBascet.classList.add("card__btn")
    addBascet.textContent = "В корзину"

    card.append(cardTitle,cardPrice,addBascet)

    return card
}