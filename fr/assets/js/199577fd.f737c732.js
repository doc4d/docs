exports.id = 52194;
exports.ids = [52194];
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

/***/ 31933:
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
var dsMapping_exports = {};
__export(dsMapping_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(dsMapping_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "dsmapping",
  title: "Data Model Objects"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/dsmapping",
  "id": "version-19-R6/ORDA/dsmapping",
  "title": "Data Model Objects",
  "description": "The ORDA technology is based upon an automatic mapping of an underlying database structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects.",
  "source": "@site/versioned_docs/version-19-R6/ORDA/dsMapping.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/dsmapping",
  "permalink": "/docs/fr/ORDA/dsmapping",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "dsmapping",
    "title": "Data Model Objects"
  },
  "sidebar": "docs",
  "previous": {
    "title": "What is ORDA?",
    "permalink": "/docs/fr/ORDA/overview"
  },
  "next": {
    "title": "Data Model Classes",
    "permalink": "/docs/fr/ORDA/ordaClasses"
  }
};
const assets = {};
const toc = [{
  value: "Structure mapping",
  id: "structure-mapping",
  level: 2
}, {
  value: "General rules",
  id: "general-rules",
  level: 3
}, {
  value: "Rules for remote access control",
  id: "rules-for-remote-access-control",
  level: 3
}, {
  value: "Data model update",
  id: "data-model-update",
  level: 3
}, {
  value: "Object definition",
  id: "object-definition",
  level: 2
}, {
  value: "Datastore",
  id: "datastore",
  level: 3
}, {
  value: "Dataclass",
  id: "dataclass",
  level: 3
}, {
  value: "Attribute",
  id: "attribute",
  level: 3
}, {
  value: "Storage and Relation attributes",
  id: "storage-and-relation-attributes",
  level: 4
}, {
  value: "Computed attributes",
  id: "computed-attributes",
  level: 4
}, {
  value: "Entity",
  id: "entity",
  level: 3
}, {
  value: "Entity selection",
  id: "entity-selection",
  level: 3
}, {
  value: "Ordered or unordered entity selection",
  id: "ordered-or-unordered-entity-selection",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The ORDA technology is based upon an automatic mapping of an underlying database structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "structure-mapping"
    }
  }, `Structure mapping`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you call a datastore using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataStoreClass#ds"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `ds`)), ` or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/API/DataStoreClass#open-datastore"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Open datastore`)), ` command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#datastore"
    }
  }, `datastore`), ` object:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Tables are mapped to dataclasses.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Fields are mapped to storage attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(72211)/* ["default"] */ .Z),
    width: "961",
    height: "480"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "general-rules"
    }
  }, `General rules`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following rules are applied for any conversions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Table, field, and relation names are mapped to object property names. Make sure that such names comply with general object naming rules, as explained in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/Concepts/identifiers"
    }
  }, `object naming conventions`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A datastore only references tables with a single primary key. The following tables are not referenced:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Tables without a primary key`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Tables with composite primary keys.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `BLOB fields are automatically available as attributes of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/Concepts/blob#blob-types"
    }
  }, `Blob object`), ` type. `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA mapping does not take into account:  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the "Invisible" option for tables or fields, `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the virtual structure defined through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET TABLE TITLES`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET FIELD TITLES`), `,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the "Manual" or "Automatic" property of relations.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "rules-for-remote-access-control"
    }
  }, `Rules for remote access control`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When accessing a remote datastore through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open datastore`), ` command or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/REST/gettingStarted"
    }
  }, `REST requests`), `, only tables and fields with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST resource`), ` property are available remotely. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(79291)/* ["default"] */ .Z),
    width: "279",
    height: "362"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "data-model-update"
    }
  }, `Data model update`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Any modifications applied at the level of the database structure invalidate the current ORDA model layer. These modifications include:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `adding or removing a table, a field, or a relation`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `renaming of a table, a field, or a relation`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `changing a core property of a field (type, unique, index, autoincrement, null value support)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, the updated ORDA model layer is not automatically available in the following contexts:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a remote 4D application connected to 4D Server -- the remote application must reconnect to the server. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a remote datastore opened using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Open datastore`), ` or through `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/REST/gettingStarted"
    }
  }, `REST calls`), ` -- a new session must be opened. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "object-definition"
    }
  }, `Object definition`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "datastore"
    }
  }, `Datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The datastore is the interface object to a database. It builds a representation of the whole database as object. A datastore is made of a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `model`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `data`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When handled through the code, the datastore is an object whose properties are all of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#dataclass"
    }
  }, `dataclasses`), ` which have been specifically exposed. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to handle the following datastores:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the local datastore, based on the current 4D database, returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ds`), ` command (the main datastore).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Open datastore`), ` command. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A datastore references only a single local or remote database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The datastore object itself cannot be copied as an object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$mydatastore:=OB Copy(ds) //returns null
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The datastore properties are however enumerable:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds;$prop)
  //$prop contains the names of all the dataclasses
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main (default) datastore is always available through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` command, but the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open datastore`), ` command allows referencing any remote datastore. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "dataclass"
    }
  }, `Dataclass`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dataclass is the equivalent of a table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Relational attributes can be used in queries like any other attribute.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All dataclasses in a 4D project are available as a property of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` datastore. For remote datastores accessed through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open datastore`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/REST/gettingStarted"
    }
  }, `REST requests`), `, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST resource`), ` option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, consider the following table in the 4D structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(57123)/* ["default"] */ .Z),
    width: "137",
    height: "188"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Company`), ` table is automatically available as a dataclass in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` datastore. You can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $compClass : cs.Company //declares a $compClass object variable of the Company class
