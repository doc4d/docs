exports.id = 67540;
exports.ids = [67540];
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

/***/ 36375:
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
var ordaClasses_exports = {};
__export(ordaClasses_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(ordaClasses_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "ordaClasses",
  title: "Data Model Classes"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/ordaClasses",
  "id": "version-19-R6/ORDA/ordaClasses",
  "title": "Data Model Classes",
  "description": 'ORDA allows you to create high-level class functions above the data model. This allows you to write business-oriented code and "publish" it just like an API. Datastore, dataclasses, entity selections, and entities are all available as class objects that can contain functions.',
  "source": "@site/versioned_docs/version-19-R6/ORDA/ordaClasses.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/ordaClasses",
  "permalink": "/docs/fr/ORDA/ordaClasses",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "ordaClasses",
    "title": "Data Model Classes"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Data Model Objects",
    "permalink": "/docs/fr/ORDA/dsmapping"
  },
  "next": {
    "title": "Working with data",
    "permalink": "/docs/fr/ORDA/entities"
  }
};
const assets = {};
const toc = [{
  value: "Architecture",
  id: "architecture",
  level: 2
}, {
  value: "Class Description",
  id: "class-description",
  level: 2
}, {
  value: "DataStore Class",
  id: "datastore-class",
  level: 3
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: "DataClass Class",
  id: "dataclass-class",
  level: 3
}, {
  value: "Example",
  id: "example-1",
  level: 4
}, {
  value: "Example with a remote datastore",
  id: "example-with-a-remote-datastore",
  level: 4
}, {
  value: "EntitySelection Class",
  id: "entityselection-class",
  level: 3
}, {
  value: "Example",
  id: "example-2",
  level: 4
}, {
  value: "Entity Class",
  id: "entity-class",
  level: 3
}, {
  value: "Computed attributes",
  id: "computed-attributes",
  level: 4
}, {
  value: "Alias attributes",
  id: "alias-attributes",
  level: 4
}, {
  value: "Example",
  id: "example-3",
  level: 4
}, {
  value: "Specific rules",
  id: "specific-rules",
  level: 3
}, {
  value: "Preemptive execution",
  id: "preemptive-execution",
  level: 3
}, {
  value: "Computed attributes",
  id: "computed-attributes-1",
  level: 2
}, {
  value: "Overview",
  id: "overview",
  level: 3
}, {
  value: "How to define computed attributes",
  id: "how-to-define-computed-attributes",
  level: 3
}, {
  value: "<code>Function get &lt;attributeName&gt;</code>",
  id: "function-get-attributename",
  level: 3
}, {
  value: "Syntax",
  id: "syntax",
  level: 4
}, {
  value: "Examples",
  id: "examples",
  level: 4
}, {
  value: "<code>Function set &lt;attributeName&gt;</code>",
  id: "function-set-attributename",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-1",
  level: 4
}, {
  value: "Example",
  id: "example-4",
  level: 4
}, {
  value: "<code>Function query &lt;attributeName&gt;</code>",
  id: "function-query-attributename",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-2",
  level: 4
}, {
  value: "Examples",
  id: "examples-1",
  level: 4
}, {
  value: "<code>Function orderBy &lt;attributeName&gt;</code>",
  id: "function-orderby-attributename",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-3",
  level: 4
}, {
  value: "Example",
  id: "example-5",
  level: 4
}, {
  value: "Alias attributes",
  id: "alias-attributes-1",
  level: 2
}, {
  value: "Overview",
  id: "overview-1",
  level: 3
}, {
  value: "How to define alias attributes",
  id: "how-to-define-alias-attributes",
  level: 3
}, {
  value: "<code>Alias &lt;attributeName&gt; &lt;targetPath&gt;</code>",
  id: "alias-attributename-targetpath",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-4",
  level: 4
}, {
  value: "Using alias attributes",
  id: "using-alias-attributes",
  level: 3
}, {
  value: "Alias properties",
  id: "alias-properties",
  level: 3
}, {
  value: "Examples",
  id: "examples-2",
  level: 3
}, {
  value: "Exposed vs non-exposed functions",
  id: "exposed-vs-non-exposed-functions",
  level: 2
}, {
  value: "Example",
  id: "example-6",
  level: 3
}, {
  value: "Local functions",
  id: "local-functions",
  level: 2
}, {
  value: "Examples",
  id: "examples-3",
  level: 3
}, {
  value: "Calculating age",
  id: "calculating-age",
  level: 4
}, {
  value: "Checking attributes",
  id: "checking-attributes",
  level: 4
}, {
  value: "Support in 4D IDE",
  id: "support-in-4d-ide",
  level: 2
}, {
  value: "Class files",
  id: "class-files",
  level: 3
}, {
  value: "Creating classes",
  id: "creating-classes",
  level: 3
}, {
  value: "Editing classes",
  id: "editing-classes",
  level: 3
}, {
  value: "Code Editor",
  id: "code-editor",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `ORDA allows you to create high-level class functions above the data model. This allows you to write business-oriented code and "publish" it just like an API. Datastore, dataclasses, entity selections, and entities are all available as class objects that can contain functions.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you could create a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getNextWithHigherSalary()`), ` function in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EmployeeEntity`), ` class to return employees with a salary higher than the selected one. It would be as simple as calling:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$nextHigh:=ds.Employee(1).getNextWithHigherSalary()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Developers can not only use these functions in local datastores, but also in client/server and remote architectures:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //$cityManager is the reference of a remote datastore
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Thanks to this feature, the entire business logic of your 4D application can be stored as a independent layer so that it can be easily maintained and reused with a high level of security:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `You can "hide" the overall complexity of the underlying physical structure and only expose understandable and ready-to-use functions. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If the physical structure evolves, you can simply adapt function code and client applications will continue to call them transparently. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `By default, all of your data model class functions (including `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#computed-attributes-1"
    }
  }, `computed attribute functions`), `) and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alias-attributes-1"
    }
  }, `alias attributes`), ` are `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `not exposed`), ` to remote applications and cannot be called from REST requests. You must explicitly declare each public function and alias with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#exposed-vs-non-exposed-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `exposed`)), ` keyword.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22448)/* ["default"] */ .Z),
    width: "1532",
    height: "1132"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition, 4D `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#creating-classes"
    }
  }, `automatically pre-creates`), ` the classes for each available data model object. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "architecture"
    }
  }, `Architecture`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `ORDA provides `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `generic classes`), ` exposed through the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `4D`)), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-stores"
    }
  }, `class store`), `, as well as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `user classes`), ` (extending generic classes) exposed in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `cs`)), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-stores"
    }
  }, `class store`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(91644)/* ["default"] */ .Z),
    width: "769",
    height: "567"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All ORDA data model classes are exposed as properties of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `cs`)), ` class store. The following ORDA classes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Class`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Instantiated by`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.DataStore`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.DataStore`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataStoreClass#ds"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `ds`)), ` command`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `DataClassName`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.Employee`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataStoreClass#dataclassname"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataStore.DataClassName`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `dataStore["DataClassName"]`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `DataClassName`), `Entity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.EmployeeEntity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#get"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.get()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#new"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.new()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#first"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.first()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#last"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.last()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#previous"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.previous()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#next"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.next()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#first"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.first()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#last"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.last()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#clone"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.clone()`)))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `DataClassName`), `Selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cs.EmployeeSelection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#query"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.query()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#query"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.query()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#all"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.all()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#fromcollection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.fromCollection()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#newselection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `dataClass.newSelection()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#drop"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.drop()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntityClass#getselection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.getSelection()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#and"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.and()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#minus"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.minus()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#or"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.or()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#or"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.orderBy()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#orderbyformula"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.orderByFormula()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass#slice"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entitySelection.slice()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Create entity selection`))))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA user classes are stored as regular class files (.4dm) in the Classes subfolder of the project `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-files"
    }
  }, `(see below)`), `.  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Also, object instances from ORDA data model user classes benefit from their parent's properties and functions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a Datastore class object can call functions from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/DataStoreClass"
    }
  }, `ORDA Datastore generic class`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a Dataclass class object can call functions from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/DataClassClass"
    }
  }, `ORDA Dataclass generic class`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an Entity selection class object can call functions from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass"
    }
  }, `ORDA Entity selection generic class`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an Entity class object can call functions from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/EntityClass"
    }
  }, `ORDA Entity generic class`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-description"
    }
  }, `Class Description`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v19 R4`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Alias attributes in the Entity Class`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v19 R3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Computed attributes in the Entity Class`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v18 R5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data model class functions are not exposed to REST by default. New `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `exposed`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `local`), ` keywords.`))))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "datastore-class"
    }
  }, `DataStore Class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D database exposes its own DataStore class in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs`), ` class store. `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Extends`), `: 4D.DataStoreImplementation `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Class name`), `: cs.DataStore`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create functions in the DataStore class that will be available through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` object. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This function can then be called:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$desc:=ds.getDesc() //"Database exposing..."
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "dataclass-class"
    }
  }, `DataClass Class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each table exposed with ORDA offers a DataClass class in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs`), ` class store.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Extends`), `: 4D.DataClass `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Class name`), `: cs.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), ` (where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), ` is the table name)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Example name`), `: cs.Employee`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4D"
    }
  }, `// cs.Company class


