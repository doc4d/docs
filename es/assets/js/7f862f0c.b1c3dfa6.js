exports.id = 88602;
exports.ids = [88602];
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

/***/ 82020:
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
var ClassFunctions_exports = {};
__export(ClassFunctions_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(ClassFunctions_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "classFunctions",
  title: "Calling ORDA class functions"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "REST/classFunctions",
  "id": "version-19-R6/REST/classFunctions",
  "title": "Calling ORDA class functions",
  "description": "You can call data model class functions defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.",
  "source": "@site/versioned_docs/version-19-R6/REST/ClassFunctions.md",
  "sourceDirName": "REST",
  "slug": "/REST/classFunctions",
  "permalink": "/docs/es/REST/classFunctions",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "classFunctions",
    "title": "Calling ORDA class functions"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Manipulating Data",
    "permalink": "/docs/es/REST/manData"
  },
  "next": {
    "title": "About REST Requests",
    "permalink": "/docs/es/REST/REST_requests"
  }
};
const assets = {};
const toc = [{
  value: "Function calls",
  id: "function-calls",
  level: 2
}, {
  value: "Parameters",
  id: "parameters",
  level: 2
}, {
  value: "Scalar value parameter",
  id: "scalar-value-parameter",
  level: 3
}, {
  value: "Entity parameter",
  id: "entity-parameter",
  level: 3
}, {
  value: "Related entity parameter",
  id: "related-entity-parameter",
  level: 4
}, {
  value: "Entity selection parameter",
  id: "entity-selection-parameter",
  level: 3
}, {
  value: "Request examples",
  id: "request-examples",
  level: 2
}, {
  value: "Using a datastore class function",
  id: "using-a-datastore-class-function",
  level: 3
}, {
  value: "Result",
  id: "result",
  level: 4
}, {
  value: "Using a dataclass class function",
  id: "using-a-dataclass-class-function",
  level: 3
}, {
  value: "Result",
  id: "result-1",
  level: 4
}, {
  value: "Using an entity class function",
  id: "using-an-entity-class-function",
  level: 3
}, {
  value: "Result",
  id: "result-2",
  level: 4
}, {
  value: "Using an entitySelection class function",
  id: "using-an-entityselection-class-function",
  level: 3
}, {
  value: "Result",
  id: "result-3",
  level: 4
}, {
  value: "Using an entitySelection class function and an entitySet",
  id: "using-an-entityselection-class-function-and-an-entityset",
  level: 3
}, {
  value: "Result",
  id: "result-4",
  level: 4
}, {
  value: "Using an entitySelection class function and an orderBy",
  id: "using-an-entityselection-class-function-and-an-orderby",
  level: 3
}, {
  value: "Result",
  id: "result-5",
  level: 4
}, {
  value: "Using an entity to be created on the server",
  id: "using-an-entity-to-be-created-on-the-server",
  level: 3
}, {
  value: "Result",
  id: "result-6",
  level: 4
}, {
  value: "Using an entity to be updated on the server",
  id: "using-an-entity-to-be-updated-on-the-server",
  level: 3
}, {
  value: "Result",
  id: "result-7",
  level: 4
}, {
  value: "Creating an entity with a related entity",
  id: "creating-an-entity-with-a-related-entity",
  level: 3
}, {
  value: "Result",
  id: "result-8",
  level: 4
}, {
  value: "Updating an entity with a related entity",
  id: "updating-an-entity-with-a-related-entity",
  level: 3
}, {
  value: "Result",
  id: "result-9",
  level: 4
}, {
  value: "Receiving an entity selection as parameter",
  id: "receiving-an-entity-selection-as-parameter",
  level: 3
}, {
  value: "Result",
  id: "result-10",
  level: 4
}, {
  value: "Using an entity selection updated on the client",
  id: "using-an-entity-selection-updated-on-the-client",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can call `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/ORDA/ordaClasses"
    }
  }, `data model class functions`), ` defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Functions are simply called in POST requests on the appropriate ORDA interface, without (). For example, if you have defined a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getCity()`), ` function in the City dataclass class, you could call it using the following request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/City/getCity`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `with data in the body of the POST request: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `["Aguada"]`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In 4D language, this call is equivalent to, :`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$city:=ds.City.getCity("Aguada")
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Only functions with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `exposed`), ` keyword can be directly called from REST requests. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/ORDA/ordaClasses#exposed-vs-non-exposed-functions"
    }
  }, `Exposed vs non-exposed functions`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "function-calls"
    }
  }, `Function calls`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Functions must always be called using REST `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` requests (a GET request will receive an error).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Functions are called on the corresponding object on the server datastore.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Class function`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Syntax`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/ORDA/ordaClasses#datastore-class"
    }
  }, `datastore class`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/$catalog/DataStoreClassFunction`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/ORDA/ordaClasses#dataclass-class"
    }
  }, `dataclass class`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}/DataClassClassFunction`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/ORDA/ordaClasses#entityselection-class"
    }
  }, `entitySelection class`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}/EntitySelectionClassFunction`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}/EntitySelectionClassFunction/$filter`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}/EntitySelectionClassFunction/$orderby`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/ORDA/ordaClasses#entity-class"
    }
  }, `entity class`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `/rest/{dataClass}(key)/EntityClassFunction/`))))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/{dataClass}/Function`), ` can be used to call either a dataclass or an entity selection function (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/{dataClass}`), ` returns all entities of the DataClass as an entity selection).
The function is searched in the entity selection class first. If not found, it is searched in the dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `All 4D code called from REST requests `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `must be thread-safe`), ` if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `Use preemptive process`), ` setting value`), ` is ignored by the REST Server).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "parameters"
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following rules apply:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Parameters must be passed in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `body of the POST request`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Parameters must be enclosed within a collection (JSON format)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `All scalar data types supported in JSON collections can be passed as parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `DATACLASS,`), `ENTITY, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `ENTITIES,`), `DATASET.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#request-receiving-an-entity-as-parameter"
    }
  }, `this example`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#request-receiving-an-entity-selection-as-parameter"
    }
  }, `this example`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scalar-value-parameter"
    }
  }, `Scalar value parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a  dataclass function `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getCities()`), ` receiving text parameters:
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/City/getCities`), `  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Parameters in body:`), ` `, `["Aguada","Paris"]`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-parameter"
    }
  }, `Entity parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entities passed in parameters are referenced on the server through their key (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), ` __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server.
You can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server.`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Properties`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Attributes of the entity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `mixed`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Optional - Values to modify`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `__DATACLASS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mandatory - Indicates the Dataclass of the entity`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `__ENTITY`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mandatory - True to indicate to the server that the parameter is an entity`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `__KEY`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `mixed (same type as the primary key)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Optional - Primary key of the entity`)))), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If __KEY is not provided, a new entity is created on the server with the given attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `KEY is provided, the entity corresponding to`), `KEY is loaded on the server with the given attributes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See examples for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#creating-an-entity"
    }
  }, `creating`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#updating-an-entity"
    }
  }, `updating`), ` entities.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "related-entity-parameter"
    }
  }, `Related entity parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Same properties as for an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-parameter"
    }
  }, `entity parameter`), `. In addition, the related entity must exist and is referenced by __KEY containing its primary key.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See examples for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#creating-an-entity-with-a-related-entity"
    }
  }, `creating`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#updating-an-entity-with-a-related-entity"
    }
  }, `updating`), ` entities with related entities.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-selection-parameter"
    }
  }, `Entity selection parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entity selection must have been defined beforehand using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/REST/method#methodentityset"
    }
  }, `$method=entityset`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection.`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Properties`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Attributes of the entity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `mixed`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Optional - Values to modify`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `__DATASET`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mandatory - entitySetID (UUID) of the entity selection`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `__ENTITIES`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mandatory - True to indicate to the server that the parameter is an entity selection`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See example for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#receiving-an-entity-selection-as-parameter"
    }
  }, `receiving an entity selection`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "request-examples"
    }
  }, `Request examples`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This database is exposed as a remote datastore on localhost (port 8111):`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "alt-text",
    src: (__webpack_require__(69676)/* ["default"] */ .Z),
    width: "882",
    height: "599"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-a-datastore-class-function"
    }
  }, `Using a datastore class function`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The US_Cities `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DataStore`), ` class provides an API:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// DataStore class

