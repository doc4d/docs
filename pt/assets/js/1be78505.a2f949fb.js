exports.id = 29514;
exports.ids = [29514,96529];
exports.modules = {

/***/ 9783:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": "backToTopButton_sjWU",
	"backToTopButtonShow": "backToTopButtonShow_xfvO"
};


/***/ }),

/***/ 40296:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": "docMainContainer_gTbr",
	"docMainContainerEnhanced": "docMainContainerEnhanced_Uz_u",
	"docItemWrapperEnhanced": "docItemWrapperEnhanced_czyv"
};


/***/ }),

/***/ 70818:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": "expandButton_m80_",
	"expandButtonIcon": "expandButtonIcon_BlDH"
};


/***/ }),

/***/ 79141:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": "docSidebarContainer_b6E3",
	"docSidebarContainerHidden": "docSidebarContainerHidden_b3ry"
};


/***/ }),

/***/ 57212:
/***/ ((module) => {

// Exports
module.exports = {
	"docPage": "docPage__5DB",
	"docsWrapper": "docsWrapper_BCFX"
};


/***/ }),

/***/ 79703:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": "collapseSidebarButton_PEFL",
	"collapseSidebarButtonIcon": "collapseSidebarButtonIcon_kv0_"
};


/***/ }),

/***/ 78523:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "menu_SIkG",
	"menuWithAnnouncementBar": "menuWithAnnouncementBar_GW3s"
};


/***/ }),

/***/ 31909:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "sidebar_njMd",
	"sidebarWithHideableNavbar": "sidebarWithHideableNavbar_wUlq",
	"sidebarHidden": "sidebarHidden_VK0M",
	"sidebarLogo": "sidebarLogo_isFc"
};


/***/ }),

/***/ 9171:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": "menuHtmlItem_M9Kj"
};


/***/ }),

/***/ 86014:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": "menuExternalLink_NmtK"
};


/***/ }),

/***/ 48566:
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
var BackToTopButton_exports = {};
__export(BackToTopButton_exports, {
  default: () => BackToTopButton
});
module.exports = __toCommonJS(BackToTopButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __webpack_require__(6573);
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_styles_module = __toESM(__webpack_require__(9783));
function BackToTopButton() {
  const { shown, scrollToTop } = (0, import_internal.useBackToTopButton)({ threshold: 300 });
  return /* @__PURE__ */ import_react.default.createElement("button", {
    "aria-label": (0, import_Translate.translate)({
      id: "theme.BackToTopButton.buttonAriaLabel",
      message: "Scroll back to top",
      description: "The ARIA label for the back to top button"
    }),
    className: (0, import_clsx.default)(
      "clean-btn",
      import_theme_common.ThemeClassNames.common.backToTopButton,
      import_styles_module.default.backToTopButton,
      shown && import_styles_module.default.backToTopButtonShow
    ),
    type: "button",
    onClick: scrollToTop
  });
}


/***/ }),

/***/ 6:
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
var Main_exports = {};
__export(Main_exports, {
  default: () => DocPageLayoutMain
});
module.exports = __toCommonJS(Main_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_internal = __webpack_require__(97985);
var import_styles_module = __toESM(__webpack_require__(40296));
function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = (0, import_internal.useDocsSidebar)();
  return /* @__PURE__ */ import_react.default.createElement("main", {
    className: (0, import_clsx.default)(
      import_styles_module.default.docMainContainer,
      (hiddenSidebarContainer || !sidebar) && import_styles_module.default.docMainContainerEnhanced
    )
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      "container padding-top--md padding-bottom--lg",
      import_styles_module.default.docItemWrapper,
      hiddenSidebarContainer && import_styles_module.default.docItemWrapperEnhanced
    )
  }, children));
}


/***/ }),

/***/ 98805:
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
var ExpandButton_exports = {};
__export(ExpandButton_exports, {
  default: () => DocPageLayoutSidebarExpandButton
});
module.exports = __toCommonJS(ExpandButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __webpack_require__(6573);
var import_Arrow = __toESM(__webpack_require__(85827));
var import_styles_module = __toESM(__webpack_require__(70818));
function DocPageLayoutSidebarExpandButton({ toggleSidebar }) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.expandButton,
    title: (0, import_Translate.translate)({
      id: "theme.docs.sidebar.expandButtonTitle",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    "aria-label": (0, import_Translate.translate)({
      id: "theme.docs.sidebar.expandButtonAriaLabel",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    tabIndex: 0,
    role: "button",
    onKeyDown: toggleSidebar,
    onClick: toggleSidebar
  }, /* @__PURE__ */ import_react.default.createElement(import_Arrow.default, {
    className: import_styles_module.default.expandButtonIcon
  }));
}


/***/ }),

