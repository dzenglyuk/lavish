import HomePage from "../../pages/HomePage/Main";
import ServicesPage from "../../pages/ServicesPage/Main";
import ProductsPage from "../../pages/ProductsPage/Main";

const pages = [
    { path: '/', title: 'Home', component: HomePage },
    { path: '/services', title: 'Services', component: ServicesPage },
    { path: '/products', title: 'Products', component: ProductsPage }
];

export default pages;