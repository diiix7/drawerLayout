import Kiosk from "../screens/Home";
import About from "../screens/About";
export const routes = {
    home: {
        path: '/kiosk/',
        screen: Kiosk,
    },
    about: {
        path: '/about',
        screen: About,
    },
};
