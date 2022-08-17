exports.id = 46835;
exports.ids = [46835];
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

/***/ 20542:
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
var interface_exports = {};
__export(interface_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(interface_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "interface",
  title: "Interface page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "settings/interface",
  "id": "version-19-R6/settings/interface",
  "title": "Interface page",
  "description": "You use the Interface page to set various options related to the project interface.",
  "source": "@site/versioned_docs/version-19-R6/settings/interface.md",
  "sourceDirName": "settings",
  "slug": "/settings/interface",
  "permalink": "/docs/ja/settings/interface",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "interface",
    "title": "Interface page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "General page",
    "permalink": "/docs/ja/settings/general"
  },
  "next": {
    "title": "Compiler page",
    "permalink": "/docs/ja/settings/compiler"
  }
};
const assets = {};
const toc = [{
  value: "General",
  id: "general",
  level: 2
}, {
  value: "Font to use with the MESSAGE command",
  id: "font-to-use-with-the-message-command",
  level: 3
}, {
  value: "Appearance",
  id: "appearance",
  level: 3
}, {
  value: "Shortcuts",
  id: "shortcuts",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use the Interface page to set various options related to the project interface.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "general"
    }
  }, `General`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area lets you set various options concerning display.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(72508)/* ["default"] */ .Z),
    width: "862",
    height: "352"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "font-to-use-with-the-message-command"
    }
  }, `Font to use with the MESSAGE command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Select...`), ` to set the font and size for the characters used by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MESSAGE`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The default font and its size depend on the platform where 4D is running.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property also affects the following parts of 4D: `, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `certain preview areas of the Explorer`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `the ruler of the Form editor`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Other options configure the display of various windows in the Application mode.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Splash screen`), `: When this option is deselected, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Menus/bars#splash-screen"
    }
  }, `splash screen of the current menu bar`), ` does not appear in the Application mode. When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Startup`), ` database method.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Flushing progress`), `: When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Since this operation momentarily blocks user actions, displaying this window lets them know that flushing is underway.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can set the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/settings/database#memory-page"
    }
  }, `frequency for cache flushing`), ` in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Settings`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Database`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Memory`), `.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Printing progress`), `: Lets you enable or disable the display of the printing progress dialog box when printing.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Use SDI mode on Windows`), `: When this option checked, 4D enables automatically the SDI mode (Single-Document Interface) in your merged application if executed in a supported context.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option can be selected on macOS but will be ignored when the application is executed on this platform.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "appearance"
    }
  }, `Appearance`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This menu lets you select the color scheme to use at the main application level. A color scheme defines a global set of interface colors for texts, backgrounds, windows, etc., used in your forms.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option only works on macOS. On Windows, the "Light" scheme is always used.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following schemes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Light`), `: the application will use the Default Light Theme
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75702)/* ["default"] */ .Z),
    width: "928",
    height: "740"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Dark`), `: the application will use the Default Dark Theme
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(80912)/* ["default"] */ .Z),
    width: "928",
    height: "740"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Inherited`), ` (default): the application will inherit from the higher priority level (i.e., OS user preferences)`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Default themes can be handled using CSS. For more information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/FormEditor/stylesheets#media-queries"
    }
  }, `Media Queries`), ` section. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main application scheme will be applied to forms by default. However, it can be overriden:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page1762.html"
    }
  }, `SET APPLICATION COLOR SCHEME`), ` command at the working session level;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `using by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "../FormEditor/propertiesForm.html#color-scheme"
    }
  }, `Color Scheme`), ` form property at each form level (highest priority level). `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Note:`), ` When printed, forms always use the "Light" scheme.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "shortcuts"
    }
  }, `Shortcuts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use the Shortcuts area for viewing and modifying default shortcuts for three basic 4D form operations in your desktop applications. These shortcuts are identical for both platforms. Key icons indicate the corresponding Windows and macOS keys. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The default shortcuts are as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Accept input form: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Enter`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Cancel input form: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Esc`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add to subform: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+Shift+/`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Command+Shift+/`), ` (macOS)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To change the shortcut of an operation, click the corresponding `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit`), ` button. The following dialog box appears:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(37032)/* ["default"] */ .Z),
    width: "365",
    height: "277"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To change the shortcut, type the new key combination on your keyboard and click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `OK`), `. If you prefer not to have a shortcut for an operation, click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear`), `.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 80912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dark-appearance-e33d1d09173bd814692816b0d593fcbe.png");

/***/ }),

/***/ 72508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/interface-page-19a8427111ce0b0b454a172f019b4317.png");

/***/ }),

/***/ 75702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/light-appearance-45d44cbaab68c5db66e6c56bbd4b9bab.png");

/***/ }),

/***/ 37032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;