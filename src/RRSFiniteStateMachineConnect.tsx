import * as React from 'react';
import { RRSFiniteStateMachineContext } from './RRSFiniteStateMachineContext';
import { IRRSFiniteStateMachineConnectProps } from './type/IRRSFiniteStateMachineConnectProps';
import { IRRSFiniteStateMachineContextValue } from './type/IRRSFiniteStateMachineContextValue';

export const RRSFiniteStateMachineConnect = <Props extends {}={}>({
    stateMachine,
    mapComponentPropsToMachineProps,
    context = RRSFiniteStateMachineContext
}: IRRSFiniteStateMachineConnectProps) => {
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
            }, [runProps]);

            return React.useMemo(() => <Component {...props} />, [props]);
        });
    }
}
