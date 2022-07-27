// Getting Dom element
const bill = document.getElementById("bill-input");
const person = document.getElementById("people-input");
const tipPerPerson = document.getElementById("tip-per-person");
const totalPerPerson = document.getElementById("total-per-person");
const percentageButton = document.getElementsByClassName("tip-percentage");
const customPercentage = document.getElementById("custom-input");
const reset = document.getElementById("reset-button");
const errorMsg = document.getElementById("error-message");

let eachPercentageValue
let tipAmount

// validating person inputfield to only numbers and not accepting zero
function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

	return true;
    
}
function validateForZeroPerson(){
  if(person.value == 0 || person.value < 0) {
      errorMsg.textContent = "person cannot be zero"
      person.classList.add('error')
  }else{
      errorMsg.textContent = ""
      person.classList.remove("error")
  }
}

// For already specified buttons
for(let i =0; i< percentageButton.length; i++){
    percentageButton[i].addEventListener('click', function(){
        customPercentage.value=''
        let eachPercentageValue = parseFloat(percentageButton[i].value) / 100
        // calculate tip per person
        let tipAmount = (bill.value * eachPercentageValue)/ person.value
        let tipAmountRoundUp = tipAmount.toFixed(2)
        tipPerPerson.innerHTML = `$${tipAmountRoundUp}`
        // calculate total amount per person
        let totalAmountPerPerson = ((bill.value * eachPercentageValue) + parseFloat(bill.value)) / person.value
        let totalAmountPerPersonRoundUp= totalAmountPerPerson.toFixed(2)
        totalPerPerson.innerHTML = `$${totalAmountPerPersonRoundUp}`
    })
    }
customPercentage.addEventListener('change', function(){
    let customValue = parseFloat(customPercentage.value) / 100
     // calculate tip per person
 let customTipAmount = (bill.value * customValue)/ person.value
let customTipAmountRoundUp = customTipAmount.toFixed(2)
tipPerPerson.innerHTML = `$${customTipAmountRoundUp}`
 // calculate total amount per person
let totalAmountPerPerson = ((bill.value * customValue) + parseFloat(bill.value)) / person.value
        let totalAmountPerPersonRoundUp= totalAmountPerPerson.toFixed(2)
        totalPerPerson.innerHTML = `$${totalAmountPerPersonRoundUp}`
})


//reset button
reset.addEventListener("click", function(){
    bill.value = ''
    person.value = ''
    customPercentage.value=''
    tipPerPerson.innerHTML = `$0`
    totalPerPerson.innerHTML=`$0`
})

