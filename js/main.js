import {getHeader} from "./components/header.js"
import {getPageContainer} from "./components/pageContainer.js"

// Страницы
import {getMainPage} from "./pages/mainPage.js"
import {getProductPage} from "./pages/productPage.js"
import {getBascetPage} from "./pages/bascetPage.js"











const header = getHeader()
const pageContainer = getPageContainer()

export function navigation(page) {
    pageContainer.innerHTML = ""

    switch(page) {
        case "product":
            const productPage = getProductPage("Продукт")
            pageContainer.append(productPage)
        break
        case "bascet":
            const bascetPage = getBascetPage()
            pageContainer.append(bascetPage)
        break
        default:
            const mainPage = getMainPage()
            pageContainer.append(mainPage)
        break
    }
}

navigation()

const app = document.getElementById("app")
app.append(header,pageContainer)
