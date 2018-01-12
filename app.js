var budgetController = (function() {

})();

var UIController = (function() {

})();

// The global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var ctrAddItem = function() {
        //1. Get the field input data
        //2. Add the item to the budget controller
        //3. Add the intem to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
    }

    document.querySelector(".add__btn").addEventListener("click", ctrAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) { // Some old browsers use which, but not keyCode
            ctrAddItem();
        }
    });

})(budgetController, UIController);
