exports.id = 64850;
exports.ids = [64850];
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

/***/ 82383:
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
var dt_picture_exports = {};
__export(dt_picture_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(dt_picture_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "picture",
  title: "Picture"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/picture",
  "id": "version-19-R6/Concepts/picture",
  "title": "Picture",
  "description": "A Picture field, variable or expression can be any Windows or Macintosh picture. In general, this includes any picture that can be put on the pasteboard or read from the disk using 4D commands such as READ PICTURE FILE.",
  "source": "@site/versioned_docs/version-19-R6/Concepts/dt_picture.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/picture",
  "permalink": "/docs/pt/Concepts/picture",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "picture",
    "title": "Picture"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Object",
    "permalink": "/docs/pt/Concepts/object"
  },
  "next": {
    "title": "Pointer",
    "permalink": "/docs/pt/Concepts/pointer"
  }
};
const assets = {};
const toc = [{
  value: "Picture Codec IDs",
  id: "picture-codec-ids",
  level: 2
}, {
  value: "Picture operators",
  id: "picture-operators",
  level: 2
}, {
  value: "Examples",
  id: "examples",
  level: 3
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A Picture field, variable or expression can be any Windows or Macintosh picture. In general, this includes any picture that can be put on the pasteboard or read from the disk using 4D commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `READ PICTURE FILE`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D uses native APIs to encode (write) and decode (read) picture fields and variables under both Windows and macOS. These implementations provide access to numerous native formats, including the RAW format, currently used by digital cameras. `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on Windows, 4D uses WIC (Windows Imaging Component). `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on macOS, 4D uses ImageIO.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `WIC and ImageIO permit the use of metadata in pictures. Two commands, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET PICTURE METADATA`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET PICTURE METADATA`), `, let you benefit from metadata in your developments.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "picture-codec-ids"
    }
  }, `Picture Codec IDs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D supports natively a wide set of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormEditor/pictures#native-formats-supported"
    }
  }, `picture formats`), `, such as .jpeg, .png, or .svg. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Picture formats recognized by 4D are returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PICTURE CODEC LIST`), ` command as picture Codec IDs.  They can be returned in the following forms:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `As an extension (for example \u201C.gif\u201D)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `As a MIME type (for example \u201Cimage/jpeg\u201D)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The form returned for each format will depend on the way the Codec is recorded at the operating system level. Note that the list of available codecs for reading and writing can be different since encoding codecs may require specific licenses.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Most of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/Pictures.201-4504337.en.html"
    }
  }, `4D picture management commands`), ` can receive a Codec ID as a parameter. It is therefore imperative to use the system ID returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PICTURE CODEC LIST`), ` command.
Picture formats recognized by 4D are returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PICTURE CODEC LIST`), ` command. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "picture-operators"
    }
  }, `Picture operators`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operation`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Returns`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Action`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Horizontal concatenation`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pict1 + Pict2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Add Pict2 to the right of Pict1`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Vertical concatenation`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pict1 / Pict2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Add Pict2 to the bottom of Pict1`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Exclusive superimposition`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pict1 & Pict2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Superimposes Pict2 on top of Pict1 (Pict2 in foreground). Produces the same result as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Inclusive superimposition`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pict1 `, `|`, ` Pict2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Superimposes Pict2 on Pict1 and returns resulting mask if both pictures are the same size. Produces the same result as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `$equal:=Equal pictures(Pict1;Pict2;Pict3)`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Horizontal move`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture + Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Move Picture horizontally Number pixels`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Vertical move`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture / Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Move Picture vertically Number pixels`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Resizing`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture * Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Resize Picture by Number ratio`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Horizontal scaling`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture *+ Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Resize Picture horizontally by Number ratio`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Vertical scaling`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture *`, `|`, ` Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Resize Picture vertically by Number ratio`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Notes :`), `  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In order to use the | operator, Pict1 and Pict2 must have exactly the same dimension. If both pictures are a different size, the operation Pict1 | Pict2 produces a blank picture.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `COMBINE PICTURES`), ` command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Additional operations can be performed on pictures using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `TRANSFORM PICTURE`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `There is no comparison operators on pictures, however 4D proposes the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Equal picture`), ` command to compare two pictures.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "examples"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Horizontal concatenation`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` circle+rectangle //Place the rectangle to the right of the circle
 rectangle+circle //Place the circle to the right of the rectangle
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(50537)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(16298)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Vertical concatenation`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(5197)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(32438)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Exclusive superimposition`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Pict3:=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(38441)/* ["default"] */ .Z),
    width: "805",
    height: "335"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Inclusive superimposition`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Pict3:=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(49038)/* ["default"] */ .Z),
    width: "806",
    height: "333"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Horizontal move`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `rectangle+50 //Move the rectangle 50 pixels to the right
rectangle-50 //Move the rectangle 50 pixels to the left
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(86039)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Vertical move`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `rectangle/50 //Move the rectangle down by 50 pixels
rectangle/-20 //Move the rectangle up by 20 pixels
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58179)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2404)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Resize`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `rectangle*1.5 //The rectangle becomes 50% bigger
rectangle*0.5 //The rectangle becomes 50% smaller
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(23997)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(18714)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Horizontal scaling`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `circle*+3 //The circle becomes 3 times wider
circle*+0.25 //The circle's width becomes a quarter of what it was
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20676)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(91744)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Vertical scaling`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `circle*|2 //The circle becomes twice as tall
circle*|0.25 //The circle's height becomes a quarter of what it was
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(30753)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(96508)/* ["default"] */ .Z),
    width: "376",
    height: "279"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 20676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 91744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAR2SURBVHic7d3RattAAEXBqPT/f9l1SdK49mq1MjkNDTNQKMYPeTrclYT18gIQ267/LpfLV/8ZwLe1bdvP9a++/keVgLOOF82fxNySG2DRtSE/vvpvAL6/g9AM58zkc4BHs9DMa6I1wCJHJyC3G5qVwWLUACssGiA3Ds36VDFqgEMWDZATGiA3CM3Z05DTEzBn0QA5oQFyQgPk7kPz3AUXl2mACYsGyAkNkBMaICc0QO6v0Eyu6V7e7X3B9WBgz9Kiue2LXwsGznJ0AnLHoXmcMEYNcIpFA+SEBsh9hObUi+KGn7vxBAxZNEBOaICc0AA5oQFys9DMn5fxNA2wyKIBckID5IQGyAkNkHsLzWc91OvhYOCRRQPkdkOzcvfaHW5ghUUD5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiA3G5oVl4F53VxwAqLBsi9heazXgXnlXLAI4sGyAkNkBMaICc0QG4Wmvnda/e2gUUWDZATGiAnNEBOaIDcR2iGD/XuXfEdfu6xYGDIogFyQgPkjkPzeEryBA1wikUD5JZCczthzBngrN/VuL1b9HRH3HIChq5VcXQCckID5IQGyAkNkLsPzXPXdF0JBiYsGiAnNEBOaIDcIDRnL7i4QAPMWTRATmiA3Dg066ch5ybgkEUD5HZDszJVzBlghUUD5GahmQ8WcwZYdLBo9mqiMsA6Rycgd/9Tnrvfe/+JT1sGOGV7zYd2AB2/GQz8C0ID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQAAD/v18GonQlEoqedQAAAABJRU5ErkJggg==");

/***/ }),

/***/ 50537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 16298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 5197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 32438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 86039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDfqlNMcAAAO0SURBVHic7dxBCsJAEEXBtHj/K4/xAirIYzRUQfZ/9TKrPg6A2JzfWmv3DOCyZua+e8Mr577dE+A9v+q3brsHANcnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogNxP3wz+nmOufM6N6o4XDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPk7rsHtGZm9wTAiwboCQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZB7Xrpca+2eAVzWzHjRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAYA+H8Pt4QOMrzYsAUAAAAASUVORK5CYII=");

/***/ }),

/***/ 18714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAOxSURBVHic7d2xCsIwFEDRPun//3JVBBeXKlyC5RwodOjwpkuGJN02gNg8nuM4Vo8BXNbM7O+3taNckoLDy231AMD1CQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkNvPf2pD/SdHN+AMKxogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+S+uCbClQjAb6xogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaIDcc7OvP8MBnZmxogFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaACA/3cHyP4OMocJwNIAAAAASUVORK5CYII=");

/***/ }),

/***/ 23997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAO2SURBVHic7d1BbsMwDADBMPD/v6wmlz6gwEqNMwMY8I08LXjT4wEQm9e31jq9BnBbM3P9/p1dBThiz53x3DAD+HJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZC79ozZ85A43NvMnF7hj1w0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaIHftGTMzewYB/5CLBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiD3fhJ7rXV6DeC2ZsZFA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCAwB8vh+x9w4y8nZPXwAAAABJRU5ErkJggg==");

/***/ }),

/***/ 38441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/superimpoExc.fr-3f43331b6ad72a7af1674c03b0aa4deb.png");

/***/ }),

/***/ 49038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/superimpoInc.fr-d5b1ee79902ed658674b87e6a7df9816.png");

/***/ }),

/***/ 58179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDfqlNMcAAAO3SURBVHic7dxBasRADADBVfD/v6wk5ANLcDPEqQLjm9Cp0WleL4DYfH27e3oN4LFm5uP0DsDzCQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2Qu35+M3N2D3jH7p5egd9w0QA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SuuwZ5zJX3eaP6v3HRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEDuumvQzNw1CngYFw2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiD3/f7m7p5eA3ismXHRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQEA/r5PUroOMlyfWKEAAAAASUVORK5CYII=");

/***/ }),

/***/ 2404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAOvSURBVHic7dwxCsMwEABBX/D/v6wkTeqQeDE2M2BwdVwhFlXaNoDYvL611tlrALc1M/vn789ZasX3fj5vjtlFPc5eALg/oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRAbj9q0MwcNQq4GTcaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRA7v3+5lrr7DWA25oZNxogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNAHB9TxoWDjB8Awa9AAAAAElFTkSuQmCC");

/***/ }),

/***/ 30753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 96508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAARCSURBVHic7dzRbptAFEDBEPX/f9lNlShSW8dxzB7Dwoxk+W1ZHu6RsYCXF4DY8va5XC5bbwM4rGVZfj3/kMWyWgl7lvyiiWryGA2CbS3vRVg5irvKyj2kB57pwdBMV5bbdAdSPwjNweLyFdGB4b4PzUn68j/FgVFuhaZOzJBJnmKTcHLXQzN8ep88rrPvHw7mSmiGTOmuJvN4ZwRz+Ss06wdy59N4+BOEfRp2Z/AUEziqp8BPvb5/rRm/KSrzac1uRQoe87r1BoDjExog9xGa81xQnOciEfZjzJ/BQx7OrM0VRDgS99HcZVdnBHNxZ/BdVAbW8KzTNyQG1vP09pckBkbxPpp/6QsM5w17f4gLpLwzGMiNCc3VdccuuIaswLaq0Nw+ZLGsmsBubRAa4GzeOuOhSiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzQAwPx+A0hOoR2+8OxBAAAAAElFTkSuQmCC");

/***/ })

};
;