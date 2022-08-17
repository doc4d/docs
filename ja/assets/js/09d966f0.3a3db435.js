exports.id = 35809;
exports.ids = [35809];
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

/***/ 31184:
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
var overview_exports = {};
__export(overview_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(overview_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "overview",
  title: "About 4D Code"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "code-editor/overview",
  "id": "version-19-R6/code-editor/overview",
  "title": "About 4D Code",
  "description": "The 4D code used across your application is written in methods and classes.",
  "source": "@site/versioned_docs/version-19-R6/code-editor/overview.md",
  "sourceDirName": "code-editor",
  "slug": "/code-editor/overview",
  "permalink": "/docs/ja/code-editor/overview",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "overview",
    "title": "About 4D Code"
  },
  "sidebar": "docs",
  "previous": {
    "title": "ZIPFolder",
    "permalink": "/docs/ja/API/ZipFolderClass"
  },
  "next": {
    "title": "Code Editor",
    "permalink": "/docs/ja/code-editor/write-class-method"
  }
};
const assets = {};
const toc = [{
  value: "Creating methods",
  id: "creating-methods",
  level: 2
}, {
  value: "Creating classes",
  id: "creating-classes",
  level: 2
}, {
  value: "Deleting methods or classes",
  id: "deleting-methods-or-classes",
  level: 2
}, {
  value: "Importing and exporting code",
  id: "importing-and-exporting-code",
  level: 2
}, {
  value: "Project method properties",
  id: "project-method-properties",
  level: 2
}, {
  value: "Name",
  id: "name",
  level: 4
}, {
  value: "Attributes",
  id: "attributes",
  level: 4
}, {
  value: "Invisible",
  id: "invisible",
  level: 5
}, {
  value: "Shared by components and host database",
  id: "shared-by-components-and-host-database",
  level: 5
}, {
  value: "Execute on Server",
  id: "execute-on-server",
  level: 5
}, {
  value: "Execution mode",
  id: "execution-mode",
  level: 4
}, {
  value: "Available through",
  id: "available-through",
  level: 4
}, {
  value: "Web Services",
  id: "web-services",
  level: 5
}, {
  value: "Published in WSDL",
  id: "published-in-wsdl",
  level: 5
}, {
  value: "4D tags and URLs (4DACTION...)",
  id: "4d-tags-and-urls-4daction",
  level: 5
}, {
  value: "SQL",
  id: "sql",
  level: 5
}, {
  value: "REST Server",
  id: "rest-server",
  level: 5
}, {
  value: "Batch setting for method attributes",
  id: "batch-setting-for-method-attributes",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D code used across your application is written in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/methods"
    }
  }, `methods`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/classes"
    }
  }, `classes`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D IDE provides you with various features to create, edit, export, or delete your code. You will usually use the 4D `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/code-editor/write-class-method"
    }
  }, `code editor`), ` to work with your code.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-methods"
    }
  }, `Creating methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A method in 4D is stored in a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.4dm`), ` file located in the appropriate folder of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#sources"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `/Project/Sources/`)), ` folder. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/methods"
    }
  }, `several types of methods`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `All types of methods can be created or opened from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Explorer`), ` window (except Object methods which are managed from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/FormEditor/overview"
    }
  }, `Form editor`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Project methods can also be created or opened from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `File`), ` menu or toolbar (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `New/Method...`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Open/Method...`), `) or using shortcuts in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/code-editor/write-class-method#shortcuts"
    }
  }, `Code editor window`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Triggers can also be created or opened from the Structure editor.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Form methods can also be created or opened from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/FormEditor/overview"
    }
  }, `Form editor`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-classes"
    }
  }, `Creating classes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A user class in 4D is defined by a specific method file (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.4dm`), `), stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Project/architecture#sources"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `/Project/Sources/Classes/`)), ` folder. The name of the file is the class name. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create a class file from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File`), ` menu or toolbar (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `New/Class...`), `) or in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Methods`), ` page of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Explorer`), ` window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/classes"
    }
  }, `Classes`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "deleting-methods-or-classes"
    }
  }, `Deleting methods or classes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To delete an existing method or class, you can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on your disk, remove the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `.4dm`), ` file from the "Sources" folder,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the 4D Explorer, select the method or class and click `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(59857)/* ["default"] */ .Z),
    width: "19",
    height: "18"
  }), ` or choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Move to Trash`), ` from the contextual menu. `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `To delete an object method, choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear Object Method`), ` from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/FormEditor/overview"
    }
  }, `Form editor`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Object`), ` menu or context menu).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "importing-and-exporting-code"
    }
  }, `Importing and exporting code`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can import and export a method or a class code in the form of a file. These commands are found in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Method`), ` menu of the Code editor. `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Export Method...`), ` command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). As with printing, exporting does not take the collapsed state of code structures into account and the entire code is exported. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Import Method...`), ` command, a standard file opening dialog box appears, allowing you to designate the file to be imported. Importing replaces the selected text in the method. To replace an existing method by an imported method, select the entire contents of the method before carrying out the import.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The import/export function is multi-platform: a method exported under Mac OS can be imported under Windows and vice versa; 4D handles the conversion of characters when necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D can export and import methods in two formats:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D method (extension `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `.c4d`), `): In this format, methods are exported in encoded form. The names of objects are tokenized. This format is used in particular for exchanging methods between 4D applications and plug-ins in different languages. Conversely, it is not possible to display them in a text editor.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Text (extension `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `.txt`), `): In this format, methods are exported in text-only form. In this case, the methods are readable using a standard text editor or a source control tool.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "project-method-properties"
    }
  }, `Project method properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After creating a project method, you can rename it and modify its properties. Project method properties mainly concern their access and security conditions (access by users, integrated servers or services) as well as their execution mode. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The other types of methods do not have specific properties. Their properties are related to those of the objects to which they are attached.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To display the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Method Properties`), ` dialog box for a project method, you can either:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/code-editor/write-class-method"
    }
  }, `Code Editor`), `, select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Method Properties...`), ` command in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Method`), ` menu,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Methods`), ` page of the Explorer, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `right-click`), ` on the project method and select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Method Properties...`), ` in the context menu or options menu. `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#batch-setting-for-method-attributes"
    }
  }, `Batch setting for method attributes`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "name"
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can change the name of a project method in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Name`), ` area of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Method Properties`), ` window or in the Explorer.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The new name must comply with 4D naming rules (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/identifiers"
    }
  }, `Identifiers`), `). If a method with the same name already exists, 4D displays a message saying that the method name has already been used. If necessary, 4D sorts the list of methods again. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Warning:`), ` Changing the name of a method already used in the database can invalidate any methods or formulas that use the old method name and runs the risk of disrupting application functioning. You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html"
    }
  }, `Renaming`), `. With this function, you can automatically update the name wherever the method is called throughout the Design environment.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With 4D Server, the method name is changed on the server when you finish editing it. If more than one user is modifying the method name at the same time, the final method name will be the name specified by the last user to finish editing it. You may want to specify a method owner so that only certain users can change the method's name`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Database methods cannot be renamed. The same goes for triggers, form methods, and object methods, which are bound to objects and take their names from the object concerned. `)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "attributes"
    }
  }, `Attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can control how project methods are used and/or called in different contexts using attributes. Note that you can set attributes for an entire selection of project methods using the Explorer (see following section).`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "invisible"
    }
  }, `Invisible`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you do not want users to be able to run a project method using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Method...`), ` command of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu, you can make it Invisible by checking this option. An invisible method does not appear in the method execution dialog box (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#from-the-execute-method-dialog-box"
    }
  }, `From the Execute Method dialog box`), `). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you make a project method invisible, it is still available to database programmers. It remains listed on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Current-form-table.301-5830420.en.html"
    }
  }, `Current form table`), ` of the Explorer and in the list of routines in the Code Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "shared-by-components-and-host-database"
    }
  }, `Shared by components and host database`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This attribute is used within the framework of components. When it is checked, it indicates that the method will be available to components when the application is used as the host database. On the other hand, when the application is used as a component, the method will be available to the host databases. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about components, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Extensions/develop-components"
    }
  }, `Developing and installing 4D components`), ` chapter.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "execute-on-server"
    }
  }, `Execute on Server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This attribute is only taken into account for a 4D application in client-server mode. When this option is checked, the project method is always executed on the server, regardless of how it is called. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information on this option, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#execute-on-server"
    }
  }, `Execute on Server attribute`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "execution-mode"
    }
  }, `Execution mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option allows you to declare the method eligible for execution in preemptive mode. By default, 4D executes all the project methods of your applications in cooperative mode. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to benefit from the preemptive mode feature, you must explicitly declare all the methods that you want to be started in preemptive mode. The compiler will then check that these methods are actually thread-safe.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Execution in preemptive mode is only available in compiled mode. For more information, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html"
    }
  }, `Preemptive 4D processes`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following options are provided:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Can be run in preemptive processes`), `: By checking this option, you declare that the method is capable of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. The "preemptive" property of the method is set to "capable".`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, the 4D compiler will verify that the method is actually capable and will return errors if this is not the case -- for example, if it directly or indirectly calls commands or methods that cannot be run in preemptive mode (the entire call chain is parsed but errors are only reported to the first sublevel). You can then edit the method so that it becomes thread-safe, or select another option.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the method's preemptive capability is approved, it is tagged "thread-safe" internally and will be executed in preemptive mode whenever the required conditions are met. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a specific context (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148"
    }
  }, `When is a process started preemptively?`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cannot be run in preemptive processes`), `: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. The "preemptive" property of the method is set to "incapable".`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, the 4D compiler will not verify the ability of the method to run preemptively; it is automatically tagged "thread-unsafe" internally (even if it is theoretically capable). When called at runtime, this method will "contaminate" any other methods in the same thread, thus forcing this thread to be executed in cooperative mode, even if the other methods are thread-safe.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Indifferent `), `(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. The "preemptive" property of the method is set to "indifferent".`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, the 4D compiler will evaluate the preemptive capability of the method and will tag it internally as "thread-safe" or "thread-unsafe". No error related to preemptive execution is returned. If the method is evaluated as thread-safe, at runtime it will not prevent preemptive thread execution when called in a preemptive context. Conversely, if the method is evaluated "thread-unsafe", at runtime it will prevent any preemptive thread execution when called.\\`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html"
    }
  }, `New process`), ` command). If tagged "thread-safe" internally, it is only taken into account when called from other methods inside a call chain.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `Particular case`), `:`), ` If the method has also the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared by components and host database`), ` property (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Project-method-properties.300-5851552.en.html"
    }
  }, `Project method properties`), `), setting the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Indifferent`), ` option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Can be run in preemptive processes`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "available-through"
    }
  }, `Available through`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Availability attributes specify the external services which are allowed to explicitly call the method.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "web-services"
    }
  }, `Web Services`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This attribute lets you publish the current method as a Web Service accessible via SOAP requests. For more information, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html"
    }
  }, `Publication and use of Web Services`), ` chapter. When this option is checked, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Published in WSDL`), ` option is enabled.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Explorer, project methods that are offered as a Web Service are given a specific icon `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    parentName: "p",
    ...{
      "src": "https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",
      "alt": null
    }
  }), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). If the method name is not in keeping with this, 4D does not assign the property.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "published-in-wsdl"
    }
  }, `Published in WSDL`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This attribute is only available when the "Web Service" attribute is checked. It lets you include the current method in the WSDL of the 4D application. For more information about this, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689"
    }
  }, `Generation of the WSDL`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    parentName: "p",
    ...{
      "src": "https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",
      "alt": null
    }
  }), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "4d-tags-and-urls-4daction"
    }
  }, `4D tags and URLs (4DACTION...)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special 4DACTION URL used for calling 4D methods, nor the special 4DSCRIPT, 4DTEXT and 4DHTML tags (as well as the former 4DVAR and 4DHTMLVAR tags). For more information, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/14-R2/URLs-and-Form-Actions.300-1342176.en.html"
    }
  }, `URLs and Form Actions`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/4D-Transformation-Tags.300-5830552.en.html"
    }
  }, `4D Transformation Tags`), ` in the 4D `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Language Reference`), ` manual.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Explorer, project methods with this attribute are given a specific icon `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    parentName: "p",
    ...{
      "src": "https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",
      "alt": null
    }
  }), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For security reasons, this option is unchecked by default. Each method that can be executed using the special Web URL or tags must be indicated individually.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "sql"
    }
  }, `SQL`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When it is checked, this option allows the project method to be executed by the SQL engine of 4D. By default, it is not selected, which means that, unless explicitly authorized, 4D project methods are protected and cannot be called by the SQL engine of 4D. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html"
    }
  }, `Begin SQL`), `/`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html"
    }
  }, `End SQL`), `  tags or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html"
    }
  }, `QUERY BY SQL`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Notes:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Even if a method has the "SQL" attribute, access rights set at the level of the database settings and method properties are taken into account for the execution of the method.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The ODBC `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `SQLProcedure`), ` function only returns project methods with the "SQL" attribute.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html"
    }
  }, `4D SQL engine implementation`), ` in the 4D SQL manual.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "rest-server"
    }
  }, `REST Server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `This option is deprecated because it relies on legacy current record and current selection concepts. It is recommended to use** `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "em",
    ...{
      "href": "https://developer.4d.com/docs/en/REST/classFunctions.html"
    }
  }, `ORDA data model class functions`), ` for REST access. `)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "batch-setting-for-method-attributes"
    }
  }, `Batch setting for method attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. This feature is especially useful for modifying the attributes of a large number of project methods. It can also be used during development to apply common attributes to groups of similar methods quickly.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For batch setting of method attributes:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `On the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html"
    }
  }, `Methods Page`), ` of the 4D Explorer, expand the options menu, then choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Batch setting of attributes...`), ` command. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Attributes for methods`), ` dialog appears.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the "Matching method name:" area, enter a string that lets you designate the methods you want to modify as a batch.
The character string is used as a search criterion for the method names.
Use the wildcard character @ to help define groups of methods:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To designate methods whose names begin with..., type @ at the end of the string. For example: web@`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To designate methods whose names contain..., type @ in the middle of the string. For example: web@write`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To designate methods whose names end with..., type @ at the beginning of the string. For example: @write`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To designate all of the methods, just type @ in the area.\\
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Notes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The search does not take upper/lower case into account.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can enter several @ characters in the string, for example dtro_@web@pro.@`)))), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `True`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `False`), ` radio button corresponding to the value to be applied.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Note:`), ` If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Click on `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Apply`), `. The modification is applied instantly to all the project methods designated by the character string entered.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 59857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg==");

/***/ })

};
;