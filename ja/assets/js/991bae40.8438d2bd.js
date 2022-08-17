exports.id = 12343;
exports.ids = [12343];
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

/***/ 35190:
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
var bars_exports = {};
__export(bars_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(bars_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "bars",
  title: "Menu bar features"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Menus/bars",
  "id": "Menus/bars",
  "title": "Menu bar features",
  "description": "Menu bars provide the major interface for custom applications. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. You can change which menu bar is displayed using the SET MENU BAR command.",
  "source": "@site/docs/Menus/bars.md",
  "sourceDirName": "Menus",
  "slug": "/Menus/bars",
  "permalink": "/docs/ja/next/Menus/bars",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "bars",
    "title": "Menu bar features"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Menu item properties",
    "permalink": "/docs/ja/next/Menus/properties"
  },
  "next": {
    "title": "SDI mode on Windows",
    "permalink": "/docs/ja/next/Menus/sdi"
  }
};
const assets = {};
const toc = [{
  value: "Splash screen",
  id: "splash-screen",
  level: 2
}, {
  value: "Previewing menu bars",
  id: "previewing-menu-bars",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Menu bars provide the major interface for custom applications. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. You can change which menu bar is displayed using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU BAR`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D lets you associate a custom splash screen picture with each menu bar and to preview this menu bar at any time.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "splash-screen"
    }
  }, `Splash screen`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can enhance the appearance of each menu bar by associating a custom splash screen with it. The window containing the splash screen is displayed below the menu bar when it appears. It can contain a logo or any type of picture. By default, 4D displays the 4D logo in the splash screen: `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(50522)/* ["default"] */ .Z),
    width: "682",
    height: "533"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A custom splash screen picture can come from any graphic application. 4D lets you paste a clipboard picture or use any picture present on your hard disk. Any standard picture format supported by 4D can be used.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The splash screen picture can be set only in the Menu editor: select the menu bar with which you want to associate the custom splash screen. Note the "Background Image" area in the right-hand part of the window.
To open a picture stored on your disk directly, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Open`), ` button or click in the "Background Image" area. A pop-up menu appears: `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To paste a picture from the clipboard, choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Paste`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To open a picture stored in a disk file, choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open`), `.
If you choose Open, a standard Open file dialog box will appear so that you can select the picture file to be used. Once set, the picture is displayed in miniature in the area. It is then associated with the menu bar. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(88814)/* ["default"] */ .Z),
    width: "208",
    height: "188"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can view the final result by testing the menu bar (see the following section). In Application mode, the picture is displayed in the splash screen with the "Truncated (Centered)" type format.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can choose whether to display or hide this window using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display toolbar`), ` option in the Settings.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove the custom picture and display the default one instead, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear`), ` button or select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear`), ` in the area pop-up menu.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "previewing-menu-bars"
    }
  }, `Previewing menu bars`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Menu Bar editor lets you view the custom menus and splash screen at any time, without closing the toolbox window. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To do so, simply select the menu bar and choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Test the menu bar "Menu Bar #X"`), ` in the context menu or the options menu of the editor. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58477)/* ["default"] */ .Z),
    width: "360",
    height: "175"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D displays a preview of the menu bar as well as the splash screen. You can scroll down the menus and sub-menus to preview their contents. However, these menus are not active. To test the functioning of menus and the toolbar, you must use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Test Application`), ` command from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 50522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/splash1-f8af26d9ec7a3f25a766cb3e22b04cc5.png");

/***/ }),

/***/ 88814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/splash2-a427b8fe9c79067763540d1ce0d83994.png");

/***/ }),

/***/ 58477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;