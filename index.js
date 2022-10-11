function  receivesAFunction(cool){
    cool();
}

function returnsANamedFunction(){
    return function named(){

    }
}
function returnsAnAnonymousFunction(){
    return function () {
        //console.log("Thanks!!!");
    }
}