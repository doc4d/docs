exports.id = 71237;
exports.ids = [71237];
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

/***/ 11230:
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
var compiler_exports = {};
__export(compiler_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(compiler_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "compiler",
  title: "Compilation"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Project/compiler",
  "id": "version-19-R6/Project/compiler",
  "title": "Compilation",
  "description": "You can compile your projects, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications.",
  "source": "@site/versioned_docs/version-19-R6/Project/compiler.md",
  "sourceDirName": "Project",
  "slug": "/Project/compiler",
  "permalink": "/docs/ja/Project/compiler",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "compiler",
    "title": "Compilation"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Documenting a project",
    "permalink": "/docs/ja/Project/documentation"
  },
  "next": {
    "title": "About the 4D Language",
    "permalink": "/docs/ja/Concepts/about"
  }
};
const assets = {};
const toc = [{
  value: "Compile",
  id: "compile",
  level: 2
}, {
  value: "Run Compiled",
  id: "run-compiled",
  level: 2
}, {
  value: "Compiler window features",
  id: "compiler-window-features",
  level: 2
}, {
  value: "Check Syntax",
  id: "check-syntax",
  level: 3
}, {
  value: "Generate Typing",
  id: "generate-typing",
  level: 3
}, {
  value: "Clear compiled code",
  id: "clear-compiled-code",
  level: 3
}, {
  value: "Show/Hide Warnings",
  id: "showhide-warnings",
  level: 3
}, {
  value: "Disabling warnings during compilation",
  id: "disabling-warnings-during-compilation",
  level: 4
}, {
  value: "Compiler Settings",
  id: "compiler-settings",
  level: 2
}, {
  value: "Compilation options",
  id: "compilation-options",
  level: 3
}, {
  value: "Generate the symbol file",
  id: "generate-the-symbol-file",
  level: 4
}, {
  value: "Generate error file",
  id: "generate-error-file",
  level: 4
}, {
  value: "Compilation Path",
  id: "compilation-path",
  level: 4
}, {
  value: "Compilation Target",
  id: "compilation-target",
  level: 4
}, {
  value: "Default typing",
  id: "default-typing",
  level: 3
}, {
  value: "Compiler Methods for",
  id: "compiler-methods-for",
  level: 3
}, {
  value: "Compilation tools",
  id: "compilation-tools",
  level: 2
}, {
  value: "Symbol file",
  id: "symbol-file",
  level: 3
}, {
  value: "List of process and interprocess variables",
  id: "list-of-process-and-interprocess-variables",
  level: 4
}, {
  value: "List of local variables",
  id: "list-of-local-variables",
  level: 4
}, {
  value: "Complete list of methods",
  id: "complete-list-of-methods",
  level: 4
}, {
  value: "Error file",
  id: "error-file",
  level: 3
}, {
  value: "Range checking",
  id: "range-checking",
  level: 3
}, {
  value: "About Compilers",
  id: "about-compilers",
  level: 2
}, {
  value: "Classic Compiler",
  id: "classic-compiler",
  level: 3
}, {
  value: "Silicon Compiler",
  id: "silicon-compiler",
  level: 3
}, {
  value: "Requirements",
  id: "requirements",
  level: 4
}, {
  value: "Incremental compiler",
  id: "incremental-compiler",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can compile your projects, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compile"
    }
  }, `Compile`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The compilation is handled from your 4D application and is entirely automatic.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `On macOS, the compilation requires that you install `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Xcode`), `. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#silicon-compiler"
    }
  }, `this section`), ` for more information about this requirement.`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Open the compiler window by selecting the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Compiler...`), ` command in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design`), ` menu or the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Compiler`), ` toolbar button.`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(34997)/* ["default"] */ .Z),
    width: "82",
    height: "57"
  }), `  `), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(40474)/* ["default"] */ .Z),
    width: "724",
    height: "411"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also launch directly the compilation by selecting the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start Compilation`), ` menu item from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design`), ` menu.`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Compile`), ` button to launch the compilation using the current `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#compiler-settings"
    }
  }, `compilation settings`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If no errors are detected, the actual compilation begins and the "Compilation successful" message is displayed at the bottom of the window when the compilation is completed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(12821)/* ["default"] */ .Z),
    width: "511",
    height: "48"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can immediately `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#run-compiled"
    }
  }, `run your application in compiled mode`), ` and see how faster it is.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If errors are detected, the process is stopped and the "Compilation failed" message is displayed. The information area of the window displays the method names and line numbers concerned in a hierarchical list:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(29818)/* ["default"] */ .Z),
    width: "724",
    height: "411"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Double-click on each error detected to open the method or class concerned directly in the 4D Code Editor. The line containing the error is highlighted and the type of error is displayed in the syntax area of the window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Previous Error`), ` / `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Next Error`), ` commands of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Method`), ` menu to navigate from one error to the next.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of errors found during your first compilations may be daunting, but do not let this put you off. You will soon discover that they often spring from the same source, i.e., non-compliance with certain project conventions. The compiler always provides a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#error-files"
    }
  }, `precise diagnosis`), ` of the errors in order to help you correct them.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Compilation requires an appropriate license. Without this license, it is not possible to carry out a compilation (buttons are disabled). Nevertheless, it is still possible to check the syntax and generate Typing methods.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "run-compiled"
    }
  }, `Run Compiled`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once a project is compiled, it is possible to switch from `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/interpreted-compiled"
    }
  }, `interpreted mode to compiled mode`), `, and vice versa, at any time and without having to quit the 4D application (except when the interpreted code has been removed). To do this, use tge `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Restart Interpreted`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Restart Compiled`), ` commands of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu. The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/GettingStarted/creating#options"
    }
  }, `Open project dialog box`), ` also offers a choice between interpreted or compiled mode for database startup.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you switch from one mode to the other, 4D closes the current mode and opens the new one. This is equivalent to exiting and reopening the application. Each time you change from one mode to another, 4D executes the two following database methods (if specified) in this order: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Exit`), ` -> `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Startup`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you modify your project in interpreted mode, you must recompile it in order to have your edits taken into account in compiled mode.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compiler-window-features"
    }
  }, `Compiler window features`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#compile"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Compile`), ` button`), `, the Compiler window provides additional features that are useful during the project development phase.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "check-syntax"
    }
  }, `Check Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Check Syntax`), ` button starts the execution of the syntax-checking phase. At the end of the checking process, any errors detected are listed in the information area. You can double\u2013click on an error line in order to display the corresponding method.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Syntax checking can also be launched directly using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Check Syntax`), ` command associated with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Compiler`), ` toolbar button. This option is the only one available if you do not have a suitable license to allow the compilation of applications.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "generate-typing"
    }
  }, `Generate Typing`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Generate Typing`), ` button creates or updates typing compiler methods. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the method parameters. These methods, when they exist, are used directly by the compiler during code compilation, resulting in faster compilation times.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of these methods must begin with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Compiler_`), `. You can set the default name for each of the 5 compiler methods in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#compiler-methods-for"
    }
  }, `compiler settings window`), `. The compiler methods that are generated and maintained by 4D automatically have the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Invisible`), ` attribute:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87828)/* ["default"] */ .Z),
    width: "139",
    height: "60"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Only the necessary compiler methods (i.e., those for which items already exist in the project) are generated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The information area indicates any errors found during method creation or updating. Double-clicking on an error line causes the method and line concerned to be displayed in the Code Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "clear-compiled-code"
    }
  }, `Clear compiled code`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear compiled code`), ` button deletes the compiled code of the project. When you click on it, all of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#classic-compiler"
    }
  }, `code generated during compilation`), ` is deleted, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Restart Compiled`), ` command of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu is disabled and the "Compiled Project" option is not available at startup.  `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "showhide-warnings"
    }
  }, `Show/Hide Warnings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Warnings are specific messages generated by the compiler when it checks the syntax. These messages are intended to draw your attention to statements that might lead to execution errors. They do not prevent compilation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Depending on circumstances and the programming style used, these warnings may be more or less relevant. You can toggle the warnings on or off by clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Show/Hide Warnings`), ` button:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(81689)/* ["default"] */ .Z),
    width: "30",
    height: "27"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, the warnings (if any) are displayed in the window, after the other error types. They appear in italics:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(39571)/* ["default"] */ .Z),
    width: "601",
    height: "42"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Double-clicking a warning opens the corresponding method.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "disabling-warnings-during-compilation"
    }
  }, `Disabling warnings during compilation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can selectively disable certain warnings during compilation by inserting the following into the code of a 4D method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //%W-<warning number>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Only warnings with numbers can be disabled. Warning numbers are specified at the end of each message in the list of compilation errors. For example, to disable the following warning:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `1: Pointer in an array declaration (518.5)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... you just need to write the following comment in a 4D method, preferably a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `COMPILER_xxx`), ` method (method compiled first):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //%W-518.5
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compiler-settings"
    }
  }, `Compiler Settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The "Compiler" page of the Settings dialog box lets you set parameters related to project compilation. You can directly open this page from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#compiler-window"
    }
  }, `compiler window`), ` by clicking on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Compiler Settings`), ` button:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(56105)/* ["default"] */ .Z),
    width: "25",
    height: "26"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "compilation-options"
    }
  }, `Compilation options`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area groups the generic options used during the compilation process.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "generate-the-symbol-file"
    }
  }, `Generate the symbol file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to generate the symbol file (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#symbol-file"
    }
  }, `symbol file`), `). The symbol file is created in the in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#logs"
    }
  }, `Logs folder`), ` of the project with the name `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ProjectName_symbols.txt`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "generate-error-file"
    }
  }, `Generate error file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to generate the error file (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#symbol-file"
    }
  }, `error file`), `) at the time of syntax checking. The error file is created in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#logs"
    }
  }, `Logs folder`), ` of the project with the name `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ProjectName_errors.xml`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "compilation-path"
    }
  }, `Compilation Path`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to set the number of passes (code parsing) performed by the compiler and thus the duration of compilation.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Type the variables`), `: Passes by all the stages that make compilation possible.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Process and interprocess variables are typed`), `: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for automatic generation of compiler methods.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `All variables are typed`), `: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "compilation-target"
    }
  }, `Compilation Target`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v19`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This setting allows you to select the processor family for which your 4D project must be natively compiled. The 4D compiler can build native code for two processor families:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Intel/AMD`), ` processors (all machines),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Apple Silicon`), ` processors.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Two target options are proposed. The result depends on the processor of the machine on which 4D is running.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "th"
  }, `Option`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "th"
  }, `on Windows Intel/AMD`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "th"
  }, `on macOS Intel`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "th"
  }, `on macOS Silicon`)))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `All processors (Intel/AMD and Apple Silicon)`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Intel/AMD`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `It is not possible to produce Apple Silicon code on Windows`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Apple Silicon + Code for Intel/AMD`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `Two compiled codes will be available`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Apple Silicon + Code for Intel/AMD`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `Two compiled codes will be available`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `My processor (processor)`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Intel/AMD`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Intel/AMD`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code for Apple Silicon`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Apple Silicon compiler target requires that the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clang`), ` application be installed on your machine. Clang comes with the latest version of Xcode. See the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#requirements"
    }
  }, `Silicon compiler requirements`), ` for more information.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "default-typing"
    }
  }, `Default typing`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use this area to set the default type for ambiguous database objects.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Numeric`), `: Used to force numeric typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. You can optimize the running of your database by choosing the Longint type.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Button`), `: Used to force button typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. This type applies to buttons as well as check boxes, picture buttons, button grids, radio buttons, picture pop-up menus and drop-down lists.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "compiler-methods-for"
    }
  }, `Compiler Methods for`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area lets you rename the Compiler methods that are generated automatically by the compiler when you click `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#generate-typing"
    }
  }, `Generate Typing`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Up to 5 compiler methods may be generated; a compiler method is only generated if the project contains the following items:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Variables`), `: Groups together process variable declarations;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Interprocess Variables`), `: Groups together interprocess variable declarations;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Arrays`), `: Groups together process array declarations;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Interprocess Arrays`), `: Groups together interprocess array declarations;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Methods`), `: Groups together method parameter declarations (for instance, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `C_LONGINT(mymethod;$1;$2)`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can rename each of these methods in the corresponding areas, but they will always be preceded by the label `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Compiler_`), ` (non-modifiable). The name of each method (prefix included) must be no longer than 31 characters. It must also be unique and comply with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/identifiers#project-methods"
    }
  }, `4D rules for naming methods`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compilation-tools"
    }
  }, `Compilation tools`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "symbol-file"
    }
  }, `Symbol file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you check the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#generate-the-symbol-file"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Generate the symbol file`)), ` option in the compiler settings, a symbol file called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ProjectName_symbols.txt`), ` is created in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#logs"
    }
  }, `Logs folder`), ` of the project during compilation. It is divided into several parts:`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "list-of-process-and-interprocess-variables"
    }
  }, `List of process and interprocess variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These two lists contain four columns:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Names of process and interprocess variables and arrays used in your project. These variables are listed in alphabetical order.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Type of the variable. Types are set by compiler directive commands or are determined by the compiler based on the use of the variable. If the type of a variable cannot be determined, the column is empty.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Number of dimensions if the variable is an array.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Reference to the context in which the compiler established the type of the variable. If the variable is used in several contexts, the context mentioned is the one used by the compiler to determine its type.`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable was found in a database method, the database method name is given, preceded by (M)*.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable was found in a project method, the method is identified as it has been defined in 4D, preceded by (M).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable was found in a trigger, the table name is given, preceded by (TM).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable was found in a form method, the form name is given, preceded by the table name and (FM).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable was found in an object method, the object method\u2019s name is given, preceded by the form name, table name, and by (OM).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the variable is an object in a form and does not appear in any project, form, object method, or trigger, the name of the form in which it appears is given, preceded by (F).
