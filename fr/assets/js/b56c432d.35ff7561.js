exports.id = 39003;
exports.ids = [39003];
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

/***/ 40536:
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
var dt_blob_exports = {};
__export(dt_blob_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(dt_blob_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "blob",
  title: "BLOB"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/blob",
  "id": "Concepts/blob",
  "title": "BLOB",
  "description": "A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.",
  "source": "@site/docs/Concepts/dt_blob.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/blob",
  "permalink": "/docs/fr/next/Concepts/blob",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "blob",
    "title": "BLOB"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Data types overview",
    "permalink": "/docs/fr/next/Concepts/data-types"
  },
  "next": {
    "title": "Boolean",
    "permalink": "/docs/fr/next/Concepts/boolean"
  }
};
const assets = {};
const toc = [{
  value: "Blob Types",
  id: "blob-types",
  level: 2
}, {
  value: "Checking if a variable holds a scalar blob or a <code>4D.Blob</code>",
  id: "checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob",
  level: 2
}, {
  value: "Passing blobs as parameters",
  id: "passing-blobs-as-parameters",
  level: 2
}, {
  value: "Passing blobs and blob objects to 4D commands",
  id: "passing-blobs-and-blob-objects-to-4d-commands",
  level: 3
}, {
  value: "Passing blobs and blob objects to methods",
  id: "passing-blobs-and-blob-objects-to-methods",
  level: 3
}, {
  value: "Passing a scalar blob by reference using a pointer",
  id: "passing-a-scalar-blob-by-reference-using-a-pointer",
  level: 3
}, {
  value: "Assigning a blob variable to another",
  id: "assigning-a-blob-variable-to-another",
  level: 2
}, {
  value: "Automatic conversion of blob type",
  id: "automatic-conversion-of-blob-type",
  level: 2
}, {
  value: "Modifying a scalar blob",
  id: "modifying-a-scalar-blob",
  level: 2
}, {
  value: "Individually accessing bytes in a blob",
  id: "individually-accessing-bytes-in-a-blob",
  level: 2
}, {
  value: "Accessing a scalar blob&#39;s bytes",
  id: "accessing-a-scalar-blobs-bytes",
  level: 4
}, {
  value: "Accessing a <code>4D.Blob</code>&#39;s bytes",
  id: "accessing-a-4dblobs-bytes",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob field is loaded into memory from the disk, like the rest of the record to which it belongs.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Like other field types that can retain a large amount of data (such as the Picture field type), Blob fields are not duplicated in memory when you modify a record. Consequently, the result returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Old`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Modified`), ` commands is not significant when applied to a Blob field.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "blob-types"
    }
  }, `Blob Types`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the 4D language, there are two ways to handle a blob:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `as a scalar value`), `: a blob can be stored in a Blob variable or field and altered.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `as an object (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `4D.Blob`), `)`), `: a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D.Blob`), ` is a blob object. You can encapsulate a blob or part of it in a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D.Blob`), ` without altering the original blob. This method is called `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing"
    }
  }, `boxing`), `. For more info on how to instantiate a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D.Blob`), `, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/next/API/BlobClass"
    }
  }, `Blob Class`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each blob type has its advantages. Use the following table to determine which one suits your needs:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Blob`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `4D.Blob`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Alterable`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `No`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Shareable in objects and collections`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Passed by reference`, `*`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Performance when accessing bytes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `+`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `-`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `2GB`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `Memory`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `*`, `Unlike the 4D commands designed to take a scalar blob as a parameter, passing a scalar blob to a method duplicates it in memory. When working with methods, using blob objects (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), `) is more efficient, as they are passed by reference.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `By default, 4D sets the maximum size of scalar blobs to 2GB, but this size limit may be lower depending on your OS and how much space is available.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You cannot use operators on blobs.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "checking-if-a-variable-holds-a-scalar-blob-or-a-4dblob"
    }
  }, `Checking if a variable holds a scalar blob or a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h2"
  }, `4D.Blob`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page1509.html"
    }
  }, `Value type`), ` command to determine if a value is of type Blob or Object.
To check that an object is a blob object (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), `), use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page1731.html"
    }
  }, `OB instance of`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myBlob: Blob
var $myBlobObject: 4D.Blob
$myBlobObject:=4D.Blob.new()

