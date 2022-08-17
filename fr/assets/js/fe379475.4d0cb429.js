exports.id = 99875;
exports.ids = [99875];
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

/***/ 78615:
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
var properties_Help_exports = {};
__export(properties_Help_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Help_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesHelp",
  title: "Help"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesHelp",
  "id": "version-19/FormObjects/propertiesHelp",
  "title": "Help",
  "description": "Help Tip",
  "source": "@site/versioned_docs/version-19/FormObjects/properties_Help.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesHelp",
  "permalink": "/docs/fr/19/FormObjects/propertiesHelp",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "propertiesHelp",
    "title": "Help"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Headers",
    "permalink": "/docs/fr/19/FormObjects/propertiesHeaders"
  },
  "next": {
    "title": "Hierarchy",
    "permalink": "/docs/fr/19/FormObjects/propertiesHierarchy"
  }
};
const assets = {};
const toc = [{
  value: "Help Tip",
  id: "help-tip",
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
  value: "Other help features",
  id: "other-help-features",
  level: 4
}, {
  value: "See also",
  id: "see-also",
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
      "id": "help-tip"
    }
  }, `Help Tip`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property allows associating help messages with active objects in your forms. They can be displayed at runtime:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(6459)/* ["default"] */ .Z),
    width: "418",
    height: "52"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The display delay and maximum duration of help tips can be controlled using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Tips delay`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Tips duration`), ` selectors of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html"
    }
  }, `SET DATABASE PARAMETER`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `SET DATABASE PARAMETER`)), ` command.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can either:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `designate an existing help tip, previously specified in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html"
    }
  }, `Help tips`), ` editor of 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or enter the help message directly as a string. This allows you to take advantage of XLIFF architecture. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html"
    }
  }, `Appendix B: XLIFF architecture`), `. You can also use 4D references (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html"
    }
  }, `see Using references in static text`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In macOS, displaying help tips is not supported in pop-up type windows.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `tooltip`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `additional information to help a user`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), `  - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/comboBoxOverview#overview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "other-help-features"
    }
  }, `Other help features`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also associate help messages with form objects in two other ways:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to \u201CHelp Tips\u201D in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html"
    }
  }, `Field properties`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html"
    }
  }, `OBJECT SET HELP TIP`)), ` command, for the current process.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When different tips are associated with the same object in several locations, the following priority order is applied:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `structure level (lowest priority)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `form editor level`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html"
    }
  }, `OBJECT SET HELP TIP`)), ` command (highest priority)`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/FormObjects/propertiesEntry#placeholder"
    }
  }, `Placeholder`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 6459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAAA0CAIAAABHIavSAAAFAElEQVR42u2d3Y7UNhiGk9keoTLqAirSSiOEVFSOeys94A56GWivoC3HcC/8SAghpJ5wshVH7UqViijQBUQrdidEBCIrcewviWN77OfRajWTfLFfO5537DgZly/+PioAANJlFVoAAMCyYHMAkDhfhRbgm3t374eWAD748cZP/zz/PbQKiILsbK7m4aMnoSXAshwe3gwtASIiR5ur+fnX22VZVlUVWggswsnr49ASICK4NgcAiSOyuUuXr4fWCQAwke6gteNoL7irDgB2HM21OdXaatfD6QBgpxkxBdF29FrjU7t+zcbGFiWR/cTxUwBYAqnNqTbUepm23yePBADwgHSmVW5M0ywM4wOAhdD05qwDzAkwVwsAobBMQbiCzhoAhCLA7cHanh3dPQBYiOkPe6kzqoWxvyaPBABwTtfmtB7U2di+7QfLIyX5AgDMh2daASBxcvyFksPDmyevj/999Se/YwGQA2Vuo8WL334fWgJ4gp/VhIbsenM0fYDc4NocACQONgcAiYPNAUDiZHdtLgg84wGwHNZ5VGzOE1X1R2gJAAlSllesMdnZHOu0AuRGdjZXsE4rQGbkaHPFp3VafWb3y6076tt+N9swpK2DnQx4XaWzNDN1jj1cHt9GzlE4M5G25ViPFWbkpFCL4kRYpjYXnDibVAJ4qNhQ5079wMs//OawTNohN5RERPNdXf9vv7TbLe1bdW8/YCgddVc/eChNa6T5EO1rbRln6uwrsZZiqAja15OzGDovo4rZIrEkg1qtMPXt0Fkw1LlWraEI8iIbWoVkzqGDvjcX1c/DZbVETmcQUf9phxXWL3bzUfI0rZHmHK1lLL58emfqlFTmKJFaqWOz6ASrZ3NaJc9RKxdmrmdh09IWQVhkrdQ5laNfCyIfWwlFp6m152zCIEJ7iHyjPE1Xh6iRi+o07B1bwMYIxmZh7ndMGzCq3w3TsrYKM8tzMgqWh03ou/Xp2tyQx2mXZFW3dNZmNe8txGu8Nm+b/52U+zp3yKDnNPFQ5Jx7PMVU+zvyGYmFxFiH/571DCGaghhaaLWzHqt8r3yN107wDhnZEoS9YJxz7nEWc9E66QwShQIkR/mpHJW4piBmWlg+Djjta9Zb7oum7yR3D33DmVloL8AHESaJH6vWeeWYCXZDybTHPNtR7a472tC1uaHgdjpCEl8oFzXkF3FcRWoPGUVfvKsBmqFatGonFEHNwjwVYK4xs8Kha5qSS3JCYdZ4rR7zUcIzaz0XY9tAMJub7FP94e3OIbm4q52U0DZ9YS5D6ZjTtE4XOE+8eSEpqXn6QihpwnzI2CxcHWvdO6rCDXoMew21NzZNYSKjij9Ed9DaWWzQD65y5IdAIDjtvV2xPVcQrTAPaHpz/WVVnS+0OipBdaBqmGaFltwacVREW/nRCvNAdkve3Lt7/+GjJ56faS3LMudGBrAcdeeU35uLhUxu+wKIEGzOB1VVhZYAKfPq5V/7Fw7evHlZ/9VDhy+b6xefG17TArfbs/X64np96enTB1c2V9ffbDJZ6A6bA0iB4+Ojzeb6+fMXrJHPnv12cPBdUZyFluwPbA4gBfb3Lx8dPX737uTs7PT09ENVbXsh5Wq1d+7c19eu/fD+/dvQer2CzQEkwXa7qftoq1XZsNqrXxXlXr3h0+j1854m9v//8rK5uB72AgBwDjYHAImDzQFA4mBzAJA42BwAJM5HTx0KqxySVTUAAAAASUVORK5CYII=");

/***/ })

};
;