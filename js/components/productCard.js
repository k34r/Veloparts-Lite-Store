import {navigation} from "../main.js"

// Карточка товара
export function getProductCard(title,price,id) {
    const card = document.createElement("div")
    card.classList.add("product__card")

    const productLink = document.createElement("a")
    productLink.classList.add("card__link")
    productLink.href = ""
    card.append(productLink)

    productLink.addEventListener("click", function(event){
            event.preventDefault()
            navigation("product", id)
        })

    const cardTitle = document.createElement("h2")
    cardTitle.classList.add("card__title")
    cardTitle.textContent = title

    const cardPrice = document.createElement("h2")
    cardPrice.classList.add("card__price")
    cardPrice.textContent = `${price} руб.`

    card.append(cardTitle,cardPrice)

    return card
}