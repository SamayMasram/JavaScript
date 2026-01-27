// Immediately invoked Function Expressions (IIFE)
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();
//chai()

/*
    ()()
    () -> function block
    () -> execution block
*/
/*
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})()
*/
((name) => {
    // simple or undefined IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('sam')
// node 06_iife.js