let getpromise = (id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (id =21){
            resolve("Data is found")
            }
            else{
                reject("Data is not present")
            }
    },10000)
});}

let promis = getpromise(21);
promis.then((res)=>{
    console.log(res)
})
promis.catch((err)=>{
    console.log(err)
});