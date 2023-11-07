import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Theme
      appearance="light-theme"
      accentColor="white"
      grayColor="gray"
      // panelBackground="solid"
      scaling="100%"
    >
      <App />
    </Theme>
  </>
);
