exports.id = 60502;
exports.ids = [60502];
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

/***/ 76923:
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
var properties_Picture_exports = {};
__export(properties_Picture_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Picture_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesPicture",
  title: "Picture"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesPicture",
  "id": "version-19/FormObjects/propertiesPicture",
  "title": "Picture",
  "description": "Pathname",
  "source": "@site/versioned_docs/version-19/FormObjects/properties_Picture.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesPicture",
  "permalink": "/docs/ja/19/FormObjects/propertiesPicture",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "propertiesPicture",
    "title": "Picture"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Objects",
    "permalink": "/docs/ja/19/FormObjects/propertiesObject"
  },
  "next": {
    "title": "Plug-ins",
    "permalink": "/docs/ja/19/FormObjects/propertiesPlugIns"
  }
};
const assets = {};
const toc = [{
  value: "Pathname",
  id: "pathname",
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
  value: "Display",
  id: "display",
  level: 2
}, {
  value: "Scaled to fit",
  id: "scaled-to-fit",
  level: 3
}, {
  value: "Replicated",
  id: "replicated",
  level: 3
}, {
  value: "Center / Truncated (non-centered)",
  id: "center--truncated-non-centered",
  level: 3
}, {
  value: "JSON Grammar",
  id: "json-grammar-1",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-1",
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
      "id": "pathname"
    }
  }, `Pathname`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Pathname of a static source picture for a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/pictureButtonOverview"
    }
  }, `picture button`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/picturePopupMenuOverview"
    }
  }, `picture pop-up Menu`), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/staticPicture"
    }
  }, `static picture`), `. You must use the POSIX syntax.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following locations can be used for static pictures:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder of the project. Appropriate when you want to share static pictures between several forms in the project. In this case, the Pathname is "/RESOURCES/\\<picture path`, `>`, `".`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in an image folder (e.g. named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Images`), `) within the form folder. Appropriate when the static pictures are used only in the form and/or you want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "\\<picture path`, `>`, `" and is resolved from the root of the form folder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in a 4D picture variable. The picture must be loaded in memory when the form is executed. In this case, the Pathname is "var:\\<variableName`, `>`, `".`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Relative or filesystem path in POSIX syntax, or "var:\\<variableName`, `>`, `" for picture variable`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/staticPicture"
    }
  }, `Static Picture`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "display"
    }
  }, `Display`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scaled-to-fit"
    }
  }, `Scaled to fit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "scaled"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit`), ` format causes 4D to resize the picture to fit the dimensions of the area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(54323)/* ["default"] */ .Z),
    width: "212",
    height: "198"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "replicated"
    }
  }, `Replicated`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "tiled"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the area that contains a picture with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Replicated`), ` format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(60541)/* ["default"] */ .Z),
    width: "663",
    height: "273"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "center--truncated-non-centered"
    }
  }, `Center / Truncated (non-centered)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "truncatedCenter" / "truncatedTopLeft"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Center`), ` format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D crops equally from each edge and from the top and bottom.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated (non-centered)`), ` format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When the picture format is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated (non-centered)`), `, it is possible to add scroll bars to the input area.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(57030)/* ["default"] */ .Z),
    width: "429",
    height: "221"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `pictureFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"scaled", "tiled", "truncatedCenter", "truncatedTopLeft"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/staticPicture"
    }
  }, `Static Picture`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 60541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_pictureFormat_Replicated-8497c171f9ede501e533a75837b762e5.png");

/***/ }),

/***/ 54323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 57030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_pictureFormat_Truncated-aebc828eb036b3aa77fc5edb90070ac5.png");

/***/ })

};
;