const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");
const stepsEl = document.querySelectorAll(".step");

let currentchecked = 1;

nextEl.addEventListener("click",()=>{
    currentchecked++;
    if(currentchecked > stepsEl.length){
        currentchecked = stepsEl.length;
    }
    updatestepprogress();
});


prevEl.addEventListener("click", () => {
    currentchecked--;
    if(currentchecked < 1){
        currentchecked =1;
    }
    updatestepprogress();
});

function updatestepprogress(){
    stepsEl.forEach((stepsEl,idx) =>{
        if (idx < currentchecked){
            stepsEl.classList.add("checked");
            stepsEl.innerHTML = ` <i class="fas fa-check"></i> 
            <small>${
                idx === 0
                ? "Start"
                : idx === stepsEl.length - 1
                ? "Final"
                : "Step " + idx  
            }</small>
            `;
        }else{
            stepsEl.classList.remove("checked");
            stepsEl.innerHTML=`
            <i class="fas fa-times"></i>
            `;
        }
    });
    const checkednumber = document.querySelectorAll(".checked");
    progressEl.style.width =
        ((checkednumber.length - 1 ) / (stepsEl.length - 1 )) * 100 + "%";

    if(currentchecked === 1 ){
        prevEl.disabled = true;
    }else if ( currentchecked === stepsEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}