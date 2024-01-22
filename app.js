function validateForm(){
    var errors = "";
    var receipt = "";
    var fullName = "";

    // Validate Firstname
    let firstName = document.getElementById("firstname").value;
    if(firstName.length == 0){
        errors +=
        (`<br>`+`<span class="er">Error:</span> Please enter your first name.`);
      
    } else {
        
    }

    //Validate Lastname
    let lastName = document.getElementById("lastname").value;
    if(lastName.length == 0){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter your last name.`);
      
    } else {
        fullName = firstName + " " + lastName;
        receipt += `<p>${fullName}, Thank you for your order!</p>`;
    }
    
    // Validate Credit Card Number 
    let creditCardNumber = document.getElementById("creditcardnumber").value;
    let creditCardNumberRegEx = /^\d{4}-\d{4}-\d{4}-(\d{4})$/;
    if(!creditCardNumberRegEx.test(creditCardNumber)) {
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a valid credit card number.`);
    } else
     {
        let lastFourCreditCardNumber = creditCardNumberRegEx.exec(creditCardNumber)[1];
        receipt += `<p>Last 4 digits: ${lastFourCreditCardNumber}</p>`;
    }

    //Validate Email
    let email = document.getElementById("email").value;
    var emailFormatregEx = /^\S+@\S+\.\S+$/;
    if (!emailFormatregEx.test(email)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a valid email example: example@example.exapmle.`);
    }
    else{
        receipt += `<p>Email: ${email}</p>`;
    }

    // Validate Credit Card Expiry Month
    let creditCardExpiryMonth = document.getElementById("creditcardexpirymonth").value;
    var expiryMonthRegEx = /^[Jan]{3}|[FEB]{3}|[MAR]{3}|[APR]{3}|[MAY]{3}|[JUN]{3}|[JUL]{3}$/
    if (!expiryMonthRegEx.test(creditCardExpiryMonth)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter your credit card expiry month.`);

    } else {
    }

    //Validate Credit Card Expire Year
    let creditCardExpiryYear = document.getElementById("creditcardexpiryyear").value;
    var expiryYearRegEx = /^202[3-8]/;
    if (!expiryYearRegEx.test(creditCardExpiryYear)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a valid credit card expiry year.`);
    } else {
    }
    
    //Validate Water Bottle
    var waterBottlePrice = 5;
    var waterBottleName = "Water Bottle";
    var waterBottleTotal = 0;

    let waterBottleQuantity = document.getElementById("waterbottles").value;
    if(waterBottleQuantity < 0 || isNaN(waterBottleQuantity)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a number only.`);
    }
    else{
        waterBottleTotal = waterBottlePrice * waterBottleQuantity;
    }

    //Validate Caps
    var capPrice = 20;
    var capName = "Caps";
    var capTotal = 0;

    let capQuantity = document.getElementById("numberofcaps").value;
    if(capQuantity < 0 || isNaN(capQuantity)){
            errors += (`<br>`+`<span class="er">Error:</span> Please enter a number only.`);
        
    }
    else{
        capTotal = capPrice * capQuantity;
    }

    //Validate Pens
    var penPrice = 2;
    var penName = "Pens";
    var penTotal = 0;

    let penQuantity = document.getElementById("numberofpens").value;
    if(penQuantity < 0 || isNaN(penQuantity)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a number only.`);
    }
    else{
        penTotal = penPrice * penQuantity;
    }

    //Validate Candy Bars
    var candyBarPrice = 10;
    var candyBarName = "Candybars";
    var candyBarTotal = 0;

    let candyBarQuantity = document.getElementById("numberofcandybars").value;
    if(candyBarQuantity < 0 || isNaN(candyBarQuantity)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a number only.`);
    }
    else{
        candyBarTotal = candyBarPrice * candyBarQuantity;
    }

    //Validate Cupcakes
    var cupCakesPrice = 3;
    var cupCakesName = "Cup Cakes";
    var cupCakesTotal = 0;

    let cupCakesQuantity = document.getElementById("numberofcupcakes").value;
    if(cupCakesQuantity < 0 || isNaN(cupCakesQuantity)){
        errors += (`<br>`+`<span class="er">Error:</span> Please enter a number only.`);
    }
    else{
        cupCakesTotal = cupCakesPrice * cupCakesQuantity;
    }

    receipt += '<table border="transparent" width="40%" align="center">';
    receipt +=`<table>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Unit Price</th>
    </tr>`;
  if (waterBottleQuantity > 0)
  {
    receipt += `<tr><td>${waterBottleName}</td><td>${waterBottleQuantity}</td><td>$${waterBottleTotal.toFixed(2)}</td></tr>`;
  }
  if ( capQuantity > 0)
   {

    receipt += `<tr><td>${capName}</td><td>${capQuantity}</td><td>$${capTotal.toFixed(2)}</td></tr>`;
  }
  if (penQuantity > 0)
  {
    receipt += `<tr><td>${penName}</td><td>${penQuantity}</td><td>$${penTotal.toFixed(2)}</td></tr>`;
  }
  if (candyBarQuantity > 0)
  {
    receipt += `<tr><td>${candyBarName}</td><td>${candyBarQuantity}</td><td>$${candyBarTotal.toFixed(2)}</td></tr>`;
  }
  if (cupCakesQuantity> 0)
  {
    receipt += `<tr><td>${cupCakesName}</td><td>${cupCakesQuantity}</td><td>$${cupCakesTotal.toFixed(2)}</td></tr>`;
  }

  var total = waterBottleTotal + capTotal + penTotal + candyBarTotal + cupCakesTotal;
  if (total >= 100 && total != 0)
  {
    let donation = 0.10;
    let subtotal = total * donation;
    total = subtotal + total;
    var tax = total * 0.13;
    var finalTotal = tax + total;
    receipt += `<tr><td colspan ="2" >Donation</td><<td>$${donation.toFixed(2)}</td></tr>`;
   receipt += `<tr><td colspan ="2" >GST 13%</td><td>$${tax.toFixed(2)}</td></tr>`;
   receipt += `<tr><td colspan ="2" >Total</td><td>$${finalTotal.toFixed(2)}</td></tr>`;
  }

  if(total <= 99 && total != 0) {
    donation = 10;
    total = total + donation; 
    tax = total * 0.13;
    finalTotal = tax + total;
    receipt += `<tr><td colspan ="2" >Donation</td><td>$${donation}</td></tr>`;
    receipt += `<tr><td colspan ="2" >GST 13%</td><td>$${tax.toFixed(2)}</td></tr>`;
    receipt += `<tr><td colspan ="2" >Total</td><td>$${finalTotal.toFixed(2)}</td></tr>`;
  }


    if(errors) {
        // Show the errors
        document.getElementById("errors").innerHTML = errors;

        // Clear the receipt
        document.getElementById("receipt").innerHTML = "";
    } else {
        // Clear the errors
        document.getElementById("errors").innerHTML = "";

        // Show the receipt
        document.getElementById("receipt").innerHTML = receipt;
    }

    return false;
}


    
