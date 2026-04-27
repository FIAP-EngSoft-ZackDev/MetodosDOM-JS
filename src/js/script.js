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

//Método tofixed

const precoProduto = 199.99;
const desconto = 0.15; //15%
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`);

/* DOM ( DOCUMENT OBJECT MODEL) MODELO DE DOCUMENTO
PERMITE O JAVASCRIPT CONVERSAR COM O NAVEGADOR
PARA MANIPULAR O HTML E CSS. */

const titulo = document.getElementById("titulo");
titulo.innerText = "Dom transformando o texto";

titulo.style.color = "blue";

const produtos =[
    {nome:"Teclado Gamer", preco:200, emPromocao:true},
    {nome:"Mouse Gamer", preco:150, emPromocao:false},
    {nome:"Monitor", preco:1300, emPromocao:true},
    {nome:"Pad Mouse", preco:50, emPromocao:false}
];

console.log(produtos);
const container = document.getElementById("lista-produtos");

function produtosCard(lista){
    const hmtlProdutos = lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço R$ ${item.preco}</p>
            ${item.emPromocao ? '<span>Promoção</span>': ''}
        </div>
        `).join(""); //transforma o array e, uma unica string

        container.innerHTML=hmtlProdutos;
}
produtosCard(produtos);