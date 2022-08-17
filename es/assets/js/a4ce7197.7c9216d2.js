exports.id = 27161;
exports.ids = [27161];
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

/***/ 28038:
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
var cf_looping_exports = {};
__export(cf_looping_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(cf_looping_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "looping",
  title: "Looping structures"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/looping",
  "id": "version-19-R6/Concepts/looping",
  "title": "Looping structures",
  "description": "Looping structures repeat a sequence of statements until a condition is met or a number of times is reached.",
  "source": "@site/versioned_docs/version-19-R6/Concepts/cf_looping.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/looping",
  "permalink": "/docs/es/Concepts/looping",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "looping",
    "title": "Looping structures"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Branching structures",
    "permalink": "/docs/es/Concepts/branching"
  },
  "next": {
    "title": "Error handling",
    "permalink": "/docs/es/Concepts/error-handling"
  }
};
const assets = {};
const toc = [{
  value: "While...End while",
  id: "whileend-while",
  level: 2
}, {
  value: "Example",
  id: "example",
  level: 3
}, {
  value: "Repeat...Until",
  id: "repeatuntil",
  level: 2
}, {
  value: "Example",
  id: "example-1",
  level: 3
}, {
  value: "For...End for",
  id: "forend-for",
  level: 2
}, {
  value: "Basic examples",
  id: "basic-examples",
  level: 3
}, {
  value: "Decrementing variable counter",
  id: "decrementing-variable-counter",
  level: 3
}, {
  value: "Incrementing the counter variable by more than one",
  id: "incrementing-the-counter-variable-by-more-than-one",
  level: 3
}, {
  value: "Comparing looping structures",
  id: "comparing-looping-structures",
  level: 3
}, {
  value: "Optimizing the execution of the For...End for loops",
  id: "optimizing-the-execution-of-the-forend-for-loops",
  level: 3
}, {
  value: "Nested For...End for looping structures",
  id: "nested-forend-for-looping-structures",
  level: 3
}, {
  value: "For each...End for each",
  id: "for-eachend-for-each",
  level: 2
}, {
  value: "Loop through collections",
  id: "loop-through-collections",
  level: 3
}, {
  value: "Example",
  id: "example-2",
  level: 4
}, {
  value: "Loop through entity selections",
  id: "loop-through-entity-selections",
  level: 3
}, {
  value: "Example",
  id: "example-3",
  level: 4
}, {
  value: "Loop through object properties",
  id: "loop-through-object-properties",
  level: 3
}, {
  value: "Example",
  id: "example-4",
  level: 4
}, {
  value: "begin / end parameters",
  id: "begin--end-parameters",
  level: 3
}, {
  value: "Example",
  id: "example-5",
  level: 4
}, {
  value: "Until and While conditions",
  id: "until-and-while-conditions",
  level: 3
}, {
  value: "Example",
  id: "example-6",
  level: 4
}, {
  value: "<code>break</code> and <code>continue</code>",
  id: "break-and-continue",
  level: 2
}, {
  value: "break",
  id: "break",
  level: 3
}, {
  value: "Example",
  id: "example-7",
  level: 4
}, {
  value: "continue",
  id: "continue",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Looping structures repeat a sequence of statements until a condition is met or a number of times is reached. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "whileend-while"
    }
  }, `While...End while`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The formal syntax of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` control flow structure is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` While(Boolean_Expression)
    statement(s)
    {break}  
    {continue}
 End while
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statements are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#break-and-continue"
    }
  }, `described below`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is common to initialize the value tested in the Boolean expression immediately before entering the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` executes the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `NeverStop`), ` is always TRUE:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` NeverStop:=True
 While(NeverStop)
 End while
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/error-handling"
    }
  }, `Error handling`), ` page.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` system variable is set by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CONFIRM`), ` command before the loop starts. If the user clicks the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `OK`), ` button in the confirmation dialog box, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` system variable is set to 1 and the loop starts. Otherwise, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` system variable is set to 0 and the loop is skipped. Once the loop starts, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ADD RECORD`), ` command keeps the loop going because it sets the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` system variable is set to 0 and the loop stops.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "repeatuntil"
    }
  }, `Repeat...Until`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The formal syntax of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` control flow structure is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `Repeat
    statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loop is similar to a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "flow-control#whileend-while"
    }
  }, `While...End while`), ` loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loop always executes the loop once, whereas if the Boolean expression is initially False, a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop does not execute the loop at all.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The other difference with a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loop is that the loop continues until the Boolean expression is TRUE.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statements are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#break-and-continue"
    }
  }, `described below`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Compare the following example with the example for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop. Note that the Boolean expression does not need to be initialized\u2014there is no `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CONFIRM`), ` command to initialize the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OK`), ` variable.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` Repeat
    ADD RECORD([aTable])
 Until(OK=0)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "forend-for"
    }
  }, `For...End for`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The formal syntax of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` control flow structure is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loop is a loop controlled by a counter variable:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The counter variable `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Counter_Variable`), ` is a numeric variable (Real or Long Integer) that the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `For...End for`), ` loop initializes to the value specified by `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Start_Expression`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Each time the loop is executed, the counter variable is incremented by the value specified in the optional value `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Increment_Expression`), `. If you do not specify `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Increment_Expression`), `, the counter variable is incremented by one (1), which is the default.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the counter variable passes the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `End_Expression`), ` value, the loop stops.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Important:`), ` The numeric expressions `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Start_Expression`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `End_Expression`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Increment_Expression`), ` are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` However, for special purposes, you can change the value of the counter variable `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Counter_Variable`), ` within the loop; this will affect the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Usually `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Start_Expression`), ` is less than `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `End_Expression`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Start_Expression`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `End_Expression`), ` are equal, the loop will execute only once.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Start_Expression`), ` is greater than `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `End_Expression`), `, the loop will not execute at all unless you specify a negative `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Increment_Expression`), `. See the examples.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statements are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#break-and-continue"
    }
  }, `described below`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "basic-examples"
    }
  }, `Basic examples`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example executes 100 iterations:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For(vCounter;1;100)
  //Do something
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through all elements of the array anArray:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through all the characters of the text vtSomeText:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 4
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through the selected records for the table `, `[aTable]`, `:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Most of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loops you will write in your projects will look like the ones listed in these examples. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "decrementing-variable-counter"
    }
  }, `Decrementing variable counter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Start_Expression`), ` greater than `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `End_Expression`), ` and a negative `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Increment_Expression`), `. The following examples do the same thing as the previous examples, but in reverse order:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 5
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example executes 100 iterations:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For(vCounter;100;1;-1)
  //Do something
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 6
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through all elements of the array anArray:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 7
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through all the characters of the text vtSomeText:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 8
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through the selected records for the table `, `[aTable]`, `:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "incrementing-the-counter-variable-by-more-than-one"
    }
  }, `Incrementing the counter variable by more than one`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you need to, you can use an `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Increment_Expression`), ` (positive or negative) whose absolute value is greater than one.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 9
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following loop addresses only the even elements of the array anArray:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "comparing-looping-structures"
    }
  }, `Comparing looping structures`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Let's go back to the first `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` example. The following example executes 100 iterations:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For(vCounter;1;100)
  //Do something
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is interesting to see how the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loop would perform the same action. Here is the equivalent `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` loop:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the equivalent `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loop:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loop is usually faster than the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While...End while`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Repeat...Until`), ` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loop whenever possible.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "optimizing-the-execution-of-the-forend-for-loops"
    }
  }, `Optimizing the execution of the For...End for loops`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use Real and Long Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 10
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Here is an example:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "nested-forend-for-looping-structures"
    }
  }, `Nested For...End for looping structures`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can nest as many control structures as you (reasonably) need. This includes nesting `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For...End for`), ` loops. To avoid mistakes, make sure to use different counter variables for each looping structure.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here are two examples:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example goes through all the elements of a two-dimensional array:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `The following example builds an array of pointers to all the date fields present in the database:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "for-eachend-for-each"
    }
  }, `For each...End for each`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The formal syntax of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` control flow structure is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` structure iterates a specified `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_item`), ` over all values of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), `. The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_item`), ` type depends on the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), ` type. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` loop can iterate through three `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), ` types:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `collections: loop through each element of the collection,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `entity selections: loop through each entity,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `objects: loop through each object property.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table compares the three types of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Loop through collections`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Loop through entity selections`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Loop through objects`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Current_Item type`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Variable of the same type as collection elements`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Entity`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text variable`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Expression type`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection (with elements of the same type)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of loops (by default)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of collection elements`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of entities in the selection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of object properties`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Support of begin / end parameters`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`)))), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `By default, the enclosed `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `statement(s)`), ` are executed for each value in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Expression`), `. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `While`), `) or at the end of the loop (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Until`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `begin`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `end`), ` optional parameters can be used with collections and entity selections to define boundaries for the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `For each...End for each`), ` loop can be used on a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `shared collection`), ` or a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `shared object`), `. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Use...End use`), ` keywords. Depending on your needs, you can call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Use...End use`), ` keywords:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `before entering the loop, if items should be modified together for integrity reasons, or`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `within the loop when only some elements/properties need to be modified and no integrity management is required. `)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statements are `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#break-and-continue"
    }
  }, `described below`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "loop-through-collections"
    }
  }, `Loop through collections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` is used with an `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), ` of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Collection`), ` type, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The collection must contain only elements of the same type, otherwise an error will be returned as soon as the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` variable is assigned the first mismatched value type.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At each loop iteration, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` variable is automatically filled with the matching element of the collection. The following points must be taken into account:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Current_Item`), ` variable is of the object type or collection type (i.e. if `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Expression`), ` is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Current_Item`), ` variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the collection contains elements with a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Null`), ` value, an error will be generated if the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Current_Item`), ` variable type does not support `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Null`), ` values (such as longint variables).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to compute some statistics for a collection of numbers:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "loop-through-entity-selections"
    }
  }, `Loop through entity selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` is used with an `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), ` of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Entity selection`), ` type, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` parameter is the entity that is currently processed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number of loops is based on the number of entities in the entity selection. On each loop iteration, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` parameter is automatically filled with the entity of the entity selection that is currently processed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in mind that any modifications applied on the current entity must be saved explicitly using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save( )`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to raise the salary of all British employees in an entity selection:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "loop-through-object-properties"
    }
  }, `Loop through object properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` is used with an `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), ` of the Object type, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Current_Item`), ` parameter is a text variable automatically filled with the name of the currently processed property. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-4"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to switch the names to uppercase in the following object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "begin--end-parameters"
    }
  }, `begin / end parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can define bounds to the iteration using the optional begin and end parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `begin`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `end`), ` parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `begin`), ` parameter, pass the element position in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Expression`), ` at which to start the iteration (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `begin`), ` is included).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `end`), ` parameter, you can also pass the element position in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Expression`), ` at which to stop the iteration (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `end`), ` is excluded). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `end`), ` is omitted or if `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `end`), ` is greater than the number of elements in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), `, elements are iterated from `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `begin`), ` until the last one (included).
