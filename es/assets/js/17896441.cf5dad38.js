exports.id = 27918;
exports.ids = [27918];
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

/***/ 94601:
/***/ ((module) => {

// Exports
module.exports = {
	"admonition": "admonition_LlT9",
	"admonitionHeading": "admonitionHeading_tbUL",
	"admonitionIcon": "admonitionIcon_kALy",
	"admonitionContent": "admonitionContent_S0QG"
};


/***/ }),

/***/ 51633:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContainer": "codeBlockContainer_Ckt0"
};


/***/ }),

/***/ 9130:
/***/ ((module) => {

// Exports
module.exports = {
	"codeBlockContent": "codeBlockContent_biex",
	"codeBlockTitle": "codeBlockTitle_Ktv7",
	"codeBlock": "codeBlock_bY9V",
	"codeBlockStandalone": "codeBlockStandalone_MEMb",
	"codeBlockLines": "codeBlockLines_e6Vv",
	"codeBlockLinesWithNumbering": "codeBlockLinesWithNumbering_o6Pm",
	"buttonGroup": "buttonGroup__atx"
};


/***/ }),

/***/ 38906:
/***/ ((module) => {

// Exports
module.exports = {
	"copyButtonCopied": "copyButtonCopied_obH4",
	"copyButtonIcons": "copyButtonIcons_eSgA",
	"copyButtonIcon": "copyButtonIcon_y97N",
	"copyButtonSuccessIcon": "copyButtonSuccessIcon_LjdS"
};


/***/ }),

/***/ 85576:
/***/ ((module) => {

// Exports
module.exports = {
	"codeLine": "codeLine_lJS_",
	"codeLineNumber": "codeLineNumber_Tfdd",
	"codeLineContent": "codeLineContent_feaV"
};


/***/ }),

/***/ 65647:
/***/ ((module) => {

// Exports
module.exports = {
	"wordWrapButtonIcon": "wordWrapButtonIcon_Bwma",
	"wordWrapButtonEnabled": "wordWrapButtonEnabled_EoeP"
};


/***/ }),

/***/ 91523:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "details_b_Ee"
};


/***/ }),

/***/ 66889:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumbsContainer": "breadcrumbsContainer_Z_bl",
	"breadcrumbHomeIcon": "breadcrumbHomeIcon_OVgt"
};


/***/ }),

/***/ 44856:
/***/ ((module) => {

// Exports
module.exports = {
	"lastUpdated": "lastUpdated_vwxv"
};


/***/ }),

/***/ 99416:
/***/ ((module) => {

// Exports
module.exports = {
	"docItemContainer": "docItemContainer_Djhp",
	"docItemCol": "docItemCol_VOVn"
};


/***/ }),

/***/ 67192:
/***/ ((module) => {

// Exports
module.exports = {
	"tocMobile": "tocMobile_ITEo"
};


/***/ }),

/***/ 19475:
/***/ ((module) => {

// Exports
module.exports = {
	"anchorWithStickyNavbar": "anchorWithStickyNavbar_LWe7",
	"anchorWithHideOnScrollNavbar": "anchorWithHideOnScrollNavbar_WYt5"
};


/***/ }),

/***/ 91920:
/***/ ((module) => {

// Exports
module.exports = {
	"iconEdit": "iconEdit_Z9Sw"
};


/***/ }),

/***/ 7588:
/***/ ((module) => {

// Exports
module.exports = {
	"img": "img_ev3q"
};


/***/ }),

/***/ 46655:
/***/ ((module) => {

// Exports
module.exports = {
	"containsTaskList": "containsTaskList_mC6p"
};


/***/ }),

/***/ 70578:
/***/ ((module) => {

// Exports
module.exports = {
	"tableOfContents": "tableOfContents_bqdL",
	"docItemContainer": "docItemContainer_F8PC"
};


/***/ }),

/***/ 33710:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsibleButton": "tocCollapsibleButton_TO0P",
	"tocCollapsibleButtonExpanded": "tocCollapsibleButtonExpanded_MG3E"
};


/***/ }),

/***/ 29587:
/***/ ((module) => {

// Exports
module.exports = {
	"tocCollapsible": "tocCollapsible_ETCw",
	"tocCollapsibleContent": "tocCollapsibleContent_vkbj",
	"tocCollapsibleExpanded": "tocCollapsibleExpanded_sAul"
};


/***/ }),

/***/ 12198:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "tag_zVej",
	"tagRegular": "tagRegular_sFm0",
	"tagWithCount": "tagWithCount_h2kH"
};


/***/ }),

/***/ 94211:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": "tags_jXut",
	"tag": "tag_QGVx"
};


/***/ }),

/***/ 90872:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "details_lb9f",
	"isBrowser": "isBrowser_bmU9",
	"collapsibleContent": "collapsibleContent_i85q"
};


/***/ }),

/***/ 57298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Admonition_exports = {};
__export(Admonition_exports, {
  default: () => Admonition
});
module.exports = __toCommonJS(Admonition_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_Translate = __toESM(__webpack_require__(6573));
var import_styles_module = __toESM(__webpack_require__(94601));
function NoteIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
  }));
}
function TipIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 12 16"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
  }));
}
function DangerIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 12 16"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
  }));
}
function InfoIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
  }));
}
function CautionIcon() {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
  }));
}
const AdmonitionConfigs = {
  note: {
    infimaClassName: "secondary",
    iconComponent: NoteIcon,
    label: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.admonition.note",
      description: "The default label used for the Note admonition (:::note)"
    }, "note")
  },
  tip: {
    infimaClassName: "success",
    iconComponent: TipIcon,
    label: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.admonition.tip",
      description: "The default label used for the Tip admonition (:::tip)"
    }, "tip")
  },
  danger: {
    infimaClassName: "danger",
    iconComponent: DangerIcon,
    label: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.admonition.danger",
      description: "The default label used for the Danger admonition (:::danger)"
    }, "danger")
  },
  info: {
    infimaClassName: "info",
    iconComponent: InfoIcon,
    label: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.admonition.info",
      description: "The default label used for the Info admonition (:::info)"
    }, "info")
  },
  caution: {
    infimaClassName: "warning",
    iconComponent: CautionIcon,
    label: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.admonition.caution",
      description: "The default label used for the Caution admonition (:::caution)"
    }, "caution")
  }
};
const aliases = {
  secondary: "note",
  important: "info",
  success: "tip",
  warning: "danger"
};
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". Using Info as fallback.`
  );
  return AdmonitionConfigs.info;
}
function extractMDXAdmonitionTitle(children) {
  const items = import_react.default.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) => {
      var _a;
      return import_react.default.isValidElement(item) && ((_a = item.props) == null ? void 0 : _a.mdxType) === "mdxAdmonitionTitle";
    }
  );
  const rest = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, items.filter((item) => item !== mdxAdmonitionTitle));
  return {
    mdxAdmonitionTitle,
    rest
  };
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest
  };
}
function Admonition(props) {
  const { children, type, title, icon: iconProp } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const { iconComponent: IconComponent } = typeConfig;
  const icon = iconProp ?? /* @__PURE__ */ import_react.default.createElement(IconComponent, null);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.common.admonition,
      import_theme_common.ThemeClassNames.common.admonitionType(props.type),
      "alert",
      `alert--${typeConfig.infimaClassName}`,
      import_styles_module.default.admonition
    )
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.admonitionHeading
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_styles_module.default.admonitionIcon
  }, icon), titleLabel), /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.admonitionContent
  }, children));
}


