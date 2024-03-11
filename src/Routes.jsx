import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import PaginaPrincipal from "pages/PaginaPrincipal";
import Inscricao from "pages/Inscricao";
import ChamadadeTrabalhos from "pages/ChamadadeTrabalhos";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <PaginaPrincipal />,
    },
    {
      path: "inscricao",
      element: <Inscricao />,
    },
    {
      path: "chamadadetrabalhos",
      element: <ChamadadeTrabalhos />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
