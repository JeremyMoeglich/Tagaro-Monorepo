import { Price } from "../priceable_asset_types";

export function cprice(price: number, singular: number = 0): Price {
    return {
        singular,
        monat: price,
        jahr: price,
    };
}