Class extends DataStoreImplementation

exposed Function getName()
    $0:="US cities and zip codes manager" 
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then run this request:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8111/rest/$catalog/getName`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
"result": "US cities and zip codes manager" 
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-a-dataclass-class-function"
    }
  }, `Using a dataclass class function`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Dataclass class `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `City`), ` provides an API that returns a city entity from a name passed in parameter:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// City class

Class extends DataClass

exposed Function getCity()
 var $0 : cs.CityEntity
 var $1,$nameParam : text
 $nameParam:=$1
 $0:=This.query("name = :1";$nameParam).first()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then run this request:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8111/rest/City/getCity`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Body of the request: `, `["Aguada"]`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-1"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The result is an entity:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "__entityModel": "City",
    "__DATACLASS": "City",
    "__KEY": "1",
    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",
    "__STAMP": 1,
    "ID": 1,
    "name": "Aguada",
    "countyFIPS": 72003,
    "county": {
        "__deferred": {
            "uri": "/rest/County(72003)",
            "__KEY": "72003" 
        }
    },
    "zips": {
        "__deferred": {
            "uri": "/rest/City(1)/zips?$expand=zips" 
        }
    }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entity-class-function"
    }
  }, `Using an entity class function`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Entity class `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CityEntity`), ` provides an API:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// CityEntity class

