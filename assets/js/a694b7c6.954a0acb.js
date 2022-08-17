exports.id = 69559;
exports.ids = [69559];
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

/***/ 50869:
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
var configuration_exports = {};
__export(configuration_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(configuration_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "configuration",
  title: "Server Configuration"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "REST/configuration",
  "id": "version-19/REST/configuration",
  "title": "Server Configuration",
  "description": "Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, i.e. to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.",
  "source": "@site/versioned_docs/version-19/REST/configuration.md",
  "sourceDirName": "REST",
  "slug": "/REST/configuration",
  "permalink": "/docs/19/REST/configuration",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "configuration",
    "title": "Server Configuration"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Getting Started",
    "permalink": "/docs/19/REST/gettingStarted"
  },
  "next": {
    "title": "Users and sessions",
    "permalink": "/docs/19/REST/authUsers"
  }
};
const assets = {};
const toc = [{
  value: "Starting the REST Server",
  id: "starting-the-rest-server",
  level: 2
}, {
  value: "Configuring REST access",
  id: "configuring-rest-access",
  level: 2
}, {
  value: "Using the Structure Settings",
  id: "using-the-structure-settings",
  level: 3
}, {
  value: "Using the On REST Authentication database method",
  id: "using-the-on-rest-authentication-database-method",
  level: 3
}, {
  value: "Exposing tables and fields",
  id: "exposing-tables-and-fields",
  level: 2
}, {
  value: "Exposing tables",
  id: "exposing-tables",
  level: 3
}, {
  value: "Exposing fields",
  id: "exposing-fields",
  level: 3
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), ` to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To start using the REST features, you need to start and configure the 4D REST server.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `On 4D Server, opening a REST session requires that a free 4D client licence is available.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `On 4D single-user, you can open up to three REST sessions for testing purposes.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You need to manage the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/REST/authUsers"
    }
  }, `session`), ` for your requesting application.  `))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "starting-the-rest-server"
    }
  }, `Starting the REST Server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For security reasons, by default, 4D does not respond to REST requests. If you want to start the REST Server, you must check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST server`), ` option in the "Web/REST resource" page of the structure settings in order for REST requests to be processed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(74669)/* ["default"] */ .Z),
    width: "862",
    height: "377"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You must restart the 4D application for your changes to take effect.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "configuring-rest-access"
    }
  }, `Configuring REST access`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can configuring REST accesses with one of the following means:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `assigning a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Read/Write`), ` user group to REST services in the "Web/REST resource" page of the Structure Settings;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `writing an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On REST Authentication`), ` database method to intercept and handle every initial REST request.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You cannot use both features simultaneously. Once an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On REST Authentication`), ` database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Structure Settings is ignored.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-structure-settings"
    }
  }, `Using the Structure Settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Read/Write`), ` menu in the "Web/REST resource" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the menu displays `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<Anyone>`), `, which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/REST/authUsers"
    }
  }, `access 4D by means of a REST request`), `. If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In order for this setting to take effect, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On REST Authentication`), ` database method must not be defined. If it exists, 4D ignores access settings defined in the Structure Settings.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-on-rest-authentication-database-method"
    }
  }, `Using the On REST Authentication database method`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On REST Authentication`), ` database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/REST/authUsers"
    }
  }, `request to open a REST session`), ` is received, the connection identifiers are provided in the header of the request. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On REST Authentication`), ` database method is called so that you can evaluate these identifiers. You can use the list of users for the 4D application or you can use your own table of identifiers.
For more information, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On REST Authentication`), ` database method `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html"
    }
  }, `documentation`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "exposing-tables-and-fields"
    }
  }, `Exposing tables and fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/ORDA/dsmapping#datastore"
    }
  }, `datastore interface`), `. Thus, it can use their data. For example, if your database contains an `, `[Employee]`, ` table, it is possible to write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This request will return all employees whose salary field is higher than 10000.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "exposing-tables"
    }
  }, `Exposing tables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, all tables are exposed in REST.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a `, `[Users]`, ` table storing user names and passwords, it would be better not to expose it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove the REST exposure for a table:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Display the Table Inspector in the Structure editor and select the table you want to modify.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Uncheck the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST resource`), ` option:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(63403)/* ["default"] */ .Z),
    width: "279",
    height: "330"
  }), `
Do this for each table whose exposure needs to be modified.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "exposing-fields"
    }
  }, `Exposing fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, all 4D database fields are exposed in REST.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the `, `[Employees]`, `Salary field.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove the REST exposure for a field:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Display the Field Inspector in the Structure editor and select the field you want to modify.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Uncheck the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST resource`), ` for the field.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(17216)/* ["default"] */ .Z),
    width: "279",
    height: "271"
  }), `
Repeat this for each field whose exposure needs to be modified.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 74669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png");

/***/ }),

/***/ 17216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png");

/***/ }),

/***/ 63403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/table-1c946003f2068cb28b604481145c98a8.png");

/***/ })

};
;