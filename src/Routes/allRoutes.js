import React from "react";
import { Navigate } from "react-router-dom";
import { ActivityDetail } from "../Components/Activities/ActivityDetail.js";
import { ActivityList } from "../Components/Activities/ActivityList.js";
import TwoStep from "../Components/TwoStep.js";
import ComingSoonPage from "../DemoPages/Riya/Pages/ComingSoonPage.js";
import CreateProfilePage from "../DemoPages/Riya/Pages/CreateProfilePage.js";
import LoginPage from "../DemoPages/Riya/Pages/LoginPage.js";
import { ProfilePage } from "../DemoPages/Riya/Pages/ProfilePage.js";
import Dashboard from "../DemoPages/Vishal/Dashboard/index.js";
import Activity from "../DemoPages/Vishal/Pages/Activity.js";

const authProtectedRoutes = [

  { path: "/activities", component: <Activity /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/activities/activity-detail", component: <ActivityDetail /> },
  { path: "/activities/activity-list", component: <ActivityList /> },
  {path:"/profile" , component:<ProfilePage/>},
  { path: "/coming-soon", component: <ComingSoonPage/> },

  { path: "*", component: <Navigate to="/login" /> },

];

const publicRoutes = [
  { path: "/login", component: <LoginPage/> },
  { path: "/two-step", component: <TwoStep /> },
  { path: "/sign-up", component: <CreateProfilePage/> },

];

export { authProtectedRoutes, publicRoutes };
