//Método de limpeza e validação

const email = "  fiap@emal.com  ";
const emailLimpo = email.trim(); //remove espaços (Inicio e Fim)
console.log(emailLimpo);

//Validar: Verifica se o domínio é válido
if(emailLimpo.includes("@")){
    console.log("Email válido");
} else{
    console.log("Email inválido");
}

//Métodos de transformação de texto (split, toLowCase, Join)

const tituloArtigo = "Aprendendo JavaScript RAÍZ";

//DEIXA O TEXTO EM MAIÚSCULO (Upper) OU MINÚSCULO (Lower)
const texto1 = tituloArtigo.toLowerCase();
const texto2 = tituloArtigo.toUpperCase();
console.log(texto1, texto2);

//TRASNFORMA UM TEXTO EM ARRAY O SEJA EM UMA LISTA
const texto3 = tituloArtigo.split(" ");
console.log(texto3);

//O JOIN FAZ O INVERSO, ELE JUNTA TUDO EM UMA ÚNICA STRING
const texto4 = texto3.join("");
console.log(texto4);

