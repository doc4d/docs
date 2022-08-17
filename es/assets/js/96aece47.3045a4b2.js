exports.id = 17593;
exports.ids = [17593];
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

/***/ 39021:
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
var identifiers_exports = {};
__export(identifiers_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(identifiers_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "identifiers",
  title: "Identifiers"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/identifiers",
  "id": "version-18/Concepts/identifiers",
  "title": "Identifiers",
  "description": "This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).",
  "source": "@site/versioned_docs/version-18/Concepts/identifiers.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/identifiers",
  "permalink": "/docs/es/18/Concepts/identifiers",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "identifiers",
    "title": "Identifiers"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Plug-ins",
    "permalink": "/docs/es/18/Concepts/plug-ins"
  },
  "next": {
    "title": "Overview",
    "permalink": "/docs/es/18/Project/overview"
  }
};
const assets = {};
const toc = [{
  value: "Basic Rules",
  id: "basic-rules",
  level: 2
}, {
  value: "Additional rules for object property and ORDA names",
  id: "additional-rules-for-object-property-and-orda-names",
  level: 3
}, {
  value: "Additional rules for SQL",
  id: "additional-rules-for-sql",
  level: 3
}, {
  value: "Tables",
  id: "tables",
  level: 2
}, {
  value: "Fields",
  id: "fields",
  level: 2
}, {
  value: "Interprocess Variables",
  id: "interprocess-variables",
  level: 2
}, {
  value: "Process Variables",
  id: "process-variables",
  level: 2
}, {
  value: "Local Variables",
  id: "local-variables",
  level: 2
}, {
  value: "Arrays",
  id: "arrays",
  level: 2
}, {
  value: "Interprocess Arrays",
  id: "interprocess-arrays",
  level: 3
}, {
  value: "Process Arrays",
  id: "process-arrays",
  level: 3
}, {
  value: "Local Arrays",
  id: "local-arrays",
  level: 3
}, {
  value: "Elements of arrays",
  id: "elements-of-arrays",
  level: 3
}, {
  value: "Elements of two-dimensional arrays",
  id: "elements-of-two-dimensional-arrays",
  level: 3
}, {
  value: "Object attributes",
  id: "object-attributes",
  level: 2
}, {
  value: "Forms",
  id: "forms",
  level: 2
}, {
  value: "Form objects",
  id: "form-objects",
  level: 2
}, {
  value: "Project methods",
  id: "project-methods",
  level: 2
}, {
  value: "Plug-In Commands",
  id: "plug-in-commands",
  level: 2
}, {
  value: "Sets",
  id: "sets",
  level: 2
}, {
  value: "Interprocess Sets",
  id: "interprocess-sets",
  level: 3
}, {
  value: "Process Sets",
  id: "process-sets",
  level: 3
}, {
  value: "Client Sets",
  id: "client-sets",
  level: 3
}, {
  value: "Named Selections",
  id: "named-selections",
  level: 2
}, {
  value: "Interprocess Named Selections",
  id: "interprocess-named-selections",
  level: 3
}, {
  value: "Process Named Selections",
  id: "process-named-selections",
  level: 3
}, {
  value: "Processes",
  id: "processes",
  level: 2
}, {
  value: "Global Processes",
  id: "global-processes",
  level: 3
}, {
  value: "Local Processes",
  id: "local-processes",
  level: 3
}, {
  value: "Summary of Naming Conventions",
  id: "summary-of-naming-conventions",
  level: 2
}, {
  value: "Resolving Naming Conflicts",
  id: "resolving-naming-conflicts",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This section describes the conventions and rules for naming various elements in the 4D language (variables, tables, objects, forms, etc.).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "basic-rules"
    }
  }, `Basic Rules`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following rules apply for all 4D frameworks.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A name must begin with an alphabetic character, an underscore, or a dollar ("$") (note that a dollar sign can denote a local element, see below).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Thereafter, the name can include alphabetic characters, numeric characters, the space character, and the underscore character ("_").`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Periods (".") and brackets ("`, `[ ]`, `") are not allowed in table, field, method, or variable names.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Commas, slashes, quotation marks, and colons are not allowed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Characters reserved for use as operators, such as * and +, are not allowed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Do not use reserved names, i.e. 4D command names (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Date`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Time`), `, etc), keywords (If, For, etc.), and constants.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any trailing spaces are ignored.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "additional-rules-for-object-property-and-orda-names"
    }
  }, `Additional rules for object property and ORDA names`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Space characters are not allowed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Periods (".") and brackets ("`, `[ ]`, `") are not allowed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Names are case sensitive.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "additional-rules-for-sql"
    }
  }, `Additional rules for SQL`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Only the characters _0123456789abcdefghijklmnopqrstuvwxyz are accepted`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Names must not include any SQL keywords (command, attribute, etc.).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` The "SQL" area of the Inspector in the Structure editor automatically indicates any unauthorized characters in the name of a table or field.  `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "tables"
    }
  }, `Tables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a table by placing its name between brackets: `, `[...]`, `. A table name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "fields"
    }
  }, `Fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a field by first specifying the table to which it belongs. The field name immediately follows the table name. A field name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "interprocess-variables"
    }
  }, `Interprocess Variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate an interprocess variable by preceding the name of the variable with the symbols (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), `) \u2014 a \u201Cless than\u201D sign followed by a \u201Cgreater than\u201D sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of an interprocess variable can be up to 31 characters, not including the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "process-variables"
    }
  }, `Process Variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a process variable by using its name (which cannot start with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols nor the dollar sign $). A process variable name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "local-variables"
    }
  }, `Local Variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a local variable by placing a dollar sign ($) before the variable name. A local variable name can contain up to 31 characters, not including the dollar sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hello there"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "arrays"
    }
  }, `Arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate an array by using its name, which is the name you pass to an array declaration (such as ARRAY LONGINT) when you create the array. Arrays are variables, and from the scope point of view, like variables, there are three different types of arrays:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Interprocess arrays,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Process arrays,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Local arrays.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "interprocess-arrays"
    }
  }, `Interprocess Arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of an interprocess array is preceded by the symbols (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), `) \u2014 a \u201Cless than\u201D sign followed by a \u201Cgreater than\u201D sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An interprocess array name can contain up to 31 characters, not including the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "process-arrays"
    }
  }, `Process Arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a process array by using its name (which cannot start with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols nor the dollar sign $). A process array name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "local-arrays"
    }
  }, `Local Arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a local array is preceded by the dollar sign ($). A local array name can contain up to 31 characters, not including the dollar sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "elements-of-arrays"
    }
  }, `Elements of arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You reference an element of an interprocess, process or local array by using the curly braces("{ }"). The element referenced is denoted by a numeric expression.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Addressing an element of an interprocess array
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

 //Addressing an element of a process array
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

 //Addressing an element of a local array
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "elements-of-two-dimensional-arrays"
    }
  }, `Elements of two-dimensional arrays`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You reference an element of a two-dimensional array by using the curly braces ({\u2026}) twice. The element referenced is denoted by two numeric expressions in two sets of curly braces.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Addressing an element of a two-dimensional interprocess array
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional process array
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Addressing an element of a two-dimensional local array
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "object-attributes"
    }
  }, `Object attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. An attribute name can contain up to 255 characters and is case sensitive.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Additional rules apply to object attribute names (they must conform to the ECMAScript specification). For more information, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/Concepts/object#object-property-identifiers"
    }
  }, `Object property identifiers`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "forms"
    }
  }, `Forms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a form by using a string expression that represents its name. A form name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "form-objects"
    }
  }, `Form objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a form object by passing its name as a string, preceded by the * parameter. A form object name can contain up to 255 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `OBJECT SET FONT(*;"Binfo";"Times")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Do not confuse form objects (buttons, list boxes, variables that can be entered, etc.) and objects in the 4D language. 4D language objects are created and manipulated via object notation or dedicated commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "project-methods"
    }
  }, `Project methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a project method (procedure or function) by using its name. A method name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` A project method that does not return a result is also called a procedure. A project method that returns a result is also called a function.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` It is a good programming technique to adopt the same naming convention as the one used by 4D for built-in methods. Use uppercase characters for naming your methods; however if a method is a function, capitalize the first character of its name. By doing so, when you reopen a database for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` When you call a method, you just type its name. However, some 4D built-in commands, such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON EVENT CALL`), `, as well as all the Plug-In commands, expect the name of a method as a string when a method parameter is passed. Example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //This command expects a method (function) or formula
QUERY BY FORMULA([aTable];Special query)
 //This command expects a method (procedure) or statement
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //But this command expects a method name
ON EVENT CALL("HANDLE EVENTS")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Project methods can accept parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,\u2026, $n. In addition, multiple consecutive (and last) parameters can be addressed with the syntax \${n}where n, numeric expression, is the number of the parameter.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Inside a function, the $0 local variable contains the value to be returned.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Within DROP SPACES $1 is a pointer to the field [People]Name
DROP SPACES(->[People]Name)

 //Within Calc creator:
 //- $1 is numeric and equal to 1
 //- $2 is numeric and equal to 5
 //- $3 is text or string and equal to "Nice"
 //- The result value is assigned to $0
$vsResult:=Calc creator(1;5;"Nice")

 //Within Dump:
 //- The three parameters are text or string
 //- They can be addressed as $1, $2 or $3
 //- They can also be addressed as, for instance, \${$vlParam} where $vlParam is 1, 2 or 3
 //- The result value is assigned to $0
vtClone:=Dump("is";"the";"it")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "plug-in-commands"
    }
  }, `Plug-In Commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You designate a plug-in command by using its name as defined by the plug-in. A plug-in command name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$error:=SMTP_From($smtp_id;"henry@gmail.com")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sets"
    }
  }, `Sets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `From the scope point of view, there are two types of sets:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Interprocess sets`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Process sets`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D Server also includes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Client sets`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "interprocess-sets"
    }
  }, `Interprocess Sets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A set is an interprocess set if the name of the set is preceded by the symbols (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), `) \u2014 a \u201Cless than\u201D sign followed by a \u201Cgreater than\u201D sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An interprocess set name can contain up to 255 characters, not including the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "process-sets"
    }
  }, `Process Sets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You denote a process set by using a string expression that represents its name (which cannot start with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols or the dollar sign $). A set name can contain up to 255 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "client-sets"
    }
  }, `Client Sets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a client set is preceded by the dollar sign ($). A client set name can contain up to 255 characters, not including the dollar sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Sets are maintained on the Server machine. In certain cases, for efficiency or special purposes, you may need to work with sets locally on the Client machine. To do so, you use Client sets.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Interprocess sets
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Process sets
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Client sets
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "named-selections"
    }
  }, `Named Selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `From the scope point of view, there are two types of named selections:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Interprocess named selections`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Process named selections.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "interprocess-named-selections"
    }
  }, `Interprocess Named Selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A named selection is an interprocess named selection if its name is preceded by the symbols (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), `) \u2014 a \u201Cless than\u201D sign followed by a \u201Cgreater than\u201D sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An interprocess named selection name can contain up to 255 characters, not including the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "process-named-selections"
    }
  }, `Process Named Selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You denote a process named selection by using a string expression that represents its name (which cannot start with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), ` symbols nor the dollar sign $). A named selection name can contain up to 255 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Interprocess Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Process Named Selection
