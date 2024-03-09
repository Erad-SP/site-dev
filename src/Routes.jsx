import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Mainpage from "pages/Mainpage";
import Inscrio from "pages/Inscrio";
import ChamadadeTrabalhos from "pages/ChamadadeTrabalhos";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mainpage",
      element: <Mainpage />,
    },
    {
      path: "inscrio",
      element: <Inscrio />,
    },
    {
      path: "chamadadetrabalhos",
      element: <ChamadadeTrabalhos />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
