exports.id = 56747;
exports.ids = [56747];
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

/***/ 79934:
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
var properties_Appearance_exports = {};
__export(properties_Appearance_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Appearance_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesAppearance",
  title: "Appearance"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesAppearance",
  "id": "FormObjects/propertiesAppearance",
  "title": "Appearance",
  "description": "Default Button",
  "source": "@site/docs/FormObjects/properties_Appearance.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesAppearance",
  "permalink": "/docs/next/FormObjects/propertiesAppearance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesAppearance",
    "title": "Appearance"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Animation",
    "permalink": "/docs/next/FormObjects/propertiesAnimation"
  },
  "next": {
    "title": "Background and Border",
    "permalink": "/docs/next/FormObjects/propertiesBackgroundAndBorder"
  }
};
const assets = {};
const toc = [{
  value: "Default Button",
  id: "default-button",
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
  value: "Hide focus rectangle",
  id: "hide-focus-rectangle",
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
  value: "Hide selection highlight",
  id: "hide-selection-highlight",
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
  value: "Horizontal Scroll Bar",
  id: "horizontal-scroll-bar",
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
  value: "See also",
  id: "see-also",
  level: 4
}, {
  value: "Resolution",
  id: "resolution",
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
  value: "Show background",
  id: "show-background",
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
  value: "Show footers",
  id: "show-footers",
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
  value: "Show Formula Bar",
  id: "show-formula-bar",
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
  value: "Show headers",
  id: "show-headers",
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
  value: "Show hidden characters",
  id: "show-hidden-characters",
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
  value: "Show horizontal ruler",
  id: "show-horizontal-ruler",
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
  value: "Show HTML WYSYWIG",
  id: "show-html-wysywig",
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
  value: "Show page frame",
  id: "show-page-frame",
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
  value: "Show references",
  id: "show-references",
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
  value: "Show vertical ruler",
  id: "show-vertical-ruler",
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
  value: "Tab Control Direction",
  id: "tab-control-direction",
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
  value: "User Interface",
  id: "user-interface",
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
  value: "See also",
  id: "see-also-1",
  level: 4
}, {
  value: "Vertical Scroll Bar",
  id: "vertical-scroll-bar",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-17",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-17",
  level: 4
}, {
  value: "See also",
  id: "see-also-2",
  level: 4
}, {
  value: "View mode",
  id: "view-mode",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-18",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-18",
  level: 4
}, {
  value: "Zoom",
  id: "zoom",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-19",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-19",
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
      "id": "default-button"
    }
  }, `Default Button`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The default button property designates the button that gets the initial focus at runtime when no button of the form has the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/propertiesEntry#focusable"
    }
  }, `Focusable`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There can only be one default button per form page.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user. The default button can be different from the focused button. Default buttons have a specific blue appearance on macOS:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75827)/* ["default"] */ .Z),
    width: "117",
    height: "30"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Button must have a standard height to get the default button appearance.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime. However, in the 4D form editor, the default button is represented with a blue outline:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(98694)/* ["default"] */ .Z),
    width: "133",
    height: "66"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `defaultButton`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview#regular"
    }
  }, `Regular Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/buttonOverview#regular"
    }
  }, `Flat Button`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "hide-focus-rectangle"
    }
  }, `Hide focus rectangle`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `During execution, a field or any enterable area is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `hideFocusRing`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/subformOverview"
    }
  }, `Subform`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "hide-selection-highlight"
    }
  }, `Hide selection highlight`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Selection type list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is used to disable the selection highlight in list boxes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#customizing-appearance-of-selected-rows"
    }
  }, `define their appearance programmatically`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, this option is not enabled.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `hideSystemHighlight`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "href": "/docs/next/FormObjects/listboxOverview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "horizontal-scroll-bar"
    }
  }, `Horizontal Scroll Bar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An interface tool allowing the user to move the viewing area to the left or right.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Available values:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property List`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `JSON value`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"visible"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame).`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"hidden"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar is never visible`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar appears automatically whenever necessary and the user can enter text larger than the object width`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Picture objects can have scrollbars when the display format of the picture is set to \u201CTruncated (non-centered).\u201D`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `scrollbarHorizontal`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"visible", "hidden", "automatic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/subformOverview#overview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#vertical-scroll-bar"
    }
  }, `Vertical scroll bar`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "resolution"
    }
  }, `Resolution`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the screen resolution for the 4D Write Pro area contents. By default, it is set to 72 dpi (macOS), which is the standard resolution for 4D forms on all platforms. Setting this property to 96 dpi will set a windows/web rendering on both macOS and Windows platforms. Setting this property to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `automatic`), ` means that document rendering will differ between macOS and Windows platforms.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `dpi`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0=automatic, 72, 96`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-background"
    }
  }, `Show background`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides both background images and background color.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showBackground`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-footers"
    }
  }, `Show footers`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides the footers when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#view-mode"
    }
  }, `Page view mode`), ` is set to "Page".`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showFooters`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-formula-bar"
    }
  }, `Show Formula Bar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When enabled, the formula bar is visible below the Toolbar interface in the 4D View Pro area. If not selected, the formula bar is hidden.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is available only for the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#user-interface"
    }
  }, `Toolbar`), ` interface.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `withFormulaBar`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/viewProAreaOverview"
    }
  }, `4D View Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-headers"
    }
  }, `Show headers`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides the headers when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#view-mode"
    }
  }, `Page view mode`), ` is set to "Page".`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showHeaders`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-hidden-characters"
    }
  }, `Show hidden characters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides invisible characters`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showHiddenChars`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-horizontal-ruler"
    }
  }, `Show horizontal ruler`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides the horizontal ruler when the document view is in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#view-mode"
    }
  }, `Page mode`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showHorizontalRuler`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-html-wysywig"
    }
  }, `Show HTML WYSYWIG`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showHTMLWysiwyg`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false (default)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-11"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-page-frame"
    }
  }, `Show page frame`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides the page frame when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#view-mode"
    }
  }, `Page view mode`), ` is set to "Page".`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showPageFrames`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-12"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-references"
    }
  }, `Show references`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays all 4D expressions inserted in the 4D Write Pro document as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `references`), `. When this option is disabled, 4D expressions are displayed as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `values`), `. By default when you insert a 4D field or expression, 4D Write Pro computes and displays its current value. Select this property if you wish to know which field or expression is displayed. The field or expression references then appear in your document, with a gray background.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you have inserted the current date along with a format, the date is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(25082)/* ["default"] */ .Z),
    width: "81",
    height: "23"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With the Show references property on, the reference is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(16851)/* ["default"] */ .Z),
    width: "194",
    height: "24"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D expressions can be inserted using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ST INSERT EXPRESSION`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showReferences`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false (default)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-13"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "show-vertical-ruler"
    }
  }, `Show vertical ruler`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/hides the vertical ruler when the document view is in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#view-mode"
    }
  }, `Page mode`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `showVerticalRuler`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true (default), false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-14"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "tab-control-direction"
    }
  }, `Tab Control Direction`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS. You can choose to place the tab controls on top (standard) or on the bottom.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When tab controls with a custom direction are displayed under Windows, they automatically return to the standard direction (top).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `labelsPlacement`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"top", "bottom"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-15"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/tabControl"
    }
  }, `Tab Control`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "user-interface"
    }
  }, `User Interface`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D View Pro offers two optional interfaces to choose from, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ribbon`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Toolbar`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `userInterface`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"none" (default), "ribbon", "toolbar"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-16"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/viewProAreaOverview"
    }
  }, `4D View Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also-1"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/ViewPro/getting-started"
    }
  }, `4D View Pro reference guide`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "vertical-scroll-bar"
    }
  }, `Vertical Scroll Bar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An interface tool allowing the user to move the viewing area up and down.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Available values:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property List`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `JSON value`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"visible"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame).`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"hidden"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar is never visible`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame)`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Picture objects can have scrollbars when the display format of the picture is set to \u201CTruncated (non-centered).\u201D`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `scrollbarVertical`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"visible", "hidden", "automatic"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-17"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/subformOverview#overview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also-2"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#horizontal-scroll-bar"
    }
  }, `Horizontal scroll bar`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "view-mode"
    }
  }, `View mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the mode for displaying the 4D Write Pro document in the form area. Three values are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Page`), `: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Draft`), `: draft mode with basic document properties`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Embedded`), `: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#resolution"
    }
  }, `96 dpi resolution`), ` and the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#show-html-wysiwyg"
    }
  }, `Show HTML WYSIWYG`), ` properties).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The View mode property is only used for onscreen rendering. Regarding printing settings, specific rendering rules are automatically used.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-18"
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
  }, `layoutMode`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"page", "draft", "embedded"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-18"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "zoom"
    }
  }, `Zoom`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets the zoom percentage for displaying 4D Write Pro area contents.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-19"
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
  }, `zoom`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `minimum = 0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-19"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 98694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 75827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 25082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAXCAIAAAD87DQQAAACPklEQVR42u1Yu27CMBQ1VYdKXTqhDhFzB4YqYssPhEzhD1gQS/8AOpl8BGJB6gckS4GlYzYSFvaqkKoVUzp1pH4FHHCCQwMMcCaw77XvuT72ERTCMARnhqtTF3DhfBRc81/epl/25PPj++fUVR2R883t3cvTw6lLOjjOUdsCzn6nwNDxtyYDpyqeEK5TdYJ4ampitDGfxcb4POE6NC62XzJCDq+TryXB3NZ1e74UAs0B6C13AEcBwC3iQbxbSqIH6STJZHEoiXxCY1GmYB2SkVjvNg6lbcUcUtoR1DYrNwlqu63STAsCdxbgA225dh0PKpWm26JnuLVO4DRqmrccmopsbamc10Im0okph4mOjJE4SV1JoFimzVpMR1qJMlFK2mi6EAX7/RqAoJVB2emcFbPHzkptx08t6je0cHuViuXNMzR6BxZTzZJdzB8861rZ6GGFg1pDivUObaP+Jk+qdZsqLliAYl6EkWhmBlW5JDTDVEnjm3qCFrJx3tGRShN0x0GelP1OA1QYY6Rxcq9xI2auXi4K4rmY1PNJ47wymOgmMQTj7khA2rS0WqOfF2W0+cAgdyRwHJ+u3seuhC5tgtxx22kMljk0pASy4VXs2q69gD2SOoR4AtrsWq8CPCh0idX1j2ZXjy3nSHzmxnsRt6bterihKFParcT+nAFzz5M2xk1HtuU9NU/815/98Ww/YWMdl3J76jNhf87UoPeuG3ldptc5RxRC7n8S9/3XeLw/TSFHxOV31Xngwvk88AezGxd6rePHCgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 16851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAAYCAIAAAAnJrUvAAAEV0lEQVR42u1aPW7bMBRWih4hQGvlAl6MtDB8AMFDhF6gg5HFJ9BgCD5CYCiATqDF8JCpUwFpMDx1MoTCUAdvRYdIHTK4U0f3kRQlUqJ+bMlwkvKbJFnvfR/5Ht8jlVzsdjtFQqIZ3pxbgMRrgEwjiRYg00iiBbxlb5Y/oi/fH3/9/nNuVRIvDBc7Zov97effj+/255Yk8QJwf39vWVZyK9NI4hioqrrfp6ki2BtF7khFsIPItd2oxFdgw0sHsYNvakFp1JEbVRG1C5CNWY83Vhs4qDtPOAJtyy/zW2/0YuJcGkXuZDzwQsBw2R+vE3MRdc8Ijd5BY5goFraAqejPb31EE1rKJCVqEWLNWLbvaIcaMWMGa83xF3rnOA910NGtQolN5Jf5rYOeMd32BZkkOqlp3UsqdxCrW84azwzk53ZK5j5y72aaY8Vx6OiL0Btsnxoz8DhKc/OBtjFVz5kcltF0O3EzT3Np1Lm+VcZ9Uvc6ugGhhspxM1NmN+rItnFJtFFVtV1aH2mhJOWepmpS/El/VIKH8WBISle0ma+02+sOJ87opQWXlu34CeYbjRjuIO2JiC+vINXMrxzyhr2h92xnzRixBLFlZqVX0QokskPhJ4xTUpgmR8sXgaesF0YcrOFgXJVGqDhA0QQ11AzyzzMV0wsXhrGAq5kyhFZk6LQ+ggF6erOEx76jzDdY093aQT0L1V/Tgxx5XMdFrhBpwaVlO/aM+RYLhrsX2P3tFHVEbzCGpZFTkGpmWg9M1F0XiRpuxysySQ+kgeeNeIIIz0K2g3dKaYUS2aFwE8YrKYr68fJF7ibkFfRO3w5qhZGYXnazjVH4+RG1GfBuQi4JWq05FO2HUhLs4Wqwwm0KLpTaEL/M8sXXkJQKTnS0/lZxP+QVCOZtM1dIDex9TvIVp6Taj+OSvisiEKOAViyRHQpnV6jkVPKRu3hdI3+zZdAkjIItNj004ZpA3R8KkLYm41By0wx9U1vxay5y3QN5NIds0MPwoG1+drBQyGH5ifaszQkO8VCm5OTyIUkKWkVZGFkIqtF6/BCH9Gm7qupEZDiP2YNWWjHjQSR5jW/0qbliim1gT5RrViTaPVWMe0VV4sNJXkGZEXWPVqTji6YnR1B34PU85OyKlZxKPt4DxyEIlmtU52qEkQDyIutux+Dr9wgy2/GgRxKYHvFB0l0zTZL1ONPpEjAdhz51zMQscZG4gfepO9KRTf539mHMpGkpn+8w3GFKjx74IgWx5nRRZt3DT5zKjBFLEN+hq8REc7wKWrFEdiipXUYJnVNuxhrIp/BZv4IRVocRy9AcuN0zONFXbGhST7re42+gBqON3/E96MzgBvVfQBDGS/zxbwGH+Yqv2C0AjhDbVMtGuSKNDc6A3bsWPs6dA7CTzXTe1498GNH2wxJ8eD1ZNRolx4eSL74SzxvFYaz40+ynD+/PrV3i5UH+25pEC5BpJNECZBpJtACZRhIt4B/6Z3JwUui+ogAAAABJRU5ErkJggg==");

/***/ })

};
;