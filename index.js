function receivesAFunction(callback){
   return callback() 
}

function returnsANamedFunction(){
    let named = () => ""
    return named;
}

function returnsAnAnonymousFunction(){
    return () => "";
}