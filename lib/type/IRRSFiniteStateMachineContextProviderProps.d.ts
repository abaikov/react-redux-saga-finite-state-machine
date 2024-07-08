import * as React from 'react';
import { IRRSFiniteStateMachineContextValue } from './IRRSFiniteStateMachineContextValue';
import { RSFiniteStateMachineEngine } from 'redux-saga-finite-state-machine';
export interface IRRSFiniteStateMachineContextProviderProps {
    engine: RSFiniteStateMachineEngine;
    context?: React.Context<IRRSFiniteStateMachineContextValue>;
    children: React.ReactNode;
}
//# sourceMappingURL=IRRSFiniteStateMachineContextProviderProps.d.ts.map