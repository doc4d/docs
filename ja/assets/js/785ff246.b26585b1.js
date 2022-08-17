exports.id = 81170;
exports.ids = [81170];
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

/***/ 59823:
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
var buttonGrid_overview_exports = {};
__export(buttonGrid_overview_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(buttonGrid_overview_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "buttonGridOverview",
  title: "Button Grid"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/buttonGridOverview",
  "id": "FormObjects/buttonGridOverview",
  "title": "Button Grid",
  "description": "A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. When one of the graphics is clicked on, it will have a sunken or pressed appearance:",
  "source": "@site/docs/FormObjects/buttonGrid_overview.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/buttonGridOverview",
  "permalink": "/docs/ja/next/FormObjects/buttonGridOverview",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "buttonGridOverview",
    "title": "Button Grid"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Button",
    "permalink": "/docs/ja/next/FormObjects/buttonOverview"
  },
  "next": {
    "title": "Check Box",
    "permalink": "/docs/ja/next/FormObjects/checkboxOverview"
  }
};
const assets = {};
const toc = [{
  value: "Creating button grids",
  id: "creating-button-grids",
  level: 2
}, {
  value: "Using button grids",
  id: "using-button-grids",
  level: 2
}, {
  value: "Goto page",
  id: "goto-page",
  level: 3
}, {
  value: "Supported Properties",
  id: "supported-properties",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. When one of the graphics is clicked on, it will have a sunken or pressed appearance:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(69203)/* ["default"] */ .Z),
    width: "187",
    height: "129"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use a button grid object to determine where the user clicks on the graphic. The object method would use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Clicked`), ` event and take appropriate action depending on the location of the click.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-button-grids"
    }
  }, `Creating button grids`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create the button grid, add a background graphic to the form and place a button grid on top of it. Specify the number of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCrop#rows"
    }
  }, `rows`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCrop#columns"
    }
  }, `columns`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In 4D, a button grid is used as a color palette:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(36792)/* ["default"] */ .Z),
    width: "421",
    height: "340"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-button-grids"
    }
  }, `Using button grids`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The buttons on the grid are numbered from top left to bottom right. In the above example, the grid is 16 columns across by 16 rows down. The button in the top-left position returns 1 when clicked. If the red button at the far right of the second row is selected, the button grid returns 32.
If no element is selected, the value is 0`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "goto-page"
    }
  }, `Goto page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `gotoPage`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html"
    }
  }, `standard action`), ` to a button grid. When this action is selected, 4D will automatically display the page of the form that corresponds to the number of the button that is selected in the button grid. For example, if the user selects the tenth button of the grid, 4D will display the tenth page of the current form (if it exists). `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesBackgroundAndBorder#border-line-style"
    }
  }, `Border Line Style`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#css-class"
    }
  }, `Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCrop#columns"
    }
  }, `Columns`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesHelp#help-tip"
    }
  }, `Help Tip`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCrop#rows"
    }
  }, `Rows`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesAction#standard-action"
    }
  }, `Standard action`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibility`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 69203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 36792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/button_buttonGrid-426d2c4a3904ebcde18441040126a4d1.png");

/***/ })

};
;