Class extends DataClass

// Returns companies whose revenue is over the average
// Returns an entity selection related to the Company DataClass

Function GetBestOnes()
    $sel:=This.query("revenues >= :1";This.all().average("revenues"));
    $0:=$sel
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can get an entity selection of the "best" companies by executing: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `    var $best : cs.CompanySelection
    $best:=ds.Company.GetBestOnes()
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#computed-attributes"
    }
  }, `Computed attributes`), ` are defined in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-class"
    }
  }, `Entity Class`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-a-remote-datastore"
    }
  }, `Example with a remote datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `City`), ` catalog is exposed in a remote datastore (partial view):`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(83132)/* ["default"] */ .Z),
    width: "370",
    height: "281"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `City Class`), ` provides an API:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.City class

Class extends DataClass

Function getCityName()
    var $1; $zipcode : Integer
    var $zip : 4D.Entity
    var $0 : Text

    $zipcode:=$1
    $zip:=ds.ZipCode.get($zipcode)
    $0:="" 

    If ($zip#Null)
        $0:=$zip.city.name
    End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The client application opens a session on the remote datastore:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then a client application can use the API to get the city matching a zip code (for example) from a form:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entityselection-class"
    }
  }, `EntitySelection Class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each table exposed with ORDA offers an EntitySelection class in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs`), ` class store.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Extends`), `: 4D.EntitySelection `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Class name`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), `Selection (where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), ` is the table name)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Example name`), `: cs.EmployeeSelection`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.EmployeeSelection class


