exports.id = 36215;
exports.ids = [36215];
exports.modules = {

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDXContext": () => (/* binding */ MDXContext),
/* harmony export */   "MDXProvider": () => (/* binding */ MDXProvider),
/* harmony export */   "mdx": () => (/* binding */ createElement),
/* harmony export */   "useMDXComponents": () => (/* binding */ useMDXComponents),
/* harmony export */   "withMDXComponents": () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 12594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var sdi_exports = {};
__export(sdi_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(sdi_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "sdi",
  title: "SDI mode on Windows"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Menus/sdi",
  "id": "Menus/sdi",
  "title": "SDI mode on Windows",
  "description": "On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar. SDI applications are opposed to MDI (Multiple Documents Interface) applications, where all windows are contained in and depend on the main window.",
  "source": "@site/docs/Menus/sdi.md",
  "sourceDirName": "Menus",
  "slug": "/Menus/sdi",
  "permalink": "/docs/next/Menus/sdi",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "sdi",
    "title": "SDI mode on Windows"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Menu bar features",
    "permalink": "/docs/next/Menus/bars"
  },
  "next": {
    "title": "User Settings",
    "permalink": "/docs/next/Desktop/user-settings"
  }
};
const assets = {};
const toc = [{
  value: "SDI mode availability",
  id: "sdi-mode-availability",
  level: 2
}, {
  value: "Enabling the SDI mode",
  id: "enabling-the-sdi-mode",
  level: 2
}, {
  value: "Managing applications in SDI mode",
  id: "managing-applications-in-sdi-mode",
  level: 2
}, {
  value: "Menus in Windows",
  id: "menus-in-windows",
  level: 3
}, {
  value: "About the splash screen",
  id: "about-the-splash-screen",
  level: 4
}, {
  value: "Automatic quit",
  id: "automatic-quit",
  level: 3
}, {
  value: "Language",
  id: "language",
  level: 2
}];
const layoutProps = {
  toc
};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return /* @__PURE__ */ (0, import_react2.mdx)(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar. SDI applications are opposed to MDI (Multiple Documents Interface) applications, where all windows are contained in and depend on the main window.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The concept of SDI/MDI does not exist on macOS. This feature concerns Windows applications only and related options are ignored on macOS.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sdi-mode-availability"
    }
  }, `SDI mode availability`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The SDI mode is available in the following execution environment only:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Windows`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Merged stand-alone or client 4D application`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "enabling-the-sdi-mode"
    }
  }, `Enabling the SDI mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enabling and using the SDI mode in your application require the following steps:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Use SDI mode on Windows`), ` option in the "Interface" page of the Settings dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Build a merged application (standalone and/or client application).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then, when executed it in a supported context (see above), the merged application will work automatically in SDI mode.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "managing-applications-in-sdi-mode"
    }
  }, `Managing applications in SDI mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Executing a 4D application in SDI mode does not require any specific implementation: existing menu bars are automatically moved in SDI windows themselves. However, you need to pay attention to specific principles that are listed below.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "menus-in-windows"
    }
  }, `Menus in Windows`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In SDI mode, the process menu bar is automatically displayed in every document type window opened during the process life (this excludes, for example, floating palettes). When the process menu bar is not visible, menu item shortcuts remain active however.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Menus are added above windows without modifiying their contents size:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(7832)/* ["default"] */ .Z),
    width: "600",
    height: "238"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Windows can therefore be used in MDI or SDI modes without having to recalculate the position of objects.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "about-the-splash-screen"
    }
  }, `About the splash screen`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Splash screen`), ` interface option was selected in the Settings, the splash window will contain any menus that would have been displayed in the MDI window. Note also that closing the splash screen window will result in exiting the application, just like in MDI mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "automatic-quit"
    }
  }, `Automatic quit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `QUIT 4D`), ` command) when the following conditions are met:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the user cannot interact anymore with the application`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `there are no live user processes`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D processes or worker processes are waiting for an event`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the Web server is not started.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When a menu with an associated `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `quit`), ` standard action is called, the application quits and all windows are closed, wherever the menu was called from.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "language"
    }
  }, `Language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command/feature`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Specificity in SDI mode on Windows`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Open form window`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Options to support floating windows in SDI (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Controller form window`), `) and to remove the menu bar (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Form has no menu bar`), `)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Menu bar height`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `SHOW MENU BAR`), ` / `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `HIDE MENU BAR`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Applied to the current form window only (from where the code is executed)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `MAXIMIZE WINDOW`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The window is maximized to the screen size`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `CONVERT COORDINATES`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `XY Screen`), ` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Screen height`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Screen width`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `GET MOUSE`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Global coordinates are relative to the screen`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `GET WINDOW RECT`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `When -1 is passed in window parameter, the command returns 0;0;0;0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `On Drop database method`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Not supported`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 7832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;