/***/ }),

/***/ 90467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Container_exports = {};
__export(Container_exports, {
  default: () => CodeBlockContainer
});
module.exports = __toCommonJS(Container_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_styles_module = __toESM(__webpack_require__(51633));
function CodeBlockContainer({ as: As, ...props }) {
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const prismCssVariables = (0, import_internal.getPrismCssVariables)(prismTheme);
  return /* @__PURE__ */ import_react.default.createElement(As, {
    ...props,
    style: prismCssVariables,
    className: (0, import_clsx.default)(
      props.className,
      import_styles_module.default.codeBlockContainer,
      import_theme_common.ThemeClassNames.common.codeBlock
    )
  });
}


/***/ }),

/***/ 28803:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Element_exports = {};
__export(Element_exports, {
  default: () => CodeBlockJSX
});
module.exports = __toCommonJS(Element_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Container = __toESM(__webpack_require__(90467));
var import_styles_module = __toESM(__webpack_require__(9130));
function CodeBlockJSX({ children, className }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Container.default, {
    as: "pre",
    tabIndex: 0,
    className: (0, import_clsx.default)(import_styles_module.default.codeBlockStandalone, "thin-scrollbar", className)
  }, /* @__PURE__ */ import_react.default.createElement("code", {
    className: import_styles_module.default.codeBlockLines
  }, children));
}


/***/ }),

/***/ 14477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var String_exports = {};
__export(String_exports, {
  default: () => CodeBlockString
});
module.exports = __toCommonJS(String_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_prism_react_renderer = __toESM(__webpack_require__(23746));
var import_Line = __toESM(__webpack_require__(66429));
var import_CopyButton = __toESM(__webpack_require__(21755));
var import_WordWrapButton = __toESM(__webpack_require__(54092));
var import_Container = __toESM(__webpack_require__(90467));
var import_styles_module = __toESM(__webpack_require__(9130));
function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp
}) {
  const {
    prism: { defaultLanguage, magicComments }
  } = (0, import_theme_common.useThemeConfig)();
  const language = languageProp ?? (0, import_internal.parseLanguage)(blockClassName) ?? defaultLanguage;
  const prismTheme = (0, import_theme_common.usePrismTheme)();
  const wordWrap = (0, import_internal.useCodeWordWrap)();
  const title = (0, import_internal.parseCodeBlockTitle)(metastring) || titleProp;
  const { lineClassNames, code } = (0, import_internal.parseLines)(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers = showLineNumbersProp ?? (0, import_internal.containsLineNumbers)(metastring);
  return /* @__PURE__ */ import_react.default.createElement(import_Container.default, {
    as: "div",
    className: (0, import_clsx.default)(
      blockClassName,
      language && !blockClassName.includes(`language-${language}`) && `language-${language}`
    )
  }, title && /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.codeBlockTitle
  }, title), /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.codeBlockContent
  }, /* @__PURE__ */ import_react.default.createElement(import_prism_react_renderer.default, {
    ...import_prism_react_renderer.defaultProps,
    theme: prismTheme,
    code,
    language: language ?? "text"
  }, ({ className, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ import_react.default.createElement("pre", {
    tabIndex: 0,
    ref: wordWrap.codeBlockRef,
    className: (0, import_clsx.default)(className, import_styles_module.default.codeBlock, "thin-scrollbar")
  }, /* @__PURE__ */ import_react.default.createElement("code", {
    className: (0, import_clsx.default)(
      import_styles_module.default.codeBlockLines,
      showLineNumbers && import_styles_module.default.codeBlockLinesWithNumbering
    )
  }, tokens.map((line, i) => /* @__PURE__ */ import_react.default.createElement(import_Line.default, {
    key: i,
    line,
    getLineProps,
    getTokenProps,
    classNames: lineClassNames[i],
    showLineNumbers
  }))))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.buttonGroup
  }, (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /* @__PURE__ */ import_react.default.createElement(import_WordWrapButton.default, {
    className: import_styles_module.default.codeButton,
    onClick: () => wordWrap.toggle(),
    isEnabled: wordWrap.isEnabled
  }), /* @__PURE__ */ import_react.default.createElement(import_CopyButton.default, {
    className: import_styles_module.default.codeButton,
    code
  }))));
}


/***/ }),

/***/ 21755:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CopyButton_exports = {};
__export(CopyButton_exports, {
  default: () => CopyButton
});
module.exports = __toCommonJS(CopyButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_copy_text_to_clipboard = __toESM(__webpack_require__(38227));
var import_Translate = __webpack_require__(6573);
var import_styles_module = __toESM(__webpack_require__(38906));
function CopyButton({ code, className }) {
  const [isCopied, setIsCopied] = (0, import_react.useState)(false);
  const copyTimeout = (0, import_react.useRef)(void 0);
  const handleCopyCode = (0, import_react.useCallback)(() => {
    (0, import_copy_text_to_clipboard.default)(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1e3);
  }, [code]);
  (0, import_react.useEffect)(() => () => window.clearTimeout(copyTimeout.current), []);
  return /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    "aria-label": isCopied ? (0, import_Translate.translate)({
      id: "theme.CodeBlock.copied",
      message: "Copied",
      description: "The copied button label on code blocks"
    }) : (0, import_Translate.translate)({
      id: "theme.CodeBlock.copyButtonAriaLabel",
      message: "Copy code to clipboard",
      description: "The ARIA label for copy code blocks button"
    }),
    title: (0, import_Translate.translate)({
      id: "theme.CodeBlock.copy",
      message: "Copy",
      description: "The copy button label on code blocks"
    }),
    className: (0, import_clsx.default)(
      "clean-btn",
      className,
      import_styles_module.default.copyButton,
      isCopied && import_styles_module.default.copyButtonCopied
    ),
    onClick: handleCopyCode
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_styles_module.default.copyButtonIcons,
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    className: import_styles_module.default.copyButtonIcon,
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
  })), /* @__PURE__ */ import_react.default.createElement("svg", {
    className: import_styles_module.default.copyButtonSuccessIcon,
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }))));
}


