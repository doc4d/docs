exports.id = 27868;
exports.ids = [27868];
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

/***/ 91786:
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
var general_exports = {};
__export(general_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(general_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "general",
  title: "General Page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Preferences/general",
  "id": "Preferences/general",
  "title": "General Page",
  "description": "This page contains various options to configure the general operation of your 4D application.",
  "source": "@site/docs/Preferences/general.md",
  "sourceDirName": "Preferences",
  "slug": "/Preferences/general",
  "permalink": "/docs/fr/next/Preferences/general",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "general",
    "title": "General Page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/fr/next/Preferences/overview"
  },
  "next": {
    "title": "Structure Page",
    "permalink": "/docs/fr/next/Preferences/structure"
  }
};
const assets = {};
const toc = [{
  value: "Options",
  id: "options",
  level: 2
}, {
  value: "At startup",
  id: "at-startup",
  level: 3
}, {
  value: "Automatic form creation",
  id: "automatic-form-creation",
  level: 3
}, {
  value: "Window tabbing (macOS only)",
  id: "window-tabbing-macos-only",
  level: 3
}, {
  value: "Appearance (macOS only)",
  id: "appearance-macos-only",
  level: 3
}, {
  value: "Exit Design when going to Application Environment",
  id: "exit-design-when-going-to-application-environment",
  level: 3
}, {
  value: "Enable binary database creation",
  id: "enable-binary-database-creation",
  level: 3
}, {
  value: "When creating a new project",
  id: "when-creating-a-new-project",
  level: 2
}, {
  value: "Use Log File",
  id: "use-log-file",
  level: 3
}, {
  value: "Create package",
  id: "create-package",
  level: 3
}, {
  value: "Include tokens in project source files",
  id: "include-tokens-in-project-source-files",
  level: 3
}, {
  value: "Excluding tokens in existing projects",
  id: "excluding-tokens-in-existing-projects",
  level: 4
}, {
  value: "Create <code>.gitignore</code> file",
  id: "create-gitignore-file",
  level: 3
}, {
  value: "Language of text comparison",
  id: "language-of-text-comparison",
  level: 3
}, {
  value: "Documentation Location",
  id: "documentation-location",
  level: 2
}, {
  value: "Documentation language",
  id: "documentation-language",
  level: 3
}, {
  value: "Look in the local folder first",
  id: "look-in-the-local-folder-first",
  level: 3
}, {
  value: "Local folder",
  id: "local-folder",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This page contains various options to configure the general operation of your 4D application.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "options"
    }
  }, `Options`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "at-startup"
    }
  }, `At startup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option allows you to configure the default 4D display at startup, when the user launches only the application.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Do nothing`), `: Only the application window appears, empty.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open Local Project dialog`), `: 4D displays a standard open document dialog box, allowing you to select a local project.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open last used project`), `: 4D directly opens the last project used; no opening dialog box appears. `, /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `To force the display of the opening dialog box when this option is selected, hold down the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Alt`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Option`), ` (macOS) key while launching the project.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open Remote Project dialog`), `: 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open Welcome Wizard dialog`), ` (factory setting): 4D displays the Welcome Wizard dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D Server`), `: The 4D Server application ignores this option. In this environment, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Do nothing`), ` mode is always used.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "automatic-form-creation"
    }
  }, `Automatic form creation`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option is only used in binary databases; it is ignored in project architecture. See doc.4d.com.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "window-tabbing-macos-only"
    }
  }, `Window tabbing (macOS only)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Starting with macOS Sierra, Mac applications can benefit from the Automatic Window Tabbing feature that helps organizing multiple windows: document windows are stacked into a single parent window and can be browsed through tabs. This feature is useful on small screens and/or when using a trackpad.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can benefit from this feature in the following environments (with 4D 64-bit versions only):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Code Editor windows`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Form Editor windows`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All windows from these editors can be put in tab form:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(55637)/* ["default"] */ .Z),
    width: "1094",
    height: "316"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A set of commands in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Window`), ` menu allows managing the tabs:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(9183)/* ["default"] */ .Z),
    width: "352",
    height: "173"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the 4D's Preferences dialog box, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Window tabbing`), ` option allows you to control this feature:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(8072)/* ["default"] */ .Z),
    width: "864",
    height: "296"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Three options are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `According to System Preferences`), ` (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Never`), `: Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Always`), `: Opening a new document in 4D form editor or method editors will always result in creating a new tab.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "appearance-macos-only"
    }
  }, `Appearance (macOS only)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This menu lets you select the color scheme to use for the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D development`), ` environment. The specified scheme will be applied to all editors and windows of the Design mode. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also set the color scheme to use in your `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `desktop applications`), ` in the "Interface" page of the Settings dialog box.  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Three options are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `According to System Color Scheme Preferences`), ` (default): Use the color scheme defined in the macOS System Preferences.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Light`), `: Use the Light Theme`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Dark`), `: Use the Dark Theme`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This preference is only supported on macOS. On Windows, the "Light" scheme is always used.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "exit-design-when-going-to-application-environment"
    }
  }, `Exit Design when going to Application Environment`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If this option is checked, when the user switches to the Application environment using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Test Application`), ` menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "enable-binary-database-creation"
    }
  }, `Enable binary database creation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you check this option, two items are added in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File > New`), ` menu and the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `New`), ` toolbar button:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Database...`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Database from Structure Definition...`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(37046)/* ["default"] */ .Z),
    width: "599",
    height: "239"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These items allow you to create binary databases (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html"
    }
  }, `Creating a new database`), ` section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "when-creating-a-new-project"
    }
  }, `When creating a new project`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "use-log-file"
    }
  }, `Use Log File`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/Backup/log"
    }
  }, `Log file (.journal)`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "create-package"
    }
  }, `Create package`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Thanks to this principle, under macOS the database folders appear as packages having specific properties. Under Windows, this has no particular impact.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "include-tokens-in-project-source-files"
    }
  }, `Include tokens in project source files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, saved `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/Project/architecture#sources"
    }
  }, `method source files`), ` in new 4D projects will contain `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `tokens`), ` for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `:C10`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `:5`), ` inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html"
    }
  }, `Using tokens in formulas`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you intend to use VCS or external code editors with your new projects, you might want to uncheck this option for a better readability of the code with these tools. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option can only be applied to projects (binary databases always include tokens).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can always get the code with tokens by calling `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page1190.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `METHOD GET CODE`)), ` with 1 in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `option`), ` parameter.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "excluding-tokens-in-existing-projects"
    }
  }, `Excluding tokens in existing projects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can configure your existing projects to save code `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `without tokens`), ` by inserting the following key in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/Project/architecture#applicationname4dproject-file"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `<applicationName>.4DProject`)), ` file using a text editor:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `"tokenizedText": false
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This setting is only taken into account when methods are saved. Existing methods in your projects are left untouched, unless you resave them. `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "create-gitignore-file"
    }
  }, `Create `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `.gitignore`), ` file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You might need or want git to ignore some files in your new projects.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set this preference by checking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Create .gitignore file`), `  option.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a project is created in 4D and that box is checked, 4D creates a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.gitignore`), ` file at the same level as the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Project`), ` folder (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/Project/architecture#gitignore-file-optional"
    }
  }, `Architecture of a Project`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can define the default contents of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.gitignore`), ` file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.gitignore`), ` files in your new projects.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://git-scm.com/docs/gitignore"
    }
  }, `official git documentation`), ` is a great resource to understand how `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.gitignore`), ` files work. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "language-of-text-comparison"
    }
  }, `Language of text comparison`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can modify this parameter for the open database using the Database Settings (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/settings/database#text-comparison"
    }
  }, `Text comparison`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "documentation-location"
    }
  }, `Documentation Location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area configures access to the 4D HTML documentation displayed in your current browser:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you hit the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `F1`), ` key while the cursor is inserted in a 4D class function or command name in the Code Editor;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you double-click on a 4D command in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Commands Page`), ` of the Explorer.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "documentation-language"
    }
  }, `Documentation language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Language of the HTML documentation to display. You can select a documentation in a different language from the application language.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "look-in-the-local-folder-first"
    }
  }, `Look in the local folder first`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option is only taken into account for command documentation access (excluding class functions). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sets where 4D will look for documentation pages.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When checked (default), 4D first looks for the page in the local folder (see below). If it is found, 4D displays the page in the current browser. If not, 4D automatically looks for it in the on-line documentation Web site. This makes it possible to access the documentation even when you are offline.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser. If it is not found, 4D displays an error message in the browser.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "local-folder"
    }
  }, `Local folder`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option is only taken into account for command documentation access (excluding class functions). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Indicates the location of the static HTML documentation. By default, this is the \\Help\\Command\\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. To designate a different location, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button next to the entry area and choose a documentation root folder (folder corresponding to the language: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `fr`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `en`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `es`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `de`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ja`), `).`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 55637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/general2-948c70c01e7b5824ffd053658a50ffeb.png");

/***/ }),

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/general3-3b8bdcccc3a3e646ae1a9e1cdaf1c9f2.png");

/***/ }),

/***/ 8072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/general4-273b030d0b728e88f5c7343ebc2d00ce.png");

/***/ }),

/***/ 37046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/general5-d52f6fe46e4e88a688517bb2ecde6908.png");

/***/ })

};
;