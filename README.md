# react-redux-saga-finite-state-machine
A seamless integration library that bridges the redux-saga-finite-state-machine with React, providing an effortless setup for managing React component states through Redux-Saga state machines from **[redux-saga-finite-state-machine](https://www.npmjs.com/package/redux-saga-finite-state-machine)**

## Installation

Install Redux-Saga-Finite-State-Machine using npm:

```bash
npm install redux-saga-finite-state-machine react-redux-saga-finite-state-machine
```

Or using yarn:

```bash
yarn add redux-saga-finite-state-machine react-redux-saga-finite-state-machine
```

## Usage

### Provider

```javascript
    import { RRSFiniteStateMachineContextProvider } from 'react-redux-saga-finite-state-machine';

    const myRSFiniteStateMachineEngine = new RSFiniteStateMachineEngine();

    const App = () => {
        return <RRSFiniteStateMachineContextProvider
            engine={myRSFiniteStateMachineEngine}
        >
            {/* Here you can use hooks and connects */}
        </RRSFiniteStateMachineContextProvider>
    };
```

### Connect

```javascript
    import { RRSFiniteStateMachineConnect } from 'react-redux-saga-finite-state-machine';

    const myRSFiniteStateMachine = new RSFiniteStateMachine({/*your config*/});

    const EnhancedComponent = combine(
        connect(
            (state) => ({ value: state.value })
        ),
        RRSFiniteStateMachineConnect({
            stateMachine: myRSFiniteStateMachine,
            mapComponentPropsToMachineProps: ({ value }) => {
                return {
                    id: value
                }
            }
        })
    )(Component)
```

### Hook

```javascript
    import { useStateMachine } from 'react-redux-saga-finite-state-machine';

    const myRSFiniteStateMachine = new RSFiniteStateMachine({/*your config*/});

    const Component = (props) => {
        useStateMachine({
            stateMachine: myRSFiniteStateMachine,
            runProps: {
                id: props.itemId,
            }
        }, [props.itemId]);

        return /* Body */
    };
```



