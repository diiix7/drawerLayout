import Kiosk from "../screens/Kiosk";
import SubServices from "../screens/SubServices";
export const routes = {
    home: {
        path: '/kiosk/',
        screen: Kiosk,
    },
    profile: {
        path: '/subservices',
        screen: SubServices,
    },
};