Class extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection 

Function withSalaryGreaterThanAverage
    C_OBJECT($0)
    $0:=This.query("salary > :1";This.average("salary")).orderBy("salary")

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can get employees with a salary greater than the average in any entity selection by executing: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-class"
    }
  }, `Entity Class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each table exposed with ORDA offers an Entity class in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs`), ` class store.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Extends`), `: 4D.Entity `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Class name`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), `Entity (where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `DataClassName`), ` is the table name)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Example name`), `: cs.CityEntity`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "computed-attributes"
    }
  }, `Computed attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity classes allow you to define `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `computed attributes`), ` using specific keywords:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function get`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function set`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function query`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function orderBy`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#computed-attributes-1"
    }
  }, `Computed attributes`), ` section. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "alias-attributes"
    }
  }, `Alias attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity classes allow you to define `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alias attributes`), `, usually over related attributes, using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Alias`), ` keyword:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Alias`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `attributeName`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `targetPath`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alias-attributes-1"
    }
  }, `Alias attributes`), ` section. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.CityEntity class

Class extends Entity

Function getPopulation()
    $0:=This.zips.sum("population")


Function isBigCity(): Boolean
// The getPopulation() function is usable inside the class
$0:=This.getPopulation()>50000
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can call this code: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
    ALERT($city.name + " is a big city")
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "specific-rules"
    }
  }, `Specific rules`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When creating or editing data model classes, you must pay attention to the following rules:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Since they are used to define automatic DataClass class names in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `cs`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-stores"
    }
  }, `class store`), `, 4D tables must be named in order to avoid any conflict in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `cs`), ` namespace. In particular:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Do not give the same name to a 4D table and to a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/Concepts/classes#class-names"
    }
  }, `user class name`), `. If such a case occurs, the constructor of the user class becomes unusable (a warning is returned by the compiler). `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Do not use a reserved name for a 4D table (e.g., "DataClass").`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `When defining a class, make sure the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-extends-classnameclass"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Class extends`)), ` statement exactly matches the parent class name (remember that they're case sensitive). For example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Class extends EntitySelection`), ` for an entity selection class.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `You cannot instantiate a data model class object with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `new()`), ` keyword (an error is returned). You must use a regular method as listed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#architecture"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Instantiated by`), ` column of the ORDA class table`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `You cannot override a native ORDA class function from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `4D`)), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-stores"
    }
  }, `class store`), ` with a data model user class function.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "preemptive-execution"
    }
  }, `Preemptive execution`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When compiled, data model class functions are executed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `preemptive or cooperative processes`), ` (depending on the calling process) in single-user applications,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `preemptive processes`), ` in client/server applications (except if the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#local-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `local`)), ` keyword is used, in which case it depends on the calling process like in single-user).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If your project is designed to run in client/server, make sure your data model class function code is thread-safe. If thread-unsafe code is called, an error will be thrown at runtime (no error will be thrown at compilation time since cooperative execution is supported in single-user applications). `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "computed-attributes-1"
    }
  }, `Computed attributes`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A computed attribute is a dataclass attribute with a data type that masks a calculation. `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes"
    }
  }, `Standard 4D classes`), ` implement the concept of computed properties with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), `) and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `set`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `setter`), `) `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#function-get-and-function-set"
    }
  }, `accessor functions`), `. ORDA dataclass attributes benefit from this feature and extend it with two additional functions: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At the very minimum, a computed attribute requires a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get`), ` function that describes how its value will be calculated. When a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), ` function is supplied for an attribute, 4D does not create the underlying storage space in the datastore but instead substitutes the function's code each time the attribute is accessed. If the attribute is not accessed, the code never executes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A computed attribute can also implement a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `set`), ` function, which executes whenever a value is assigned to the attribute. The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `setter`), ` function describes what to do with the assigned value, usually redirecting it to one or more storage attributes or in some cases other entities.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Just like storage attributes, computed attributes may be included in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `queries`), `. By default, when a computed attribute is used in a ORDA query, the attribute is calculated once per entity examined. In some cases this is sufficient. However for better performance, especially in client/server, computed attributes can implement a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query`), ` function that relies on actual dataclass attributes and benefits from their indexes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Similarly, computed attributes can be included in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `sorts`), `. When a computed attribute is used in a ORDA sort, the attribute is calculated once per entity examined. Just like in queries, computed attributes can implement an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), ` function that substitutes other attributes during the sort, thus increasing performance. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "how-to-define-computed-attributes"
    }
  }, `How to define computed attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You create a computed attribute by defining a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get`), ` accessor in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-class"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `entity class`)), ` of the dataclass. The computed attribute will be automatically available in the dataclass attributes and in the entity attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Other computed attribute functions (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `set`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), `) can also be defined in the entity class. They are optional.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Within computed attribute functions, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#this"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `This`)), ` designates the entity. Computed attributes can be used and handled as any dataclass attribute, i.e. they will be processed by `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/EntityClass"
    }
  }, `entity class`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/EntitySelectionClass"
    }
  }, `entity selection class`), ` functions. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA computed attributes are not `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#exposed-vs-non-exposed-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `exposed`)), ` by default. You expose a computed attribute by adding the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `exposed`), ` keyword to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `get function`), ` definition.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `get and set functions`), ` can have the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#local-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `local`)), ` property to optimize client/server processing. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function-get-attributename"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function get <attributeName>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `{local} {exposed} Function get <attributeName>({$event : Object}) -> $result : type
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), ` function is mandatory to declare the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `attributeName`), ` computed attribute. Whenever the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `attributeName`), ` is accessed, 4D evaluates the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` code and returns the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), ` value. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A computed attribute can use the value of other computed attribute(s). Recursive calls generate errors. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), ` function defines the data type of the computed attribute thanks to the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), ` parameter. The following resulting types are allowed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Scalar (text, boolean, date, time, number)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Image`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `BLOB`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Entity (i.e. cs.EmployeeEntity)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Entity selection (i.e. cs.EmployeeSelection)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$event`), ` parameter contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `attributeName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Computed attribute name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataClassName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Dataclass name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `kind`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"get"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Optional. Add this property with Null value if you want a scalar attribute to return Null`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "examples"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `fullName`), ` computed attribute:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function get fullName($event : Object)-> $fullName : Text

  Case of   
    : (This.firstName=Null) & (This.lastName=Null)
        $event.result:=Null //use result to return Null
    : (This.firstName=Null)
        $fullName:=This.lastName
    : (This.lastName=Null)
        $fullName:=This.firstName
    Else 
        $fullName:=This.firstName+" "+This.lastName
    End case 
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A computed attribute can be based upon an entity related attribute:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function get bigBoss($event : Object)-> $result: cs.EmployeeEntity
    $result:=This.manager.manager
    
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A computed attribute can be based upon an entity selection related attribute:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function get coWorkers($event : Object)-> $result: cs.EmployeeSelection
    If (This.manager.manager=Null)
        $result:=ds.Employee.newSelection()
    Else 
        $result:=This.manager.directReports.minus(this)
    End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function-set-attributename"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function set <attributeName>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-1"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `
{local} Function set <attributeName>($value : type {; $event : Object})
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `setter`), ` function executes whenever a value is assigned to the attribute. This function usually processes the input value(s) and the result is dispatched between one or more other attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$value`), ` parameter receives the value assigned to the attribute. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$event`), ` parameter contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `attributeName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Computed attribute name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataClassName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Dataclass name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `kind`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"set"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value to be handled by the computed attribute`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-4"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function set fullName($value : Text; $event : Object)
    var $p : Integer
    $p:=Position(" "; $value)       
    This.firstname:=Substring($value; 1; $p-1)  // "" if $p<0
    This.lastname:=Substring($value; $p+1)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function-query-attributename"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function query <attributeName>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-2"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function query <attributeName>($event : Object)
Function query <attributeName>($event : Object) -> $result : Text
Function query <attributeName>($event : Object) -> $result : Object
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This function supports three syntaxes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `With the first syntax, you handle the whole query through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), ` object property.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `With the second and third syntaxes, the function returns a value in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `$result`), ` is a Text, it must be a valid query string`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `$result`), ` is an Object, it must contain two properties:`)), /* @__PURE__ */ (0, import_react2.mdx)("table", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `$result.query`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Valid query string with placeholders (:1, :2, etc.)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$result.parameters`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `values for placeholders`)))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query`), ` function executes whenever a query using the computed attribute is launched. It is useful to customize and optimize queries by relying on indexed attributes. When the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query`), ` function is not implemented for a computed attribute, the search is always sequential (based upon the evaluation of all values using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get <AttributeName>`), ` function).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The following features are not supported:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `calling a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `query`), ` function on computed attributes of type Entity or Entity selection, `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `order by`), ` keyword in the resulting query string.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$event`), ` parameter contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `attributeName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Computed attribute name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataClassName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Dataclass name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `kind`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"query"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value to be handled by the computed attribute`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `operator`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Query operator (see also the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/fr/API/DataClassClass#query"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `query`), ` class function`), `). Possible values:`, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `== (equal to, @ is wildcard)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `=== (equal to, @ is not wildcard)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `!= (not equal to, @ is wildcard)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `!== (not equal to, @ is not wildcard)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `< (less than)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `<= (less than or equal to)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `> (greater than)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `>= (greater than or equal to)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `IN (included in)`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `% (contains keyword)`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value to be handled by the computed attribute. Pass `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Null`), ` in this property if you want to let 4D execute the default query (always sequential for computed attributes).`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the function returns a value in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), ` and another value is assigned to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), ` property, the priority is given to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "examples-1"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Query on the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `fullName`), ` computed attribute. `)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function query fullName($event : Object)->$result : Object

    var $fullname; $firstname; $lastname; $query : Text
    var $operator : Text
    var $p : Integer
    var $parameters : Collection

    $operator:=$event.operator
    $fullname:=$event.value

    $p:=Position(" "; $fullname) 
    If ($p>0)
        $firstname:=Substring($fullname; 1; $p-1)+"@"
        $lastname:=Substring($fullname; $p+1)+"@"
        $parameters:=New collection($firstname; $lastname) // two items collection
    Else 
        $fullname:=$fullname+"@"
        $parameters:=New collection($fullname) // single item collection
    End if 

    Case of 
    : ($operator="==") | ($operator="===")
        If ($p>0)
            $query:="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
        Else 
            $query:="firstName = :1 or lastName = :1"
        End if 
    : ($operator="!=")
        If ($p>0)
            $query:="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
        Else 
            $query:="firstName != :1 and lastName != :1"
        End if 
    End case 

    $result:=New object("query"; $query; "parameters"; $parameters)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Keep in mind that using placeholders in queries based upon user text input is recommended for security reasons (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataClassClass#query"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `query()`), ` description`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling code, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$emps:=ds.Employee.query("fullName = :1"; "Flora Pionsin")
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `This function handles queries on the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `age`), ` computed attribute and returns an object with parameters:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function query age($event : Object)->$result : Object
    
    var $operator : Text
    var $age : Integer
    var $_ages : Collection
    
    $operator:=$event.operator
            
    $age:=Num($event.value)  // integer
    $d1:=Add to date(Current date; -$age-1; 0; 0)
    $d2:=Add to date($d1; 1; 0; 0)
    $parameters:=New collection($d1; $d2)
    
    Case of 
            
        : ($operator="==")
            $query:="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2
            
        : ($operator="===") 

            $query:="birthday = :2"  // d2 = second calculated date (= birthday date)

        : ($operator=">=")
            $query:="birthday <= :2"
            
            //... other operators           
            
            
    End case 
    
    
    If (Undefined($event.result))
        $result:=New object
        $result.query:=$query
        $result.parameters:=$parameters
    End if

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling code, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// people aged between 20 and 21 years (-1 day)
$twenty:=people.query("age = 20")  // calls the "==" case

// people aged 20 years today
$twentyToday:=people.query("age === 20") // equivalent to people.query("age is 20") 

`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function-orderby-attributename"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function orderBy <attributeName>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-3"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function orderBy <attributeName>($event : Object)
Function orderBy <attributeName>($event : Object)-> $result : Text

// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), ` function executes whenever the computed attribute needs to be ordered. It allows sorting the computed attribute. For example, you can sort `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `fullName`), ` on first names then last names, or conversely.
When the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), ` function is not implemented for a computed attribute, the sort is always sequential (based upon the evaluation of all values using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get <AttributeName>`), ` function).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Calling an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), ` function on computed attributes of type Entity class or Entity selection class `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `is not supported`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$event`), ` parameter contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `attributeName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Computed attribute name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataClassName`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Dataclass name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `kind`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"orderBy"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value to be handled by the computed attribute`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `operator`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"desc" or "asc" (default)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `descending`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `true`), ` for descending order, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `false`), ` for ascending order`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variant`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value to be handled by the computed attribute. Pass `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `Null`), ` if you want to let 4D execute the default sort.`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can use either the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `operator`), ` or the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `descending`), ` property. It is essentially a matter of programming style (see examples).   `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can return the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy`), ` string either in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), ` object property or in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), ` function result. If the function returns a value in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$result`), ` and another value is assigned to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), ` property, the priority is given to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$event.result`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-5"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can write conditional code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function orderBy fullName($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="firstName desc, lastName desc" 
    Else 
        $result:="firstName, lastName" 
    End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also write compact code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function orderBy fullName($event : Object)-> $result : Text
    $result:="firstName "+$event.operator+", "lastName "+$event.operator

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Conditional code is necessary in some cases:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function orderBy age($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="birthday asc" 
    Else 
        $result:="birthday desc" 
    End if

`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "alias-attributes-1"
    }
  }, `Alias attributes`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "overview-1"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alias`), ` attribute is built above another attribute of the data model, named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `target`), ` attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. You can define as many alias attributes as you want in a dataclass. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alias attributes are particularly useful to handle N to N relations. They bring more readability and simplicity in the code and in queries by allowing to rely on business concepts instead of implementation details.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "how-to-define-alias-attributes"
    }
  }, `How to define alias attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You create an alias attribute in a dataclass by using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Alias`), ` keyword in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-class"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `entity class`)), ` of the dataclass. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "alias-attributename-targetpath"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Alias <attributeName> <targetPath>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-4"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{exposed} Alias <attributeName> <targetPath>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `attributeName`), ` must comply with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Concepts/identifiers.html#object-properties"
    }
  }, `standard rules for property names`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `targetPath`), ` is an attribute path containing one or more levels, such as "employee.company.name". If the target attribute belongs to the same dataclass, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `targetPath`), ` is the attribute name. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An alias can be used as a part of a path of another alias. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#computed-attributes-1"
    }
  }, `computed attribute`), ` can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a computed attribute, an alias with path "employee.fullName" is valid. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA alias attributes are `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `not exposed`), ` by default. You must add the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#exposed-vs-non-exposed-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `exposed`)), ` keyword before the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Alias`), ` keyword if you want the alias to be available to remote requests.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-alias-attributes"
    }
  }, `Using alias attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alias attributes are read-only (except when based upon a scalar attribute of the same dataclass, see the last example below). They can be used instead of their target attribute path in class functions such as:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Function`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
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
  }, `dataClass.query()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.query()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entity.toObject()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.toCollection()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.extract()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.orderBy()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.orderByFormula()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.average()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.count()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.distinct()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.sum()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.min()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entitySelection.max()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entity.diff()`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `entity.touchedAttributes()`))))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Keep in mind that alias attributes are calculated on the server. In remote configurations, updating alias attributes in entities requires that entities are reloaded from the server. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "alias-properties"
    }
  }, `Alias properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alias attribute `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataClassAttributeClass#kind"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `kind`)), ` is "alias".  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An alias attribute inherits its data `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataClassAttributeClass#type"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `type`)), ` property from the target attribute: `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the target attribute `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/DataClassAttributeClass#kind"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `kind`)), ` is "storage", the alias data type is of the same type,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the target attribute `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/API/DataClassAttributeClass#kind"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `kind`)), ` is "relatedEntity" or "relatedEntities", the alias data type is of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D.Entity`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D.EntitySelection`), ` type ("`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `classname`), `Entity" or "`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `classname`), `Selection"). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alias attributes based upon relations have a specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataClassAttributeClass#path"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `path`)), ` property, containing the path of their target attributes. Alias attributes based upon attributes of the same dataclass have the same properties as their target attributes (and no `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `path`), ` property). `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "examples-2"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Considering the following model:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(14567)/* ["default"] */ .Z),
    width: "607",
    height: "140"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Teacher dataclass, an alias attribute returns all students of a teacher:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.TeacherEntity class

