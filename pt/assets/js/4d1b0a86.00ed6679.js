exports.id = 83236;
exports.ids = [83236];
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

/***/ 81935:
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
var parameters_exports = {};
__export(parameters_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(parameters_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "parameters",
  title: "Parameters"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/parameters",
  "id": "version-19/Concepts/parameters",
  "title": "Parameters",
  "description": "You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.",
  "source": "@site/versioned_docs/version-19/Concepts/parameters.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/parameters",
  "permalink": "/docs/pt/19/Concepts/parameters",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "parameters",
    "title": "Parameters"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Methods",
    "permalink": "/docs/pt/19/Concepts/methods"
  },
  "next": {
    "title": "Shared objects and collections",
    "permalink": "/docs/pt/19/Concepts/shared"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Named parameters",
  id: "named-parameters",
  level: 2
}, {
  value: "Returned value",
  id: "returned-value",
  level: 3
}, {
  value: "Supported data types",
  id: "supported-data-types",
  level: 3
}, {
  value: "Sequential parameters",
  id: "sequential-parameters",
  level: 2
}, {
  value: "Returned value",
  id: "returned-value-1",
  level: 3
}, {
  value: "Supported data types",
  id: "supported-data-types-1",
  level: 3
}, {
  value: "Parameter indirection (${N})",
  id: "parameter-indirection-n",
  level: 2
}, {
  value: "Using generic parameters",
  id: "using-generic-parameters",
  level: 3
}, {
  value: "Declaring generic parameters",
  id: "declaring-generic-parameters",
  level: 3
}, {
  value: "Declaring parameters for compiled mode",
  id: "declaring-parameters-for-compiled-mode",
  level: 2
}, {
  value: "Wrong parameter type",
  id: "wrong-parameter-type",
  level: 2
}, {
  value: "Input/Output variables",
  id: "inputoutput-variables",
  level: 2
}, {
  value: "Using object properties as named parameters",
  id: "using-object-properties-as-named-parameters",
  level: 2
}, {
  value: "Optional parameters",
  id: "optional-parameters",
  level: 2
}, {
  value: "Values or references",
  id: "values-or-references",
  level: 2
}, {
  value: "Particular cases: objects and collections",
  id: "particular-cases-objects-and-collections",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Parameters`), ` (or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `arguments`), `) are pieces of data that a method or a class function needs in order to perform its task. The terms `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `parameter`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `argument`), ` are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string \u201CHello\u201D is an argument to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT`), ` built-in command:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ALERT("Hello")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parameters are passed to methods or class functions in the same way. For example, if a class function named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getArea()`), ` accepts two parameters, a call to the class function might look like this: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `$area:=$o.getArea(50;100)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Or, if a project method named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING`), ` accepts three parameters, a call to the method might look like this:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `DO_SOMETHING($WithThis;$AndThat;$ThisWay)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The input parameters are separated by semicolons (;). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The same principles are used when methods are executed through dedicated commands, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Data can also be `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `returned`), ` from methods and class functions. For example, the following line is a statement that uses the built-in command, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Length`), `, to return the length of a string. The statement puts the value returned by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Length`), ` in a variable called `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyLength`), `. Here is the statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `MyLength:=Length("How did I get here?")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Any subroutine can return a value. Only one single output parameter can be declared per method or class function.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Input and output values are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#values-or-references"
    }
  }, `evaluated`), ` at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#named-parameters"
    }
  }, `named variables`), ` (recommended in most cases) or`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#sequential-parameters"
    }
  }, `sequentially numbered variables`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Both `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#named-parameters"
    }
  }, `named`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sequential-parameters"
    }
  }, `sequential`), ` syntaxes can be mixed with no restriction to declare parameters. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "named-parameters"
    }
  }, `Named parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Inside called methods or class functions, parameter values are assigned to local variables. You can declare parameters using a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `parameter name`), ` along with a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `parameter type`), `, separated by colon.  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For class functions, parameters are declared along with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function`), ` keyword.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `#DECLARE`), ` keyword at the beginning of the method code.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function getArea($width : Integer; $height : Integer) -> $area : Integer
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following rules apply:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Parameter names must start with a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$`), ` character and be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/19/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Multiple parameters (and types) are separated by semicolons (;). `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Multiline syntaxes are supported (using "`, `\\`, `" character).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, when you call a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getArea()`), ` function with two parameters: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$area:=$o.getArea(50;100)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the class function code, the value of each parameter is copied into the corresponding declared parameter:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the type is not defined, the parameter will be defined as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/variant"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Variant`)), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All 4D method kinds support the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `#DECLARE`), ` keyword, including database methods. For example, in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method, you can declare named parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `    // On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \\
  $BrowserIP : Text; $ServerIP : Text; \\
  $user : Text; $password : Text) \\
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "returned-value"
    }
  }, `Returned value`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Variant; $y : Integer) -> $result : Integer
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also declare the return parameter only by adding `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `: type`), `, in which case it will automatically be available through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#returned-value-1"
    }
  }, `see sequential syntax below`), `). For example: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "supported-data-types"
    }
  }, `Supported data types`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With named parameters, you can use the same data types as those which are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/variables#using-the-var-keyword"
    }
  }, `supported by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `var`), ` keyword`), `, including class objects.  For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sequential-parameters"
    }
  }, `Sequential parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `As an alternative to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#named-parameters"
    }
  }, `named parameters`), ` syntax, you can declare parameters using sequentially numbered variables: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `$1`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `$2`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `$3`), `, and so on. The numbering of the local variables represents the order of the parameters. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Although this syntax is supported by class functions, it is recommended to use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#named-parameters"
    }
  }, `named parameters`), ` syntax in this case.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, when you call a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING`), ` project method with three parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `DO_SOMETHING($WithThis;$AndThat;$ThisWay)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "returned-value-1"
    }
  }, `Returned value`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The value to be returned is automatically put into the local variable `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the following method, called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Uppercase4`), `, returns a string with the first four characters of the string passed to it in uppercase:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following is an example that uses the Uppercase4 method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$NewPhrase:=Uppercase4("This is good.")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, the variable `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$NewPhrase`), ` gets \u201CTHIS is good.\u201D`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The returned value, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), `, is a local variable within the subroutine. It can be used as such within the subroutine. For example, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Do_something
$0:=Uppercase($1)
ALERT($0)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), ` is first assigned the value of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1`), `, then used as parameter to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT`), ` command. Within the subroutine, you can use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), ` in the same way you would use any other local variable. It is 4D that returns the value of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), ` (as it is when the subroutine ends) to the called method.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "supported-data-types-1"
    }
  }, `Supported data types`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use any `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/quick-tour#expression-types"
    }
  }, `expression`), ` as sequential parameter, except:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `tables`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `arrays`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Tables or array expressions can only be passed `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/pointer#pointers-as-parameters-to-methods"
    }
  }, `as reference using a pointer`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "parameter-indirection-n"
    }
  }, `Parameter indirection (\${N})`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D project methods accept a variable number of parameters. You can address those parameters with a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loop, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page259.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Count parameters`)), ` command and the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `parameter indirection syntax`), `. Within the method, an indirection address is formatted `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\${N}`), `, where `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `N`), ` is a numeric expression. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\${N}`), ` is called a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `generic parameter`), `.  `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-generic-parameters"
    }
  }, `Using generic parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the method, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MySum`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+\${$i}
 End for
 $result:=String($sum;$format)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The method's parameters must be passed in the correct order, first the format and then a variable number of values:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\${N}`), ` syntax and extra parameters type is `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/variant"
    }
  }, `Variant`), ` by default (you can declare them using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#declaring-generic-parameters"
    }
  }, `compiler directive`), `). You just need to make sure parameters exist, thanks to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page259.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Count parameters`)), ` command. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
    ALERT("param "+String($i)+" = "+String(\${$i}))