At the end of each list, you can find the sizes of the process and interprocess variables in bytes.`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When compiling, the compiler cannot determine in which process a given process variable is used. A process variable can have a different value in each process. Consequently, all process variables are systematically duplicated as each new process is launched: it is thus advisable to watch out for the amount of memory that they will take up. Also, keep in mind that the space for process variables is not related to the stack size for the process.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "list-of-local-variables"
    }
  }, `List of local variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The list of local variables is sorted by database method, project method, trigger, form method, and object method, in the same order as in 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This list is divided into three columns:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `list of local variables used in the method;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `type of the variable;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `number of dimensions if the variable is an array.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "complete-list-of-methods"
    }
  }, `Complete list of methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A complete list of your database and project methods is given at the end of the file with:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `their type (procedure or function returning a value)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the data types of their parameters and the returned result`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the number of calls`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the Thread Safe or Thread Unsafe property.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This information appears as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `Procedure or Function <Method name>(parameter data types):
result data type, number of calls, Thread Safe or Thread Unsafe
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "error-file"
    }
  }, `Error file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can choose whether or not to generate an error file during compilation using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#generate-error-file"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Generate error file`)), ` option in the compiler settings. The error file is automatically named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `projectName_errors.xml`), ` and is placed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#logs"
    }
  }, `Logs folder`), ` of the project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although the errors can be accessed directly via the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#compile"
    }
  }, `compiler window`), `, it can be useful to have an error file that can be transmitted from one machine to another. The error file is generated in XML format in order to facilitate automatic parsing of its contents. It also allows the creation of customized error display interfaces.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The length of the error file depends on the number of errors and warnings issued by the compiler.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The structure of the error file is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `At the top of the file is the list of errors and warnings, sorted by method and in their order of creation in 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `General errors`)), ` section, all the typing impossibilities and identity ambiguities are grouped together. These errors and warnings are listed using the following format:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `line number in the method (0 indicates general errors)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `warning attribute indicating whether the detected anomaly is a warning (warning="true") or an error (warning="false")`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `diagnostic describing the error`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If your project does not have any general errors, the file will not have a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `General errors`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An error file may contain three types of messages:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Errors linked to a specific line`), `: these errors are displayed in context \u2014 the line in which they were found \u2014 with an explanation. The compiler reports this type of error when it encounters an expression in which it sees an inconsistency related to data type or syntax. In the compiler window, double\u2013click on each error detected in order to open the method concerned directly in the 4D Code Editor, with the line containing the error highlighted.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `General errors`), `: These are errors that make it impossible to compile the project. There are two cases in which the compiler reports a general error:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The data type of a process variable could not be determined.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Two different kinds of objects have the same name.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `General errors are so named because they cannot be linked to any specific method. In the first case, the compiler could not perform a specified typing anywhere in the project. In the second, it was unable to decide whether to associate a given name with one object rather than with another.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Warnings`), `: Warnings are not errors. They do not prevent the project from being compiled, but simply point out potential code errors. In the compiler window, warnings appear in italics. Double-click on each warning to open the method concerned directly in the 4D Code Editor, with the line containing the warning highlighted.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "range-checking"
    }
  }, `Range checking`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The code generated by the 4D compiler automatically checks that every access to an array element or a character reference is done within the actual range of array elements or string characters. Out of range accesses will provoke runtime execution errors.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In some cases, you might prefer range checking not to apply to certain parts of the code that are considered to be reliable. More particularly, in the case of loops that are repeated a great number of times, and when running the compiled database on older machines, range checking can significantly slow down processing. If you are absolutely certain that the code concerned is reliable and cannot cause system errors, you can disable range checking locally.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To do this, you must surround the code to be excluded from range checking with the special comments `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `//%R-`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `//%R+`), `. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `//%R-`), ` comment disables range checking and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `//%R+`), ` enables it again:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // %R-   to disable range checking
 
 ... //Place the code to be excluded from range checking here
 
  // %R+   to enable range checking again for the rest
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "about-compilers"
    }
  }, `About Compilers`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D contains two compilers:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a "classic" compiler, used to compile native code for Intel/AMD processors;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a Silicon compiler, used to compile native code for Apple Silicon processors.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The classic compiler can be used on any platform, while the Silicon compiler can only be used on a Mac machine:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Compile for Windows`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Compile for Intel Mac`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Compile for Silicon Mac`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `On Windows`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2717`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `On Intel Mac`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `On Silicon Mac`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `\u2713`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Both compilers are integrated into 4D. The appropriate compiler is automatically selected depending on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#compilation-target"
    }
  }, `compilation target`), ` option.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "classic-compiler"
    }
  }, `Classic Compiler`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The classic compiler generates native compiled code for Intel/AMD processors on any machines. It does not require any specific configuration.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Resulting compiled code is stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#deriveddata"
    }
  }, `DerivedData`), ` folder of the project.  `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "silicon-compiler"
    }
  }, `Silicon Compiler`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Silicon compiler generates native compiled code for Apple Silicon processors, such as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Apple M1`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Resulting compiled code is stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#libraries"
    }
  }, `Libraries`), ` folder of the project.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "requirements"
    }
  }, `Requirements`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Apple machine`), `: The Silicon compiler can only be run from an Apple machine.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `4D Project architecture`), `: The Silicon compiler is only available for 4D developments using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/Project/architecture"
    }
  }, `project architecture`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Xcode or Developer Tools`), `: The Silicon compiler calls the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Clang`), ` open-source macOS compiler to compile the project from C++ code at the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#incremental-compiler"
    }
  }, `second step`), ` of compilation. `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `clang`), ` requires Apple native libraries, which are provided by either the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Xcode`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Developer Tools`), ` package.`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `If you already have`), ` Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `If you do not have`), ` any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `We recommend to install `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Xcode`), `, which is quite simple to install. You can decide to install `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Developer Tools`), ` which is more compact, however its installation is a little more complex.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "incremental-compiler"
    }
  }, `Incremental compiler`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Silicon compiler is incremental, which means that:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `During the very first compilation, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `all 4D methods`), ` are compiled. This step could take a certain time. However it only occurs once.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `During all subsequent compilations, only `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `new or modified methods`), ` are processed, thus reducing drastically the compilation time.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 40474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/comp1-0b1874c10d9848d4f011756e726b0215.png");

/***/ }),

/***/ 34997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAA5CAYAAAClH3wCAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAsRJREFUeF7tlb1q40AQgPU4bgMhb2Lc2IZwKYyLC9idq7M5cN7AEBtDINfpBdKYgyPF4ULVmRRXuDpcmlznZs4jadcraaToZ24jhyk+GLSzM5rPu5azXq9BqI6z3+9BqI4W+f33X6EkCZEvf16FI0VciMgMRCQTIpIJEcmEiGRCRDIhIpkQkUzUXuTPX1v4dHMDzWazFLgXa1C1Oam9yPnDN1gul3A4HCLM53NwXRd2u50PxovFIpGHe7EGVZuT2ov8fHsLm80mIWg6ncJqtdIiMcZn8TzcizWo2pzUWuQP7wV6vV5CDjIYDMDzPC0S4+FwSOZiDaxF9eCi1iLTrjXS6XRgu91qkRh3u10y18b1rrXIfr9PfkAUs9ksApWjwFpUDy5qLRIFUCcMwTV1GhVv5VM9uBCRTIhIJkQkE2crcjKZ+Osm+IzKRXCd6sHF2YosiogkpJRBRBJSyiAiCSllEJGElDLYFNloNFJRuSIyhbiLNIkq16rIL5OvvgAOsBbVgwvKBSURsS7ynEhzEZeIiMgMirgQkRmISCZEJBMikgkRyYSIZEJEMiEimRCRTNgX+XgNjuNoLsYenceGCy3nGu51fAWj53hOdeyK9CWqod6DDyHSg9Fl1hA4pDqpZl4wfKt9pU/wfTvMa7uRnNH4dNpbj9H9Qb24SKNnrJbf7/IufPY29kQ+38HF8cWeqLUjKEdfczy5OjcY1l/DGkqSH5tX1pAROfmmPDMOegbCzR/Z6Ofvz0dNREYHTB8+T1xkT3gaQwKp8Vr5sCcy8wXja/GBi8Rl9yjSnmdjUeQrPI2D/53TqXSP/2vBFcq+2nmknPZH+6TtwetMXWEzJz9WRSL+kPo6mV/wQEbw3BwkTUQyVh+kfPuPhP+50XeJ5eTEusj/Q7nhORGRTHwQke+PiGRCRDJRWaRQjohIoRoikoU9/AObcHHHpLfjRgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 29818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/compilerWin2-8588d4f44aaf94d6da4b5d63935c993e.png");

/***/ }),

/***/ 87828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAA8CAYAAABW1kkyAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABmVJREFUeF7tnE2O3CoQx/tcPpDP0+u3e8o+m0h9gkiTF+UGs80qF8jSjyo+XBRQgBu7u931k9AYGxeu4g+4DZrLoiiNqFiUZjaJ5d8v/7kj5Z3oFgsI5cfnXxXMG9IlFi8Un1Qw70WzWLhQqGA+Pj6SJPO5XKfLcrm4NF3NmYP4vC7TZVquWOFtmcPxGG6z8We+udy52GVkEcWCjXVZoniac9eHxHewWMC3aV7maawAn4Wh7yz/3H4kKcaOKM/T8caK5fM6LZMx5v+ejW6xAKURBcTx7dfvkBKx4KgymyYScCOPn6JWYbmGva3X4Ro0jC+7NlBaNrmGWSaWqG7/nLbMPEM90rNDR3C2cIShUyu3kdrE6cvXjU5nOtZtdlN2PI0f1fk2iaU0zTSJRXw/gSAS57HxaMOa4Pj7IXAmH0SAedrApGxip3YM2dnZtraqI0XkGxEOwm1INslzgE9ECSAozLLzR9Ellq/fvyeJcvfIkrkeAkSDiEh5fq1khxxj3WtvxWRbJrGVg089OOKFBuU2Mjad+G2iz0c6QCT+BgEPplksIIyff/4kiQoGxMFTTOWdZTex0HoL5YpC5rZyQBkispBIQ0c2WD6qOx6VpPcgPwUX4zmYoWLxiL+GXA+KHDTBsr+GbNDDtSiIlYBHeWsnBLdoR7gnQMsUAJ+S6bUkUIDl6f34rOQa5IVfWDkR7cUQsfhvKzSJYEBID6SBjq4JARbz9ti+QFpbqzjTcsEGfy68ideTAqNfrsHWqYjb4HkrLKwzIwywH72jRFNWbjTch11GlsdTb+BXYp2KH4uKpQuw63v0QT0bpyE+xT2GZrEAIAyenpMzjCx+anoeP7rEorw3KhalGRWL0oyKRWlGxaI0s0kspVVn5dx0i0Xaz6Kcmy6xeKHUdsop56RZLFwoVDDda0N0LQTSkV8ocf3Hf+ga9fHOfdktfJO3q8O99Yx8tjEf9nYZWUSxuMW6KK7m3GvvwbV2puzKsBNStR7+LGOf7X47g99Z7t7PcjhjGwRWuZPVZ1ghnueGek4oFqA0ooA47topB7iRx09Rq7Cc00+5B9fbgb+0DHQOf16qB677vEnotLsn64OhGCcDuTZdr6TuePrv7bSbxFKaZprEIr6f2KAFJ9Bp76gLqL/f7ekIAcQ8bWBSNrFTO4Zszx7c9d5oO0Hwt7Uect7VG/sb+yfFyV+L3pfARq9CCF1iqa063z2yZK6P2VZZskOOse6112HCG1JbKcyOa+Bsnc31CHkpTqR+S1q3LPwyzWIBYdT2s4A4eIqpvLNIQZCCh9A8v0brLZTL1G3htnLQMm7qgekjNNqWeoS8FCe4VhKLw0/dxXYoMFQsHvHXEA6n7EGNgy+9B5eXcT6utrbUI+WtjXKc1muln+1wvneEGSIW/22FJhF0jgzDtCdE11qDB/BgHrcHNy0Dowvt+S31mFJmdCjXK9lgz+fECil6wSXnyy/rZXYZWR5PSwMrvahYugC7vmdu76GvSrNYABAGT8+Jjix70CUW5b1RsSjNqFiUZlQsSjMqFqWZTWIprTor56ZbLNJ+FuXcdInFC6W2U045J81i4UKhguleG8K1E/IVNFol3RlcU/Ef7MZ8vIM1nWRRrmfvSPRMJaRnPeYj5C4jiygWtwAWxdGce+k9uBlhrFsrRvFiYgG8YHJCuXs/y+EMCjJ2AL7KPHrN6AXFApRGFBDHXTvlADfy+ClqFZYLyFPuwWWdgIw0YdsBpLUAsxk/h3RP3SdD1o946g9mO9gkltI00yQW8f0EnCaOoNO0YY2j/n63NyMEDPO0gUnZxE7tGLJ9/weXbibKT0G8LqGxA+k9fT5B1vlBBLyVLrHUVp3vHlky19fA84BKeX6tZIccY91rz8OEN6S2ssD92JDQg0l5J2qbMvUiLN90DxTL+FTyw52viV6iWSwgjNp+FhAHTzGVd5bdxELrLZTL1G3htko4kdC9t5FNKiJus/Qc0j0Fn4p+WLbuvwWGisUj/hpyvSZ6WOPga+/BtfiGCDbA1+q0AZC8eE+rT/IIsmX/LTBELP7bCk0i6CgZJn1wgOhaIaCIlLfHx+3BdUSNC9jej7ai/2/LbdK8fE/dJ0POj2hqK488EruMLI+no4GVZlQsXYBd0mPv6KWvSLNYABAGT8+Jjix70CUW5b1RsSjNqFiURpblfx8N5d7Mvs7iAAAAAElFTkSuQmCC");

/***/ }),

/***/ 81689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAYAAABr/T8RAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAcJJREFUSEvtlFtLAlEUhfuTvtRDqSl20a4W3QuxIgqiKArpYlHRTdAoJCuLQqnApDIlAruLRpZBhr6sOAMTVtuZsage8uF7mGHv9XHmLCYncPuEvyAr/jWyYkn4rqLo7OlDia4cI1ML5IwYXxL3D4+h1WDEoc8PbVkFFlc2yDkhMhbv+S+QXyBHKBxBMpnE7r4HmuJS+K8fyfl0ZCxmn9g0NsFJeRqaWzE5byPn05GReMd7CrlCicdYDG63G3q9HsFgECeBUygL1Ti+uCf3KDIStxg6MDNv4U5pNpuhUqngdDq5546uHgyPT5N7FJLFay4vVGoNnp/jpPj88goFcgUOzkLk/kcki/V1jVi2OzgJJWb0DQyhd9BE7n9Eknhp3YUSbRkSicSbJPWO+XfhyB3X+F3fOZmTiqjYfxODrrwKWzuuN4EQoxNTaO/uJbNSERXP2lZRXVv3SUCdmMEar1AWYtsTIPN4BMXs16jWFMHjPXoXzkgnZsxZrGhqM5KZPIJiq2Mb9U0tn4LFiMdfRO9aUGyxb6KyugbR6AMpSMf1Teh7YlYsVpTc3DzIZDLJMKlpcpbM5BEt10+RFf8a/038hFfemF7vXd9PegAAAABJRU5ErkJggg==");

/***/ }),

/***/ 39571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlkAAAAqCAYAAACA0U4BAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAACwBJREFUeF7tnT2PJEkRhvs/rbQSLSFhYGDwE8ZZpx0sLNx116LxDgvQ+Wu2BP79gMVtYdzpcNYABBIGIIqMyszKiKiIqKyeru2a4X2kV9OVXxEZmVkdU7Ufhz/88fPw+0+fB3AL1+F8PAyHw3E4X0vRxGU4meUAAAAA+H8ASRYAAAAAwAYgyQIAAAAA2AAkWQAAAAAAGyCSrD//A4IgCIIgCLqHkGRBEARBEARtICRZEARBEARBGwhJFgRBEARB0AZCkgVBEARBELSBNkqyrsP7t4fhzYerWX54d1HlEARBEARBr0tukvX93/8rrpfKpS7D09vj8ObtefiGlX/zgcqSZskXBEEQBEHQ65KZZP3yq98MP/v5L4Zv//pv0Ziuqfz81W9F+UwfT8Ph3Xl4nxKq959K2afz8OZwGp7eHYanj6wtBEEQBEHQK9Qsyfrub/8ZE6kf/PBHItGqCVYtp3Z8IK7xidWH6/SzviZ8+kg/WeJVXx8eqk7D12qMr1NSNtaJp2J+v3kdt3cZnqbyluyRjaePpQ6vMiEIgiAIuoPMJ1nf/uVfIqH60+d/imv9hEsrJy3p8/hE6zImTDl5oUSmJkQ5GWqvDukVY0ukaAx6tZgTIepXk6WoX1THbScV31pSxhM1CIIgCIKg58n9M1n8ydWPf/LT7gQrJy01IaLEhiUw9MqwJj1TklP6ies8Bj35ytcsQYr6LdWxp1itHY3Nn3ZBEARBEAQ9X26SRdKvCJcTLBJ/esSeaqXP7fWh/FzbTdc8GVPXUb81dZO0LQiCIAiCoDsoTLJIlFj96te/G18hWvUz6adJTDrhkk+Z2NMk44kUT5a8fot1VjKlbUEQBEEQBN1Bi0nWWrlPjMRrRFJ9lUiv7uTfRNRj8OQs6ifrTu0V46j6Z69qfU6s5NgQBEEQBEH30d2TrN2InlDhNSAEQRAEQQ/SK02y8hMtPKGCIAiCIOhRej1J1viPnbbXgfYrSwiCIAiCoC+j1/u6EIIgCIIg6IFCkgVBEARBELSBkGRBEARBEARtICRZEARBEARBG0gkWQAAAAAA4D4gyQIAAAAA2AAkWQAAAAAAG4AkCwAAAABgA3acZF2G0+EwnC7l0uQ6nI/s/yOcdEq9qT/9fKVc6D/ArnNdYsNYJD/aGuX1OJ6v5bpS1ilezMcj5sJ5Tvxu7cv6Xc/D8XAcclgfsK9pr+197Thd/q6J45Yx/wLr+SXXzz1DO6M7Jg84b49A3GNeK49Zy10mWZcTJQ/H4XjsX/TrObXnjWnTHM/p6/01QknLigOxZSzETTVt4uSXtjWuDZXv/QR7XxDPid+tfb1+D9jXs7Plso8vpC5/18Rxy5jfPHZ/rPvX7w7o+8Fd9sP995UfE2XrAedt3+zjjN/Eg9Zy50+y+heTEjPxBdn9m8oLZO1m2TIW/KY62jnLBJB8Tet40uuzR8QXBOM58bu1r9fvOb7cyOXUmdDv5Aupy981cdwy5reOvSLW3et3D9J8puncaz9ssK/cmGhbDzhvu2YnZ/wmHrSW+02y1GLOkijB/MlO/U0lPxVLEhuDErhSnmSNG/fXrylbMkj9TpdWP/62RHMpbZutZR9kmzI/2ihTmZWEzvtkn0r1gu+1vLa3yjxqzOrPaivHg69P7MMtcZ/XcXt2rPOeKnXB5MinVm2syYhd3mKR7fE10f5wuE0+hjeetO+tVRQ/zpo4lzqxL6tPffbyXFvbcX6LZ4bHPrJjx4XHVzK3Idv6tqidZUeXcWgNj+fzZLOuLZH3Z7lITNdmrDm98eB9/ThZZeRn3n9J1pfuoo+WPSprbbltOY7vq+9Xx140fI7HtP2Q+HbzerYx5mvfUTca5X60+K0Zo84z4/hsrim3TWNSmYSvY63P9vNngl9Hfnv29Hxku7aWzeZ9z3HEfpOstKDzTVEuNLPsugUw96GA1yDyzwnaOMbAZI9ecbX+dVPlsZtvqY7Zpn7TBhz9Spu31k+2enygNmzO1KaMIw8ER/UZIX87fJ/FMGGVBUxrVOYzbsxcwOa7HL/1cY/quO3EFOvcx7zZCqhd9YHGstbEK699lX+LceU2rc9qPHeOHKOP6UPULh7Duokt2yN3e8+MF2PPDvXx1r7GlKNsjPC2ga2bzk8eb9qD1H7yV/so5yJjzQl8HMfw9q8RJ8d//4xKfB8de4np3qbK2jh+39vuHRJrD9/+PRLZzet7PJYxjLX36/h9i/zw7z19Y+S2PbHqXYsJcw9xewQfJ/Lbs6fno2Iy0jlHy19zDv3sNsnyD6jBbHEpyM4iUtu0AJNMI3lB6LfrjOrP+4hrZVdskERqO91AlnzQdpgP7qPuWR9ije984xFWmQffxLmf+PKomzT04ca4L9XVOJOmdjS2E0dB4EOt88rHn2RX28nlflyZzdlnYzx3jgzt48znQtQuHIOvfyJsy6E5sX7RmRH9S1wiO/TZjAuPKWNmg2BtI1tju7Xnh+r5WnK/0md+Yxc3ehVrTuTjbH7FHpW7cdL+B2dUsOCjaY/INnOiQBj7yuwb+KXnPYtDRftMYzjrE86hENoNxl5TN5tLbbtiDF4X+ty7Fhwa2zgX7t5e8M20p/rMYkKocdw5Uru15zhmp0lWcEANpt9+KmLREnRdgjhra2H1L9e6//jbU73W/dRiUlu67PHBnxPbLApz3GDuwvcClekNapXNSX6xude5Etxu6MONcV9TN6FteQTxq2NcnPJr+XlmseC4cWU2p7HYZz2eO0dGFCOO1a65Eo0h92WvvdSwzY/oPTOln4595O8Ejy/DbM/a9syJyrrPj547v1ZxINvtuv8eEMbDiaFG+B/5LFh5n6rQeOILLd5XE4FfUUwkymdrzNIxnEPBsjtds7FGuK2lOubTzI9av2IMfh363LsWBmIPRXs78Nu1p+ZjtmPjxnPMCH8LVlkPO02y+GJSwuUdigxNXtQbi1iDOC4o32AWqj9di/61jtoFGbT0qyWOPT4IOzwGakNxZJ9Cr+8T1s3RKlOouXN4HNbEj657fF+ss+KlbXl4PrA18cqbDS9+TjmzqT9b47lzZEQx4kTtwjGMG12PvTanTHhmpgon9pa/ztpPMWVIGwXWtm9O/eeHxmt+UJvonLC49N4DrHi0QWQMw/3D/KcxpzESLD6CJR+tuqkPs2ftK6tv4FcUE4H2WY1J44gxLT8YoV3mX7oQa79Up31q1/Le0zsGbxv63LsWJm1N5zb65u7aU/ORMSn0znGi+duoZSzOHewzyRKLuTQhqpdB0knX/MadMtK0ePKRY4MWoS207p8XPveVf5PO+4LIpH5qTpEPus3kj9iEGt6n2B43Ue3v+S5tZXesMh8dswaNo+JQxtTxuzXusu6UPvPDIedRY633iIuInxyr+WqXCxs0zrj+HXHlNtlnezzCnqMkih+nN86qjs7sWFdj32fv1jPTYh/ZceIi1pTD25dxRFvPlrSTzVhlijK23YbbuqSmbF6zWHP649Hmb8XJ9j8+o4zQR8PeGIvWlsYd7czGsXxd8iuKCUPZ0nOb79UyJvND4tulsaa+SdpOVCdNST9qDFaN0bXHE51r0ZD1rdrf25Hfnr04JmXsu57jXCZt+uz3D74Dk/mGAgI6TNMXMwAA7A36kmbJiyCq6+UeYzyCl+p3DJKsF8Xr3IT3I/+GgiQUALBf6D5lPeEjorpe7jHGI3ipfscgyQIvm+kRdhZ/ZQAAALuD7lneb4JRXS/3GOMRvFS/F0CSBQAAAABwd4bhfwHLeJw51NT7AAAAAElFTkSuQmCC");

/***/ }),

/***/ 56105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAALtJREFUSEvllkEKxSAMBf8lPYMbr+lCT+PaTcorBIIxtRb7W+hiKMY0k0CV/kopdDcfkIQQlsSBKXHOLYmDd0lijOS93+N4Yi33l0hQOOdMtVZKKe1ruT8lsTrGGgKGi44mBEqCxF7HlsTKlyiJVWw2LpmStBzlS56bpOVKXPK+SXrFZB4j64HnJum9hO8f5wCxM+dHcloyexNIlMTqmGmLjPKBkozuolYyygdKwvTGvhIHH5D85UdiHYU23A3FAyoDg9cAAAAASUVORK5CYII=");

/***/ }),

/***/ 12821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;