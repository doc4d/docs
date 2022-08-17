exports.id = 96305;
exports.ids = [96305];
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

/***/ 26174:
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
var httpRequests_exports = {};
__export(httpRequests_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(httpRequests_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "httpRequests",
  title: "Processing HTTP requests"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "WebServer/httpRequests",
  "id": "WebServer/httpRequests",
  "title": "Processing HTTP requests",
  "description": "The 4D web server provides several features to handle HTTP requests:",
  "source": "@site/docs/WebServer/httpRequests.md",
  "sourceDirName": "WebServer",
  "slug": "/WebServer/httpRequests",
  "permalink": "/docs/fr/next/WebServer/httpRequests",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "httpRequests",
    "title": "Processing HTTP requests"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Template pages",
    "permalink": "/docs/fr/next/WebServer/templates"
  },
  "next": {
    "title": "Allowing project methods",
    "permalink": "/docs/fr/next/WebServer/allowProject"
  }
};
const assets = {};
const toc = [{
  value: "On Web Connection",
  id: "on-web-connection",
  level: 2
}, {
  value: "Database method calls",
  id: "database-method-calls",
  level: 3
}, {
  value: "Syntax",
  id: "syntax",
  level: 3
}, {
  value: "$1 - URL extra data",
  id: "1---url-extra-data",
  level: 3
}, {
  value: "$2 - Header and Body of the HTTP request",
  id: "2---header-and-body-of-the-http-request",
  level: 3
}, {
  value: "$3 - Web client IP address",
  id: "3---web-client-ip-address",
  level: 3
}, {
  value: "$4 - Server IP address",
  id: "4---server-ip-address",
  level: 3
}, {
  value: "$5 and $6 - User Name and Password",
  id: "5-and-6---user-name-and-password",
  level: 3
}, {
  value: "/4DACTION",
  id: "4daction",
  level: 2
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: "4DACTION to post forms",
  id: "4daction-to-post-forms",
  level: 3
}, {
  value: "Example",
  id: "example-1",
  level: 4
}, {
  value: "Getting values from HTTP requests",
  id: "getting-values-from-http-requests",
  level: 2
}, {
  value: "Other Web Server Commands",
  id: "other-web-server-commands",
  level: 2
}, {
  value: "COMPILER_WEB Project Method",
  id: "compiler_web-project-method",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D web server provides several features to handle HTTP requests:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Web Connection`), ` database method, a router for your web application,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `/4DACTION`), ` URL to call server-side code`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET VARIABLES`), ` to get values from HTML objects sent to the server`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `other commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET HTTP BODY`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET HTTP HEADER`), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET BODY PART`), ` allow to customize the request processing, including cookies.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `COMPILER_WEB`), ` project method, to declare your variables. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "on-web-connection"
    }
  }, `On Web Connection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Connection`), ` database method can be used as the entry point for the 4D Web server.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "database-method-calls"
    }
  }, `Database method calls`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Connection`), ` database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. The database method is called with the URL.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the URL "`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `a/b/c`), `" will call the database method, but "`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `a/b/c.html`), `" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/WebServer/webServerConfig#root-folder"
    }
  }, `WebFolder`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The request should have previously been accepted by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/WebServer/authentication#on-web-authentication"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Web Authentication`)), ` database method (if it exists) and the web server must be launched.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "syntax"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `On Web Connection`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$1`), ` : Text ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$2`), ` : Text ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$3`), ` : Text ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$4`), ` : Text ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$5`), ` : Text ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$6`), ` : Text )`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$1`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HTTP headers + HTTP body (up to 32 kb limit)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the web client (browser)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$4`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$6`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Password`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must declare these parameters as shown below:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//On Web Connection database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code for the method
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alternatively, you can use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/Concepts/parameters#named-parameters"
    }
  }, `named parameters`), ` syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// On Web Connection database method
#DECLARE ($url : Text; $header : Text; \\
  $BrowserIP : Text; $ServerIP : Text; \\
  $user : Text; $password : Text)

`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Calling a 4D command that displays an interface element (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DIALOG`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT`), `, etc.) is not allowed and ends the method processing.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "1---url-extra-data"
    }
  }, `$1 - URL extra data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The first parameter ($1) is the URL entered by users in the address area of their web browser, without the host address.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Let\u2019s use an intranet connection as an example. Suppose that the IP address of your 4D Web Server machine is 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the web browser:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL entered in web browser`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of parameter $1`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `123.4.567.89`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "http://123.4.567.89"
    }
  }, `http://123.4.567.89`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `123.4.567.89/Customers`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/Customers`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "http://123.4.567.89/Customers/Add"
    }
  }, `http://123.4.567.89/Customers/Add`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/Customers/Add`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `123.4.567.89/Do_This/If_OK/Do_That`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/Do_This/If_OK/Do_That`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that you are free to use this parameter at your convenience. 4D simply ignores the value passed beyond the host part of the URL. For example, you can establish a convention where the value "`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/Customers/Add`), `" means \u201Cgo directly to add a new record in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Customers]`), ` table.\u201D By supplying the web users with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "2---header-and-body-of-the-http-request"
    }
  }, `$2 - Header and Body of the HTTP request`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The second parameter ($2) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Connection`), ` database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If your application uses this information, it is up to you to parse the header and the body. You can use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET HTTP HEADER`), ` and the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET HTTP BODY`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "3---web-client-ip-address"
    }
  }, `$3 - Web client IP address`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The $3 parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between intranet and internet connections.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/WebServer/webServerConfig#about-ipv6-support"
    }
  }, `IPv6 Support`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4---server-ip-address"
    }
  }, `$4 - Server IP address`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The $4 parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "webServerConfig.html#ip-address-to-listen"
    }
  }, `Configuration page`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "5-and-6---user-name-and-password"
    }
  }, `$5 and $6 - User Name and Password`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/WebServer/authentication"
    }
  }, `authentication page`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4daction"
    }
  }, `/4DACTION`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `/4DACTION/*`), `MethodName*`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `/4DACTION/*`), `MethodName/Param*`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `MethodName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of the 4D project method to be executed`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Param`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text parameter to pass to the project method`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Usage:`), ` URL or Form action.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This URL allows you to call the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MethodName`), ` 4D project method with an optional `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Param`), ` text parameter. The method will receive this parameter in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$1`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The 4D project method must have been `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/next/WebServer/allowProject"
    }
  }, `allowed for web requests`), `: the \u201CAvailable through 4D tags and URLs (4DACTION...)\u201D attribute value must have been checked in the properties of the method. If the attribute is not checked, the web request is rejected.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When 4D receives a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `/4DACTION/MethodName/Param`), ` request, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Web Authentication`), ` database method (if it exists) is called. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DACTION/`), ` can be associated with a URL in a static Web page:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MyMethod`), ` project method should generally return a "reply" (sending of an HTML page using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND FILE`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND TEXT`), `, etc.). Be sure to make the processing as short as possible in order not to block the browser.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A method called by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/4DACTION`), ` must not call interface elements (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DIALOG`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT`), `, etc.).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example describes the association of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/4DACTION`), ` URL with an HTML picture object in order to dynamically display a picture in the page. You insert the following instructions in a static HTML page:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<IMG SRC="/4DACTION/getPhoto/smith">
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getPhoto`), ` method is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_TEXT($1) // This parameter must always be declared
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 //find the picture in the Images folder within the Resources folder 
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"

READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable
PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format
WEB SEND BLOB($BLOB;"image/png")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4daction-to-post-forms"
    }
  }, `4DACTION to post forms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D Web server also allows you to use \u201Cposted\u201D forms, which are static HTML pages that send data to the Web server, and to easily retrieve all the values. The POST type must be associated to them and the form\u2019s action must imperatively start with /4DACTION/MethodName.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A form can be submitted through two methods (both can be used with 4D):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `POST, usually used to send data to the Web server,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `GET, usually used to request data from the Web server.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When the Web server receives a posted form, it calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method (if it exists). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the called method, you must call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET VARIABLES`), ` command in order to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#getting-values-from-the-requests"
    }
  }, `retrieve the names and values`), ` of all the fields included in an HTML page submitted to the server.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example to define the action of a form:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In a Web application, we would like for the browsers to be able to search among the records by using a static HTML page. This page is called \u201Csearch.htm\u201D. The application contains other static pages that allow you to, for example, display the search result (\u201Cresults.htm\u201D). The POST type has been associated to the page, as well as the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/4DACTION/SEARCH`), ` action.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the HTML code that corresponds to this page:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `During data entry, type \u201CABCD\u201D in the data entry area, check the "Whole word" option and validate it by clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Search`), ` button. In the request sent to the Web server:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `vName="ABCD"
vExact="Word"
OK="Search"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method (if it exists), then the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `processForm`), ` project method is called, which is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_TEXT($1) //mandatory for compiled mode
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Send the list to the results.htm form
  //which contains a reference to the variable vLIST,
  //for example <!--4DHTML vLIST-->
  //...
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "getting-values-from-http-requests"
    }
  }, `Getting values from HTTP requests`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D's Web server lets you recover data sent through POST or GET requests, using Web forms or URLs.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the Web server receives a request with data in the header or in the URL, 4D can retrieve the values of any HTML objects it contains. This principle can be implemented in the case of a Web form, sent for example using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND FILE`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND BLOB`), `, where the user enters or modifies values, then clicks on the validation button. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, 4D can retrieve the values of the HTML objects found in the request using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET VARIABLES`), ` command. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET VARIABLES`), ` command retrieves the values as text.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Consider the following HTML page source code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<html>
<head>
  <title>Welcome</title>
  <script language="JavaScript"><!--
function GetBrowserInformation(formObj){
formObj.vtNav_appName.value = navigator.appName
formObj.vtNav_appVersion.value = navigator.appVersion
formObj.vtNav_appCodeName.value = navigator.appCodeName
formObj.vtNav_userAgent.value = navigator.userAgent
return true
}
function LogOn(formObj){
if(formObj.vtUserName.value!=""){
return true
} else {
alert("Enter your name, then try again.")
return false
}
}
//--><\/script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p> 
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> 
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p> 
<input name="vtNav_appName" value="" type="hidden"> 
<input name="vtNav_appVersion" value="" type="hidden"> 
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When 4D sends the page to a Web Browser, it looks like this:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(11172)/* ["default"] */ .Z),
    width: "446",
    height: "156"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main features of this page are:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `It includes three `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Submit`), ` buttons: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `vsbLogOn`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `vsbRegister`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `vsbInformation`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Log On`), `, the submission of the form is first processed by the JavaScript function `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `LogOn`), `. If no name is entered, the form is not even submitted to 4D, and a JavaScript alert is displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The form has a POST 4D method as well as a Submit script (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `GetBrowserInformation`), `) that copies the browser properties to the four hidden objects whose names starts with `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vtNav_App`), `.