/***/ }),

/***/ 66429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Line_exports = {};
__export(Line_exports, {
  default: () => CodeBlockLine
});
module.exports = __toCommonJS(Line_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_styles_module = __toESM(__webpack_require__(85576));
function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps
}) {
  if (line.length === 1 && line[0].content === "\n") {
    line[0].content = "";
  }
  const lineProps = getLineProps({
    line,
    className: (0, import_clsx.default)(classNames, showLineNumbers && import_styles_module.default.codeLine)
  });
  const lineTokens = line.map((token, key) => /* @__PURE__ */ import_react.default.createElement("span", {
    key,
    ...getTokenProps({ token, key })
  }));
  return /* @__PURE__ */ import_react.default.createElement("span", {
    ...lineProps
  }, showLineNumbers ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_styles_module.default.codeLineNumber
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_styles_module.default.codeLineContent
  }, lineTokens)) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, lineTokens, /* @__PURE__ */ import_react.default.createElement("br", null)));
}


/***/ }),

/***/ 54092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var WordWrapButton_exports = {};
__export(WordWrapButton_exports, {
  default: () => WordWrapButton
});
module.exports = __toCommonJS(WordWrapButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __webpack_require__(6573);
var import_styles_module = __toESM(__webpack_require__(65647));
function WordWrapButton({ className, onClick, isEnabled }) {
  const title = (0, import_Translate.translate)({
    id: "theme.CodeBlock.wordWrapToggle",
    message: "Toggle word wrap",
    description: "The title attribute for toggle word wrapping button of code block lines"
  });
  return /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    onClick,
    className: (0, import_clsx.default)(
      "clean-btn",
      className,
      isEnabled && import_styles_module.default.wordWrapButtonEnabled
    ),
    "aria-label": title,
    title
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    className: import_styles_module.default.wordWrapButtonIcon,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fill: "currentColor",
    d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
  })));
}


/***/ }),

/***/ 63981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CodeBlock_exports = {};
__export(CodeBlock_exports, {
  default: () => CodeBlock
});
module.exports = __toCommonJS(CodeBlock_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_useIsBrowser = __toESM(__webpack_require__(54939));
var import_Element = __toESM(__webpack_require__(28803));
var import_String = __toESM(__webpack_require__(14477));
function maybeStringifyChildren(children) {
  if (import_react.default.Children.toArray(children).some((el) => (0, import_react.isValidElement)(el))) {
    return children;
  }
  return Array.isArray(children) ? children.join("") : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
  const isBrowser = (0, import_useIsBrowser.default)();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp = typeof children === "string" ? import_String.default : import_Element.default;
  return /* @__PURE__ */ import_react.default.createElement(CodeBlockComp, {
    key: String(isBrowser),
    ...props
  }, children);
}


/***/ }),

/***/ 61245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Details_exports = {};
__export(Details_exports, {
  default: () => Details
});
module.exports = __toCommonJS(Details_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Details = __webpack_require__(6818);
var import_styles_module = __toESM(__webpack_require__(91523));
const InfimaClasses = "alert alert--info";
function Details({ ...props }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Details.Details, {
    ...props,
    className: (0, import_clsx.default)(InfimaClasses, import_styles_module.default.details, props.className)
  });
}


/***/ }),

/***/ 45826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocBreadcrumbs_exports = {};
__export(DocBreadcrumbs_exports, {
  default: () => DocBreadcrumbs
});
module.exports = __toCommonJS(DocBreadcrumbs_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Link = __toESM(__webpack_require__(70393));
var import_useBaseUrl = __toESM(__webpack_require__(25026));
var import_Translate = __webpack_require__(6573);
var import_Home = __toESM(__webpack_require__(35823));
var import_styles_module = __toESM(__webpack_require__(66889));
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      className,
      itemProp: "name"
    }, children);
  }
  return href ? /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    className,
    href,
    itemProp: "item"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    itemProp: "name"
  }, children)) : /* @__PURE__ */ import_react.default.createElement("span", {
    className
  }, children);
}
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return /* @__PURE__ */ import_react.default.createElement("li", {
    ...addMicrodata && {
      itemScope: true,
      itemProp: "itemListElement",
      itemType: "https://schema.org/ListItem"
    },
    className: (0, import_clsx.default)("breadcrumbs__item", {
      "breadcrumbs__item--active": active
    })
  }, children, /* @__PURE__ */ import_react.default.createElement("meta", {
    itemProp: "position",
    content: String(index + 1)
  }));
}
function HomeBreadcrumbItem() {
  const homeHref = (0, import_useBaseUrl.default)("/");
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className: "breadcrumbs__item"
  }, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    "aria-label": (0, import_Translate.translate)({
      id: "theme.docs.breadcrumbs.home",
      message: "Home page",
      description: "The ARIA label for the home page in the breadcrumbs"
    }),
    className: (0, import_clsx.default)("breadcrumbs__link", import_styles_module.default.breadcrumbsItemLink),
    href: homeHref
  }, /* @__PURE__ */ import_react.default.createElement(import_Home.default, {
    className: import_styles_module.default.breadcrumbHomeIcon
  })));
}
function DocBreadcrumbs() {
  const breadcrumbs = (0, import_internal.useSidebarBreadcrumbs)();
  const homePageRoute = (0, import_internal.useHomePageRoute)();
  if (!breadcrumbs) {
    return null;
  }
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docBreadcrumbs,
      import_styles_module.default.breadcrumbsContainer
    ),
    "aria-label": (0, import_Translate.translate)({
      id: "theme.docs.breadcrumbs.navAriaLabel",
      message: "Breadcrumbs",
      description: "The ARIA label for the breadcrumbs"
    })
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "breadcrumbs",
    itemScope: true,
    itemType: "https://schema.org/BreadcrumbList"
  }, homePageRoute && /* @__PURE__ */ import_react.default.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    return /* @__PURE__ */ import_react.default.createElement(BreadcrumbsItem, {
      key: idx,
      active: isLast,
      index: idx,
      addMicrodata: !!item.href
    }, /* @__PURE__ */ import_react.default.createElement(BreadcrumbsItemLink, {
      href: item.href,
      isLast
    }, item.label));
  })));
}


