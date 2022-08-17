exports.id = 38511;
exports.ids = [38511];
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

/***/ 56057:
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
var documentation_exports = {};
__export(documentation_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(documentation_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "documentation",
  title: "Documenting a project"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Project/documentation",
  "id": "version-19/Project/documentation",
  "title": "Documenting a project",
  "description": "In application projects, you can document your methods as well as your forms, tables, or fields. Creating documentation is particularly appropriate for projects being developed by multiple programmers and is generally good programming practice. Documentation can contain a description of an element as well as any information necessary to understand how the element functions in the application.",
  "source": "@site/versioned_docs/version-19/Project/documentation.md",
  "sourceDirName": "Project",
  "slug": "/Project/documentation",
  "permalink": "/docs/pt/19/Project/documentation",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "documentation",
    "title": "Documenting a project"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Architecture of a project",
    "permalink": "/docs/pt/19/Project/architecture"
  },
  "next": {
    "title": "Compilation",
    "permalink": "/docs/pt/19/Project/compiler"
  }
};
const assets = {};
const toc = [{
  value: "Documentation files",
  id: "documentation-files",
  level: 2
}, {
  value: "Documentation file name",
  id: "documentation-file-name",
  level: 3
}, {
  value: "Documentation file architecture",
  id: "documentation-file-architecture",
  level: 3
}, {
  value: "Documentation in the Explorer",
  id: "documentation-in-the-explorer",
  level: 2
}, {
  value: "Viewing documentation",
  id: "viewing-documentation",
  level: 3
}, {
  value: "Editing documentation file",
  id: "editing-documentation-file",
  level: 3
}, {
  value: "Viewing documentation in the code editor",
  id: "viewing-documentation-in-the-code-editor",
  level: 2
}, {
  value: "Documentation file definition",
  id: "documentation-file-definition",
  level: 2
}, {
  value: "Supported Markdown",
  id: "supported-markdown",
  level: 3
}, {
  value: "Example",
  id: "example",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In application projects, you can document your methods as well as your forms, tables, or fields. Creating documentation is particularly appropriate for projects being developed by multiple programmers and is generally good programming practice. Documentation can contain a description of an element as well as any information necessary to understand how the element functions in the application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following project elements accept documentation:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Methods (database methods, component methods, project methods, form methods, 4D Mobile methods, triggers, and classes)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Forms`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Tables and Fields`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Your documentation files are written in Markdown syntax (.md files) using any editor that supports Markdown. They are stored as independant files within your project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Documentation is displayed in the preview area (right-side panel) of the Explorer:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87190)/* ["default"] */ .Z),
    width: "841",
    height: "590"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It can also be partially exposed as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#viewing-documentation-in-the-code-editor"
    }
  }, `code editor tips`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "documentation-files"
    }
  }, `Documentation files`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "documentation-file-name"
    }
  }, `Documentation file name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Documentation files have the same name as their attached element, with the ".md" extension. For example, the documentation file attached to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myMethod.4dm`), ` project method will be named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myMethod.md`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Explorer, 4D automatically displays the documentation file with the same name as the selected element (see below).  `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "documentation-file-architecture"
    }
  }, `Documentation file architecture`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All documentation files are stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Documentation`), ` folder, located at the first level of the package folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Documentation`), ` folder architecture is the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Documentation`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Classes`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `myClass.md`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `DatabaseMethods`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `onStartup.md`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Forms`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `loginDial.md`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Methods`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `myMethod.md`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `TableForms`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `1`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `input.md`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Triggers`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `table1.md`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `...`))))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A project form and its project form method share the same documentation file for form and method.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A table form and its table form method share the same documentation file for form and method.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Renaming or deleting a documented element in your project will also rename or delete the element's associated Markdown file.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "documentation-in-the-explorer"
    }
  }, `Documentation in the Explorer`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "viewing-documentation"
    }
  }, `Viewing documentation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To view documentation in the Explorer window:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Make sure the preview area is displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Select the documented element in the Explorer list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Documentation`), ` button located below the preview area.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(72443)/* ["default"] */ .Z),
    width: "218",
    height: "68"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If no documentation file was found for the selected element, a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Create`), ` button is displayed (see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Otherwise, if a documentation file exists for the selected element, the contents are displayed in the area. The contents are not directly editable in the pane.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "editing-documentation-file"
    }
  }, `Editing documentation file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create and/or edit a Markdown documentation file from the Explorer window for the selected element.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If there is no documentation file for the selected element, you can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Create`), ` button in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Documentation`), ` pane or,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Edit Documentation...`), ` option in the contextual menu or options menu of the Explorer.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87776)/* ["default"] */ .Z),
    width: "277",
    height: "150"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D automatically creates an appropriately named .md file with a basic template at the relevant location and opens it with your default Markdown editor.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a documentation file already exists for the selected element, you can open it with your Markdown editor by choosing the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit Documentation...`), ` option in the contextual menu or options menu of the Explorer.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "viewing-documentation-in-the-code-editor"
    }
  }, `Viewing documentation in the code editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D code editor displays a part of a method's documentation in its help tip.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(11611)/* ["default"] */ .Z),
    width: "737",
    height: "169"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a file named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<MethodName>.md`), ` exists in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<package>/documentation`), ` folder, the code editor displays (by priority):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Any text entered in an HTML `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `comment`), ` tag (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `\\`), `) at the top of the markdown file.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Or, if no html `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `comment`), ` tag is used, the first sentence after a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `# Description`), ` tag of the markdown file.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `In this case, the first line contains the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `prototype`), ` of the method, automatically generated by the 4D code parser.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Otherwise, the code editor displays `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18R2/4D/18-R2/Writing-a-method.300-4824019.en.html#4618226"
    }
  }, `the block comment at the top of the method code`), `.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "documentation-file-definition"
    }
  }, `Documentation file definition`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D uses a basic template to create new documentation files. This template suggests specific features that allow you to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#viewing-documentation-in-the-code-editor"
    }
  }, `display information in the code editor`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, you can use any `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#supported-markdown"
    }
  }, `supported Markdown tags`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `New documentation files are created with the following default contents:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26812)/* ["default"] */ .Z),
    width: "302",
    height: "204"
  })), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Line`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `"\\`, `"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HTML comment. Used in priority as the method description in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#viewing-documentation-in-the-code-editor"
    }
  }, `code editor tips`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `## Description`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Heading level 2 in Markdown. The first sentence after this tag is used as the method description in the code editor tips if HTML comment is not used`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `## Example`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Heading level 2, you can use this area to show sample code`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `\``, `\`\`4D `, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `Type your example here `, `\``, `\`\``), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Used to format 4D code examples (uses highlight.js library)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "supported-markdown"
    }
  }, `Supported Markdown`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The title tag is supported:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `# Title 1
## Title 2
### Title 3
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The style tags (italic, bold, strikethrough) are supported:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `_italic_
**bold**
**_bold/italic_**
~~strikethrough~~
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The code block tag (`, `\``, `\`\`4d ... \`\`\`) is supported with 4D code highlight:`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `\``, `\`\`4d`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `C_TEXT($txt)`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `$txt:="Hello world!"`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `\``, `\`\``)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The table tag is supported:`))), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `| Parameter | Type   | Description  |
| --------- | ------ | ------------ |
| wpArea    | String |Write pro area|
| toolbar   | String |Toolbar name  |
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The link tag is supported:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `// Case 1
The [documentation](https://doc.4d.com) of the command ....

// Case 2
[4D blog][1]

[1]: https://blog.4d.com
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The image tags are supported:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `![image info](pictures/image.png)

