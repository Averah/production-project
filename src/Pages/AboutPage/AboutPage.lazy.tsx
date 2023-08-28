import { lazy } from "react";

//@ts-ignore
const AboutPageLazy = lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import("./AboutPage")), 1500)
}
))

export default AboutPageLazy;