Class extends Entity

exposed Function getPopulation()
    $0:=This.zips.sum("population")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then run this request:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8111/rest/City(2)/getPopulation`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-2"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": 48814
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entityselection-class-function"
    }
  }, `Using an entitySelection class function`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The EntitySelection class `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CitySelection`), ` provides an API:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// CitySelection class

Class extends EntitySelection

exposed Function getPopulation()
    $0:=This.zips.sum("population")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then run this request:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-3"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": 87256
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entityselection-class-function-and-an-entityset"
    }
  }, `Using an entitySelection class function and an entitySet`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `StudentsSelection`), ` class has a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getAgeAverage`), ` function:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// StudentsSelection Class

Class extends EntitySelection

exposed Function getAgeAverage
 C_LONGINT($sum;$0)
 C_OBJECT($s)

 $sum:=0
 For each ($s;This)
     $sum:=$sum+$s.age()
 End for each 
 $0:=$sum/This.length
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have created an entityset, you can run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-4"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": 34
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entityselection-class-function-and-an-orderby"
    }
  }, `Using an entitySelection class function and an orderBy`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `StudentsSelection`), ` class has a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getLastSummary`), ` function:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// StudentsSelection Class


Class extends EntitySelection

exposed Function getLastSummary
 C_TEXT($0)
 C_OBJECT($last)

 $last:=This.last()
 $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-5"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": "Wilbert - Bull is ... 21" 
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entity-to-be-created-on-the-server"
    }
  }, `Using an entity to be created on the server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Dataclass class `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Students`), ` has the function `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `pushData()`), ` receiving an entity containing data from the client. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `checkData()`), ` method runs some controls. If they are OK, the entity is saved and returned.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// Students Class

Class extends DataClass

exposed Function pushData
 var $1, $entity, $status, $0 : Object

 $entity:=$1

 $status:=checkData($entity) // $status is an object with a success boolean property

 $0:=$status

 If ($status.success)
     $status:=$entity.save()
     If ($status.success)
         $0:=$entity
     End if 
 End if

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students/pushData`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Body of the request:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"Ann",
"lastname":"Brown" 
}]
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since no `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `__KEY`), ` is given, a new Students entity is loaded on the server `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `with the attributes received from the client`), `. Because the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `pushData()`), ` function runs a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `save()`), ` action, the new entity is created.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-6"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",
    "__STAMP": 1,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWN",
    "schoolID": null,
    "school": null
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entity-to-be-updated-on-the-server"
    }
  }, `Using an entity to be updated on the server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Same as above but with a __KEY attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST:`), /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students/pushData`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Body of the request:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[{
"__DATACLASS":"Students",
"__ENTITY":true,
"lastname":"Brownie",
"__KEY":55
}]
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `__KEY`), ` is given, the Students entity with primary key 55 is loaded `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `with the lastname value received from the client`), `. Because the function runs a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `save()`), ` action, the entity is updated.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-7"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "55",
    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",
    "__STAMP": 3,
    "ID": 55,
    "firstname": "Ann",
    "lastname": "BROWNIE",
    "schoolID": null,
    "school": null 
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "creating-an-entity-with-a-related-entity"
    }
  }, `Creating an entity with a related entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, we create a new Students entity with the Schools entity having primary key 2.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST:`), /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students/pushData`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Body of the request:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[{
"__DATACLASS":"Students",
"__ENTITY":true,
"firstname":"John",
"lastname":"Smith",
"school":{"__KEY":2}
}]
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-8"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "__entityModel": "Students",
    "__DATACLASS": "Students",
    "__KEY": "56",
    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",
    "__STAMP": 1,
    "ID": 56,
    "firstname": "John",
    "lastname": "SMITH",
    "schoolID": 2,
       "school": {
        "__deferred": {
            "uri": "/rest/Schools(2)",
            "__KEY": "2" 
        }
    }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "updating-an-entity-with-a-related-entity"
    }
  }, `Updating an entity with a related entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, we associate an existing school to a Students entity. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `StudentsEntity`), ` class has an API:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// StudentsEntity class

