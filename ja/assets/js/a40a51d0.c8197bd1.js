exports.id = 509;
exports.ids = [509];
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

/***/ 30056:
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
var information_exports = {};
__export(information_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(information_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "information",
  title: "Information Page",
  sidebar_label: "Information Page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "MSC/information",
  "id": "MSC/information",
  "title": "Information Page",
  "description": "The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window.",
  "source": "@site/docs/MSC/information.md",
  "sourceDirName": "MSC",
  "slug": "/MSC/information",
  "permalink": "/docs/ja/next/MSC/information",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "information",
    "title": "Information Page",
    "sidebar_label": "Information Page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/ja/next/MSC/overview"
  },
  "next": {
    "title": "Activity analysis Page",
    "permalink": "/docs/ja/next/MSC/analysis"
  }
};
const assets = {};
const toc = [{
  value: "Program",
  id: "program",
  level: 2
}, {
  value: "Tables",
  id: "tables",
  level: 2
}, {
  value: "Data",
  id: "data",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "program"
    }
  }, `Program`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get 4D folder`), ` command in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Language Reference`), ` manual).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The central part of the window indicates the name and location of the project and data files as well as the log file (if any). The lower part of the window indicates the name of the 4D license holder, the type of license, and the name of the current 4D user.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display and selection of pathnames`), `: On the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Program`), ` tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(89061)/* ["default"] */ .Z),
    width: "496",
    height: "190"
  }), `
If you select a menu item (disk or folder), it is displayed in a new system window.
The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Copy the path`), ` command copies the complete pathname as text to the clipboard, using the separators of the current platform.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `"Licenses" Folder`), `
The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `"Licenses" Folder`), ` button displays the contents of the active Licenses folder in a new system window. All the license files installed in your 4D environment are grouped together in this folder, on your hard disk. When they are opened with a Web browser, these files display information concerning the licenses they contain and their characteristics.
The location of the "Licenses" folder can vary depending on the version of your operating system. For more information about the location of this folder, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get 4D folder`), ` command.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `*Note:`), ` You can also access this folder from the \u201CUpdate License\u201D dialog box (available in the Help menu).*`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "tables"
    }
  }, `Tables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This page provides an overview of the tables in your database:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(64835)/* ["default"] */ .Z),
    width: "882",
    height: "666"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Information on this page is available in both standard and maintenance modes.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The page lists all the tables of the database (including invisible tables) as well as their characteristics:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `ID`), `: Internal number of the table.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Tables`), `: Name of the table. Names of deleted tables are displayed with parenthesis (if they are still in the trash).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Records`), `: Total number of records in the table. If a record is damaged or cannot be read, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Error`), ` is displayed instead of the number. In this case, you can consider using the verify and repair tools.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Fields`), `: Number of fields in the table. Invisible fields are counted, however, deleted fields are not counted.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Indexes`), `: Number of indexes of any kind in the table`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Encryptable`), `: If checked, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Encryptable`), ` attribute is selected for the table at the structure level (see "Encryptable" paragraph in the Design Reference Manual).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Encrypted`), `: If checked, the records of the table are encrypted in the data file. `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `*Note`), `: Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the Encrypt page of the MSC.*`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Address Table Size`), `: Size of the address table for each table. The address table is an internal table which stores one element per record created in the table. It actually links records to their physical address. For performance reasons, it is not resized when records are deleted, thus its size can be different from the current number of records in the table. If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/MSC/compact"
    }
  }, `Compact`), ` page).
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `*Note:`), ` Differences between address table size and record number can also result from an incident during the cache flush.*`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data"
    }
  }, `Data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Data`), ` page provides information about the available and used storage space in the data file.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This page cannot be accessed in maintenance mode`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The information is provided in graph form:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(59037)/* ["default"] */ .Z),
    width: "761",
    height: "583"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This page does not take into account any data that may be stored outside of the data file (see "External storage").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Files that are too fragmented reduce disk, and thus, database performance. If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20359)/* ["default"] */ .Z),
    width: "75",
    height: "69"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A warning icon is also displayed on the button of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/MSC/compact"
    }
  }, `Compact`), ` page:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22750)/* ["default"] */ .Z),
    width: "76",
    height: "64"
  })));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 59037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/MSC_Data-aa469e50a3ad298cd02cf05689e87a71.png");

/***/ }),

/***/ 64835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/MSC_Tables-7498ec19de595de5fdea35406dbd42e3.png");

/***/ }),

/***/ 22750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABACAIAAAA/NwYHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAATmSURBVGhD7ZjfaxxVFMf7rA3+QPRB6IMPtipYFc1LHwSr9EH/gOKD7INiYgIaYsiDP2JJ28Q0QWKhlBAaRWssCX0o2abkh43JStolTdBukq2JCWkoZldSF3wQEdl+Zu7Z2dndSdjdubON0/lwGc4999wz57szc+/s7ErdAwQi/UIg0i8EIv1CINIvBCL9gucik8nk1NRUT09Pa2trU1NTXV0dR2w8+BmVOC/xUOTGxkZ/f399ff27W8MoMUTKHG/wSmQkEmloaEBGTU1Ne3v70NDQ/Pz8+vr65uYmR2w8+BklhkjiZaYHeCJycHBQVd/Z2bmwsCDeVMq4dibST6UYJQYP8cwSr270i6RWiq6trQ2Hw+LKgD+dTttFKogkHr9HOjWL5K7jmlDx9PS0uGxsJRKIZxZzvbhvdYpk/VDPoXUNeQI7OjrwWCiRFowSo4KZhYcM2tchnSJZJ6mSZ0z6JolEoqWlZWxsDHl28OBnVOJM1PNJHulrQptIdjz2A+43+0qjWFtba25unpubE33pNDYe/BKRgblkII/e/VObSHZ2LgK7gvRzofrGxsaVlRUUcsReXFyUsVzIQB6ySV8H2kTyBkNx7H7SLyAajfKuE4vFOGKLtwAykIds0teBNpG8qVEcu7z0nRgdHSWGo/SdIAMxZJO+DrSJ5PpQHG8z0s+Ac3viU92TvQdov06fJp4MOMmmpmtBm0jevCnO2g8scKrFxpETHx4IH73PaouTX5CBKWST+Tq4m1fyg/feutBadfHY/Tev7r8Z3Y8x3P7w6o1rDO3QK1nGMzlz/m2u3uy5Pf/99Rrt2rk9dCe/fZOYHfpMlrq6/r46c/F41fDx3WtXnh3vfoyGQTd8bHdj3eEdurqWuk9O9L3Odbt+4QnkJZcvJZeGMeji7P1o7w7dJ0t644lePouYS59X/Z14GUM5MejixFiNjchkHWgTCcW/u1755hBK4iN7eRTtIunixIj0HZT5OtApssh/IZ+8/wYyRroe+GfzlUKROEe7HsRe/fm8SuIenSKhmP+T3336OBqWJ59BEs14JpeG1TOpPAwRMHH6JZnmGs0iYfsvA7di3yNgvPuhf1OvKkkb119EHg1DeRgigLCl6BmZ6Q79ImGrbzy1Ne8MfPYo1bP1Kz2OImm8Hhi/xZf7/rz9h0x2gScigfu28GvdLz90UfqPpx6xxNCQl7jxVSLeh2H3E0ZwPHJSMrrAK5FQ+N31zMdPUvet2RfsYgyR8b5CkeszzxH809eHJJ0LPBSpsH9BP3tkH3UvTzxtF+N4u9J+M5ef/4dIO0tXe6m7pMYUmeyCiooE/kyNn3wqT4lju3zqef5qyjR3VFrkXSEQ6RcCkdswENqVobptVpyew1nLOVtZIg2FoQHpVJLKiZxtq3Y8k3VxrVGjplCoWrlkWH4cs9w2mZH5wcisHHYpmbShUCZ/yUJLF7mFRrNq051jmaZZvKHEMJQis/SsmZEp4BJP7iC9UgUa6BJpP71lF2Pk2phCYRjkdYuljNvV8Ux2p2UXY9jsrM8xDPK6xVLOwmPcdNlzDbTllbNdrXZDrGw2fNkbOH/QxJpeGuWIBOPkgvXEGKWZWHVYNTkbak3KjTcx1phCp3Ee1bHGiqRMka6x1FaCQKRfCET6hUCkXwhE+oVApF+4B0SmUncAz2k1OlDbCAoAAAAASUVORK5CYII=");

/***/ }),

/***/ 20359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 89061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/MSC_popup-3ef7648d9c8e141b600c690356171a0c.png");

/***/ })

};
;