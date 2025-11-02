daySelection = document.getElementById('day');
ageInput = document.getElementById('age');
calculateButton = document.getElementById('submitBtn');
resultText = document.getElementById('result');

function calculateTicketPrice(day, age) {
       // Handle invalid age
    if (age < 0 || isNaN(age)) {
        return 0;
    }

    const isChild = age <= 18;
    
    if (day == "weekday") {
        return isChild ? 12 : 18;
    }
    else if (day == "weekend") {
        return isChild ? 15 : 20;
    }
    else if (day == "holiday") {
        return isChild ? 5 : 12;
    }
    
    return 0; // Default case
}

calculateButton.onclick = function(){
    let day = daySelection.value;
    let age = Number(ageInput.value);
    let ticketPrice;

    ticketPrice = calculateTicketPrice(day, age);

    resultText.textContent = "The ticket price is: $" + ticketPrice;
}