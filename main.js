class Calculator {
    constructor() {

    }

    delete() {

    }


    clear () {

    }

    chooseOperation(operation) {

    }

    appendNumber (number) {

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


    }

    compute () {

    }


    updateDisplay () {

    }
    
}