![logo 4D](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")

[![logo 4D blog with link](https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png "4D blog logo")](https://blog.4d.com)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://blog.4d.com"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    parentName: "a",
    ...{
      "src": "https://blog.4d.com/wp-content/uploads/2016/09/logoOrignal-1.png",
      "alt": "logo 4D blog with link",
      "title": "4D blog logo"
    }
  }))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For more information, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://guides.github.com/features/mastering-markdown/"
    }
  }, `GitHub Markdown guide`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WP SwitchToolbar.md`), ` file, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `<!-- This method returns a different logo depending on the size parameter -->


GetLogo (size) -> logo


| Parameter | Type   | in/out | Description |
| --------- | ------ | ------ | ----------- |
| size      | Longint | in | Logo style selector (1 to 5)  |
| logo      | Picture | out | Selected logo |


## Description

This method returns a logo of a specific size, depending on the value of the *size* parameter value.
1 = smallest size, 5 = largest size.

## Example

C_PICTURE($logo)
C_LONGINT($size)

//Get the largest logo
$logo:=GetLogo(5)
`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Explorer view:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87190)/* ["default"] */ .Z),
    width: "841",
    height: "590"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Code editor view:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(24430)/* ["default"] */ .Z),
    width: "447",
    height: "74"
  })))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 11611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/codeEditor_Comments-e5e986df997c051b9a2ce531e8cb17da.png");

