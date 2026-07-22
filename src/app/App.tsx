import { RouterProvider } from "react-router-dom";

import { router } from "@/routes/router";
import { ToolboxChapter } from "@/components/chapters/toolbox/toolbox-chapter";

export default function App() {
  return <RouterProvider router={router} />;
}