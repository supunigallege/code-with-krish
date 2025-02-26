    const express=require ('express');
    const {getMinNumber,getMaxNumber,getAvgNumber}=require ('./util.js');
    //const {getMaxNumber}=require ('./util.js');


    const app=new express();
    const port=3000;
    const greeting={message:"Hello node"};

    app.get('/',(req,res)=>{
        res.json(greeting);
    })
    app.get('/number/min',(req,res)=>{

        const num1=parseFloat(req.query.num1);
        const num2=parseFloat(req.query.num2);

        const getMin=getMinNumber(num1,num2);
        res.status(getMin.status).json(getMin.data);

        //if(num1==null)
        // if(isNaN(num1)||isNaN(num2)){
        //     res.status(400).json({error: "should be a number"})
        // }
        //     res.json({min: num1 > num2 ? num2 : num1});
        
        
        //res.json({min:Math,min(num1,num2)});
        

    });
    app.get('/number/max',(req,res)=>{
        const num1=parseFloat(req.query.num1);
        const num2=parseFloat(req.query.num2);

        const getMin=getMaxNumber(num1,num2);
        res.status(getMin.status).json(getMin.data);

    });

    app.get('/number/Avg',(req,res)=>{
        const numbers = req.query.numbers ? req.query.numbers.split(",") : [];
        
        const getAvg = getAvgNumber(numbers);
        res.status(getAvg.status).json(getAvg.data);

    });

    

    app.listen(port,()=>{
        console.log(`server is running on ${port}`)
    });