End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This method can be called:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "declaring-generic-parameters"
    }
  }, `Declaring generic parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `As with other local variables, it is not mandatory to declare generic parameters by compiler directive. However, it is recommended to avoid any ambiguity. Non-declared generic parameters automatically get the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/variant"
    }
  }, `Variant`), ` type.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To declare generic parameters, you use a compiler directive to which you pass \${N} as a parameter, where N specifies the first generic parameter.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_TEXT(\${4})
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Declaring generic parameters can only be done with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sequential-parameters"
    }
  }, `sequential syntax`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of text type. $1, $2 and $3 can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type text, even if for you it was, for instance, of the data type Real.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The number in the declaration has to be a constant and not a variable.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "declaring-parameters-for-compiled-mode"
    }
  }, `Declaring parameters for compiled mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Even if it is not mandatory in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/interpreted-compiled"
    }
  }, `interpreted mode`), `, you must declare each parameter in the called methods or functions to prevent any trouble. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#named-parameters"
    }
  }, `named variable syntax`), `, parameters are automatically declared through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `#DECLARE`), ` keyword or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function`), ` prototype. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sequential-parameters"
    }
  }, `sequential variable syntax`), `, you need to make sure all parameters are properly declared. In the following example, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Capitalize`), ` project method accepts a text parameter and returns a text result:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // Capitalize Project Method
  // Capitalize ( Text ) -> Text
  // Capitalize ( Source string ) -> Capitalized string
 
 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `New process`), ` with process methods that accept parameters also require that parameters are explicitely declared in the called method. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This code can be executed in compiled mode only if "foo_method" declares its parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/interpreted-compiled"
    }
  }, `Interpreted and compiled modes`), ` page for more information.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Database methods - For example, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Web Connection Database Method`), ` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#named-parameters"
    }
  }, `named parameters`), ` with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `#DECLARE`), ` keyword. `)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Form objects that accept the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Drag Over`), ` form event - The $0 parameter (Longint), which is the result of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Drag Over`), ` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` The compiler does not initialize the $0 parameter. So, as soon as you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Drag Over`), ` form event, you must initialize $0. For example:`))), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "wrong-parameter-type"
    }
  }, `Wrong parameter type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling a parameter with an wrong type is an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/error-handling"
    }
  }, `error`), ` that prevents correct execution. For example, if you write the following methods:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// method1
