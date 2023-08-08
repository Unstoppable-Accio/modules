
console.log("File A is starting")

let x = 100 

setTimeout(function(){console.log("Where will I be displayed")}, 1000)

function hello(){
    console.log("Hello", x)
}

console.log("File A is done")

export default hello


// console.log("After Export")












// export let x = 100  // named export
// export let y = 200 

// module.exports = { x, y}

// export default x  // this is the default export

