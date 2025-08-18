import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Philosophy from "./pages/Philosophy";
import Quality from "./pages/Quality";
import Finance from "./pages/Finance";
import Training from "./pages/Training";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Layout from "./layout";
// import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "about-us", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "philosophy", element: <Philosophy /> },
      { path: "quality", element: <Quality /> },
      { path: "finance", element: <Finance /> },
      { path: "training", element: <Training /> },
      { path: "facilities", element: <Facilities /> },
      { path: "contact", element: <Contact /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
