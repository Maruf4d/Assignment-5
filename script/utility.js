const allBtn = document.getElementsByClassName(`add-btn`);
let count = + 0;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count +1;

        const seatPrice = e.target.parentNode.childNodes[1].innerText;
        

        setInnerText(`card-count`, count)
    })
}