import { lazy } from "react";

const MainPageLazy = lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import("./MainPage")), 1500)
}
))



export default MainPageLazy;