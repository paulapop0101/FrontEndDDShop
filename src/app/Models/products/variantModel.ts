import { AssignedValue } from "./assigned-value";


export class VariantModel {
    id!:number;
    productId! : number;
    name!:string;
    price!:string;
    quantity!:string;
    added_date!:string;
    attributes!: number[];
    assignedValues!: AssignedValue[];
}
