console.log("Web App")
// import { LocalDataSource } from "./data/localDataSource"
import { RemoteDataSource } from "./data/remoteDataSource"
//import { DomDisplay } from "./domDisplay"
import { HtmlDisplay } from "./htmlDisplay"
import "bootstrap/dist/css/bootstrap.css"

const ds = new RemoteDataSource()

async function displayData(): Promise<HTMLElement> {
    const display = new HtmlDisplay(ds)
    return display.getContent()
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app")!
            rootElement.innerHTML = ""
            rootElement.appendChild(elem)
        })
    }
}
