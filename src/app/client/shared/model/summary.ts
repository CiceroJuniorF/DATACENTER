import { DataCenter } from "app/shared/model/datacenter";
import { ServiceItem } from "app/client/shared/model/serviceItem";
import { Field } from "app/client/shared/model/field";
import { Service } from "app/client/shared/model/service";
import { User } from "app/shared/model/user";

export class Summary{
    constructor(){
        this.datacenter = new DataCenter();  
        this.serviceItem = []; 
        this.total = 0.00;
        this.fields = [];
    }
    public idClient:number;
    public idUser:number;
    public idService:number;
    public datacenter:DataCenter;
    public serviceItem:ServiceItem[];
    public fields:Field[];
    public total:number;

	
}