/***/ 53243:
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
var Sidebar_exports = {};
__export(Sidebar_exports, {
  default: () => DocPageLayoutSidebar
});
module.exports = __toCommonJS(Sidebar_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_router = __webpack_require__(26224);
var import_DocSidebar = __toESM(__webpack_require__(78153));
var import_ExpandButton = __toESM(__webpack_require__(98805));
var import_styles_module = __toESM(__webpack_require__(79141));
function ResetOnSidebarChange({ children }) {
  const sidebar = (0, import_internal.useDocsSidebar)();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, {
    key: (sidebar == null ? void 0 : sidebar.name) ?? "noSidebar"
  }, children);
}
function DocPageLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer
}) {
  const { pathname } = (0, import_router.useLocation)();
  const [hiddenSidebar, setHiddenSidebar] = (0, import_react.useState)(false);
  const toggleSidebar = (0, import_react.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /* @__PURE__ */ import_react.default.createElement("aside", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docSidebarContainer,
      import_styles_module.default.docSidebarContainer,
      hiddenSidebarContainer && import_styles_module.default.docSidebarContainerHidden
    ),
    onTransitionEnd: (e) => {
      if (!e.currentTarget.classList.contains(import_styles_module.default.docSidebarContainer)) {
        return;
      }
      if (hiddenSidebarContainer) {
        setHiddenSidebar(true);
      }
    }
  }, /* @__PURE__ */ import_react.default.createElement(ResetOnSidebarChange, null, /* @__PURE__ */ import_react.default.createElement(import_DocSidebar.default, {
    sidebar,
    path: pathname,
    onCollapse: toggleSidebar,
    isHidden: hiddenSidebar
  })), hiddenSidebar && /* @__PURE__ */ import_react.default.createElement(import_ExpandButton.default, {
    toggleSidebar
  }));
}


/***/ }),

/***/ 45394:
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
var Layout_exports = {};
__export(Layout_exports, {
  default: () => DocPageLayout
});
module.exports = __toCommonJS(Layout_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_internal = __webpack_require__(97985);
var import_Layout = __toESM(__webpack_require__(38043));
var import_BackToTopButton = __toESM(__webpack_require__(48566));
var import_Sidebar = __toESM(__webpack_require__(53243));
var import_Main = __toESM(__webpack_require__(6));
var import_styles_module = __toESM(__webpack_require__(57212));
function DocPageLayout({ children }) {
  const sidebar = (0, import_internal.useDocsSidebar)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0, import_react.useState)(false);
  return /* @__PURE__ */ import_react.default.createElement(import_Layout.default, {
    wrapperClassName: import_styles_module.default.docsWrapper
  }, /* @__PURE__ */ import_react.default.createElement(import_BackToTopButton.default, null), /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.docPage
  }, sidebar && /* @__PURE__ */ import_react.default.createElement(import_Sidebar.default, {
    sidebar: sidebar.items,
    hiddenSidebarContainer,
    setHiddenSidebarContainer
  }), /* @__PURE__ */ import_react.default.createElement(import_Main.default, {
    hiddenSidebarContainer
  }, children)));
}


/***/ }),

/***/ 686:
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
var DocPage_exports = {};
__export(DocPage_exports, {
  default: () => DocPage
});
module.exports = __toCommonJS(DocPage_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Layout = __toESM(__webpack_require__(45394));
var import_NotFound = __toESM(__webpack_require__(96529));
var import_SearchMetadata = __toESM(__webpack_require__(93773));
function DocPage(props) {
  const { versionMetadata } = props;
  const currentDocRouteMetadata = (0, import_internal.useDocRouteMetadata)(props);
  if (!currentDocRouteMetadata) {
    return /* @__PURE__ */ import_react.default.createElement(import_NotFound.default, null);
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_SearchMetadata.default, {
    version: versionMetadata.version,
    tag: (0, import_internal.docVersionSearchTag)(
      versionMetadata.pluginId,
      versionMetadata.version
    )
  }), /* @__PURE__ */ import_react.default.createElement(import_theme_common.HtmlClassNameProvider, {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.wrapper.docsPages,
      import_theme_common.ThemeClassNames.page.docsDocPage,
      props.versionMetadata.className
    )
  }, /* @__PURE__ */ import_react.default.createElement(import_internal.DocsVersionProvider, {
    version: versionMetadata
  }, /* @__PURE__ */ import_react.default.createElement(import_internal.DocsSidebarProvider, {
    name: sidebarName,
    items: sidebarItems
  }, /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, docElement)))));
}


