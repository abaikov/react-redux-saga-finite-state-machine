import * as React from 'react';
import { IRRSFiniteStateMachineContextProviderProps } from './type/IRRSFiniteStateMachineContextProviderProps';
import { RRSFiniteStateMachineContext } from './RRSFiniteStateMachineContext';
import { IRRSFiniteStateMachineContextValue } from './type/IRRSFiniteStateMachineContextValue';

export const RRSFiniteStateMachineContextProvider = (props: IRRSFiniteStateMachineContextProviderProps) => {
    const engine = props.engine;
    const contextValue: IRRSFiniteStateMachineContextValue = React.useMemo(() => {
        return {
            engine
        }
    }, [engine]);

    const Context = props.context || RRSFiniteStateMachineContext;

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
}
