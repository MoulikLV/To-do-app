// const obj={
//    name:"moulik",
//    age:26
// }



// const {name,age}=obj

// console.log(name)   


// const arr=  [1,2,3,[4,5],9,8,[7,[9,9]]]

// console.log(arr.flat(2))

// const array= []

// const values= [1,2,3,4,5]

// array.push( [...values])

// console.log(array)

// function printstars(n){
//     if(n===0){
//         return
//     }

//     printstars(n-1)
//     console.log('*'.repeat(n))
// }

// function print(rows){
//     printstars(rows)
// }

// print(5)

function myfunc(){
    const interval=setInterval(() => {
       console.log('Hello')
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
    }, 10000);
    
}

myfunc()

function repeat(){

    setTimeout(() => {
        console.log('Hello')
        repeat()
    }, 1000);
}

repeat()


const arr=[2,4,6,8,5]
const newarr=[]
arr.map((element,index)=>{
    newarr.push(element*2)
})

console.log(newarr)

