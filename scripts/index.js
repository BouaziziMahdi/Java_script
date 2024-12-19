const h= 45.022;
//js base ala principe essmo dynamiquement typé(les types sont déterminés à l'exécution)

var a="TI"
var y='m';
var z= true ;
var b= null;
var c;
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
//primitive types : number, string, boolean, undefined, null

console.log(typeof h);//number
console.log(typeof a) //string 
console.log(typeof y) //string 
console.log(typeof z) //boolean
console.log(typeof b)//null ( me3niha valeur vide me3nch menha )

console.log(typeof c)//undefined (me3niha ya bro 3andek variable mais ma3andekch valeur)
g=undefined// rodblek t3eml heka ray temchi ema metjich

// math obejct 
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-5));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.2));//  round yaroud lel valeur la plus proche mais ceil yaroud lel valeur la plus grande 
console.log(Math.round(4.4));
console.log(Math.max(4,5,6,7,8,9));
console.log(Math.min(4,5,6,7,8,9));