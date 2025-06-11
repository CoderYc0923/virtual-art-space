export const routes = [
  {
    path: "/",
    title: "nav.home",
    hidden: true
  },
  {
    path: "/about",
    title: "nav.about",
  },
  {
    path: "/projects",
    title: "nav.projects",
  },
  {
    path: "/booking",
    title: "nav.booking",
  },
];

export const navRoutes = routes.filter(route => !route.hidden)
