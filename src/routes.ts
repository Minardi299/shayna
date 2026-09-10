import { index, layout, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  layout("layout.tsx", [
    index("pages/home.tsx"),
    route("services", "pages/services.tsx"),
    route("privacy", "pages/privacy.tsx"),
    route("*", "pages/not-found.tsx"),
  ]),
] satisfies RouteConfig
