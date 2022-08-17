exports.id = 32204;
exports.ids = [32204];
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

/***/ 15449:
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
var properties_Text_exports = {};
__export(properties_Text_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Text_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesText",
  title: "Text"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesText",
  "id": "FormObjects/propertiesText",
  "title": "Text",
  "description": "---",
  "source": "@site/docs/FormObjects/properties_Text.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesText",
  "permalink": "/docs/next/FormObjects/propertiesText",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesText",
    "title": "Text"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Subform",
    "permalink": "/docs/next/FormObjects/propertiesSubform"
  },
  "next": {
    "title": "Text and Picture",
    "permalink": "/docs/next/FormObjects/propertiesTextAndPicture"
  }
};
const assets = {};
const toc = [{
  value: "Allow font/color picker",
  id: "allow-fontcolor-picker",
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
  value: "Bold",
  id: "bold",
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
  value: "Italic",
  id: "italic",
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
  value: "Underline",
  id: "underline",
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
  value: "Font",
  id: "font",
  level: 2
}, {
  value: "Font Theme",
  id: "font-theme",
  level: 3
}, {
  value: "JSON Grammar",
  id: "json-grammar-4",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-4",
  level: 4
}, {
  value: "Font Family",
  id: "font-family",
  level: 3
}, {
  value: "JSON Grammar",
  id: "json-grammar-5",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-5",
  level: 4
}, {
  value: "Font Size",
  id: "font-size",
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
  value: "Font Color",
  id: "font-color",
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
  value: "Font Color Expression",
  id: "font-color-expression",
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
  value: "Style Expression",
  id: "style-expression",
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
  value: "Horizontal Alignment",
  id: "horizontal-alignment",
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
  value: "Vertical Alignment",
  id: "vertical-alignment",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-11",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-11",
  level: 4
}, {
  value: "Meta Info Expression",
  id: "meta-info-expression",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-12",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-12",
  level: 4
}, {
  value: "Multi-style",
  id: "multi-style",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-13",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-13",
  level: 4
}, {
  value: "Orientation",
  id: "orientation",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-14",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-14",
  level: 4
}, {
  value: "Row Font Color Array",
  id: "row-font-color-array",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-15",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-15",
  level: 4
}, {
  value: "Row Style Array",
  id: "row-style-array",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-16",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-16",
  level: 4
}, {
  value: "Store with default style tags",
  id: "store-with-default-style-tags",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-17",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-17",
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
      "id": "allow-fontcolor-picker"
    }
  }, `Allow font/color picker`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this property is enabled, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html"
    }
  }, `OPEN FONT PICKER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html"
    }
  }, `OPEN COLOR PICKER`), ` commands can be called to display the system font and color picker windows. Using these windows, the users can change the font or color of a form object that has the focus directly by clicking. When this property is disabled (default), the open picker commands have no effect.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `allowFontColorPicker`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `false (default), true`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "bold"
    }
  }, `Bold`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the selected text to appear darker and heavier.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set this property using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `OBJECT SET FONT STYLE`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This is normal text.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `This is bold text.`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `fontWeight`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal", "bold"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "italic"
    }
  }, `Italic`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the selected text to slant slightly to the right.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set this property via the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `OBJECT SET FONT STYLE`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This is normal text.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `
`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `This is text in italics.`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fontStyle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal", "italic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "underline"
    }
  }, `Underline`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the text to have a line running beneath it.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `textDecoration`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal", "underline"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "font"
    }
  }, `Font`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property allows you to specify either the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `font theme`), ` or the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `font family`), ` used in the object.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Font theme`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `font family`), ` properties are mutually exclusive. A font theme takes hold of font attributes, including size. A font family allows you to define font name, font size and font color.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "font-theme"
    }
  }, `Font Theme`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The font theme property designates an automatic style name. Automatic styles determine the font family, font size and font color to be used for the object dynamically according to system parameters. These parameters depend on:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the platform,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the system language,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `and the type of form object.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With the font theme, you are guaranteed that titles are always displayed in accordance with the current interface standards of the system. However, their size may vary from one machine to another.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Three font themes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `normal`), `: automatic style, applied by default to any new object created in the Form editor.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `main`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `additional`), ` font themes are only supported by `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `text areas`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `inputs`), `. These themes are primarily intended for designing dialog boxes. They refer to font styles used, respectively, for main text and additional information in your interface windows. Here are typical dialog boxes (macOS and Windows) using these font themes:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(59382)/* ["default"] */ .Z),
    width: "997",
    height: "251"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Font themes manage the font as well as its size and color. You can apply custom style properties (Bold, Italic or Underline) without altering its functioning.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fontTheme`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal", "main", "additional"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "font-family"
    }
  }, `Font Family`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are two types of font family names:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `family-name:`), ` The name of a font-family, like "times", "courier", "arial", etc.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `generic-family:`), ` The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set this using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `OBJECT SET FONT`)), ` command.  `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fontFamily`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CSS font family name`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D recommends using only `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://www.w3schools.com/cssref/css_websafe_fonts.asp"
    }
  }, `web safe`), ` fonts.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "font-size"
    }
  }, `Font Size`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows defining the object's font size in points.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `fontSize`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `integer`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Font size in points. Minimum value: 0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "font-color"
    }
  }, `Font Color`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Designates the font color.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property also sets the color of object's `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#border-line-style-dotted-line-type"
    }
  }, `border`), ` (if any) when "plain" or "dotted" style is used.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The color can be specified by:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
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
  }, `any css value, "transparent", "automatic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/progressIndicator"
    }
  }, `Progress Indicators`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "font-color-expression"
    }
  }, `Font Color Expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Selection and collection/entity selection type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to apply a custom font color to each row of the list box. You must use RGB color values. For more information about this, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-RGB-COLORS.301-4311385.en.html"
    }
  }, `OBJECT SET RGB COLORS`), ` command in the 4D Language Reference manual.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed. You can use the constants of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html"
    }
  }, `SET RGB COLORS`), ` theme.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set this property using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `LISTBOX SET PROPERTY`), ` command with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `lk font color expression`), ` constant.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property can also be set using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/propertiesText#meta-info-expression"
    }
  }, `Meta Info Expression`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following example uses a variable name: enter `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `CompanyColor`), ` for the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Font Color Expression`), ` and, in the form method, write the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `rowStrokeSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Font color expression`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "style-expression"
    }
  }, `Style Expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Selection and collection/entity selection type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to apply a custom character style to each row of the list box or each cell of the column.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed (if applied to the list box) or each cell displayed (if applied to a column). You can use the constants of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html"
    }
  }, `Font Styles`), ` theme.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Choose([Companies]ID;Bold;Plain;Italic;Underline)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set this property using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `LISTBOX SET PROPERTY`), ` command with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `lk font style expression`), ` constant.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property can also be set using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/propertiesText#meta-info-expression"
    }
  }, `Meta Info Expression`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `rowStyleSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Style expression to evaluate for each row/cell.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "horizontal-alignment"
    }
  }, `Horizontal Alignment`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Horizontal location of text within the area that contains it.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `textAlign`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic", "right", "center", "justify", "left"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "vertical-alignment"
    }
  }, `Vertical Alignment`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Vertical location of text within the area that contains it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Default`), ` option (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `automatic`), ` JSON value) sets the alignment according to the type of data found in each column:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `bottom`), ` for all data (except pictures) and`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `top`), ` for picture type data.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property can also be handled by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-vertical-alignment.301-4505442.en.html"
    }
  }, `OBJECT Get vertical alignment`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-VERTICAL-ALIGNMENT.301-4505430.en.html"
    }
  }, `OBJECT SET VERTICAL ALIGNMENT`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `verticalAlign`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic", "top", "middle", "bottom"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-11"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "meta-info-expression"
    }
  }, `Meta Info Expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Collection or entity selection type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `object variable`), ` or an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `expression that returns an object`), `. The following properties are supported:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `fontStyle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal","italic"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `fontWeight`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal","bold"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `textDecoration`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"normal","underline"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `unselectable`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Designates the corresponding row as not being selectable (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `i.e.`), `, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `disabled`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `cell.\\<columnName>`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allows applying the property to a single column. Pass in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `\\<columnName>`), ` the object name of the list box column. `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Note`), `: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Style settings made with this property are ignored if other style settings are already defined through expressions (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#style-expression"
    }
  }, `Style Expression`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#font-color-expression"
    }
  }, `Font Color Expression`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#background-color-expression"
    }
  }, `Background Color Expression`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Example`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Color`), ` project method, write the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Color method
