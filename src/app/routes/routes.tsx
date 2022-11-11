import ListPage from "../pages/list/ListPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const routes = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<HomePage />} />,
        <Route path="/login" element={<LoginPage />} />,
        <Route path="/list" element={<ListPage />} />
    ])
)

export default routes;