/***/ }),

/***/ 15871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Content_exports = {};
__export(Content_exports, {
  default: () => DocItemContent
});
module.exports = __toCommonJS(Content_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Heading = __toESM(__webpack_require__(24872));
var import_MDXContent = __toESM(__webpack_require__(58621));
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = (0, import_internal.useDoc)();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docMarkdown, "markdown")
  }, syntheticTitle && /* @__PURE__ */ import_react.default.createElement("header", null, /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h1"
  }, syntheticTitle)), /* @__PURE__ */ import_react.default.createElement(import_MDXContent.default, null, children));
}


/***/ }),

/***/ 27023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Footer_exports = {};
__export(Footer_exports, {
  default: () => DocItemFooter
});
module.exports = __toCommonJS(Footer_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_LastUpdated = __toESM(__webpack_require__(60687));
var import_EditThisPage = __toESM(__webpack_require__(55459));
var import_TagsListInline = __toESM(__webpack_require__(92592));
var import_styles_module = __toESM(__webpack_require__(44856));
function TagsRow(props) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      import_theme_common.ThemeClassNames.docs.docFooterTagsRow,
      "row margin-bottom--sm"
    )
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ import_react.default.createElement(import_TagsListInline.default, {
    ...props
  })));
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt
}) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docFooterEditMetaRow, "row")
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col"
  }, editUrl && /* @__PURE__ */ import_react.default.createElement(import_EditThisPage.default, {
    editUrl
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)("col", import_styles_module.default.lastUpdated)
  }, (lastUpdatedAt || lastUpdatedBy) && /* @__PURE__ */ import_react.default.createElement(import_LastUpdated.default, {
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy
  })));
}
function DocItemFooter() {
  const { metadata } = (0, import_internal.useDoc)();
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return /* @__PURE__ */ import_react.default.createElement("footer", {
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")
  }, canDisplayTagsRow && /* @__PURE__ */ import_react.default.createElement(TagsRow, {
    tags
  }), canDisplayEditMetaRow && /* @__PURE__ */ import_react.default.createElement(EditMetaRow, {
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    formattedLastUpdatedAt
  }));
}


/***/ }),

/***/ 80573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Layout_exports = {};
__export(Layout_exports, {
  default: () => DocItemLayout
});
module.exports = __toCommonJS(Layout_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Paginator = __toESM(__webpack_require__(29312));
var import_DocVersionBanner = __toESM(__webpack_require__(71168));
var import_DocVersionBadge = __toESM(__webpack_require__(3560));
var import_Footer = __toESM(__webpack_require__(27023));
var import_Mobile = __toESM(__webpack_require__(16650));
var import_Desktop = __toESM(__webpack_require__(84380));
var import_Content = __toESM(__webpack_require__(15871));
var import_DocBreadcrumbs = __toESM(__webpack_require__(45826));
var import_styles_module = __toESM(__webpack_require__(99416));
function useDocTOC() {
  const { frontMatter, toc } = (0, import_internal.useDoc)();
  const windowSize = (0, import_theme_common.useWindowSize)();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? /* @__PURE__ */ import_react.default.createElement(import_Mobile.default, null) : void 0;
  const desktop = canRender && (windowSize === "desktop" || windowSize === "ssr") ? /* @__PURE__ */ import_react.default.createElement(import_Desktop.default, null) : void 0;
  return {
    hidden,
    mobile,
    desktop
  };
}
function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)("col", !docTOC.hidden && import_styles_module.default.docItemCol)
  }, /* @__PURE__ */ import_react.default.createElement(import_DocVersionBanner.default, null), /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.docItemContainer
  }, /* @__PURE__ */ import_react.default.createElement("article", null, /* @__PURE__ */ import_react.default.createElement(import_DocBreadcrumbs.default, null), /* @__PURE__ */ import_react.default.createElement(import_DocVersionBadge.default, null), docTOC.mobile, /* @__PURE__ */ import_react.default.createElement(import_Content.default, null, children), /* @__PURE__ */ import_react.default.createElement(import_Footer.default, null)), /* @__PURE__ */ import_react.default.createElement(import_Paginator.default, null))), docTOC.desktop && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col col--3"
  }, docTOC.desktop));
}


/***/ }),

/***/ 60028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Metadata_exports = {};
__export(Metadata_exports, {
  default: () => DocItemMetadata
});
module.exports = __toCommonJS(Metadata_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
function DocItemMetadata() {
  const { metadata, frontMatter, assets } = (0, import_internal.useDoc)();
  return /* @__PURE__ */ import_react.default.createElement(import_theme_common.PageMetadata, {
    title: metadata.title,
    description: metadata.description,
    keywords: frontMatter.keywords,
    image: assets.image ?? frontMatter.image
  });
}


/***/ }),

/***/ 29312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Paginator_exports = {};
__export(Paginator_exports, {
  default: () => DocItemPaginator
});
module.exports = __toCommonJS(Paginator_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_internal = __webpack_require__(97985);
var import_DocPaginator = __toESM(__webpack_require__(12695));
function DocItemPaginator() {
  const { metadata } = (0, import_internal.useDoc)();
  return /* @__PURE__ */ import_react.default.createElement(import_DocPaginator.default, {
    previous: metadata.previous,
    next: metadata.next
  });
}


/***/ }),

/***/ 84380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Desktop_exports = {};
__export(Desktop_exports, {
  default: () => DocItemTOCDesktop
});
module.exports = __toCommonJS(Desktop_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_TOC = __toESM(__webpack_require__(4869));
function DocItemTOCDesktop() {
  const { toc, frontMatter } = (0, import_internal.useDoc)();
  return /* @__PURE__ */ import_react.default.createElement(import_TOC.default, {
    toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: import_theme_common.ThemeClassNames.docs.docTocDesktop
  });
}


/***/ }),

