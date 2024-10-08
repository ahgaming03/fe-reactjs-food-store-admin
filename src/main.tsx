import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "./components/ui/toaster.tsx";

import { Provider } from "react-redux";
import { store } from "@/states/store";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Analytics />
      <SpeedInsights />
      <Toaster />
    </Provider>
  </StrictMode>,
);
