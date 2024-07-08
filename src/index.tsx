import * as React from 'react';
import { IRRSFiniteStateMachineHookProps } from './type/IRRSFiniteStateMachineHookProps';
import { RRSFiniteStateMachineContext } from './RRSFiniteStateMachineContext';
import { IRRSFiniteStateMachineContextValue } from './type/IRRSFiniteStateMachineContextValue';

export { RRSFiniteStateMachineContext } from './RRSFiniteStateMachineContext';
export { RRSFiniteStateMachineContextProvider } from './RRSFiniteStateMachineContextProvider';
export { RRSFiniteStateMachineConnect } from './RRSFiniteStateMachineConnect';

export const useStateMachine = (props: IRRSFiniteStateMachineHookProps, checkProps: any[]) => {
    const contextValue: IRRSFiniteStateMachineContextValue =
        React.useContext(props.context || RRSFiniteStateMachineContext);
    const runProps = React.useMemo(() => {
        return props.runProps
    }, checkProps);

    React.useEffect(() => {
        const stop = contextValue.engine?.runMachineWithProps(
            props.stateMachine,
            runProps
        );
        return stop;
    }, [runProps, props.stateMachine, contextValue])
}
