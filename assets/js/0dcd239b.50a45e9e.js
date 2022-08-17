exports.id = 46669;
exports.ids = [46669];
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

/***/ 8196:
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
var basics_exports = {};
__export(basics_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(basics_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "basics",
  title: "Basics"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Debugging/basics",
  "id": "version-19-R6/Debugging/basics",
  "title": "Basics",
  "description": "Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!",
  "source": "@site/versioned_docs/version-19-R6/Debugging/basics.md",
  "sourceDirName": "Debugging",
  "slug": "/Debugging/basics",
  "permalink": "/docs/Debugging/basics",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "basics",
    "title": "Basics"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Transformation tags",
    "permalink": "/docs/Tags/tags"
  },
  "next": {
    "title": "Debugger",
    "permalink": "/docs/Debugging/debugger"
  }
};
const assets = {};
const toc = [{
  value: "Error types",
  id: "error-types",
  level: 2
}, {
  value: "Typing errors",
  id: "typing-errors",
  level: 3
}, {
  value: "Syntax Errors",
  id: "syntax-errors",
  level: 3
}, {
  value: "Environmental Errors",
  id: "environmental-errors",
  level: 3
}, {
  value: "Design or Logic Errors",
  id: "design-or-logic-errors",
  level: 3
}, {
  value: "Runtime Errors",
  id: "runtime-errors",
  level: 3
}, {
  value: "Syntax Error Window",
  id: "syntax-error-window",
  level: 2
}, {
  value: "Debugger",
  id: "debugger",
  level: 2
}, {
  value: "Breaks",
  id: "breaks",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Errors are common. It would be unusual to write a substantial number of lines of code without generating any errors. Conversely, treating and/or fixing errors is normal, too!`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D development environment provides several debugging tools for all types of errors.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "error-types"
    }
  }, `Error types`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "typing-errors"
    }
  }, `Typing errors`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Typing errors are detected by the Code Editor. They are displayed in red and additional information is provided at the bottom of the window. Here's a typing error:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "break-point",
    src: (__webpack_require__(78355)/* ["default"] */ .Z),
    width: "1824",
    height: "980"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Such typing errors usually cause syntax errors (in the above image, the name of the table is unknown). You get the description of the error when you validate the line of code. When this occurs, fix the typing error and type Enter to validate the fix.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "syntax-errors"
    }
  }, `Syntax Errors`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some errors can be caught only when you execute the method. The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#syntax-error-window"
    }
  }, `Syntax Error Window`), ` appears when an error occurs during code execution. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "syntax-error",
    src: (__webpack_require__(88889)/* ["default"] */ .Z),
    width: "642",
    height: "552"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Expand the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Details`), ` area to display the last error and its number.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "environmental-errors"
    }
  }, `Environmental Errors`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Occasionally, there may not be enough memory to create a BLOB. Or, when you access a document on disk, the document may not exist or may already be opened by another application. These environmental errors do not directly occur because of your code or the way you wrote it. Most of the time, these errors are easy to treat with an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/error-handling"
    }
  }, `error catching method`), ` installed using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON ERR CALL`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "design-or-logic-errors"
    }
  }, `Design or Logic Errors`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These are generally the most difficult type of error to find. Except for typing errors, all the error types listed above are to a certain extent covered by the expression "Design or logic error". Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Debugging/debugger"
    }
  }, `Debugger`), ` to detect them. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `syntax error`), ` may occur when you try to use a variable that is not yet initialized.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `environmental error`), ` can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Design or logic errors also include such situations as:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A record is not properly updated because, while calling `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SAVE RECORD`), `, you forgot to first test whether or not the record was locked.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A method does not do exactly what you expect, because the presence of an optional parameter is not tested.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sometimes the piece of code that displays the error may be different than the code that is actually the origin of the problem.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "runtime-errors"
    }
  }, `Runtime Errors`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In Application mode, you might obtain errors that you don't see in interpreted mode. Here's an example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "runtime-error",
    src: (__webpack_require__(3295)/* ["default"] */ .Z),
    width: "662",
    height: "472"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To quickly find the origin of the problem, reopen the interpreted version of the structure file, open the method and go to the corresponding line.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "syntax-error-window"
    }
  }, `Syntax Error Window`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Syntax error window automatically appears when the execution of a method is interrupted. This can happen when:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an error prevents further code execution`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the method produces a false assertion (see the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ASSERT`), ` command)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "syntax-error",
    src: (__webpack_require__(88889)/* ["default"] */ .Z),
    width: "642",
    height: "552"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The upper text area displays a message describing the error. The lower text area shows the line that was executing when the error occurred; the area where the error occurred is highlighted. The expanded Details section contains the "stack" of errors related to the process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The syntax error window proposes several options:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit`), `: Stops all method execution. 4D switches to the Design environment and the method with the error opens in the Code Editor, allowing you to fix it. Use this option when you immediately recognize the mistake and can fix it without further investigation.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Trace`), `: Enters Trace/Debugger mode. The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Debugging/debugger"
    }
  }, `Debugger`), ` window is displayed. If the current line has only executed partially, you may have to click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Trace`), ` button several times.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Continue`), `: Execution continues. The line with the error may be partially executed, depending on where the error is located. Continue with caution: the error may prevent the rest of your method from executing properly. We recommend clicking `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Continue`), ` only if the error is in a trivial call (such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET WINDOW TITLE`), `) that does not prevent executing and testing the rest of your code.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Continue`), ` button into an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ignore`), ` button. Hold down `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Alt`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Option`), ` (macOS) key and click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Continue`), ` button the first time it appears. The button label changes to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ignore`), ` if the dialog is called again for the same error.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Abort`), `: Stops method execution and returns to the state before the method started executing:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If a form method or object method is executing in response to an event, it is stopped and you return to the form.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the method is executing from within the Application environment, you return to that environment.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Copy`), `: Copies the debugging information into the clipboard. The info describes the internal environment of the error (number, internal component, etc.). It is formatted as tabbed text.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Save...`), `: Saves the contents of the syntax error window and the call chain in a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.txt`), ` file.`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "debugger"
    }
  }, `Debugger`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A common beginner mistake in dealing with error detection is to click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Abort`), ` in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. Do not do that! You will save plenty of time and energy by always using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Debugger`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Debugger allows you to step through methods slowly. It displays all the information you need in order to understand why an error occurred. Once you have this information, you know how to fix the error.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Another reason to use the Debugger is for developing code. Sometimes you may write an algorithm that is more complex than usual. Despite all feelings of accomplishment, you can't be totally sure that your coding is 100% correct. Instead of running it "blind", you can use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `TRACE`), ` command at the beginning of your code, then execute it step by step to keep an eye on what happens.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "breaks"
    }
  }, `Breaks`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the debugging process, you may need to skip the tracing of some parts of the code until a certain line. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These needs are covered by `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `breakpoints`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `command catching`), ` features. They can be configured from the Code Editor, the debugger, or the Runtime Explorer.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png");

/***/ }),

/***/ 88889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png");

/***/ }),

/***/ 78355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png");

/***/ })

};
;