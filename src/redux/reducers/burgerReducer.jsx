const burgerState = {
    burger:
    {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },

    menu:
    {
        salad: 5,
        cheese: 10,
        bacon: 20,
        meat: 20
    },

    total: 0
}
export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            // thay đổi số lượng
            let { propBurber, amout } = action
            if (action.amout === -1 && state.burger[propBurber] < 1) {
                return { ...state }
            }
            let burgerUpDate = { ...state.burger }
            burgerUpDate[propBurber] += amout
            state.burger = burgerUpDate
            // tính tổng tiền
            state.total += amout * state.menu[propBurber]
            return { ...state }
        }
        default:
            break
    }
    return { ...state }
}