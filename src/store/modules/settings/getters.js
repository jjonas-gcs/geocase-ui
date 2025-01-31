import i18n from "@/i18n";

const getters = {
  externalResources: () => {
    return [
      {
        icon: "fas fa-sitemap",
        text: i18n.t("resources.cetaf"),
        url: "http://cetaf.org",
      },
      {
        icon: "fas fa-microscope",
        text: i18n.t("resources.dissco"),
        url: "http://www.dissco.eu",
      },
      {
        icon: "fas fa-network-wired",
        text: i18n.t("resources.biocase"),
        url: "https://www.biocase.org/",
      },
      {
        icon: "fas fa-leaf",
        text: i18n.t("resources.gbif"),
        url: "https://www.gbif.org/",
      },
      {
        icon: "far fa-hand-paper",
        text: i18n.t("resources.abcd-efg"),
        url: "https://www.tdwg.org/community/esp/efg/",
      },
      {
        icon: "fab fa-github",
        text: i18n.t("resources.geocase2-github"),
        url: "https://github.com/geocollections/geocase-ui",
      },
      {
        icon: "fas fa-database",
        text: i18n.t("resources.geocase1"),
        url: "http://old.geocase.eu",
      },
      {
        icon: "fas fa-laptop-code",
        text: i18n.t("resources.geocase-api"),
        url: "https://api.geocase.eu/",
      },
    ];
  },

  routes: () => {
    return [
      {
        text: i18n.t("header.home"),
        to: "/",
        name: "FrontPage",
        icon: "fas fa-home",
        isStatic: false,
      },
      {
        text: i18n.t("header.search"),
        to: "/search",
        name: "Search",
        icon: "fas fa-search",
        isStatic: false,
      },
      {
        text: i18n.t("header.about"),
        to: "/about",
        name: "About",
        icon: "fas fa-info-circle",
        isStatic: true,
      },
      {
        text: i18n.t("header.access"),
        to: "/access",
        name: "Access",
        icon: "fas fa-database",
        isStatic: true,
      },
      {
        text: i18n.t("header.tutorial"),
        to: "/tutorial",
        name: "Tutorial",
        icon: "far fa-question-circle",
        isStatic: true,
      },
      {
        text: i18n.t("header.efg"),
        to: "/efg",
        name: "Efg",
        icon: "fas fa-info-circle",
        isStatic: true,
      },
      {
        text: i18n.t("header.partners"),
        to: "/partners_and_providers",
        name: "Partners and providers",
        icon: "far fa-handshake",
        isStatic: true,
      },
      {
        text: i18n.t("header.links"),
        to: "/links",
        name: "Links",
        icon: "fas fa-link",
      },
    ];
  },

  staticPages: (state, getters) => {
    return getters.routes.filter((item) => item.isStatic);
  },
};

export default getters;
