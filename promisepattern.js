new Promise((resolve, reject) =>{
    console.log('Initial');
    resolve(2*2);
})
.then(() =>{
    throw new Error('Something Eror')
    console.log('Do this')
})
.catch(() =>{
    console.log('Do that');
})
.then(()=>{
    console.log('Do this final')
});