//Sets font color for certain rows and the background color for a specific column:
C_OBJECT($0)
Form.meta:=New object
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Column2";New object("fill";"black"))
Else
  Form.meta.stroke:="orange"
End if
$0:=Form.meta
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Best Practice:`), ` For optimization reasons, it would be recommended in this case to create the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `meta.cell`), ` object once in the form method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //form method
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Column2";New object("fill";"black"))
 End case
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Color`), ` method would contain:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //Color method
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reuse the same object for better performance
 ...
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `See also the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html"
    }
  }, `This`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-12"
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
  }, `metaSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object expression to evaluate for each row/cell.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-12"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "multi-style"
    }
  }, `Multi-style`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property enables the possibility of using specific styles in the selected area. When this option is checked, 4D interprets any `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<SPAN> HTML`), ` tags found in the area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, this option is not enabled.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-13"
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
  }, `styledText`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-13"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "orientation"
    }
  }, `Orientation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Modifies the orientation (rotation) of a text area. Text areas can be rotated by increments of 90\xB0. Each orientation value is applied while keeping the same lower left starting point for the object:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Orientation value`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0 (default)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(23993)/* ["default"] */ .Z),
    width: "200",
    height: "200"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `90`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(8394)/* ["default"] */ .Z),
    width: "200",
    height: "200"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `180`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(45260)/* ["default"] */ .Z),
    width: "200",
    height: "200"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `270`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94164)/* ["default"] */ .Z),
    width: "200",
    height: "200"
  }))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `static text areas`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `input`), ` text objects can be rotated when they are non-`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/propertiesEntry#enterable"
    }
  }, `enterable`), `. When a rotation property is applied to an input object, the enterable property is removed (if any). This object is then excluded from the entry order.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-14"
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
  }, `textAngle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0, 90, 180, 270`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-14"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` (non-enterable) - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/text"
    }
  }, `Text Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "row-font-color-array"
    }
  }, `Row Font Color Array`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Array type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows setting a custom font color to each row of the list box or cell of the column.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html"
    }
  }, `SET RGB COLORS`), ` theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-15"
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
  }, `rowStrokeSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The name of a longint array`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-15"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "row-style-array"
    }
  }, `Row Style Array`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Array type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows setting a custom font style to each row of the list box or each cell of the column.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. To fill the array (using a method), use the constants of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html"
    }
  }, `Font Styles`), ` theme. You can add constants together to combine styles. If you want the cell to inherit the style defined at the higher level, pass the value -255 to the corresponding array element.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-16"
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
  }, `rowStyleSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-16"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "store-with-default-style-tags"
    }
  }, `Store with default style tags`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is only available for a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#multi-style"
    }
  }, `Multi-style`), ` input area.
When this property is enabled, the area will store the style tags with the text, even if no modification has been made. In this case, the tags correspond to the default style. When this property is disabled, only modified style tags are stored.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, here is a text that includes a style modification:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(36924)/* ["default"] */ .Z),
    width: "139",
    height: "34"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the property is disabled, the area only stores the modification. The stored contents are therefore:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the property is enabled, the area stores all the formatting information. The first generic tag describes the default style then each variation is the subject of a pair of nested tags. The contents stored in the area are therefore:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!</SPAN>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-17"
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
  }, `storeDefaultStyle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false (default).`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-17"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 59382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/FontThemes-effc2b9aa3ddbde34e30f8cf65f97798.png");

/***/ }),

/***/ 23993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 8394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 45260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 94164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 36924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;