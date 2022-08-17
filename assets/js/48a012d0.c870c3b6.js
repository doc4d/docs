exports.id = 98576;
exports.ids = [98576];
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

/***/ 6749:
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
var building_exports = {};
__export(building_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(building_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "building",
  title: "Building a project package"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Project/building",
  "id": "version-18/Project/building",
  "title": "Building a project package",
  "description": "4D Developer includes a final application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.",
  "source": "@site/versioned_docs/version-18/Project/building.md",
  "sourceDirName": "Project",
  "slug": "/Project/building",
  "permalink": "/docs/18/Project/building",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "building",
    "title": "Building a project package"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Developing a project",
    "permalink": "/docs/18/Project/developing"
  },
  "next": {
    "title": "Object libraries",
    "permalink": "/docs/18/FormEditor/objectLibrary"
  }
};
const assets = {};
const toc = [{
  value: "Build application overview",
  id: "build-application-overview",
  level: 2
}, {
  value: "Build application settings",
  id: "build-application-settings",
  level: 3
}, {
  value: "Log file",
  id: "log-file",
  level: 3
}, {
  value: "Application name and destination folder",
  id: "application-name-and-destination-folder",
  level: 2
}, {
  value: "Compiled structure page",
  id: "compiled-structure-page",
  level: 2
}, {
  value: "Build compiled structure",
  id: "build-compiled-structure",
  level: 3
}, {
  value: "Include related folders",
  id: "include-related-folders",
  level: 4
}, {
  value: "Build component",
  id: "build-component",
  level: 3
}, {
  value: "Application page",
  id: "application-page",
  level: 2
}, {
  value: "Build stand-alone Application",
  id: "build-stand-alone-application",
  level: 3
}, {
  value: "4D Volume Desktop Location",
  id: "4d-volume-desktop-location",
  level: 4
}, {
  value: "Data linking mode",
  id: "data-linking-mode",
  level: 4
}, {
  value: "Generated files",
  id: "generated-files",
  level: 4
}, {
  value: "Customizing 4D Volume Desktop folder",
  id: "customizing-4d-volume-desktop-folder",
  level: 4
}, {
  value: "Location of Web files",
  id: "location-of-web-files",
  level: 4
}, {
  value: "Client/Server page",
  id: "clientserver-page",
  level: 2
}, {
  value: "What is a Client/Server application?",
  id: "what-is-a-clientserver-application",
  level: 3
}, {
  value: "Build server application",
  id: "build-server-application",
  level: 3
}, {
  value: "4D Server location",
  id: "4d-server-location",
  level: 4
}, {
  value: "Current version",
  id: "current-version",
  level: 4
}, {
  value: "Data linking mode",
  id: "data-linking-mode-1",
  level: 4
}, {
  value: "Build client application",
  id: "build-client-application",
  level: 3
}, {
  value: "4D Volume Desktop",
  id: "4d-volume-desktop",
  level: 4
}, {
  value: "Copy of client applications in the server application",
  id: "copy-of-client-applications-in-the-server-application",
  level: 4
}, {
  value: "Displaying update notification",
  id: "displaying-update-notification",
  level: 4
}, {
  value: "Forcing automatic updates",
  id: "forcing-automatic-updates",
  level: 4
}, {
  value: "Update Error",
  id: "update-error",
  level: 4
}, {
  value: "Generated files",
  id: "generated-files-1",
  level: 3
}, {
  value: "Customizing 4D Volume Desktop folder",
  id: "customizing-4d-volume-desktop-folder-1",
  level: 4
}, {
  value: "Location of Web files",
  id: "location-of-web-files-1",
  level: 4
}, {
  value: "Plugins &amp; components page",
  id: "plugins--components-page",
  level: 2
}, {
  value: "Licenses &amp; Certificate page",
  id: "licenses--certificate-page",
  level: 2
}, {
  value: "Licenses",
  id: "licenses",
  level: 3
}, {
  value: "OS X signing certificate",
  id: "os-x-signing-certificate",
  level: 3
}, {
  value: "About Gatekeeper",
  id: "about-gatekeeper",
  level: 4
}, {
  value: "About Notarization",
  id: "about-notarization",
  level: 4
}, {
  value: "Customizing application icons",
  id: "customizing-application-icons",
  level: 2
}, {
  value: "Management of data file(s)",
  id: "management-of-data-files",
  level: 2
}, {
  value: "Opening the data file",
  id: "opening-the-data-file",
  level: 3
}, {
  value: "Last data file opened",
  id: "last-data-file-opened",
  level: 3
}, {
  value: "Path of last data file",
  id: "path-of-last-data-file",
  level: 4
}, {
  value: "Configuring the data linking mode",
  id: "configuring-the-data-linking-mode",
  level: 4
}, {
  value: "Defining a default data folder",
  id: "defining-a-default-data-folder",
  level: 3
}, {
  value: "Management of client connection(s)",
  id: "management-of-client-connections",
  level: 2
}, {
  value: "Connection scenario",
  id: "connection-scenario",
  level: 3
}, {
  value: "Storing the last server path",
  id: "storing-the-last-server-path",
  level: 3
}, {
  value: "Availability of the server selection dialog box in case of error",
  id: "availability-of-the-server-selection-dialog-box-in-case-of-error",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D Developer includes a final application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The application builder allows you to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build a compiled database, without interpreted code,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build a stand-alone, double-clickable application, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `i.e.`), `, merged with 4D Volume Desktop, the 4D database engine,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build different applications from the same compiled database via an XML project,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build homogeneous client-server applications,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build client-server applications with automatic updating of client and server parts.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Save your build settings for future use (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Save settings`), ` button).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "build-application-overview"
    }
  }, `Build application overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Building a project package can be carried out using:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `either the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html"
    }
  }, `BUILD APPLICATION`), ` command,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#application-builder"
    }
  }, `Build Application window`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To display the Build Application dialog, select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build Application...`), ` from the menu bar.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97725)/* ["default"] */ .Z),
    width: "278",
    height: "254"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Build Application dialog includes several pages that can be accessed using tabs:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22648)/* ["default"] */ .Z),
    width: "860",
    height: "645"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Building can only be carried out once the database is compiled. If you select this command without having previously compiled the database, or if the compiled code does not correspond to the interpreted code, a warning dialog box appears indicating that the database must be (re)compiled.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-application-settings"
    }
  }, `Build application settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each build application parameter is stored as an XML key in the application project file named "buildApp.4DSettings" XML file, located in the Settings folder of the database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Default parameters are used the first time the Build Application dialog box is used. The contents of the project file are updated, if necessary, when you click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Save settings`), `. You can define several other XML settings file for the same project and employ them using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/BUILD-APPLICATION.301-4311300.en.html"
    }
  }, `BUILD APPLICATION`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `XML keys provide additional options besides those displayed in the Build Application dialog box. The description of these keys are detailed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html"
    }
  }, `4D XML Keys BuildApplication`), ` manual.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "log-file"
    }
  }, `Log file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When an application is built, 4D generates a log file in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Logs`), ` folder. The log file stores the following information for each build:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The start and end of building of targets,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The name and full access path of the files generated,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The date and time of the build,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any errors that occurred.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "application-name-and-destination-folder"
    }
  }, `Application name and destination folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75061)/* ["default"] */ .Z),
    width: "590",
    height: "56"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enter the name of the application in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Application Name`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specify the folder for the built application in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Destination Folder`), `. If the specified folder does not already exist, 4D will create a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Build`), ` folder for you.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compiled-structure-page"
    }
  }, `Compiled structure page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab allows you to build a standard compiled structure file and/or a compiled component:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22648)/* ["default"] */ .Z),
    width: "860",
    height: "645"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-compiled-structure"
    }
  }, `Build compiled structure`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Builds a database containing only compiled code.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature creates a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.4dz`), ` file within a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Compiled Database`), ` folder. If you have named your application \u201CMyProject\u201D, 4D will create:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<destination\\>/Compiled Database/\\<database name>/\\MyProject.4dz`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A .4dz file is essentially a zipped (packed) version of the project folder. .4dz files can be used by 4D Server, 4D Volume license (merged applications), and 4D Developer. The compact and optimized size of .4dz files makes project packages easy to deploy.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "include-related-folders"
    }
  }, `Include related folders`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you check this option, any folders related to the database are copied into the Build folder as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Components`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Resources`), ` folders. For more information about these folders, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://livedoc.4d.com/4D-Design-Reference-18/Managing-4D-databases/Description-of-4D-files.300-4575698.en.html#100374"
    }
  }, `Database Architecture`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-component"
    }
  }, `Build component`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Builds a compiled component from the structure.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component is a standard 4D project in which specific functionalities have been developed. Once the component has been configured and installed in another 4D database (the host database), its functionalities are accessible from the host database. For more information about components, refer to the Developing and installing 4D components" documentation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you have named your application, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent`), `, 4D will create a Components folder containing `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent.4dbase`), ` folder:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<destination>/Components/name.4dbase/\\<name>.4DZ`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent.4dbase`), ` folder contains:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `MyComponent.4DZ`), ` file`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Resources`), ` folder - any associated Resources are automatically copied into this folder. Any other components and/or plugins folders are not copied (a component cannot use plug-ins or other components).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "application-page"
    }
  }, `Application page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab allows you can build a stand-alone, single-user version of your application:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(95176)/* ["default"] */ .Z),
    width: "856",
    height: "647"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-stand-alone-application"
    }
  }, `Build stand-alone Application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Checking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build stand-alone Application`), ` option and clicking `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` will create a stand-alone (double-clickable) application directly from your database project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following elements are required for the build:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D Volume Desktop (the 4D database engine),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#licenses"
    }
  }, `appropriate license`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On Windows, this feature creates an executable file (.exe). On macOS, it handles the creation of software packages.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The principle consists of merging a compiled structure file with 4D Volume Desktop. The functionality provided by the 4D Volume Desktop file is linked with the product offer to which you have subscribed. For more information about this point, refer to the sales documentation and to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://www.4d.com/"
    }
  }, `4D Store`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can define a default data file or allow users to create and use their own data file (see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html"
    }
  }, `Data file management in final applications`), ` section).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is possible to automate the update of merged single-user applications by means of a sequence of language commands (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html"
    }
  }, `Automatic updating of server or single-user applications`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-volume-desktop-location"
    }
  }, `4D Volume Desktop Location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In order to build a stand-alone application, you must first designate the folder containing the 4D Volume Desktop file:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Windows`), ` - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `macOS`), ` - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To select the 4D Volume Desktop folder, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (macOS).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "data-linking-mode"
    }
  }, `Data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application name`), ` (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk. This option should generally be used for merged applications, unless you specifically need to duplicate your application.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application path`), ` - The merged 4D application will parse the application's `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the data linking mode, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `Last data file opened`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "generated-files"
    }
  }, `Generated files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` button, 4D automatically creates a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Final Application`), ` folder in the specified `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Destination Folder`), `. Inside the Final Application folder is a subfolder with the name of the specified application in it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you have specified "MyProject" as the name of the application, you will find the following files in this subfolder (aka MyProject):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Windows`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `MyProject.exe  - Your executable and a MyProject.rsr (the application resources)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Database folder  - Includes a Resources folder and  MyProject.4DZ file. They make up the compiled structure of the database as well as the database Resources folder.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note`), `: This folder also contains the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Default Data`), ` folder, if it has been defined (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#data-file-management-in-final-applicatons"
    }
  }, `Data file management in final applications`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `(Optional) Components folder and/or Plugins folder - Contains any components and/or plug-in files included in the database. For more information about this, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#plugins-and-components"
    }
  }, `Plugins and components`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Licenses folder - An XML file of license numbers integrated into the application. For more information about this, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#licenses-and-certificate"
    }
  }, `Licenses & Certificate`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Additional items added to the 4D Volume Desktop folder, if any (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#customizing-4d-volume-desktop-folder"
    }
  }, `Customizing the 4D Volume Desktop folder`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `All these items must be kept in the same folder in order for the executable to operate.`)))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `macOS`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. For more information about integrating plug-ins and components, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#plugins-and-components"
    }
  }, `Plugins and components`), ` section. For more information about integrating licenses, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#licenses-and-certificate"
    }
  }, `Licenses & Certificate`), ` section. `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Note`), `: In macOS, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Application-file.301-4311297.en.html"
    }
  }, `Application file`), ` command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "customizing-4d-volume-desktop-folder"
    }
  }, `Customizing 4D Volume Desktop folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Final Application`), ` folder. You're then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Install a 4D Volume Desktop version corresponding to a specific language;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add a custom `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `PlugIns`), ` folder;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Customize the contents of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Resources`), ` folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In macOS, 4D Volume Desktop is provided in the form of a software package. In order to modify it, you must first display its contents (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Control+click`), ` on the icon).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "location-of-web-files"
    }
  }, `Location of Web files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If your stand-alone application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `cert.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `key.pem`), ` files (optional): These files are used for SSL connections and by data encryption commands,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `default Web root folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Items must be installed:  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `on Windows`), `: in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Final Application\\MyProject\\Database`), ` subfolder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `on macOS`), `: next to the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `MyProject.app`), ` software package.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "clientserver-page"
    }
  }, `Client/Server page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(69233)/* ["default"] */ .Z),
    width: "853",
    height: "641"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "what-is-a-clientserver-application"
    }
  }, `What is a Client/Server application?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A client/server application comes from the combination of three items:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A compiled 4D database,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The 4D Server application,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The 4D Volume Desktop application (macOS and/or Windows).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Also, the client/server application is customized and its handling simplified:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To launch the server portion, the user simply double-clicks on the server application. The database does not need to be selected.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application. You do not need to choose a database in a connection dialog box. The client targets the server either using its name, when the client and server are on the same sub-network, or using its IP address, which is set using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `IPAddress`), ` XML key in the buildapp.4DSettings file. If the connection fails, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#management-of-client-connections"
    }
  }, `specific alternative mechanisms can be implemented`), `. You can "force" the display of the standard connection dialog box by holding down the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Option`), ` (macOS) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt`), ` (Windows) key while launching the client application.
