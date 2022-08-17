exports.id = 41076;
exports.ids = [41076];
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

/***/ 28356:
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
var classes_exports = {};
__export(classes_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(classes_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "classes",
  title: "Classes"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/classes",
  "id": "version-19-R6/Concepts/classes",
  "title": "Classes",
  "description": "Overview",
  "source": "@site/versioned_docs/version-19-R6/Concepts/classes.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/classes",
  "permalink": "/docs/Concepts/classes",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "classes",
    "title": "Classes"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Shared objects and collections",
    "permalink": "/docs/Concepts/shared"
  },
  "next": {
    "title": "Control flow overview",
    "permalink": "/docs/Concepts/control-flow"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Managing classes",
  id: "managing-classes",
  level: 2
}, {
  value: "Class definition",
  id: "class-definition",
  level: 3
}, {
  value: "Deleting a class",
  id: "deleting-a-class",
  level: 3
}, {
  value: "Using the 4D interface",
  id: "using-the-4d-interface",
  level: 3
}, {
  value: "File menu and toolbar",
  id: "file-menu-and-toolbar",
  level: 4
}, {
  value: "Explorer",
  id: "explorer",
  level: 4
}, {
  value: "Class code support",
  id: "class-code-support",
  level: 4
}, {
  value: "Class stores",
  id: "class-stores",
  level: 2
}, {
  value: "<code>cs</code>",
  id: "cs",
  level: 3
}, {
  value: "cs -&gt; classStore",
  id: "cs---classstore",
  level: 4
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: "<code>4D</code>",
  id: "4d",
  level: 3
}, {
  value: "4D -&gt; classStore",
  id: "4d---classstore",
  level: 4
}, {
  value: "Example",
  id: "example-1",
  level: 4
}, {
  value: "Class object",
  id: "class-object",
  level: 2
}, {
  value: "Inheritance",
  id: "inheritance",
  level: 3
}, {
  value: "Class keywords",
  id: "class-keywords",
  level: 2
}, {
  value: "<code>Function</code>",
  id: "function",
  level: 3
}, {
  value: "Syntax",
  id: "syntax",
  level: 4
}, {
  value: "Parameters",
  id: "parameters",
  level: 4
}, {
  value: "Return value",
  id: "return-value",
  level: 4
}, {
  value: "Example 1",
  id: "example-1-1",
  level: 4
}, {
  value: "Example 2",
  id: "example-2",
  level: 4
}, {
  value: "<code>Function get</code> and <code>Function set</code>",
  id: "function-get-and-function-set",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-1",
  level: 4
}, {
  value: "Example 1",
  id: "example-1-2",
  level: 4
}, {
  value: "Example 2",
  id: "example-2-1",
  level: 4
}, {
  value: "<code>Class Constructor</code>",
  id: "class-constructor",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-2",
  level: 4
}, {
  value: "Example",
  id: "example-3",
  level: 4
}, {
  value: "<code>Class extends &lt;ClassName&gt;</code>",
  id: "class-extends-classname",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-3",
  level: 4
}, {
  value: "Example",
  id: "example-4",
  level: 4
}, {
  value: "<code>Super</code>",
  id: "super",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-4",
  level: 4
}, {
  value: "Example 1",
  id: "example-1-3",
  level: 4
}, {
  value: "Example 2",
  id: "example-2-2",
  level: 4
}, {
  value: "<code>This</code>",
  id: "this",
  level: 3
}, {
  value: "Syntax",
  id: "syntax-5",
  level: 4
}, {
  value: "Class commands",
  id: "class-commands",
  level: 2
}, {
  value: "<code>OB Class</code>",
  id: "ob-class",
  level: 3
}, {
  value: "<code>OB Class ( object ) -&gt; Object | Null</code>",
  id: "ob-class--object----object--null",
  level: 4
}, {
  value: "<code>OB Instance of</code>",
  id: "ob-instance-of",
  level: 3
}, {
  value: "<code>OB Instance of ( object ; class ) -&gt; Boolean</code>",
  id: "ob-instance-of--object--class----boolean",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D language supports the concept of `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `classes`), `. In a programming language, using a class allows you to define an object behaviour with associated properties and functions.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once a user class is defined, you can `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `instantiate`), ` objects of this class anywhere in your code. Each object is an instance of its class. A class can `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-extends-classname"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `extend`)), ` another class, and then inherits from its `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#function"
    }
  }, `functions`), ` and properties (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-constructor"
    }
  }, `static`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#function-get-and-function-set"
    }
  }, `computed`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The class model in 4D is similar to classes in JavaScript, and based on a chain of prototypes.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, you could create a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Person`), ` class with the following definition:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : text
 $fullName:=This.firstName+" "+This.lastName
 
Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.fullName
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In a method, creating a "Person":`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "managing-classes"
    }
  }, `Managing classes`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "class-definition"
    }
  }, `Class definition`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A user class in 4D is defined by a specific method file (.4dm), stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `/Project/Sources/Classes/`), ` folder. The name of the file is the class name.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When naming classes, you should keep in mind the following rules:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/Concepts/identifiers#classes"
    }
  }, `class name`), ` must be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Class names are case sensitive.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Giving the same name to a class and a database table is not recommended, in order to prevent any conflict.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if you want to define a class named "Polygon", you need to create the following file:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Project folder
Project
Sources
Classes
Polygon.4dm`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "deleting-a-class"
    }
  }, `Deleting a class`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To delete an existing class, you can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on your disk, remove the .4dm class file from the "Classes" folder,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the 4D Explorer, select the class and click `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(59857)/* ["default"] */ .Z),
    width: "19",
    height: "18"
  }), ` or choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Move to Trash`), ` from the contextual menu.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-4d-interface"
    }
  }, `Using the 4D interface`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Class files are automatically stored at the appropriate location when created through the 4D interface, either via the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File`), ` menu or the Explorer.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "file-menu-and-toolbar"
    }
  }, `File menu and toolbar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create a new class file for the project by selecting `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `New > Class...`), ` in the 4D Developer `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File`), ` menu or from the toolbar.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ctrl+Shift+Alt+k`), ` shortcut.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "explorer"
    }
  }, `Explorer`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Methods`), ` page of the Explorer, classes are grouped in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Classes`), ` category.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create a new class, you can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Classes`), ` category and click on the `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(95255)/* ["default"] */ .Z),
    width: "20",
    height: "16"
  }), ` button.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `New Class...`), ` from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(86385)/* ["default"] */ .Z),
    width: "266",
    height: "181"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `New > Class...`), ` from the contexual menu of the Explorer's Home page.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "class-code-support"
    }
  }, `Class code support`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the various 4D windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In the code editor:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a class cannot be run`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a class function is a code block`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Goto definition`), ` on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Search references`), ` on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In the Runtime explorer and Debugger, class functions are displayed with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ClassName>`), ` constructor or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ClassName>.\\<FunctionName>`), ` format.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-stores"
    }
  }, `Class stores`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Available classes are accessible from their class stores. Two class stores are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `cs`), ` for user class store`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `4D`), ` for built-in class store`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "cs"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `cs`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "cs---classstore"
    }
  }, `cs -> classStore`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `classStore`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User class store for the project or component`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs`), ` command returns the user class store for the current project or component. It returns all user classes `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-definition"
    }
  }, `defined`), ` in the opened project or component. By default, only project `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ORDA/ordaClasses"
    }
  }, `ORDA classes`), ` are available.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to create a new instance of an object of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myClass`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$instance:=cs.myClass.new()
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4d"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `4D`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d---classstore"
    }
  }, `4D -> classStore`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `classStore`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D class store`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D`), ` command returns the class store for available built-in 4D classes. It provides access to specific APIs such as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/CryptoKeyClass"
    }
  }, `CryptoKey`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to create a new key in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CryptoKey`), ` class:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-object"
    }
  }, `Class object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a class is `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-definition"
    }
  }, `defined`), ` in the project, it is loaded in the 4D language environment. A class is an object itself, of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/ClassClass"
    }
  }, `"Class" class`), `. A class object has the following properties and function:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/API/ClassClass#name"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `name`)), ` string`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/API/ClassClass#superclass"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `superclass`)), ` object (null if none)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/API/ClassClass#new"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `new()`)), ` function, allowing to instantiate class objects.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition, a class object can reference a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-constructor"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `constructor`)), ` object (optional).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A class object is a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/shared"
    }
  }, `shared object`), ` and can therefore be accessed from different 4D processes simultaneously.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "inheritance"
    }
  }, `Inheritance`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a class inherits from another class (i.e. the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/classes#class-extends-classname"
    }
  }, `Class extends`), ` keyword is used in its definition), the parent class is its `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/ClassClass#superclass"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `superclass`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When 4D does not find a function or a property in a class, it searches it in its `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/ClassClass#superclass"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `superclass`)), `; if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-keywords"
    }
  }, `Class keywords`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specific 4D keywords can be used in class definitions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function <Name>`), ` to define class functions of the objects.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function get <Name>`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function set <Name>`), ` to define computed properties of the objects.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Class constructor`), ` to define static properties of the objects.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Class extends <ClassName>`), ` to define inheritance.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Class functions are specific properties of the class. They are objects of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/FunctionClass#about-4dfunction-objects"
    }
  }, `4D.Function`), ` class.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the class definition file, function declarations use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function`), ` keyword, and the name of the function. The function name must be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor. For example, if you declare `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function _myPrivateFunction`), ` in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MyClass`), `, it will not be proposed in the code editor when you type in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `"cs.MyClass. "`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Immediately following the function name, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#parameters"
    }
  }, `parameters`), ` for the function can be declared with an assigned name and data type, including the return parameter (optional). For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function computeArea($width : Integer; $height : Integer)->$area : Integer
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Within a class function, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` command is used as the object instance. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a class function, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current method name`), ` command returns: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<ClassName>.<FunctionName>`), `, for example "MyClass.myFunction".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the application code, class functions are called as member methods of the object instance and can receive `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-function-parameters"
    }
  }, `parameters`), ` if any. The following syntaxes are supported:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `use of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `()`), ` operator. For example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `myObject.methodName("hello")`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `use of a "4D.Function" class member method:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/API/FunctionClass#apply"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `apply()`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/API/FunctionClass#call"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `call()`)))))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Thread-safety warning:`), ` If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the compiler does not generate any error (which is different compared to regular methods),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an error is thrown by 4D only at runtime.`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "parameters"
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `. Multiple parameters (and types) are separated by semicolons (;).`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x; $y : Variant; $z : Integer; $xy : Object)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the type is not stated, the parameter will be defined as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Variant`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/parameters#sequential-parameters"
    }
  }, `classic 4D syntax`), ` for method parameters can be used to declare class function parameters. Both syntaxes can be mixed. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "return-value"
    }
  }, `Return value`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You declare the return parameter (optional) by adding an arrow (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `->`), `) and the return parameter definition after the input parameter(s) list, or a colon (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `:`), `) and the return parameter type only. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also declare the return parameter by adding only `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `: type`), ` and use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/parameters#return-expression"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `return expression`)), ` (it will also end the function execution). For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function add($x : Variant; $y : Integer): Integer
 // some code
 return $x+$y
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition
Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// In a project method

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example uses the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/parameters#return-expression"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `return expression`)), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "function-get-and-function-set"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function get`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Function set`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-1"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function get <name>()->$result : type
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function set <name>($parameterName : type)
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function set`), ` are accessors defining `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `computed properties`), ` in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `when the property is read, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function get`), ` is executed,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `when the property is written, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Function set`), ` is executed.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the property is not accessed, the code never executes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `gross price`), ` and the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `VAT rate`), `, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `net price`), ` could be handled by a computed property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the class definition file, computed property declarations use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` (the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), `) and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function set`), ` (the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `setter`), `) keywords, followed by the name of the property. The name must be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` returns a value of the property type and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function set`), ` takes a parameter of the property type. Both arguments must comply with standard `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#parameters"
    }
  }, `function parameters`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When both functions are defined, the computed property is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `read-write`), `. If only a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` is defined, the computed property is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `read-only`), `. In this case, an error is returned if the code tries to modify the property. If only a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function set`), ` is defined, 4D returns `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `undefined`), ` when the property is read.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The type of the computed property is defined by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$return`), ` type declaration of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `getter`), `. It can be of any `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/object"
    }
  }, `valid property type`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Assigning `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `undefined`), ` to an object property clears its value while preserving its type. In order to do that, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function get`), ` is first called to retrieve the value type, then the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Function set`), ` is called with an empty value of that type.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1-2"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Person.4dm

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//in a project method
$fullName:=$person.fullName // Function get fullName() is called
$person.fullName:="John Smith" // Function set fullName() is called
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2-1"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function get fullAddress()->$result : Object
 
 $result:=New object
 
 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country 
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "class-constructor"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Class Constructor`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-2"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A class constructor function, which can accept `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#parameters"
    }
  }, `parameters`), `, can be used to define a user class.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In that case, when you call the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/ClassClass#new"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `new()`)), ` function, the class constructor is called with the parameters optionally passed to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `new()`), ` function.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a class constructor function, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current method name`), ` command returns: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<ClassName>:constructor`), `, for example "MyClass:constructor".`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
 This.name:=$name
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "class-extends-classname"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Class extends <ClassName>`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-3"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: ChildClass
Class extends <ParentClass>
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Class extends`), ` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Class extension must respect the following rules:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A user class cannot extend a user class from another project or component.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A user class cannot extend itself.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `check syntax`), ` will throw an error in this case.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An extended class can call the constructor of its parent class using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#super"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Super`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-4"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example creates a class called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Square`), ` from a class called `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Polygon`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)
 
 // It calls the parent class's constructor with lengths
 // provided for the Polygon's width and height
 Super($side;$side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name:="Square"



 Function getArea()
  C_LONGINT($0)
  $0:=This.height*This.width
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "super"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `Super`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-4"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Super {( param{;...;paramN} )} {-> Object}
`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `param`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `mixed`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter(s) to pass to the parent constructor`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object's parent`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Super`), ` keyword allows calls to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `superclass`), `, i.e. the parent class.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Super`), ` serves two different purposes:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Inside a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#class-constructor"
    }
  }, `constructor code`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Super`), ` is a command that allows to call the constructor of the superclass. When used in a constructor, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Super`), ` command appears alone and must be used before the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This`), ` keyword is used.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `This`), ` command is called on an object whose superclasses have not been constructed, error -10743 is generated.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Super`), ` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Inside a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#class-function"
    }
  }, `class member function`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Super`), ` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1-3"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example illustrates the use of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Super`), ` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Rectangle`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Square`), ` classes.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

 
