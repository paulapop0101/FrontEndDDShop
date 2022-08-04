import { Subcategory } from "../subcategory/subcategory";

export class Category {
    id!:number;
    public name!:string;
    subcategories!:Subcategory[];
}
