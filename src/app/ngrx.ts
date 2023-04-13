import { Action, createAction, props, createReducer, on } from "@ngrx/store";

enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement'
}

// export class Decrement implements Action {
//     readonly type = ActionTypes.Decrement
// }

// export class Increment implements Action {
//     readonly type = ActionTypes.Increment
// }

export const decrement = createAction(
    ActionTypes.Decrement, 
    props<{ payload: any}>()
)

export const increment = createAction(
    ActionTypes.Increment, 
    props<{ payload: any}>()
)

const INITIAL_STATE = {
    counter: 0
}

// export const reducer = (state = INITIAL_STATE, action: any) => {
//     switch (action.type) {
//         case ActionTypes.Decrement: 
//             return { ...state, counter: state.counter -1 }
//         case ActionTypes.Increment: 
//             return { ...state, counter: state.counter + action.payload }
//         default:
//             return state
//     }
// }

export const reducer = createReducer(
    INITIAL_STATE, 
    on(increment, (state, action: any) => ({
        ...state, 
        counter: state.counter + action.payload
    })), 
    on(decrement, (state, action: any) => ({
        ...state, 
        counter: state.counter - action.payload
    }))
)