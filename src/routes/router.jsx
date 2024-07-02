import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarWithSearch from "../components/SidebarWithSearch";
import Analytics from "../pages/Analytics";
import HomePage from "../pages/Home/HomePage";
import Reporting from "../pages/Reporting";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile";
import ProfileUser from "../pages/Profile/Profile-User";
import HistoryPurchase from "../pages/Profile/History-Purchase";
import UpgradePlan from "../pages/Profile/Upgrade-Plan";
import Dashboard from "../pages/Profile/Dashboard";
import Company from "../pages/Company/Company";
import ProfileCompany from "../pages/Company/Menu/Profile-Company";
import SettingOutgoingMail from "../pages/Profile/Setting-Outgoing-Mail";
import SignUp from "../pages/SignUp/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import VerifyEmail from "../pages/Verify/VerifyEmail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "verifyEmail",
    element: <VerifyEmail />,
  },
 
  {
    path: "dashboard",
    element: <SidebarWithSearch />,
    children: [
      {
        path: "Dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "Dashboard/reporting",
        element: <Reporting />,
      },
      {
        path: "Dashboard/company",
        element: <Company />,
        children: [
          {
            path: "Dashboard/company/profile-company",
            element: <ProfileCompany />,
          },
        ],
      },
      {
        path: "Dashboard/profile",
        element: <Profile />,
        children: [
          {
            path: "Dashboard/profile/profile-user",
            element: <ProfileUser />,
          },
          {
            path: "Dashboard/profile/setting-outgoing-mail",
            element: <SettingOutgoingMail />,
          },
          {
            path: "Dashboard/profile/dashboard",
            element: <Dashboard />,
          },
          {
            path: "Dashboard/profile/history-purchase",
            element: <HistoryPurchase />,
          },
          {
            path: "Dashboard/profile/upgrade-plan",
            element: <UpgradePlan />,
          },
        ],
      },
      {
        path: "dashboard/authentication/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