It also includes the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `vtUserName`), ` object.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Let\u2019s examine the 4D method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WWW_STD_FORM_POST`), ` that is called when the user clicks on one of the buttons on the HTML form.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // Retrieval of value of variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_TEXT($user)
 
 Case of
 
  // The Log On button was clicked
    :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // The WWW POST EVENT method saves the information in a database table
       Else
 
          $0:=WWW Register
  // The WWW Register method lets a new Web user register
       End if
 
  // The Register button was clicked
    :(Find in array($arrNames;"vsbRegister")#-1)
       $0:=WWW Register
 
  // The Information button was clicked
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The features of this method are:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The values of the variables `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vtNav_appName`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vtNav_appVersion`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vtNav_appCodeName`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vtNav_userAgent`), ` (bound to the HTML objects having the same names) are retrieved using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET VARIABLES`), ` command from HTML objects created by the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `GetBrowserInformation`), ` JavaScript script.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Out of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vsbLogOn`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vsbRegister`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `vsbInformation`), ` variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET VARIABLES`), ` command. When the submit is performed by one of these buttons, the browser returns the value of the clicked button to 4D. This tells you which button was clicked. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in main that with HTML, all objects are text objects. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET VARIABLES`), ` command, and not the position of the element in the array as in 4D. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET VARIABLES`), ` always returns values of the Text type.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "other-web-server-commands"
    }
  }, `Other Web Server Commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D web server provides several low-level web commands allowing you to develop custom processing of requests:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET HTTP BODY`), ` command returns the body as raw text, allowing any parsing you may need`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET HTTP HEADER`), ` command return the headers of the request. It is useful to handle custom cookies, for example (along with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB SET HTTP HEADER`), ` command).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB GET BODY PART`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WEB Get body part count`), ` commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These commands are summarized in the following graphic:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(70590)/* ["default"] */ .Z),
    width: "676",
    height: "374"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D web server supports files uploaded in chunked transfer encoding from any Web client. Chunked transfer encoding is a data transfer mechanism specified in HTTP/1.1. It allows data to be transferred in a series of "chunks" (parts) without knowing the final data size. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND RAW DATA`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compiler_web-project-method"
    }
  }, `COMPILER_WEB Project Method`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The COMPILER`, `_`, `WEB method, if it exists, is systematically called when the HTTP server receives a dynamic request and calls the 4D engine. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#on-web-connection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Web Connection`)), `. This method is intended to contain typing and/or variable initialization directives used during Web exchanges. It is used by the compiler when the application is compiled. The COMPILER`, `_`, `WEB method is common to all the Web forms. By default, the COMPILER_WEB method does not exist. You must explicitly create it.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The COMPILER_WEB project method is also called, if it exists, for each SOAP request accepted.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 70590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png");

/***/ }),

/***/ 11172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png");

/***/ })

};
;