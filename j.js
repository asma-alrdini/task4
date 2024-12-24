function calculateSum() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'يرجى إدخال أرقام صحيحة';
    } else {
        // Calculate the sum and display it
        const sum = num1 + num2;
        document.getElementById('result').innerText =' النتيجة:' + sum;
    }
}