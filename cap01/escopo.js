var a = 'global';
b = 'global'; //variavel global

function funcao1(){
    var a = 'local'
    return a;
}

function funcao2(){
    b = 'local';//alterasse o valor dela
    return b;
}

console.log(a);
console.log(funcao1());
console.log(funcao2());
console.log(b);