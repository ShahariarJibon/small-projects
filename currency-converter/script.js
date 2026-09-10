const BASE_URL ="https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns= document.querySelectorAll(".dropdown select")

const btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

const msg= document.querySelector(".msg");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        } else if(select.name==="to" && currCode==="BDT"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    })
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let link=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let image= element.parentElement.querySelector("img");
    image.src= link;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();

    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value=1;
    }
    
    //const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;


    let response = await fetch(URL);
    let data= await response.json();

    //let rate = data[toCurr.value.toLowerCase()];
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    
    let finalAmount = (amtval * rate).toFixed(2);
    
    msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})