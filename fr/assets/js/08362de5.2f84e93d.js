exports.id = 3025;
exports.ids = [3025];
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

/***/ 93761:
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
var manData_exports = {};
__export(manData_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(manData_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "manData",
  title: "Manipulating Data"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "REST/manData",
  "id": "version-19/REST/manData",
  "title": "Manipulating Data",
  "description": "All exposed dataclasses, attributes and functions can be accessed through REST. Dataclass, attribute, and function names are case-sensitive; however, the data for queries is not.",
  "source": "@site/versioned_docs/version-19/REST/manData.md",
  "sourceDirName": "REST",
  "slug": "/REST/manData",
  "permalink": "/docs/fr/19/REST/manData",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "manData",
    "title": "Manipulating Data"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Getting Server Information",
    "permalink": "/docs/fr/19/REST/genInfo"
  },
  "next": {
    "title": "Calling ORDA class functions",
    "permalink": "/docs/fr/19/REST/classFunctions"
  }
};
const assets = {};
const toc = [{
  value: "Querying data",
  id: "querying-data",
  level: 2
}, {
  value: "Adding, modifying, and deleting entities",
  id: "adding-modifying-and-deleting-entities",
  level: 2
}, {
  value: "Navigating data",
  id: "navigating-data",
  level: 2
}, {
  value: "Creating and managing entity set",
  id: "creating-and-managing-entity-set",
  level: 2
}, {
  value: "Calculating data",
  id: "calculating-data",
  level: 2
}, {
  value: "Calling Data model class functions",
  id: "calling-data-model-class-functions",
  level: 2
}, {
  value: "Selecting Attributes to get",
  id: "selecting-attributes-to-get",
  level: 2
}, {
  value: "Examples",
  id: "examples",
  level: 3
}, {
  value: "Dataclass Example",
  id: "dataclass-example",
  level: 4
}, {
  value: "Entity Example",
  id: "entity-example",
  level: 4
}, {
  value: "Entity Set Example",
  id: "entity-set-example",
  level: 4
}, {
  value: "Viewing an image attribute",
  id: "viewing-an-image-attribute",
  level: 2
}, {
  value: "Saving a BLOB attribute to disk",
  id: "saving-a-blob-attribute-to-disk",
  level: 2
}, {
  value: "Retrieving only one entity",
  id: "retrieving-only-one-entity",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/configuration#exposing-tables-and-fields"
    }
  }, `exposed dataclasses, attributes`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/classFunctions"
    }
  }, `functions`), ` can be accessed through REST. Dataclass, attribute, and function names are case-sensitive; however, the data for queries is not.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "querying-data"
    }
  }, `Querying data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To query data directly, you can do so using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/filter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$filter`)), ` function. For example, to find a person named "Smith", you could write:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "adding-modifying-and-deleting-entities"
    }
  }, `Adding, modifying, and deleting entities`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With the REST API, you can perform all the manipulations to data as you can in 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To add and modify entities, you can call `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/method#methodupdate"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$method=update`)), `. If you want to delete one or more entities, you can use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/method#methoddelete"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$method=delete`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Besides retrieving a single entity in a dataclass using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "%7BdataClass%7D_%7Bkey%7D.html"
    }
  }, `{dataClass}({key})`), `, you can also write a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/classFunctions#function-calls"
    }
  }, `class function`), ` that returns an entity selection (or a collection).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Before returning a selection, you can also sort it by using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/orderby"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$orderby`)), ` one one or more attributes (even relation attributes).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "navigating-data"
    }
  }, `Navigating data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Add the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/skip"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$skip`)), ` (to define with which entity to start) and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/top_$limit"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$top/$limit`)), ` (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-and-managing-entity-set"
    }
  }, `Creating and managing entity set`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity set (aka `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `entity selection`), `) is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create an entity set, call `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/method#methodentityset"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$method=entityset`)), ` in your REST request. As a measure of security, you can also use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/savedfilter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$savedfilter`)), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/savedorderby"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$savedorderby`)), ` when you call `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/filter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$filter`)), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/orderby"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$orderby`)), ` so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To access the entity set, you must use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$entityset/{entitySetID}`), `, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/timeout"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$timeout`)), `. The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to remove an entity set from 4D Server's cache, you can use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/method#methodrelease"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$method=release`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/entityset#entitysetentitysetidoperatorothercollection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$entityset/{entitySetID}?$logicOperator... &$otherCollection`)), `, you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new selection of entities is returned; however, you can also create a new entity set by calling `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/method#methodentityset"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$method=entityset`)), ` at the end of the REST request.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "calculating-data"
    }
  }, `Calculating data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/compute"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$compute`)), `, you can compute the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `average`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `count`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `min`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `max`), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `sum`), ` for a specific attribute in a dataclass. You can also compute all values with the $all keyword. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, to get the highest salary:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/Employee/salary/?$compute=max`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To compute all values and return a JSON object:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/Employee/salary/?$compute=$all`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "calling-data-model-class-functions"
    }
  }, `Calling Data model class functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can call ORDA Data Model `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/classFunctions"
    }
  }, `user class functions`), ` through POST requests, so that you can benefit from the exposed API of the targeted application. For example, if you have defined a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getCity()`), ` function in the City dataclass class, you could call it using the following request:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/rest/City/getCity`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `with data in the body of the request: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `["Paris"]`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Calls to 4D project methods that are exposed as REST Service are still supported but are deprecated. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "selecting-attributes-to-get"
    }
  }, `Selecting Attributes to get`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can always define which attributes to return in the REST response after an initial request by passing their path in the request (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `e.g.`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Company(1)/name,revenues/`), `)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can apply this filter in the following ways:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Dataclass`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `{dataClass}/{att1,att2...}`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/People/firstName,lastName`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of entities`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `{dataClass}/{att1,att2...}/?$filter="{filter}"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/People/firstName,lastName/?$filter="lastName='a@'"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Specific entity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `{dataClass}({ID})/{att1,att2...}`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/People(1)/firstName,lastName`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `{dataClass}:{attribute}(value)/{att1,att2...}/`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/People:firstName(Larry)/firstName,lastName/`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `{dataClass}/{att1,att2...}/$entityset/{entitySetID}`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/People/firstName/$entityset/528BF90F10894915A4290158B4281E61`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The attributes must be delimited by a comma, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/Employee/firstName,lastName,salary`), `. Storage or relation attributes can be passed. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "examples"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can apply this technique to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Dataclasses (all or a collection of entities in a dataclass)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Specific entities`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Entity sets`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "dataclass-example"
    }
  }, `Dataclass Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$filter`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/People/firstName,lastName/`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Result`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Result`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "entity-example"
    }
  }, `Entity Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following request returns only the first name and last name attributes from a specific entity in the People dataclass:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/People(3)/firstName,lastName/`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Result`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/People(3)/`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Result`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"
 
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "entity-set-example"
    }
  }, `Entity Set Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#creating-and-managing-entity-set"
    }
  }, `created an entity set`), `, you can filter the information in it by defining which attributes to return:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "viewing-an-image-attribute"
    }
  }, `Viewing an image attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to view an image attribute in its entirety, write the following:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the image formats, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/imageformat"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$imageformat`)), `. For more information about the version parameter, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/REST/version"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `$version`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "saving-a-blob-attribute-to-disk"
    }
  }, `Saving a BLOB attribute to disk`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to save a BLOB stored in your dataclass, you can write the following:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `  `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "retrieving-only-one-entity"
    }
  }, `Retrieving only one entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "%7BdataClass%7D.html#dataclassattributevalue"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `{dataClass}:{attribute}(value)`)), ` syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. For example, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/Company:companyCode("Acme001")`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;