Class extends Entity

Alias students courses.student //relatedEntities 
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Student dataclass, an alias attribute returns all teachers of a student:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.StudentEntity class

Class extends Entity

Alias teachers courses.teacher //relatedEntities 
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Course dataclass:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an alias attribute returns another label for the "name" attribute`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an alias attribute returns the teacher name`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an alias attribute returns the student name`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// cs.CourseEntity class

Class extends Entity

Exposed Alias courseName name //scalar 
Exposed Alias teacherName teacher.name //scalar value
Exposed Alias studentName student.name //scalar value

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then execute the following queries:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Find course named "Archaeology"
ds.Course.query("courseName = :1";"Archaeology")

// Find courses given by the professor Smith
ds.Course.query("teacherName = :1";"Smith")

// Find courses where Student "Martin" assists
ds.Course.query("studentName = :1";"Martin")

// Find students who have M. Smith as teacher 
ds.Student.query("teachers.name = :1";"Smith")

// Find teachers who have M. Martin as Student
ds.Teacher.query("students.name = :1";"Martin")
// Note that this very simple query string processes a complex 
// query including a double join, as you can see in the queryPlan:   
// "Join on Table : Course  :  Teacher.ID = Course.teacherID,    
//  subquery:[ Join on Table : Student  :  Course.studentID = Student.ID,
//  subquery:[ Student.name === Martin]]"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also edit the value of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `courseName`), ` alias:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Rename a course using its alias attribute
$arch:=ds.Course.query("courseName = :1";"Archaeology")
$arch.courseName:="Archaeology II"
$arch.save() //courseName and name are "Archaeology II"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "exposed-vs-non-exposed-functions"
    }
  }, `Exposed vs non-exposed functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For security reasons, all of your data model class functions and alias attributes are `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `not exposed`), ` (i.e., private) by default to remote requests. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Remote requests include:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Requests sent by remote 4D applications connected through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Open datastore`), ` `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `REST requests`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Regular 4D client/server requests are not impacted. Data model class functions are always available in this architecture. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A function that is not exposed is not available on remote applications and cannot be called on any object instance from a REST request. If a remote application tries to access a non-exposed function, the "-10729 - Unknown member method" error is returned. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To allow a data model class function to be called by a remote request, you must explicitly declare it using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `exposed`), ` keyword. The formal syntax is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// declare an exposed function
exposed Function <functionName>   
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `exposed`), ` keyword can only be used with Data model class functions. If used with a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes"
    }
  }, `regular user class`), ` function, it is ignored and an error is returned by the compiler.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "example-6"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want an exposed function to use a private function in a dataclass class:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeIDNumber()-> $id : Integer
//compute a new ID number
$id:=...

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the code is called:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method" 
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "local-functions"
    }
  }, `Local functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default in client/server architecture, ORDA data model functions are executed `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `on the server`), `. It usually provides the best performance since only the function request and the result are sent over the network. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, it could happen that a function is fully executable on the client side (e.g., when it processes data that's already in the local cache). In this case, you can save requests to the server and thus, enhance the application performance by inserting the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `local`), ` keyword. The formal syntax is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// declare a function to execute locally in client/server
local Function <functionName>   
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With this keyword, the function will always be executed on the client side.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `local`), ` keyword can only be used with data model class functions. If used with a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes"
    }
  }, `regular user class`), ` function, it is ignored and an error is returned by the compiler.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that the function will work even if it eventually requires to access the server (for example if the ORDA cache is expired). However, it is highly recommended to make sure that the local function does not access data on the server, otherwise the local execution could not bring any performance benefit. A local function that generates many requests to the server is less efficient than a function executed on the server that would only return the resulting values. For example, consider the following function on the Schools entity class:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Get the youngest students  
