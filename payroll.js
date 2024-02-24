function payroll(totalamt,withdrawal,medium){
    
      if(withdrawal<=totalamt){
        if(medium==='upi'){
        let limit=100000;
         if(withdrawal>limit){
            console.log("limit exceeded");
            totalamt=totalamt;}
         else {
            totalamt=totalamt-withdrawal;
        }
        }
       }
      
      else{
        console.log("amt. not available")
      }
      return totalamt;
    }



let a=payroll(1000,500,'upi');
console.log("current balance:",a)