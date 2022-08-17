exports.id = 29899;
exports.ids = [29899];
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

/***/ 51870:
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
var variables_exports = {};
__export(variables_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(variables_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "variables",
  title: "Variables"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/variables",
  "id": "version-18/Concepts/variables",
  "title": "Variables",
  "description": "Data in 4D is stored in two fundamentally different ways. Fields store data permanently on disk; variables store data temporarily in memory.",
  "source": "@site/versioned_docs/version-18/Concepts/variables.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/variables",
  "permalink": "/docs/ja/18/Concepts/variables",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "variables",
    "title": "Variables"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Variant",
    "permalink": "/docs/ja/18/Concepts/variant"
  },
  "next": {
    "title": "Arrays",
    "permalink": "/docs/ja/18/Concepts/arrays"
  }
};
const assets = {};
const toc = [{
  value: "Creating Variables",
  id: "creating-variables",
  level: 2
}, {
  value: "Assigning Data",
  id: "assigning-data",
  level: 2
}, {
  value: "Local, Process, and Interprocess variables",
  id: "local-process-and-interprocess-variables",
  level: 2
}, {
  value: "Local variables",
  id: "local-variables",
  level: 3
}, {
  value: "Process variables",
  id: "process-variables",
  level: 3
}, {
  value: "Interprocess variables",
  id: "interprocess-variables",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Data in 4D is stored in two fundamentally different ways. `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Fields`), ` store data permanently on disk; `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `variables`), ` store data temporarily in memory.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same\u2014you also give them names and different types (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/Concepts/data-types"
    }
  }, `Data types`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Variables are language objects; you can create and use variables that will never appear on the screen. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-variables"
    }
  }, `Creating Variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You create variables by declaring them using one of the "Compiler" or "Arrays" theme commands.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), `Arrays are a particular type of variables. An array is an ordered series of variables of the same type. For more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/Concepts/arrays"
    }
  }, `Arrays`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if you want to define a text variable, you write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_TEXT(myText)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Although it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. For example, if you want to create a variable that will hold the current date plus 30 days, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` MyDate:=Current date+30 //MyDate is created and gets the current date plus 30 days
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once created, you can use a variable wherever you need it in your database. For example, you might need to store the text variable in a field of same type:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` [MyTable]MyField:=MyText
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following are some basic variable declarations:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `
 C_BLOB(vxMyBlob) // The process variable vxMyBlob is declared as a variable of type BLOB
 C_DATE($vdCurDate) // The local variable $vdCurDate is declared as a variable of type Date
 C_LONGINT(vg1;vg2;vg3) // The 3 process variables vg1, vg2 and vg3 are declared as variables of type longint  
 C_OBJECT($vObj) // The local variable $vObj is declared as a variable of type Object
 C_COLLECTION($vCol) // The local variable $vCol is declared as a variable of type Collection
 ARRAY LONGINT(alAnArray;10) //The process alAnArray variable is declared as a Longint array of 10 elements
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "assigning-data"
    }
  }, `Assigning Data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Data can be put into and copied out of variables and arrays. Putting data into a variable is called `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `assigning the data to the variable`), ` and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The assignment operator is the primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `MyNumber:=3
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `creates the variable `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyNumber`), ` and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called `, `[Products]`, `Size, you would write `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyNumber`), ` on the right side of the assignment operator:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `[Products]Size:=MyNumber
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `[Products]`, `Size`), ` would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You assign data to array elements by using curly braces ({...}):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `atNames{1}:="Richard"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "local-process-and-interprocess-variables"
    }
  }, `Local, Process, and Interprocess variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create three types of variables: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `local`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `process`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `interprocess`), `. The difference between the three types of elements is their scope, or the objects to which they are available.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "local-variables"
    }
  }, `Local variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A local variable is, as its name implies, local to a method\u2014accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being \u201Clocal in scope.\u201D Local variables are used to restrict a variable so that it works only within the method.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You may want to use a local variable to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Avoid conflicts with the names of other variables`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use data temporarily`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Reduce the number of process variables`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you are working in a database with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Frequently, in a database, small pieces of information are needed from the user. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Request`), ` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Parameters $1, $2... passed to methods are local variables. For more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/18/Concepts/parameters"
    }
  }, `Parameters`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "process-variables"
    }
  }, `Process variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In interpreted mode, variables are maintained dynamically; they are created and erased from memory \u201Con the fly.\u201D In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A process can \u201Cpeek and poke\u201D process variables from another process using the commands `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET PROCESS VARIABLE`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET PROCESS VARIABLE`), `. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Interprocess communication at specific places or your code`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Handling of interprocess drag and drop`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In Client/Server, communication between processes on client machines and the stored procedures running on the server machines`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, see the chapter `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Processes`), ` and the description of these commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "interprocess-variables"
    }
  }, `Interprocess variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Interprocess variables are available throughout the database and are shared across all cooperative processes. They are primarily used to share information between processes.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The name of an interprocess variable always begins with the symbols (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `<>`), `) \u2014 a \u201Cless than\u201D sign followed by a \u201Cgreater than\u201D sign\u2014 followed by 31 characters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;