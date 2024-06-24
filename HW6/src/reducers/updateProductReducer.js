/**
 * Редюсер для обновления продуктов в списке продуктов
 * @param state
 * @param action
 */
export const updateProductReducer = (state, action) => {
    // Поиск продукта в списке продуктов для замены
    state.productList.forEach(product => {
        if (product.id === action.payload.id) {
            product.name = action.payload.name;
            product.description = action.payload.description;
            product.price = action.payload.price;
            product.available = action.payload.available;
        }
    });
};