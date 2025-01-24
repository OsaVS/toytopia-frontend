import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