// Inappropriate use of local keyword
local Function getYoungest
    var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `without`), ` the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `local`), ` keyword, the result is given using a single request`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `with`), ` the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `local`), ` keyword, 4 requests are necessary: one to get the Schools entity students, one for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `query()`), `, one for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `orderBy()`), `, and one for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `slice()`), `. In this example, using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `local`), ` keyword is inappropriate. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "examples-3"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "calculating-age"
    }
  }, `Calculating age`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Given an entity with a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `birthDate`), ` attribute, we want to define an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `age()`), ` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `StudentsEntity`), ` class:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else 
    $age:=Null
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "checking-attributes"
    }
  }, `Checking attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server to save them.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `StudentsEntity`), ` class, the local `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `checkData()`), ` function checks the Student's age:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing" 

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "support-in-4d-ide"
    }
  }, `Support in 4D IDE`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "class-files"
    }
  }, `Class files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An ORDA data model user class is defined by adding, at the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-files"
    }
  }, `same location as regular class files`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), ` in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/Sources/Classes`), ` folder of the project folder), a .4dm file with the name of the class. For example, an entity class for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Utilities`), ` dataclass will be defined through a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `UtilitiesEntity.4dm`), ` file. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "creating-classes"
    }
  }, `Creating classes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D automatically pre-creates empty classes in memory for each available data model object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(37529)/* ["default"] */ .Z),
    width: "527",
    height: "241"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `By default, empty ORDA classes are not displayed in the Explorer. To show them you need to select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Show all data classes`), ` from the Explorer's options menu:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(45385)/* ["default"] */ .Z),
    width: "249",
    height: "154"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `ORDA user classes have a different icon from regular classes. Empty classes are dimmed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(55462)/* ["default"] */ .Z),
    width: "356",
    height: "276"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create an ORDA class file, you just need to double-click on the corresponding predefined class in the Explorer. 4D creates the class file and add the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `extends`), ` code. For example, for an Entity class:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `Class extends Entity
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once a class is defined, its name is no longer dimmed in the Explorer. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "editing-classes"
    }
  }, `Editing classes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To open a defined ORDA class in the 4D Code Editor, select or double-click on an ORDA class name and use `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit...`), ` from the contextual menu/options menu of the Explorer window:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(54280)/* ["default"] */ .Z),
    width: "264",
    height: "168"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For ORDA classes based upon the local datastore (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), `), you can directly access the class code from the 4D Structure window:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(43575)/* ["default"] */ .Z),
    width: "426",
    height: "418"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "code-editor"
    }
  }, `Code Editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the 4D Code Editor, variables typed as an ORDA class automatically benefit from autocompletion features. Example with an Entity class variable:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(42349)/* ["default"] */ .Z),
    width: "338",
    height: "220"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 42349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/AutoCompletionEntity-73e81990d679d472687e96dad08b3877.png");

/***/ }),

/***/ 91644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ClassDiagramImage-6cbf13bbf1dca5f0656fbdfad146e86f.png");

/***/ }),

/***/ 37529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ORDA_Classes-3-20abc47dcfe784436070611c1504adf6.png");

/***/ }),

/***/ 83132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Orda_example-b692b6754f05414140034cb9527fe59d.png");

/***/ }),

/***/ 14567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/alias1-13c85b8cdbb3adbc0f1a1ea25d7db1df.png");

/***/ }),

/***/ 22448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/api-e2214f9171cd64e4f903fd0bb088ddb3.png");

/***/ }),

/***/ 55462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/classORDA2-cc9e89e2add243ff078219f42714e3ba.png");

/***/ }),

/***/ 54280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 43575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/classORDA5-37a75835374748437826d67a59091d70.png");

/***/ }),

/***/ 45385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;