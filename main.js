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


    updateDisplay () {
        this.resultTotal.innerHTML
    }

    init () {
        this.array_of_operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < this.array_of_operands.length; i++) {  
            document.getElementById(`data-${this.array_of_operands[i]}`).onClick=() => numberClicked(i)
            console.log(array_of_operands[i]) 
        }

        this.array_of_operators = ['+', '-', '.', '/', '*']
        for (let i = 0; i < this.array_of_operands.length; i++) {  
            document.getElementById(`data_${this.array_of_operators[i]}`).onClick=() => numberClicked(i) 
            console.log(array_of_operators[i]) 

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