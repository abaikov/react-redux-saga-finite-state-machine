import * as React from 'react';
import { IRRSFiniteStateMachineContextValue } from './IRRSFiniteStateMachineContextValue';
import { RSFiniteStateMachine } from 'redux-saga-finite-state-machine';
export interface IRRSFiniteStateMachineConnectProps<ComponentProps = {}, RunProps = {}, ERSFiniteStateMachineState extends string | number | symbol = string, ReduxStoreState = undefined> {
    stateMachine: RSFiniteStateMachine<ERSFiniteStateMachineState, ReduxStoreState, RunProps>;
    context?: React.Context<IRRSFiniteStateMachineContextValue>;
    mapComponentPropsToMachineProps?: (componentProps: ComponentProps) => RunProps;
}
//# sourceMappingURL=IRRSFiniteStateMachineConnectProps.d.ts.map