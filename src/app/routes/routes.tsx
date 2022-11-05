import Login from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const routes = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<HomePage />} />,
        <Route path="/login" element={<Login />} />
    ])
)

export default routes;