// const h= 45.022;
// //js base ala principe essmo dynamiquement typé(les types sont déterminés à l'exécution)

// var a="TI"
// var y='m';
// var z= true ;
// var b= null;
// var c;
// console.log(a);

// function compare (a,b ){
//     if(a>b)
//         return "a akber men b"
//     else
//         return"b akber men  a"
    
// }
// a= compare(10,5)
// console.log(a);

// //variable globale en utlise (this in console)
// var a= 10;
// //console.log(a);
// function f1(){
//     console.log(a);
// }
// function f2(){
//     var a=80;
//     console.log(a);
// }
// f1();
// f2();
// //primitive types : number, string, boolean, undefined, null

// console.log(typeof h);//number
// console.log(typeof a) //string 
// console.log(typeof y) //string 
// console.log(typeof z) //boolean
// console.log(typeof b)//null ( me3niha valeur vide me3nch menha )

// console.log(typeof c)//undefined (me3niha ya bro 3andek variable mais ma3andekch valeur)
// g=undefined// rodblek t3eml heka ray temchi ema metjich

// // math obejct 
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-5));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.2));//  round yaroud lel valeur la plus proche mais ceil yaroud lel valeur la plus grande 
// console.log(Math.round(4.4));
// console.log(Math.max(4,5,6,7,8,9));
// console.log(Math.min(4,5,6,7,8,9));
// // comparaison equality and strict equality
// p=5;
// q="k";
// console.log(p==q) ;  //false
// w="5";
// console.log(p==w) ;  //true (js y9olik 5==5 puique w yerjaha number w yechoufha)

// console.log(p===w) ;  //false 

// n=true ;
// console.log(n==1) ;  //true
// console.log(n===1) ;  //false
// // logical operators
// console.log(true && false) //false (Ki tji ta7seb b AND, ta9oul manajem nji l'résultat true ken zouzhom mriglin (s7i7). Amma ki wa7ed fihom ghalet (false), résultat ywalli false )
// console.log(true || false) //true (lehna me3iha ken jit l sbeh normal w ken jit le3chiya normal)
// console.log(!true) //false
// // ternary operator
// var age= 0;
// for (i=0; i<10; i++){
//     age+=i;
// }
// console.log(age);

// //default values
// function aad(m){
//     return m/5;
// }
// console.log(aad());//nan (not a number) (ma3andekch valeur par defaut)
// function add(a){
//     if(a==undefined)
//         a=25;
//     return a/5;
// }
// console.log(add());//5
// function name(a="khalil"){
    
//     return "asslema "+a;
// }
// console.log(name());

// function name(a){
//     a= a || "khalil";// (true || false) //true (lena ordre importante)
//     return "asslema "+a;
// }
// console.log(name());

// //loops 
// var i=0;
// while(i<4){
//     console.log(i);
//     i++;
// }
// //do while check condition apres l'execution
// do{
//     console.log(i);
//     i++;
// }
// while(i<0);

// var i=0;
// while(i<5){
//     if (i==3)
//         break;
//     console.log(i);
//     i++;

// }
// var i=-1;
// while(i<5){
//     i++;
//     if (i===3)
//         continue;
//     console.log(i);
   
// }


// // json object notation
// var firstname="mahdi";
// var lastname="bouazizi";
// var age=24 ;
// var city="menzel bourguiba";
// var zip=7050;

// var person={
//     "firstname":"mahdi",
//     "lastname":"bouazizi",
//     "age":24,
//     "adress":{
//         "city":"menzel bourguiba",
//         "zip":7050
//     }
// }
// console.log(person);

// var person =new Object();
// person.firstname="mahdi";
// person.lastname="bouazizi";
// person.age=24;
// person.adress=new Object();
// person.adress.city="menzel bourguiba";
// person.adress.zip=7050;
// console.log(person);

// //passage par valeur et par reference
// var a={name:"mahdi"};
// var b=a;
// b.name="khalil";
// console.log(a.name);//khalil (passage par reference)
// var a=5;
// var b=a;
// b=6;
// console.log(a);//5 (passage par valeur)

// function Triangle(base,hauteur){
//     this.base=base;
//     this.hauteur=hauteur;
   
// }
// Triangle.prototype.getArea=function(){
//     return 0.5*this.base*this.hauteur;
// }
// Triangle.prototype.getPerimter=function(){
//     return this.base+this.hauteur+Math.sqrt(this.base*this.base+this.hauteur*this.hauteur);
// }
// var t= new Triangle(10,5);
// console.log(t.getArea());
// console.log(t.getPerimter());

// //array
// array= new Array();
// array[0]="mahdi";
//  var arr=[1,2,3,4,5];
//  console.log(arr);
//  for(i=0; i<arr.length; i++){
//      console.log(arr[i]);
//  }
//  for ( key in array[0]){
//      console.log(key +":"+ array[0][key]);
//  }

//  for (i of arr){
//      console.log(i);
//  }

// Dom

// p=document.getElementById("title");
// console.log(p);
// console.log(document.getElementById("body").innerHTML);


function f1(){
    var a=document.getElementById("input").value;
    console.log(a);
   //this.document.getElementById("p").textContent='welcome '  + a;

   this.document.getElementById("p").innerHTML='<h1> welcome '  + a + '</h1>';
   this.document.getElementById("p").style.color="red";
   this.document.getElementById("p").style.backgroundColor="yellow";
   this.document.querySelector('button').style.fontSize='50px';
   this.document.getElementsByTagName('h1')[0].textContent = 'me3ah mahdi yesehl l js';

   //querySelector 
    this.document.querySelector('h1').textContent = 'me3ah bilel yesehl l js';
    this.document.querySelector('h1').style.color='blue';
    this.document.querySelector('h1').style.backgroundColor='green';
}    this.document.querySelector('h1').style.fontSize='50px';
