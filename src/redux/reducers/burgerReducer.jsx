const burgerState = {
    buger:
    {
        salad: 1,
        cheese: 1,
        balcon: 1,
        meat: 1
    },

    menu:
    {
        salad: 10,
        cheese: 10,
        balcon: 10,
        meat: 10
    },

    total: 40
}
export const BurgerReducer = (state = burgerState, action) => {
    return { ...state }
}