// *  Fibonacci

const fibs =(num:number):number => {
    if(num < 2) {
        return num;
    }
    else {
        return fibs(num-1) + fibs(num - 2);
    }
}
const fibonacci = (value:number) =>{
    if(value <=0) {
        console.log('Enter a positive integer.');
    }
    else {
        for(let i = 0; i < value; i++) {
            console.log(fibs(i));
        }
    }	 	
}
console.log(fibonacci(5));