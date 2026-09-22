let length;
let width;

function calculateArea() {
    //parseFloat = is use for transfor input value into floating-number
    //.value = get number which user input from html by <input> 
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    
    let area = length * width;

    //.innerText = The area of the rectangle is: ${area};: Once the element is accessed, 
    //.innerText is used to modify the text content within that HTML element.
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}