exports.id = 51554;
exports.ids = [51554];
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

/***/ 8929:
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
var tags_exports = {};
__export(tags_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(tags_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "tags",
  slug: "tags",
  title: "Transformation tags"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Tags/tags",
  "id": "version-19-R6/Tags/tags",
  "title": "Transformation tags",
  "description": '4D provides a set of transformation tags which allow you to insert references to 4D variables or expressions, or to perform different types of processing within a source text, referred to as a "template". These tags are interpreted when the source text is executed and generate an output text.',
  "source": "@site/versioned_docs/version-19-R6/Tags/tags.md",
  "sourceDirName": "Tags",
  "slug": "/Tags/tags",
  "permalink": "/docs/fr/Tags/tags",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "tags",
    "slug": "tags",
    "title": "Transformation tags"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Creating and using macros",
    "permalink": "/docs/fr/code-editor/creating-using-macros"
  },
  "next": {
    "title": "Basics",
    "permalink": "/docs/fr/Debugging/basics"
  }
};
const assets = {};
const toc = [{
  value: "Principles for using tags",
  id: "principles-for-using-tags",
  level: 2
}, {
  value: "Parsing",
  id: "parsing",
  level: 3
}, {
  value: "Recursive processing",
  id: "recursive-processing",
  level: 3
}, {
  value: "Identifiers with tokens",
  id: "identifiers-with-tokens",
  level: 3
}, {
  value: "Using the &quot;.&quot; as decimal separator",
  id: "using-the--as-decimal-separator",
  level: 3
}, {
  value: "4DBASE",
  id: "4dbase",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DBASE folderPath--&gt;</code>",
  id: "syntax---4dbase-folderpath--",
  level: 4
}, {
  value: "4DCODE",
  id: "4dcode",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DCODE codeLines--&gt;</code>",
  id: "syntax---4dcode-codelines--",
  level: 4
}, {
  value: "4DEACH and 4DENDEACH",
  id: "4deach-and-4dendeach",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DEACH variable in expression--&gt;</code> <code>&lt;!--#4DENDEACH--&gt;</code>",
  id: "syntax---4deach-variable-in-expression-----4dendeach--",
  level: 4
}, {
  value: "<code>&lt;!--#4DEACH item in collection--&gt;</code>",
  id: "--4deach-item-in-collection--",
  level: 3
}, {
  value: "Example with a collection of scalar values",
  id: "example-with-a-collection-of-scalar-values",
  level: 4
}, {
  value: "Example with a collection of objects",
  id: "example-with-a-collection-of-objects",
  level: 4
}, {
  value: "<code>&lt;!--#4DEACH entity in entitySelection--&gt;</code>",
  id: "--4deach-entity-in-entityselection--",
  level: 3
}, {
  value: "Example with a html table",
  id: "example-with-a-html-table",
  level: 4
}, {
  value: "Example with <code>PROCESS 4D TAGS</code>",
  id: "example-with-process-4d-tags",
  level: 4
}, {
  value: "<code>&lt;!--#4DEACH property in object--&gt;</code>",
  id: "--4deach-property-in-object--",
  level: 3
}, {
  value: "Example with the properties of an object",
  id: "example-with-the-properties-of-an-object",
  level: 4
}, {
  value: "4DEVAL",
  id: "4deval",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DEVAL expression--&gt;</code>",
  id: "syntax---4deval-expression--",
  level: 4
}, {
  value: "Alternative syntax: <code>$4DEVAL(expression)</code>",
  id: "alternative-syntax-4devalexpression",
  level: 4
}, {
  value: "4DHTML",
  id: "4dhtml",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DHTML expression--&gt;</code>",
  id: "syntax---4dhtml-expression--",
  level: 4
}, {
  value: "Alternative syntax: <code>$4DHTML(expression)</code>",
  id: "alternative-syntax-4dhtmlexpression",
  level: 4
}, {
  value: "4DIF, 4DELSE, 4DELSEIF and 4DENDIF",
  id: "4dif-4delse-4delseif-and-4dendif",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DIF expression--&gt;</code> {<code>&lt;!--#4DELSEIF expression2--&gt;...&lt;!--#4DELSEIF expressionN--&gt;</code>} {<code>&lt;!--#4DELSE--&gt;</code>} <code>&lt;!--#4DENDIF--&gt;</code>",
  id: "syntax---4dif-expression-----4delseif-expression2----4delseif-expressionn-----4delse-----4dendif--",
  level: 4
}, {
  value: "4DINCLUDE",
  id: "4dinclude",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DINCLUDE path--&gt;</code>",
  id: "syntax---4dinclude-path--",
  level: 4
}, {
  value: "4DLOOP and 4DENDLOOP",
  id: "4dloop-and-4dendloop",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DLOOP condition--&gt;</code> <code>&lt;!--#4DENDLOOP--&gt;</code>",
  id: "syntax---4dloop-condition-----4dendloop--",
  level: 4
}, {
  value: "<code>&lt;!--#4DLOOP [table]--&gt;</code>",
  id: "--4dloop-table--",
  level: 3
}, {
  value: "<code>&lt;!--#4DLOOP array--&gt;</code>",
  id: "--4dloop-array--",
  level: 3
}, {
  value: "<code>&lt;!--#4DLOOP method--&gt;</code>",
  id: "--4dloop-method--",
  level: 3
}, {
  value: "<code>&lt;!--#4DLOOP expression--&gt;</code>",
  id: "--4dloop-expression--",
  level: 3
}, {
  value: "<code>&lt;!--#4DLOOP pointerArray--&gt;</code>",
  id: "--4dloop-pointerarray--",
  level: 3
}, {
  value: "4DSCRIPT/",
  id: "4dscript",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DSCRIPT/MethodName/MyParam--&gt;</code>",
  id: "syntax---4dscriptmethodnamemyparam--",
  level: 4
}, {
  value: "4DTEXT",
  id: "4dtext",
  level: 2
}, {
  value: "Syntax: <code>&lt;!--#4DTEXT expression--&gt;</code>",
  id: "syntax---4dtext-expression--",
  level: 4
}, {
  value: "Alternative syntax: <code>$4DTEXT(expression)</code>",
  id: "alternative-syntax-4dtextexpression",
  level: 4
}, {
  value: "Alternative syntax for 4DTEXT, 4DHTML, 4DEVAL",
  id: "alternative-syntax-for-4dtext-4dhtml-4deval",
  level: 2
}, {
  value: "$4dtag (expression)",
  id: "4dtag-expression",
  level: 4
}, {
  value: "<code>&lt;!--#4dtag expression--&gt;</code>",
  id: "--4dtag-expression--",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides a set of transformation tags which allow you to insert references to 4D variables or expressions, or to perform different types of processing within a source text, referred to as a "template". These tags are interpreted when the source text is executed and generate an output text.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This principle is used in particular by the 4D Web server to build `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/WebServer/templates"
    }
  }, `web template pages`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These tags are generally to be inserted as HTML type comments (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#Tag Contents-->`), `) but an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alternative-syntax-for-4dtext-4dhtml-4deval"
    }
  }, `xml-compliant alternative syntax`), ` is available for some of them.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is possible to mix several types of tags. For example, the following HTML structure is entirely feasible:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "principles-for-using-tags"
    }
  }, `Principles for using tags`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "parsing"
    }
  }, `Parsing`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parsing the contents of a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `template`), ` source is done in two contexts:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PROCESS 4D TAGS`), ` command; this command accepts a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `template`), ` as input, as well as optional parameters and returns a text resulting from the processing.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using 4D's integrated HTTP server: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/WebServer/templates"
    }
  }, `template pages`), ` sent by means of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND FILE`), ` (.htm, .html, .shtm, .shtml), `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND BLOB`), ` (text/html type BLOB), `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND TEXT`), ` commands, or called using URLs. In this last case, for reasons of optimization, pages that are suffixed with \u201C.htm\u201D and \u201C.html\u201D are NOT parsed. In order to parse HTML pages in this case, you must add the suffix \u201C.shtm\u201D or \u201C.shtml\u201D (for example, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://www.server.com/dir/page.shtm"
    }
  }, `http://www.server.com/dir/page.shtm`), `).`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "recursive-processing"
    }
  }, `Recursive processing`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D tags are interpreted recursively: 4D always attempts to reinterpret the result of a transformation and, if a new transformation has taken place, an additional interpretation is performed, and so on until the product obtained no longer requires any further transformation. For example, given the following statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DHTML [Mail]Letter_type-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Mail]Letter_type`), ` text field itself contains a tag, for example `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DSCRIPT/m_Gender-->`), `, this tag will be evaluated recursively after the interpretation of the 4DHTML tag.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This powerful principle meets most needs related to text transformation. Note, however, that in some cases this can also allow malicious code to be inserted in the web context, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/WebServer/templates#prevention-of-malicious-code-insertion"
    }
  }, `which can be avoided`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "identifiers-with-tokens"
    }
  }, `Identifiers with tokens`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To ensure the correct evaluation of expressions processed via tags, regardless of the language or 4D version, it's recommended to use the tokenized syntax for elements whose name may vary over versions (commands, tables, fields, constants). For example, to insert the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current time`), ` command, enter `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current time:C178`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the--as-decimal-separator"
    }
  }, `Using the "." as decimal separator`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D always uses the period character (.) as a decimal separator when evaluating a numerical expression using a 4D tag `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DHTML`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DEVAL`), `. Regional settings are ignored. This feature facilitates code maintenance and compatibility between 4D languages and versions.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dbase"
    }
  }, `4DBASE`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dbase-folderpath--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DBASE folderPath-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DBASE -->`), ` tag designates the working directory to be used by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE-->`), ` tag.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When it is called in a Web page, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DBASE -->`), ` tag modifies all subsequent `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE-->`), ` calls on this page, until the next `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--........-->, if any. If the`), `\` folder is modified from within an included file, it retrieves its original value from the parent file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `folderPath`), ` parameter must contain a pathname relative to the current page and it must end with a slash (/). The designated folder must be located inside the Web folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Pass the "WEBFOLDER" keyword to restore the default path (relative to the page).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code, which must specify a relative path for each call:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DINCLUDE subpage.html--> 
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... is equivalent to:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DINCLUDE subpage.html--> 
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, to set a directory for the home page:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the "head.html" file, the current folder is modified through `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DBASE -->`), `, without this changing its value in "Index.html":`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `/* Head.htm */
/* the working directory here is relative to the included file (FR/ or US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dcode"
    }
  }, `4DCODE`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dcode-codelines--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DCODE codeLines-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DCODE`), ` tag allows you to insert a multi-line 4D code block in a template.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DCODE`), ` sequence is detected that is followed by a space, a CR or a LF character, 4D interprets all the lines of code up to the next `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `-->`), ` sequence. The code block itself can contain carriage returns, line feeds, or both; it will be interpreted sequentially by 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you can write in a template:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DCODE
//PARAMETERS initialization
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...your code here
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here are the 4DCODE tag features:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `TRACE`), ` command is supported and activates the 4D debugger, thus allowing you to debug your template code.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any error will display the standard error dialog that lets the user stop code execution or enter debugging mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The text in between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<!--#4DCODE`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `-->`), ` is split into lines accepting any line-ending convention (cr, lf, or crlf).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The text is tokenized within the context of the database that called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `PROCESS 4D TAGS`), `. This is important for recognition of project methods for example. The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/WebServer/allowProject"
    }
  }, `Available through tags and 4D URLs (4DACTION ...)`), ` method property is not taken into account.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Even if the text always uses English-US, it is recommended to use the token syntax (:Cxxx) for command and constant names to protect against potential problems due to commands or constants being renamed from one version of 4D to another.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The fact that 4DCODE tags can call any of the 4D language commands or project methods could be seen as a security issue, especially when the database is available through HTTP. However, since it executes server-side code called from your own template files, the tag itself does not represent a security issue. In this context, as for any Web server, security is mainly handled at the level of remote accesses to server files.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4deach-and-4dendeach"
    }
  }, `4DEACH and 4DENDEACH`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4deach-variable-in-expression-----4dendeach--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DEACH variable in expression-->`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DENDEACH-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEACH-->`), ` comment allows iterating a specified item over all values of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `expression`), `. The item is set to a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `variable`), ` whose type depends on the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `expression`), ` type.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEACH-->`), ` comment can iterate through three expression types:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#--4deach-item-in-collection--"
    }
  }, `collections`), `: loop through each element of the collection,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#--4deach-entity-in-entityselection--"
    }
  }, `entity selections`), `: loop through each entity,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#--4deach-property-in-object--"
    }
  }, `objects`), `: loop through each object property.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of iterations is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4deach-item-in-collection--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DEACH item in collection-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax iterates on each `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `item`), ` of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `collection`), `. The code portion located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEACH -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDEACH-->`), ` is repeated for each collection element.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `item`), ` parameter is a variable of the same type as the collection elements.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The collection must contain only `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `elements of the same type`), `, otherwise an error is returned as soon as the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `item`), ` variable is assigned the first mismatched value type.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of loops is based on the number of elements of the collection. At each iteration, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `item`), ` variable is automatically filled with the matching element of the collection. The following points must be taken into account:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `item`), ` variable is of the object type or collection type (i.e. if `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `expression`), ` is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `item`), ` variable gets the same type as the first collection element. If any collection element is not of the same type as the variable, an error is generated and the loop stops.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the collection contains elements with a Null value, an error is generated if the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `item`), ` variable type does not support Null values (such as longint variables).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-a-collection-of-scalar-values"
    }
  }, `Example with a collection of scalar values`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getNames`), ` returns a collection of strings. The method has been declared as "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/WebServer/allowProject"
    }
  }, `available through 4D tags and URLs`), `".`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, ` <table class="table">    

        <tr><th>Name</th></tr>
        
          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-a-collection-of-objects"
    }
  }, `Example with a collection of objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getSalesPersons`), ` returns a collection of objects.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `    <table class="table">    
         <!--#4DCODE 
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4deach-entity-in-entityselection--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DEACH entity in entitySelection-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax iterates on each `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `entity`), ` of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `entitySelection`), `. The code portion located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEACH -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDEACH-->`), ` is repeated for each entity of the entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `entity`), ` parameter is an object variable of the entity selection class.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of loops is based on the number of entities of the entity selection. At each iteration, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `entity`), ` object variable is automatically filled with the matching entity of the entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-a-html-table"
    }
  }, `Example with a html table`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-process-4d-tags"
    }
  }, `Example with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `PROCESS 4D TAGS`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->" 
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->" 
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4deach-property-in-object--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DEACH property in object-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax iterates on each `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `property`), ` of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `object`), `. The code portion located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEACH -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDEACH-->`), ` is repeated for each property of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `property`), ` parameter is a text variable automatically filled with the name of the currently processed property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The properties of the object are processed according to their creation order. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-with-the-properties-of-an-object"
    }
  }, `Example with the properties of an object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getGamers`), ` is a project method that returns an object like ("Mary"; 10; "Ann"; 20; "John"; 40) to figure gamer scores.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4deval"
    }
  }, `4DEVAL`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4deval-expression--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DEVAL expression-->`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "alternative-syntax-4devalexpression"
    }
  }, `Alternative syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `$4DEVAL(expression)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DEVAL`), ` tag allows you to assess a 4D variable or expression. Like the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#4dhtml"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4DHTML`)), ` tag, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DEVAL`), ` does not escape HTML characters when returning text. However, unlike `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DHTML`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#4dtext"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4DTEXT`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DEVAL`), ` allows you to execute any valid 4D statement, including assignments and expressions that do not return any value.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you can execute:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, ` $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of an error during interpretation, the text inserted will be in the form: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DEVAL expr-->: ## error # error code`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For security reasons, it is recommended to use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#4dtext"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4DTEXT`)), ` tag when processing data introduced from outside the application, in order to prevent the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#prevention-of-malicious-code-insertion"
    }
  }, `insertion of malicious code`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dhtml"
    }
  }, `4DHTML`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dhtml-expression--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DHTML expression-->`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "alternative-syntax-4dhtmlexpression"
    }
  }, `Alternative syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `$4DHTML(expression)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Just like the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), ` tag, this tag lets you assess a 4D variable or expression that returns a value, and insert it as an HTML expression. Unlike the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), ` tag, this tag does not escape HTML special characters (e.g. ">").`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, here are the processing results of the 4D text variable myvar with the available tags:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `myvar Value`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Tags`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `myvar:="<B>"`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<!--#4DTEXT myvar-->`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `&lt;B&gt;`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `myvar:="<B>"`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<!--#4DHTML myvar-->`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<B>`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of an interpretation error, the inserted text will be `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DHTML myvar--> : ## error # error code`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For security reasons, it is recommended to use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#4dtext"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4DTEXT`)), ` tag when processing data introduced from outside the application, in order to prevent the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#prevention-of-malicious-code-insertion"
    }
  }, `insertion of malicious code`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dif-4delse-4delseif-and-4dendif"
    }
  }, `4DIF, 4DELSE, 4DELSEIF and 4DENDIF`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dif-expression-----4delseif-expression2----4delseif-expressionn-----4delse-----4dendif--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DIF expression-->`), ` {`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`), `} {`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DELSE-->`), `} `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DENDIF-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DELSEIF-->`), ` (optional), `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DELSE-->`), ` (optional) and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), ` comments, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF expression-->`), ` comment offers the possibility to execute portions of code conditionally.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `expression`), ` parameter can contain any valid 4D expression returning a Boolean value. It must be indicated within parenthesis and comply with the 4D syntax rules.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF expression-->`), ` ... `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), ` blocks can be nested in several levels. Like in 4D, each `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF expression-->`), ` must match a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of an interpretation error, the text "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF expression-->`), `: A Boolean expression was expected" is inserted instead of the contents located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), `. Likewise, if there are not as many `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), ` as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF -->`), `, the text "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF expression-->`), `: 4DENDIF expected" is inserted instead of the contents located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDIF-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DELSEIF-->`), ` tag, you can test an unlimited number of conditions. Only the code that follows the first condition evaluated as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `True`), ` is executed. If no conditions are true, no statement is executed (if there is no final `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DELSE-->`), `).