#DECLARE($value : Text)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// method2
method1(42) //wrong type, text expected
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This case is handled by 4D depending on the context:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/19/Concepts/interpreted-compiled"
    }
  }, `compiled projects`), `, an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in interpreted projects:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the parameter was declared using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#named-parameters"
    }
  }, `named syntax`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `#DECLARE`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function`), `), an error is generated when the method is called.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the parameter was declared using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#sequential-parameters"
    }
  }, `sequential syntax`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `C_XXX`), `), no error is generated, the called method receives an empty value of the expected type.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "inputoutput-variables"
    }
  }, `Input/Output variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Within the subroutine, you can use the parameters $1, $2... in the same way you would use any other local variable. However, in the case where you use commands that modify the value of the variable passed as parameter (for example `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Find in field`), `), the parameters $1, $2, and so on cannot be used directly. You must first copy them into standard local variables (for example: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$myvar:=$1`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-object-properties-as-named-parameters"
    }
  }, `Using object properties as named parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using objects as parameters allow you to handle `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `named parameters`), `. This programming style is simple, flexible, and easy to read. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CreatePerson`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ChangeAge`), ` method you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This provides a powerful way to define `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#optional-parameters"
    }
  }, `optional parameters`), ` (see also below). To handle missing parameters, you can either:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `check if all expected parameters are provided by comparing them to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Null`), ` value, or`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `preset parameter values, or`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `use them as empty values.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ChangeAge`), ` method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "optional-parameters"
    }
  }, `Optional parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Language Reference`), ` manual, the { } characters (braces) indicate optional parameters. For example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT (message{; okButtonTitle})`), ` means that the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `okButtonTitle`), ` parameter may be omitted when calling the command. You can call it in the following ways:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When optional parameters are needed in your methods, you might also consider using `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#using-objects-properties-as-named-parameters"
    }
  }, `object properties as named parameters`), ` which provide a flexible way to handle variable numbers of parameters.  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Count parameters`), ` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 
 Method($message : Text; $path : Text; $wpArea : Object)
  
 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After this project method has been added to your application, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "values-or-references"
    }
  }, `Values or references`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `resulting value`), ` to the local variables in the class function or subroutine. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `    //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The alert box displayed by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING`), ` will read "WILLIAMS" and the alert box displayed by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MY_METHOD`), ` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[People]Name`), ` passed as parameter by the method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MY_METHOD`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are two ways to make the method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING`), ` change the value of the field:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Rather than passing the field to the method, you pass a pointer to it, so you would write:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here the parameter is not the field, but a pointer to it. Therefore, within the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO SOMETHING`), ` method, $1 is no longer the value of the field but a pointer to the field. The object `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `referenced`), ` by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Rather than having the method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DO_SOMETHING`), ` "doing something," you can rewrite the method so it returns a value. Thus you would write:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This second technique of returning a value by a subroutine is called \u201Cusing a function.\u201D This is described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#returning-values"
    }
  }, `Returning values`), ` paragraph.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "particular-cases-objects-and-collections"
    }
  }, `Particular cases: objects and collections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `pointer`), `). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Consequently, when using such data types as parameters, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1, $2...`), ` do not contain `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `values`), ` but `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `references`), `. Modifying the value of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1, $2...`), ` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/Concepts/pointer#pointers-as-parameters-to-methods"
    }
  }, `pointers`), `, except that `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1, $2...`), ` parameters do not need to be dereferenced in the subroutine.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, consider the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CreatePerson`), ` method that creates an object and sends it as a parameter:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ChangeAge`), ` method adds 10 to the Age attribute of the received object`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you execute the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CreatePerson`), ` method, both alert boxes will read "50" since the same object reference is handled by both methods.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D Server:`), ` When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. In these cases, copies of object and collection parameters are sent instead of references.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;