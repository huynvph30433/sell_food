import navigo from "navigo";
import HomePages from "./pages/HomePages";
import { render, router } from "./lib";

const app = document.querySelector('#app');

router.on("/", () => render (HomePages, app));

router.resolve();