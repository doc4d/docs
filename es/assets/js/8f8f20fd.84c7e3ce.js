exports.id = 10610;
exports.ids = [10610];
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

/***/ 52635:
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
var maintenance_exports = {};
__export(maintenance_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(maintenance_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "maintenance",
  title: "Maintenance Page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ServerWindow/maintenance",
  "id": "ServerWindow/maintenance",
  "title": "Maintenance Page",
  "description": "The Maintenance page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:",
  "source": "@site/docs/ServerWindow/maintenance.md",
  "sourceDirName": "ServerWindow",
  "slug": "/ServerWindow/maintenance",
  "permalink": "/docs/es/next/ServerWindow/maintenance",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "maintenance",
    "title": "Maintenance Page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Processes Page",
    "permalink": "/docs/es/next/ServerWindow/processes"
  },
  "next": {
    "title": "Application Server Page",
    "permalink": "/docs/es/next/ServerWindow/application-server"
  }
};
const assets = {};
const toc = [{
  value: "Last verification/compacting",
  id: "last-verificationcompacting",
  level: 2
}, {
  value: "Verify Records and Indexes",
  id: "verify-records-and-indexes",
  level: 3
}, {
  value: "Compact Data...",
  id: "compact-data",
  level: 3
}, {
  value: "Uptime",
  id: "uptime",
  level: 2
}, {
  value: "Restart server...",
  id: "restart-server",
  level: 3
}, {
  value: "Last backup",
  id: "last-backup",
  level: 2
}, {
  value: "Request and Debug logs",
  id: "request-and-debug-logs",
  level: 2
}, {
  value: "Start/Stop Request and Debug Logs",
  id: "startstop-request-and-debug-logs",
  level: 3
}, {
  value: "View Report",
  id: "view-report",
  level: 3
}, {
  value: "Load logs configuration file",
  id: "load-logs-configuration-file",
  level: 3
}, {
  value: "Pause logging",
  id: "pause-logging",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Maintenance`), ` page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(41218)/* ["default"] */ .Z),
    width: "1036",
    height: "699"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "last-verificationcompacting"
    }
  }, `Last verification/compacting`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These areas indicate the date, time and status of the last `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/MSC/verify"
    }
  }, `data verification`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/MSC/compact"
    }
  }, `compacting operation`), ` carried out on the database.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "verify-records-and-indexes"
    }
  }, `Verify Records and Indexes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/MSC/overview"
    }
  }, `Maintenance and Security Center`), ` (MSC).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After verification, a report file is generated in XML format on the server in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#logs"
    }
  }, `maintenance Logs`), ` folder. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `View Report`), ` button (named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Download Report`), ` if the operation was carried out from a remote machine) lets you display the file in your browser.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "compact-data"
    }
  }, `Compact Data...`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(89928)/* ["default"] */ .Z),
    width: "502",
    height: "356"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/MSC/overview"
    }
  }, `MSC`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After verification, a report file is generated in XML format on the server in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#logs"
    }
  }, `maintenance Logs`), ` folder. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `View Report`), ` button (named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Download Report`), ` if the operation was carried out from a remote machine) lets you display the file in your browser.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "uptime"
    }
  }, `Uptime`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "restart-server"
    }
  }, `Restart server...`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "last-backup"
    }
  }, `Last backup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area indicates the date and time of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/MSC/backup"
    }
  }, `last backup`), ` of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scheduler`), ` page of the structure settings.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Last backup`), `: date and time of last backup.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Next backup`), `: date and time of next scheduled backup.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Needed space`), `: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Available space`), `: space available on the backup volume.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start backup`), ` button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Settings...`), ` button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "request-and-debug-logs"
    }
  }, `Request and Debug logs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Debugging/debugLogFiles"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Description of log files`)), ` section for details on log files.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "startstop-request-and-debug-logs"
    }
  }, `Start/Stop Request and Debug Logs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start Request and Debug Logs`), ` button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This button only logs operations that are executed on the server.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the logs have been activated, the button title changes to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Stop Request and Debug Logs`), `, so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "view-report"
    }
  }, `View Report`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `View Report`), ` button (named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Download report`), ` if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "load-logs-configuration-file"
    }
  }, `Load logs configuration file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This button allows you to load a special server `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Debugging/debugLogFiles#using-a-log-configuration-file"
    }
  }, `log configuration file`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.json`), ` file). Such a file can be provided by 4D technical services to monitor and study specific cases.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "pause-logging"
    }
  }, `Pause logging`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the logs have been paused, the button title changes to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Resume logging`), `, so that you can resume the logging operations.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can pause and resume logging using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page642.html"
    }
  }, `SET DATABASE PARAMETER`), ` command.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 41218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png");

/***/ }),

/***/ 89928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png");

/***/ })

};
;