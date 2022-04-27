//DOM Elements Selection
const historyDiv=document.querySelector('.history_div');
const transDiv=document.querySelector('.transaction_div');
const text_input=document.querySelector('#text');
const amount_input=document.querySelector('#amount');
const banner_income=document.querySelector('#banner_income');
const banner_expense=document.querySelector('#banner_expense');
const DOM_balance=document.querySelector('#balance');

//Data

let list={
    text:['Monthly Income','Monthly Bill'],
    amount:[1000,-200]
}


//Total Income and Expense
const total = function(){
    let income=0;
    let expense=0;
    let balance=0
    list.amount.forEach(
        function(am){
            balance+=Number(am);
            if(am>0){
                income+=Number(am);
            }else{
                expense-=Number(am);
            }
        }
    )
    banner_income.innerText=`$${income}`;
    banner_expense.innerText=`$${expense}`;
    DOM_balance.innerText=`$${balance}`;

}
total();

//Update History
const updateHistory=function(){
    historyDiv.innerHTML='';
    list.text.forEach(function(lst,i){

        const html=`<p id="${list.amount[i]<0?'expense_history':'income_history'}">${lst} &MediumSpace; ${list.amount[i]}</p>`;

        historyDiv.insertAdjacentHTML("afterbegin",html
    );
    //Single append
    })
        
}

//Add Transactions
document.querySelector('#add_trans').addEventListener('click',function(){
    if(text_input.value!=''&&amount_input.value!=''){
    list.text.push(text_input.value);
    list.amount.push(amount_input.value);
    }
    updateHistory();
    total();
})


//toggle Events
document.querySelector('#toggle_history').addEventListener('click',()=> {
    historyDiv.classList.toggle('activated');
    updateHistory();});
document.querySelector('#toggle_transaction').addEventListener('click',()=> transDiv.classList.toggle('activated'));

//Duplication of code
//single responsibility

