exports.id = 17781;
exports.ids = [17781];
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

/***/ 99764:
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
var client_server_exports = {};
__export(client_server_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(client_server_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "client-server",
  title: "Client-server page"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "settings/client-server",
  "id": "version-19-R6/settings/client-server",
  "title": "Client-server page",
  "description": "The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode.",
  "source": "@site/versioned_docs/version-19-R6/settings/client-server.md",
  "sourceDirName": "settings",
  "slug": "/settings/client-server",
  "permalink": "/docs/pt/settings/client-server",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "client-server",
    "title": "Client-server page"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Backup page",
    "permalink": "/docs/pt/settings/backup"
  },
  "next": {
    "title": "Web page",
    "permalink": "/docs/pt/settings/web"
  }
};
const assets = {};
const toc = [{
  value: "Network options page",
  id: "network-options-page",
  level: 2
}, {
  value: "Network",
  id: "network",
  level: 3
}, {
  value: "Publish database at startup",
  id: "publish-database-at-startup",
  level: 4
}, {
  value: "Publication name",
  id: "publication-name",
  level: 4
}, {
  value: "Port Number",
  id: "port-number",
  level: 4
}, {
  value: "4D Server and port numbers",
  id: "4d-server-and-port-numbers",
  level: 4
}, {
  value: "Authentication of user with domain server",
  id: "authentication-of-user-with-domain-server",
  level: 4
}, {
  value: "Service Principal Name",
  id: "service-principal-name",
  level: 4
}, {
  value: "Client-Server Connections Timeout",
  id: "client-server-connections-timeout",
  level: 4
}, {
  value: "Client-Server Communication",
  id: "client-server-communication",
  level: 3
}, {
  value: "Register Clients at Startup For Execute On Client",
  id: "register-clients-at-startup-for-execute-on-client",
  level: 4
}, {
  value: "Encrypt Client-Server Communications",
  id: "encrypt-client-server-communications",
  level: 4
}, {
  value: "Update Resources folder during a session",
  id: "update-resources-folder-during-a-session",
  level: 4
}, {
  value: "IP configuration page",
  id: "ip-configuration-page",
  level: 2
}, {
  value: "Allow-Deny Configuration Table",
  id: "allow-deny-configuration-table",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "network-options-page"
    }
  }, `Network options page`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "network"
    }
  }, `Network`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "publish-database-at-startup"
    }
  }, `Publish database at startup`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you indicate whether or not the 4D Server database will appear in the list of published databases.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When this option is checked (default), the database is made public and appears in the list of published databases (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Available`), ` tab).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the option is not checked, the database is not made public and it does not appear in the list of published databases. To connect, users must manually enter the address of the database on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Custom`), ` tab of the connection dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you modify this parameter, you must restart the server database in order for it to be taken into account.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "publication-name"
    }
  }, `Publication name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you change the publication name of a 4D Server database, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, the name displayed on the dynamic `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Available`), ` tab of the connection dialog box (see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html"
    }
  }, `Connecting to a 4D Server Database`), ` section). By default, 4D Server uses the name of the project file. You can enter any custom name you want.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This parameter is not taken into account in custom client-server applications. In theory, the client application connects directly to the server application, without passing by the connection dialog box. However, in the event of an error, this dialog box can appear; in this case, the publication name of the server application is the name of the compiled project.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "port-number"
    }
  }, `Port Number`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you change the TCP port number on which 4D Server publishes the database. This information is stored in the project and on each client machine. By default, the TCP port number used by 4D Server and 4D in remote mode is 19813.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Customizing this value is necessary when you want to use several 4D applications on the same machine; in this case, you must specify a different port number for each application.
When you modify this value from 4D Server or 4D, it is automatically passed on to all the 4D machines connected to the database. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To update any other client machines that are not connected, you just need to enter the new port number (preceded by a colon) after the IP address of the server machine on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Custom`), ` tab of the connection dialog box at the time of the next connection. For example, if the new port number is 19888:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26177)/* ["default"] */ .Z),
    width: "466",
    height: "488"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Only databases published on the same port as the one set in 4D client are visible on the TCP/IP dynamic publication page.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-server-and-port-numbers"
    }
  }, `4D Server and port numbers`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D Server uses three TCP ports for communications between internal servers and clients:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `SQL Server`), `: 19812 by default (can be modified via the "SQL/Configuration" page of the Preferences).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Application Server`), `: 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `DB4D Server`), ` (database server): 19814 by default . This port number cannot be modified directly but it always consists of the application server port number + 1.\\
When a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\\
Note that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "authentication-of-user-with-domain-server"
    }
  }, `Authentication of user with domain server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option allows you to implement SSO (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Single Sign On`), `) capabilities in your 4D Server database on Windows. When you check this option, 4D transparently connects to the Active directory of the Windows domain server and gets the available authentication tokens. This option is described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"
    }
  }, `Single Sign On (SSO) on Windows`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "service-principal-name"
    }
  }, `Service Principal Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When Single Sign On (SSO) is enabled (see above), you must fill in this field if you want to use Kerberos as your authentication protocol. This option is described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"
    }
  }, `Single Sign On (SSO) on Windows`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "client-server-connections-timeout"
    }
  }, `Client-Server Connections Timeout`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This device is used to set the timeout (period of inactivity beyond which the connection is closed) between 4D Server and the client machines connecting to it. The Unlimited option removes the timeout. When this option is selected, client activity control is eliminated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a timeout is selected, the server will close the connection of a client if it does not receive any requests from the latter during the specified time limit.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "client-server-communication"
    }
  }, `Client-Server Communication`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "register-clients-at-startup-for-execute-on-client"
    }
  }, `Register Clients at Startup For Execute On Client`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, all the 4D remote machines connecting to the database can execute methods remotely. This mechanism is detailed in the section `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"
    }
  }, `Stored procedures on client machines`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "encrypt-client-server-communications"
    }
  }, `Encrypt Client-Server Communications`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you activate the secured mode for communications between the server machine and the 4D remote machines. This option is detailed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"
    }
  }, `Encrypting Client/Server Connections`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "update-resources-folder-during-a-session"
    }
  }, `Update Resources folder during a session`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This setting can be used to globally set the updating mode for the local instance of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Resources`), ` folder on the connected 4D machines when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Resources`), ` folder of the database is modified during the session (the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Resources`), ` folder is automatically synchronized on the remote machine each time a session is opened). Three settings are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Never`), `: The local `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder is not updated during the session. The notification sent by the server is ignored. The local `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder may be updated manually using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Update Local Resources`), ` action menu command (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"
    }
  }, `Using the Resources explorer`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Always`), `: The synchronization of the local `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder is automatically carried out during the session whenever notification is sent by the server.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ask`), `: When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder.\\
The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Resources`), ` folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Automatic or manual mechanisms can be used to notify each client when the contents of this folder have been modified. For more information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html"
    }
  }, `Managing the Resources folder`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "ip-configuration-page"
    }
  }, `IP configuration page`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "allow-deny-configuration-table"
    }
  }, `Allow-Deny Configuration Table`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This table allows you to set access control rules for the database depending on 4D remote machine IP addresses. This option allows reinforcing security, for example, for strategic applications.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This configuration table does not control Web connections.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The behavior of the configuration table is as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The "Allow-Deny" column allows selecting the type of rule to apply (Allow or Deny) using a pop-up menu. To add a rule, click on the Add button. A new row appears in the table. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Delete`), ` button lets you remove the current row.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The "IP Address" column allows setting the IP address(es) concerned by the rule. To specify an address, click in the column and enter the address in the following form: 123.45.67.89 (IPv4 format) or 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6 format). You can use an `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, ` (asterisk) character to specify "starts with" type addresses. For example, 192.168.`), ` indicates all addresses starting with 192.168.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The application of rules is based on the display order of the table. If two rules are contradictory, priority is given to the rule located highest in the table. You can re-order rows by modifying the current sort (click the header of the column to alternate the direction of the sort). You can also move rows using drag and drop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For security reasons, only addresses that actually match a rule will be allowed to connect. In other words, if the table only contains one or more Deny rules, all addresses will be refused because none will match at least one rule. If you want to deny only certain addresses (and allow others), add an Allow * rule at the end of the table. For example:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Deny 192.168.* (deny all addresses beginning with 192.168)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Allow * (but allow all other addresses)
`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, no connection restrictions are applied by 4D Server: the first row of the table contains the Allow label and the * (all addresses) character.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 26177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png");

/***/ })

};
;