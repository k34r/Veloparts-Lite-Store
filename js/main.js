import {getHeader} from "./components/header.js"
import {getPageContainer} from "./components/pageContainer.js"

const header = getHeader()
const pageContainer = getPageContainer()

// Навигация загрузки модулей страницы
export async function navigation(page,id) {
    pageContainer.innerHTML = ""

    switch(page) {
        case "product":
            const productModule = await import(`./pages/productPage${id}.js`)
            const productPage = productModule.getProductPage()
            pageContainer.append(productPage)
        break
        case "bascet":
            const bascetModule = await import("./pages/bascetPage.js")
            const bascetPage = bascetModule.getBascetPage()
            pageContainer.append(bascetPage)
        break
        default:
            const mainModule = await import("./pages/mainPage.js")
            const mainPage = mainModule.getMainPage()
            pageContainer.append(mainPage)
        break
    }
}

navigation()

const app = document.getElementById("app")
app.append(header,pageContainer)