You can use a `, ` tag after the last `, `. If all the conditions are false, the statements following the `, ` are executed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The two following codes are equivalent.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Code using 4DELSE only:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DIF Condition1-->
  /* Condition1 is true*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 is true*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 is true */
        <!--#4DELSE-->
            /*None of the conditions are true*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Similar code using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DELSEIF`), ` tag:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `<!--#4DIF Condition1-->
     /* Condition1 is true*/
<!--#4DELSEIF Condition2-->
     /* Condition2 is true*/
<!--#4DELSEIF Condition3-->
    /* Condition3 is true */
<!--#4DELSE-->
    /* None of the conditions are true*/
<!--#4DENDIF-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example of code inserted in a static HTML page displays a different label according the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `vname#""`), ` expression result:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example inserts different pages depending on which user is connected:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dinclude"
    }
  }, `4DINCLUDE`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dinclude-path--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DINCLUDE path-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tag is mainly designed to include an HTML page (indicated by the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `path`), ` parameter) in another HTML page. By default, only the body of the specified HTML page, i.e. the contents found within the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<body>`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `</body>`), ` tags, is included (the tags themselves are not included). This lets you avoid conflicts related to meta tags present in the headers.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, if the HTML page specified does not contain `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<body>\`\`</body>`), ` tags, the entire page is included. It is up to you to verify the consistency of the meta tags.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE -->`), ` comment is very useful for tests (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DIF-->`), `) or loops (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP-->`), `). It is very convenient to include banners according to a criteria or randomly.
When including, regardless of the file name extension, 4D analyzes the called page and then inserts the contents (modified or not) in the page originating the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DINCLUDE`), ` call.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An included page with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE -->`), ` comment is loaded in the Web server cache the same way as pages called via a URL or sent with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SEND FILE`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `path`), `, put the path leading to the document to include. Warning: In the case of a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DINCLUDE`), ` call, the path is relative to the document being analyzed, that is, the "parent" document. Use the slash character (/) as a folder separator and the two dots (..) to go up one level (HTML syntax). When you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DINCLUDE`), ` tag with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PROCESS 4D TAGS`), ` command, the default folder is the project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can modify the default folder used by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DINCLUDE`), ` tag in the current page, using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DBASE -->`), ` tag (see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE path-->`), ` within a page is unlimited. However, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE path-->`), ` calls can be made only at one level. This means that, for example, you cannot insert `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE mydoc3.html-->`), ` in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mydoc2.html`), ` body page, which is called by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE mydoc2-->`), ` inserted in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mydoc1.html`), `. Furthermore, 4D verifies that inclusions are not recursive.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of error, the inserted text is "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DINCLUDE path-->`), ` :The document cannot be opened".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dloop-and-4dendloop"
    }
  }, `4DLOOP and 4DENDLOOP`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dloop-condition-----4dendloop--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DLOOP condition-->`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DENDLOOP-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This comment allows repetition of a portion of code as long as the condition is fulfilled. The portion is delimited by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP-->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDLOOP-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP condition-->`), ` ... `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDLOOP-->`), ` blocks can be nested. Like in 4D, each `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP condition-->`), ` must match a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDLOOP-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are five kinds of conditions:`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4dloop-table--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DLOOP [table]-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax makes a loop for each record from the table current selection in the current process. The code portion located between the two comments is repeated for each current selection record.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DLOOP`), ` tag is used with a table, records are loaded in "Read only" mode.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... could be expressed in 4D language in the following way:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` FIRST RECORD([People])
 While(Not(End selec tion([People])))
    ...
    NEXT RECORD([People])
 End while
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4dloop-array--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DLOOP array-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax makes a loop for each array item. The array current item is increased when each code portion is repeated.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This syntax cannot be used with two dimension arrays. In this case, it is better to combine a method with nested loops.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... could be expressed in 4D language in the following way:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4dloop-method--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DLOOP method-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax makes a loop as long as the method returns `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `True`), `. The method takes a Long Integer parameter type. First it is called with the value 0 to allow an initialization stage (if necessary); it is then called with the values 1 ,then 2, then 3 and so on, as long as it returns `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `True`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For security reasons, within a Web process, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method can be called once just before the initialization stage (method execution with 0 as parameter). If the authentication is OK, the initialization stage will proceed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_BOOLEAN($0)`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_LONGINT($1)`), ` MUST be declared within the method for compilation purposes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/> 
<!--#4DENDLOOP-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... could be expressed in 4D language in the following way:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `my_method`), ` method can be as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) \`Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False \`Stops the loop
    End if
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4dloop-expression--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DLOOP expression-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With this syntax, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DLOOP`), ` tag makes a loop as long as the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `expression`), ` returns `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `True`), `. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `...produces the following result:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `0
1
2
3
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "--4dloop-pointerarray--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `<!--#4DLOOP pointerArray-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DLOOP`), ` tag works like it does with an array: it makes a loop for each element of the array referenced by the pointer. The current array element is increased each time the portion of code is repeated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This syntax is useful when you pass an array pointer as a parameter to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PROCESS 4D TAGS`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of an interpretation error, the text "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP expression-->`), `: description" is inserted instead of the contents located between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DLOOP -->`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DENDLOOP-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following messages can be displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Unexpected expression type (standard error);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Incorrect table name (error on the table name);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An array was expected (the variable is not an array or is a two dimension array);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The method does not exist;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Syntax error (when the method is executing);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Access error (you do not have the appropriate access privileges to access the table or the method).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4DENDLOOP expected (the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<!--#4DENDLOOP-->`), ` number does not match the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<!--#4DLOOP -->`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dscript"
    }
  }, `4DSCRIPT/`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dscriptmethodnamemyparam--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DSCRIPT/MethodName/MyParam-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DSCRIPT`), ` tag allows you to execute 4D methods when processing the template. The presence of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DSCRIPT/MyMethod/MyParam-->`), ` tag as an HTML comment launches the execution of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MyMethod`), ` method with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Param`), ` parameter as a string in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the tag is called in the context of a Web process, when the page is loaded, 4D calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method (if it exists). If it returns True, 4D executes the method.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The method must return text in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), `. If the string starts with the code character 1, it is considered as HTML (the same principle is true for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DHTML`), ` tag).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, let\u2019s say that you insert the following comment `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\u201CToday is <!--#4DSCRIPT/MYMETH/MYPARAM-->\u201D`), ` into a template Web page. When loading the page, 4D calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Web Authentication`), ` database method, then calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MYMETH`), ` method and passes the string \u201C/MYPARAM\u201D as the parameter `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1`), `. The method returns text in $0 (for example "12/31/21"); the expression "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Today is <!--#4DSCRIPT/MYMETH/MYPARAM\u2013\u2013>`), `" therefore becomes "Today is 12/31/21".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MYMETH`), ` method is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  //MYMETH
 C_TEXT($0;$1) //These parameters must always be declared
 $0:=String(Current date)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A method called by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DSCRIPT`), ` must not call interface elements (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DIALOG`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ALERT`), `, etc.).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `As 4D executes methods in their order of appearance, it is absolutely possible to call a method that sets the value of many variables that are referenced further in the document, whichever mode you are using. You can insert as many `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DSCRIPT...-->`), ` comments as you want in a template.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4dtext"
    }
  }, `4DTEXT`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax---4dtext-expression--"
    }
  }, `Syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4DTEXT expression-->`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "alternative-syntax-4dtextexpression"
    }
  }, `Alternative syntax: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `$4DTEXT(expression)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The tag `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DTEXT expression-->`), ` allows you to insert a reference to a 4D variable or expression returning a value. For example, if you write (in an HTML page):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The value of the 4D variable `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `vtSiteName`), ` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also insert 4D expressions. You can for example directly insert the contents of a field (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DTEXT [tableName]fieldName-->`), `), an array element (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DTEXT tabarr{1}-->`), `) or a method returning a value (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DTEXT mymethod-->`), `). The expression conversion follows the same rules as the variable ones. Moreover, the expression must comply with 4D syntax rules.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#prevention-of-malicious-code-insertion"
    }
  }, `insertion of malicious code`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In case of an evaluation error, the inserted text will appear as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4DTEXT myvar--> : ## error # error code`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You must use process variables.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can display the content of a picture field. However, it is not possible to display the content of a picture array item.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `It is possible to display the contents of an object field by means of a 4D formula. For example, you can write `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<!--#4DTEXT OB Get:C1224([Rect]Desc;\\"color\\")-->`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You will usually work with Text variables. However, you can also use BLOB variables. You just need to generate BLOBs in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Text without length`), ` mode.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "alternative-syntax-for-4dtext-4dhtml-4deval"
    }
  }, `Alternative syntax for 4DTEXT, 4DHTML, 4DEVAL`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Several existing 4D transformation tags can be expressed using a $-based syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4dtag-expression"
    }
  }, `$4dtag (expression)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `can be used instead of`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "--4dtag-expression--"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `<!--#4dtag expression-->`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This alternative syntax is available only for tags used to return processed values:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#4dtext"
    }
  }, `4DTEXT`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#4dhtml"
    }
  }, `4DHTML`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#4deval"
    }
  }, `4DEVAL`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `(Other tags, such as 4DIF or 4DSCRIPT, must be written with the regular syntax).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `$4DEVAL(UserName)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `instead of:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<!--#4DEVAL(UserName)-->
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main advantage of this syntax is that it allows you to write XML-compliant templates. Some 4D developers need to create and validate XML-based templates using standard XML parser tools. Since the "<" character is invalid in an XML attribute value, it was not possible to use the "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!-- -->`), `" syntax of 4D tags without breaking the document syntax. On the other hand, escaping the "<" character will prevent 4D from interpreting the tags correctly.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the following code would cause an XML parsing error because of the first "<" character in the attribute value:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-xml"
    }
  }, `<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the $ syntax, the following code is validated by the parser:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-xml"
    }
  }, `<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4dtag`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<--#4dtag -->`), ` are not strictly equivalent: unlike `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<--#4dtag -->`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4dtag`), ` processing does not interpret 4D tags `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#recursive-processing"
    }
  }, `recursively`), `. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$`), ` tags are always evaluated once and the result is considered as plain text.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The reason for this difference is to prevent malicious code injection. As `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#prevention-of-malicious-code-insertion"
    }
  }, `explained below`), `, it is strongly recommended to use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), ` tags instead of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DHTML`), ` tags when handling user text to protect against unwanted reinterpretation of tags: with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), `, special characters such as "<" are escaped, thus any 4D tags using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<!--#4dtag expression -->`), ` syntax will lose their particular meaning. However, since `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4DTEXT`), ` does not escape the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$`), ` symbol, we decided to break support for recursion in order to prevent malicious injection using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4dtag (expression)`), ` syntax.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following examples show the result of processing depending on the syntax and tag used:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D will quit!
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // example 2
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: <!--#4DHTML QUIT 4D-->"
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // example 3
 myName:="$4DEVAL(QUIT 4D)" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: $4DEVAL(QUIT 4D)"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4dtag`), ` syntax supports matching pairs of enclosed quotes or parenthesis. For example, suppose that you need to evaluate the following complex (unrealistic) string:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `String(1) + "\\"(hello)\\""
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` input:="$4DEVAL( String(1)+\\"\\\\\\"(hello)\\\\\\"\\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;