"use strict";
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
exports.useStateMachine = exports.RRSFiniteStateMachineContextConsumer = exports.RRSFiniteStateMachineContextProvider = exports.RRSFiniteStateMachineContext = void 0;
var React = __importStar(require("react"));
var RRSFiniteStateMachineContext_1 = require("./RRSFiniteStateMachineContext");
var RRSFiniteStateMachineContext_2 = require("./RRSFiniteStateMachineContext");
Object.defineProperty(exports, "RRSFiniteStateMachineContext", { enumerable: true, get: function () { return RRSFiniteStateMachineContext_2.RRSFiniteStateMachineContext; } });
var RRSFiniteStateMachineContextProvider_1 = require("./RRSFiniteStateMachineContextProvider");
Object.defineProperty(exports, "RRSFiniteStateMachineContextProvider", { enumerable: true, get: function () { return RRSFiniteStateMachineContextProvider_1.RRSFiniteStateMachineContextProvider; } });
var RRSFiniteStateMachineContextConsumer_1 = require("./RRSFiniteStateMachineContextConsumer");
Object.defineProperty(exports, "RRSFiniteStateMachineContextConsumer", { enumerable: true, get: function () { return RRSFiniteStateMachineContextConsumer_1.RRSFiniteStateMachineContextConsumer; } });
var useStateMachine = function (props, checkProps) {
    var contextValue = React.useContext(props.context || RRSFiniteStateMachineContext_1.RRSFiniteStateMachineContext);
    var runProps = React.useMemo(function () {
        return props.runProps;
    }, checkProps);
    React.useEffect(function () {
        var _a;
        var stop = (_a = contextValue.engine) === null || _a === void 0 ? void 0 : _a.runMachineWithProps(props.stateMachine, runProps);
        return stop;
    }, [runProps, props.stateMachine, contextValue]);
};
exports.useStateMachine = useStateMachine;
//# sourceMappingURL=index.js.map