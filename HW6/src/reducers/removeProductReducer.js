/**
 * Редюсер для удаления продукта из списка продуктов
 * @param state
 * @param action
 */
export const removeProductReducer = (state, action) => {
    //Удаление продукта из списка продуктов, хранящихся в state, по id
    state.productList = state.productList.filter(item => item.id !== action.payload);
}