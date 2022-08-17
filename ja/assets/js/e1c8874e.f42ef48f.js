exports.id = 27426;
exports.ids = [27426];
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

/***/ 5231:
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
var methods_exports = {};
__export(methods_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(methods_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "methods",
  title: "Methods"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/methods",
  "id": "version-19/Concepts/methods",
  "title": "Methods",
  "description": "A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).",
  "source": "@site/versioned_docs/version-19/Concepts/methods.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/methods",
  "permalink": "/docs/ja/19/Concepts/methods",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "methods",
    "title": "Methods"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Arrays",
    "permalink": "/docs/ja/19/Concepts/arrays"
  },
  "next": {
    "title": "Parameters",
    "permalink": "/docs/ja/19/Concepts/parameters"
  }
};
const assets = {};
const toc = [{
  value: "Method Types",
  id: "method-types",
  level: 2
}, {
  value: "Calling Project Methods",
  id: "calling-project-methods",
  level: 2
}, {
  value: "Subroutines",
  id: "subroutines",
  level: 3
}, {
  value: "Object formulas",
  id: "object-formulas",
  level: 3
}, {
  value: "Menu Methods",
  id: "menu-methods",
  level: 3
}, {
  value: "Process Methods",
  id: "process-methods",
  level: 3
}, {
  value: "Event and Error catching Methods",
  id: "event-and-error-catching-methods",
  level: 3
}, {
  value: "Recursive Project Methods",
  id: "recursive-project-methods",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.	 `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "method-types"
    }
  }, `Method Types`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the 4D Language, there are several categories of methods. The category depends on how they can be called:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Calling context`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Accepts parameters`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
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
  }, `Project method`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `On demand, when the project method name is called (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#calling-project-methods"
    }
  }, `Calling project methods`), `)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Object (widget) method`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic, when an event involves the object to which the method is attached`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property of a form object (also called widget)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Form method`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic, when an event involves the form to which the method is attached`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Trigger`), ` (aka `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `Table method`), `)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property of a table. Triggers are methods that can prevent \u201Cillegal\u201D operations with the records of your database.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Database method`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Automatic, when a working session event occurs`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes (predefined)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `There are 16 database methods in 4D. See Database methods section`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D Language also supports `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Class functions`), `, that can be called in the context of an object instance. Class functions can be built-in (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `e.g.`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `collection.orderBy()`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save()`), `), or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/Concepts/classes#class-function"
    }
  }, `created by the 4D developer`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "calling-project-methods"
    }
  }, `Calling Project Methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A project method can have one of the following roles, depending on how it is executed and used:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Subroutine`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Object formula `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Menu method`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Process method`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Event or Error catching method`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "subroutines"
    }
  }, `Subroutines`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D\u2019s built-in commands. A project method used in this way is called a subroutine.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use subroutines to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Reduce repetitive coding`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Clarify your methods`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Facilitate changes to your methods`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Modularize your code`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, let\u2019s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you do not use subroutines, you will have to write the code each time you want to modify a customer\u2019s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines\u2014to reduce the amount of code.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the previously described code was a method called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MODIFY_CUSTOMER`), `, you would execute it simply by using the name of the method in another method. For example, to modify a customer\u2019s record and then print the record, you would write this method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This capability simplifies your methods dramatically. In the example, you do not need to know how the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MODIFY_CUSTOMER`), ` method works, just what it does. This is the second reason for using subroutines\u2014to clarify your methods. In this way, your methods become extensions to the 4D language.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines\u2014to facilitate changes to your methods.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Even for someone who doesn\u2019t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "object-formulas"
    }
  }, `Object formulas`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can encapsulate your project methods in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `formula`), ` objects and call them from your objects.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To execute a method stored in an object property, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `( )`), ` operator after the property name. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//myAlert
ALERT("Hello world!")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myAlert`), ` can be encapsulated in any object and called:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Syntax with brackets is also supported:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$o["custom_Alert"]() //displays "Hello world!"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/Concepts/parameters"
    }
  }, `pass parameters`), ` to your formula when you call it by using $1, $2\u2026 just like with 4D project methods:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can encapsulate `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `fullName`), ` in an object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Combined with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), `function, such object methods allow writing powerful generic code. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then the method acts like a new, calculated attribute that can be added to other attributes:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$o:=$f.message //returns the formula object in $o
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "menu-methods"
    }
  }, `Menu Methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ADD RECORD`), ` command until the user cancels the data entry activity.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "process-methods"
    }
  }, `Process Methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `process method`), ` is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Start a New Process`), ` property is also the process method for the newly started process.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "event-and-error-catching-methods"
    }
  }, `Event and Error catching Methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `event catching method`), ` runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON EVENT CALL`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `error catching method`), ` is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON ERR CALL`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "recursive-project-methods"
    }
  }, `Recursive Project Methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Project methods can call themselves. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The method A may call the method B which may call A, so A will call B again and so on.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A method can call itself.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This is called recursion. The 4D language fully supports recursion.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is an example. Let\u2019s say you have a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Friends and Relatives]`), ` table composed of this extremely simplified set of fields:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `[Friends and Relatives]Name`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `[Friends and Relatives]ChildrensName`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence \u201CA friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!\u201D:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `You can build the sentence in this way:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `You can also build it this way:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `with the recursive function `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Genealogy of`), ` listed here:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  \` Genealogy of project method
  \` Genealogy of ( String ) -> Text
  \` Genealogy of ( Name ) -> Part of sentence
 
 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Genealogy of`), ` method which calls itself.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The first way is an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `iterative algorithm`), `. The second way is a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `recursive algorithm`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some typical uses of recursion in 4D are:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Treating records within tables that relate to each other in the same way as in the example.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Browsing documents and folders on your disk, using the commands `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `FOLDER LIST`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DOCUMENT LIST`), `. A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Important:`), ` Recursive calls should always end at some point. In the example, the method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Genealogy of`), ` stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a \u201CStack Full\u201D error becuase it would no longer have space to \u201Cpile up\u201D the calls (as well as parameters and local variables used in the method).`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;