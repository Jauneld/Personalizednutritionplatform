import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Survey } from "./pages/Survey";
import { MealPlan } from "./pages/MealPlan";
import { Dashboard } from "./pages/Dashboard";
import { Subscription } from "./pages/Subscription";
import { Consultation } from "./pages/Consultation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "survey", Component: Survey },
      { path: "meal-plan", Component: MealPlan },
      { path: "dashboard", Component: Dashboard },
      { path: "subscription", Component: Subscription },
      { path: "consultation", Component: Consultation },
    ],
  },
]);
