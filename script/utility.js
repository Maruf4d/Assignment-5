const ticketSection =  document.getElementById("scroll").addEventListener("click", function () {
document.location = "#buy-ticket";
});

const allBtn = document.getElementsByClassName("add-btn");
let count = + 0;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count +1;

        const seatSelected = e.target.parentNode.childNodes[1].innerText;
        const seatPrice = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5].childNodes[1].childNodes[3].innerText;
        const selectedContainer = document.getElementById("select-seat-container");

        event.target.setAttribute("disabled", false);
        const li = document.createElement("li");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("h3");

        
        const seatLimit = getConvertValue("card-count");
        if(seatLimit + 1 > 4){
            alert("Over Limit");
            return;
        }

        event.target.parentNode.style.backgroundColor = "gray";
        const seatCount = getConvertValue(`seat-count`);
        document.getElementById(`seat-count`).innerText = seatCount - 1;
   




        p.innerText =seatSelected;
        p2.innerText = "economy";
        p3.innerText = seatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        totalPrice(seatPrice);
        totalGrand();
        setInnerText("card-count",count);
    })
}