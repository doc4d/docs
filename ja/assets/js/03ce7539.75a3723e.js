exports.id = 99898;
exports.ids = [99898];
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

/***/ 29049:
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
var picturePopupMenu_overview_exports = {};
__export(picturePopupMenu_overview_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(picturePopupMenu_overview_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "picturePopupMenuOverview",
  title: "Picture Pop-up Menu"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/picturePopupMenuOverview",
  "id": "version-18/FormObjects/picturePopupMenuOverview",
  "title": "Picture Pop-up Menu",
  "description": "Overview",
  "source": "@site/versioned_docs/version-18/FormObjects/picturePopupMenu_overview.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/picturePopupMenuOverview",
  "permalink": "/docs/ja/18/FormObjects/picturePopupMenuOverview",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "picturePopupMenuOverview",
    "title": "Picture Pop-up Menu"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Picture Button",
    "permalink": "/docs/ja/18/FormObjects/pictureButtonOverview"
  },
  "next": {
    "title": "Plug-in Area",
    "permalink": "/docs/ja/18/FormObjects/pluginAreaOverview"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Using picture pop-up menus",
  id: "using-picture-pop-up-menus",
  level: 2
}, {
  value: "Programming",
  id: "programming",
  level: 3
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A picture pop-up menu is a pop-up menu that displays a two-dimensional array of pictures. A picture pop-up menu can be used instead of a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/pictureButtonOverview"
    }
  }, `picture button`), `. The creation of the picture to use with a picture pop-up menu is similar to the creation of a picture for a picture button. The concept is the same as for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/buttonGridOverview"
    }
  }, `button grids`), `, except that the graphic is used as a pop-up menu instead of a form object.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-picture-pop-up-menus"
    }
  }, `Using picture pop-up menus`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create a picture pop-up menu, you need to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesPicture#pathname"
    }
  }, `refer to a picture`), `. The following example allows you to select the interface language by selecting it from a picture pop-up menu. Each language is represented by the corresponding flag:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(28422)/* ["default"] */ .Z),
    width: "217",
    height: "140"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "programming"
    }
  }, `Programming`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can manage picture pop-up menus using methods. As with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/buttonGridOverview"
    }
  }, `button grids`), `, variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. If no element is selected, the value is 0. Elements are numbered, row by row, from left to right starting with the top row.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
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
  }, `standard action`), ` to a picture pop-up menu. When that action is selected, 4D will automatically display the page of the form that corresponds to the position of the picture selected in the picture array. Elements are numbered from left to right and top to bottom, beginning with the top left corner.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if the user selects the 3rd element, 4D will display the third page of the current form (if it exists).
If you want to manage the effect of a click yourself, select `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `No action`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesText#bold"
    }
  }, `Bold`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"
    }
  }, `Border Line Style`), ` -`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#css-class"
    }
  }, `Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCrop#columns"
    }
  }, `Columns`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesHelp#help-tip"
    }
  }, `Help Tip`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesPicture#pathname"
    }
  }, `Pathname`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCrop#rows"
    }
  }, `Rows`), `- `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesAction#standard-action"
    }
  }, `Standard action`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibility`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 28422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;