exports.id = 94120;
exports.ids = [94120];
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

/***/ 95312:
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
var updates_exports = {};
__export(updates_exports, {
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(updates_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "updates",
  title: "Documentation updates"
};
const contentTitle = void 0;
const metadata = {
  "type": "mdx",
  "permalink": "/docs/es/updates",
  "source": "@site/src/pages/updates.md",
  "title": "Documentation updates",
  "description": "The list of main updates in this documentation. For general information about new features in the 4D products, see the release notes on doc.4d.com.",
  "frontMatter": {
    "id": "updates",
    "title": "Documentation updates"
  }
};
const toc = [{
  value: "4D v19 R7",
  id: "4d-v19-r7",
  level: 2
}, {
  value: "4D v19 R6",
  id: "4d-v19-r6",
  level: 2
}, {
  value: "4D v19 R5",
  id: "4d-v19-r5",
  level: 2
}, {
  value: "4D v19 R4",
  id: "4d-v19-r4",
  level: 2
}, {
  value: "4D v19 R3",
  id: "4d-v19-r3",
  level: 2
}, {
  value: "4D v19 R2",
  id: "4d-v19-r2",
  level: 2
}, {
  value: "4D v19",
  id: "4d-v19",
  level: 2
}, {
  value: "4D v18 R6",
  id: "4d-v18-r6",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The list of main updates in this documentation. For general information about new features in the 4D products, see the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `release notes`), ` on `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com"
    }
  }, `doc.4d.com`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r7"
    }
  }, `4D v19 R7`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Related data and computed/alias attributes can be displayed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/dataExplorer#basics"
    }
  }, `Data Explorer`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/FileHandleClass"
    }
  }, `FileHandle`), ` class and new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/FileClass#open"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.open()`)), ` function in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `File`), ` class. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D View Pro: new table commands `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-get-tables"
    }
  }, `VP Get tables`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-insert-table-columns"
    }
  }, `VP INSERT TABLE COLUMNS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-insert-table-rows"
    }
  }, `VP INSERT TABLE ROWS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-remove-table-columns"
    }
  }, `VP REMOVE TABLE COLUMNS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-remove-table-rows"
    }
  }, `VP REMOVE TABLE ROWS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-resize-table"
    }
  }, `VP RESIZE TABLE`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r6"
    }
  }, `4D v19 R6`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/HTTPRequestClass"
    }
  }, `HTTPRequest`), ` class.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Collection functions that can call code now support function objects as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `formula`), ` parameter: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#every"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.every()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#filter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.filter()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#find"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.find()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#findindex"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.findIndex()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#map"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.map()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#orderbymethod"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.orderByMethod()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#reduce"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.reduce()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#some"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.some()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/CollectionClass#sort"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.sort()`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Listbox cells support `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "FormObjects/propertiesCoordinatesAndSizing#horizontal-padding"
    }
  }, `horizontal`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "FormObjects/propertiesCoordinatesAndSizing#vertical-padding"
    }
  }, `vertical`), ` padding.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D View Pro: new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-create-table"
    }
  }, `VP CREATE TABLE`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-remove-table"
    }
  }, `VP REMOVE TABLE`), ` commands to handle tables in sheets.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Ability to see related, computed, and alias attributes in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/dataExplorer#basics"
    }
  }, `Web Data Explorer`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New page explaining `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/data-collect"
    }
  }, `why and how 4D collects data`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r5"
    }
  }, `4D v19 R5`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Built Client/Server applications: `, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The project `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Users/editing#directoryjson-file"
    }
  }, `directory.json file`), ` can now be `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Desktop/building#embed-the-project-users-and-groups-in-built-server-application"
    }
  }, `embedded in the server`), ` at build time, allowing you to deploy a client/server application with a basic security user and group configuration.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can now `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Desktop/building#deselecting-modules"
    }
  }, `deselect useless modules`), ` in your built applications.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ORDA/datastores#clientserver-optimization"
    }
  }, `Client/Server optimization`), `: New class functions allow you to handle the ORDA cache and the contents of an optimization context. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ORDA/datastores#preconfiguring-contexts"
    }
  }, `Preconfiguring contexts`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ORDA/datastores#orda-cache"
    }
  }, `ORDA Cache`), ` for more information. `, /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `These functions are intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use them.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/DataClassClass"
    }
  }, `DataClass class`), `: The new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/DataClassClass#getcount"
    }
  }, `.getCount()`), ` function returns the number of entities in a dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D View Pro: `, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-set-data-context"
    }
  }, `VP SET DATA CONTEXT`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-get-data-context"
    }
  }, `VP Get data context`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-set-binding-path"
    }
  }, `VP SET BINDING PATH`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-get-binding-path"
    }
  }, `VP Get binding path`), ` commands allow you to create data contexts and bind their contents to sheet cells. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-get-binding-path"
    }
  }, `VP EXPORT DOCUMENT`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-get-binding-path"
    }
  }, `VP Export to object`), ` now accept the new `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `includeBindingSource`), ` option that exports the contents of a data context as cell values.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r4"
    }
  }, `4D v19 R4`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ORDA/ordaClasses#alias-attributes-1"
    }
  }, `Alias attributes`), ` are available in ORDA classes.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Support for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/looping#break-and-continue"
    }
  }, `break and continue`), ` statements in loops.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Support for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/control-flow#return-expression"
    }
  }, `return`), ` statement and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/parameters#return-expression"
    }
  }, `return expression`), ` to return values.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Support for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/operators#compound-assignment-operators"
    }
  }, `compound assignment operators`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/operators#short-circuit-operators"
    }
  }, `short-circuit operators`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/operators#ternary-operator"
    }
  }, `ternary operator`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "code-editor/overview"
    }
  }, `Code Editor`), ` now includes an dropdown tool and supports markers for better code navigation.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New Preferences: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Preferences/general#include-tokens-in-project-source-files"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Include tokens in project source files`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Preferences/methods#show-clipboards"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Show clipboards`)), ` option on the Methods page.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New REST request to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "REST/lock"
    }
  }, `lock/unlock`), ` entities.   `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/getting-started"
    }
  }, `4D View Pro`), ` chapter added with new commands: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-copy-to-object"
    }
  }, `VP Copy to object`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-move-cells"
    }
  }, `VP MOVE CELLS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "ViewPro/method-list#vp-paste-from-object"
    }
  }, `VP PASTE FROM OBJECT`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/SystemWorkerClass"
    }
  }, `SystemWorker class`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r3"
    }
  }, `4D v19 R3`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Concepts/classes#function-get-and-function-set"
    }
  }, `Computed properties`), ` are available in classes.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "ORDA/ordaClasses#computed-attributes"
    }
  }, `Computed attributes`), ` are available in ORDA classes. They are similar to computed properties but also support `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "ORDA/ordaClasses#function-query-attributename"
    }
  }, `query`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "ORDA/ordaClasses#function-orderby-attributename"
    }
  }, `orderBy`), ` functions.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `New ORDA dataclass attributes: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/DataClassAttributeClass#exposed"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `exposed`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/DataClassAttributeClass#readonly"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `readOnly`)), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/ZipArchiveClass#zip-create-archive"
    }
  }, `ZIP archives`), ` now supports `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `LZMA`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `xz`), ` compression algorithms. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Desktop/building#allow-connection-of-silicon-mac-clients"
    }
  }, `new build option`), ` makes it easier to include Silicon Mac clients in Server applications on Windows. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Extended `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Preferences/general#appearance-macos-only"
    }
  }, `support of dark mode`), ` on macOS.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Support of `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `OAuth2 token object`), ` in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/IMAPTransporterClass#imap-new-transporter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `IMAP New transporter`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/POP3TransporterClass#pop3-new-transporter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `POP3 New transporter`)), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "API/SMTPTransporterClass#smtp-new-transporter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SMTP New transporter`)), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Users can now load a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Debugging/debugLogFiles#using-a-log-configuration-file"
    }
  }, `log configuration file`), ` using a button in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "ServerWindow/maintenance#load-logs-configuration-file"
    }
  }, `server administration window`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Handling `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "Concepts/parameters#optional-parameters"
    }
  }, `optional parameters`), ` is more flexible in the 4D language.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Debugging web server sessions `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "WebServer/sessions#preemptive-mode"
    }
  }, `is easier on 4D Server`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://github.com/4d/4D-NetKit"
    }
  }, `4D NetKit`), ` component allows you to connect to third-party APIs such as Microsoft Graph.`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19-r2"
    }
  }, `4D v19 R2`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Preferences/general#create-gitignore-file"
    }
  }, `default .gitignore file`), ` can be created with new projects`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/BlobClass"
    }
  }, `Blob class API`), ` to handle new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Concepts/dt_blob#blob-types"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4D.Blob`), ` objects`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `no-bom`), ` support and new default end-of-line characters in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/FileClass#settext"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.setText()`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v19"
    }
  }, `4D v19`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/IMAPTransporterClass"
    }
  }, `IMAPTransporter Class`), `: new `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.createBox()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.deleteBox()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.renameBox()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.subscribe()`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.unsubscribe()`), ` functions.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/FileClass"
    }
  }, `File Class`), `: new `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `setAppInfo()`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `getAppInfo()`), ` functions.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Tags/#4deach-and-4dendeach"
    }
  }, `4DEACH`), ` transformation tag.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web Server: new `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "WebServer/webServerConfig#session-cookie-samesite"
    }
  }, `SameSite session cookie`), ` setting. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Dark and light color scheme support for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "FormEditor/propertiesForm#color-scheme"
    }
  }, `forms`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "FormEditor/stylesheets#media-queries"
    }
  }, `style sheets`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New default dark and light themes in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Preferences/methods#theme-list"
    }
  }, `Code Editor preferences`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Project/compiler#compiler-methods-for"
    }
  }, `Native compilation`), ` for Silicon processors.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "FormObjects/propertiesObject#variable-calculation"
    }
  }, `Variable calculation`), ` property is now supported by entity selection list box columns.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New, comprehensive `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/cli"
    }
  }, `CLI`), ` page.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-v18-r6"
    }
  }, `4D v18 R6`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/EntitySelectionClass"
    }
  }, `Entity Selection Class`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.average()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.max()`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.min()`), ` functions now return `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `undefined`), ` if the entity selection is empty.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/IMAPTransporterClass"
    }
  }, `IMAP Mail`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/POP3TransporterClass"
    }
  }, `POP3 Mail`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/SMTPTransporterClass"
    }
  }, `SMTP Mail`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `authenticationMode`), ` property enables OAuth 2.0`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/IMAPTransporterClass"
    }
  }, `IMAP Mail`), `: new `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.expunge()`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.append()`), ` functions`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/webAdmin"
    }
  }, `WebAdmin`), ` web server component`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "Admin/dataExplorer"
    }
  }, `DataExplorer`), ` interface`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `New web `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "WebServer/sessions"
    }
  }, `user sessions`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "API/SessionClass"
    }
  }, `their API`), `.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;