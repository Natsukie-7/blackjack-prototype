import { lazy, ParentComponent } from "solid-js";
import { AppContextProvider } from "./app.context";
import { PublicAppContextProvider } from "./publicApp.context";
import { RouteDefinition } from "@solidjs/router";

// Componente Layout para rotas autenticadas
const PrivateRoutes: ParentComponent = (props) => {
  return <AppContextProvider>{props.children}</AppContextProvider>;
};

// Componente Layout para rotas públicas
const PublicLayout: ParentComponent = (props) => {
  return <PublicAppContextProvider>{props.children}</PublicAppContextProvider>;
};

export const PublicRoutes: Array<RouteDefinition> = [
  {
    path: "/auth",
    component: PublicLayout,
    children: [
      {
        path: ["/register", "/login"],
        component: lazy(() => import("@components/pages/register/register")),
      },
    ],
  },
];

export const AuthRoutes: Array<RouteDefinition> = [
  {
    path: "/",
    component: PrivateRoutes,
    children: [
      {
        path: "/",
        component: lazy(() => import("@components/pages/main/main")),
      },
      {
        path: "/auth/logout",
        component: lazy(() => import("@assets/logout")),
      },
      {
        path: "/*all",
      },
    ],
  },
];

export const Routes: Array<RouteDefinition> = [...PublicRoutes, ...AuthRoutes];
