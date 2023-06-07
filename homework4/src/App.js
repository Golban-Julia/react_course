import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import Nav from "./components/Nav/Nav";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "popular",
        element: <Popular/>,
      },
      {
        path: "battle",
        element: <Battle/>,
      },
      {
        path: "*",
        element: (
           <h2>Error</h2>
          ),
      },
    ]
  },
  
]);

const App = () => (
  <div className='container'>
    <RouterProvider router={router} />
  </div>
)

export default App;
