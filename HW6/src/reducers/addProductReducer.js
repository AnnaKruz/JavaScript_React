/**
 * Редюсер для добавления нового продукта в список продуктов
 * @param state
 * @param action
 */
export const addProductReducer = (state, action) => {
    //Добавление нового продукта в список продуктов, хранящийся в state
    state.productList.push(action.payload);
};
