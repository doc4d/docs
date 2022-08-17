exports.id = 84149;
exports.ids = [84149];
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

/***/ 34553:
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
var web_exports = {};
__export(web_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(web_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "web",
  title: "Web page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "settings/web",
  "id": "version-19-R6/settings/web",
  "title": "Web page",
  "description": "Using the tabs on the Web page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see Web server. For more information about 4D Web services, refer to the Publication and use of Web Services chapter.",
  "source": "@site/versioned_docs/version-19-R6/settings/web.md",
  "sourceDirName": "settings",
  "slug": "/settings/web",
  "permalink": "/docs/settings/web",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "web",
    "title": "Web page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Client-server page",
    "permalink": "/docs/settings/client-server"
  },
  "next": {
    "title": "SQL page",
    "permalink": "/docs/settings/sql"
  }
};
const assets = {};
const toc = [{
  value: "Configuration",
  id: "configuration",
  level: 2
}, {
  value: "Publishing Information",
  id: "publishing-information",
  level: 3
}, {
  value: "Launch Web Server at Startup",
  id: "launch-web-server-at-startup",
  level: 4
}, {
  value: "Enable HTTP",
  id: "enable-http",
  level: 4
}, {
  value: "HTTP Port",
  id: "http-port",
  level: 4
}, {
  value: "IP Address",
  id: "ip-address",
  level: 4
}, {
  value: "Enable HTTPS",
  id: "enable-https",
  level: 4
}, {
  value: "HTTPS Port",
  id: "https-port",
  level: 4
}, {
  value: "Allow database access through 4DSYNC URLs",
  id: "allow-database-access-through-4dsync-urls",
  level: 4
}, {
  value: "Paths",
  id: "paths",
  level: 3
}, {
  value: "Default HTML Root",
  id: "default-html-root",
  level: 4
}, {
  value: "Default Home Page",
  id: "default-home-page",
  level: 4
}, {
  value: "Options (I)",
  id: "options-i",
  level: 2
}, {
  value: "Cache",
  id: "cache",
  level: 3
}, {
  value: "Use the 4D Web cache",
  id: "use-the-4d-web-cache",
  level: 4
}, {
  value: "Pages Cache Size",
  id: "pages-cache-size",
  level: 4
}, {
  value: "Clear Cache",
  id: "clear-cache",
  level: 4
}, {
  value: "Web Process",
  id: "web-process",
  level: 3
}, {
  value: "Scalable sessions (multi-process sessions)",
  id: "scalable-sessions-multi-process-sessions",
  level: 4
}, {
  value: "No sessions",
  id: "no-sessions",
  level: 4
}, {
  value: "Legacy sessions (single process sessions)",
  id: "legacy-sessions-single-process-sessions",
  level: 4
}, {
  value: "Maximum Concurrent Web Processes",
  id: "maximum-concurrent-web-processes",
  level: 4
}, {
  value: "Reuse Temporary Contexts",
  id: "reuse-temporary-contexts",
  level: 4
}, {
  value: "Use preemptive processes",
  id: "use-preemptive-processes",
  level: 4
}, {
  value: "Inactive Process Timeout",
  id: "inactive-process-timeout",
  level: 4
}, {
  value: "Web Passwords",
  id: "web-passwords",
  level: 3
}, {
  value: "Options (II)",
  id: "options-ii",
  level: 2
}, {
  value: "Text Conversion",
  id: "text-conversion",
  level: 3
}, {
  value: "Send Extended Characters Directly",
  id: "send-extended-characters-directly",
  level: 4
}, {
  value: "Standard Set",
  id: "standard-set",
  level: 4
}, {
  value: "Keep-Alive Connections",
  id: "keep-alive-connections",
  level: 3
}, {
  value: "CORS Settings",
  id: "cors-settings",
  level: 3
}, {
  value: "Enable CORS",
  id: "enable-cors",
  level: 4
}, {
  value: "Domain names/HTTP methods allowed",
  id: "domain-nameshttp-methods-allowed",
  level: 4
}, {
  value: "Log (type)",
  id: "log-type",
  level: 2
}, {
  value: "Log Format",
  id: "log-format",
  level: 3
}, {
  value: "Log (backup)",
  id: "log-backup",
  level: 2
}, {
  value: "Web Services",
  id: "web-services",
  level: 2
}, {
  value: "Server Side",
  id: "server-side",
  level: 3
}, {
  value: "Client Side",
  id: "client-side",
  level: 3
}, {
  value: "Web Features",
  id: "web-features",
  level: 2
}, {
  value: "Publishing",
  id: "publishing",
  level: 3
}, {
  value: "Expose as REST server",
  id: "expose-as-rest-server",
  level: 4
}, {
  value: "Access",
  id: "access",
  level: 3
}, {
  value: "Web Studio",
  id: "web-studio",
  level: 3
}, {
  value: "Enable access to the web studio",
  id: "enable-access-to-the-web-studio",
  level: 4
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the tabs on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web`), ` page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/overview"
    }
  }, `Web server`), `. For more information about 4D Web services, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html"
    }
  }, `Publication and use of Web Services`), ` chapter.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "configuration"
    }
  }, `Configuration`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "publishing-information"
    }
  }, `Publishing Information`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "launch-web-server-at-startup"
    }
  }, `Launch Web Server at Startup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerAdmin#starting-the-4d-web-server"
    }
  }, `Web server administration`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "enable-http"
    }
  }, `Enable HTTP`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Indicates whether or not the Web server will accept non-secure connections. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#enable-http"
    }
  }, `Enable HTTP`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "http-port"
    }
  }, `HTTP Port`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Listening IP (TCP) port number for HTTP. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#http-port"
    }
  }, `HTTP Port`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "ip-address"
    }
  }, `IP Address`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#ip-address-to-listen"
    }
  }, `IP Address to listen`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "enable-https"
    }
  }, `Enable HTTPS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Indicates whether or not the Web server will accept secure connections. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#enable-https"
    }
  }, `Enable HTTPS`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "https-port"
    }
  }, `HTTPS Port`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#https-port"
    }
  }, `HTTPS Port`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "allow-database-access-through-4dsync-urls"
    }
  }, `Allow database access through 4DSYNC URLs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Compatibility Note`), `: This option is `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#deprecated-settings"
    }
  }, `deprecated`), `. For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "paths"
    }
  }, `Paths`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "default-html-root"
    }
  }, `Default HTML Root`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#root-folder"
    }
  }, `Root Folder`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "default-home-page"
    }
  }, `Default Home Page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Designate a default home page for the Web server. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#default-home-page"
    }
  }, `Default Home page`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "options-i"
    }
  }, `Options (I)`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "cache"
    }
  }, `Cache`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "use-the-4d-web-cache"
    }
  }, `Use the 4D Web cache`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables the web page cache. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#cache"
    }
  }, `Cache`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "pages-cache-size"
    }
  }, `Pages Cache Size`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the cache size. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#cache"
    }
  }, `Cache`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "clear-cache"
    }
  }, `Clear Cache`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).
