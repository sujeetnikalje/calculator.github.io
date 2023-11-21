(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            
            // Check if the last character is an operator
            if (isOperator(value) && isOperator(screen.value.slice(-1))) {
                // Replace the last operator with the new one
                screen.value = screen.value.slice(0, -1) + value;
            } else {
                screen.value = screen.value + value;
            }
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

    // Helper function to check if a character is an operator
    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

})();

