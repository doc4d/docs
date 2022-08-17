exports.id = 12961;
exports.ids = [12961];
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

/***/ 31819:
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
var macros_exports = {};
__export(macros_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(macros_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "macros",
  title: "Form Editor Macros"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormEditor/macros",
  "id": "version-19-R6/FormEditor/macros",
  "title": "Form Editor Macros",
  "description": "The 4D Form editor supports macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s).",
  "source": "@site/versioned_docs/version-19-R6/FormEditor/macros.md",
  "sourceDirName": "FormEditor",
  "slug": "/FormEditor/macros",
  "permalink": "/docs/fr/FormEditor/macros",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "macros",
    "title": "Form Editor Macros"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Form Editor",
    "permalink": "/docs/fr/FormEditor/overview"
  },
  "next": {
    "title": "Object libraries",
    "permalink": "/docs/fr/FormEditor/objectLibrary"
  }
};
const assets = {};
const toc = [{
  value: "Hands-on example",
  id: "hands-on-example",
  level: 2
}, {
  value: "Calling macros in the Form editor",
  id: "calling-macros-in-the-form-editor",
  level: 2
}, {
  value: "Location of macro file",
  id: "location-of-macro-file",
  level: 2
}, {
  value: "Declaring macros",
  id: "declaring-macros",
  level: 2
}, {
  value: "Example",
  id: "example",
  level: 3
}, {
  value: "Instantiating macros in 4D",
  id: "instantiating-macros-in-4d",
  level: 2
}, {
  value: "Macro Functions",
  id: "macro-functions",
  level: 2
}, {
  value: "Class constructor",
  id: "class-constructor",
  level: 3
}, {
  value: "Class constructor($macro : Object)",
  id: "class-constructormacro--object",
  level: 4
}, {
  value: "Example",
  id: "example-1",
  level: 4
}, {
  value: "onInvoke()",
  id: "oninvoke",
  level: 3
}, {
  value: "onInvoke($editor : Object) -&gt; $result : Object",
  id: "oninvokeeditor--object---result--object",
  level: 4
}, {
  value: "<code>method</code> attribute",
  id: "method-attribute",
  level: 4
}, {
  value: "<code>$4dId</code> property in <code>currentPage.objects</code>",
  id: "4did-property-in-currentpageobjects",
  level: 4
}, {
  value: "Example",
  id: "example-2",
  level: 4
}, {
  value: "onError()",
  id: "onerror",
  level: 3
}, {
  value: "onError($editor : Object; $resultMacro : Object ; $error : Collection)",
  id: "onerroreditor--object-resultmacro--object--error--collection",
  level: 4
}, {
  value: "Example",
  id: "example-3",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D Form editor supports macros. A macro is a set of instructions to perform an action or a sequence of actions. When called upon, the macro will execute its instructions and automatically perform the action(s). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example if you have a recurring report with specific formatting (e.g., certain text must appear in red and certain text must appear in green), you can create a macro to automatically set the color. You can create macros for the 4D Form editor that can:  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Create and execute 4D code`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Display dialogs`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Select form objects`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add / delete / modify forms, form objects as well as their properties`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Modify project files (update, delete)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Macros code supports `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes"
    }
  }, `class functions`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/propertiesReference"
    }
  }, `form object properties in JSON`), ` to let you define any custom feature in the Form editor. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Macros can been defined for the host project or for components within the project. Usually, you will create a macro and install it within the components you use for development. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When called, a macro overrides any previously specified behaviors.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "hands-on-example"
    }
  }, `Hands-on example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this short example, you'll see how to create and call a macro that adds a "Hello World!" alert button in the top left corner of your form. `), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `formMacros.json`), ` file within the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Sources`), ` folder of your project, you write:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `{
   "macros": {
      "Add Hello World button": {
       "class": "AddButton"
     }
   }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Create a 4D class named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `AddButton`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Within the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `AddButton`), ` class, write the following function:`))), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function onInvoke($editor : Object)->$result : Object
    
    var $btnHello : Object
    
    // Create a "Hello" button
    $btnHello:=New object("type"; "button"; \\
    "text"; "Hello World!"; \\
    "method"; New object("source"; "ALERT(\\"Hello World!\\")"); \\
    "events"; New collection("onClick"); \\
    "width"; 120; \\
    "height"; 20; \\
    "top"; 0; \\
    "left"; 0)  
    
    // Add button in the current page
    $editor.editor.currentPage.objects.btnHello:=$btnHello  
    
    // Select the new button in the form editor
    $editor.editor.currentSelection.clear() //unselect elements
    $editor.editor.currentSelection.push("btnHello")    
    
    // Notify the modification to the 4D Form editor
    $result:=New object("currentSelection"; $editor.editor.currentSelection;\\  
        "currentPage"; $editor.editor.currentPage)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then call the macro:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(11625)/* ["default"] */ .Z),
    width: "399",
    height: "200"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(38942)/* ["default"] */ .Z),
    width: "158",
    height: "64"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "calling-macros-in-the-form-editor"
    }
  }, `Calling macros in the Form editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When macros are defined in your 4D project, you can call a macro using the contextual menu of the Form editor:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(30776)/* ["default"] */ .Z),
    width: "589",
    height: "394"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This menu is built upon the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formMacros.json`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#location-of-macros"
    }
  }, `macro definition file(s)`), `. Macro items are sorted in alphabetical order. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This menu can be called in an empty area or a selection in the form. Selected object are passed to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$editor.currentSelection`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$editor.target`), ` in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#oninvoke"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `onInvoke`)), ` function of the macro. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A single macro can execute several operations. If selected, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Undo`), ` feature of the Form editor can be used to reverse macro operations globally. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "location-of-macro-file"
    }
  }, `Location of macro file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All 4D Form Editor macros are defined within a single JSON file per project or component: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `FormMacros.json`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This file must be located in the host or component's `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Project`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Sources`), ` folder:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2272)/* ["default"] */ .Z),
    width: "233",
    height: "256"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "declaring-macros"
    }
  }, `Declaring macros`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The structure of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formMacros.json`), ` file is the following:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `{
    "macros": {
            <macroName>: {
                "class": <className>,
                <customProperty> : <value>
        }
    }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the description of the JSON file contents:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Attribute`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `macros`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `list of defined macros`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<macroName>`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macro definition`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `class`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macro class name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<customProperty>`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `(optional) custom value to retrieve in the constructor`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Custom properties, when used, are passed to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-constructor"
    }
  }, `constructor`), ` function of the macro.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `{
   "macros": {
     "Open Macros file": {
       "class": "OpenMacro"
     },
     "Align to Right on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "right"
     },
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "instantiating-macros-in-4d"
    }
  }, `Instantiating macros in 4D`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each macro you want to instantiate in your project or component must be declared as a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes"
    }
  }, `4D class`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The class name must match the name defined using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#creating-macros"
    }
  }, `class`), ` attribute of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formMacros.json`), ` file. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Macros are instantiated at application startup. Consequently, if you modify the macro class structure (add a function, modify a parameter...) or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#class-constructor"
    }
  }, `constructor`), `, you will have to restart the application to apply the changes. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "macro-functions"
    }
  }, `Macro Functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Every macro class can contain a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Class constructor`), ` and two functions: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `onInvoke()`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `onError()`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "class-constructor"
    }
  }, `Class constructor`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "class-constructormacro--object"
    }
  }, `Class constructor($macro : Object)`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$macro`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Macro declaration object (in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `formMacros.json`), ` file)`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Macros are instantiated using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/classes#class-constructor"
    }
  }, `class constructor`), ` function, if it exists. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The class constructor is called once during class instantiation, which occurs at application startup. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Custom properties added to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#declaring-macros"
    }
  }, `macro declaration`), ` are returned in the parameter of the class contructor function.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formMacros.json`), ` file:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-js"
    }
  }, `{
   "macros": {
     "Align to Left on Target Object": {
       "class": "AlignOnTarget",
       "myParam": "left"
     }
   }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can write: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Class "AlignOnTarget"
Class constructor($macro : Object)
    This.myParameter:=$macro.myParam //left
    ...
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "oninvoke"
    }
  }, `onInvoke()`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "oninvokeeditor--object---result--object"
    }
  }, `onInvoke($editor : Object) -> $result : Object`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Form Editor Macro Proxy object containing the form properties`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Form Editor Macro Proxy object returning properties modified by the macro (optional)`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `onInvoke`), ` function is automatically executed each time the macro is called. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the function is called, it receives in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$editor.editor`), ` property a copy of all the elements of the form with their current values. You can then execute any operation on these properties. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once operations are completed, if the macro results in modifying, adding, or removing objects, you can pass the resulting edited properties in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$result`), `. The macro processor will parse the returned properties and apply necessary operations in the form. Obviously, the less properties you return, the less time processing will require. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here are the properties returned in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$editor`), ` parameter:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `$editor.editor.form`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The entire form`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.file`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `File`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `File object of the form file`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of the form`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.table`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Table number of the form, 0 for project form`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.currentPageNumber`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The number of the current page`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.currentPage`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The current page, containing all the form objects and the entry order of the page`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.currentSelection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of names of selected objects`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.formProperties`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Properties of the current form`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$editor.editor.target`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of the object under the mouse when clicked on a macro`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here are the properties that you can pass in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$result`), ` object if you want the macro processor to execute a modification. All properties are optional:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `currentPage`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `currentPage including objects modified by the macro, if any`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `currentSelection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `currentSelection if modified by the macro`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `formProperties`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `formProperties if modified by the macro`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `editor.groups`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `group info, if groups are modified by the macro`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `editor.views`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `view info, if views are modified by the macro`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `editor.activeView`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Active view name`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if objects of the current page and groups have been modified, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `    $result:=New object("currentPage"; $editor.editor.currentPage ; \\ 
            "editor"; New object("groups"; $editor.editor.form.editor.groups))

`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "method-attribute"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `method`), ` attribute`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When handling the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `method`), ` attribute of form objects, you can define the attribute value in two ways in macros:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/propertiesAction#method"
    }
  }, `string containing the method file name/path`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using an object with the following structure:`))), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `source`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `method code`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D will create a file using the object name in the "objectMethods" folder with the content of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `source`), ` attribute. This feature is only available for macro code.  `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4did-property-in-currentpageobjects"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `$4dId`), ` property in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h4"
  }, `currentPage.objects`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4dId`), ` property defines a unique ID for each object in the current page. This key is used by the macro processor to control changes in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$result.currentPage`), `: `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$4dId`), ` key is missing in both the form and an object in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$result`), `, the object is created.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$4dId`), ` key exists in the form but is missing in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$result`), `, the object is deleted.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$4dId`), ` key exists in both the form and an object in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$result`), `, the object is modified.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to define a macro function that will apply the red color and italic font style to any selected object(s).`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function onInvoke($editor : Object)->$result : Object
    var $name : Text
    
    If ($editor.editor.currentSelection.length>0)       
        // Set stroke to red and style to italic for each selected object
        For each ($name; $editor.editor.currentSelection)
            $editor.editor.currentPage.objects[$name].stroke:="red"
            $editor.editor.currentPage.objects[$name].fontStyle:="italic"

        End for each 
        
    Else 
        ALERT("Please select a form object.")
    End if 
    
    // Notify to 4D the modification
    $result:=New object("currentPage"; $editor.editor.currentPage)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "onerror"
    }
  }, `onError()`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "onerroreditor--object-resultmacro--object--error--collection"
    }
  }, `onError($editor : Object; $resultMacro : Object ; $error : Collection)`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `$editor`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object send to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#oninvoke"
    }
  }, `onInvoke`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$resultMacro`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object returned by `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#oninvoke"
    }
  }, `onInvoke`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$error`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Error stack`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[].errCode`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Error code`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[].message`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description of the error`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[].componentSignature`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Internal component signature`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `onError`), ` function is executed when the macros processor encounters an error. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When executing a macro, if 4D encounters an error which prevents the macro from being cancelled, it does not execute the macro. It is the case for example if executing a macro would result in:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `deleting or modifying a script whose file is read-only.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `creating two objects with the same internal ID.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In a macro class definition, you can write the following generic error code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Function onError($editor : Object; $resultMacro : Object; $error : Collection)
    var $obj : Object
    var $txt : Text
    $txt:=""
    
    For each ($obj; $error)
        $txt:=$txt+$obj.message+" \\n"
    End for each 
    
    ALERT($txt)
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 30776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/macroSelect-236540cd38c3b4cff8386601ab80700a.png");

/***/ }),

/***/ 2272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 11625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAADICAYAAAAQsG2HAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAABSbSURBVHhe7d2/69xG/sfx/S9Sf6tNaXAVCE4RAuHbRKSIr0x86UJ812VxDP4GLsbct/HXRVIkRdYcBJtcedd8wEcgEC/kXKSwwXDf/DK2iRM7pMiVc3rPaKSZ0Uif1Vq7s6N9Fg8+H2mkkfbD6P1ajezd2S+//KIAABiC8AAADEZ4AAAGIzwAAIMRHgCAwQgPAMBghAcAYDDCAwAw2Frh8dVXXwF7JTZOAezO2uHx66+/AnuB8ADSIzyQHcIDSG9weFy++dtWxI4r3KIBCMIDSI/wQHYIDyA9wgPZkfF479499fDhQ/Xo0SP1+PFj9eTJk+j4AbAdhAeyI+NR3L59W/3www86QAgPYLcID2RHxuO1a9fU0dGRDpAHDx7ou4/Y+AGwHYQHsiPj8cqVKzpA5HeZwiI8gN3aaXhc+Ozr6HoRO65wi4axVMVspma1uVqswm32mZx/5JxXCzXP7rWkIePx0qVL6urVq+rmzZt66urnn3+Ojh8A27Gz8HjtrfPq5MmT6k9/+1e0PXZc4RYNwy++q8VczeYLtWpttwsdQdBrk33EpvtNj4zHixcvquVySXgAiewkPGxwvH35s2i7iB1XuEXDCItoyqJKeKRAeADpjRYeMiUVm5ZaJzhE7LjCLRpGX3iY34uivBuZFWop7Xo6qJnmKpbBfsumfb5YVW3hflVfXv9Nn1qxUIu5239pWUTuisLzj61f6b5s30VZJL2pumIZ7HtYCA8gvdHCo3jjD+q551/wAmTd4BCx4wq3aBh+8fWnrUyRbULALNcF3XuuUBVku2+rzSnwZQiYPmP9+9u5hX1ZBGGiBfvE1gf9tNq99YeH8ADSGy08/nzjR/XSK6frABkSHCJ2XOEWDcMU8PpdeH1XYNucAqsDwW13C3q7GNdtwd2Kpot5uE9s2R6v/D36LKZ93Nb66vjenVDnfoeH8ADSG/WZhw0QCY0hwSFixxVu0TD6imjQNig8zFRREx7+fka4T/tc5E5Iir792exrdZ1/vC8Jrq6wO1SEB5De6A/MbYAMCQ4RO65wi4bRV0TDNlm2xbfkhYJpqwt8X1st1n9wLtLPvCjvOtY9x/71TQh17Xd4CA8gvdHDY1Ox4wq3aBh9RbSjmJdBIO/g/f8TYrZ1H37XIdParxSdtjJ3Mk27s671zMKSPqp9Kq1wkGcedXtR3wHFjnWICA8gvQzDYyyRoBlJMzWGbSA8gPQIj7HDQ09bpfpPi4eB8ADSIzxGCw/7fzO2czeDBuEBpHfA4YFcER5AeoQHskN4AOkRHsgO4QGkR3ggO4QHkN7g8Ii1b5NbNABBeADpER7IDuEBpEd4IDuEB5Ae4YHsEB5AeoQHskN4AOkRHsgO4QGkl2F4dH0qbbjdNlTH7vhUW/P9G0M/nmSsj0nZ0md17SHCA0gv0/BIVSTNsefR7+qoguXYcwvPf6zXk/LvsluEB5Ae4TGIObZ8B0jrbkd/73ixxrkRHk+L8ADSm1Z4BF/g1HynRlP0zZcrVX0sm+1lW/u1ryI+FWaPLT+lH7tePlHXrnfOzTsf2V7a7XLJ/YIp51y8Y3e+Jr9tvlj4x54wwgNIbxLPPExBNevr4qoLqy2mpq0pylUf9ns3qm/uq9v1cuGEg1UV+rJP7wuf5Fi6r6bd3db2afoP1kfPxR7btPW9Jtu22fOWPBEeQHrTufPQhdUv+E2BjxXsIcuR9XVgdBxHn48fct6dxjrH7ntNzvHj/UwX4QGkR3istRxbX01VyXRTXcSd9sj5tPs4ZpnwiCI8gPQm9MxD1tuwKHmFt6dAr7XcsT6c7vLa5ffg+UWsj95l00f3a2ramLYiPIBdmvAD83UL9DrLXevl7sO9MwjavfOx01bm7qFZPubYna+pVIWX4IE54QHsUobhgUNHeADpER7IDuEBpEd4IDuEB5Ae4YHsEB5AeoQHskN4AOkRHsgO4QGkR3ggO4QHkB7hgewQHkB6hAeyQ3gA6REeyA7hAaRHeCA7hAeQHuGB7BAeQHqEB7JDeADpZRwe8om29tNmS953W+wH+fTc1keyyyfhyqfp6k/LPYxPwR0b4QGkl2d4VB9TXn/PRbVu4S7vTNfHt5dsUDjrmi+oOly3bt1Sp0+fVvfv34+2H4fwANLLMDzMHcf+FOCe8NAhVwTf9+EuH65z585tHCCEB5BefuHRKsihvi9XMr8XhXzrnvQRLpfbVHc1M80ep+pj4X75kkxHyXq7bSm4y2gFnXcn4p5XKXJc/y4lsn3reHnZNEAIDyC9PMOj9/lGUGS9ZVPs/a+NDZedfcti74WELdb6G/xMgW/tE5Cvh7X9d4dBx3HdsJF186Yvt9+cnTlzRp09ezba1oXwANI7yDuPeFvJe/df0cV7SJ+BOuzkLqSjj67jOkG5LO+OFsuuvvJ0/fp1derUKf0MJNbehfAA0pvgM48hhT5Y7gymIX2GqkJfF3673tmv87g2JMpt69Aot3NCxd8+H5sGhyA8gPQyDI+SnjYKAqQsqOZfWwXhorftKvSx5cg/r+3dL2xrkykmOV+/37CP2HGr6alguqoo7HSav20uJDA2DQ5BeADp5RkeQr9bd6Z53HfiVbhoZaHtLvSRwh/2e+y0lXmW0Wxrt3HoPoPjhH1Gj2vXh9uFfeXn7t270fXrIDyA9PINDxwswgNIj/BAdggPID3CA9khPID0CA9kh/AA0iM8kB3CA0iP8EB2CA8gPcID2SE8gPQID2SH8ADSIzyQHcIDSI/wQHYIDyC9vQ+PO3fuABrhAewP7jyQHcIDSI/wQHYIDyA9wgPZITyA9AgPZIfwANIjPJAdwgNIj/BAdggPID3CA9khPID0CA9kh/AA0iM8kB3CA0gvw/BYqmI2U7PaXC1W4TaYMsIDSC/T8GgCY7WYq9l8oVat7Y7j94N8EB5AetmHx+YhQHjkivAA0ptceCwLZ0qrWFbbrNRi3qwvyqLjTX3Z7VYLNa/XF2qp98W+ITyA9CY8beVstyycIIm0x5bLfeaLVdWGfUJ4AOlN4IF5cIcgQVG3VWFQ3VH4YRCEhXfXUWkFDvYB4QGkN4FpK4cOgKIKE5mq8rfTdyllKBRLWY6Fh90X+4zwANKbVnjIXYedwtJh0N5OAsTcgYT9yHJ4d4J9RHgA6U0rPNwH4/NCFfbOw5vKau4u6ofr0QfmznrsFcIDSC/D8MChIzyA9AgPZIfwANIjPJAdwgNIj/BAdggPID3CA9khPID0CA9kh/AA0iM8kB3CA0iP8EB2CA8gPcID2SE8gPQID2SH8ADS2/vwuHPnDqARHsD+4M4D2SE8gPQID2SH8ADSIzyQHcIDSG9weFy++dtWxI4r3KIBCMIDSI/wQHYIDyA9wgPZITyA9AgPZIfwANIjPJAdwgNIj/BAdggPIL2dhseFz76Orhex4wq3aBhLVcxmalYsI22/qtVirmazuVqs2m07s1qo+SbnoPcrX5s1X6hV53Zd/cvfJ/Hr3zLCA0hvZ+Hx2lvn1cmTJ9Wf/vavaHvsuMItGoYpjvN5rEBWwbLz4jlCwY4EwrIo1NLdZi2EB4Dt20l42OB4+/Jn0XYRO65wi4ZhimNRlAGyWPlty6K8IykSFM+nLdgrtZjPVLGMtQ1FeADYvtHCQ6akYtNS6wSHiB1XuEXDsMVRfrrvzKUA2/VN8VwWzjSQO9XlTBHNFwtnn2r/RRlEdbsTUt7UUlEeX7a3yyV9DP8cbDjYbVohofuUvoL1NdOfBGZzTKf/ztcyTYQHkN5o4VG88Qf13PMveAGybnCI2HGFWzSMpnBKMNSFWAqofkYQFm7LXS+/N/v6z0lMWx00cjdTF/ag77LNBEt4THfZBEfrLslVn7tZNucjYeCfU9OH279pi7+WaSI8gPRGC48/3/hRvfTK6TpAhgSHiB1XuEXDcAqnU3SbIHELa0kXf/uuv71fq89w//B4dV+V6J1GuE/Rc1dRim4z4Jw6X8s0ER5AeqM+87ABIqExJDhE7LjCLRqGWxyrqaqlW0CDwloXZTutVa3fODxiQbDJPq5w/3DdMf0THoQHsGOjPzC3ATIkOETsuMItGkZQHKs7i+iUjrTZwqqLuN1PtumbtnKLr7ts9mtPQfXts8a0Vcmcgxsy4XH7z4lpK8ID2KXRw2NTseMKt2gYYSGV4txVdE3hlnCZldsU7j/vdaazog/M6/6DZR1CVZ+iejZSP5jvnMZq9rGFvsWbYut6xhFZ7nwt00R4AOllGB5bsNbUEvYF4QGkR3iU9F2D99wA+4zwANI70PBwprM07jpyQngA6XHngewQHkB6hAeyQ3gA6REeyA7hAaRHeCA7hAeQ3uDwiLVvk1s0AEF4AOkRHsgO4QGkR3ggO4QHkB7hgewQHkB6hAeyQ3gA6REeyA7hAaSXYXj4n1ArvI879z56fajw02uxjwgPIL1MwyP8ePIyROzXxj4VwmMXbt26pU6fPq3u378fbT8O4QGkN4HwKI32keqEx66cO3du4wAhPID0phEe1afktr/D3P/0XK9dvrq2Ne3l911/wZPQdzbucSrutxVikE0DhPAA0pt2eEhhb01nSXsZBp1fTxv2HawP+pSA6fxmQBzrzJkz6uzZs9G2LoQHkN6EwiMSANVXxvrfH97evwmAoM37Wli3/6KaIit/565jY9evX1enTp3Sz0Bi7V0IDyC9CT7zaLevFnMdANGA6Lpr8fp0w8n0J4Fkf9rjYH2bBocgPID0JhAesuxOHbXDQzSF3mxfF/2u4HGfZXhTW9XyvCjvOtrHwfEkMDYNDkF4AOllGh52KsmdTnLbnQCot/MDoijM3YiIB4+5I9HbRIJCP0wf5Z8HH6a7d+9G16+D8ADSyzA8npYbEJvjQXk6hAeQHuGxCT1txYPyVAgPID3CYxA7lfX0dy7YHOEBpHeA4YHcER5AeoQH9pqMPQDbE6u76yA8sNfcsQdgXIQHJovwALZnp+Fx+eZvO/V/q3/jgDH2gPHZa4rwwGQx9oDx2WuK8MBkMfaA8dlrSq6ve/fuqYcPH6pHjx6px48fqydPnkRzIER4YK8x9oDx2WtKri9x+/Zt/U/eJUAID0wCYw8Yn72m5Pq6du2aOjo60gHy4MEDffcRy4EQ4YG9xtgDxmevKbm+rly5ogNEfpcprAmHx1/UCfmk2xf/Emn7t1q8+ayazZ5VL3/abkN+9jU8Xn+xeww2ZKx2jcWutqHrXe4262zvk9d04qK7LtLHxVfXeN2hvnPpaht+/lifvabk+rp06ZK6evXq4E9ryDQ8nlXP/FfXgJPPnmLQ7bP/+evX6qVXfqf+9x8/Rttdexken75bjr9X1YnoGHSNWTT7+rLcbdbZPhAGg7zO8np65s1/1uvkzZm7vJ6+c3ma1xsT7rdpP9Nmrym5vjb9qJ9sw+PEi5FBrAd/eVEzWPbea2+dXytA9jE8bAE9vpD2Fa6utqHrXe4262wf0KH4rlpUy/L6TrxZrqsD5Z/q5WMDM6bvXJ7m9caE+23az7TZa+ogw+PlT+Xnq+r1er0d2P5g0dML+m4knGaQ7Zs2c7tu9pVgmtm+q3df/nZd+2OIdQJk/8LDKaBBsdWc8fJMWXi9wtXXVusqdsF6b1za68Ddpm/7rvHqhoN7Pbn9O9dcZ5/m2M111H0ux/4dLrrb2qAO+quX5WdzPuaNpLtcXf/HnPfLb5ZvQqu24XdZebDX1IGGRzBHKwNCX8jhwLLc9abwtweGGXz+IA2OYfvYaO4Xof/+3e9V8cYfo21i78KjHmey7BZb4Y8X//lbX5vLbGeLl8/ty9m3HItmzLrrw987xrF3bPeaKvepXufrZQjobb0x39enaYsXe3+/Y/8O9m/d6t/dJ+y/q80u9593/Rrl9bphOSH2mjrY8HAvZG/Qu4NFD4Dg4tMDJjYogn0j29XH0W3TfWeyC29f/qt67vkX9DOQWLvYt/AIp6p08XPf0dbBIuJjtdVWr1tzfTX2vGDR5+DuG27fMY6ddZoNCCco7Gv2Xntvn+FrCM5lw7/DWv33tpU2PW9n+ymw19Thhod95ye3tvWAdNq9geK8S4wMoHbfpd6BZph3Th0XIjqtExxi/8ZeULS1aoz0Fca+tnrdmuvXGr/923eGR3Wer5fjum6XdS++699l9fYZvobgXDb6O5jZgmP7720rbXrezvZTYK+pAw6PUnVnEb1FljY7UPWgsfv1TVuFg8e5yCIDT4TvRtFPAmOd4BB7Nfbc8VQLi1ozXswbCzue+tpc4RiMrTd99Y/f9vbHjWPDvB7/3Mz+/hROX5/uscNlf7/+v4PzGr3+3b95SdcAt/+uY9vlTc57Wuw1ddjhoQdSOKhtu70QSq1/WmkGkX33aAZTZLDowWW3c9qq0DLc42Md7//9/6PrQ/s09uQdauxNgi6A3jy5GReth8F9bbWughWs98ZlqW/aqrV9rP+Gfj1BSMprr1+j1dln+BqC5QF/B/PQ3WxbF/ygj/BfWOpz1evN+YbLG5/3hNhr6sDCA4eEsQeMz15ThAcmi7EHjM9eU4QHJouxB4zPXlOEByaLsQeMz15ThAcmi7EHjM9eU4QHJouxB4zPXlOEByaLsQeMz15TOw0PYJcYe8D2EB6YLMYesD07CQ8AwPRsNTxi5Ltu5cDy3bfyHbjyVYZyEsC2XbhwQZ0/f1698847+ud7772n3n///ei2APpt9TvMYx4+fKhu376tjo6O9IHlO3AlvYBt++ijj9QHH3ygB/2HH36oPv74Y/XJJ59EtwXQT+q31HGp5w8ePNh+eDx69Ejf4sgBJbHklgfYhS+++EJ9/vnn6saNG/qnLH/55ZfRbQH0k/otdVzqudT1J0+eRGt+aOPwkHSSA0lSya2OHBjYhe+++059++236ptvvtFk+fvvv49uC6Cf1G+ZSZJ6LnV96+EhBxByMCEPWYBd+Omnn6I/AQxna7it6bF6H7NxeAAADhfhAQAYjPAAAAxGeAAABiM8AACDER4AgMEIDwDAYIQHAGAwwgMAMBjhAQAYjPAAAAxGeAAABiM8AAAD/aL+Ax2mKNiNOHf/AAAAAElFTkSuQmCC");

/***/ }),

/***/ 38942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABACAYAAADrsc4kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAT1SURBVHhe7ZsxixRJFMc78ZMczCcQzYyEE/sCDfwIBgbiTXKCsSAHiiA4MMFhaLQccpeNIKK3iJool2y4xyl6G7gowm7gvutX09Xz6vWrtseZnppp/w0/Zrrm1Zsq6rdV1VqTjcdjAmDVQDyQBIgHkgDxQBIgHkiCKd5vd+/S5MoV+vvcOfrn1Cl6d/Kke+V7LufPrXoAtKUm3p9XrzrJ3h8/HoU/5zhdF4C2BOI9unTJFC0Gx8v6ALSlEo9nMJZpL8/p8Nkz+vLpEx1sb9PemTM14SSY+cC34MTjPZtfXlm6NpcXj+thzwfmxYnHDwxepC+fP5dqTa+jg4PqMw9f8p7r68QANOHE46dVL9HhixdOLH8dPn8eSPb+xAlXzq++jOvrxJvK9luiX18SXXxINH59ZMb0iVT9deLJp1i3xyvl41e+958xH2/dcp99vHmzKuP6OvEmwoPw82Oinx4Q/XDviI7dIbr2VzEgRmwfSNlfJx7/O52Ui+FLl+2dPVstxfzK91zO9XXiTYT/8n/8fTYI2fX/3KsV2wdS9rc24x08ferE8hffc3mWZQC0Roumqe3xrMuLJ2P8e2bnwgXa2traeHiP4//ys19eUXb5sVuGrNg+EOvv/v7+QrQWTz7Vxi5OJi8p3psix+7ubi/gPY4bjBsf6PwfZMb0Cd1fS6R5aS2e/Hc86+JyOeNJ3p0+Tbs7O2anwPrDM58lzyK0Fo/x/3NR2+M9eeLKY+L9e/++2SGwGSQXj2n6v1pLvDe3b5udWZwR5dmAhpO25RIZ0yY+ZJRnlI9kmZFjlFOWj0RMG5raotuc06gW0w1rIR4TO50ixePltduZLjZITYPn0YP4tXiFlmoypEHR98FwUpVNhoPgvh1NbdFt/g7FY6zzeJyMn17dg0Tne7rYILURSQ/i1+IVLNpgSJPyniXLh0VZJeOEhoM5czqa2qLb/J2KZ8HJuJFW45dPbJBUeTkbcduyarD0IMbi9ZLqkWL591IG+b4gmnP63Xk+KNsWb8ugEDtsM8Sr4GSrFW82mCFygMRAFkvkdPmT5fq9EMMNvKgvmO3zijrl7DcqBHKxwVLclHP62WxJjreFZ9WgX2LG7RqIFyAHKVKuZhqHE0IPsIwPZ5L6g0SJl0tI5vd1wf6uMafug2pLIJeMLWbZHOJVrKd41pIk6zbHR8UrxRjx/k7OZoUQwf6uMafug2pLVLzVAvECYgMhy/l9+LRpx4TxgUimuAzv7eSyzkzrz/aSszI7p/xufR/Wqy210XYtH4gXoActUu4GuuVSW4u38s9wMqi9Fs9ms/1dSTSn7oO652W8rIeHiwY42erEA6sC4oEkQDyQhLUVz5/Jd8leH5mN7xP6NwhWTJ/Q/bVEmpeFxZNn8jkZn9vi81v8V9JHYr9BsGL7QKy/lkzzsLB48kw+J/Nn8q0v6wOx3yBYsX2gq/4uLB5Pv1WjWDw+Hn3jg/llfSDorz8Ojv7OzcLiBWfyWbwlnclfV7r6DcK60lV/FxevoDqTXyRb1pn8daaL3yCsM130dynieTiZ9SUAaCAeSALEA0mAeCAJEA8kAeKBJEA8kASIB5IA8UASIB5IAsQDSYB4IAkQDyQB4oEkQDyQBIgHkrB08QBoi+WQpLV4ACwTiAeSAPFAEiAeSALEA0mAeCAJEA8kAeKBJEA8kASIBxIwpv8BX+lYcYVry+cAAAAASUVORK5CYII=");

/***/ })

};
;