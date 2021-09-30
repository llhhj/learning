import { createStore } from 'redux'
// import { createSlice, configureStore } from '@reduxjs/toolkit'

// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//         case 'counter/incremented':
//             return { value: state.value + 1 }
//         case 'counter/decremented':
//             return { value: state.value - 1 }
//         default:
//             return state
//     }
// }

// const store = createStore(counterReducer)

// store.dispatch({type:'counter/incremented'})

// store.dispatch({type:'counter/incremented'})

// let state = store.getState()

// console.log(state,'state')

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
    reducers: counterSlice.reducers
})

store.subscribe(() => console.log(store.getState()))