/***/ 16650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Mobile_exports = {};
__export(Mobile_exports, {
  default: () => DocItemTOCMobile
});
module.exports = __toCommonJS(Mobile_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_TOCCollapsible = __toESM(__webpack_require__(99509));
var import_styles_module = __toESM(__webpack_require__(67192));
function DocItemTOCMobile() {
  const { toc, frontMatter } = (0, import_internal.useDoc)();
  return /* @__PURE__ */ import_react.default.createElement(import_TOCCollapsible.default, {
    toc,
    minHeadingLevel: frontMatter.toc_min_heading_level,
    maxHeadingLevel: frontMatter.toc_max_heading_level,
    className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docTocMobile, import_styles_module.default.tocMobile)
  });
}


/***/ }),

/***/ 94991:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocItem_exports = {};
__export(DocItem_exports, {
  default: () => DocItem
});
module.exports = __toCommonJS(DocItem_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Metadata = __toESM(__webpack_require__(60028));
var import_Layout = __toESM(__webpack_require__(80573));
function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  return /* @__PURE__ */ import_react.default.createElement(import_internal.DocProvider, {
    content: props.content
  }, /* @__PURE__ */ import_react.default.createElement(import_theme_common.HtmlClassNameProvider, {
    className: docHtmlClassName
  }, /* @__PURE__ */ import_react.default.createElement(import_Metadata.default, null), /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, /* @__PURE__ */ import_react.default.createElement(MDXComponent, null))));
}


/***/ }),

/***/ 12695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocPaginator_exports = {};
__export(DocPaginator_exports, {
  default: () => DocPaginator
});
module.exports = __toCommonJS(DocPaginator_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __toESM(__webpack_require__(6573));
var import_PaginatorNavLink = __toESM(__webpack_require__(31961));
function DocPaginator(props) {
  const { previous, next } = props;
  return /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0, import_Translate.translate)({
      id: "theme.docs.paginator.navAriaLabel",
      message: "Docs pages navigation",
      description: "The ARIA label for the docs pagination"
    })
  }, previous && /* @__PURE__ */ import_react.default.createElement(import_PaginatorNavLink.default, {
    ...previous,
    subLabel: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.docs.paginator.previous",
      description: "The label used to navigate to the previous doc"
    }, "Previous")
  }), next && /* @__PURE__ */ import_react.default.createElement(import_PaginatorNavLink.default, {
    ...next,
    subLabel: /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.docs.paginator.next",
      description: "The label used to navigate to the next doc"
    }, "Next"),
    isNext: true
  }));
}


/***/ }),

/***/ 3560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocVersionBadge_exports = {};
__export(DocVersionBadge_exports, {
  default: () => DocVersionBadge
});
module.exports = __toCommonJS(DocVersionBadge_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __toESM(__webpack_require__(6573));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
function DocVersionBadge({ className }) {
  const versionMetadata = (0, import_internal.useDocsVersion)();
  if (versionMetadata.badge) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      className: (0, import_clsx.default)(
        className,
        import_theme_common.ThemeClassNames.docs.docVersionBadge,
        "badge badge--secondary"
      )
    }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
      id: "theme.docs.versionBadge.label",
      values: { versionLabel: versionMetadata.label }
    }, "Version: {versionLabel}"));
  }
  return null;
}


/***/ }),

/***/ 71168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocVersionBanner_exports = {};
__export(DocVersionBanner_exports, {
  default: () => DocVersionBanner
});
module.exports = __toCommonJS(DocVersionBanner_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_useDocusaurusContext = __toESM(__webpack_require__(11368));
var import_Link = __toESM(__webpack_require__(70393));
var import_Translate = __toESM(__webpack_require__(6573));
var import_client = __webpack_require__(88773);
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ import_react.default.createElement("b", null, versionMetadata.label)
    }
  }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ import_react.default.createElement("b", null, versionMetadata.label)
    }
  }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /* @__PURE__ */ import_react.default.createElement(BannerLabelComponent, {
    ...props
  });
}
function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label used to tell the user to check the latest version",
    values: {
      versionLabel,
      latestVersionLink: /* @__PURE__ */ import_react.default.createElement("b", null, /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
        to,
        onClick
      }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
  const {
    siteConfig: { title: siteTitle }
  } = (0, import_useDocusaurusContext.default)();
  const { pluginId } = (0, import_client.useActivePlugin)({ failfast: true });
  const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);
  const { savePreferredVersionName } = (0, import_internal.useDocsPreferredVersion)(pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } = (0, import_client.useDocVersionSuggestions)(pluginId);
  const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      className,
      import_theme_common.ThemeClassNames.docs.docVersionBanner,
      "alert alert--warning margin-bottom--md"
    ),
    role: "alert"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(BannerLabel, {
    siteTitle,
    versionMetadata
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "margin-top--md"
  }, /* @__PURE__ */ import_react.default.createElement(LatestVersionSuggestionLabel, {
    versionLabel: latestVersionSuggestion.label,
    to: latestVersionSuggestedDoc.path,
    onClick: () => savePreferredVersionName(latestVersionSuggestion.name)
  })));
}
function DocVersionBanner({ className }) {
  const versionMetadata = (0, import_internal.useDocsVersion)();
  if (versionMetadata.banner) {
    return /* @__PURE__ */ import_react.default.createElement(DocVersionBannerEnabled, {
      className,
      versionMetadata
    });
  }
  return null;
}


/***/ }),

/***/ 55459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var EditThisPage_exports = {};
__export(EditThisPage_exports, {
  default: () => EditThisPage
});
module.exports = __toCommonJS(EditThisPage_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __toESM(__webpack_require__(6573));
var import_theme_common = __webpack_require__(17582);
var import_Edit = __toESM(__webpack_require__(11028));
function EditThisPage({ editUrl }) {
  return /* @__PURE__ */ import_react.default.createElement("a", {
    href: editUrl,
    target: "_blank",
    rel: "noreferrer noopener",
    className: import_theme_common.ThemeClassNames.common.editThisPage
  }, /* @__PURE__ */ import_react.default.createElement(import_Edit.default, null), /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.common.editThisPage",
    description: "The link label to edit the current page"
  }, "Edit this page"));
}


/***/ }),

/***/ 24872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Heading_exports = {};
__export(Heading_exports, {
  default: () => Heading
});
module.exports = __toCommonJS(Heading_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __webpack_require__(6573);
var import_theme_common = __webpack_require__(17582);
var import_styles_module = __toESM(__webpack_require__(19475));
function Heading({ as: As, id, ...props }) {
  const {
    navbar: { hideOnScroll }
  } = (0, import_theme_common.useThemeConfig)();
  if (As === "h1" || !id) {
    return /* @__PURE__ */ import_react.default.createElement(As, {
      ...props,
      id: void 0
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(As, {
    ...props,
    className: (0, import_clsx.default)(
      "anchor",
      hideOnScroll ? import_styles_module.default.anchorWithHideOnScrollNavbar : import_styles_module.default.anchorWithStickyNavbar
    ),
    id
  }, props.children, /* @__PURE__ */ import_react.default.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0, import_Translate.translate)({
      id: "theme.common.headingLinkTitle",
      message: "Direct link to heading",
      description: "Title for link to heading"
    })
  }, "\u200B"));
}


/***/ }),

