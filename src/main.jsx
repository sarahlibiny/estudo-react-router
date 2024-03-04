import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import App from "./App.jsx";
import NotFound from "./routes/NotFound.jsx";
import AboutDetails from "./routes/AboutDetails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
// ]);

//rotas filhas, app esta um nivel acima
//errorElement configura uma pagina n encontrada
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      //nested routes ou dynamic routes
      {
        path: "about/:id",
        element: <AboutDetails />,
      },
      //redirecionamento quando a pagina eh antiga, inexistente
      {
        path: "oldAbout",
        element: <Navigate to="/about" />,
      },
    ],
  },
]);

//router provider recebe router como prop
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
