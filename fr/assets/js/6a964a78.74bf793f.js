exports.id = 57894;
exports.ids = [57894];
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

/***/ 74224:
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
var webAdmin_exports = {};
__export(webAdmin_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(webAdmin_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "webAdmin",
  title: "WebAdmin"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Admin/webAdmin",
  "id": "version-19-R6/Admin/webAdmin",
  "title": "WebAdmin",
  "description": "An embedded web server component, named WebAdmin, is used by 4D and 4D Server to provide a secured web access to specific management features such as the Data Explorer. You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application.",
  "source": "@site/versioned_docs/version-19-R6/Admin/webAdmin.md",
  "sourceDirName": "Admin",
  "slug": "/Admin/webAdmin",
  "permalink": "/docs/fr/Admin/webAdmin",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "webAdmin",
    "title": "WebAdmin"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Real Time Monitor Page",
    "permalink": "/docs/fr/ServerWindow/real-time-monitor"
  },
  "next": {
    "title": "Web Data Explorer",
    "permalink": "/docs/fr/Admin/dataExplorer"
  }
};
const assets = {};
const toc = [{
  value: "Starting the WebAdmin web server",
  id: "starting-the-webadmin-web-server",
  level: 2
}, {
  value: "Launch at startup",
  id: "launch-at-startup",
  level: 3
}, {
  value: "Start and stop",
  id: "start-and-stop",
  level: 3
}, {
  value: "WebAdmin Settings",
  id: "webadmin-settings",
  level: 2
}, {
  value: "Settings dialog box",
  id: "settings-dialog-box",
  level: 3
}, {
  value: "Web server administration automatic startup",
  id: "web-server-administration-automatic-startup",
  level: 4
}, {
  value: "Accept HTTP connections on localhost",
  id: "accept-http-connections-on-localhost",
  level: 4
}, {
  value: "HTTP Port",
  id: "http-port",
  level: 4
}, {
  value: "Accept HTTPS",
  id: "accept-https",
  level: 4
}, {
  value: "HTTPS Port",
  id: "https-port",
  level: 4
}, {
  value: "Certificate folder path",
  id: "certificate-folder-path",
  level: 4
}, {
  value: "Debug log mode",
  id: "debug-log-mode",
  level: 4
}, {
  value: "Access Key",
  id: "access-key",
  level: 4
}, {
  value: "WebAdmin Headless Configuration",
  id: "webadmin-headless-configuration",
  level: 2
}, {
  value: "Authentication and Session",
  id: "authentication-and-session",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An embedded web server component, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), `, is used by 4D and 4D Server to provide a secured web access to specific management features such as the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Admin/dataExplorer"
    }
  }, `Data Explorer`), `. You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The WebAdmin handles the authentication of users with "WebAdmin" privileges, so that they can open administration sessions and access dedicated interfaces.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature can be used in 4D applications running headless as well as 4D applications running with interfaces.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "starting-the-webadmin-web-server"
    }
  }, `Starting the WebAdmin web server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server is not launched. You need to configure the launch at startup, or (in versions with interface) launch it manually using a menu item.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "launch-at-startup"
    }
  }, `Launch at startup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can configure the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server to be launched at 4D or 4D Server application startup (before any project is loaded).  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If you use a 4D application with interface, select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `File > Web Administration > Settings...`), ` menu item.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(90675)/* ["default"] */ .Z),
    width: "470",
    height: "294"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web server administration automatic startup`), ` option in the settings dialog box:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(36780)/* ["default"] */ .Z),
    width: "702",
    height: "205"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Command Line Interface`), ` argument:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `open ~/Desktop/4D.app --webadmin-auto-start true
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the TCP port used by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#https-port"
    }
  }, `HTTPS`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#http-port"
    }
  }, `HTTP`), `, depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "start-and-stop"
    }
  }, `Start and stop`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you use a 4D application with interface, you can start or stop the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server for your project at any moment:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File > Web Administration > Start Server`), ` menu item.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(14143)/* ["default"] */ .Z),
    width: "473",
    height: "354"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The menu item becomes `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Stop Server`), ` when the server is launched; select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Stop Server`), ` to stop the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "webadmin-settings"
    }
  }, `WebAdmin Settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Configuring the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` component is mandatory in particular to define the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#access-key"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `access key`)), `. By default when the access key is not set, access via a URL is not allowed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can configure the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` component using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#settings-dialog-box"
    }
  }, `Web Administration settings dialog box`), ` (see below).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you use a headless 4D application, you can use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#webadmin-headless-configuration"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `Command Line Interface`), ` arguments`), ` to define basic settings. You will have to customize the settings file to define advanced parameters.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "settings-dialog-box"
    }
  }, `Settings dialog box`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To open the Web Administration settings dialog box, select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File > Web Administration > Settings...`), ` menu item.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(90675)/* ["default"] */ .Z),
    width: "470",
    height: "294"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following dialog box is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(52328)/* ["default"] */ .Z),
    width: "702",
    height: "462"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "web-server-administration-automatic-startup"
    }
  }, `Web server administration automatic startup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Check this option if you want the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server to be automatically launched when the 4D or 4D Server application starts (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#launching-at-startup"
    }
  }, `see above`), `). By default, this option is not checked.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "accept-http-connections-on-localhost"
    }
  }, `Accept HTTP connections on localhost`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, you will be able to connect to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server through HTTP on the same machine as the 4D application. By default, this option is checked.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Notes:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Connections with HTTP other than localhost are never accepted.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Even if this option is checked, when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#accept-https"
    }
  }, `Accept HTTPS`), ` is checked and the TLS configuration is valid, localhost connections use HTTPS.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "http-port"
    }
  }, `HTTP Port`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Port number to use for connections through HTTP to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Accept HTTP connections on localhost`), ` option is checked. Default value is 7080.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "accept-https"
    }
  }, `Accept HTTPS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, you will be able to connect to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server through HTTPS. By default, this option is checked.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "https-port"
    }
  }, `HTTPS Port`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Port number to use for connections through HTTPS to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Accept HTTPS`), ` option is checked. Default value is 7443.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "certificate-folder-path"
    }
  }, `Certificate folder path`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "debug-log-mode"
    }
  }, `Debug log mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Status or format of the HTTP request log file (HTTPDebugLog_`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `nn`), `.txt, stored in the "Logs" folder of the application -- `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `nn`), ` is the file number). The following options are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Disable`), ` (default)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `With all body parts`), ` - enabled with body parts in response and request`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Without body parts`), ` - enabled without body parts (body size is provided)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `With request body`), ` - enabled with body part in request only`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `With response body`), ` - enabled with body part in response only`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "access-key"
    }
  }, `Access Key`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Defining an access key is mandatory to unlock access to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Admin/dataExplorer"
    }
  }, `Data Explorer page`), `. An error page is returned in case of connection request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(6732)/* ["default"] */ .Z),
    width: "193",
    height: "126"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An access key is similar to a password but not associated to a login.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To define a new access key: click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Define`), ` button, enter the access key string in the dialog box and click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `OK`), `. The button label becomes `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Modify`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To modify the access key: click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Modify`), ` button, enter the new access key string in the dialog box and click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `OK`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To delete the access key: click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Modify`), ` button, let the access key area empty and click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `OK`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "webadmin-headless-configuration"
    }
  }, `WebAdmin Headless Configuration`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#webadmin-settings"
    }
  }, `WebAdmin settings`), ` are stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin.4DSettings`), ` file. There is one default `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin.4DSettings`), ` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When running a 4D or 4D Server application headless, you can set and use the default `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin.4DSettings`), ` file, or designate a custom `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4DSettings`), ` file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To set the file contents, you can use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#settings-dialog-box"
    }
  }, `WebAdmin settings dialog`), ` of the 4D application with interface and run it headless afterwards. The default `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin.4DSettings`), ` file is then used.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Or, you can set a custom `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4DSettings`), ` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Admin/cli"
    }
  }, `Command line interface`), ` to support this feature.  `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The access key is not stored in clear in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4DSettings`), ` file.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key 
 "my Fabulous AccessKey" --webadmin-auto-start true   
 --webadmin-store-settings

`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "authentication-and-session"
    }
  }, `Authentication and Session`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `When a web management page is accessed by entering a URL and without prior identification, an authentication is required. The user must enter the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#access-key"
    }
  }, `access key`), ` in an authentication dialog box. If the access key was not defined in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` settings, no access via URL is possible.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `When a web management page is accessed directly from a 4D or 4D Server menu item (such as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Records > Data Explorer`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Window > Data Explorer`), ` (4D Server)), access is granted without authentication, the user is automatically authenticated.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the access is granted, a web `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/WebServer/sessions"
    }
  }, `session`), ` with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WebAdmin`), ` component delivers requested pages.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 6732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png");

/***/ }),

/***/ 90675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png");

/***/ }),

/***/ 14143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png");

/***/ }),

/***/ 36780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png");

/***/ }),

/***/ 52328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png");

/***/ })

};
;