Only the client portion can connect to the corresponding server portion. If a user tries to connect to the server portion using a standard 4D application, an error message is returned and connection is impossible.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A client/server application can be set so that the client portion `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#copy-of-client-applications-in-the-server-application"
    }
  }, `can be updated automatically over the network`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `It is also possible to automate the update of the server part through the use of a sequence of language commands (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-UPDATE-FOLDER.301-4311308.en.html"
    }
  }, `SET UPDATE FOLDER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/RESTART-4D.301-4311311.en.html"
    }
  }, `RESTART 4D`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-server-application"
    }
  }, `Build server application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Check this option to generate the server part of your application during the building phase. You must designate the location on your disk of the 4D Server application to be used. This 4D Server must correspond to the current platform (which will also be the platform of the server application).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-server-location"
    }
  }, `4D Server location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button and use the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Browse for folder`), ` dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "current-version"
    }
  }, `Current version`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to indicate the current version number for the application generated. You may then accept or reject connections by client applications according to their version number. The interval of compatibility for client and server applications is set using specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-application-settings"
    }
  }, `XML keys`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "data-linking-mode-1"
    }
  }, `Data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application name`), ` (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk. This option should generally be used for merged applications, unless you specifically need to duplicate your application.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application path`), ` - The merged 4D application will parse the application's `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the data linking mode, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `Last data file opened`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-client-application"
    }
  }, `Build client application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Checking this option generates the client part of your application during the building phase.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-volume-desktop"
    }
  }, `4D Volume Desktop`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must designate the location on your disk of the 4D Volume Desktop application to be used. This 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application).
If you want to build a client application for a \u201Cconcurrent\u201D platform, you must carry out an additional build operation using a 4D application running on that platform. This is only necessary for the initial version of the client application since subsequent updates can be handled directly on the same platform using the automatic update mechanism. For more information about this point, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#customizing-4d-server-and-or-4d-client-folders"
    }
  }, `Customizing 4D Server and/or 4D Client folders`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `IPAddress`), ` XML key in the buildapp.4DSettings file. For more information about this file, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `BUILD APPLICATION`), ` command. You can also implement specific mechanisms in the event of a connection failure. The different scenarios proposed are described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#management-of-client-connections"
    }
  }, `Management of connections by client applications`), ` paragraph.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "copy-of-client-applications-in-the-server-application"
    }
  }, `Copy of client applications in the server application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The options of this area to set up the mechanism for updating the client parts of your client/server applications using the network each time a new version of the application is generated.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Allow automatic update of Windows client application`), ` - Check these options so that your Windows client/server application can take advantage of the automatic update mechanism for clients via the network.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Allow automatic update of Macintosh client application`), ` - Check these options so that your Macintosh client/server application can take advantage of the automatic update mechanism for clients via the network.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Allow automatic update of Macintosh client application`), ` - If you want to create a cross-platform client application, you must designate the location on your disk of the 4D Volume Desktop application that corresponds to the \u201Cconcurrent\u201D platform of the build platform.`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `For example, if you build your application in Windows, you must use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button to designate the 4D Volume Desktop macOS application (provided as a package).`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "displaying-update-notification"
    }
  }, `Displaying update notification`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The client application update notification is carried out automatically following the server application update.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Upgrade4DClient`), ` subfolder of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ApplicationName`), ` Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4darchive`), ` update file is available for each platform:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the client side, when the \u201Cold\u201D client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `OK`), `, the new version is downloaded to the client machine over the network. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. The old version of the application is then placed in the machine\u2019s recycle bin.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cancel`), `, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "forcing-automatic-updates"
    }
  }, `Forcing automatic updates`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. In this case, the update mechanism will not allow non-updated client applications to connect. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "build-server-application"
    }
  }, `current version number`), ` is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-application-settings"
    }
  }, `XML keys`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "update-error"
    }
  }, `Update Error`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If 4D cannot carry out the update of the client application, the client machine displays the following error message: \u201CThe update of the client application failed. The application is now going to quit.\u201D`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Pathnames`), ` - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `ClientMacFolderToWin`), `). More particularly, check the pathnames to the versions of 4D Volume Desktop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Read/write privileges`), ` - On the client machine, check that the current user has write access rights for the client application update.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "generated-files-1"
    }
  }, `Generated files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once a client/server application is built, you will find a new folder in the destination folder named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Client Server executable`), `. This folder contains two subfolders, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `These folders are not generated if an error occurs. In this case, open the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#log-file"
    }
  }, `log file`), ` in order to find out the cause of the error.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client`), ` folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), ` folder contains the server portion of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The contents of these folders vary depending on the current platform:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Windows`), ` - Each folder contains the application executable file, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client.exe`), `for the client part and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server.exe`), ` for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `macOS`), ` - Each folder contains only the application package, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName> Client`), ` for the client part and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName> Server`), ` for the server part. Each package contains all the necessary items for the application to work. Under macOS, launch a package by double-clicking it.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The macOS packages built contain the same items as the Windows subfolders. You can display their contents (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Control+click`), ` on the icon) in order to be able to modify them.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you checked the \u201CAllow automatic update of client application\u201D option, an additional subfolder called `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Upgrade4DClient`), ` is added in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), ` folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "customizing-4d-volume-desktop-folder-1"
    }
  }, `Customizing 4D Volume Desktop folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When building a double-clickable application, 4D copies the contents of the 4D Volume Desktop folder into the Final Application subfolder of the destination folder. You are then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for instance:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Install a 4D Volume Desktop version corresponding to a specific language;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add a custom PlugIns folder;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Customize the contents of the Resources folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "location-of-web-files-1"
    }
  }, `Location of Web files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `cert.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `key.pem`), ` files (optional): These files are used for SSL connections and by data encryption commands,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Default Web root folder (WebFolder).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Items must be installed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `on Windows`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Server application`), ` - in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Client Server executable\\ \\<ApplicationName>Server\\Server Database`), ` subfolder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Client application`), ` - in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Client Server executable\\ \\<ApplicationName>Client`), ` subfolder.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `on macOS`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Server application`), ` - next to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ApplicationName>Server`), ` software package.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Client application`), ` - next to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ApplicationName>Client`), ` software package.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "plugins--components-page"
    }
  }, `Plugins & components page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On this tab, you set each `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/18/Concepts/plug-ins"
    }
  }, `plug-in`), ` and each `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/18/Concepts/components"
    }
  }, `component`), ` that you will use in your stand-alone or client/server application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The page lists the elements loaded by the current 4D application:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94541)/* ["default"] */ .Z),
    width: "861",
    height: "650"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Active`), ` column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in or a component, deselect the check box next to it.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Plugins and components`), ` column - Displays the name of the plug-in/component.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ID`), ` column - Displays the plug-in/component's identification number (if any).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Type`), ` column - Indicates the type of item: plug-in or component.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to integrate other plug-ins or components into the executable application, you just need to place them in a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `PlugIns`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Components`), ` folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#customizing-4d-volume-desktop-folder"
    }
  }, `Customizing the 4D Volume Desktop folder`), `) can be used to integrate any type of file into the executable application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The use of plug-ins and/or components in a deployment version requires the necessary license numbers.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "licenses--certificate-page"
    }
  }, `Licenses & Certificate page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Licences & Certificate page can be used to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `designate the license number(s) that you want to integrate into your single-user stand-alone application`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `sign the application by means of a certificate in macOS.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97395)/* ["default"] */ .Z),
    width: "857",
    height: "647"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "licenses"
    }
  }, `Licenses`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Developer Professional`), ` license as well as each `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Desktop Volume`), ` license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove or add a license, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[+]`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[-]`), ` buttons at the bottom of the window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you click on the `, `[`, `+] button, an open file dialog box appears displaying by default the contents of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Licenses`), ` folder of your machine. For more information about the location of this folder, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html"
    }
  }, `Get 4D folder`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Developer Professional`), ` license and the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Desktop Volume`), ` licenses were purchased.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have selected a file, the list will indicate the characteristics of the license that it contains.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `License #`), ` - Product license number`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `License`), ` - Name of the product`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Expiration date`), ` - Expiration date of the license (if any)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Path`), ` -  Location on disk`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a license is not valid, a message will warn you.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "os-x-signing-certificate"
    }
  }, `OS X signing certificate`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The application builder can sign merged 4D applications under macOS (single-user applications, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Sign application`), ` option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(4699)/* ["default"] */ .Z),
    width: "794",
    height: "145"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Name of certificate`), ` - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2498)/* ["default"] */ .Z),
    width: "1187",
    height: "846"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html"
    }
  }, `http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the \u201C/usr/bin/\u201D folder. If an error occurs, make sure that this utility is present on your disk.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "about-gatekeeper"
    }
  }, `About Gatekeeper`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Sign application`), ` option of the 4D application builder lets you generate applications that are compatible with this option by default.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "about-notarization"
    }
  }, `About Notarization`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In 4D v18, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#os-x-signing-certificate"
    }
  }, `built-in signing features`), ` have been updated to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D (note also that it requires installing Xcode). Please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://blog.4d.com/how-to-notarize-your-merged-4d-application/"
    }
  }, `this 4D blog post`), ` that provides a step-by-step description of the notarization process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information on the notarization concept, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow"
    }
  }, `this page on the Apple developer website`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "customizing-application-icons"
    }
  }, `Customizing application icons`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `macOs`), ` - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Apple, Inc. provides a specific tool for building `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `icns`), ` icon files (for more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2"
    }
  }, `Apple documentation`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Your icon file must have the same name as the project file and include the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.icns`), ` extension. 4D automatically takes this file into account when building the double-clickable application (the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.icns`), ` file is renamed `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `ApplicationName.icns`), ` and copied into the Resources folder; the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `CFBundleFileIcon`), ` entry of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `info.plist`), ` file is updated).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Windows`), ` - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.ico`), ` extension), prior to building the application file, and place it next to the project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Your icon file must have the same name as the project file and include the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.ico`), ` extension. 4D automatically takes this file into account when building the double-clickable application.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html"
    }
  }, `XML keys`), ` in the buildApp.4DSettings file to designate each icon to use. The following keys are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `RuntimeVLIconWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `RuntimeVLIconMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ServerIconWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ServerIconMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientMacIconForMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientWinIconForMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientMacIconForWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientWinIconForWinPath`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "management-of-data-files"
    }
  }, `Management of data file(s)`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "opening-the-data-file"
    }
  }, `Opening the data file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The opening sequence for launching a merged application is:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `4D tries to open the last data file opened, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `as described below`), ` (not applicable during initial launch).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D displays a standard "Open data file" dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "last-data-file-opened"
    }
  }, `Last data file opened`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "path-of-last-data-file"
    }
  }, `Path of last data file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Any standalone or server applications built with 4D stores the path of the last data file opened in the application's user preferences folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The location of the application's user preferences folder corresponds to the path returned by the following statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `userPrefs:=Get 4D folder(Active 4D Folder)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The data file path is stored in a dedicated file, named `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "configuring-the-data-linking-mode"
    }
  }, `Configuring the data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `application name`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D therefore lets you link the data file path to the application path. In this case, the data file will be linked using a specific path and will not just be the last file opened. You therefore link your data `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `by application path`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file is updated accordingly).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Duplication when data linked by application name:`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(16735)/* ["default"] */ .Z),
    width: "305",
    height: "208"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Duplication when data linked by application path:`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(36165)/* ["default"] */ .Z),
    width: "305",
    height: "189"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can select the data linking mode during the build application process. You can either:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#application"
    }
  }, `Application page`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#client-server"
    }
  }, `Client/Server page`), ` of the Build Application dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `LastDataPathLookup`), ` XML key (single-user application or server application).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "defining-a-default-data-folder"
    }
  }, `Defining a default data folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to define a default data file at the application building stage. When the application is launched for the first time, if no local data file is found (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#opening-the-data-file"
    }
  }, `opening sequence described above`), `), the default data file is automatically opened silently in read-only mode by 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `More specifically, the following cases are covered:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Allowing the distribution of merged applications with read-only data (for demo applications, for instance).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To define and use a default data file:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the database project folder. This file must be provided along with all other necessary files, depending on the database configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following graphic illustrates this feature:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(56923)/* ["default"] */ .Z),
    width: "686",
    height: "386"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "management-of-client-connections"
    }
  }, `Management of client connection(s)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "connection-scenario"
    }
  }, `Connection scenario`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), `OR`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), `If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application tries to connect to the specified server address.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If this fails, the client application displays a connection error dialog box.`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Select...`), ` button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Quit`), ` button, the client application quits.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "storing-the-last-server-path"
    }
  }, `Storing the last server path`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `userPrefs:=Get 4D folder(Active 4D Folder)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html"
    }
  }, `IPAddress`), ` key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability.  `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Pressing the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt/Option`), ` key at startup to display the server selection dialog box is still supported in all cases.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "availability-of-the-server-selection-dialog-box-in-case-of-error"
    }
  }, `Availability of the server selection dialog box in case of error`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html"
    }
  }, `ServerSelectionAllowed`), ` XML key on the machine where the application was built:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display of an error message with no access possible to the server selection dialog box`), `. Default operation. The application can only quit.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ServerSelectionAllowed`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `False`), ` or key omitted
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(92938)/* ["default"] */ .Z),
    width: "517",
    height: "284"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display of an error message with access to the server selection dialog box possible`), `. The user can access the server selection window by clicking on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Select...`), ` button.
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ServerSelectionAllowed`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `True`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(88796)/* ["default"] */ .Z),
    width: "526",
    height: "248"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(29190)/* ["default"] */ .Z),
    width: "466",
    height: "488"
  })))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 56923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/DefaultData-79a54ee98aab6342ef448256d8372906.png");

/***/ }),

/***/ 22648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/appbuilderProj-52004fd6e5c2243a1c57a9e389903786.png");

/***/ }),

/***/ 75061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAk4AAAA4CAIAAACE3+BXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAj6SURBVHhe7ZsxluS2EYb7LJtP5Lcdzh0m2vcc8QQKFDlzJHW8sRPH2897B6cOJnXsE2hvMKoCCkCBANnsbordpr7v8Y2KBVQVSAD8Re7M4QcAAMB++fj4QOoAAGDPIHUAALBzkDoAANg5SB0AAOwcpA4AAHYOUvcYDn/7LwfHzGELBQDWAKl7DPIs+8d/fnvyQxYHPASkDmBddFuZCRuC1MEMSB3Auui2MhM2BKmDGZA6gHXRbWXmYs7D4TCc7eQ6JPR4ev/x4/10jMa13Byo6MDrkafxbE6Qum+vMp63byOB+eXnz4fD5y/fK2c6Qogx1ac5vv/6aXlnd8THLmwPUgewLrqtzFyIiM1xGI63KcRt0rKWIGme49GL3cOl7vOnl5EIRTGbkTprUkV8+fWXcYf7j1IiPnZhe5A6gHXRbWXmMlTpTu/xp7mu4PFSdzr7oT9e6l7fPn/6+b0ozdfh8DZksWmOokO1veKB1D0epA5gXXRbmbmIpHGV1iUJCZ/VknvaqabXGMkVOqWPi9Jm6Hk5S6cpsMTlF7XQerKIXCBhsS5FMcUyLFdoSuMXX65W0o4G7vJeJEvdl+/yc/jJZOb9y0v0yE+xD69foz9IoL7DeXnLthoimTIMzaOfK40U7qJKqy9qrtev0jPx9i0+dmF7kDqAddFtZeYSisIVy2QinunTP1pTzpFR2hraziNnUqVR0eh17Qkf22aO+KY0fmcGOxdIsedBLee4iJO63356S5okOuT1TN/w7F/yUp8iWu4DpupTejVUu2RzWlgbmjyEqM5Vr5WuT3zswvYgdQDrotvKzAV4fVN9MSmpnvFyEtzzzmS4LAVpNOrO1tYJFG9T1NsR57GA2mNEjw/v2ToAR3MR83ipSwrX6pkY8d3r26tTtUR+LSviFOQt+5uE5ZUuIDpa9w9HyRYfu7A9SB3Auui2MvMyRQ0S8QHvlSBL0LzTC0atEsUjVt1Z6QeKtynq7Yj3xPg222xRb9cDuJZK6uJ3y68meF5s5NVNXrniz5EOucM5L0tdLWxI3VOC1AGsi24rMy/iH/hKfthLQ2opAjDljL5saFuVtdOSXd4WI0lNJ//IjtQejRKCJ7dcKOptMYpX8b0uUUtd+FZZfYR00vUyvL6kU99UDu8U23/AjDKWO2hr/bmSD5jPCFIHsC66rcy8RPskTxKjLcNg3/NMfqadSSdyMrGN0M0kKERbH+uRallg6ugUZ5Q225GxJySInrboVCpnlwGEsbUFpxlLnUpOfrvyfn0zc397VzX1napwkex0HUprTiutRtRIrSjwaymPA6kDWBfdVmbeTvcZf82D/89HkLqoQxeO9BHynkPEbPSVctERH7uwPUgdwLrotjLzdpC6q1kqdfoBM/4D3h2H/aFC4790xMcubA9SB7Auuq3MvB2k7moWSF38c7f2c+U1h32uvDFJfOzC9iB1AOui28pM2BB5lsWHGkALUgewLrqtzIQNkWcZB8fMYQsFANYAqQMAgJ2D1AEAwM5B6gAAYOcgdQAAsHOQOgAA2DlIHQAA7BykDgAAdg5SBwAAOwepAwCAnYPUAQDAzkHqAABg5yB1AACwc5A6AADYOUgdAADcxb82xwovBqkDAIC7EO3534YgdQAAsDVIHQAA7JydSd15OBSOp3dzX8X76Xhr6F2xSwcv3drGrhMey3nQOZE1MZzjqcxrNB26ZCbnzi+JxfN71yL0VAuyGbijVJxfnKMbklhtwJHuGFahO34dvTEuO3G98Aj2J3V5uYWNunSN3bM91tpaC/N0u601BliRVuqOQj1N4uw8IxNlWleWg8LMynFNWn7JXupmy85tHv0zV3Qnzfj1trj78n46VReG1D0RO5a65ftTuGd7rLW1FubpdltrDLAiHakbhlrrxDcM03Pnp/UPmuKZtDdU73bLzp1J3cXnC1L3ROxa6vxaVDNSlmk6l6iENrqdKcbJGnPe0ts6J6pYX8FKTiVMuNjMVJK6REja1o0R2l+esHraqwBbEe++/EwzqVMVPfJTpy03pEn2E5ZtNWxC5WzZCimNlUt6JkrtjMsjpnVwzmK3RqlTLc4+dXh/g3Tvz/zlu8GMnGeLkpCcoJTzd8hcPeoRFXxZeBr+JFLn/PH/tMRRrVIfmG0x0mpXc7Ssfbd+rAXoKBYmLIS2qSTjEmFvjlrVDJZ2M5drhM2xuy//KXNqjjRRaUUkMzX5+Vdnnka1Z1dI6Rgsl8ZwfcZo8kQaWdW/LeQNi3GLc4oqysJKgoR4kiOZrtP85VdOt1f81iiFU5TdtAmkYrfZJYDnYfdSF07DbivIkh7vPx+Y7a4zmMZ0N82f9mXwpp3ZS2g0nvkk6eICzmljC2hAWwgewnjixhOaHWLYjIknk1dC7r9ghVhsQNrq/gGXbcyoULR9/2w3RrrGgA/p0uYZ2RHxxMGn+zN/+VWGeaez25s2RedmwvOya6nLa3FiUcZVXW8Pb0/thJhKrCXdFPFOV8k0nvkkub7inC4k0BaCh5AnIszcOU9fmaA4pW5iu3PnnPV0S8N4hYwWQ+vpl4j4phzpndluDHcNdUiXNs/INmLWkru+HAmoR9jN1nU6u845yxVd4eFcIXX//vtfDn/9Z9dYzJZSJ3ZeiGrnBk/aNr1F33Vmn67z6W5qpOplR3R7ZrqemSSlVRuds87i0joTNqeeiDJNzq/L0f/mSnfCvFMTza+QOl471Z5uiYhrKnGljEvvK2ajXZxTtOEjOyG59P5YfV/FjSsHzg91yi5dL6N9Uwkh/gamzwpPw/6kLlMvt7DhDFmbpaPbC3aWl6pfs9lOidwjqRfrK7ZJRnak9VxKIqa1dX8tpRlSrwJshb/7Mkm28EazolOaW/oTVjvnV8h4MQhaIRIddl6KZkpPl9y5y++O5orZKN2u/rUU6+ntTLgeP9T5y09j6A112u7ctGl857YCPA1XSN0a/NFSB/D/jTwnLz5dL7FGDoB9gdQBPA3yinD/C8GNbxUS5kEsYVcgdQDPQPwQdp/Q2cc0Pp8BjEHqAABg54j2bIwVXgxSBwAAOwepAwCAnfPx8fE7gD4UYAvcVc8AAAAASUVORK5CYII=");

/***/ }),

/***/ 69233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/buildappCSProj-88ff259bde65d21c55f10e729446ae89.png");

/***/ }),

/***/ 97725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 97395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/buildapplicenseProj-ab0272423a1fe8e613c060288755e4eb.png");

/***/ }),

/***/ 4699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 94541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/buildapppluginsProj-8be850a294d56134cb8dee3f31b4ace7.png");

/***/ }),

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/certificate-6369a174053feb8e273c0bd851059f9d.png");

/***/ }),

/***/ 92938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect1-9f26e4426f4644f8604a04a6d4474d84.png");

/***/ }),

/***/ 88796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect2-899d1a7ad63bd1b3b2525137717bfd11.png");

/***/ }),

/***/ 29190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect3-f030d997dbe37708f668d90ffe07c25c.png");

/***/ }),

/***/ 16735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/datalinking1-7e88683a0156eafd46689aa52ec81972.png");

/***/ }),

/***/ 36165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/datalinking2-ff22a6ee981348d06c828fdb78b92924.png");

/***/ }),

/***/ 95176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/standaloneProj-82ef92c84b643ab7107fd1e55dfb68e6.png");

/***/ })

};
;