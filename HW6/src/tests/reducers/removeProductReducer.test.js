import {initialState} from "../../initialState";
import {removeProductReducer} from "../../reducers/removeProductReducer";

describe('Remove ProductComponent tests', () => {
    test('Remove product test', () => {
        const removeAction = {payload: initialState.productList[0].id};
        const removeProductName = initialState.productList[0].name;
        removeProductReducer(initialState, removeAction);
        expect(initialState.productList.length).toBe(3);
        expect(initialState.productList[0].name).not.toEqual(removeProductName);
    });
})