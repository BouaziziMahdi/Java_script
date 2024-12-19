const h= 45;
//js base ala principe essmo dynamiquement typé(les types sont déterminés à l'exécution)

var a="TI"
console.log(a);

function compare (a,b ){
    if(a>b)
        return "a akber men b"
    else
        return"b akber men  a"
    
}
a= compare(10,5)
console.log(a);

//variable globale en utlise (this in console)
var a= 10;
//console.log(a);
function f1(){
    console.log(a);
}
function f2(){
    var a=80;
    console.log(a);
}
f1();
f2();