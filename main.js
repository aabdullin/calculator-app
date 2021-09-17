class Calculator {
    constructor() {
        this.resultTotal = document.querySelector(".display");
        this.delete = this.delete.bind(this);
        this.clear = this.clear.bind(this);
        this.chooseOperation = this.chooseOperation.bind(this);
        this.appendNumber = this.appendNumber.bind(this);
        this.compute = this.compute.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.init = this.init.bind(this);

    }

    delete() {

    }


    clear () {

    }

    chooseOperation(operation) {

    }

    appendNumber (number) {

    }

    compute () {

    }

    numberClicked () {

    }

    operatorClicked () {

    }

    updateDisplay () {
        this.resultTotal.innerHTML
    }

    init () {
        console.log('hey')

        this.operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < this.operands.length; i++) {  
            document.getElementById(`data-${this.operands[i]}`).onClick=() => console.log(this.operands[i])
            // this.operands[i].addEventListener('click',function(){
            //     console.log('hello')
            // });
        
        }

        this.operators = ['+', '-', '.', '/', '*']
        for (let i = 0; i < this.operators.length; i++) {  
            document.getElementById(`data_${this.operators[i]}`).onClick=() => console.log(operators[i]) 
        }

        document.getElementById("reset").onclick = () => {
            this.clear()
        };

        document.getElementById("delete").onclick = () => {
            this.delete()
        };

        document.getElementById("equals").onclick = () => {
            this.compute()
            this.updateDisplay()
        };

    }
    
}


const calculator = new Calculator();
calculator.init()