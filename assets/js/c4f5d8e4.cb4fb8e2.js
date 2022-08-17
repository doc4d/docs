exports.id = 64195;
exports.ids = [64195];
exports.modules = {

/***/ 3173:
/***/ ((module) => {

// Exports
module.exports = {
	"tilesImage": "tilesImage_S71w",
	"tilesHeading": "tilesHeading_B4CK",
	"banner": "banner_wvwv",
	"hero": "hero_syme",
	"heroInner": "heroInner_VWeJ",
	"heroProjectTagline": "heroProjectTagline_EkV5",
	"heroTitleTextHtml": "heroTitleTextHtml_zYwv",
	"heroLogo": "heroLogo_jM6J",
	"jack-in-the-box": "jack-in-the-box_cF72"
};


/***/ }),

/***/ 76933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var homepageTiles_exports = {};
__export(homepageTiles_exports, {
  default: () => homepageTiles_default
});
module.exports = __toCommonJS(homepageTiles_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __toESM(__webpack_require__(6573));
var import_Link = __toESM(__webpack_require__(70393));
const Sections = [
  {
    title: (0, import_Translate.translate)({
      message: "Getting Started",
      id: "homepage.sections.getting-started.title"
    }),
    image: {
      src: "/img/illu_GettingStarted.png",
      width: 1009.54,
      height: 717.96
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "GettingStarted/installation"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Installation")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "GettingStarted/creating"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Working with a project")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Core Development",
      id: "homepage.sections.core-development.title"
    }),
    image: {
      src: "/img/illu_CoreDevelopment.png",
      width: 1108,
      height: 731.18
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Project/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Project Management")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Concepts/about"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Language Concepts")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://doc.4d.com/4Dv19R4/4D/19-R4/4D-Language-Reference.100-5738429.en.html"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Language Reference (4D Doc Center)")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "ORDA/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Object Relational Data Access (ORDA)")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "API/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Class API Reference")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "code-editor/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Handling code")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Debugging/basics"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Debugging")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "settings/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Settings")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Preferences/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Preferences")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Administration",
      id: "homepage.administration.title"
    }),
    image: {
      src: "/img/illu_Administration.png",
      width: 1137.97,
      height: 736.21
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "ServerWindow/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D Server Administration Window")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Admin/webAdmin"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Web Administration")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Admin/cli"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Command Line Interface")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Admin/tls"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "TLS Protocol")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Admin/licenses"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Licenses & Data Collection")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Users/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Access Rights")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "MSC/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Maintenance and Security Center")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Backup/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Backup and Restore")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Extensions",
      id: "homepage.sections.textensions.title"
    }),
    image: {
      src: "/img/illu_Extensions.png",
      width: 1038.23,
      height: 693.31
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Extensions/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Overview")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "ViewPro/getting-started"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D View Pro")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://github.com/4d/4D-Mobile-App-Server"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D Mobile App Server")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://github.com/4d/4D-NetKit"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D NetKit")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://doc.4d.com/4Dv19/4D/19/4D-Progress.100-5461799.en.html"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D Progress")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://doc.4d.com/4Dv19/4D/19/4D-SVG-Component.300-5462064.en.html"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D SVG")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D Widgets")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://github.com/4d/4D-WritePro-Interface"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D Write Pro Interface")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Extensions/develop-components"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Developing Components")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Extensions/develop-plug-ins"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Developing Plugins")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Web Applications",
      id: "homepage.sections.web-applications.title"
    }),
    image: {
      src: "/img/illu_WebApplication.png",
      width: 1137,
      height: 776.59
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "WebServer/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Web Server")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "WebServer/gettingStarted"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Web Development")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "REST/gettingStarted"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "REST Server")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Desktop Applications",
      id: "homepage.sections.desktop-applications.title"
    }),
    image: {
      src: "/img/illu_DesktopApplication.png",
      width: 1108,
      height: 731.18
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Desktop/clientServer"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Client/Server")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "FormEditor/forms"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Forms")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "FormEditor/jsonReference"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Form Properties")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "FormObjects/formObjectsOverview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Form Objects")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "FormObjects/propertiesReference"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Form Object Properties")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Events/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Form Events")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Menus/overview"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Menus")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Desktop/user-settings"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "User Settings")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "Desktop/building"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Build Application")))
  },
  {
    title: (0, import_Translate.translate)({
      message: "Mobile Applications",
      id: "homepage.sections.mobile-applications.title"
    }),
    image: {
      src: "/img/illu_MobileApplication.png",
      width: 1038.23,
      height: 693.31
    },
    links: /* @__PURE__ */ import_react.default.createElement("div", {
      className: "homepageLinks"
    }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://developer.4d.com/go-mobile"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Go Mobile with 4D")), /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
      to: "https://developer.4d.com/4d-for-ios/docs/en/overview.html"
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "4D for iOS (Archive)")))
  }
];
var homepageTiles_default = Sections;