Class extends Entity

exposed Function putToSchool()
 var $1, $school , $0, $status : Object

  //$1 is a Schools entity
 $school:=$1
  //Associate the related entity school to the current Students entity
 This.school:=$school

 $status:=This.save()

 $0:=$status
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You run this request, called on a Students entity :
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students(1)/putToSchool`), `
Body of the request:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[{
"__DATACLASS":"Schools",
"__ENTITY":true,
"__KEY":2
}]
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-9"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": {
        "success": true
    }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "receiving-an-entity-selection-as-parameter"
    }
  }, `Receiving an entity selection as parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Students`), ` Dataclass class, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `setFinalExam()`), ` function updates a received entity selection ($1). It actually updates the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `finalExam`), ` attribute with the received value ($2). It returns the primary keys of the updated entities.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// Students class

Class extends DataClass

exposed Function setFinalExam()

    var $1, $es, $student, $status : Object
    var $2, $examResult : Text

    var $keys, $0 : Collection

      //Entity selection
    $es:=$1

    $examResult:=$2

    $keys:=New collection()

      //Loop on the entity selection
    For each ($student;$es)
        $student.finalExam:=$examResult
        $status:=$student.save()
        If ($status.success)
            $keys.push($student.ID)
        End if 
    End for each 

    $0:=$keys
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity set is first created with this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can run this request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `POST`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8044/rest/Students/setFinalExam`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Body of the request:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[
{
"__ENTITIES":true,
"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" 
},
"Passed" 
]

`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "result-10"
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entities with primary keys 1 and 2 have been updated.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "result": [
        1,
        2
    ]
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-an-entity-selection-updated-on-the-client"
    }
  }, `Using an entity selection updated on the client`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getAgeAverage()`), ` function `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#using-an-entityselection-class-function-and-an-entityset"
    }
  }, `defined above`), `.  `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $remoteDS, $newStudent, $students : Object
var $ageAverage : Integer

$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")

// $newStudent is a student entity to procees
$newStudent:=...
$students:=$remoteDS.Students.query("school.name = :1";"Math school")
// We add an entity to the $students entity selection on the client
$students.add($newStudent) 

// We call a function on the StudentsSelection class returning the age average of the students in the entity selection
// The function is executed on the server on the updated $students entity selection which included the student added from the client
$ageAverage:=$students.getAgeAverage()
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 69676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png");

/***/ })

};
;