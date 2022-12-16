import {
    createStore
} from "redux";

const myData = {
    mode1: {
        MAXIMUM_DAILY_LOSS: ["500$", "500$", "500$"],
        MAXIMUM_LOSS: ["1000$", "1000$", "1000$"],
        PROFIT_TARGET: ["1000$", "500$"],
        REFUNDABLE_FEE: ["155$"],
    },
    mode2: {
        MAXIMUM_DAILY_LOSS: ["1250$", "1250$", "1250$"],
        MAXIMUM_LOSS: ["2500$", "2500$", "2500$"],
        PROFIT_TARGET: ["2500$", "1250$"],
        REFUNDABLE_FEE: ["250$"],
    },
    mode3: {
        MAXIMUM_DAILY_LOSS: ["2500$", "2500$", "2500$"],
        MAXIMUM_LOSS: ["5000$", "5000$", "5000$"],
        PROFIT_TARGET: ["5000$", "2500$"],
        REFUNDABLE_FEE: ["345$"],
    },
    mode4: {
        MAXIMUM_DAILY_LOSS: ["5000$", "5000$", "5000$"],
        MAXIMUM_LOSS: ["10000$", "10000$", "10000$"],
        PROFIT_TARGET: ["10000$", "5000$"],
        REFUNDABLE_FEE: ["540$"],
    },
    mode5: {
        MAXIMUM_DAILY_LOSS: ["10000$", "10000$", "10000$"],
        MAXIMUM_LOSS: ["20000$", "20000$", "20000$"],
        PROFIT_TARGET: ["50000$", "10000$"],
        REFUNDABLE_FEE: ["1080$"],
    }
}
const reducer = (state = {data:myData}, action ) => {
    if (action.type === "clearData"){
        var copy = {...state}
        copy.data = []
        return copy
    }else if(action.type === "addToData"){
        var copy = {...state}
        copy.data = {...copy.data, newMode: action.payload}
        return copy
    }else{
        return state
    }
}
export const store = createStore(reducer)