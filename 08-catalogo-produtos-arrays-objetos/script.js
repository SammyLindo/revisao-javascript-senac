/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

// TODO:
// Percorra o array com for, for...of ou forEach().

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.
// 1. Criação do array de objetos
// 1. Criação do array de objetos
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500.0, categoria: "Informática", emEstoque: true },
  { id: 2, nome: "Mouse Sem Fio", preco: 85.5, categoria: "Acessórios", emEstoque: true },
  { id: 3, nome: "Teclado Mecânico", preco: 220.0, categoria: "Acessórios", emEstoque: false },
  { id: 4, nome: "Monitor 24pol", preco: 890.0, categoria: "Informática", emEstoque: true },
  { id: 5, nome: "Cadeira Gamer", preco: 1200.0, categoria: "Móveis", emEstoque: false }
];

// 2 e 3. Percorrendo com forEach() e exibindo a frase formatada
produtos.forEach((produto) => {
  const statusEstoque = produto.emEstoque ? "Disponível" : "Esgotado";
  console.log(
    `Produto: ${produto.nome} (ID:${produto.id}) | Categoria: ${produto.categoria} \vert{} Preço: R$ ${produto.preco.toFixed(2)} \vert{} Status:${statusEstoque}`
  );
});