/***/ }),

/***/ 72443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 87776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 26812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAADMCAYAAADNu05+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AABanSURBVHhe7Z1Lr9zE1ob3X9j/g39BZsxAYhjBGCkzJogx+hRlEiYozCKhHEUJSsJRECAQEtckEMKdCAi3sMnmbBBhkkkG/vqtctnL5XK3293t7up+Hmltt8vlunmtt8vebnvv+++/LzAMw3KyvR9++KHAMAzLyZxw/fjjj25lWcvPP/+8+OCDD4o333xzJabyU+nY9tkqj7V89NatW739muXmLPf0586dO24l2CLrH330UXHt2rXizz//LO7fv790Ozo6SqZj22urOubyUfmqfLbLn1nfzPWGcC26vH37trOUk2DYppp89rvvvuvt5yzXv9zTn59++smtLLrUN1fKMTBs0+3DDz/s7ecs17/c059lmK5F/PHHH0mnwLBNt99++6344osvkr6NbZ454fr5558rG7p+8+bNpENgWC4mH15WPLC+2vU9mzjUPv744+Lvv/9OOgOG5WLyYflyysexzbK9X375pVjEdLHs66+/TjoChuVm8mX5dMrXsc0xJ1y//vqrWxmyfPfdd5MOgGG5mny6r/+zXM9yT390YVLLYH3X9S9kTdtSBx/DcjX5tHw79nfWN2e9IVzzLue9/UEX1h599NHijTfeaG17+eWXi6effro4PDxsbQum/Z977jmXR6bPSkvl7WNqh+oN6ypTbbDt0+e9vb3KUm2f12w/UtuxYfbPP/8Uv//+eytdN7DOO9by7b5xwHL85Z7+3L17163Ms9R/YOa9O14BK2F44YUXGulBMNYpXPr8yCOPFCdOnGgJ1zLEyhrCtRp77bXXiscff7x45513qrR79+4Vzz//fPHMM8+40wybf5rJtz/77LPe8cBy3OWe/gwx3beVOuDTTAF7+vRpJ1yffPJJlS5hUJoNZqWFWY7ERftqtqZ1CYx+Z6b82i+khTJVhkTQ7h/q0ueQrv3ttrB9HuEKbVfbQhtUbig/5FO6titdbbN9xZZjOsXTF89jjz3mxEvfzs8++6xbf/XVV92MLLVfl8nHU76Prd+ccGl6HazPuu4yHnL7Q5hpXLp0qQrqMHP69NNPq2BWkNtZWRA6O1MJ4hSERwISytQypGufJ554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");

/***/ }),

/***/ 24430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 87190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/explorer_Doc-2553e939f64b465e1e4b0f7c84418ff7.png");

/***/ })

};
;