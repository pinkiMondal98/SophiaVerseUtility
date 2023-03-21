import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  const [iscurrentState, setIscurrentState] = useState(null);

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    if (iscurrentState === "Dashboard") {
      history("/dashboard");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState === "Clients") {
      history("/clients");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState === "Profile") {
      history("/profile");
      document.body.classList.add("twocolumn-panel");
    }

  }, [
    history,
    iscurrentState,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "bx bx-home",
      link: "/dashboard",
      click: function (e) {
        e.preventDefault();
        setIscurrentState("Dashboard");
      },
    },

    {
      id: "Activities",
      label: "Activities",
      icon: "bx bx-task",
      link: "/activities/activity-list",
      click: function (e) {
        e.preventDefault();
        setIscurrentState("Activities");
      },
    },
    {
      id: "profile",
      label: "Profile",
      icon: "bx bx-user-circle",
      link: "/profile",
      click: function (e) {
        e.preventDefault();
        setIscurrentState("Profile");
      },
    },

  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
