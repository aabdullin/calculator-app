class Calculator {
    constructor() {
        this.resultTotal = document.querySelector(".current-operand");
        this.delete = this.delete.bind(this);
        this.compute = this.compute.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.setResultTotal = this.setResultTotal.bind(this);
        this.init = this.init.bind(this);
        
        this.clear = this.clear.bind(this)
    }

    setResultTotal() {
        this.resultTotal.innerHTML = this.values
    }

    delete() {
        this.values = this.values.toString().slice(0, this.values.length-1)
        if (this.values === "") {
            this.values = 0
        }
        this.setResultTotal()
    }

    clear () {
        this.values = 0
        this.setResultTotal()
    }

    compute () {
        this.values = eval(this.values)
        this.setResultTotal()
    }

    updateDisplay (num) {
        if (this.values === 0) {
            this.values = ""
        }
        this.values = this.values + num
        this.setResultTotal()
    }

    init () {
        this.values = 0

        this.operands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < this.operands.length; i++) {  
            document.getElementById(`data-${this.operands[i]}`).onclick=() => this.updateDisplay(this.operands[i])
        }

        this.operators = ['+', '-', '.', '/', '*']
        for (let i = 0; i < this.operators.length; i++) {  
            document.getElementById(`data_${this.operators[i]}`).onclick=() => this.updateDisplay(this.operators[i])
        }

        document.getElementById("reset").onclick = () => {
            this.clear()
        };

        document.getElementById("delete").onclick = () => {
            this.delete()
        };

        document.getElementById("equals").onclick = () => {
            this.compute()
        };

    }
    
}


const calculator = new Calculator();
calculator.init()