import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./pages/components/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>
  // </React.StrictMode>
);
