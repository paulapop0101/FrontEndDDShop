import { CartEntry } from "./cart-entry";

export class Cart {
    total_price!: Float32Array;
    entries!:CartEntry[];
}
