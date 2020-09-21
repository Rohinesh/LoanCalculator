// SUbmit Buttton

document.getElementById('loan-form').addEventListener('submit',function(e){

    document.getElementById('results').style.display='none';

document.getElementById('loading').style.display='block';

setTimeout(calculateResult,2000);
    

    e.preventDefault();
});

//Calculate Result 
function calculateResult(){
   console.log('Calulating...');
   const amount=document.getElementById('amount');
   const interest=document.getElementById('interest');
   const years=document.getElementById('years');
   const monthlyamount=document.getElementById('mothly-payment');
   const totalPayment=document.getElementById('total-payment');
   const totalInterst=document.getElementById('total-interest');

   const principal=parseFloat(amount.value);
   const calculatedInterest=parseFloat(interest.value) / 100 / 12;
   const calPayment=parseFloat(years.value) * 12; 

    
   //Compute Monthly Payment

   const x=Math.pow(1+calculatedInterest,calPayment);
   const monthly=(principal*x*calculatedInterest)/(x-1);

   if(isFinite(monthly)){
        monthlyamount.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calPayment).toFixed(2);
        totalInterst.value=((monthly*calPayment)-principal).toFixed(2);

        document.getElementById('loading').style.display='none';
        //show result
        document.getElementById('results').style.display='block';

   }else{
     showError("Please Check Your Numbers......!");
   }


    
}


//Show Error

function showError(error){

    document.getElementById('loading').style.display='none';
    //show result
    document.getElementById('results').style.display='none';




    const errorDiv=document.createElement('div');

     const card=document.querySelector('.card');
     const heading=document.querySelector('.heading');

     errorDiv.className='alert alert-danger';

     errorDiv.appendChild(document.createTextNode(error));

     card.insertBefore(errorDiv,heading);

     setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}