exports.id = 17405;
exports.ids = [17405];
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

/***/ 17259:
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
var properties_Object_exports = {};
__export(properties_Object_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Object_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesObject",
  title: "Objects"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesObject",
  "id": "version-19/FormObjects/propertiesObject",
  "title": "Objects",
  "description": "---",
  "source": "@site/versioned_docs/version-19/FormObjects/properties_Object.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesObject",
  "permalink": "/docs/es/19/FormObjects/propertiesObject",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "propertiesObject",
    "title": "Objects"
  },
  "sidebar": "docs",
  "previous": {
    "title": "List Box",
    "permalink": "/docs/es/19/FormObjects/propertiesListBox"
  },
  "next": {
    "title": "Picture",
    "permalink": "/docs/es/19/FormObjects/propertiesPicture"
  }
};
const assets = {};
const toc = [{
  value: "Type",
  id: "type",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported",
  level: 4
}, {
  value: "Object Name",
  id: "object-name",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-1",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-1",
  level: 4
}, {
  value: "Save value",
  id: "save-value",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-2",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-2",
  level: 4
}, {
  value: "Variable or Expression",
  id: "variable-or-expression",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Expressions",
  id: "expressions",
  level: 3
}, {
  value: "Dynamic variables",
  id: "dynamic-variables",
  level: 3
}, {
  value: "Array List Box",
  id: "array-list-box",
  level: 3
}, {
  value: "Objects Supported",
  id: "objects-supported-3",
  level: 4
}, {
  value: "Expression Type",
  id: "expression-type",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-4",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-4",
  level: 4
}, {
  value: "CSS Class",
  id: "css-class",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-5",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-5",
  level: 4
}, {
  value: "Collection or entity selection",
  id: "collection-or-entity-selection",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-6",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-6",
  level: 4
}, {
  value: "Data Source",
  id: "data-source",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-7",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-7",
  level: 4
}, {
  value: "Plug-in Kind",
  id: "plug-in-kind",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-8",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-8",
  level: 4
}, {
  value: "Radio Group",
  id: "radio-group",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-9",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-9",
  level: 4
}, {
  value: "Title",
  id: "title",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-10",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-10",
  level: 4
}, {
  value: "Variable Calculation",
  id: "variable-calculation",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-11",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-11",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "type"
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MANDATORY SETTING`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property designates the type of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/formObjectsOverview"
    }
  }, `active or inactive form object`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `type`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "viewProArea_overview"
    }
  }, `4D View Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "writeProArea_overview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator"
    }
  }, `Progress indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` -`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/splitters"
    }
  }, `Splitter`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/staticPicture"
    }
  }, `Static Picture`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab control`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/text"
    }
  }, `Text Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "object-name"
    }
  }, `Object Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each active form object is associated with an object name. Each object name must be unique.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Object names are limited to a size of 255 bytes.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When using 4D\u2019s language, you can refer to an active form object by its object name (for more information about this, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html"
    }
  }, `Object Properties`), ` in the 4D Language Reference manual).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about naming rules for form objects, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/identifiers"
    }
  }, `Identifiers`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-1"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Any allowed name which does not belong to an already existing object`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "viewProArea_overview"
    }
  }, `4D View Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "writeProArea_overview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator"
    }
  }, `Progress indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/splitters"
    }
  }, `Splitter`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/staticPicture"
    }
  }, `Static Picture`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab control`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/text"
    }
  }, `Text Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "save-value"
    }
  }, `Save value`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is available when the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormEditor/propertiesForm#save-geometry"
    }
  }, `Save Geometry`), ` option is checked for the form.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature is only supported for objects that contribute to the overall geometry of the form. For example, this option is available for check boxes because their value can be used to hide or display additional areas in the window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the list of objects whose value can be saved:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Saved value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
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
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of associated variable (0, 1, 2)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of selected row`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of associated variable (1, 0, True or False for buttons according to their type)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab control`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of selected tab`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-2"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `memorizeValue`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab control`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "variable-or-expression"
    }
  }, `Variable or Expression`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `See also `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesDataSource#expression"
    }
  }, `Expression`)), ` for Selection and collection type list box columns.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object\u2019s name. In the same form, you can use the same variable several times while each `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#object-name"
    }
  }, `object name`), ` must be unique.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Variable name size is limited to 31 bytes. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/identifiers"
    }
  }, `Identifiers`), ` section for more information about naming rules.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The form object variables allow you to control and monitor the objects. For example, when a button is clicked, its variable is set to 1; at all other times, it is 0. The expression associated with a progress indicator lets you read and change the current setting.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Variables or expressions can be enterable or non-enterable and can receive data of the Text, Integer, Numeric, Date, Time, Picture, Boolean, or Object type.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-3"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string, or string array`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `4D variable, field name, or any expression. `), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `Empty string for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#dynamic-variables"
    }
  }, `dynamic variables`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `String array (collection of array names) for a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#hierarchical-list-boxes"
    }
  }, `hierarchical listbox`), ` column]`))))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "expressions"
    }
  }, `Expressions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/quick-tour#expressions"
    }
  }, `expression`), ` as data source for an object. Any valid 4D expression is allowed: simple expression, object property, formula, 4D function, project method name or field using the standard `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Table]Field`), ` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Note that expressions can be `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/quick-tour#expressions"
    }
  }, `assignable or non-assignable`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "dynamic-variables"
    }
  }, `Dynamic variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `dataSource`), ` JSON field) blank.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a variable is not named, when the form is loaded, 4D creates a new variable for the object, with a calculated name that is unique in the space of the process variables of the interpreter (which means that this mechanism can be used even in compiled mode). This temporary variable will be destroyed when the form is closed.
In order for this principle to work in compiled mode, it is imperative that dynamic variables are explicitly typed. There are two ways to do this:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can set the type using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#expression-type"
    }
  }, `Expression type`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can use a specific initialization code when the form is loaded that uses, for example, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `VARIABLE TO VARIABLE`), ` command:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the 4D code, dynamic variables can be accessed using a pointer obtained with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get pointer`), ` command. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are two advantages with this mechanism:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `On the other hand, it can be used to limit memory usage. In fact, form objects only work with process or inter-process variables. However, in compiled mode, an instance of each process variable is created in all the processes, including the server processes. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "array-list-box"
    }
  }, `Array List Box`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For an array list box, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Variable or Expression`), ` property usually holds the name of the array variable defined for the list box, and for each column. However, you can use a string array (containing arrays names) as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `dataSource`), ` value for a list box column to define a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#hierarchical-list-boxes"
    }
  }, `hierarchical list box`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "viewProArea_overview"
    }
  }, `4D View Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "writeProArea_overview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview#overview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator"
    }
  }, `Progress indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/splitters"
    }
  }, `Splitter`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab control`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview#overview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "expression-type"
    }
  }, `Expression Type`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is called `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesDataSource#data-type-expression-type"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Data Type`)), ` in the Property List for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#selection-list-boxes"
    }
  }, `selection`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#collection-or-entity-selection-list-boxes"
    }
  }, `collection`), ` type list box columns and for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down Lists`), ` associated to an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview#using-an-object"
    }
  }, `object`), ` or an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview#using-an-array"
    }
  }, `array`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specify the data type for the expression or variable associated to the object. Note that main purpose of this setting is to configure options (such as display formats) available for the data type. It does not actually type the variable itself. In view of project compilation, you must `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/variables#declaring-variables"
    }
  }, `declare the variable`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, this property has a typing function in the following specific cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "#dynamic-variables"
    }
  }, `Dynamic variables`)), `: you can use this property to declare the type of dynamic variables.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Columns`)), `: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Picture variables`)), `: you can use this menu to declare the variables before loading the form in interpreted mode. Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form \u2014 i.e., even before the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Load`), ` form event \u2014 unlike other types of variables. To do this, you need either for the statement `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `C_PICTURE(varName)`), ` to have been executed before loading the form (typically, in the method calling the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DIALOG`), ` command), or for the variable to have been typed at the form level using the expression type property.
Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-4"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataSourceTypeHint`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `standard objects:`), ` "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `list box columns:`), ` "boolean", "number", "picture", "text", date", "time". `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `Array/selection list box only`), `: "integer", "object"`))))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview#overview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator"
    }
  }, `Progress indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/tabControl"
    }
  }, `Tab Control`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "css-class"
    }
  }, `CSS Class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A list of space-separated words used as class selectors in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormEditor/stylesheets#style-sheet-files"
    }
  }, `css files`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-5"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `class`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `One string with CSS name(s) separated by space characters`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "viewProArea_overview"
    }
  }, `4D View Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "writeProArea_overview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview#overview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/staticPicture"
    }
  }, `Static Picture`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview#overview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/text"
    }
  }, `Text Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview#overview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "collection-or-entity-selection"
    }
  }, `Collection or entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To use collection elements or entities to define the row contents of the list box.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html"
    }
  }, `This`), ` command:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if you used a collection of objects, you can call `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This`), ` in the datasource expression to access each property value, for example `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This.\\<propertyPath>`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if you used an entity selection, you can call `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This`), ` in the datasource expression to access each attribute value, for example  `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This.\\<attributePath>`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This.value`), ` in the datasource expression. However in this case you will not be able to modify values or to access the current ite object (see below)
