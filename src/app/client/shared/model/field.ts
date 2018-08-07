export class Field{

	constructor(){
		this.value="";
	}
	public clientServiceId:number=null;
    public id:number=null;
	public name:string=null;
	public dataType:string=null;
	public required:number=null;
	/*Feld TYPE
	 * 0 - text
	 * 1 - radio
	 * 2 - check box
	 * 3 - combo box
	 * 4 - Additional  (possíbilidade de adicionar várias linhas)*/
	public fieldType=null;
	public fieldDescription:string= null;
	public fieldValues:string=null;
	public fieldValueDefault:string=null;
	public isUsedForPrice:number=null;
	public hint:string=null;
	public price:number=null;
	public value:string=null;
	public label:string=null;
	public children:boolean = false;
}   