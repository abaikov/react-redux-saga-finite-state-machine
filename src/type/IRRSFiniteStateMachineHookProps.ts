import { RSFiniteStateMachine } from 'redux-saga-finite-state-machine'
import { IRRSFiniteStateMachineContextValue } from './IRRSFiniteStateMachineContextValue'

export interface IRRSFiniteStateMachineHookProps<
    RunProps = {},
    ERSFiniteStateMachineState extends string | number | symbol = string,
    ReduxStoreState = undefined,
> {
    stateMachine: RSFiniteStateMachine<ERSFiniteStateMachineState, ReduxStoreState, RunProps>
    context?: React.Context<IRRSFiniteStateMachineContextValue>
    runProps: RunProps
}