/***/ }),

/***/ 63441:
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
var CollapseButton_exports = {};
__export(CollapseButton_exports, {
  default: () => CollapseButton
});
module.exports = __toCommonJS(CollapseButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __webpack_require__(6573);
var import_Arrow = __toESM(__webpack_require__(85827));
var import_styles_module = __toESM(__webpack_require__(79703));
function CollapseButton({ onClick }) {
  return /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    title: (0, import_Translate.translate)({
      id: "theme.docs.sidebar.collapseButtonTitle",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    "aria-label": (0, import_Translate.translate)({
      id: "theme.docs.sidebar.collapseButtonAriaLabel",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    className: (0, import_clsx.default)(
      "button button--secondary button--outline",
      import_styles_module.default.collapseSidebarButton
    ),
    onClick
  }, /* @__PURE__ */ import_react.default.createElement(import_Arrow.default, {
    className: import_styles_module.default.collapseSidebarButtonIcon
  }));
}


/***/ }),

/***/ 63243:
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
var Content_exports = {};
__export(Content_exports, {
  default: () => DocSidebarDesktopContent
});
module.exports = __toCommonJS(Content_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_DocSidebarItems = __toESM(__webpack_require__(29430));
var import_styles_module = __toESM(__webpack_require__(78523));
function useShowAnnouncementBar() {
  const { isActive } = (0, import_internal.useAnnouncementBar)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0, import_react.useState)(isActive);
  (0, import_internal.useScrollPosition)(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    className: (0, import_clsx.default)(
      "menu thin-scrollbar",
      import_styles_module.default.menu,
      showAnnouncementBar && import_styles_module.default.menuWithAnnouncementBar,
      className
    )
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docSidebarMenu, "menu__list")
  }, /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItems.default, {
    items: sidebar,
    activePath: path,
    level: 1
  })));
}


/***/ }),

/***/ 9690:
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
var Desktop_exports = {};
__export(Desktop_exports, {
  default: () => Desktop_default
});
module.exports = __toCommonJS(Desktop_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_Logo = __toESM(__webpack_require__(71366));
var import_CollapseButton = __toESM(__webpack_require__(63441));
var import_Content = __toESM(__webpack_require__(63243));
var import_styles_module = __toESM(__webpack_require__(31909));
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = (0, import_theme_common.useThemeConfig)();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      import_styles_module.default.sidebar,
      hideOnScroll && import_styles_module.default.sidebarWithHideableNavbar,
      isHidden && import_styles_module.default.sidebarHidden
    )
  }, hideOnScroll && /* @__PURE__ */ import_react.default.createElement(import_Logo.default, {
    tabIndex: -1,
    className: import_styles_module.default.sidebarLogo
  }), /* @__PURE__ */ import_react.default.createElement(import_Content.default, {
    path,
    sidebar
  }), hideable && /* @__PURE__ */ import_react.default.createElement(import_CollapseButton.default, {
    onClick: onCollapse
  }));
}
var Desktop_default = import_react.default.memo(DocSidebarDesktop);


/***/ }),

/***/ 78189:
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
var Mobile_exports = {};
__export(Mobile_exports, {
  default: () => Mobile_default
});
module.exports = __toCommonJS(Mobile_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_DocSidebarItems = __toESM(__webpack_require__(29430));
const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = (0, import_internal.useNavbarMobileSidebar)();
  return /* @__PURE__ */ import_react.default.createElement("ul", {
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docSidebarMenu, "menu__list")
  }, /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItems.default, {
    items: sidebar,
    activePath: path,
    onItemClick: (item) => {
      if (item.type === "category" && item.href) {
        mobileSidebar.toggle();
      }
      if (item.type === "link") {
        mobileSidebar.toggle();
      }
    },
    level: 1
  }));
};
function DocSidebarMobile(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_theme_common.NavbarSecondaryMenuFiller, {
    component: DocSidebarMobileSecondaryMenu,
    props
  });
}
var Mobile_default = import_react.default.memo(DocSidebarMobile);


