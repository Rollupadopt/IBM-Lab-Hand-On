let first_grocery;
let second_grocery;
let third_grocery;

function calculateAmount() {
    //parseFloat = is use for transfor input value into floating-number
    //.value = get number which user input from html by <input> 
    first_grocery = parseFloat(document.getElementById('first').value);
    second_grocery = parseFloat(document.getElementById('second').value);
    third_grocery = parseFloat(document.getElementById('third').value);
    
    let totalAmount = first_grocery + second_grocery + third_grocery;

    //.innerText = The area of the rectangle is: ${area};: Once the element is accessed, 
    //.innerText is used to modify the text content within that HTML element.
    document.getElementById('Groceryresult').innerText = `The total amount is: $${totalAmount}`;
}