/***/ }),

/***/ 95327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pages_exports = {};
__export(pages_exports, {
  default: () => Home
});
module.exports = __toCommonJS(pages_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Link = __toESM(__webpack_require__(70393));
var import_Translate = __toESM(__webpack_require__(6573));
var import_useDocusaurusContext = __toESM(__webpack_require__(11368));
var import_useBaseUrl = __toESM(__webpack_require__(25026));
var import_Layout = __toESM(__webpack_require__(38043));
var import_homepageTiles = __toESM(__webpack_require__(76933));
var import_styles_module = __toESM(__webpack_require__(3173));
function HeroBanner() {
  const context = (0, import_useDocusaurusContext.default)();
  const { siteConfig = {} } = context;
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.hero,
    "data-theme": "dark"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.heroInner
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: import_styles_module.default.heroProjectTagline
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    alt: (0, import_Translate.translate)({ message: "4D banner logo" }),
    className: import_styles_module.default.heroLogo,
    src: (0, import_useBaseUrl.default)("/img/banner-object.png"),
    width: "350",
    height: "350"
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_styles_module.default.heroTitleTextHtml,
    dangerouslySetInnerHTML: {
      __html: (0, import_Translate.translate)({
        id: "homepage.hero.title",
        message: "Documentation for 4D developers"
      })
    }
  }))));
}
function Tile({
  tile,
  className
}) {
  const { withBaseUrl } = (0, import_useBaseUrl.useBaseUrlUtils)();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)("col", className)
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "tile"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    className: import_styles_module.default.tilesImage,
    alt: tile.title,
    width: Math.floor(tile.image.width),
    height: Math.floor(tile.image.height),
    src: withBaseUrl(tile.image.src),
    loading: "lazy"
  }), /* @__PURE__ */ import_react.default.createElement("h3", {
    className: (0, import_clsx.default)(import_styles_module.default.tilesHeading)
  }, tile.title), /* @__PURE__ */ import_react.default.createElement("p", null, tile.links)));
}
function TilesContainer() {
  const firstRow = import_homepageTiles.default.slice(0, 4);
  const secondRow = import_homepageTiles.default.slice(4);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container text--center"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row margin-bottom--lg"
  }, firstRow.map((tile, idx) => /* @__PURE__ */ import_react.default.createElement(Tile, {
    tile,
    key: idx
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }, secondRow.map((tile, idx) => /* @__PURE__ */ import_react.default.createElement(Tile, {
    tile,
    key: idx
  }))));
}
function Updates() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container text--right"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "doc-updates"
  }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    to: "/updates"
  }, /* @__PURE__ */ import_react.default.createElement("em", null, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, null, "Documentation updates")))));
}
function Home() {
  return /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, /* @__PURE__ */ import_react.default.createElement("main", null, /* @__PURE__ */ import_react.default.createElement(HeroBanner, null), /* @__PURE__ */ import_react.default.createElement(TilesContainer, null), /* @__PURE__ */ import_react.default.createElement(Updates, null)));
}


/***/ })

};
;