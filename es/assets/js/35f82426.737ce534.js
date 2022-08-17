exports.id = 34322;
exports.ids = [34322];
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

/***/ 10809:
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
var groupBox_exports = {};
__export(groupBox_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(groupBox_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "groupBox",
  title: "Group Box"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/groupBox",
  "id": "version-19-R6/FormObjects/groupBox",
  "title": "Group Box",
  "description": "A group box is a static object that allows you to visually assemble multiple form objects:",
  "source": "@site/versioned_docs/version-19-R6/FormObjects/groupBox.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/groupBox",
  "permalink": "/docs/es/FormObjects/groupBox",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "groupBox",
    "title": "Group Box"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Drop-down List",
    "permalink": "/docs/es/FormObjects/dropdownListOverview"
  },
  "next": {
    "title": "Input",
    "permalink": "/docs/es/FormObjects/inputOverview"
  }
};
const assets = {};
const toc = [{
  value: "JSON Example:",
  id: "json-example",
  level: 4
}, {
  value: "Supported Properties",
  id: "supported-properties",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A group box is a static object that allows you to visually assemble multiple form objects:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(1980)/* ["default"] */ .Z),
    width: "516",
    height: "120"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The name of a group box is static text; you can use a \u201Clocalizable\u201D reference as with any 4D label (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html"
    }
  }, `Using references in static text`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `XLIFF Architecture`), ` section in 4D Design Reference.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-example"
    }
  }, `JSON Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `    "myGroup": {
        "type": "groupBox", 
        "title": "Employee Info"
        "left": 60,
        "top": 160,
        "width": 100,
        "height": 20
        }
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesObject#css-class"
    }
  }, `CSS Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#font"
    }
  }, `Font`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#font-color"
    }
  }, `Font Color`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#font-size"
    }
  }, `Font Size`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#horizontal-alignment"
    }
  }, `Horizontal Alignment`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#italic"
    }
  }, `Italic`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesObject#title"
    }
  }, `Title`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesText#underline"
    }
  }, `Underline`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibility`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 1980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;