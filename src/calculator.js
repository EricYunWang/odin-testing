class Calculator{
    constructor(a , b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    divide(){
        if(this.b === 0){
            return "error";
        }
        else if(this.a === 0){
            return 0;
        }
        return this.a / this.b;
    }
    multiply(){
        return this.a * this.b;
    }
}

module.exports = Calculator;