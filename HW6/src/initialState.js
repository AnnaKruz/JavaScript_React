import Product from "./entity/product";

export const initialState = {
    productList: [
        new Product("iPhone", "Необоснованно дорогое распиаренное барахло", 100_000),
        new Product("Samsung", "Ладно, эти хотя бы на морозе не разряжаются и не требуют от тебя слишком многого", 80_000),
        new Product("Honor", "В самый раз", 70_000),
        new Product("Xiaomi", "Здесь уже есть вопросы к надёжности", 50_000),
    ]
};