To do so, you just have to click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear Cache`), ` button. The cache is then immediately cleared.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also use the special URL `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerAdmin#4dcacheclear"
    }
  }, `/4DCACHECLEAR`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-process"
    }
  }, `Web Process`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area allows you to configure how the web server will handle user sessions and their associated processes. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Legacy sessions`), ` option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "scalable-sessions-multi-process-sessions"
    }
  }, `Scalable sessions (multi-process sessions)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you select this option (recommended), a user session is managed through a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Session`), ` object. See the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions#enabling-sessions"
    }
  }, `User sessions page`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "no-sessions"
    }
  }, `No sessions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is selected, the web server does not provide any specific support for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions"
    }
  }, `user sessions`), `. Successive requests from web clients are always independent and no context is maintained on the server. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this mode, you can configure additional web server setttings:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#maximum-concurrent-web-processes"
    }
  }, `Maximum Concurrent Web Processes`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#reuse-temporary-contexts"
    }
  }, `Reuse Temporary Contexts (4D in remote mode)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#use-preemptive-web-processes"
    }
  }, `Use preemptive processes`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "legacy-sessions-single-process-sessions"
    }
  }, `Legacy sessions (single process sessions)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Compatibility Note:`), ` This option is only available in databases/projects created with a 4D version prior to 4D v18 R6.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html"
    }
  }, `Web Sessions Management (Legacy)`), ` section. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#keep-session"
    }
  }, `Keep Session`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When selected, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#reuse-temporary-contexts"
    }
  }, `Reuse Temporary Contexts (4D in remote mode)`), ` option is automatically checked (and locked).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "maximum-concurrent-web-processes"
    }
  }, `Maximum Concurrent Web Processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Not available with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions"
    }
  }, `scalable sessions`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Strictly high limit of concurrent web processes. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#maximum-concurrent-web-processes"
    }
  }, `Maximum Concurrent Web Processes`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "reuse-temporary-contexts"
    }
  }, `Reuse Temporary Contexts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Not available with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions"
    }
  }, `scalable sessions`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows you to optimize the operation of the 4D Web server in remote mode. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#reuse-temporary-contexts-in-remote-mode"
    }
  }, `Reuse temporary contexts in remote mode)`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "use-preemptive-processes"
    }
  }, `Use preemptive processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Not available with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions"
    }
  }, `scalable sessions`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables preemptive web processes in your compiled applications. When `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Use preemptive processes`), ` is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/preemptiveWeb"
    }
  }, `Using preemptive Web processes`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"
    }
  }, `Enabling the preemptive mode for the web server`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "inactive-process-timeout"
    }
  }, `Inactive Process Timeout`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Not available with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/sessions"
    }
  }, `scalable sessions`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows you to set the maximum timeout before closing for inactive Web processes on the server. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#inactive-process-timeout"
    }
  }, `Inactive Process Timeout`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-passwords"
    }
  }, `Web Passwords`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Set the authentication system that you want to apply to your Web server. Three options are proposed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Custom (default)
