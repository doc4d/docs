exports.id = 77734;
exports.ids = [77734];
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

/***/ 35024:
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
var Installation_exports = {};
__export(Installation_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(Installation_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "installation",
  title: "Installation"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "GettingStarted/installation",
  "id": "version-19/GettingStarted/installation",
  "title": "Installation",
  "description": "Welcome to 4D! On this page, you will find all of the necessary information about installing and launching your 4D product.",
  "source": "@site/versioned_docs/version-19/GettingStarted/Installation.md",
  "sourceDirName": "GettingStarted",
  "slug": "/GettingStarted/installation",
  "permalink": "/docs/pt/19/GettingStarted/installation",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "installation",
    "title": "Installation"
  },
  "sidebar": "docs",
  "next": {
    "title": "Overview",
    "permalink": "/docs/pt/19/Project/overview"
  }
};
const assets = {};
const toc = [{
  value: "Required configuration",
  id: "required-configuration",
  level: 2
}, {
  value: "Installation on disk",
  id: "installation-on-disk",
  level: 2
}, {
  value: "Sign in",
  id: "sign-in",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Welcome to 4D! On this page, you will find all of the necessary information about installing and launching your 4D product.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "required-configuration"
    }
  }, `Required configuration`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://us.4d.com/product-download"
    }
  }, `Product Download`), ` page on the 4D website provides information about the minimum macOS / Windows system requirements for your 4D series.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Additional technical details are available on the 4D website's `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://us.4d.com/resources/feature-release"
    }
  }, `Resources page`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "installation-on-disk"
    }
  }, `Installation on disk`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D products are installed from the 4D website:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Connect to the 4D website and go to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://us.4d.com/product-download"
    }
  }, `Downloads`), ` page.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Click on the download link for your 4D product and follow the on-screen instructions.`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sign-in"
    }
  }, `Sign in`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have completed the installation, you can start 4D and sign in. To do so, double-click on the 4D product icon.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(6154)/* ["default"] */ .Z),
    width: "51",
    height: "50"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Welcome Wizard then appears:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(68044)/* ["default"] */ .Z),
    width: "816",
    height: "576"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If you want to discover and explore 4D, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `free trial`), ` link. You will only be asked to sign in or to create a 4D account.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If you already have a 4D account, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Sign in`), ` link in the upper right side of the Welcome Wizard dialog and enter your account information. Any already registered 4D licenses are automatically updated (or additional expansion packs loaded) on your machine.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Expand the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Open or create project application`), ` area and select the action you want to perform:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Connect to 4D Server`), ` - use 4D as a remote client and connect to an application that is already loaded by 4D Server.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Open a local application project`), ` - load an existing application project stored on your disk.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Create a new application project`), ` - create a new, empty application project on your disk.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enjoy your 4D experience!`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 68044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/welcome2-422fab9829a29a7a65d101339a6dc487.png");

/***/ })

};
;