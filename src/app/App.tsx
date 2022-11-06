import routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import NavComponent from "./shared/components/NavComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
