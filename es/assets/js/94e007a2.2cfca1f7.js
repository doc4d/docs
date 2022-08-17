exports.id = 10670;
exports.ids = [10670];
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

/***/ 50566:
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
var properties_Scale_exports = {};
__export(properties_Scale_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Scale_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesScale",
  title: "Scale"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesScale",
  "id": "version-19/FormObjects/propertiesScale",
  "title": "Scale",
  "description": "Barber shop",
  "source": "@site/versioned_docs/version-19/FormObjects/properties_Scale.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesScale",
  "permalink": "/docs/es/19/FormObjects/propertiesScale",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "propertiesScale",
    "title": "Scale"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Resizing Options",
    "permalink": "/docs/es/19/FormObjects/propertiesResizingOptions"
  },
  "next": {
    "title": "Subform",
    "permalink": "/docs/es/19/FormObjects/propertiesSubform"
  }
};
const assets = {};
const toc = [{
  value: "Barber shop",
  id: "barber-shop",
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
  value: "Display graduation",
  id: "display-graduation",
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
  value: "Graduation step",
  id: "graduation-step",
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
  value: "Label Location",
  id: "label-location",
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
  value: "Maximum",
  id: "maximum",
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
  value: "Minimum",
  id: "minimum",
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
  value: "Step",
  id: "step",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-6",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-6",
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
      "id": "barber-shop"
    }
  }, `Barber shop`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables the "barber shop" variant for the thermometer.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#maximum"
    }
  }, `max`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `NOT passed = enabled; passed = disabled (basic thermometer)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#barber-shop"
    }
  }, `Barber shop`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "display-graduation"
    }
  }, `Display graduation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displays/Hides the graduations next to the labels.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `showGraduations`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"true", "false"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "graduation-step"
    }
  }, `Graduation step`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Scale display measurement. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `graduationStep`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `integer`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `minimum: 0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "label-location"
    }
  }, `Label Location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies the location of an object's displayed text.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `None - no label is displayed`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Top - Displays labels to the left of or above an indicator`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Bottom - Displays labels to the right of or below an indicator`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `labelsPlacement`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"none", "top", "bottom", "left", "right"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "maximum"
    }
  }, `Maximum`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Maximum value of an indicator.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To enable `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#barber-shop"
    }
  }, `Barber shop thermometers`), `, this property must be omitted.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `max`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `string / number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `minimum: 0 (for numeric data types)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper#stepper"
    }
  }, `Stepper`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "minimum"
    }
  }, `Minimum`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `min`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `string / number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `minimum: 0 (for numeric data types)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper#stepper"
    }
  }, `Stepper`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "step"
    }
  }, `Step`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
      "align": "center"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
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
      "align": "center"
    }
  }, `step`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `integer`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `minimum: 1`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator#thermometer"
    }
  }, `Thermometer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler#ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper#stepper"
    }
  }, `Stepper`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;