import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Frame, FramePreview } from "./screens/Frame";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FramePreview />
  </StrictMode>,
);