$compClass:=ds.Company //assigns the Company dataclass reference to $compClass
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dataclass object can contain:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `attributes`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `relation attributes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked tables in a query.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The dataclass object itself cannot be copied as an object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$mydataclass:=OB Copy(ds.Employee) //returns null
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The dataclass properties are however enumerable:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `ARRAY TEXT($prop;0)
OB GET PROPERTY NAMES(ds.Employee;$prop)
//$prop contains the names of all the dataclass attributes
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "attribute"
    }
  }, `Attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Dataclass properties are attribute objects describing the underlying fields or relations. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $nameAttribute:=ds.Company.name //reference to class attribute
 $revenuesAttribute:=ds.Company["revenues"] //alternate way
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This code assigns to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$nameAttribute`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$revenuesAttribute`), ` references to the name and revenues attributes of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Company`), ` class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity"
    }
  }, `Entities`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All eligible fields in a table are available as attributes of their parent `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#dataclass"
    }
  }, `dataclass`), `. For remote datastores accessed through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open datastore`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/REST/gettingStarted"
    }
  }, `REST requests`), `, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expose as REST resource`), ` option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "storage-and-relation-attributes"
    }
  }, `Storage and Relation attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, provide only a single value) support all the standard 4D data types (integer, text, object, etc.).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `storage attribute`), ` is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `relation attribute`), ` provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, consider the following partial database structure and the relation properties:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(52987)/* ["default"] */ .Z),
    width: "690",
    height: "533"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All storage attributes will be automatically available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the Project dataclass: "ID", "name", and "companyID"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the Company dataclass: "ID", "name", and "discount"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition, the following relation attributes will also be automatically available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the Project dataclass: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `theClient`), ` attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the Company dataclass: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `companyProjects`), ` attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The Manual or Automatic property of a database relation has no effect in ORDA.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All dataclass attributes are exposed as properties of the dataclass:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2045)/* ["default"] */ .Z),
    width: "1049",
    height: "288"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ORDA/entities#using-entity-attributes"
    }
  }, `entity objects`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "computed-attributes"
    }
  }, `Computed attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ORDA/ordaClasses#computed-attributes"
    }
  }, `Computed attributes`), ` are declared using a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `get <attributeName>`), ` function in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ORDA/ordaClasses#entity-class"
    }
  }, `Entity class definition`), `. Their value is not stored but evaluated each time they are accessed. They do not belong to the underlying database structure, but are built upon it and can be used as any attribute of the data model. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity"
    }
  }, `Entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#dataclass"
    }
  }, `dataclass`), `, like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entity object itself cannot be copied as an object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $myentity:=OB Copy(ds.Employee.get(1)) //returns null
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entity properties are however enumerable:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contains the names of all the entity attributes
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-selection"
    }
  }, `Entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $e : cs.EmployeeSelection //declares a $e object variable of the EmployeeSelection class type
$e:=ds.Employee.all() //assigns the resulting entity selection reference to the $e variable
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity selections can be "sorted" or "unsorted" (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#ordered-or-unordered-entity-selection"
    }
  }, `see below`), `). `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Entity selections can also be "shareable" or "non-shareable", depending on `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ORDA/entities#shareable-or-alterable-entity-selections"
    }
  }, `how they have been created`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entity selection object itself cannot be copied as an object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $myentitysel:=OB Copy(ds.Employee.all()) //returns null
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The entity selection properties are however enumerable:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  //$prop contains the names of the entity selection properties
  //("length", 00", "01"...)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "ordered-or-unordered-entity-selection"
    }
  }, `Ordered or unordered entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `orderBy( )`), ` method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `result of an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `orderBy()`), ` on a selection (of any type) or an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `orderBy()`), ` on a dataclass`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `result of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `newSelection()`), ` method with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `dk keep ordered`), ` option`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Unordered entity selections are created in the following cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `result of a standard `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `query()`), ` on a selection (of any type) or a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `query()`), ` on a dataclass,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `result of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `newSelection()`), ` method without option,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `result of any of the comparison methods, whatever the input selection types: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `or()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `and()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `minus()`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The following entity selections are always `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ordered`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `entity selections returned by 4D Server to a remote client `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `entity selections built upon remote datastores.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 79291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png");

/***/ }),

/***/ 57123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png");

/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png");

/***/ }),

/***/ 72211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png");

/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png");

/***/ })

};
;