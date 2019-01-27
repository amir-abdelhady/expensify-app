import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 10 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count = 101} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
          const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy 
            }
            break;

        case 'DECREMENT':
          const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
            break

        case 'SET':
            return {
                count: action.count
            }
            break

        case 'RESET':
            return {
                count: 0
            }
            break
    
        default:
            return state
            break;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 3 }))

store.dispatch(decrementCount())

store.dispatch(setCount({ count: 20 }))