/***/ 11028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Edit_exports = {};
__export(Edit_exports, {
  default: () => IconEdit
});
module.exports = __toCommonJS(Edit_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_styles_module = __toESM(__webpack_require__(91920));
function IconEdit({ className, ...restProps }) {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    fill: "currentColor",
    height: "20",
    width: "20",
    viewBox: "0 0 40 40",
    className: (0, import_clsx.default)(import_styles_module.default.iconEdit, className),
    "aria-hidden": "true",
    ...restProps
  }, /* @__PURE__ */ import_react.default.createElement("g", null, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
  })));
}


/***/ }),

/***/ 35823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Home_exports = {};
__export(Home_exports, {
  default: () => IconHome
});
module.exports = __toCommonJS(Home_exports);
var import_react = __toESM(__webpack_require__(67294));
function IconHome(props) {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    ...props
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
    fill: "currentColor"
  }));
}


/***/ }),

/***/ 60687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LastUpdated_exports = {};
__export(LastUpdated_exports, {
  default: () => LastUpdated
});
module.exports = __toCommonJS(LastUpdated_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Translate = __toESM(__webpack_require__(6573));
var import_theme_common = __webpack_require__(17582);
function LastUpdatedAtDate({ lastUpdatedAt, formattedLastUpdatedAt }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.lastUpdated.atDate",
    description: "The words used to describe on which date a page has been last updated",
    values: {
      date: /* @__PURE__ */ import_react.default.createElement("b", null, /* @__PURE__ */ import_react.default.createElement("time", {
        dateTime: new Date(lastUpdatedAt * 1e3).toISOString()
      }, formattedLastUpdatedAt))
    }
  }, " on {date}");
}
function LastUpdatedByUser({ lastUpdatedBy }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.lastUpdated.byUser",
    description: "The words used to describe by who the page has been last updated",
    values: {
      user: /* @__PURE__ */ import_react.default.createElement("b", null, lastUpdatedBy)
    }
  }, " by {user}");
}
function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy
}) {
  return /* @__PURE__ */ import_react.default.createElement("span", {
    className: import_theme_common.ThemeClassNames.common.lastUpdated
  }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.lastUpdated.lastUpdatedAtBy",
    description: "The sentence used to display when a page has been last updated, and by who",
    values: {
      atDate: lastUpdatedAt && formattedLastUpdatedAt ? /* @__PURE__ */ import_react.default.createElement(LastUpdatedAtDate, {
        lastUpdatedAt,
        formattedLastUpdatedAt
      }) : "",
      byUser: lastUpdatedBy ? /* @__PURE__ */ import_react.default.createElement(LastUpdatedByUser, {
        lastUpdatedBy
      }) : ""
    }
  }, "Last updated{atDate}{byUser}"),  false && /* @__PURE__ */ 0);
}


/***/ }),

/***/ 32537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var A_exports = {};
__export(A_exports, {
  default: () => MDXA
});
module.exports = __toCommonJS(A_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Link = __toESM(__webpack_require__(70393));
function MDXA(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    ...props
  });
}


/***/ }),

/***/ 1730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Code_exports = {};
__export(Code_exports, {
  default: () => MDXCode
});
module.exports = __toCommonJS(Code_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_CodeBlock = __toESM(__webpack_require__(63981));
function MDXCode(props) {
  const inlineElements = [
    "a",
    "b",
    "big",
    "i",
    "span",
    "em",
    "strong",
    "sup",
    "sub",
    "small"
  ];
  const shouldBeInline = import_react.default.Children.toArray(props.children).every(
    (el) => {
      var _a;
      return typeof el === "string" && !el.includes("\n") || (0, import_react.isValidElement)(el) && inlineElements.includes((_a = el.props) == null ? void 0 : _a.mdxType);
    }
  );
  return shouldBeInline ? /* @__PURE__ */ import_react.default.createElement("code", {
    ...props
  }) : /* @__PURE__ */ import_react.default.createElement(import_CodeBlock.default, {
    ...props
  });
}


/***/ }),

/***/ 84224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Details_exports = {};
__export(Details_exports, {
  default: () => MDXDetails
});
module.exports = __toCommonJS(Details_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Details = __toESM(__webpack_require__(61245));
function MDXDetails(props) {
  const items = import_react.default.Children.toArray(props.children);
  const summary = items.find(
    (item) => {
      var _a;
      return import_react.default.isValidElement(item) && ((_a = item.props) == null ? void 0 : _a.mdxType) === "summary";
    }
  );
  const children = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, items.filter((item) => item !== summary));
  return /* @__PURE__ */ import_react.default.createElement(import_Details.default, {
    ...props,
    summary
  }, children);
}


/***/ }),

/***/ 877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Head_exports = {};
__export(Head_exports, {
  default: () => MDXHead
});
module.exports = __toCommonJS(Head_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Head = __toESM(__webpack_require__(68333));
function unwrapMDXElement(element) {
  var _a;
  if (((_a = element.props) == null ? void 0 : _a.mdxType) && element.props.originalType) {
    const { mdxType, originalType, ...newProps } = element.props;
    return import_react.default.createElement(element.props.originalType, newProps);
  }
  return element;
}
function MDXHead(props) {
  const unwrappedChildren = import_react.default.Children.map(
    props.children,
    (child) => import_react.default.isValidElement(child) ? unwrapMDXElement(child) : child
  );
  return /* @__PURE__ */ import_react.default.createElement(import_Head.default, {
    ...props
  }, unwrappedChildren);
}


/***/ }),

/***/ 10026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Heading_exports = {};
__export(Heading_exports, {
  default: () => MDXHeading
});
module.exports = __toCommonJS(Heading_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Heading = __toESM(__webpack_require__(24872));
function MDXHeading(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    ...props
  });
}


/***/ }),

