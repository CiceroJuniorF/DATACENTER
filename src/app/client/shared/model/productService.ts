import { Field } from "app/client/shared/model/field";
import { ServiceItem } from "app/client/shared/model/serviceItem";

export class ProductService{
    
    constructor(){
        this.field = [];
        this.serviceItem = [];

    }
    public field:Field[];
    public serviceItem:ServiceItem[];
	
}