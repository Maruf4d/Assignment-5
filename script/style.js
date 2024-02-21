function setInnerText(id, value){
    document.getElementById(id).innerText=value;
    

}


function totalPrice(seatPrice){
 
    const totalCost = getConvertValue("total-price");
    const convertedTotalPrice = parseInt(seatPrice);
    document.getElementById("total-price").innerText = totalCost +  convertedTotalPrice; 
}

function totalGrand(control){

const totalCost = getConvertValue("total-price");
    
    if(control == undefined){
        document.getElementById("grand-total").innerText = totalCost;
    }

    else{
      const couponCode = document.getElementById("coupon-text").value;
      if(couponCode == "Couple 20"){
        const discount = totalCost * 0.2;
        document.getElementById("grand-total").innerText = totalCost -discount;
      }
      else if(couponCode == "NEW15"){
        const discount = totalCost * 0.15;
        document.getElementById("grand-total").innerText = totalCost -discount;
      }
      else{
        alert("vai please valid Coupon dew");
      }
    }
}


function getConvertValue(id){
    const seatPrice = document.getElementById(id).innerText;
    const seatConvert = parseInt(seatPrice);
    return seatConvert;
}