If the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `begin`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `end`), ` parameters are positive values, they represent actual positions of elements in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), `.
If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `begin`), ` is a negative value, it is recalculed as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `begin:=begin+Expression size`), ` (it is considered as the offset from the end of `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Expression`), `). If the calculated value is negative, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `begin`), ` is set to 0.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Even if begin is negative, the iteration is still performed in the standard order.
If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `end`), ` is a negative value, it is recalculed as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `end:=end+Expression size`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a collection contains 10 elements (numbered from 0 to 9)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element. `)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-5"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "until-and-while-conditions"
    }
  }, `Until and While conditions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can control the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `For each...End for each`), ` execution by adding an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Until`), ` or a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While`), ` condition to the loop. When an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Until(condition)`), ` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `True`), `, whereas when is case of a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `While(condition)`), ` statement, the iteration will stop when the condition is first evaluated to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `False`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can pass either keyword depending on your needs:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Until`), ` condition is tested at the end of each iteration, so if the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Expression`), ` is not empty or null, the loop will be executed at least once.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `While`), ` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-6"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)
 
 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)
 
 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "break-and-continue"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h2"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h2"
  }, `continue`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All looping structures above support both `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statements. These statements give you more control over the loops by allowing to exit the loop and to bypass the current iteration at any moment.  `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "break"
    }
  }, `break`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` statement is inside a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#nested-forend-for-looping-structures"
    }
  }, `nested loop`), ` (loop inside another loop), the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `break`), ` statement will terminate the innermost loop.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-7"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `For (vCounter;1;100)
    If ($tab{vCounter}="") //if a condition becomes true
        break //end of the for loop
    End if
End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "continue"
    }
  }, `continue`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `continue`), ` statement terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $text : Text
For ($i; 0; 9)
    If ($i=3)
        continue //go directly to the next iteration
    End if
    $text:=$text+String($i)
End for
// $text="012456789" 

`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;