Note: For information about entity selections, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html"
    }
  }, `ORDA`), ` chapter.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-6"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `dataSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Expression that returns a collection or an entity selection.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-source"
    }
  }, `Data Source`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specify the type of list box.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20141)/* ["default"] */ .Z),
    width: "529",
    height: "170"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Arrays`), `(default): use array elements as the rows of the list box.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Current Selection`), `: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Named Selection`), `: use expressions, fields or methods whose values will be evaluated for each record of a named selection.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Collection or Entity Selection`), `: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesObject#collection-or-entity-selection"
    }
  }, `Collection or Entity Selection`), ` property.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-7"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `listboxType`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"array", "currentSelection", "namedSelection", "collection"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "plug-in-kind"
    }
  }, `Plug-in Kind`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Name of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview"
    }
  }, `plug-in external area`), ` associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-8"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `pluginAreaKind`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of the plug-in external area (starts with a % character)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview"
    }
  }, `Plug-in Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "radio-group"
    }
  }, `Radio Group`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-9"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `radioGroup`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Radio group name`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "title"
    }
  }, `Title`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows inserting a label on an object. The font and the style of this label can be specified.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can force a carriage return in the label by using the \\ character (backslash).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58705)/* ["default"] */ .Z),
    width: "84",
    height: "48"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To insert a \\ in the label, enter "`, `\\`, `\\`, `".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the label is placed in the center of the object. When the object also contains an icon, you can modify the relative location of these two elements using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesTextAndPicture#title-picture-position"
    }
  }, `Title/Picture Position`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For application translation purposes, you can enter an XLIFF reference in the title area of a button (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html"
    }
  }, `Appendix B: XLIFF architecture`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-10"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any text`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "variable-calculation"
    }
  }, `Variable Calculation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property sets the type of calculation to be done in a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `column footer`), ` area.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The calculation for footers can also be set using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1140.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `LISTBOX SET FOOTER CALCULATION`)), ` 4D command.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are several types of calculations available. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Calculation`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Num`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Bool`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pict`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `footer var type`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Minimum`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Same as column type`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Same as column type`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Sum`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Same as column type`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Count`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Longint`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Average`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Real`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Standard deviation(*)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Real`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variance(*)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Real`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Sum squares(*)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Real`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Custom ("none")`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `Any`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `(*) Only for array type list boxes.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Only declared or dynamic `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/variables"
    }
  }, `variables`), ` can be used to display footer calculations. Other kinds of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/Concepts/quick-tour#expressions"
    }
  }, `expressions`), ` such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.value`), ` are not supported.  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Automatic calculations ignore the shown/hidden state of list box rows. If you want to restrict a calculation to only visible rows, you must use a custom calculation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Null`), ` values are not taken into account for any calculations.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the column contains different types of values (collection-based column for example):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Average and Sum only take numerical elements into account (other element types are ignored).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Minimum and Maximum return a result according to the usual type list order as defined in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/19/API/CollectionClass#sort"
    }
  }, `collection.sort()`), ` function.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using automatic calculations in footers of columns based upon expressions has the following limitations:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `supported`), ` with all list box types when the expression is "simple" (such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `[table]field`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `this.attribute`), `),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `supported but not recommended`), ` for performance reasons with collection/entity selection list boxes when the expression is "complex" (other than `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `this.attribute`), `) and the list box contains a large number of rows,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `not supported`), ` with current selection/named selection list boxes when the expression is "complex". You need to use custom calculations.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Custom`), ` ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-11"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `variableCalculation`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-11"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 20141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 58705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAwCAIAAAAAbMraAAADBElEQVR42u1aQWviQBSeLv0DErcuWE8KiUsvQi4torvopbC3bU+5FC/iqaH3eKiXnoqeJJfiobms/QnKbmSxl4CXwiZgT1JYuwb/ws5MTEw1W4QYx+7kI8KbycPMl/fezHyjO5OxDmjFO9IDIIld+GH2WNLD2CjMZ2NO3t3+7/Hju/rpc96yqU77kDytCMnTipA8rQiGvNmXYlzUuap9kzRPT+wG9s21n+NTjjS917HBtJ+nw5Vq2j3VvqrAnraO7rZV9cpKllsD6MpL57dMfqo2SmxPn4z1SS/5tWEXglwa8bDTyhGpA8rYoSbmOI1fcn475KWsU/PKEJi/OuDm2BJQbKYu9x4sQmW7E9tiPoKMaLzi9EM7sCEGRx7WPA4dvIQUmDw157eYRLk1mgT25C0g/xIwgPLTn1nDHMlniShp6psjz6SLZUmzdLMxEMu5A4Y09SCXugVE8uc30kcOxxtWxNEWcAc7sCaZPTY8zKAOIXlaEZKnFdtBHiuczcveja3zr4I5ql0SeKy/yM816T+EKmpP1arbATVvnV2F0UZHHfPILzhjB6iLMJDIddmSOiVKHjiaVDe+AU+hqiuHncK9S5xG8kJN1GwOmlQppJ3d3pIzFgXGs/VexsZZxRjotl08iJAmb2tPJn/iJVSH2kVNsISqo2ShcWFxgHfdHLycoSgA2ICimD0RC49YIEBplIz53iEHPOGhbbMj7L+Is94Uf41FzoLC8XaOxFikf82HHsunmA9JlDXQ8zrj/4xsfRMeGnqSh0zcszb6AdjjMI/ja1lteLz/WBdOmRWcld/DRBckzqFPpp4b6DwA+2n/Q15b5GFkmh7RQEFW7JlJV9qzf0KgzL+rd5M8u4JzNA66dx1g5Qj2UYD/gl8HebnE4kRluzlDSC3f54T7YvfQOs/KGvH3c56tJrv4srydUdm3gD0vwkRoysB/wQO/khYuUQ0gXm6FOF8RoaSdwd+ER2hnti5QHfmQPK0IydOK2WwPVz/SIyEAtMkhPQZioDrtQ/K04i9ZYY1jzup6zgAAAABJRU5ErkJggg==");

/***/ })

};
;