const chargeBtns = document.getElementsByClassName('chargeBtn');
const amount = document.getElementById('amount');
let chargeSum = 0;
//버튼 클릭시 더해지는 값, 금액에 넣어줌
function sumCharge(){
    for(let i=0; i<chargeBtns.length; i++){
        chargeBtns[i].addEventListener('click', function(e){
            if(chargeSum + parseInt(chargeBtns[i].innerHTML) <= 10000){
                chargeSum += parseInt(chargeBtns[i].innerHTML);
            }
            amount.innerHTML = chargeSum;
        }, false);
    }
}

const beverages = document.getElementsByClassName('beverage');
let beverageCharge = [];
//순서대로 음료 가격
function getAbleBuyList(){
  for(let i=0; i<beverages.length; i++){
    beverageCharge.push(beverages[i].value);
  }
}

const beverageNames = document.getElementsByClassName('name');
let beverageNamesArr = [];
//순서대로 음료 이름
function getBeverageName(){
  for(let i=0; i<beverageNames.length; i++){
    beverageNamesArr.push(beverageNames[i].innerHTML);
  }
}

const resultBtn = document.getElementById('resultBtn');
const resultArea = document.getElementById('resultArea');
let resultText = '어떤걸 뽑을 수 있을까?<br/>';
let beverageChargeSum = 0;
//결과출력
function printResult(){
  resultBtn.addEventListener('click', function(){
    resultText += '총금액' + chargeSum + '원<br/>'
    for(let i=0; i<beverageCharge.length; i++){
      if(beverageCharge[i] <= chargeSum){
        resultText += beverageNamesArr[i] + '<br/>';
      }
    }
    if(chargeSum < Math.min(...beverageCharge)){
      resultText += '낫띵..';
    }
    resultArea.innerHTML = resultText;
    chargeSum = 0;
    amount.innerHTML = 0;
    resultText = '어떤걸 뽑을 수 있을까?<br/>';
  });
}

sumCharge();
getAbleBuyList();
getBeverageName();
printResult();