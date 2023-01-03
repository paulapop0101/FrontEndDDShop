import {AssignedValue} from "../Models/products/assigned-value"
export class CartEntry {
    id!:number;
    variant_id!:number;
    name!:string;
    quantity!:number;
    price!:string;
    totalPrice!:string;
    assignedValueDTOList!:AssignedValue[];
}