/***/ }),

/***/ 78153:
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
var DocSidebar_exports = {};
__export(DocSidebar_exports, {
  default: () => DocSidebar
});
module.exports = __toCommonJS(DocSidebar_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_theme_common = __webpack_require__(17582);
var import_Desktop = __toESM(__webpack_require__(9690));
var import_Mobile = __toESM(__webpack_require__(78189));
function DocSidebar(props) {
  const windowSize = (0, import_theme_common.useWindowSize)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ import_react.default.createElement(import_Desktop.default, {
    ...props
  }), shouldRenderSidebarMobile && /* @__PURE__ */ import_react.default.createElement(import_Mobile.default, {
    ...props
  }));
}


/***/ }),

/***/ 44140:
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
var Category_exports = {};
__export(Category_exports, {
  default: () => DocSidebarItemCategory
});
module.exports = __toCommonJS(Category_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Link = __toESM(__webpack_require__(70393));
var import_Translate = __webpack_require__(6573);
var import_useIsBrowser = __toESM(__webpack_require__(54939));
var import_DocSidebarItems = __toESM(__webpack_require__(29430));
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = (0, import_theme_common.usePrevious)(isActive);
  (0, import_react.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0, import_useIsBrowser.default)();
  return (0, import_react.useMemo)(() => {
    if (item.href) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0, import_internal.findFirstCategoryLink)(item);
  }, [item, isBrowser]);
}
function CollapseButton({ categoryLabel, onClick }) {
  return /* @__PURE__ */ import_react.default.createElement("button", {
    "aria-label": (0, import_Translate.translate)(
      {
        id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
        message: "Toggle the collapsible sidebar category '{label}'",
        description: "The ARIA label to toggle the collapsible sidebar category"
      },
      { label: categoryLabel }
    ),
    type: "button",
    className: "clean-btn menu__caret",
    onClick
  });
}
function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories }
    }
  } = (0, import_theme_common.useThemeConfig)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0, import_internal.isActiveSidebarItem)(item, activePath);
  const isCurrentPage = (0, import_internal.isSamePath)(href, activePath);
  const { collapsed, setCollapsed } = (0, import_theme_common.useCollapsible)({
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const { expandedItem, setExpandedItem } = (0, import_internal.useDocSidebarItemsExpandedState)();
  const updateCollapsed = (toCollapsed = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  (0, import_react.useEffect)(() => {
    if (collapsible && expandedItem && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docSidebarItemCategory,
      import_theme_common.ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
      "menu__list-item",
      {
        "menu__list-item--collapsed": collapsed
      },
      className
    )
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)("menu__list-item-collapsible", {
      "menu__list-item-collapsible--active": isCurrentPage
    })
  }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    className: (0, import_clsx.default)("menu__link", {
      "menu__link--sublist": collapsible,
      "menu__link--sublist-caret": !href && collapsible,
      "menu__link--active": isActive
    }),
    onClick: collapsible ? (e) => {
      onItemClick == null ? void 0 : onItemClick(item);
      if (href) {
        updateCollapsed(false);
      } else {
        e.preventDefault();
        updateCollapsed();
      }
    } : () => {
      onItemClick == null ? void 0 : onItemClick(item);
    },
    "aria-current": isCurrentPage ? "page" : void 0,
    "aria-expanded": collapsible ? !collapsed : void 0,
    href: collapsible ? hrefWithSSRFallback ?? "#" : hrefWithSSRFallback,
    ...props
  }, label), href && collapsible && /* @__PURE__ */ import_react.default.createElement(CollapseButton, {
    categoryLabel: label,
    onClick: (e) => {
      e.preventDefault();
      updateCollapsed();
    }
  })), /* @__PURE__ */ import_react.default.createElement(import_theme_common.Collapsible, {
    lazy: true,
    as: "ul",
    className: "menu__list",
    collapsed
  }, /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItems.default, {
    items,
    tabIndex: collapsed ? -1 : 0,
    onItemClick,
    activePath,
    level: level + 1
  })));
}


/***/ }),

