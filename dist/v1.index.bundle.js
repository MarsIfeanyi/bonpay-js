/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/v1/utils.ts":
/*!*************************!*\
  !*** ./src/v1/utils.ts ***!
  \*************************/
/***/ ((module) => {


// the origin should point to your hosted app (React, Vue etc) in production,
//  but for development, it would point to localhost of your app (pay-app)
var utils = function () {
    var origin = "https://bonpay.codemon.me";
    var iFrameId = "pay-frame-id";
    var containerId = "pay-widget-wrapper";
    function init(_a) {
        var title = _a.title, config = _a.config;
        if (document.getElementById(containerId) &&
            document.getElementById(iFrameId)) {
            closeWidget();
        }
        var styleSheet = document.createElement("style");
        styleSheet.innerText = loaderStyles;
        document.head.appendChild(styleSheet);
        var loader = document.createElement("div");
        var childDiv = document.createElement("div");
        loader.setAttribute("id", "pay-app-loader");
        loader.classList.add("app-loader");
        childDiv.classList.add("app-loader__spinner");
        for (var i = 0; i < 12; i++) {
            var div = document.createElement("div");
            childDiv.appendChild(div);
        }
        loader.appendChild(childDiv);
        var source = new URL(origin);
        var container = document.createElement("div");
        container.setAttribute("id", containerId);
        container.setAttribute("style", containerStyle);
        document.body.insertBefore(container, document.body.childNodes[0]);
        document.getElementById(containerId).appendChild(loader);
        var iframe = document.createElement("iframe");
        var iframeAttr = [
            {
                key: "src",
                val: source.href,
            },
            {
                key: "style",
                val: iframeStyle,
            },
            {
                key: "id",
                val: iFrameId,
            },
            {
                key: "allowfullscreen",
                val: "true",
            },
            {
                key: "allowpaymentrequest",
                val: "true",
            },
            {
                key: "title",
                val: title,
            },
            {
                key: "sandbox",
                val: "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups",
            },
        ];
        iframeAttr.forEach(function (_a) {
            var key = _a.key, val = _a.val;
            return iframe.setAttribute(key, val);
        });
        iframe.onload = function () {
            iframe.contentWindow.postMessage({
                type: "sdkData",
                config: config,
            }, origin);
        };
        document.getElementById(containerId).appendChild(iframe);
        window.closePayFrame = closeWidget;
        return iframe;
    }
    function closeWidget() {
        var container = document.getElementById(containerId);
        document.body.removeChild(container);
    }
    function openWidget() {
        var container = document.getElementById(containerId);
        var loader = document.getElementById("pay-app-loader");
        var frame = document.getElementById(iFrameId);
        container.style.visibility = "visible";
        container.style.display = "flex";
        loader.style.display = "block";
        setTimeout(function () {
            var container = document.getElementById(containerId);
            container.style.display = "flex";
            frame.style.display = "block";
            [container, frame].forEach(function (wrapper) {
                wrapper.style.visibility = "visible";
                wrapper.focus({ preventScroll: false });
            });
        }, 1500);
    }
    return {
        openWidget: openWidget,
        closeWidget: closeWidget,
        init: init,
    };
};
module.exports = utils;
var containerStyle = "position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
var iframeStyle = "position: fixed;display: none;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0; border: none";
var loaderStyles = ".app-loader {\n  text-align: center;\n  color: white;\n  margin-right: -30px;\n  width: 100%;\n  position: fixed;\n  top: 30vh\n}\n@-webkit-keyframes app-loader__spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.app-loader__spinner {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n}\n.app-loader__spinner div {\n  position: absolute;\n  -webkit-animation: app-loader__spinner linear 1s infinite;\n  animation: app-loader__spinner linear 1s infinite;\n  background: white;\n  width: 10px;\n  height: 30px;\n  border-radius: 40%;\n  -webkit-transform-origin: 5px 65px;\n  transform-origin: 5px 65px;\n}\n.app-loader__spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.916666666666667s;\n  animation-delay: -0.916666666666667s;\n}\n.app-loader__spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.833333333333333s;\n  animation-delay: -0.833333333333333s;\n}\n.app-loader__spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n.app-loader__spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.666666666666667s;\n  animation-delay: -0.666666666666667s;\n}\n.app-loader__spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.583333333333333s;\n  animation-delay: -0.583333333333333s;\n}\n.app-loader__spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.app-loader__spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.416666666666667s;\n  animation-delay: -0.416666666666667s;\n}\n.app-loader__spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.333333333333333s;\n  animation-delay: -0.333333333333333s;\n}\n.app-loader__spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n.app-loader__spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.166666666666667s;\n  animation-delay: -0.166666666666667s;\n}\n.app-loader__spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.083333333333333s;\n  animation-delay: -0.083333333333333s;\n}\n.app-loader__spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.app-loader__spinner {\n  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n}\n";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/v1/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var utils = __webpack_require__(/*! ./utils */ "./src/v1/utils.ts");
function BonPay(props) {
    if (!(this instanceof BonPay))
        return new BonPay(props);
    BonPay.prototype.config = __assign({}, props);
    BonPay.prototype.utils = utils();
    return this;
}
BonPay.prototype.setup = function (onSuccess, onError, onClose) {
    if (Object.values(this.config).length < 3) {
        throw new Error("BondPay Misconguration,Check initilization Parameters.");
    }
    var iframe = BonPay.prototype.utils.init({
        title: "BondPayConfig",
        config: this.config,
    });
    BonPay.prototype.iframe = iframe;
    BonPay.prototype.onSuccess = onSuccess;
    BonPay.prototype.onError = onError;
    BonPay.prototype.onClose = onClose;
};
var handleEvents = function (event) {
    if (event.data.appOrigin !== this.origin)
        return;
    switch (event.data.type) {
        case 'ready':
            var loader = document.getElementById("pay-app-loader");
            loader.style.display = "none";
            break;
        case "pay.success":
            BonPay.prototype.success(event.data);
            break;
        case "pay.exit":
            console.log(event.data.type);
            BonPay.prototype.close(event.data);
            break;
        case "pay.error":
            BonPay.prototype.error(event.data);
            break;
    }
};
BonPay.prototype.open = function () {
    BonPay.prototype.utils.openWidget({ config: this.config });
    BonPay.prototype.eventHandler = handleEvents.bind(this);
    window.addEventListener("message", this.eventHandler, false);
};
BonPay.prototype.close = function (data) {
    window.removeEventListener("message", this.eventHandler, false);
    this.onClose(data);
    BonPay.prototype.utils.closeWidget();
};
BonPay.prototype.success = function (data) {
    this.onSuccess(data);
};
BonPay.prototype.error = function (event) {
    this.onError(event);
};
if (window) {
    window.BonPay = BonPay; // make BonPay available in the window object
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BonPay);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFTO0lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxLQUFVO0lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBY0YsSUFBSSxNQUFNLEVBQUU7SUFDVixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLDZDQUE2QztDQUN0RTtBQUdELGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrbW9uZXkvLi9zcmMvdjEvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYmxvY2ttb25leS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibG9ja21vbmV5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ibG9ja21vbmV5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxvY2ttb25leS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jsb2NrbW9uZXkvLi9zcmMvdjEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHRoZSBvcmlnaW4gc2hvdWxkIHBvaW50IHRvIHlvdXIgaG9zdGVkIGFwcCAoUmVhY3QsIFZ1ZSBldGMpIGluIHByb2R1Y3Rpb24sXG4vLyAgYnV0IGZvciBkZXZlbG9wbWVudCwgaXQgd291bGQgcG9pbnQgdG8gbG9jYWxob3N0IG9mIHlvdXIgYXBwIChwYXktYXBwKVxuXG5cbmNvbnN0IHV0aWxzID0gKCkgPT4ge1xuY29uc3Qgb3JpZ2luID0gXCJodHRwczovL2JvbnBheS5jb2RlbW9uLm1lXCI7XG5cbmNvbnN0IGlGcmFtZUlkID0gXCJwYXktZnJhbWUtaWRcIjtcbmNvbnN0IGNvbnRhaW5lcklkID0gXCJwYXktd2lkZ2V0LXdyYXBwZXJcIjtcblxuICBmdW5jdGlvbiBpbml0KHsgdGl0bGUsIGNvbmZpZyB9OnsgdGl0bGU6IGFueSwgY29uZmlnOiBhbnl9KSB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpICYmXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpRnJhbWVJZClcbiAgICApIHtcbiAgICAgIGNsb3NlV2lkZ2V0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZVNoZWV0LmlubmVyVGV4dCA9IGxvYWRlclN0eWxlcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlU2hlZXQpO1xuXG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBheS1hcHAtbG9hZGVyXCIpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiYXBwLWxvYWRlclwiKTtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKFwiYXBwLWxvYWRlcl9fc3Bpbm5lclwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjaGlsZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICBsb2FkZXIuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXG5cbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgVVJMKG9yaWdpbik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgY29udGFpbmVySWQpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBjb250YWluZXJTdHlsZSk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbMF0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgY29uc3QgaWZyYW1lOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICBjb25zdCBpZnJhbWVBdHRyID0gW1xuICAgICAge1xuICAgICAgICBrZXk6IFwic3JjXCIsXG4gICAgICAgIHZhbDogc291cmNlLmhyZWYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwic3R5bGVcIixcbiAgICAgICAgdmFsOiBpZnJhbWVTdHlsZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgICB2YWw6IGlGcmFtZUlkLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgICAgICB2YWw6IFwidHJ1ZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImFsbG93cGF5bWVudHJlcXVlc3RcIixcbiAgICAgICAgdmFsOiBcInRydWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJ0aXRsZVwiLFxuICAgICAgICB2YWw6IHRpdGxlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInNhbmRib3hcIixcbiAgICAgICAgdmFsOiBcImFsbG93LWZvcm1zIGFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctdG9wLW5hdmlnYXRpb24tYnktdXNlci1hY3RpdmF0aW9uIGFsbG93LXBvcHVwc1wiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgaWZyYW1lQXR0ci5mb3JFYWNoKCh7IGtleSwgdmFsIH0pID0+IGlmcmFtZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWwpKTtcbiAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInNka0RhdGFcIixcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgIH0sXG4gICAgICAgIG9yaWdpblxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgd2luZG93LmNsb3NlUGF5RnJhbWUgPSBjbG9zZVdpZGdldDtcbiAgICByZXR1cm4gaWZyYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VXaWRnZXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5XaWRnZXQoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXktYXBwLWxvYWRlclwiKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlGcmFtZUlkKTtcbiAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgW2NvbnRhaW5lciwgZnJhbWVdLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgICAgd3JhcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHdyYXBwZXIuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDE1MDApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvcGVuV2lkZ2V0LFxuICAgIGNsb3NlV2lkZ2V0LFxuICAgIGluaXQsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xuXG5jb25zdCBjb250YWluZXJTdHlsZSA9XG4gIFwicG9zaXRpb246Zml4ZWQ7b3ZlcmZsb3c6IGhpZGRlbjtkaXNwbGF5OiBub25lO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7ei1pbmRleDogOTk5OTk5OTk5O2hlaWdodDogMTAwJTt3aWR0aDogMTAwJTtjb2xvcjogdHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO3Zpc2liaWxpdHk6aGlkZGVuO21hcmdpbjogMDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtcIjtcbmNvbnN0IGlmcmFtZVN0eWxlID1cbiAgXCJwb3NpdGlvbjogZml4ZWQ7ZGlzcGxheTogbm9uZTtvdmVyZmxvdzogaGlkZGVuO3otaW5kZXg6IDk5OTk5OTk5OTt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHM7dmlzaWJpbGl0eTpoaWRkZW47bWFyZ2luOiAwO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowOyBib3JkZXI6IG5vbmVcIjtcbmNvbnN0IGxvYWRlclN0eWxlcyA9IGAuYXBwLWxvYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDMwdmhcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBhcHAtbG9hZGVyX19zcGlubmVyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYXBwLWxvYWRlcl9fc3Bpbm5lciBsaW5lYXIgMXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYXBwLWxvYWRlcl9fc3Bpbm5lciBsaW5lYXIgMXMgaW5maW5pdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNXB4IDY1cHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDVweCA2NXB4O1xufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOTE2NjY2NjY2NjY2NjY3cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45MTY2NjY2NjY2NjY2NjdzO1xufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44MzMzMzMzMzMzMzMzMzNzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjgzMzMzMzMzMzMzMzMzM3M7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43NXM7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjY2NjY2NjY2NjY2NjY2N3M7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNjY2NjY2NjY2NjY2NjY3cztcbn1cbi5hcHAtbG9hZGVyX19zcGlubmVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41ODMzMzMzMzMzMzMzMzNzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjU4MzMzMzMzMzMzMzMzM3M7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNDE2NjY2NjY2NjY2NjY3cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40MTY2NjY2NjY2NjY2NjdzO1xufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMzMzMzMzMzMzMzMzMzM3M7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzMzMzMzMzMzMzMzMzMzcztcbn1cbi5hcHAtbG9hZGVyX19zcGlubmVyIGRpdjpudGgtY2hpbGQoOSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xufVxuLmFwcC1sb2FkZXJfX3NwaW5uZXIgZGl2Om50aC1jaGlsZCgxMCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNjY2NjY2NjY2NjY2NjdzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2NjY2NjY2NjY2NjY2N3M7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDExKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjA4MzMzMzMzMzMzMzMzM3M7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDgzMzMzMzMzMzMzMzMzcztcbn1cbi5hcHAtbG9hZGVyX19zcGlubmVyIGRpdjpudGgtY2hpbGQoMTIpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG4uYXBwLWxvYWRlcl9fc3Bpbm5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KSBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KSBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbn1cbmA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJbml0IH0gZnJvbSAnLi90eXBlcydcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIEJvblBheShwcm9wczogSW5pdCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQm9uUGF5KSlcbiAgICByZXR1cm4gbmV3IChCb25QYXkgYXMgYW55KShwcm9wcyk7XG4gICAgQm9uUGF5LnByb3RvdHlwZS5jb25maWcgPSB7Li4ucHJvcHN9O1xuICAgIEJvblBheS5wcm90b3R5cGUudXRpbHMgPSB1dGlscygpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5Cb25QYXkucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKG9uU3VjY2VzczogYW55LCBvbkVycm9yOiBhbnksIG9uQ2xvc2U6YW55KSB7XG4gXG4gICBpZihPYmplY3QudmFsdWVzKHRoaXMuY29uZmlnKS5sZW5ndGggPCAzKXtcbiAgICAgdGhyb3cgbmV3IEVycm9yKFwiQm9uZFBheSBNaXNjb25ndXJhdGlvbixDaGVjayBpbml0aWxpemF0aW9uIFBhcmFtZXRlcnMuXCIpO1xuICAgfVxuXG4gIGNvbnN0IGlmcmFtZSA9IEJvblBheS5wcm90b3R5cGUudXRpbHMuaW5pdCh7XG4gICAgdGl0bGU6IFwiQm9uZFBheUNvbmZpZ1wiLFxuICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gIH0pO1xuXG4gIEJvblBheS5wcm90b3R5cGUuaWZyYW1lID0gaWZyYW1lO1xuICBCb25QYXkucHJvdG90eXBlLm9uU3VjY2VzcyA9IG9uU3VjY2VzcztcbiAgQm9uUGF5LnByb3RvdHlwZS5vbkVycm9yID0gb25FcnJvcjtcbiAgQm9uUGF5LnByb3RvdHlwZS5vbkNsb3NlID0gb25DbG9zZTtcbn07XG5cblxuY29uc3QgaGFuZGxlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnQ6IGFueSl7XG4gICAgaWYgKGV2ZW50LmRhdGEuYXBwT3JpZ2luICE9PSB0aGlzLm9yaWdpbikgcmV0dXJuO1xuIFxuICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG4gICAgICBjYXNlICdyZWFkeSc6XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5LWFwcC1sb2FkZXJcIik7XG4gICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBheS5zdWNjZXNzXCI6XG4gICAgICAgIEJvblBheS5wcm90b3R5cGUuc3VjY2VzcyhldmVudC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGF5LmV4aXRcIjpcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YS50eXBlKVxuICAgICAgICBCb25QYXkucHJvdG90eXBlLmNsb3NlKGV2ZW50LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwYXkuZXJyb3JcIjpcbiAgICAgICAgQm9uUGF5LnByb3RvdHlwZS5lcnJvcihldmVudC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG5cbkJvblBheS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgQm9uUGF5LnByb3RvdHlwZS51dGlscy5vcGVuV2lkZ2V0KHsgY29uZmlnOiB0aGlzLmNvbmZpZyB9KTtcbiAgQm9uUGF5LnByb3RvdHlwZS5ldmVudEhhbmRsZXIgPSBoYW5kbGVFdmVudHMuYmluZCh0aGlzKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG59O1xuXG5Cb25QYXkucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGRhdGE6IGFueSkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5ldmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgIHRoaXMub25DbG9zZShkYXRhKTtcbiAgQm9uUGF5LnByb3RvdHlwZS51dGlscy5jbG9zZVdpZGdldCgpO1xufTtcblxuQm9uUGF5LnByb3RvdHlwZS5zdWNjZXNzID0gZnVuY3Rpb24gKGRhdGE6IGFueSkge1xuICB0aGlzLm9uU3VjY2VzcyhkYXRhKTtcbn07XG5cbkJvblBheS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICB0aGlzLm9uRXJyb3IoZXZlbnQpO1xufTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICBCb25QYXk6dHlwZW9mIEJvblBheTtcbiAgICAgICAgY2xvc2VQYXlGcmFtZTogYW55O1xuICAgICAgICBldGhlcmV1bTogYW55O1xuICAgIH1cblxuICAgIGludGVyZmFjZSBIVE1MRWxlbWVudCB7XG4gICAgICBjb250ZW50V2luZG93OiBhbnlcbiAgICB9XG59XG5cbmlmICh3aW5kb3cpIHtcbiAgd2luZG93LkJvblBheSA9IEJvblBheTsgLy8gbWFrZSBCb25QYXkgYXZhaWxhYmxlIGluIHRoZSB3aW5kb3cgb2JqZWN0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQm9uUGF5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==