Passwords with BASIC protocol
Passwords with DIGEST protocol`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Custom`), ` authentication is recommended. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/authentication"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Authentication`)), ` chapter in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Web Development`), ` documentation.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "options-ii"
    }
  }, `Options (II)`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "text-conversion"
    }
  }, `Text Conversion`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "send-extended-characters-directly"
    }
  }, `Send Extended Characters Directly`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#deprecated-settings"
    }
  }, `Deprecated Settings`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "standard-set"
    }
  }, `Standard Set`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Define the set of characters to be used by the 4D Web server. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#character-set"
    }
  }, `Character Set`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "keep-alive-connections"
    }
  }, `Keep-Alive Connections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#keep-alive-connections"
    }
  }, `Deprecated Settings`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "cors-settings"
    }
  }, `CORS Settings`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "enable-cors"
    }
  }, `Enable CORS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables Cross-origin resource sharing (CORS) service. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#enable-cors-service"
    }
  }, `Enable CORS Service`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "domain-nameshttp-methods-allowed"
    }
  }, `Domain names/HTTP methods allowed`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `List of allowed hosts and methods for the CORS service. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#cors-settings"
    }
  }, `CORS Settings`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "log-type"
    }
  }, `Log (type)`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "log-format"
    }
  }, `Log Format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Starts or stops the recording of requests received by the 4D web server in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `logweb.txt`), ` file and sets its format. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/WebServer/webServerConfig#log-recording"
    }
  }, `Log Recording`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The activation and deactivation of the log file of requests can also be carried out by programming using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page1210.html"
    }
  }, `WEB SET OPTION`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The log format menu provides the following options:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Log File`), `: When this option is selected, 4D will not generate a log file of requests.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `CLF (Common Log Format)`), `: When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:\\
host rfc931 user `, `[DD/MMM/YYYY:HH:MM:SS]`, ` "request" state length\\
Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `host: IP address of the client (ex. 192.100.100.10)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `rfc931: information not generated by 4D, it's always - (a minus sign)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `user: user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The date and time are local to the server.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `request: request sent by the client (ex. GET /index.htm HTTP/1.0)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `state: reply given by the server.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `length: size of the data returned (except the HTTP header) or 0.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds.
The possible values of state are as follows:
200: OK
204: No contents
302: Redirection
304: Not modified
400: Incorrect request
401: Authentication required
404: Not found
500: Internal error
The CLF format cannot be customized.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `DLF (Combined Log Format)`), `: When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Referer: Contains the URL of the page pointing to the requested document.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `User-agent: Contains the name and version of the browser or software of the client at the origin of the request.`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The DLF format cannot be customized.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ELF (Extended Log Format)`), `: When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `WLF (WebStar Log Format)`), `: When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Configuring the fields`), `
When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note`), `: You cannot select the same field twice.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table lists the fields available for each format (in alphabetical order) and describes its contents:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Field`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ELF`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `WLF`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `BYTES_RECEIVED`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of bytes received by the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `BYTES_SENT`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of bytes sent by the server to the client`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `C_DNS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the DNS (ELF: field identical to the C_IP field)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `C_IP`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the client (for example 192.100.100.10)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CONNECTION_ID`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Connection ID number`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(COOKIE)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Information about cookies contained in the HTTP request`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(HOST)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Host field of the HTTP request`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(REFERER)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL of the page pointing to the requested document`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(USER_AGENT)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Information about the software and operating system of the client`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_SIP`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `CS_URI`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URI on which the request is made`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_URI_QUERY`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Request query parameters`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_URI_STEM`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Part of request without query parameters`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DATE`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `METHOD`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HTTP method used for the request sent to the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `PATH_ARGS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CGI parameters: string located after the "$" character`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `STATUS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reply provided by the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TIME`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH: hour, MM: minutes, SS: seconds`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TRANSFER_TIME`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time requested by server to generate the reply`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `USER`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User name if authenticated; otherwise - (minus sign).`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `If the user name contains spaces, they are replaced by _ (underlines)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL requested by the client`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Dates and times are given in GMT.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "log-backup"
    }
  }, `Log (backup)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Backup`), `: The scheduled backup function is deactivated.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X hour(s)`), `: This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 .`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `starting at`), `: Used to set the time at which the first back up will begin.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X day(s) at X`), `: This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X week(s), day at X`), `: This option is used to program backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X month(s), Xth day at X`), `: This option is used to program backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup must be started.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X MB`), `: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "web-services"
    }
  }, `Web Services`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the support of Web Services in 4D, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html"
    }
  }, `Publication and use of Web Services`), ` chapter.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "server-side"
    }
  }, `Server Side`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Allow Web Services Requests`), `: This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Published in WSDL`), ` attribute. When this option is checked, 4D creates the WSDL file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Web Service Name`), `: This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Web Services Namespace`), `: This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "http://mycompany.com/mynamespace"
    }
  }, `http://mycompany.com/mynamespace`), `). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "http://www.4d.com/namespace/default"
    }
  }, `http://www.4d.com/namespace/default`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "client-side"
    }
  }, `Client Side`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Wizard Method Prefix`), `: This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "web-features"
    }
  }, `Web Features`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This page contains the options used to enable and control advanced Web features such as the REST server.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "publishing"
    }
  }, `Publishing`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "expose-as-rest-server"
    }
  }, `Expose as REST server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Starts and stops the REST Server. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/REST/configuration"
    }
  }, `REST Server Configuration`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "access"
    }
  }, `Access`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/REST/configuration#configuring-rest-access"
    }
  }, `Configuring REST access`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-studio"
    }
  }, `Web Studio`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "enable-access-to-the-web-studio"
    }
  }, `Enable access to the web studio`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables general access to the web studio. You still need to configure it at every project level.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;