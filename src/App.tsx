import { RouterProvider } from "react-router-dom";
import routes from "./router";

import "@/assets/react-pretty-box.scss";
import "@/assets/docs.scss";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
