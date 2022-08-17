exports.id = 48239;
exports.ids = [48239];
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

/***/ 8867:
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
var shared_exports = {};
__export(shared_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(shared_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "shared",
  title: "Shared objects and collections"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/shared",
  "id": "version-18/Concepts/shared",
  "title": "Shared objects and collections",
  "description": "Overview",
  "source": "@site/versioned_docs/version-18/Concepts/shared.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/shared",
  "permalink": "/docs/fr/18/Concepts/shared",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "shared",
    "title": "Shared objects and collections"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Parameters",
    "permalink": "/docs/fr/18/Concepts/parameters"
  },
  "next": {
    "title": "Control flow overview",
    "permalink": "/docs/fr/18/Concepts/control-flow"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Using shared objects or collections",
  id: "using-shared-objects-or-collections",
  level: 2
}, {
  value: "Modification",
  id: "modification",
  level: 3
}, {
  value: "Read",
  id: "read",
  level: 3
}, {
  value: "Duplication",
  id: "duplication",
  level: 3
}, {
  value: "Storage",
  id: "storage",
  level: 3
}, {
  value: "Use...End use",
  id: "useend-use",
  level: 2
}, {
  value: "Example 1",
  id: "example-1",
  level: 2
}, {
  value: "Example 2",
  id: "example-2",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared objects`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shared collections`), ` are specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/18/Concepts/object"
    }
  }, `objects`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/18/Concepts/collection"
    }
  }, `collections`), ` whose contents are shared between processes. In contrast to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/18/Concepts/variables#interprocess-variables"
    }
  }, `interprocess variables`), `, shared objects and shared collections have the advantage of being compatible with `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `preemptive 4D processes`), `: they can be passed by reference as parameters to commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `New process`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CALL WORKER`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Shared objects and shared collections can be stored in variables declared with standard `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_OBJECT`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_COLLECTION`), ` commands, but must be instantiated using specific commands:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `to create a shared object, use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `New shared object`), ` command,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `to create a shared collection, use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `New shared collection`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Shared objects and collections can be set as properties of standard (not shared) objects or collections.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In order to modify a shared object/collection, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Use...End use`), ` structure must be called. Reading a shared object/collection value does not require `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Use...End use`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A unique, global catalog returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Storage`), ` command is always available throughout the database and its components, and can be used to store all shared objects and collections.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-shared-objects-or-collections"
    }
  }, `Using shared objects or collections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once instantiated with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `New shared object`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `New shared collection`), ` commands, shared object/collection properties and elements can be modified or read from any process of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "modification"
    }
  }, `Modification`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Modifications can be applied to shared objects and shared collections:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `adding or removing object properties,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, all modification instructions in a shared object or collection must be surrounded by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` keywords, otherwise an error is generated.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End Use
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A shared object/collection can only be modified by one process at a time. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use`), ` locks the shared object/collection from other threads, while the last `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `End use`), ` unlocks all objects and collections. Trying to modify a shared object/collection without at least one `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` generates an error. When a process calls `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` on a shared object/collection that is already in use by another process, it is simply put on hold until the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `End use`), ` unlocks it (no error is generated). Consequently, instructions within `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shared groups`), `. A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Calling `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Use`), ` on a shared object/collection of a group will lock properties/elements of all shared objects/collections belonging to the same group.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Please refer to example 2 for an illustration of shared group rules.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Shared groups are managed through an internal property named `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `locking identifier`), `. For detailed information on this value, please refer to the 4D Developer's guide.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "read"
    }
  }, `Read`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Reading properties or elements of a shared object/collection is allowed without having to call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` structure, even if the shared object/collection is in use by another process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, it is necessary to read a shared object/collection within `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` when several values are linked together and must be read at once, for consistency reasons.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "duplication"
    }
  }, `Duplication`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OB Copy`), ` with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "storage"
    }
  }, `Storage`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Storage`), ` is a unique shared object, automatically available on each application and machine. This shared object is returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Storage`), ` command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that, unlike standard shared objects, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `storage`), ` object does not create a shared group when shared objects/collections are added as its properties. This exception allows the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Storage`), ` object to be used without locking all connected shared objects or collections.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Storage`), ` command description.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "useend-use"
    }
  }, `Use...End use`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The formal syntax of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` structure is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` Use(Shared_object_or_Shared_collection)
    statement(s)
 End use
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` structure defines a sequence of statements that will execute tasks on the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Shared_object_or_Shared_collection`), ` parameter under the protection of an internal semaphore. `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Shared_object_or_Shared_collection`), ` can be any valid shared object or shared collection.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Shared objects and shared collections are designed to allow communication between processes, in particular, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `preemptive 4D processes`), `. They can be passed by reference as parameters from a process to another one. For detailed information on shared objects or shared collections, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared objects and shared collections`), ` page. Surrounding modifications on shared objects or shared collections by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Use...End use`), ` keywords is mandatory to prevent concurrent access between processes.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Once the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Use`), ` line is successfully executed, all `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Shared_object_or_Shared_collection`), ` properties/elements are locked for all other process in write access until the corresponding `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `End use`), ` line is executed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `statement(s)`), ` sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If another shared object or collection is added as a property of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Shared_object_or_Shared_collection`), ` parameter, they become connected within the same shared group (see `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Using shared objects or collections`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If another process tries to access one of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Shared_object_or_Shared_collection`), ` properties or connected properties while a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Use...End use`), ` sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `End use`), ` line unlocks the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Shared_object_or_Shared_collection`), ` properties and all objects sharing the same locking identifier.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Several `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Use...End use`), ` structures can be nested in the 4D code. In that case, all locks are stacked and properties/elements will be released only when the last End use call is executed.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` If a collection method modifies a shared collection, an internal `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Use`), ` is automatically called for this shared collection while the function is executed.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "example-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` ARRAY TEXT($_items;0)
 ... //fill the array with items to count
 $nbItems:=Size of array($_items)
 C_OBJECT($inventory)
 $inventory:=New shared object
 Use($inventory)
    $inventory.nbItems:=$nbItems
 End use

  //Create processes
 For($i;1;$nbItems)
    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)
  //$inventory object sent by reference
 End for
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_TEXT($1)
 C_TEXT($what)
 C_OBJECT($2)
 C_OBJECT($inventory)
 $what:=$1 //for better readability
 $inventory:=$2

 $count:=CountMethod($what) //method to count products
 Use($inventory) //use shared object
    $inventory[$what]:=$count  //save the results for this item
 End use
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "example-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following examples highlight specific rules when handling shared groups:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $ob1:=New shared object
 $ob2:=New shared object
 Use($ob1)
    $ob1.a:=$ob2  //group 1 is created
 End use

 $ob3:=New shared object
 $ob4:=New shared object
 Use($ob3)
    $ob3.a:=$ob4  //group 2 is created
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 already belongs to another group
  //assignment is not allowed
 End use

 Use($ob3)
    $ob3.a:=Null //remove any reference to $ob4 from group 2
 End use

 Use($ob1) //use an object from group 1
    $ob1.b:=$ob4  //ERROR
  //$ob4 still belongs to group 2
  //assignment is not allowed
 End use
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;