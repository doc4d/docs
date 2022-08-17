exports.id = 65683;
exports.ids = [65683];
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

/***/ 22292:
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
var webArea_overview_exports = {};
__export(webArea_overview_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(webArea_overview_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "webAreaOverview",
  title: "Web Area"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/webAreaOverview",
  "id": "version-18/FormObjects/webAreaOverview",
  "title": "Web Area",
  "description": "Overview",
  "source": "@site/versioned_docs/version-18/FormObjects/webArea_overview.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/webAreaOverview",
  "permalink": "/docs/ja/18/FormObjects/webAreaOverview",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "webAreaOverview",
    "title": "Web Area"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Text",
    "permalink": "/docs/ja/18/FormObjects/text"
  },
  "next": {
    "title": "4D View Pro area",
    "permalink": "/docs/ja/18/FormObjects/viewProAreaOverview"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Specific properties",
  id: "specific-properties",
  level: 2
}, {
  value: "Associated variables",
  id: "associated-variables",
  level: 3
}, {
  value: "Web rendering engine",
  id: "web-rendering-engine",
  level: 3
}, {
  value: "Access 4D methods",
  id: "access-4d-methods",
  level: 3
}, {
  value: "$4d object",
  id: "4d-object",
  level: 3
}, {
  value: "Example 1",
  id: "example-1",
  level: 4
}, {
  value: "Example 2",
  id: "example-2",
  level: 4
}, {
  value: "Standard actions",
  id: "standard-actions",
  level: 2
}, {
  value: "Form events",
  id: "form-events",
  level: 2
}, {
  value: "Web area rules",
  id: "web-area-rules",
  level: 2
}, {
  value: "User interface",
  id: "user-interface",
  level: 3
}, {
  value: "Subforms",
  id: "subforms",
  level: 3
}, {
  value: "Web Area and Web server conflict (Windows)",
  id: "web-area-and-web-server-conflict-windows",
  level: 3
}, {
  value: "Web plugins and Java applets",
  id: "web-plugins-and-java-applets",
  level: 3
}, {
  value: "Insertion of protocol (macOS)",
  id: "insertion-of-protocol-macos",
  level: 3
}, {
  value: "Access to Web inspector",
  id: "access-to-web-inspector",
  level: 2
}, {
  value: "Displaying the Web inspector",
  id: "displaying-the-web-inspector",
  level: 3
}, {
  value: "Using the Web inspector",
  id: "using-the-web-inspector",
  level: 3
}, {
  value: "Supported Properties",
  id: "supported-properties",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. The rendering engine of the Web area depends on the execution platform of the application and the selected `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"
    }
  }, `rendering engine option`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is possible to create several Web areas in the same form. Note, however, that the use of Web areas must follow `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#web-areas-rules"
    }
  }, `several rules`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Several dedicated `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#standard-actions"
    }
  }, `standard actions`), `, numerous `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html"
    }
  }, `language commands`), ` as well as generic and specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#form-events"
    }
  }, `form events`), ` allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "specific-properties"
    }
  }, `Specific properties`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "associated-variables"
    }
  }, `Associated variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Two specific variables can be associated with each Web area:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#url"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `URL`)), ` --to control the URL displayed by the Web area`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#progression"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Progression`)), ` -- to control the loading percentage of the page displayed in the Web area.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-rendering-engine"
    }
  }, `Web rendering engine`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can choose between `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"
    }
  }, `two rendering engines`), ` for the Web area, depending on the specifics of your application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Selecting the embedded web rendering engine allows you to call 4D methods from the Web area.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "access-4d-methods"
    }
  }, `Access 4D methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#access-4d-methods"
    }
  }, `Access 4D methods`), ` property is selected, you can call 4D methods from a Web area.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is only available if the Web area `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#use-embedded-web-rendering-engine"
    }
  }, `uses the embedded Web rendering engine`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4d-object"
    }
  }, `$4d object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#use-embedded-web-rendering-engine"
    }
  }, `4D embedded Web rendering engine`), ` supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, to call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `HelloWorld`), ` 4D method, you just execute the following statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-codeJS"
    }
  }, `$4d.HelloWorld();
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The syntax of calls to 4D methods is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-codeJS"
    }
  }, `$4d.4DMethodName(param1,paramN,function(result){})
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `param1...paramN`), `: You can pass as many parameters as you need to the 4D method.
These parameters can be of any type supported by JavaScript (string, number, array, object).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `function(result)`), `: Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `result`), ` parameter.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `result`), `: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_OBJECT`), ` command to return the objects.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding:
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Given a 4D project method named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `today`), ` that does not receive parameters and returns the current date as a string.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D code of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `today`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_TEXT($0)
 $0:=String(Current date;System date long)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Web area, the 4D method can be called with the following syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `$4d.today()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the code of the HTML page:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-html"
    }
  }, `<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
<\/script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D project method `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `calcSum`), ` receives parameters (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$1...$n`), `) and returns their sum in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$0`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D code of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `calcSum`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_REAL(\${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+\${$i}
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The JavaScript code run in the Web area is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // result is 262.5
    });
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "standard-actions"
    }
  }, `Standard actions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Four specific standard actions are available for managing Web areas automatically: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open Back URL`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open Next URL`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Refresh Current URL`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Stop Loading URL`), `. These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. These actions are described in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html"
    }
  }, `Standard actions`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "form-events"
    }
  }, `Form events`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Begin URL Loading`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On URL Resource Loading`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On End URL Loading`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On URL Loading Error`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On URL Filtering`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Open External Link`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Window Opening Denied`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition, Web areas support the following generic form events:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Load`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Unload`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Getting Focus`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On Losing Focus`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "web-area-rules"
    }
  }, `Web area rules`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "user-interface"
    }
  }, `User interface`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Edit menu commands`), `: When the Web area has the focus, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Edit`), ` menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Context menu`), `: It is possible to use the standard `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesEntry#context-menu"
    }
  }, `context menu`), ` of the system with the Web area. Display of the context menu can be controlled using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WA SET PREFERENCE`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Drag and drop`), `: The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties.
