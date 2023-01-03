import { Subcategory } from "./subcategory";
import { Value } from "./value";

export class Attribute {
    id! : number;
    name! : string;
    values!: Value[];
    subcategories!:Subcategory[];

}
