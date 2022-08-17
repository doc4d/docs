exports.id = 18931;
exports.ids = [18931];
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

/***/ 52627:
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
var plug_ins_exports = {};
__export(plug_ins_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(plug_ins_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "plug-ins",
  title: "Plug-ins"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/plug-ins",
  "id": "version-19/Concepts/plug-ins",
  "title": "Plug-ins",
  "description": "As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding plug-ins to your 4D development environment.",
  "source": "@site/versioned_docs/version-19/Concepts/plug-ins.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/plug-ins",
  "permalink": "/docs/fr/19/Concepts/plug-ins",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "plug-ins",
    "title": "Plug-ins"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Components",
    "permalink": "/docs/fr/19/Concepts/components"
  },
  "next": {
    "title": "Identifiers",
    "permalink": "/docs/fr/19/Concepts/identifiers"
  }
};
const assets = {};
const toc = [{
  value: "Why the need for a plug-in?",
  id: "why-the-need-for-a-plug-in",
  level: 2
}, {
  value: "What is a plug-in and what can it do?",
  id: "what-is-a-plug-in-and-what-can-it-do",
  level: 2
}, {
  value: "Important note",
  id: "important-note",
  level: 3
}, {
  value: "How to create a plug-in?",
  id: "how-to-create-a-plug-in",
  level: 2
}, {
  value: "How to install a plug-in?",
  id: "how-to-install-a-plug-in",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `plug-ins`), ` to your 4D development environment.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "why-the-need-for-a-plug-in"
    }
  }, `Why the need for a plug-in?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "what-is-a-plug-in-and-what-can-it-do"
    }
  }, `What is a plug-in and what can it do?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Usually, a plug-in does things that:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D cannot do (ie, specific platform technology),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `will be very hard to write just using 4D,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `are only available as Plug-in Entrypoint`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process. `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `plug-in routine`), ` is a routine written in native language (usually C or C++) that causes an action. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `external area`), ` is a part of a form that can display almost everything and interact with the user when necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `external process`), ` is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "important-note"
    }
  }, `Important note`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PA_Yield()`), ` to give time to the 4D scheduler unless its task is critical for both it and the application.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "how-to-create-a-plug-in"
    }
  }, `How to create a plug-in?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides on GitHub an open-source `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://github.com/4d/4D-Plugin-SDK"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `plug-in SDK`)), `, containing the 4D Plugin API and the 4D Plugin Wizard:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `4D Plugin API`)), `, written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `4D Plugin Wizard`)), ` is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "how-to-install-a-plug-in"
    }
  }, `How to install a plug-in?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You install plug-ins in the 4D environment by copying their files into the appropriate folder. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `\u201CPluginName.bundle\u201D folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. To install a plug-in in your environment, you just need to put the \u201CPluginName.bundle\u201D folder or package concerned into the desired `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Plugins`), ` folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can put the Plugins folder in two different places:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `At the level of the 4D executable application, i.e.:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Under Windows: next to the .exe file`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Under macOS: at the first level of the Contents folder inside the application package.
In this case, plug-ins are available in every project opened by this application. `))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `At the same level as the Project folder. In this case, plug-ins are only available in this particular project. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The choice of location depends on how you want to use the plug-in.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them.
Then open your project with 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;