For security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the mouse cursor displays a "forbidden" icon `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(39218)/* ["default"] */ .Z),
    width: "26",
    height: "28"
  }), `. You have to use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `WA SET PREFERENCE`), ` command to explicitly allow the dropping of URLs or files in the area.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "subforms"
    }
  }, `Subforms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The subform must not be able to scroll`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The limits of the Web area must not exceed the size of the subform`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Superimposing a Web area on top of or beneath other form objects is not supported.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-area-and-web-server-conflict-windows"
    }
  }, `Web Area and Web server conflict (Windows)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "web-plugins-and-java-applets"
    }
  }, `Web plugins and Java applets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "insertion-of-protocol-macos"
    }
  }, `Insertion of protocol (macOS)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The URLs handled by programming in Web areas under macOS must begin with the protocol. For example, you need to pass the string "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://www.mysite.com%22"
    }
  }, `http://www.mysite.com"`), ` and not just "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://www.mysite.com%22"
    }
  }, `www.mysite.com"`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "access-to-web-inspector"
    }
  }, `Access to Web inspector`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can view and use a Web inspector within Web areas of your forms. The Web inspector is a debugger which is provided by the embedded Web engine. It allows to parse the code and the flow of information of the Web pages.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "displaying-the-web-inspector"
    }
  }, `Displaying the Web inspector`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following conditions must be met in order to view the Web inspector in a Web area:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You must `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"
    }
  }, `select the embedded Web rendering engine`), ` for the area (the Web inspector is only available with this configuration).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You must enable the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesEntry#context-menu"
    }
  }, `context menu`), ` for the area (this menu is used to call the inspector)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You must expressly enable the use of the inspector in the area by means of the following statement:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-web-inspector"
    }
  }, `Using the Web inspector`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you have done the settings as described above, you then have new options such as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Inspect Element`), ` in the context menu of the area. When you select this option, the Web inspector window is displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The Web inspector is included in the embedded Web rendering engine. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"
    }
  }, `Border Line Style`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#css-class"
    }
  }, `Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesEntry#context-menu"
    }
  }, `Context Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesAction#method"
    }
  }, `Method`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#progression"
    }
  }, `Progression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#url"
    }
  }, `URL`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"
    }
  }, `Use embedded Web rendering engine`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibilty`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 39218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg==");

/***/ })

};
;