import { Product } from "./product";

export class OrderHistory{
    id? : number;
    email? : string;
    name? : string;
    address? : string;
    phone? : string;
    city? : string;
    state? : string;
    zipcode? : string;
    country? : string;
    cardNumber? : number;
    product? : Product
}