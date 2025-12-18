import { RouterProvider } from "react-router-dom";
import routes from "./router";

import "@/assets/react-pretty-box.css";
import "@/assets/docs.css";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