Function sayName()
 ALERT("Hi, I am a "+This.name+".")
 
// Function definition
Function getArea()
 var $0 : Integer

 $0:=(This.height)*(This.width)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Square
 
Class extends Rectangle
 
Class constructor ($side : Integer)
 
 // It calls the parent class's constructor with lengths
 // provided for the Rectangle's width and height
 Super($side;$side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name:="Square"

Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example illustrates the use of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Super`), ` in a class member method. You created the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Rectangle`), ` class with a function:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Rectangle
 
Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You also created the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Square`), ` class with a function calling the superclass function:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: Square
 
Class extends Rectangle
 
Function description()
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can write in a project method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "this"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `This`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "syntax-5"
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `This -> Object
`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Current object`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` keyword returns a reference to the currently processed object. In 4D, it can be used in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/help/command/page1470.html"
    }
  }, `different contexts`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In most cases, the value of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a formula is called as a member method of an object, its `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` is set to the object the method is called on. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-constructor"
    }
  }, `class constructor`), ` function is used (with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/ClassClass#new"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `new()`)), ` function), its `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` is bound to the new object being constructed.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: ob
  
Class Constructor  
 
 // Create properties on This as
 // desired by assigning to them
 This.a:=42 
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// in a 4D method  
$o:=cs.ob.new()
$val:=$o.a //42
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When calling the superclass constructor in a constructor using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#super"
    }
  }, `Super`), ` keyword, keep in mind that `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` must not be called before the superclass constructor, otherwise an error is generated. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#example-1"
    }
  }, `this example`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In any cases, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` refers to the object the method was called on, as if the method were on the object.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Class: ob
  
Function f()
 $0:=This.a+This.b
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then you can write in a project method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, the object assigned to the variable $o doesn't have its own `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `f`), ` property, it inherits it from its class. Since `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `f`), ` is called as a method of $o, its `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` refers to $o.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "class-commands"
    }
  }, `Class commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Several commands of the 4D language allows you to handle class features.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "ob-class"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `OB Class`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "ob-class--object----object--null"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `OB Class ( object ) -> Object | Null`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OB Class`), ` returns the class of the object passed in parameter.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "ob-instance-of"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `OB Instance of`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "ob-instance-of--object--class----boolean"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `OB Instance of ( object ; class ) -> Boolean`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OB Instance of`), ` returns `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `true`), ` if `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `object`), ` belongs to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `class`), ` or to one of its inherited classes, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `false`), ` otherwise.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 86385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 59857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 95255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC");

/***/ })

};
;