// let getpromise = (id)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (id =21){
//             resolve("Data is found")
//             }
//             else{
//                 reject("Data is not present")
//             }
//     },10000)
// });}

// let promis = getpromise(21);
// promis.then((res)=>{
//     console.log(res)
// })
// promis.catch((err)=>{

//     console.log(err)
// });


let getdata = (data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("founddata", data)
            reject("Success")
        },2000)
    })
}

// getdata(1).then((res)=>{
//     return getdata(2).then(()=>{
//         return getdata(3).then(()=>{
//             console.log(res)
//         })
//     })
// })

 let data=  async ()=>{
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);    
}

data();