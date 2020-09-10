

//Stack With Array

class StackArray{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items=[];
    }
}


class StackObject{
    constructor(){
        this.count=0;
        this.items={};
    }
    push(element){
        this.items[this.count]=element;
        this.count++;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result= this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }
    clear(){
        this.items={};
        this.count=0;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString=`${this.item[0]}`;
        for(let i=1;i<this.count;i++){
            obString= `${objString},${this.items[i]}`;
        }
        return objString;
    }

}


module.exports={
    StackArray,
    StackObject
}