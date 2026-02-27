import { createRoot } from "react-dom/client";
import { preloadAllImages } from "./lib/preloadImages";

// Kick off image preloading immediately, before React renders
preloadAllImages();
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