/***/ 88774:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Img_exports = {};
__export(Img_exports, {
  default: () => MDXImg
});
module.exports = __toCommonJS(Img_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_styles_module = __toESM(__webpack_require__(7588));
function transformImgClassName(className) {
  return (0, import_clsx.default)(className, import_styles_module.default.img);
}
function MDXImg(props) {
  return /* @__PURE__ */ import_react.default.createElement("img", {
    loading: "lazy",
    ...props,
    className: transformImgClassName(props.className)
  });
}


/***/ }),

/***/ 18261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Pre_exports = {};
__export(Pre_exports, {
  default: () => MDXPre
});
module.exports = __toCommonJS(Pre_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_CodeBlock = __toESM(__webpack_require__(63981));
function MDXPre(props) {
  var _a;
  return /* @__PURE__ */ import_react.default.createElement(import_CodeBlock.default, {
    ...(0, import_react.isValidElement)(props.children) && ((_a = props.children.props) == null ? void 0 : _a.originalType) === "code" ? props.children.props : { ...props }
  });
}


/***/ }),

/***/ 4417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Ul_exports = {};
__export(Ul_exports, {
  default: () => MDXUl
});
module.exports = __toCommonJS(Ul_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_styles_module = __toESM(__webpack_require__(46655));
function transformUlClassName(className) {
  return (0, import_clsx.default)(
    className,
    (className == null ? void 0 : className.includes("contains-task-list")) && import_styles_module.default.containsTaskList
  );
}
function MDXUl(props) {
  return /* @__PURE__ */ import_react.default.createElement("ul", {
    ...props,
    className: transformUlClassName(props.className)
  });
}


/***/ }),

/***/ 32342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MDXComponents_exports = {};
__export(MDXComponents_exports, {
  default: () => MDXComponents_default
});
module.exports = __toCommonJS(MDXComponents_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_Head = __toESM(__webpack_require__(877));
var import_Code = __toESM(__webpack_require__(1730));
var import_A = __toESM(__webpack_require__(32537));
var import_Pre = __toESM(__webpack_require__(18261));
var import_Details = __toESM(__webpack_require__(84224));
var import_Heading = __toESM(__webpack_require__(10026));
var import_Ul = __toESM(__webpack_require__(4417));
var import_Img = __toESM(__webpack_require__(88774));
var import_Admonition = __toESM(__webpack_require__(57298));
const MDXComponents = {
  head: import_Head.default,
  code: import_Code.default,
  a: import_A.default,
  pre: import_Pre.default,
  details: import_Details.default,
  ul: import_Ul.default,
  img: import_Img.default,
  h1: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h1",
    ...props
  }),
  h2: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h2",
    ...props
  }),
  h3: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h3",
    ...props
  }),
  h4: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h4",
    ...props
  }),
  h5: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h5",
    ...props
  }),
  h6: (props) => /* @__PURE__ */ import_react.default.createElement(import_Heading.default, {
    as: "h6",
    ...props
  }),
  admonition: import_Admonition.default
};
var MDXComponents_default = MDXComponents;


/***/ }),

/***/ 58621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MDXContent_exports = {};
__export(MDXContent_exports, {
  default: () => MDXContent
});
module.exports = __toCommonJS(MDXContent_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_react2 = __webpack_require__(3905);
var import_MDXComponents = __toESM(__webpack_require__(32342));
function MDXContent({ children }) {
  return /* @__PURE__ */ import_react.default.createElement(import_react2.MDXProvider, {
    components: import_MDXComponents.default
  }, children);
}


/***/ }),

/***/ 31961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PaginatorNavLink_exports = {};
__export(PaginatorNavLink_exports, {
  default: () => PaginatorNavLink
});
module.exports = __toCommonJS(PaginatorNavLink_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Link = __toESM(__webpack_require__(70393));
function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    className: (0, import_clsx.default)(
      "pagination-nav__link",
      isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"
    ),
    to: permalink
  }, subLabel && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "pagination-nav__sublabel"
  }, subLabel), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "pagination-nav__label"
  }, title));
}


/***/ }),

/***/ 4869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TOC_exports = {};
__export(TOC_exports, {
  default: () => TOC
});
module.exports = __toCommonJS(TOC_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_TOCItems = __toESM(__webpack_require__(39006));
var import_styles_module = __toESM(__webpack_require__(70578));
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
function TOC({ className, ...props }) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(import_styles_module.default.tableOfContents, "thin-scrollbar", className)
  }, /* @__PURE__ */ import_react.default.createElement(import_TOCItems.default, {
    ...props,
    linkClassName: LINK_CLASS_NAME,
    linkActiveClassName: LINK_ACTIVE_CLASS_NAME
  }));
}


/***/ }),

/***/ 31714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CollapseButton_exports = {};
__export(CollapseButton_exports, {
  default: () => TOCCollapsibleCollapseButton
});
module.exports = __toCommonJS(CollapseButton_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __toESM(__webpack_require__(6573));
var import_styles_module = __toESM(__webpack_require__(33710));
function TOCCollapsibleCollapseButton({ collapsed, ...props }) {
  return /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    ...props,
    className: (0, import_clsx.default)(
      "clean-btn",
      import_styles_module.default.tocCollapsibleButton,
      !collapsed && import_styles_module.default.tocCollapsibleButtonExpanded,
      props.className
    )
  }, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.TOCCollapsible.toggleButtonLabel",
    description: "The label used by the button on the collapsible TOC component"
  }, "On this page"));
}


/***/ }),

/***/ 99509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TOCCollapsible_exports = {};
__export(TOCCollapsible_exports, {
  default: () => TOCCollapsible
});
module.exports = __toCommonJS(TOCCollapsible_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_theme_common = __webpack_require__(17582);
var import_TOCItems = __toESM(__webpack_require__(39006));
var import_CollapseButton = __toESM(__webpack_require__(31714));
var import_styles_module = __toESM(__webpack_require__(29587));
function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel
}) {
  const { collapsed, toggleCollapsed } = (0, import_theme_common.useCollapsible)({
    initialState: true
  });
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: (0, import_clsx.default)(
      import_styles_module.default.tocCollapsible,
      !collapsed && import_styles_module.default.tocCollapsibleExpanded,
      className
    )
  }, /* @__PURE__ */ import_react.default.createElement(import_CollapseButton.default, {
    collapsed,
    onClick: toggleCollapsed
  }), /* @__PURE__ */ import_react.default.createElement(import_theme_common.Collapsible, {
    lazy: true,
    className: import_styles_module.default.tocCollapsibleContent,
    collapsed
  }, /* @__PURE__ */ import_react.default.createElement(import_TOCItems.default, {
    toc,
    minHeadingLevel,
    maxHeadingLevel
  })));
}