$type:= Value type($myblobObject) // 38 (object)
$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  //True
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "passing-blobs-as-parameters"
    }
  }, `Passing blobs as parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Scalar blobs and blob objects can be passed as parameters to 4D commands or plug-in routines that expect blob parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "passing-blobs-and-blob-objects-to-4d-commands"
    }
  }, `Passing blobs and blob objects to 4D commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can pass a scalar blob or a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` to any 4D command that takes a blob as a parameter:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text( $myBlob ; UTF8 text without length )
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some 4D commands alter the original blob, and thus do not support the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` type:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page560.html"
    }
  }, `DELETE FROM BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page559.html"
    }
  }, `INSERT IN BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page548.html"
    }
  }, `INTEGER TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page550.html"
    }
  }, `LONGINT TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page552.html"
    }
  }, `REAL TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page606.html"
    }
  }, `SET BLOB SIZE`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page554.html"
    }
  }, `TEXT TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page532.html"
    }
  }, `VARIABLE TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page556.html"
    }
  }, `LIST TO BLOB`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page782.html"
    }
  }, `SOAP DECLARATION`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page777.html"
    }
  }, `WEB SERVICE SET PARAMETER`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "passing-blobs-and-blob-objects-to-methods"
    }
  }, `Passing blobs and blob objects to methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can pass blobs and blob objects (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), `) to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "passing-a-scalar-blob-by-reference-using-a-pointer"
    }
  }, `Passing a scalar blob by reference using a pointer`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To pass a scalar blob to your own methods without duplicating it in memory, define a pointer to the variable that stores it and pass the pointer as a parameter.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Examples:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Declare a variable of type Blob
var $myBlobVar: Blob
// Pass the blob as parameter to a 4D command
 SET BLOB SIZE($myBlobVar;1024*1024)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Pass the blob as parameter to an external routine
 $errCode:=Do Something With This blob($myBlobVar)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Pass the blob as a parameter to a method that returns a blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Pass a pointer to the blob as a parameter to your own method,
COMPUTE BLOB(->$myBlobVar)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note for Plug-in developers:`), ` A BLOB parameter is declared as \u201C&O\u201D (the letter \u201CO\u201D, not the digit \u201C0\u201D).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "assigning-a-blob-variable-to-another"
    }
  }, `Assigning a blob variable to another`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign a Blob variable to another:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Example:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Declare two variables of type Blob
 var $vBlobA; $vBlobB : Blob
// Set the size of the first blob to 10K
 SET BLOB SIZE($vBlobA;10*1024)
// Assign the first blob to the second one
 $vBlobB:=$vBlobA
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "automatic-conversion-of-blob-type"
    }
  }, `Automatic conversion of blob type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Create a variable of type Blob and an object variable
var $myBlob: Blob
var $myObject : Object

// Assign that blob to a property of $myObject named "blob"
$myObject:=New object("blob"; $myBlob)

// The blob stored in $myBlob is automatically converted to a 4D.Blob
$type:= OB Instance of($myObject.blob; 4D.Blob)  //True

// Conversion from 4D.Blob to Blob
$myBlob:= $myObject.blob
$type:= Value type($myBlob) // Blob
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When converting a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` to a scalar blob, if the size of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty.
For example, when the maximum size for scalar blobs is 2GB, if you convert a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` of 2.5GB to a scalar blob, you obtain an empty blob.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "modifying-a-scalar-blob"
    }
  }, `Modifying a scalar blob`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Unlike blob objects, scalar blobs can be altered. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "individually-accessing-bytes-in-a-blob"
    }
  }, `Individually accessing bytes in a blob`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "accessing-a-scalar-blobs-bytes"
    }
  }, `Accessing a scalar blob's bytes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can access individual bytes of a scalar blob using curly brackets `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `{}`), `. Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // Declare a variable of type Blob
 var $vBlob : Blob
  // Set the size of the blob to 256 bytes
 SET BLOB SIZE($vBlob;256)
  // The following code loops through the blob to set each byte to zero
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or field.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "accessing-a-4dblobs-bytes"
    }
  }, `Accessing a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `4D.Blob`), `'s bytes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use square brackets `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[]`), ` to directly access a specific byte in a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myBlob: 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$myText:= BLOB to text ( $myBlob ; UTF8 text without length )
$byte:=$myBlob[5]
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` cannot be altered, you can read the bytes of a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Blob`), ` using this syntax, but not modify them.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;