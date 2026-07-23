import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/components/layout/root-layout";
import { AiVoiceAgentCaseStudyPage } from "@/pages/ai-voice-agent-case-study-page";
import { GatePulseCaseStudyPage } from "@/pages/gatepulse-case-study-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/work/gatepulse",
        element: <GatePulseCaseStudyPage />,
      },
      {
        path: "/work/ai-voice-agent",
        element: <AiVoiceAgentCaseStudyPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);