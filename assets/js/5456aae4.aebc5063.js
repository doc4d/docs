exports.id = 97588;
exports.ids = [97588];
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

/***/ 61016:
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
var glossary_exports = {};
__export(glossary_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(glossary_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "glossary",
  title: "Glossary"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/glossary",
  "id": "version-19/ORDA/glossary",
  "title": "Glossary",
  "description": "Main concepts at a glance",
  "source": "@site/versioned_docs/version-19/ORDA/glossary.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/glossary",
  "permalink": "/docs/19/ORDA/glossary",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "glossary",
    "title": "Glossary"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Using a remote datastore",
    "permalink": "/docs/19/ORDA/datastores"
  },
  "next": {
    "title": "Class API Overview",
    "permalink": "/docs/19/API/overview"
  }
};
const assets = {};
const toc = [{
  value: "Main concepts at a glance",
  id: "main-concepts-at-a-glance",
  level: 2
}, {
  value: "Attribute",
  id: "attribute",
  level: 2
}, {
  value: "AttributePath",
  id: "attributepath",
  level: 2
}, {
  value: "Class code",
  id: "class-code",
  level: 2
}, {
  value: "Data model class",
  id: "data-model-class",
  level: 2
}, {
  value: "Data model object",
  id: "data-model-object",
  level: 2
}, {
  value: "Data model function",
  id: "data-model-function",
  level: 2
}, {
  value: "Dataclass",
  id: "dataclass",
  level: 2
}, {
  value: "DataClass class",
  id: "dataclass-class",
  level: 2
}, {
  value: "Datastore",
  id: "datastore",
  level: 2
}, {
  value: "DataStore class",
  id: "datastore-class",
  level: 2
}, {
  value: "DataStoreImplementation",
  id: "datastoreimplementation",
  level: 2
}, {
  value: "Deep copy",
  id: "deep-copy",
  level: 2
}, {
  value: "ds",
  id: "ds",
  level: 2
}, {
  value: "Entity",
  id: "entity",
  level: 2
}, {
  value: "Entity selection",
  id: "entity-selection",
  level: 2
}, {
  value: "Generic class",
  id: "generic-class",
  level: 2
}, {
  value: "Lazy loading",
  id: "lazy-loading",
  level: 2
}, {
  value: "Main datastore",
  id: "main-datastore",
  level: 2
}, {
  value: "Method",
  id: "method",
  level: 2
}, {
  value: "Mixed data type",
  id: "mixed-data-type",
  level: 2
}, {
  value: "Optimistic Lock",
  id: "optimistic-lock",
  level: 2
}, {
  value: "Pessimistic Lock",
  id: "pessimistic-lock",
  level: 2
}, {
  value: "Property",
  id: "property",
  level: 2
}, {
  value: "PropertyPath",
  id: "propertypath",
  level: 2
}, {
  value: "Regular class",
  id: "regular-class",
  level: 2
}, {
  value: "Related dataclass",
  id: "related-dataclass",
  level: 2
}, {
  value: "Relation attribute",
  id: "relation-attribute",
  level: 2
}, {
  value: "Related entities",
  id: "related-entities",
  level: 2
}, {
  value: "Remote datastore",
  id: "remote-datastore",
  level: 2
}, {
  value: "Session",
  id: "session",
  level: 2
}, {
  value: "Shallow copy",
  id: "shallow-copy",
  level: 2
}, {
  value: "Stamp",
  id: "stamp",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "main-concepts-at-a-glance"
    }
  }, `Main concepts at a glance`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(1764)/* ["default"] */ .Z),
    width: "478",
    height: "433"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "attribute"
    }
  }, `Attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An attribute is the smallest storage cell in a relational database (see also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#relation-attribute"
    }
  }, `Relation attribute`), `). Do not confuse dataclass attributes and entity attributes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Attributes`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `properties`), ` are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "attributepath"
    }
  }, `AttributePath`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An attributePath is the path of an attribute inside a given dataclass or entity. See also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#propertyPath"
    }
  }, `PropertyPath`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-code"
    }
  }, `Class code`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Code for the user class function(s).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-model-class"
    }
  }, `Data model class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Extended class available for a data model object.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-model-object"
    }
  }, `Data model object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-model-function"
    }
  }, `Data model function`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Function of an ORDA data model class.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "dataclass"
    }
  }, `Dataclass`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dataclass is related to a single datastore.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "dataclass-class"
    }
  }, `DataClass class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Class for specific dataclass objects, in which you can add custom functions.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "datastore"
    }
  }, `Datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A datastore is the interface object provided by ORDA to reference a structure and access its data. The main database, returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` command, is available as a datastore (the main datastore).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A datastore provides:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a connection to the 4D database`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a set of dataclasses to work with the database`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The database can be a 4D local database (the Main datastore), or a 4D Server database exposed as REST resource (a Remote datastore).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A datastore references only a single database. It is, however, possible to open several datastores to access several databases.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "datastore-class"
    }
  }, `DataStore class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Class for datastore objects, in which you can add custom functions.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "datastoreimplementation"
    }
  }, `DataStoreImplementation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Internal name of the generic DataStore class in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D`), ` class store.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "deep-copy"
    }
  }, `Deep copy`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also Shallow copy.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "ds"
    }
  }, `ds`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` is the 4D language command that returns a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/ORDA/dsmapping#datastore"
    }
  }, `datastore`), ` object reference. It matches the datastore available upon the 4D main database.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "entity"
    }
  }, `Entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, see Entities.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "entity-selection"
    }
  }, `Entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity selection contains:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a set of 0 to X entity references,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a length property (always),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `queryPlan and queryPath properties (if asked while querying).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity selection can also be empty.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "generic-class"
    }
  }, `Generic class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EmployeeEntity`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "lazy-loading"
    }
  }, `Lazy loading`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "main-datastore"
    }
  }, `Main datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Datastore object matching the opened 4D database (standalone or client/server). The main datastore is returned by the ds command.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "method"
    }
  }, `Method`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific methods to directly interact with them. These methods are also called member functions. Such methods are used by calling them on an instance of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `query()`), ` method is a dataclass member function. If you have stored a dataclass object in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$myClass`), ` variable, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$myClass.query("name = smith")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "mixed-data-type"
    }
  }, `Mixed data type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this documentation, "Mixed" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `null`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `date`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `collection`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `picture(`, `*`, `)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(`, `*`, `) picture type is not supported by statistical methods such as`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entitySelection.max( )`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "optimistic-lock"
    }
  }, `Optimistic Lock`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "pessimistic-lock"
    }
  }, `Pessimistic Lock`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A "pessimistic lock" means that an entity is locked prior to its being accessed, using the entity.lock( ) method. Other processes can neither update nor drop the entity until it is unlocked. The classic 4D language only allows pessimistic locks. See "Optimistic lock".`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "property"
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#attribute"
    }
  }, `Attribute`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Attributes and properties are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "propertypath"
    }
  }, `PropertyPath`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "regular-class"
    }
  }, `Regular class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `User class not related to an ORDA object.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "related-dataclass"
    }
  }, `Related dataclass`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These are dataclasses linked by relation attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "relation-attribute"
    }
  }, `Relation attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dataclass can have recursive relation attributes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In an entity, the value of a relation attribute can be an entity or an entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "related-entities"
    }
  }, `Related entities`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A related entity can be seen as the instance of a relation attribute in a dataclass.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "remote-datastore"
    }
  }, `Remote datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). This use is submitted to a licencing system.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "session"
    }
  }, `Session`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each time a new session is opened, a license is used. Each time a session is closed, the license is freed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Inactive sessions are automatically closed after a timeout. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes).  `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "shallow-copy"
    }
  }, `Shallow copy`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also Deep copy.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "stamp"
    }
  }, `Stamp`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/mainConcepts-f749b0303b2e0c0e718d1b7cb8374126.png");

/***/ })

};
;