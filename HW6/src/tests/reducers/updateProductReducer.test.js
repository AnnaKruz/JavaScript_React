import {initialState} from "../../initialState";
import {updateProductReducer} from "../../reducers/updateProductReducer";
import Product from "../../entity/product";

describe('Update ProductList Reducer tests', () => {
    test('Update ProductList Reducer test', () => {
        const updatedProduct = new Product("New ProductComponent", "some text", 100, false);
        updatedProduct.id = initialState.productList[0].id;
        updateProductReducer(initialState, {payload: updatedProduct});
        expect(initialState.productList[0].name).toEqual("New ProductComponent");
        expect(initialState.productList[0].description).toEqual("some text");
        expect(initialState.productList[0].price).toBe(100);
        expect(initialState.productList[0].available).toEqual(false);
        expect(initialState.productList[1].name).not.toEqual("New ProductComponent");
        expect(initialState.productList[2].description).not.toEqual("some text");
        expect(initialState.productList[3].price).not.toBe(100);
        expect(initialState.productList[1].available).not.toEqual(false);
    });
})