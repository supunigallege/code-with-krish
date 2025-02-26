function getMinNumber(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return{
            status:400,
            data:{
                error:`both parameters should be numbers`,
            },
        };
    }
    return{
        status:200,
        data:{min:Math.min(num1,num2)},
    };
}

function getMaxNumber(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return{
            status:400,
            data:{
                error:`both parameters should be numbers`,
            },
        };
    }
    return{
        status:200,
        data:{max:Math.max(num1,num2)},
    };
}

function getAvgNumber(numbers){
    const numArray = numbers.map(num => Number(num));

    console.log(numArray);  
    var sum = 0;
    numArray.forEach(num => sum += num);  
    console.log(sum);  
    console.log(numArray.length);  
    
    const avg = sum / numArray.length;  

    return {
        status: 200,
        data: { avg },
    };
}









module.exports={getMinNumber,getMaxNumber,getAvgNumber,}
//module.exports={getMaxNumber}

