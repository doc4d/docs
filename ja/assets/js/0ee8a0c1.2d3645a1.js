exports.id = 64991;
exports.ids = [64991];
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

/***/ 11810:
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
var EmailObjectClass_exports = {};
__export(EmailObjectClass_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(EmailObjectClass_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "EmailObjectClass",
  title: "Email"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "API/EmailObjectClass",
  "id": "API/EmailObjectClass",
  "title": "Email",
  "description": "Creating, sending or receiving emails in 4D is done by handling an Email object.",
  "source": "@site/docs/API/EmailObjectClass.md",
  "sourceDirName": "API",
  "slug": "/API/EmailObjectClass",
  "permalink": "/docs/ja/next/API/EmailObjectClass",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "EmailObjectClass",
    "title": "Email"
  },
  "sidebar": "docs",
  "previous": {
    "title": "DataStore",
    "permalink": "/docs/ja/next/API/DataStoreClass"
  },
  "next": {
    "title": "Entity",
    "permalink": "/docs/ja/next/API/EntityClass"
  }
};
const assets = {};
const toc = [{
  value: "Email Object",
  id: "email-object",
  level: 3
}, {
  value: "Email Addresses",
  id: "email-addresses",
  level: 3
}, {
  value: "Text",
  id: "text",
  level: 4
}, {
  value: "Object",
  id: "object",
  level: 4
}, {
  value: "Collection",
  id: "collection",
  level: 4
}, {
  value: "Handling body part",
  id: "handling-body-part",
  level: 3
}, {
  value: "Example of bodyStructure and bodyValues objects",
  id: "example-of-bodystructure-and-bodyvalues-objects",
  level: 4
}, {
  value: ".attachments",
  id: "attachments",
  level: 2
}, {
  value: "Description",
  id: "description",
  level: 4
}, {
  value: ".bcc",
  id: "bcc",
  level: 2
}, {
  value: "Description",
  id: "description-1",
  level: 4
}, {
  value: ".bodyStructure",
  id: "bodystructure",
  level: 2
}, {
  value: "Description",
  id: "description-2",
  level: 4
}, {
  value: ".bodyValues",
  id: "bodyvalues",
  level: 2
}, {
  value: "Description",
  id: "description-3",
  level: 4
}, {
  value: ".cc",
  id: "cc",
  level: 2
}, {
  value: "Description",
  id: "description-4",
  level: 4
}, {
  value: ".comments",
  id: "comments",
  level: 2
}, {
  value: "Description",
  id: "description-5",
  level: 4
}, {
  value: ".from",
  id: "from",
  level: 2
}, {
  value: "Description",
  id: "description-6",
  level: 4
}, {
  value: ".headers",
  id: "headers",
  level: 2
}, {
  value: "Description",
  id: "description-7",
  level: 4
}, {
  value: ".htmlBody",
  id: "htmlbody",
  level: 2
}, {
  value: "Description",
  id: "description-8",
  level: 4
}, {
  value: ".id",
  id: "id",
  level: 2
}, {
  value: "Description",
  id: "description-9",
  level: 4
}, {
  value: ".inReplyTo",
  id: "inreplyto",
  level: 2
}, {
  value: "Description",
  id: "description-10",
  level: 4
}, {
  value: ".keywords",
  id: "keywords",
  level: 2
}, {
  value: "Description",
  id: "description-11",
  level: 4
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: ".messageId",
  id: "messageid",
  level: 2
}, {
  value: "Description",
  id: "description-12",
  level: 4
}, {
  value: ".receivedAt",
  id: "receivedat",
  level: 2
}, {
  value: "Description",
  id: "description-13",
  level: 4
}, {
  value: ".references",
  id: "references",
  level: 2
}, {
  value: "Description",
  id: "description-14",
  level: 4
}, {
  value: ".replyTo",
  id: "replyto",
  level: 2
}, {
  value: "Description",
  id: "description-15",
  level: 4
}, {
  value: ".sendAt",
  id: "sendat",
  level: 2
}, {
  value: "Description",
  id: "description-16",
  level: 4
}, {
  value: ".sender",
  id: "sender",
  level: 2
}, {
  value: "Description",
  id: "description-17",
  level: 4
}, {
  value: ".size",
  id: "size",
  level: 2
}, {
  value: "Description",
  id: "description-18",
  level: 4
}, {
  value: ".subject",
  id: "subject",
  level: 2
}, {
  value: "Description",
  id: "description-19",
  level: 4
}, {
  value: ".textBody",
  id: "textbody",
  level: 2
}, {
  value: "Description",
  id: "description-20",
  level: 4
}, {
  value: ".to",
  id: "to",
  level: 2
}, {
  value: "Description",
  id: "description-21",
  level: 4
}, {
  value: "MAIL Convert from MIME",
  id: "mail-convert-from-mime",
  level: 2
}, {
  value: "Description",
  id: "description-22",
  level: 4
}, {
  value: "Returned object",
  id: "returned-object",
  level: 4
}, {
  value: "Example 1",
  id: "example-1",
  level: 4
}, {
  value: "Example 2",
  id: "example-2",
  level: 4
}, {
  value: "MAIL Convert to MIME",
  id: "mail-convert-to-mime",
  level: 2
}, {
  value: "Description",
  id: "description-23",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Creating, sending or receiving emails in 4D is done by handling an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Email`), ` object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Email`), ` objects are created when receiving mails through a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `transporter`), ` class function:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `IMAP - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/API/IMAPTransporterClass#getmail"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.getMail()`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/API/IMAPTransporterClass#getmails"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.getMails()`)), ` functions to get emails from an IMAP server`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `POP3 - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/API/POP3TransporterClass#getmail"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.getMail()`)), ` function to get an email from a POP3 server.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also create a new, blank `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Email`), ` object by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv18/help/command/en/page1471.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `New object`)), ` 4D command, and then fill it with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-object"
    }
  }, `Email object properties`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You send `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Email`), ` objects using the SMTP `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/SMTPTransporterClass#send"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.send()`)), ` function.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#mail-convert-from-mime"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `MAIL Convert from MIME`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#mail-convert-to-mime"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `MAIL Convert to MIME`)), ` commands can be used to convert `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Email`), ` objects to and from MIME contents.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "email-object"
    }
  }, `Email Object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Email objects provide the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D follows the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://jmap.io/spec-mail.html"
    }
  }, `JMAP specification`), ` to format the Email object.`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#attachments"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#bcc"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#bodystructure"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#bodyvalues"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#cc"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#comments"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#from"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#headers"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#htmlbody"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#id"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#inreplyto"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#keywords"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#messageid"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#receivedat"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#references"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#replyto"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#sendat"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#sender"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#size"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#subject"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#textbody"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#to"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "email-addresses"
    }
  }, `Email Addresses`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All properties that contain email addresses (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#from"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `from`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#cc"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `cc`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#bcc"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `bcc`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#to"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `to`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sender"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `sender`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#replyto"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `replyTo`)), `) accept a value of text, object, or collection type.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "text"
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `single email: "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "mailto:somebody@domain.com"
    }
  }, `somebody@domain.com`), `"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `single display name+email: "Somebody `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "mailto:somebody@domain.com"
    }
  }, `somebody@domain.com`), `"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `several emails: "Somebody `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "mailto:somebody@domain.com"
    }
  }, `somebody@domain.com`), `,`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "mailto:me@home.org"
    }
  }, `me@home.org`), `"`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "object"
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An object with two properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Display name (can be null)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `email`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Email address`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "collection"
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A collection of address objects.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "handling-body-part"
    }
  }, `Handling body part`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#textbody"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `textBody`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#htmlbody"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `htmlBody`)), ` properties are only used with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/SMTPTransporterClass#send"
    }
  }, `SMTP.send()`), ` function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#bodystructure"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `bodyStructure`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#bodyvalues"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `bodyValues`)), ` are used for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/SMTPTransporterClass"
    }
  }, `SMTP`), ` when the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-object"
    }
  }, `Email object`), ` is built from a MIME document, e.g. when generated by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MAIL Convert from MIME`), ` command. In this case, both `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `bodyStructure`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `bodyValues`), ` properties must be passed together, and it is not recommended to use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `textBody`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `htmlBody`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-of-bodystructure-and-bodyvalues-objects"
    }
  }, `Example of bodyStructure and bodyValues objects`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-json"
    }
  }, `"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "text/plain"
    },
    {
      "partId": "p0002",
      "type": "text/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type=\\"text/css\\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "attachments"
    }
  }, `.attachments`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.attachments`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.attachments`), ` property contains a `, `collection of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.MailAttachment`), ` object(s)`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Attachment objects are defined through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/MailAttachmentClass#mail-new-attachment"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `MAIL New attachment`)), ` command. Attachment objects have specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/MailAttachmentClass"
    }
  }, `properties and functions`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "bcc"
    }
  }, `.bcc`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.bcc`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.bcc`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.bcc`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-1"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.bcc`), ` property contains the `, `Blind Carbon Copy (BCC) hidden email recipient `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `addresse(s)`), ` of the email`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "bodystructure"
    }
  }, `.bodyStructure`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.bodyStructure`), ` : Object`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-2"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.bodyStructure`), ` property contains the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `EmailBodyPart`), ` object, i.e. the full MIME structure of the message body (optional)`, `. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#handling-body-part"
    }
  }, `Handling body part`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.bodyStructure`), ` object contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `partID`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identifies the part uniquely within the email`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `type`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `(mandatory) Value of the Content-Type header field of the part`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `charset`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of the charset parameter of the Content-Type header field`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `encoding`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `isEncodingProblem=true`), `, the Content-Transfer-Encoding value is added (by default undefined)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `disposition`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of the Content-Disposition header field of the part`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `language`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of texts`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of language tags, as defined in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "https://tools.ietf.org/html/rfc3282"
    }
  }, `RFC3282`), `, in the Content-Language header field of the part, if present.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `location`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URI, as defined in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "https://tools.ietf.org/html/rfc2557"
    }
  }, `RFC2557`), `, in the Content-Location header field of the part, if present.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `subParts`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of objects`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Body parts of each child (collection of `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `EmailBodyPart`), ` objects)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `headers`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of objects`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of all header fields in the part, in the order they appear in the message (collection of `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `EmailHeader`), ` objects, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#headers-"
    }
  }, `headers`), ` property)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "bodyvalues"
    }
  }, `.bodyValues`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.bodyValues`), ` : Object`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-3"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.bodyValues`), ` property contains the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `EmailBodyValue`), ` object, containing an object for each \\<partID`, `>`, ` of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `bodyStructure`), ` (optional)`, `. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#handling-body-part"
    }
  }, `Handling body part`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.bodyValues`), ` object contains the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `partID`), `.value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value of the body part`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `partID`), `.isEncodingProblem`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "cc"
    }
  }, `.cc`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.cc`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.cc`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.cc`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-4"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.cc`), ` property contains the `, `Carbon Copy (CC) additional email recipient `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `addresse(s)`), ` of the email`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "comments"
    }
  }, `.comments`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.comments`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-5"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.comments`), ` property contains an `, `additional comments header`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Comments only appear within the header section of the message (keeping the message's body untouched).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For specific formatting requirements, please consult the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://tools.ietf.org/html/rfc5322"
    }
  }, `RFC#5322`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "from"
    }
  }, `.from`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.from`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.from`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.from`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-6"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.from`), ` property contains the `, `Originating `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `address(es)`), ` of the email`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each email you send out has both the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sender"
    }
  }, `sender`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `from`), ` addresses:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the sender domain is what the receiving email server gets when opening the session,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the from address is what the recipient(s) will see.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For better deliverability, it is recommended to use the same from and sender addresses.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "headers"
    }
  }, `.headers`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.headers`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-7"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.headers`), ` property contains a `, `collection of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EmailHeader`), ` objects, in the order they appear in the message`, `. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EmailHeader`), ` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EmailHeader`), ` property is ignored.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Every object of the headers collection can contain the following properties:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[].name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `(mandatory) Header field name as defined in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "https://tools.ietf.org/html/rfc5322"
    }
  }, `RFC#5322`), `. If null or undefined, the header field is not added to the MIME header.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `[].value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Header field values as defined in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "https://tools.ietf.org/html/rfc5322"
    }
  }, `RFC#5322`))))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "htmlbody"
    }
  }, `.htmlBody`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.htmlBody`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-8"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.htmlBody`), ` property contains the `, `HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)`, `. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#handling-body-part"
    }
  }, `Handling body part`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "id"
    }
  }, `.id`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.id`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-9"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/IMAPTransporterClass"
    }
  }, `IMAP transporter`), ` only.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.id`), ` property contains the `, `unique ID from the IMAP server`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "inreplyto"
    }
  }, `.inReplyTo`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.inReplyTo`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-10"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.inReplyTo`), ` property contains the `, `message identifier(s) of the original message(s) to which the current message is a reply`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For specific formatting requirements, please consult the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://tools.ietf.org/html/rfc5322"
    }
  }, `RFC#5322`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "keywords"
    }
  }, `.keywords`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.keywords`), ` : Object`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-11"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.keywords`), ` property contains a `, `set of keywords as an object, where each property name is a keyword and each value is true`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is the "keywords" header (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://tools.ietf.org/html/rfc4021"
    }
  }, `RFC#4021`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `.\\<keyword`, `>`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Keyword to set (value must be true)`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Reserved keywords:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$draft - Indicates a message is a draft`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$seen - Indicates a message has been read`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$flagged - Indicates a message needs special attention (e.g., Urgent)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$answered - Indicates a message has been replied to`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$deleted - Indicates a message to delete`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, ` $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "messageid"
    }
  }, `.messageId`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.messageId`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-12"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.messageId`), ` property contains a `, `message identifier header ("message-id")`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This header is usually "lettersOrNumbers@domainname", e.g. "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "mailto:abcdef.123456@4d.com"
    }
  }, `abcdef.123456@4d.com`), `". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "receivedat"
    }
  }, `.receivedAt`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.receivedAt`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-13"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/IMAPTransporterClass"
    }
  }, `IMAP transporter`), ` only.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.receivedAt`), ` property contains the `, `timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "references"
    }
  }, `.references`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.references`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-14"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.references`), ` property contains the `, `Collection of all message-ids of messages in the preceding reply chain`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For specific formatting requirements, please consult the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://tools.ietf.org/html/rfc5322"
    }
  }, `RFC#5322`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "replyto"
    }
  }, `.replyTo`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.replyTo`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.replyTo`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.replyTo`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-15"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.replyTo`), ` property contains the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `addresse(s)`), ` for responses`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sendat"
    }
  }, `.sendAt`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.sendAt`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-16"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.sendAt`), ` property contains the `, `Email timestamp in ISO 8601 UTC format`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sender"
    }
  }, `.sender`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.sender`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.sender`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.sender`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-17"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.sender`), ` property contains the `, `email source `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `addresse(s)`), ` of the email`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each email you send out has both the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `sender`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "#from"
    }
  }, `from`)), ` addresses:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the sender domain is what the receiving email server gets when opening the session,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the from address is what the recipient(s) will see.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For better deliverability, it is recommended to use the same from and sender addresses.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "size"
    }
  }, `.size`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.size`), ` : Integer`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-18"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/IMAPTransporterClass"
    }
  }, `IMAP transporter`), ` only.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.size`), ` property contains the `, `size (expressed in bytes) of the Email object returned by the IMAP server`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "subject"
    }
  }, `.subject`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.subject`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-19"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.subject`), ` property contains the `, `description of topic`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "textbody"
    }
  }, `.textBody`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.textBody`), ` : Text`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-20"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.textBody`), ` property contains the `, `Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)`, `. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#handling-body-part"
    }
  }, `Handling body part`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "to"
    }
  }, `.to`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.to`), ` : Text`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.to`), ` : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.to`), ` : Collection`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-21"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.to`), ` property contains the `, `primary recipient `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#email-addresses"
    }
  }, `addresse(s)`), ` of the email`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "mail-convert-from-mime"
    }
  }, `MAIL Convert from MIME`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v18`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `MAIL Convert from MIME`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mime`), ` : Blob ) : Object`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `MAIL Convert from MIME`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mime`), ` : Text ) : Object`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
      "align": "center"
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
  }, `mime`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Blob, Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Email in MIME`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Email object`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-22"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MAIL Convert from MIME`), ` command `, `converts a MIME document into a valid email object`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D follows the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://jmap.io/spec-mail.html"
    }
  }, `JMAP specification`), ` to format the returned email object.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Pass in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mime`), ` a valid MIME document to convert. It can be provided by any mail server or application. You can pass a BLOB or a text `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mime`), ` parameter. If the MIME comes from a file, it is recommended to use a BLOB parameter to avoid issues related to charset and line break conversions.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "returned-object"
    }
  }, `Returned object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Email object.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to load a mail template saved as MIME in a text document and send an email:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, you send directly a 4D Write Pro document containing pictures:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $mime: Blob
var $email;$server;$transporter;$status: Object

// Mime export of the 4D Write Pro document
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convert 4D Write Pro Mime variable in mail object
$email:=MAIL Convert from MIME($mime)

// Fill your mail object headers
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "mail-convert-to-mime"
    }
  }, `MAIL Convert to MIME`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R4`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Modified`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `MAIL Convert to MIME`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mail`), ` : Object { ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `options`), ` : Object } ) : Text`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
      "align": "center"
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
  }, `mail`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Email object`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `options`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Charset and encoding mail options`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Email object converted to MIME`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-23"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `MAIL Convert to MIME`), ` command `, `converts an email object into MIME text`, `. This command is called internally by `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/API/SMTPTransporterClass#send"
    }
  }, `SMTP_transporter.send( )`), ` to format the email object before sending it. It can be used to analyze the MIME format of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `mail`), `, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D follows the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://jmap.io/spec-mail.html"
    }
  }, `JMAP specification`), ` to format the email object.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `options`), `, you can set a specific charset and encoding configuration for the mail. The following properties are available:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `headerCharset`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values:`, /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("th", null, `Constant`), /* @__PURE__ */ (0, import_react2.mdx)("th", null, `Value`), /* @__PURE__ */ (0, import_react2.mdx)("th", null, `Comment`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("td", null, `mail mode ISO2022JP`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, `US-ASCII_ISO-2022-JP_UTF8_QP`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `headerCharset`), `: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `bodyCharset`), `: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable`)))), /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("td", null, `mail mode ISO88591`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, `ISO-8859-1`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `headerCharset`), `: ISO-8859-1 & Quoted-printable`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `bodyCharset`), `: ISO-8859-1 & 8-bit`)))), /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("td", null, `mail mode UTF8`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, `US-ASCII_UTF8_QP`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `headerCharset`), ` & `, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `bodyCharset`), `: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `default value`), `)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("td", null, `mail mode UTF8 in base64`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, `US-ASCII_UTF8_B64`), /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `headerCharset`), ` & `, /* @__PURE__ */ (0, import_react2.mdx)("i", null, `bodyCharset`), `: US-ASCII if possible, otherwise UTF-8 & base64`))))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `bodyCharset`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `options`), ` parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $mail: Object
var $mime: Text
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=MAIL Convert to MIME($mail)

// Contents of $mime:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;