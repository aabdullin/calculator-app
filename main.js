class Calculator {
    constructor() {
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

    }

    init () {
        array_of_operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < array_of_operands.length; i++) {  
            document.getElementById(`data-${i}`).onClick=() => numberClicked(i) 
        }

        array_of_operators = ['+', '-', '.', '/', '*']
        for (let i = 0; i < array_of_operands.length; i++) {  
            document.getElementById(`data_${i}`).onClick=() => numberClicked(i) 
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