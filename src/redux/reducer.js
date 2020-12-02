const reducer = (state, action) => {
    console.log(action.type)
    switch(action.type) {
        case "CHECKBOX": {
            var upd = [...state.list]
            var newTotal, newSave, newItems
            
            if (action.checkData) {
                upd[action.index].status = "Selected"
                newItems = state.items + 1
                newTotal = state.totalPrice + state.list[action.index].sp
                newSave = state.savePrice + (state.list[action.index].mrp - state.list[action.index].sp)
            }
            else {
                upd[action.index].status = " "
                newItems = state.items - 1
                newTotal = state.totalPrice - state.list[action.index].sp
                newSave = state.savePrice - (state.list[action.index].mrp - state.list[action.index].sp)
            }
            upd[action.index].selected = action.checkData

            console.log(state.savePrice)
            return({...state, upd, items: newItems, totalPrice: newTotal, savePrice: newSave})
        }
        default: return state;
    }
}

export default reducer;