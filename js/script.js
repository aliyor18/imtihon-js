let elForm = document.querySelector(".hero__form");
let elSelect = document.querySelector(".form__select");
let selectText = document.querySelector(".hero__texts");
let arrSelect = ["Yupqa", "Qalin","O'rtancha"];

for(let i = 0; i < arrSelect.length; i++) {
  let elOption = document.createElement("option");
  elOption.setAttribute("class", "form__option2");
  elOption.textContent= arrSelect[i];
  elOption.value = arrSelect[i];
  elSelect.appendChild(elOption);
}


let boxRadio = document.querySelector(".form__radio");
let radioText = document.querySelector(".hero__texts-size");
let arrRadio = ["25 sm", "30 sm", "35 sm"];

for (let i = 0; i < arrRadio.length; i++) {
  let elLabelRadio = document.createElement("label");
  let elInputRadio = document.createElement("input");

  elLabelRadio.textContent = arrRadio[i];
  
  elLabelRadio.setAttribute("class", "label__radio py-4 px-3 border rounded-circle me-4 mb-4");
  elInputRadio.setAttribute("class", "input__radio");
  elInputRadio.setAttribute("type", "radio");
  elInputRadio.setAttribute("name", "Kattaligi");

  elInputRadio.value = arrRadio[i];

  boxRadio.appendChild(elLabelRadio);
  elLabelRadio.appendChild(elInputRadio);
}

let checkText = document.querySelector(".hero__texts-top");
let boxCheck = document.querySelector(".form__checkboxs");
let arrCheck = ["Pomidor","Tuzlangan bodiring","Kurka go'shti","Qo'ziqorin","Zaytun","Qazi"];

for(let i = 0; i < arrCheck.length; i++ ) {
  let elLabelCheck = document.createElement("label");
  let elInputCheck = document.createElement("input");
  
  elLabelCheck.setAttribute("class", "label__checkbox w-50 fs-5 mb-3");
  elInputCheck.setAttribute("class", "input__check me-3");
  elInputCheck.setAttribute("type","checkbox");
  elInputCheck.setAttribute("name", "Ustiga nima solaylik:");
  
  elLabelCheck.textContent = arrCheck[i];
  elInputCheck.value = arrCheck[i];
  
  boxCheck.appendChild(elLabelCheck);
  elLabelCheck.appendChild(elInputCheck);
  elLabelCheck.prepend(elInputCheck);
}

let checkText2 = document.querySelector(".hero__texts-plus");
let boxCheck2 = document.querySelector(".form__check");
let arrCheck2 = ["Achchiq","Sosiskali"];

for(let i = 0; i < arrCheck2.length; i++ ) {
  let elLabelCheck2 = document.createElement("label");
  let elInputCheck2 = document.createElement("input");
  
  elLabelCheck2.setAttribute("class", "label__checkbox-end w-50 fs-5");
  elInputCheck2.setAttribute("class", "input__check-end me-3");
  elInputCheck2.setAttribute("type","checkbox");
  elInputCheck2.setAttribute("name", "Qo'shimchalar");
  
  elLabelCheck2.textContent = arrCheck2[i];
  elInputCheck2.value = arrCheck2[i];
  
  boxCheck2.appendChild(elLabelCheck2);
  elLabelCheck2.appendChild(elInputCheck2);
  elLabelCheck2.prepend(elInputCheck2);
}


elSelect.addEventListener("change", function () {
  selectText.textContent = elSelect.value;
})

boxRadio.addEventListener("change", function (evt) {
  radioText.textContent = evt.target.value;
})

let arr1 = [];
let checkInput = document.querySelectorAll(".input__check");
for (let index = 0; index < checkInput.length; index++) {
  let elLi = document.createElement("li");
  elLi.setAttribute("class", "text");

  checkInput[index].addEventListener("change", function () {
    if (checkInput[index].checked) {
      arr1.push(checkInput[index].value);
    
      for(let i = 0; i < arr1.length; i++) {
        elLi.textContent= arr1[i];
        checkText.appendChild(elLi);
      }
    } else {
      checkText.removeChild(elLi);
    } 
  })
}

let arr2 = [];
let checkInput2 = document.querySelectorAll(".input__check-end");
for(let i = 0; i < checkInput2.length; i++) {
  let elLi2 = document.createElement("li");
  elLi2.setAttribute("class", "text");
  
  checkInput2[i].addEventListener("change", function () {
    if(checkInput2[i].checked) {
      arr2.push(checkInput2[i].value);

      for(let el = 0; el < arr2.length; el++) {
        elLi2.textContent = arr2[el];
        checkText2.appendChild(elLi2);
      }
    } else {
      checkText2.removeChild(elLi2);
    }
  })
}