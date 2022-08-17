exports.id = 13384;
exports.ids = [13384];
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

/***/ 80630:
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
var about_exports = {};
__export(about_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(about_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "about",
  title: "About the 4D Language"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/about",
  "id": "version-18/Concepts/about",
  "title": "About the 4D Language",
  "description": "The 4D built-in language, consisting of more than 1300 commands, makes 4D a powerful development tool for database applications on desktop computers. You can use the 4D language for many different tasks\u2014from performing simple calculations to creating complex custom user interfaces. For example, you can:",
  "source": "@site/versioned_docs/version-18/Concepts/about.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/about",
  "permalink": "/docs/pt/18/Concepts/about",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "about",
    "title": "About the 4D Language"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Installation and activation",
    "permalink": "/docs/pt/18/GettingStarted/installation"
  },
  "next": {
    "title": "A Quick Tour",
    "permalink": "/docs/pt/18/Concepts/quick-tour"
  }
};
const assets = {};
const toc = [{
  value: "What is a Language?",
  id: "what-is-a-language",
  level: 2
}, {
  value: "Why use a Language?",
  id: "why-use-a-language",
  level: 2
}, {
  value: "Taking Control of Your Data",
  id: "taking-control-of-your-data",
  level: 2
}, {
  value: "Is it a \u201CTraditional\u201D Computer Language?",
  id: "is-it-a-traditional-computer-language",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D built-in language, consisting of more than 1300 commands, makes 4D a powerful development tool for database applications on desktop computers. You can use the 4D language for many different tasks\u2014from performing simple calculations to creating complex custom user interfaces. For example, you can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Programmatically access any of the record management editors (order by, query, and so on),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Create and print complex reports and labels with the information from the database,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Communicate with other devices,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Send emails,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Manage documents and web pages,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Import and export data between 4D databases and other applications,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Incorporate procedures written in other languages into the 4D programming language.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The flexibility and power of the 4D programming language make it the ideal tool for all levels of users and developers to accomplish a complete range of information management tasks. Novice users can quickly perform calculations. Experienced users without programming experience can customize their databases. Experienced developers can use this powerful programming language to add sophisticated features and capabilities to their databases, including file transfer, communications, monitoring. Developers with programming experience in other languages can add their own commands to the 4D language.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "what-is-a-language"
    }
  }, `What is a Language?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language is not very different from the spoken language we use every day. It is a form of communication used to express ideas, inform, and instruct. Like a spoken language, 4D has its own vocabulary, grammar, and syntax; you use it to tell 4D how to manage your database and data.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You do not need to know everything in the language in order to work effectively with 4D. In order to speak, you do not need to know the entire English language; in fact, you can have a small vocabulary and still be quite eloquent. The 4D language is much the same\u2014you only need to know a small part of the language to become productive, and you can learn the rest as the need arises.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "why-use-a-language"
    }
  }, `Why use a Language?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At first it may seem that there is little need for a programming language in 4D. In the Design environment, 4D provides flexible tools that require no programming to perform a wide variety of data management tasks. Fundamental tasks, such as data entry, queries, sorting, and reporting are handled with ease. In fact, many extra capabilities are available, such as data validation, data entry aids, graphing, and label generation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then why do we need a 4D language? Here are some of its uses:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Automate repetitive tasks: These tasks include data modification, generation of complex reports, and unattended completion of long series of operations.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Control the user interface: You can manage windows and menus, and control forms and interface objects.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Perform sophisticated data management: These tasks include transaction processing, complex data validation, multi-user management, sets, and named selection operations.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Control the computer: You can control serial port communications, document management, and error management.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Create applications: You can create easy-to-use, customized databases that run in the Application environment.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add functionality to the built-in 4D Web server: build and update dynamic web pages filled with your data.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The language lets you take complete control over the design and operation of your database. 4D provides powerful \u201Cgeneric\u201D editors, but the language lets you customize your database to whatever degree you require.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "taking-control-of-your-data"
    }
  }, `Taking Control of Your Data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language lets you take complete control of your data in a powerful and elegant manner. The language is easy enough for a beginner, and sophisticated enough for an experienced application developer. It provides smooth transitions from built-in database functions to a completely customized database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The commands in the 4D language provide access to the standard record management editors. For example, when you use the command, you are presented with the Query Editor (which can be accessed in the Design mode using the Query command in the Records menu. You can tell the command to search for explicitly described data. For example, (`, `[People]`, `;`, `[People]`, `Last Name="Smith") will find all the people named Smith in your database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language is very powerful\u2014one command often replaces hundreds or even thousands of lines of code written in traditional computer languages. Surprisingly enough, with this power comes simplicity\u2014commands have plain English names. For example, to perform a query, you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `QUERY`), ` command; to add a new record, you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ADD RECORD`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The language is designed for you to easily accomplish almost any task. Adding a record, sorting records, searching for data, and similar operations are specified with simple and direct commands. But the language can also control the serial ports, read disk documents, control sophisticated transaction processing, and much more.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language accomplishes even the most sophisticated tasks with relative simplicity. Performing these tasks without using the language would be unimaginable for many.
Even with the language\u2019s powerful commands, some tasks can be complex and difficult. A tool by itself does not make a task possible; the task itself may be challenging and the tool can only ease the process. For example, a word processor makes writing a book faster and easier, but it will not write the book for you. Using the 4D language will make the process of managing your data easier and will allow you to approach complicated tasks with confidence.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "is-it-a-traditional-computer-language"
    }
  }, `Is it a \u201CTraditional\u201D Computer Language?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you are familiar with traditional computer languages, this section may be of interest. If not, you may want to skip it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language is not a traditional computer language. It is one of the most innovative and flexible languages available on a computer today. It is designed to work the way you do, and not the other way around.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To use traditional languages, you must do extensive planning. In fact, planning is one of the major steps in development. 4D allows you to start using the language at any time and in any part of your database. You may start by adding a method to a form, then later add a few more methods. As your database becomes more sophisticated, you might add a project method controlled by a menu. You can use as little or as much of the language as you want. It is not \u201Call or nothing,\u201D as is the case with many other databases.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Traditional languages force you to define and pre-declare objects in formal syntactic terms. In 4D, you simply create an object, such as a button, and use it. 4D automatically manages the object for you. For example, to use a button, you draw it on a form and name it. When the user clicks the button, the language automatically notifies your methods.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Traditional languages are often rigid and inflexible, requiring commands to be entered in a very formal and restrictive style. The 4D language breaks with tradition, and the benefits are yours.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;