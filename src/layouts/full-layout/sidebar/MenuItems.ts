interface MenuItem {
    navlabel?: boolean;
    subheader?: string;
    icon: string;
    href: string;
    title?: string;
  }
  
  const Menuitems: MenuItem[] = [
    {
      navlabel: true,
      subheader: "MENU",
      icon: "mdi mdi-dots-horizontal",
      href: "Dashboard",
    },
    {
      title: "Landing",
      icon: "home",
      href: "/ey-data-profiler",
    },
    {
      title: "Landindsadasg",
      icon: "home",
      href: "/ey-data-dsadas",
    },
  ];
  
  export default Menuitems;