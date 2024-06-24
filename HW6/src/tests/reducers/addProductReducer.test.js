import Product from "../../entity/product";
import {addProductReducer} from "../../reducers/addProductReducer";
import {initialState} from "../../initialState";

describe('Add Reducer tests', () => {
    test("add product test", () => {
        const testProduct = {
            payload: new Product("Nokia", "Забытая классика", 10_000),
        };
        addProductReducer(initialState, testProduct);
        expect(initialState.productList.length).toBe(5);
        expect(initialState.productList[4]).toEqual(testProduct.payload);
        expect(initialState.productList[0].name).toEqual("iPhone");
    });
})