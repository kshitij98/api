(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{385:function(t,e,r){"use strict";r.r(e);var s=r(2),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"polkadot-rpc-provider-ws"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-rpc-provider-ws","aria-hidden":"true"}},[t._v("#")]),t._v(" @polkadot/rpc-provider/ws")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("name")])]),t._v(": WsProvider")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("description")])]),t._v(": The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("example")])]),t._v(":")]),t._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Api "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api/promise'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WsProvider "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/rpc-provider/ws'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Api")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[r("em",[r("strong",[t._v("see")])]),t._v(": [[HttpProvider]]")]),t._v(" "),r("h1",{attrs:{id:"hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Hierarchy")]),t._v(" "),r("p",[r("strong",[t._v("WsProvider")])]),t._v(" "),r("h1",{attrs:{id:"implements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[t._v("#")]),t._v(" Implements")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("WSProviderInterface")])])]),t._v(" "),r("h1",{attrs:{id:"constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),r("p",[r("a",{attrs:{id:"constructor"}})]),t._v(" "),r("h2",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),r("p",[t._v("⊕ "),r("strong",[t._v("new WsProvider")]),t._v("(endpoint?: "),r("em",[r("code",[t._v("string")])]),t._v(", autoConnect?: "),r("em",[r("code",[t._v("boolean")])]),t._v("): "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L82",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:82"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Default value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("Default value")]),t._v(" endpoint")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("defaults.WS_URL")]),t._v(" "),r("td",[t._v("The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("Default value")]),t._v(" autoConnect")]),t._v(" "),r("td",[r("code",[t._v("boolean")])]),t._v(" "),r("td",[t._v("true")]),t._v(" "),r("td",[t._v("Whether to connect automatically or not.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"accessors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessors","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),r("p",[r("a",{attrs:{id:"hassubscriptions"}})]),t._v(" "),r("h2",{attrs:{id:"hassubscriptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hassubscriptions","aria-hidden":"true"}},[t._v("#")]),t._v(" hasSubscriptions")]),t._v(" "),r("p",[r("strong",[t._v("get hasSubscriptions")]),t._v("(): "),r("code",[t._v("boolean")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L109",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:109"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": "),r("code",[t._v("true")]),t._v(" when this provider supports subscriptions")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("boolean")])]),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),r("p",[r("a",{attrs:{id:"clone"}})]),t._v(" "),r("h2",{attrs:{id:"clone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clone","aria-hidden":"true"}},[t._v("#")]),t._v(" clone")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("clone")]),t._v("(): "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L116",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:116"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("description")])]),t._v(": Returns a clone of the object")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")])],1),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"connect"}})]),t._v(" "),r("h2",{attrs:{id:"connect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect","aria-hidden":"true"}},[t._v("#")]),t._v(" connect")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("connect")]),t._v("(): "),r("code",[t._v("void")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L125",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:125"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Manually connect")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("description")])]),t._v(": The "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html"}},[t._v("WsProvider")]),t._v(" connects automatically by default, however if you decided otherwise, you may connect manually using this method.")],1),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("void")])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"disconnect"}})]),t._v(" "),r("h2",{attrs:{id:"disconnect"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disconnect","aria-hidden":"true"}},[t._v("#")]),t._v(" disconnect")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("disconnect")]),t._v("(): "),r("code",[t._v("void")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L141",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:141"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("description")])]),t._v(": Manually disconnect from the connection, clearing autoconnect logic")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("void")])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"isconnected"}})]),t._v(" "),r("h2",{attrs:{id:"isconnected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isconnected","aria-hidden":"true"}},[t._v("#")]),t._v(" isConnected")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("isConnected")]),t._v("(): "),r("code",[t._v("boolean")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L158",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:158"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Whether the node is connected or not.")]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("boolean")]),t._v("\ntrue if connected")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"on"}})]),t._v(" "),r("h2",{attrs:{id:"on"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on","aria-hidden":"true"}},[t._v("#")]),t._v(" on")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("on")]),t._v("(type: "),r("em",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitted"}},[t._v("ProviderInterface$Emitted")])],1),t._v(", sub: "),r("em",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitcb"}},[t._v("ProviderInterface$EmitCb")])],1),t._v("): "),r("code",[t._v("void")])]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L167",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:167"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Listens on events after having subscribed using the "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html#subscribe"}},[t._v("subscribe")]),t._v(" function.")],1),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitted"}},[t._v("ProviderInterface$Emitted")])],1),t._v(" "),r("td",[t._v("Event")])]),t._v(" "),r("tr",[r("td",[t._v("sub")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_emitcb"}},[t._v("ProviderInterface$EmitCb")])],1),t._v(" "),r("td",[t._v("Callback")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("void")])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"send"}})]),t._v(" "),r("h2",{attrs:{id:"send"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#send","aria-hidden":"true"}},[t._v("#")]),t._v(" send")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("send")]),t._v("(method: "),r("em",[r("code",[t._v("string")])]),t._v(", params: "),r("em",[r("code",[t._v("Array")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(", subscription?: "),r("em",[r("code",[t._v("SubscriptionHandler")])]),t._v("): "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L177",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:177"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Send JSON data using WebSockets to configured HTTP Endpoint or queue.")]),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("method")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The RPC methods to execute")])]),t._v(" "),r("tr",[r("td",[t._v("params")]),t._v(" "),r("td",[r("code",[t._v("Array")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(" "),r("td",[t._v("Encoded paramaters as appliucable for the method")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("Optional")]),t._v(" subscription")]),t._v(" "),r("td",[r("code",[t._v("SubscriptionHandler")])]),t._v(" "),r("td",[t._v("Subscription details (internally used)")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"subscribe"}})]),t._v(" "),r("h2",{attrs:{id:"subscribe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subscribe","aria-hidden":"true"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("subscribe")]),t._v("(type: "),r("em",[r("code",[t._v("string")])]),t._v(", method: "),r("em",[r("code",[t._v("string")])]),t._v(", params: "),r("em",[r("code",[t._v("Array")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(", callback: "),r("em",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_callback"}},[t._v("ProviderInterface$Callback")])],1),t._v("): "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("number")]),t._v(">")]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L231",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:231"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("name")])]),t._v(": subscribe")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Allows subscribing to a specific event.")]),t._v(" "),r("p",[r("em",[r("strong",[t._v("example")])]),t._v(":")]),t._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WsProvider")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://127.0.0.1:9944'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rpc "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rpc")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrpc"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeStorage")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("storage"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freeBalance"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Address"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("subscriptionId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'balance changes subscription id: '")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subscriptionId"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("Subscription type")])]),t._v(" "),r("tr",[r("td",[t._v("method")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("Subscription method")])]),t._v(" "),r("tr",[r("td",[t._v("params")]),t._v(" "),r("td",[r("code",[t._v("Array")]),t._v("<"),r("code",[t._v("any")]),t._v(">")]),t._v(" "),r("td",[t._v("Parameters")])]),t._v(" "),r("tr",[r("td",[t._v("callback")]),t._v(" "),r("td",[r("router-link",{attrs:{to:"/rpc-provider/modules/_types_.html#providerinterface_callback"}},[t._v("ProviderInterface$Callback")])],1),t._v(" "),r("td",[t._v("Callback")])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("number")]),t._v(">\nPromise resolving to the dd of the subscription you can use with [[unsubscribe]].")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{id:"unsubscribe"}})]),t._v(" "),r("h2",{attrs:{id:"unsubscribe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribe","aria-hidden":"true"}},[t._v("#")]),t._v(" unsubscribe")]),t._v(" "),r("p",[t._v("▸ "),r("strong",[t._v("unsubscribe")]),t._v("(type: "),r("em",[r("code",[t._v("string")])]),t._v(", method: "),r("em",[r("code",[t._v("string")])]),t._v(", id: "),r("em",[r("code",[t._v("number")])]),t._v("): "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("boolean")]),t._v(">")]),t._v(" "),r("p",[r("em",[t._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/edbae32/packages/rpc-provider/src/ws/Provider.ts#L240",target:"_blank",rel:"noopener noreferrer"}},[t._v("ws/Provider.ts:240"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("summary")])]),t._v(": Allows unsubscribing to subscriptions made with "),r("router-link",{attrs:{to:"/rpc-provider/classes/_ws_provider_.wsprovider.html#subscribe"}},[t._v("subscribe")]),t._v(".")],1),t._v(" "),r("p",[r("strong",[t._v("Parameters:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[r("code",[t._v("string")])])]),t._v(" "),r("tr",[r("td",[t._v("method")]),t._v(" "),r("td",[r("code",[t._v("string")])])]),t._v(" "),r("tr",[r("td",[t._v("id")]),t._v(" "),r("td",[r("code",[t._v("number")])])])])]),t._v(" "),r("p",[r("strong",[t._v("Returns:")]),t._v(" "),r("code",[t._v("Promise")]),t._v("<"),r("code",[t._v("boolean")]),t._v(">")]),t._v(" "),r("hr")])},[],!1,null,null,null);e.default=a.exports}}]);