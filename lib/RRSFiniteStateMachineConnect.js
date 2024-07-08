"use strict";
var __assign = (this && this.__assign) || function () {
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RRSFiniteStateMachineConnect = void 0;
var React = __importStar(require("react"));
var RRSFiniteStateMachineContext_1 = require("./RRSFiniteStateMachineContext");
var RRSFiniteStateMachineConnect = function (_a) {
    var stateMachine = _a.stateMachine, mapComponentPropsToMachineProps = _a.mapComponentPropsToMachineProps, _b = _a.context, context = _b === void 0 ? RRSFiniteStateMachineContext_1.RRSFiniteStateMachineContext : _b;
    return function (Component) {
        return (function (props) {
            var contextValue = React.useContext(context);
            var runProps = mapComponentPropsToMachineProps
                ? React.useMemo(function () { return mapComponentPropsToMachineProps(props); }, [props])
                : props;
            React.useEffect(function () {
                var _a;
                var stop = (_a = contextValue.engine) === null || _a === void 0 ? void 0 : _a.runMachineWithProps(stateMachine, runProps);
                return stop;
            }, [runProps]);
            return React.useMemo(function () { return React.createElement(Component, __assign({}, props)); }, [props]);
        });
    };
};
exports.RRSFiniteStateMachineConnect = RRSFiniteStateMachineConnect;
//# sourceMappingURL=RRSFiniteStateMachineConnect.js.map