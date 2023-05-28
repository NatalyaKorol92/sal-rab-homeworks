function addInCartMessage(title, price) {
    let productName = title;
    productPrice = price;
    let message;
    message = productName;
    message = message + " ";
    message = message + "за";
    message = message + " ";
    message = message + productPrice;
    message = message + " ";
    message = message + "теперь в корзине!";
    console.log(message);
    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue;
    newValue = oldValue;
    newValue += 1;
    console.log(newValue);


    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum;
    newSum = oldSum + difference;
    let newSumText;
    newSumText = newSum + "₽";
    newSumText = `${newSum} ₽`;
    console.log(newSumText);
    
    return newSumText;
}

