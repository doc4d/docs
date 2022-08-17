exports.id = 29362;
exports.ids = [29362];
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

/***/ 36608:
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
  title: "Overview"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Users/overview",
  "id": "version-18/Users/overview",
  "title": "Overview",
  "description": "If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.",
  "source": "@site/versioned_docs/version-18/Users/overview.md",
  "sourceDirName": "Users",
  "slug": "/Users/overview",
  "permalink": "/docs/es/18/Users/overview",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "overview",
    "title": "Overview"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Restore",
    "permalink": "/docs/es/18/Backup/restore"
  },
  "next": {
    "title": "Managing 4D users and groups",
    "permalink": "/docs/es/18/Users/editing"
  }
};
const assets = {};
const toc = [{
  value: "Assigning group access",
  id: "assigning-group-access",
  level: 2
}, {
  value: "Activating access control",
  id: "activating-access-control",
  level: 2
}, {
  value: "Users and groups in project architecture",
  id: "users-and-groups-in-project-architecture",
  level: 2
}, {
  value: "Toolbox editor",
  id: "toolbox-editor",
  level: 2
}, {
  value: "Directory.json file",
  id: "directoryjson-file",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If more than one person uses a database, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the database or to database operations.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For an overview of 4D's security features, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://blog.4d.com/4d-security-guide/"
    }
  }, `4D Security guide`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "assigning-group-access"
    }
  }, `Assigning group access`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D\u2019s password access system is based on users and groups. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Groups can then be assigned access privileges to specific parts or features of the database (Design access, HTTP server, SQL server, etc.), or any custom part.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87830)/* ["default"] */ .Z),
    width: "552",
    height: "121"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "activating-access-control"
    }
  }, `Activating access control`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You initiate the 4D password access control system in client-server by `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `assigning a password to the Designer`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Until you give the Designer a password, all database access are done with the Designer's access rights, even if you have set up users and groups (when the database opens, no ID is required). Any part of the database can be opened.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the database, remote users must enter a password.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To disable the password access system, you just need to remove the Designer password.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "users-and-groups-in-project-architecture"
    }
  }, `Users and groups in project architecture`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In project databases (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective in 4D Server databases. The following table lists the main users and groups features and their availability:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
      "align": null
    }
  }, `4D Developer (single-user)`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D Server`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Adding/editing users and groups`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Assigning user/group access to servers`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User identification`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `no (all users are Designer)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Access control once the Designer has been assigned a password`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `no (all access are Designer)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `yes`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "toolbox-editor"
    }
  }, `Toolbox editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(96642)/* ["default"] */ .Z),
    width: "778",
    height: "276"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Users and groups editor can be displayed at runtime using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html"
    }
  }, `EDIT ACCESS`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "directoryjson-file"
    }
  }, `Directory.json file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Users, groups, as well as their access rights are stored in a specific database file named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `directory.json`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This file can be stored at the following locations:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the user database settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the database.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. If a directory.json file is present at this location, it takes priority over the file in the user database settings folder. This feature allows you to define custom/local Users and Groups configurations. The custom configuration will left untouched by a database upgrade.  `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If users and groups management is not active, the directory.json is not created.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 87830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAigAAAB5CAIAAACcIk2pAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABBwSURBVHhe7Z2/i13HFcf3DzEpTApjCBhEBCtcuHBhSOPWUZFt/OqAmlR2KktOYS2q7M4WGCOWtNvIBEIaF7IqoxQCQ9AGCcssSap0yZmZMzNnfty3u29Xd97u/XwY9s2cOefMvKd7z3fn7Vvtzr8AAABmBOEBAIBZQXgAAGBWEB4AAJgVhAcAAGYF4YE5+DMALButBR6EB+ZALrt/AMBSQXhgAAgPwJJBeGAACA/AkkF4YAAID8CSWSM8B3s7meu3H6v5RB7fvn4W93Mj+6yWK3a+d6DWTbiY57LZftrndTG43ZzrRbkAjPB8+Vt9YZRrH/9VZwDgirJeeFLh86VzdLWaoC3QxrJJlW0TnpPNEl74Njwipdf39q6/gsxnoRaeqDZ//fiaE5/ffulHAHA1OaXwhO/9t1N52gJtLRuU7wuv+JslvPBtOJzu3H4cvqppBFPCE6WHYw/AVebUwmOVx3UDwVCNTWCcuX77djT6WRmpvS5/Mq3oYhP+ncwJs4HcNcbcb5OLJeI2UHoe6KIyk55zStq8LImUJOD8dKwzRfLoaqJy5pTazcrJRQ310uVsRvx8zvgYqeM7ltpQjcuh2XuXaeFR5dEzj56APM6nlKU8Mu/XcVoCGIreiSU6F9lAeIz9YM/1xKDFKZAcpGOrVDaqNc+3FEka/9wzmRM+JJDTp4S27z07ySc8m24/KrwsGR+gJGfphK/RIcS455OWSR31K2fNeqbre3bWIOFqzT2bNNJamiXEoHvytMMyvuJE4fEGPxWEJMmRce/ZAGA8ckNa1Go4k/D4oStKBik33mJcY2CMKIxF2l59Epsy7d/PnDBuuRz28pzXaPrty5Kx/hGxZa/CQQbebjPndPWs0Fm6SJiwL1vOWuZ39C0GmfSWvEY1PIlTnXj8TEGyOv/sGHpqBoAtINySgo5LTi08qRi1VckTSpOfMBUzJ0jZbNqmPubkKbjn38+cyBbj2MtzXqPp5523WP+I2PrCkxL1M4u1mBU6S9uECTFW+Kg2/DQWjzPnZ1EP1zAtPLWctFqiAV8mx2x1ID4A24HcjtprOKXwuJoVC4rrt1VNkLrj7SkwR/mSlIw2bZkpGVzAGn/ptJkT3RDnqE/BRac8refpjbYvnWwtsf4BschewtcwjB55mynKzerOO7OhXy1gZyO1LeVyndK7tbRLKOJq7TrsrW+ZEp4gHzrSg0zUli8/Vidvv3bNfSlFptIwANhS1gtPoqwiri5FpHRlx6Ymxqn6wwWazfYDMXX+yO+Efydzokibi2gM2dnbiw795Oronk0y9j2LfvWyZDRfIHyKIMTEvbkk/rMAjhjazdxbV6iXLmc9rckF6WIyqZjVFbVUS1Tz7bBev6AWnkypG+lNNEeaitZoMCmQHYBLwBrhuVBMkYOGk+r0lcMIDwAsjpmEx31DvKzSeiYQHgBYEK9UeOo3gGAChAcAFsRMJx4AC8IDsGQQHhgAwgOwZBAeGIBcdgCwZLQWeBAemIOdP/ydRqMtuWkt8CA8MAdy2f0PAJYKwgMDQHgAlgzCAwNAeACWDMIDAzhZeJ7e3dXfAHPs3n2q9gvhcLVBzrCj1aEOAWBjEB4YwGmF54IFJ4LwAAxFKsDR0dGLFy9evnx5fHyM8MAcTAuPaIKv7ZdMeGQSSQI4LVIBHj169OTJk2fPnon2IDwwBz3hCYU91vZaeMqxHaU4obXs7O5m1yg44XG1UreYNcwHkq1I5jZn104KFr1SGABMIxXgwYMHDx8+FO15/vw5wgNzUAlPLPjm0FDWezeRinyc9N7eGuKSVWNVBMIoqYPrhPX8fJ4NRp8qZbLG1O0kVIKL+gPAFFIB7t27J9oj556joyOEB+bACo+v3k2pztU94ct6qvdWDSyFMniiu3/01pTJzCZdmTJGWy9hgQ/SRADQQSrAnTt37t+//9133z179gzhgTmYOPGYIh6Ke1nVVS8OkwJ0vVqrCsVKwoNRE/l5nTyL8LQJlfg8UB2AtUgF+OSTT7766iuEB+ajEh5PqOaxbIdRJSne6H9oEyc0KFb6w7vO3sSm1GoLAuEHYcrFGzVKRpNJc4SV6oTJEMcAsAaEBwbQE56AlH8jPAlVll59LzyNRnR8oimeTBRNXthTdN+3SujGKQsAnADCAwOYFp5XhBcKK0Xn5cITAiwIhAcGMLfwoDsA2wTCAwOYU3j0vbKLeyfswhMCLA2EBwYw94kHALYJhAcGgPAALBmEBwaA8AAsGYQHBoDwACwZhAcGgPAALBmEBwaA8AAsGYQHBoDwACwZhAcGIJed/10YAFgkCA/MDycegCWD8GwhB3v6XYHj+u3Hau4SfE9wskjAGu9qdr3z5iA8AEsG4dlCbLn3wrJ3EAYNbnZysk9K3hWVytj1uQAQHoAlg/BsIWW5f3z7+qS4bCAMKaQbWxk3yH8qEB6AJYPwbCFVuTfK47oBMYibkpREUW+bJ/VDJ/uWomZDhDQsFnbUBue5tye2vYMqRw+EB2DJIDxbSFW5k/AY+8Ge73VrfDLa2da4PjYQh/I4pU95J9FU5eiB8AAsGYRnC6kqtwiPH+ZDhscpQenpin8gGO1s6rcdS2WMQ790njhxJyeB8AAsGYRnCymLeDrwpE7GeOZZ6QWjzZP6bceSYj3lim4UVKa0e7rZJkF4AJYMwrOFVIKRarzrl9XdeKauU4Xc09gcmvxMrCE7hn6pL5LRT1qvgMnWT1yA8AAsGYRnC3FlPVKW8HDoCDhJsDU+zrmf8RsNCOzttXqjk9XRxa6RcucdRe81OzHdKRAegCWD8MAAauF5enfXS9jIPyft/6L17t2nOgSAVwbCAwOohCfqzux134uNqh3CAzAXCA8MoBQerzu7q5X7Omvh91oz9JgFsEgQHhhAITxBd+4+jY9qzuegZG0tQTo81hL6wd3pSnDb3dVwP21CvVMK7DmnbAnkCmBjEB4YgBWerDdGM7TMx6LvaC1BIbwCVBoTvCpjsGZjkcAEdp1N2iIKAM4OwgMDMMITarvBVPxQ6AOtpRCAJBFGISrZCK42T5EhBfacrWdOCwAbgfDAALLwWB0wg7a4t5ZCNtJ00g8b0tMS6RcZUmDP2Xq2OwGAM4HwwACS8FgZKIbVhNBaklRYMTASkbs9LSmiorez95xNVOjGKAA4OwgPDCAJj1EBTyj6VhY86tFagr8nZslO4fMBa4Qnx8uU7zr7hHNaKqcFgI1AeGAASXguI0GNEB6AjUF4YACXWXjSyQgANgThgQFcQuFJ77ShOgDnBeGBAchlR6PRltwQHpib6hKk0WhLawgPzE11CdJotKU1hAfmxlx//6w+Hfb0Lz+aWRqNdjUbwgNzY64/Lzw//XzDD2/85b9OfH74p3Gg0WhXsCE8MDfm+iuEZ+cPP+7/JOP/7u8nBxqNdgUbwgNzY66/Snj00HP4jR/u/5w/uOx8SlkKs85u3q/jtESjXYaG8MDcmOuvLzz+Jz1+KghJ0Bjpf/OfOJslavWDPHJIotEuU0N4YG7M9Td94vEaU+BEKPmH089/VuknQ3wwgUa7PA3hgbkx118lPLWctFqi55tv4hko2JNKGQ2j0Whb2xAemBtz/RXC40Ulio3+gMeJkBt+87P90c7Tn0SWqrfX6sMTjUbb2obwwNyY68+rRabUEvvhgjwVTkW1XHn4SQ+NdjkawgNzU12CNBptaQ3hgbmpLkEajba0hvDA3FSXII1GW1pDeGBu5LLTH8oAwPJAeGAACA/AkkF4YAAID8CSQXhgAEZ4zJ+UFlaHwXBj33yOGgCuFggPDKAWHqszCA/AVQfhgQGsEx4AuOogPDCAU514fGfnxo0b7iH6PN3XoRAsXbfSU21trAZ7VuV/oQAArwyEBwZQC0/EFf9aeJxCBMkopGG9W+ipugS8X0gR/VIOAJgThAcGcIYTj5eKQkfCwDPlNqU7BavDlKnwBIBXDMIDA9hYeIItzU65hU443gQ6UhQI4f05AHglIDwwgE2F5zDJRxaSnvB0dCZYkhgd7pu5Zg8A8CpBeGAAG5941Ch9/2GCSbc08LSWMpmgLgAwAwgPDMAIDwAsDoQHBoDwACwZhAcGgPAALBmEBwaA8AAsGYQHBoDwACwZhAcGgPAALBmEBwbQCI/5YLMwz2eb/ZrlUunD2tnaMQHA+UB4YACF8ITSHn+z0/26zWq08GRza7lU+O3nlxZgO0B4YABGeDrlfyYmhCf/amrPcLnwTxHhga0D4YEBZOFZrzv2/xoITqGUrv0jCGos/p8C8x+CCiZVubQ3rVb+a/yvEG7s7yfHU+6ndau2k8Sg9QyWlHDnxmoVu0lATreNYFMQH9gmEB4YQBKeUEJDVTTl1FRTOyd9rbBu3sT2PDVdSGXwvs6aOhnNE9P5FN2/nlAmCZNmP5HSLaQIESds2yT0DsbajQpJm22YtQC2CIQHBlAJTyioAV8rvSFUTUuqsL6U5tiuZ5s6WDwpys7nmh4e951/HEXHXpJ6P42b8dIZ1w9Wi1jzdJEw76EbNbENuy7A9oDwwACS8BRl0pMqbDPj6VXYvmdpDXFulBZInYw3ueSu49+4ioMc0UlS7ad1M17qJv112y4TSj8t2I/qbaM0A2wRCA8MIAtPWSiFVGF1IpXN8IcMuhW261nkrX1dL6+U8CafJqxj+uI4maTcT+dvN2R/tfkI03XYbRcJ3Q7zZrtRnW24KJMMYItAeGAAVngcWuYjoWoKWmQD3jpRYTuexXReIvwA3plzLU94U6jTddc7TiSp99O65VA1qhhMbbt5gnkP3ajuNhxxWV0PYCtAeGAAtfAsCaMsAAsF4YEBLFh4iqMLwDJBeGAAyxOe9E4bqgOA8MAI5LKj0WhLbggPDObo6OjRo0cPHjy4d+/enTt35Io8E6+99tpnPT766KM33njj7bff/vTTT8VHvR2/+/XOL35zSwfN8KycPvycC31y6ze/kPjwVU0n5Dzlihfr1tIGypPY+fXvdOBoDA0brw7biNzscsvLjS+3P8IDA3jx4sWTJ08ePnwoF+L9+/fl+6Az8frrrx80fP7552+99dZ777339ddfy1B81Ntx652dX978kw7M8E83f6nvh71zy8/UBuf5zjti03lPlU3oJhRjxEZnZ9+5qV5VRo9k8+b46CnDb+mCcb5rdFZFd9J3K59+DvJRPkQdOy+TYvPHrA4XoXOR9Kycc36RY27/0sQknQXbfxfYauRml1tebvznz58jPDCAly9fynFbLkH59keO3mflzTff/OKLL+Rk8+233/7gkY4MP/jgg++//z5YxEe9HZ+9v/Or3x/oIA/l8f3P1OYwbp+9Hz2KSE+VTThFwkwySmdH/V23iHQc/P5XGp17dXjoynxr7OQ8MTZ0XNf3jCX3c0CDzV+62GeguDx+f+KcvF0/bNpNt9nW/bvAViM3u9zycuPL7Y/wwACOj4/l4pNvfOTQLRfiWZGTjZyZPvzww3fffVcuZUE6MhTjvyPio96O+zd3rv3xbzrIw7/98dqOmfDDzM37TWCgNU4kPCHcznY8JVkyucRuP0I33A38/ERO6SrTsSc8/dg3W8msze/oRKXnZ5yTzWFXNNQbg8uB3Oxyh8qNf3x8/H+SRD0ooY0H5AAAAABJRU5ErkJggg==");

/***/ }),

/***/ 96642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png");

/***/ })

};
;