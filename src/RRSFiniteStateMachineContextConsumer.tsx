import * as React from 'react';
import { RRSFiniteStateMachineContext } from './RRSFiniteStateMachineContext';
import { IRRSFiniteStateMachineContextConsumerProps } from './type/IRRSFiniteStateMachineContextConsumerProps';
import { IRRSFiniteStateMachineContextValue } from './type/IRRSFiniteStateMachineContextValue';

export const RRSFiniteStateMachineContextConsumer = <Props extends {}={}>({
    stateMachine,
    mapComponentPropsToMachineProps,
    context = RRSFiniteStateMachineContext
}: IRRSFiniteStateMachineContextConsumerProps) => {
    return (Component: React.ComponentType<Props>) => {
        return ((props: Props) => {
            const contextValue: IRRSFiniteStateMachineContextValue = React.useContext(context);
            let runProps = mapComponentPropsToMachineProps 
                ? React.useMemo(() => mapComponentPropsToMachineProps(props), [props])
                : props;
            
            React.useEffect(() => {
                const stop = contextValue.engine?.runMachineWithProps(
                    stateMachine,
                    runProps
                );
                return stop;
            }, [runProps])

            return <Component {...props}/>
        });
    }
}