/***/ }),

/***/ 48341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Tree_exports = {};
__export(Tree_exports, {
  default: () => Tree_default
});
module.exports = __toCommonJS(Tree_exports);
var import_react = __toESM(__webpack_require__(67294));
function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  return /* @__PURE__ */ import_react.default.createElement("ul", {
    className: isChild ? void 0 : className
  }, toc.map((heading) => /* @__PURE__ */ import_react.default.createElement("li", {
    key: heading.id
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: `#${heading.id}`,
    className: linkClassName ?? void 0,
    dangerouslySetInnerHTML: { __html: heading.value }
  }), /* @__PURE__ */ import_react.default.createElement(TOCItemTree, {
    isChild: true,
    toc: heading.children,
    className,
    linkClassName
  }))));
}
var Tree_default = import_react.default.memo(TOCItemTree);


/***/ }),

/***/ 39006:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TOCItems_exports = {};
__export(TOCItems_exports, {
  default: () => TOCItems
});
module.exports = __toCommonJS(TOCItems_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_theme_common = __webpack_require__(17582);
var import_internal = __webpack_require__(97985);
var import_Tree = __toESM(__webpack_require__(48341));
function TOCItems({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link",
  linkActiveClassName = void 0,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) {
  const themeConfig = (0, import_theme_common.useThemeConfig)();
  const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = (0, import_internal.useFilteredAndTreeifiedTOC)({
    toc,
    minHeadingLevel,
    maxHeadingLevel
  });
  const tocHighlightConfig = (0, import_react.useMemo)(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
      };
    }
    return void 0;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);
  (0, import_internal.useTOCHighlight)(tocHighlightConfig);
  return /* @__PURE__ */ import_react.default.createElement(import_Tree.default, {
    toc: tocTree,
    className,
    linkClassName,
    ...props
  });
}


/***/ }),

/***/ 86223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Tag_exports = {};
__export(Tag_exports, {
  default: () => Tag
});
module.exports = __toCommonJS(Tag_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Link = __toESM(__webpack_require__(70393));
var import_styles_module = __toESM(__webpack_require__(12198));
function Tag({ permalink, label, count }) {
  return /* @__PURE__ */ import_react.default.createElement(import_Link.default, {
    href: permalink,
    className: (0, import_clsx.default)(
      import_styles_module.default.tag,
      count ? import_styles_module.default.tagWithCount : import_styles_module.default.tagRegular
    )
  }, label, count && /* @__PURE__ */ import_react.default.createElement("span", null, count));
}


/***/ }),

/***/ 92592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TagsListInline_exports = {};
__export(TagsListInline_exports, {
  default: () => TagsListInline
});
module.exports = __toCommonJS(TagsListInline_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_Translate = __toESM(__webpack_require__(6573));
var import_Tag = __toESM(__webpack_require__(86223));
var import_styles_module = __toESM(__webpack_require__(94211));
function TagsListInline({ tags }) {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("b", null, /* @__PURE__ */ import_react.default.createElement(import_Translate.default, {
    id: "theme.tags.tagsListLabel",
    description: "The label alongside a tag list"
  }, "Tags:")), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: (0, import_clsx.default)(import_styles_module.default.tags, "padding--none", "margin-left--sm")
  }, tags.map(({ label, permalink: tagPermalink }) => /* @__PURE__ */ import_react.default.createElement("li", {
    key: tagPermalink,
    className: import_styles_module.default.tag
  }, /* @__PURE__ */ import_react.default.createElement(import_Tag.default, {
    label,
    permalink: tagPermalink
  })))));
}


/***/ }),

/***/ 6818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Details_exports = {};
__export(Details_exports, {
  Details: () => Details
});
module.exports = __toCommonJS(Details_exports);
var import_react = __toESM(__webpack_require__(67294));
var import_clsx = __toESM(__webpack_require__(86010));
var import_useIsBrowser = __toESM(__webpack_require__(54939));
var import_Collapsible = __webpack_require__(65897);
var import_styles_module = __toESM(__webpack_require__(90872));
function isInSummary(node) {
  if (!node) {
    return false;
  }
  return node.tagName === "SUMMARY" || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
  if (!node) {
    return false;
  }
  return node === parent || hasParent(node.parentElement, parent);
}
function Details({ summary, children, ...props }) {
  const isBrowser = (0, import_useIsBrowser.default)();
  const detailsRef = (0, import_react.useRef)(null);
  const { collapsed, setCollapsed } = (0, import_Collapsible.useCollapsible)({
    initialState: !props.open
  });
  const [open, setOpen] = (0, import_react.useState)(props.open);
  return /* @__PURE__ */ import_react.default.createElement("details", {
    ...props,
    ref: detailsRef,
    open,
    "data-collapsed": collapsed,
    className: (0, import_clsx.default)(import_styles_module.default.details, isBrowser && import_styles_module.default.isBrowser, props.className),
    onMouseDown: (e) => {
      const target = e.target;
      if (isInSummary(target) && e.detail > 1) {
        e.preventDefault();
      }
    },
    onClick: (e) => {
      e.stopPropagation();
      const target = e.target;
      const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
      if (!shouldToggle) {
        return;
      }
      e.preventDefault();
      if (collapsed) {
        setCollapsed(false);
        setOpen(true);
      } else {
        setCollapsed(true);
      }
    }
  }, summary ?? /* @__PURE__ */ import_react.default.createElement("summary", null, "Details"), /* @__PURE__ */ import_react.default.createElement(import_Collapsible.Collapsible, {
    lazy: false,
    collapsed,
    disableSSRStyle: true,
    onCollapseTransitionEnd: (newCollapsed) => {
      setCollapsed(newCollapsed);
      setOpen(!newCollapsed);
    }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: import_styles_module.default.collapsibleContent
  }, children)));
}


/***/ }),

/***/ 23746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Prism": () => (/* reexport */ prism["default"]),
  "default": () => (/* binding */ dist),
  "defaultProps": () => (/* binding */ defaultProps)
});

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(87410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

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

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);



/***/ }),

/***/ 38227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
var copy_text_to_clipboard_exports = {};
__export(copy_text_to_clipboard_exports, {
  default: () => copyTextToClipboard
});
module.exports = __toCommonJS(copy_text_to_clipboard_exports);
function copyTextToClipboard(input, { target = document.body } = {}) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = input;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  let originalRange = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = input.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {
  }
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}


/***/ })

};
;