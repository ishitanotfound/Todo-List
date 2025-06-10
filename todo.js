let btnT = document.querySelector(".todoBtn");
let iptT = document.querySelector(".todoInput");
let ulT = document.querySelector("ul");

document.querySelector(".todoH1").addEventListener("click",()=>{location.reload();})
btnT.addEventListener("click", function(event){
    if(iptT.value.trim() !== ""){
        addItem();
    }
    else if(iptT.value.trim() == ""){
        alert("Please enter somethimg!");
    }
})
iptT.addEventListener("keypress", function(event){
    if(event.key === "Enter" && iptT.value.trim() !== ""){
        addItem();
    }
    else if(event.key === "Enter" && iptT.value.trim() == ""){
        alert("Please enter somethimg!");   
    }
})
ulT.addEventListener("click", function(event){
    if(event.target.nodeName == "I"){
        let parent = event.target.parentElement;
        parent.parentElement.remove();
    }
})

function addItem(){
    let newItem = document.createElement("li");
    let newCheckbox = document.createElement("input");
    let newLabel = document.createElement("label");
    let newDlt = document.createElement("button");
    let newIcon = document.createElement("i");
    let newHr = document.createElement("hr");
   
    newCheckbox.type = "checkbox";
    newCheckbox.setAttribute("class", "checkbox");
    newIcon.setAttribute("class", "fa-solid fa-minus i");
    newDlt.setAttribute("class", "li button");
    newHr.setAttribute("class", "li hr");
    
    newDlt.appendChild(newIcon);
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newLabel);
    newItem.appendChild(newDlt);
    newItem.appendChild(newHr);
   
    newLabel.innerText = " " + iptT.value;
    ulT.appendChild(newItem);
    iptT.value = "";
}