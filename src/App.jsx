import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "invoice/:id",
          element: <Invoice />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