/***/ 69874:
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
var Html_exports = {};
__export(Html_exports, {
  default: () => DocSidebarItemHtml
});
module.exports = __toCommonJS(Html_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_styles_module = __toESM(__webpack_require__(9171));
function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docSidebarItemLink,
      import_theme_common.ThemeClassNames.docs.docSidebarItemLinkLevel(level),
      defaultStyle && [import_styles_module.default.menuHtmlItem, "menu__list-item"],
      className
    ),
    key: index,
    dangerouslySetInnerHTML: { __html: value }
  });
}


/***/ }),

/***/ 88069:
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
var Link_exports = {};
__export(Link_exports, {
  default: () => DocSidebarItemLink
});
module.exports = __toCommonJS(Link_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Link = __toESM(__webpack_require__(70393));
var import_isInternalUrl = __toESM(__webpack_require__(35096));
var import_ExternalLink = __toESM(__webpack_require__(85096));
var import_styles_module = __toESM(__webpack_require__(86014));
function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className } = item;
  const isActive = (0, import_internal.isActiveSidebarItem)(item, activePath);
  const isInternalLink = (0, import_isInternalUrl.default)(href);
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docSidebarItemLink,
      import_theme_common.ThemeClassNames.docs.docSidebarItemLinkLevel(level),
      "menu__list-item",
      className
    ),
    key: label
  }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    className: (0, import_clsx.default)(
      "menu__link",
      !isInternalLink && import_styles_module.default.menuExternalLink,
      {
        "menu__link--active": isActive
      }
    ),
    "aria-current": isActive ? "page" : void 0,
    to: href,
    ...isInternalLink && {
      onClick: onItemClick ? () => onItemClick(item) : void 0
    },
    ...props
  }, label, !isInternalLink && /* @__PURE__ */ import_react.default.createElement(import_ExternalLink.default, null)));
}


/***/ }),

/***/ 18300:
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
var DocSidebarItem_exports = {};
__export(DocSidebarItem_exports, {
  default: () => DocSidebarItem
});
module.exports = __toCommonJS(DocSidebarItem_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Category = __toESM(__webpack_require__(44140));
var import_Link = __toESM(__webpack_require__(88069));
var import_Html = __toESM(__webpack_require__(69874));
function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ import_react.default.createElement(import_Category.default, {
        item,
        ...props
      });
    case "html":
      return /* @__PURE__ */ import_react.default.createElement(import_Html.default, {
        item,
        ...props
      });
    case "link":
    default:
      return /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
        item,
        ...props
      });
  }
}


/***/ }),

/***/ 29430:
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
var DocSidebarItems_exports = {};
__export(DocSidebarItems_exports, {
  default: () => DocSidebarItems_default
});
module.exports = __toCommonJS(DocSidebarItems_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_internal = __webpack_require__(97985);
var import_DocSidebarItem = __toESM(__webpack_require__(18300));
function DocSidebarItems({ items, ...props }) {
  return /* @__PURE__ */ import_react.default.createElement(import_internal.DocSidebarItemsExpandedStateProvider, null, items.map((item, index) => /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItem.default, {
    key: index,
    item,
    index,
    ...props
  })));
}
var DocSidebarItems_default = (0, import_react.memo)(DocSidebarItems);


/***/ }),

/***/ 85827:
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
var Arrow_exports = {};
__export(Arrow_exports, {
  default: () => IconArrow
});
module.exports = __toCommonJS(Arrow_exports);
var import_react = __toESM(__webpack_require__(67294));
function IconArrow(props) {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    width: "20",
    height: "20",
    "aria-hidden": "true",
    ...props
  }, /* @__PURE__ */ import_react.default.createElement("g", {
    fill: "#7a7a7a"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
  })));
}


/***/ }),

/***/ 96529:
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
var NotFound_exports = {};
__export(NotFound_exports, {
  default: () => NotFound
});
module.exports = __toCommonJS(NotFound_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __toESM(__webpack_require__(6573));
var import_theme_common = __webpack_require__(17582);
var import_Layout = __toESM(__webpack_require__(38043));
function NotFound() {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_theme_common.PageMetadata, {
    title: (0, import_Translate.translate)({
      id: "theme.NotFound.title",
      message: "Page Not Found"
    })
  }), /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, /* @__PURE__ */ import_react.default.createElement("main", {
    className: "container margin-vert--xl"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    className: "hero__title"
  }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));
}


/***/ })

};
;