USE NAMED SELECTION([Customers];"<>ByZipcode")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "processes"
    }
  }, `Processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the single-user version, or in Client/Server on the Client side, there are two types of processes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Global processes`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Local processes.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "global-processes"
    }
  }, `Global Processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You denote a global process by using a string expression that represents its name (which cannot start with the dollar sign $). A process name can contain up to 255 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "local-processes"
    }
  }, `Local Processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You denote a local process if the name of the process is preceded by a dollar ($) sign. The process name can contain up to 255 characters, not including the dollar sign.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` //Starting the global process "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Starting the local process "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "summary-of-naming-conventions"
    }
  }, `Summary of Naming Conventions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table summarizes 4D naming conventions.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identifier`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Max. Length`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Table`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[Invoices]`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Field`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[Employees]`, `Last Name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Interprocess Variable/Array`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<>`), ` + 31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<>vlNextProcessID`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Process Variable/Array`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `vsCurrentName`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Local Variable/Array`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$ + 31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$vlLocalCounter`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object attribute`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$o.myAttribute`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Form`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"My Custom Web Input"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Form object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"MyButton"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Project method`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `M_ADD_CUSTOMERS`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Plug-in Routine`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `31`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `PDF SET ROTATION`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Interprocess Set`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<>`), ` + 255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `"<>Records to be Archived"`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Process Set`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"Current selected records"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Client Set`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$ + 255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"$Previous Subjects"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Named Selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"Employees A to Z"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Interprocess Named Selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<>`), ` + 255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `"<>Employees Z to A"`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Local Process`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$ + 255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"$Follow Events"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Global Process`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `P_INVOICES_MODULE`), `"`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Semaphore`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `255`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"mysemaphore"`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "resolving-naming-conflicts"
    }
  }, `Resolving Naming Conflicts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Be sure to use unique names for the different elements in your database. If a particular object has the same name as another object of a different type (for example, if a field is named Person and a variable is also named Person), 4D uses a priority system.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D identifies names used in procedures in the following order:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Fields`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Commands`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Methods`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Plug-in routines`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Predefined constants`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Variables.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, 4D has a built-in command called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Date`), `. If you named a method `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Date`), `, 4D would recognize it as the built-in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Date`), ` command, and not as your method. This would prevent you from calling your method. If, however, you named a field \u201CDate\u201D, 4D would try to use your field instead of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Date`), ` command.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;