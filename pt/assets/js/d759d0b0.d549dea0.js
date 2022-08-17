exports.id = 60135;
exports.ids = [60135];
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

/***/ 60885:
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
var properties_BackgroundAndBorder_exports = {};
__export(properties_BackgroundAndBorder_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_BackgroundAndBorder_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesBackgroundAndBorder",
  title: "Background and Border"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesBackgroundAndBorder",
  "id": "FormObjects/propertiesBackgroundAndBorder",
  "title": "Background and Border",
  "description": "Alternate Background Color",
  "source": "@site/docs/FormObjects/properties_BackgroundAndBorder.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesBackgroundAndBorder",
  "permalink": "/docs/pt/next/FormObjects/propertiesBackgroundAndBorder",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesBackgroundAndBorder",
    "title": "Background and Border"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Appearance",
    "permalink": "/docs/pt/next/FormObjects/propertiesAppearance"
  },
  "next": {
    "title": "Coordinates & Sizing",
    "permalink": "/docs/pt/next/FormObjects/propertiesCoordinatesAndSizing"
  }
};
const assets = {};
const toc = [{
  value: "Alternate Background Color",
  id: "alternate-background-color",
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
  value: "Background Color / Fill Color",
  id: "background-color--fill-color",
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
  value: "See also",
  id: "see-also",
  level: 4
}, {
  value: "Background Color Expression",
  id: "background-color-expression",
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
  value: "Border Line Style",
  id: "border-line-style",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-3",
  level: 4
}, {
  value: "Dotted Line Type",
  id: "dotted-line-type",
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
  value: "Hide extra blank rows",
  id: "hide-extra-blank-rows",
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
  value: "Line Color",
  id: "line-color",
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
  value: "Line Width",
  id: "line-width",
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
  value: "Row Background Color Array",
  id: "row-background-color-array",
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
  value: "Transparent",
  id: "transparent",
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
  value: "See also",
  id: "see-also-1",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "alternate-background-color"
    }
  }, `Alternate Background Color`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows setting a different background color for odd-numbered rows/columns in a list box. By default, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Automatic`), ` is selected: the column uses the alternate background color set at the list box level.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `alternateFill`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any css value; "transparent"; "automatic"; "automaticAlternate"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "background-color--fill-color"
    }
  }, `Background Color / Fill Color`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Defines the background color of an object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the case of a list box, by default `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Automatic`), ` is selected: the column uses the background color set at the list box level.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fill`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any css value; "transparent"; "automatic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#oval"
    }
  }, `Oval`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#rectangle"
    }
  }, `Rectangle`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#transparent"
    }
  }, `Transparent`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "background-color-expression"
    }
  }, `Background Color Expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Selection and collection type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An expression or a variable (array variables cannot be used) to apply a custom background color to each row of the list box. The expression or variable will be evaluated for each row displayed and must return a RGB color value. For more information, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT SET RGB COLORS`), ` command in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Language Reference manual`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set this property using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `LISTBOX SET PROPERTY`), ` command with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `lk background color expression`), ` constant.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `With collection or entity selection type list boxes, this property can also be set using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/propertiesText#meta-info-expression"
    }
  }, `Meta Info Expression`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `rowFillSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `An expression returning a RGB color value`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "border-line-style"
    }
  }, `Border Line Style`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows setting a standard style for the object border.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `borderStyle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"system", "none", "solid", "dotted", "raised", "sunken", "double"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/viewProAreaOverview"
    }
  }, `4D View Pro Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/buttonOverview"
    }
  }, `Buttons`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/pluginAreaOverview#overview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/progressIndicator"
    }
  }, `Progress Indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/subformOverview#overview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/text"
    }
  }, `Text Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/webAreaOverview#overview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "dotted-line-type"
    }
  }, `Dotted Line Type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Describes dotted line type as a sequence of black and white points.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `strokeDashArray`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number array or string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ex. "6 1" or `, `[`, `6,1`, `]`, ` for a sequence of 6 black point and 1 white point`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#rectangle"
    }
  }, `Rectangle`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#oval"
    }
  }, `Oval`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#line"
    }
  }, `Line`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "hide-extra-blank-rows"
    }
  }, `Hide extra blank rows`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Controls the display of extra blank rows added at the bottom of a list box object. By default, 4D adds such extra rows to fill the empty area:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26397)/* ["default"] */ .Z),
    width: "393",
    height: "272"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can remove these empty rows by selecting this option. The bottom of the list box object is then left blank:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(93917)/* ["default"] */ .Z),
    width: "279",
    height: "272"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `hideExtraBlankRows`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "line-color"
    }
  }, `Line Color`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Designates the color of the object's lines.
The color can be specified by:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a color name - like "red"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a HEX value - like "#ff0000"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an RGB value - like "rgb(255,0,0)"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set this property using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `OBJECT SET RGB COLORS`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `stroke`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any css value, "transparent", "automatic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is also available for text based objects, in which case it designates both the font color and the object's lines, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/propertiesText#font-color"
    }
  }, `Font color`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#line"
    }
  }, `Line`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#oval"
    }
  }, `Oval`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#rectangle"
    }
  }, `Rectangle`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "line-width"
    }
  }, `Line Width`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Designates the thickness of a line.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `strokeWidth`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0 for smallest width on a printed form, or any integer value < 20`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#line"
    }
  }, `Line`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#oval"
    }
  }, `Oval`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/shapesOverview#rectangle"
    }
  }, `Rectangle`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "row-background-color-array"
    }
  }, `Row Background Color Array`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Array type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of an array to apply a custom background color to each row of the list box or column.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a Longint array must be entered. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html"
    }
  }, `SET RGB COLORS`), ` theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, given a list box where the rows have an alternating gray/light gray color, defined in the properties of the list box. A background color array has also been set for the list box in order to switch the color of rows where at least one value is negative to light orange:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // default value
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(17134)/* ["default"] */ .Z),
    width: "393",
    height: "446"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Next you want to color the cells with negative values in dark orange. To do this, you set a background color array for each column, for example `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>_BgndColor_1`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>_BgndColor_2`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>_BgndColor_3`), `. The values of these arrays have priority over the ones set in the list box properties as well as those of the general background color array:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97037)/* ["default"] */ .Z),
    width: "393",
    height: "446"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can get the same result using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `LISTBOX SET ROW FONT STYLE`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `LISTBOX SET ROW COLOR`), ` commands. They have the advantage of letting you skip having to predefine style/color arrays for the columns: instead they are created dynamically by the commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `rowFillSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The name of a longint array.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "transparent"
    }
  }, `Transparent`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the list box background to "Transparent". When set, any `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alternate-background-color"
    }
  }, `alternate background color`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#background-color-fill-color"
    }
  }, `background color`), ` defined for the column is ignored.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fill`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"transparent"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also-1"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#background-color-fill-color"
    }
  }, `Background Color / Fill Color`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 17134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/listbox_styles1-cbd46e30ec919d33260d78deacebc096.png");

/***/ }),

/***/ 97037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/listbox_styles2-957a9d7831e073df2727e1e8ad15fd91.png");

/***/ }),

/***/ 26397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 93917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;