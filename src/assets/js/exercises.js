/* 1. Verificação com if
Crie um programa que:
Receba um número.
Verifique se ele é positivo.
Se for positivo, exiba: "Número positivo". */

let x = 10;

if (x < 0) {
  console.log("Número Negativo");
} else {
  console.log("Número Positivo");
}

/* 2. Par ou Ímpar (if else)
Crie um programa que:
Receba um número.
Se for par, mostre "Número par".
Caso contrário, mostre "Número ímpar".
 */

if (x % 2 === 0) {
  console.log("Numero Par");
} else {
  console.log("Número Impar");
}

/* 3. Classificação de Nota (if else if)
Crie um programa que receba uma nota de 0 a 10 e retorne:
>= 9 → "Excelente"
>= 7 → "Bom"
>= 5 → "Regular"
< 5 → "Reprovado" */

let nota = 10;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else if (nota < 5) {
  console.log("Reprovado");
}

/* 4. Contador com while
Crie um programa que:
Comece do número 10.
Use while para imprimir os números até 0.
Mostre no final: "Fim da contagem". */

let n = 10;

while (n >= 0) {
  console.log(n);
  n--;
}

console.log("Fim da Contagem");

/* 5. Soma com for
Crie um programa que:
Some todos os números de 1 até 100 usando for.
Exiba o resultado final no console. */

for (let n2 = 0; n2 <= 100; n2++) {
  console.log(n2);
}

/* 6. Menu com switch
Crie um programa que:
Receba um número de 1 a 3.

Mostre:

1 → "Cadastrar usuário"
2 → "Listar usuários"
3 → "Excluir usuário"
Qualquer outro → "Opção inválida" */

let user = 1;

switch (user) {
  case 1:
    console.log("Cadastrar usuário");
    break;
  case 2:
    console.log("Listar Usuários");
    break;
  case 3:
    console.log("Excluir usuário");
    break;
  default:
    console.log("Opção Inválida");
}

/* 8. Manipulação de Array

Dado o array:
let frutas = ["Maçã", "Banana", 'Laranja']
Faça um programa que:

Adicione "Uva" ao final.
Remova o primeiro elemento.
Verifique se "Banana" ainda existe no array.
Mostre o tamanho atual do array.
Ordene o array em ordem alfabética. */

let frutas = ["Abacate", "Banana", "Maça", "Laranja"];

frutas.push("Uva");

frutas.shift();

console.log(frutas);

console.log(frutas.includes("Banana"));

console.log(frutas.length);

console.log(frutas.sort());

/* 9. Filtro de Números (filter)

Dado o array:
let numeros = [5, 12, 8, 20, 3, 15];
Crie um programa que:

Use filter para retornar apenas os números maiores que 10.
Mostre o novo array no console.
 */

let numeros = [5, 12, 8, 20, 3, 15];

let numerosMaior10 = numeros.filter((item) => {
  return item > 10;
});

console.log(numerosMaior10);

/* 10. Consulta em Objetos com for

Dado o array de objetos:
let clientes = [
  { nome: "Carlos", idade: 28, ativo: true },
  { nome: "Ana", idade: 19, ativo: false },
  { nome: "Marcos", idade: 35, ativo: true },
];

Crie um programa que:
Percorra todos os clientes usando for.
Mostre apenas o nome dos clientes que estão ativos.
Conte quantos clientes têm mais de 25 anos. */

let clientes = [
  { nome: "Carlos", idade: 28, ativo: true },
  { nome: "Ana", idade: 19, ativo: false },
  { nome: "Marcos", idade: 35, ativo: true },
];

let clientesMaior25 = 0;
let clientesAtivos = [];

for (let i = 0; i < clientes.length; i++) {
  if (clientes[i].ativo) {
    clientesAtivos.push(clientes[i].nome);
  }
  if (clientes[i].idade > 25) {
    clientesMaior25++;
  }
}

console.log("Clientes ativo: ", clientesAtivos.join(`, `));
console.log(`Quantidades de clientes acima de 25 anos: ${clientesMaior25}`);

/* 11. Controle de Estoque

Dado o array:

let produtos = [
  { nome: "Notebook", preco: 3500, estoque: 3 },
  { nome: "Mouse", preco: 80, estoque: 15 },
  { nome: "Teclado", preco: 200, estoque: 0 },
  { nome: "Monitor", preco: 1200, estoque: 5 }
];

Faça um programa que:
Mostre apenas os produtos com estoque maior que 0.
Conte quantos produtos custam mais de 1000.
Calcule o valor total do estoque (preco × estoque). */

let precoAcima1000 = 0;
let valorDoEstoque = 0;

let produtosEstoque = [];

let produtos = [
  { nome: "Notebook", preco: 3500, estoque: 2 },
  { nome: "Mouse", preco: 80, estoque: 15 },
  { nome: "Teclado", preco: 200, estoque: 0 },
  { nome: "Monitor", preco: 1200, estoque: 5 },
];

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].estoque > 0) {
    produtosEstoque.push(produtos[i].nome);
  }
  if (produtos[i].preco > 1000) {
    precoAcima1000++;
  }
  valorDoEstoque += produtos[i].estoque * produtos[i].preco;
}

console.log(`Produtos com estoque: ${produtosEstoque.join(`, `)}`);
console.log(`Produtos Acima de R$ 1.000,00: ${precoAcima1000}`);
console.log(
  `Valor total do estoque: R$ ${parseFloat(valorDoEstoque.toFixed(2))}`,
);

/* 12. Sistema de Funcionários
let funcionarios = [
  { nome: "Juliana", salario: 5000, setor: "TI" },
  { nome: "Roberto", salario: 3000, setor: "RH" },
  { nome: "Carla", salario: 7000, setor: "TI" },
  { nome: "Pedro", salario: 2500, setor: "Financeiro" }
];

Desenvolva um programa que:
Mostre apenas os funcionários do setor "TI".
Calcule a média salarial da empresa.
Descubra qual é o maior salário. */

let mediaSalarial = 0;
let maiorSalario = 0;

let nomesTI = [];

let funcionarios = [
  { nome: "Juliana", salario: 5000, setor: "TI" },
  { nome: "Roberto", salario: 3000, setor: "RH" },
  { nome: "Carla", salario: 7000, setor: "TI" },
  { nome: "Pedro", salario: 2500, setor: "Financeiro" },
];

for (let i = 0; i < funcionarios.length; i++) {
  if (funcionarios[i].setor === "TI") {
    nomesTI.push(funcionarios[i].nome);
  }
  if (funcionarios[i].salario > maiorSalario) {
    maiorSalario = funcionarios[i].salario;
  }
  mediaSalarial += funcionarios[i].salario / funcionarios.length;
}

console.log(`Funcionários da TI: ${nomesTI.join(`, `)}`);
console.log(`Média Salarial: R$ ${parseFloat(mediaSalarial.toFixed(2))}`);
console.log(`Maior salário: R$ ${parseFloat(maiorSalario.toFixed(2))}`);

/* 13. Carrinho de Compras

let carrinho = [
  { produto: "Camisa", preco: 120, quantidade: 2 },
  { produto: "Calça", preco: 200, quantidade: 1 },
  { produto: "Tênis", preco: 350, quantidade: 1 },
];

Crie um programa que:
Calcule o valor total da compra.
Mostre apenas os produtos com quantidade maior que 1.
Verifique se existe algum produto com preço maior que 300. */

let valorTotal = 0;
let produtoMaior1 = [];
let produtoAcima300 = [];

let carrinho = [
  { produto: "Camisa", preco: 120, quantidade: 2 },
  { produto: "Calça", preco: 200, quantidade: 1 },
  { produto: "Tenis", preco: 350, quantidade: 1 },
];

for (let i = 0; i < carrinho.length; i++) {
  if (carrinho[i].quantidade > 1) {
    produtoMaior1.push(carrinho[i].produto);
  }
  if (carrinho[i].preco > 300) {
    produtoAcima300.push(carrinho[i].produto);
  }
  valorTotal += carrinho[i].preco * carrinho[i].quantidade;
}

console.log(`Produtos em Estoque acima de 1 peça: ${produtoMaior1.join(`, `)}`);
console.log(`Preço total da Compra: R$ ${parseFloat(valorTotal.toFixed(2))}`);
console.log(
  `Produtos com valor Acima de R$300,00: ${produtoAcima300.join(`, `)}`,
);

/* 14. Sistema de Alunos
let alunos = [
  { nome: "Lucas", nota: 8, aprovado: true },
  { nome: "Marina", nota: 4, aprovado: false },
  { nome: "João", nota: 6, aprovado: true },
  { nome: "Fernanda", nota: 3, aprovado: false }
];

Faça um programa que:
Mostre o nome dos alunos reprovados.
Conte quantos alunos foram aprovados.
Calcule a média geral das notas. */

let alunos = [
  { nome: "Lucas", nota: 8, aprovado: true },
  { nome: "Marina", nota: 4, aprovado: false },
  { nome: "João", nota: 6, aprovado: true },
  { nome: "Fernanda", nota: 3, aprovado: false },
];

let reprovados = [];
let aprovados = 0;
let mediaGeral = 0;

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].aprovado === false) {
    reprovados.push(alunos[i].nome);
  }
  aprovados += alunos[i].aprovado;
  mediaGeral += alunos[i].nota / alunos.length;
}

console.log(`Alunos Reprovados: ${reprovados.join(", ")}`);
console.log(`Quantidade de Aprovados: ${aprovados}`);
console.log(`Média Geral da Turma: ${mediaGeral}`);

/* 15. Relatório de Vendas (Varredura + Lógica)
let vendas = [
  { vendedor: "Carlos", valor: 500 },
  { vendedor: "Ana", valor: 1200 },
  { vendedor: "Carlos", valor: 700 },
  { vendedor: "Marcos", valor: 300 },
  { vendedor: "Ana", valor: 800 }
];

Desafio mais analítico:
Calcule o total vendido pela empresa.
Calcule quanto cada vendedor vendeu no total.
Descubra quem foi o vendedor que mais vendeu.
⚠️ Dica: aqui você pode precisar criar um objeto auxiliar para armazenar os totais por vendedor. */

let vendas = [
  { vendedor: "Carlos", valor: 500 },
  { vendedor: "Ana", valor: 1200 },
  { vendedor: "Carlos", valor: 700 },
  { vendedor: "Marcos", valor: 300 },
  { vendedor: "Ana", valor: 800 },
];

let valorVendido = 0;
let valorVendedor = {};
let maiorVendedor = 0;
let maiorValor = 0;

for (let i = 0; i < vendas.length; i++) {
  valorVendido += vendas[i].valor;

  let nome = vendas[i].vendedor;
  let valor = vendas[i].valor;

  if (valorVendedor[nome]) {
    valorVendedor[nome] += valor;
  } else {
    valorVendedor[nome] = valor;
  }
}

for (let vendedor in valorVendedor) {
  if (valorVendedor[vendedor] > maiorVendedor) {
    maiorValor = valorVendedor[vendedor];
    maiorVendedor = vendedor;
  }
}

console.log(`Valor Total de Vendas: R$ ${parseFloat(valorVendido.toFixed(2))}`);
console.log(valorVendedor);
console.log(`Maior vendedor: ${maiorVendedor}`);

/* 16.Maior Valor em Objeto

let pontuacoes = {
  Lucas: 85,
  Mariana: 92,
  Pedro: 78,
  Ana: 99,
  Carlos: 88
};

Faça um programa que:
Descubra quem tem a maior pontuação.
Mostre o nome e a pontuação.
Conte quantas pessoas têm nota acima de 80. */

let notas = {
  Lucas: 85,
  Mariana: 92,
  Pedro: 78,
  Ana: 99,
  Carlos: 88,
};

let maiorNota = 0;
let alunoMaiorNota = 0;
let notasAcima80 = 0;

for (let nome in notas) {
  if (notas[nome] > maiorNota) {
    maiorNota = notas[nome];
    alunoMaiorNota = nome;
  }
  if (notas[nome] > 80) {
    notasAcima80++;
  }
}

console.log(`Aluno de Maior Nota: ${alunoMaiorNota} com ${maiorNota}`);
console.log(`Alunos com Notas superior a 80: ${notasAcima80}`);

/* 17.Relatório Financeiro
let despesas = {
  aluguel: 2000,
  internet: 150,
  energia: 300,
  agua: 120,
  mercado: 900
};
Faça um programa que:
Calcule o total das despesas.
Descubra qual é a maior despesa.
Mostre apenas as despesas acima de 500. */

let despesas = {
  aluguel: 2000,
  internet: 150,
  energia: 300,
  agua: 120,
  mercado: 900,
};

let totaLDespesas = 0;
let maiorDespesas = 0;
let despesasAcima500 = [];

for (let items in despesas) {
  totaLDespesas += despesas[items];
  if (despesas[items] > maiorDespesas) {
    maiorDespesas = despesas[items];
  }
  if (despesas[items] > 500) {
    despesasAcima500.push(items);
  }
}

console.log(
  `Valor total de Despesas: R$ ${parseFloat(totaLDespesas.toFixed(2))}`,
);
console.log(
  `Valor da Maior Despesa: R$ ${parseFloat(maiorDespesas.toFixed(2))}`,
);
console.log(`Despesas acima de 500: ${despesasAcima500.join(", ")}`);

/* 18. Ranking de Vendas

let vendas = {
  Carlos: 15000,
  Ana: 22000,
  Marcos: 8000,
  Juliana: 17000
};

Faça um programa que:
Descubra quem vendeu menos.
Calcule a média de vendas.
Mostre quem vendeu acima da média. */

let vendas2 = {
  Carlos: 15000,
  Ana: 22000,
  Marcos: 8000,
  Juliana: 17000,
};

let menorValor = Infinity;
let vendeuMenos = 0;
let mediaVendas = 0;
let acimaDaMedia = [];
let soma = 0;
let vendedores = 0;

for (let vendedor in vendas2) {
  if (vendas2[vendedor] < menorValor) {
    menorValor = vendas2[vendedor];
    vendeuMenos = vendedor;
  }
  soma += vendas2[vendedor];
  vendedores++;

  mediaVendas = soma / vendedores;

  if (vendas2[vendedor] > mediaVendas) {
    acimaDaMedia.push(vendedor);
  }
}

console.log(`Pior vendedor: ${vendeuMenos}`);
console.log(`Média de Vendas: R$ ${parseFloat(mediaVendas.toFixed(2))}`);
console.log(`Venderam acima da média: ${acimaDaMedia.join(", ")}`);

/* 19.Sistema de Pontos

let jogadores = {
  Player1: 300,
  Player2: 450,
  Player3: 200,
  Player4: 500
};

Faça um programa que:
Some todos os pontos.
Descubra quem está em primeiro lugar.
Verifique se existe algum jogador com menos de 250 pontos. */

let jogadores = {
  Player1: 300,
  Player2: 450,
  Player3: 200,
  Player4: 500,
};

let somaPontos = 0;
let primeiroLugar = 0;
let maiorPontuacoa = 0;
let menor250 = [];

for (let player in jogadores) {
  somaPontos += jogadores[player];
  if (jogadores[player] > primeiroLugar) {
    maiorPontuacoa = jogadores[player];
    primeiroLugar = player;
  }
  if (jogadores[player] < 250) {
    menor250++;
  }
}

console.log(`Total de Pontos: ${somaPontos}`);
console.log(`Primeiro Lugar: ${primeiroLugar}`);
console.log(`Jogadores abaixo de 250 pontos: ${menor250}`);

/* 20.Controle de Estoque por Categoria

let estoque = {
  notebook: 5,
  mouse: 20,
  teclado: 0,
  monitor: 7,
  cadeira: 2
};

Faça um programa que:
Mostre apenas os produtos com estoque zerado.
Conte quantos produtos têm estoque maior que 5.
Descubra qual produto tem o maior estoque.
 */

let estoque = {
  notebook: 5,
  mouse: 20,
  teclado: 0,
  monitor: 7,
  cadeira: 2,
};

let semEstoque = [];
let maior5 = 0;
let maiorEstoque = 0;
let produtoMaiorEstoque = 0;

for (let produtos in estoque) {
  if (estoque[produtos] == 0) {
    semEstoque.push(produtos);
  }
  if (estoque[produtos] > 5) {
    maior5++;
  }
  if (estoque[produtos] > maiorEstoque) {
    maiorEstoque = estoque[produtos];
    produtoMaiorEstoque = produtos;
  }
}

console.log(`Produtos sem Estoque: ${semEstoque}`);
console.log(`Produtos Acima de 5 peças: ${maior5}`);
console.log(`Produto com Maior Estoque: ${produtoMaiorEstoque}`);

/* 21.Relatório de Pedidos
let pedidos = [
  { cliente: "Carlos", valor: 500, pago: true },
  { cliente: "Ana", valor: 1200, pago: false },
  { cliente: "Marcos", valor: 700, pago: true },
  { cliente: "Ana", valor: 800, pago: true }
];

Faça um programa que:
Calcule o total já pago.
Calcule o total pendente.
Descubra qual cliente gastou mais no total. */

let pedidos = [
  { cliente: "Carlos", valor: 500, pago: true },
  { cliente: "Ana", valor: 1200, pago: false },
  { cliente: "Marcos", valor: 700, pago: true },
  { cliente: "Ana", valor: 800, pago: true },
];

let totalPago = 0;
let totalPendente = 0;
let maiorGasto = 0;
let maiorCliente = 0;

for (let i = 0; i < pedidos.length; i++) {
  if (pedidos[i].pago) {
    totalPago += pedidos[i].valor;
    if (pedidos[i].valor > maiorGasto) {
      maiorGasto = pedidos[i].valor;
      maiorCliente = pedidos[i].cliente;
    }
  } else {
    totalPendente += pedidos[i].valor;
  }
}

console.log(`Valor total pago: R$ ${parseFloat(totalPago.toFixed(2))}`);
console.log(`Valor total pendente: R$ ${parseFloat(totalPendente.toFixed(2))}`);
console.log(`Cliente que mais gastou na loja: ${maiorCliente}`);

/* 22. Controle de Estoque Avançado

let estoque = [
  { produto: "Notebook", preco: 3500, qtd: 5 },
  { produto: "Mouse", preco: 80, qtd: 20 },
  { produto: "Teclado", preco: 200, qtd: 10 },
  { produto: "Monitor", preco: 1200, qtd: 3 }
];

Faça um programa que:
Calcule o valor total do estoque.
Descubra qual produto representa o maior valor total (preco × qtd).
Mostre apenas produtos com valor total acima de 5000. */

let loja = [
  { produto: "Notebook", preco: 3500, qtd: 5 },
  { produto: "Mouse", preco: 80, qtd: 20 },
  { produto: "Teclado", preco: 200, qtd: 10 },
  { produto: "Monitor", preco: 1200, qtd: 3 },
];

let lojaEstoqueTotal = 0;
let maiorEstoqueLoja = 0;
let produtoMaiorValor = 0;
let produtoAcima5000 = [];

for (let i = 0; i < loja.length; i++) {
  lojaEstoqueTotal += loja[i].preco * loja[i].qtd;
  if (loja[i].preco * loja[i].qtd > maiorEstoqueLoja) {
    maiorEstoqueLoja = loja[i].preco * loja[i].qtd;
    produtoMaiorValor = loja[i].produto;
  }
  if (loja[i].preco * loja[i].qtd > 5000) {
    produtoAcima5000.push(loja[i].produto);
  }
}

console.log(
  `Valor Total do Estoque: R$ ${parseFloat(lojaEstoqueTotal.toFixed(2))}`,
);
console.log(`Produto de Maior Valor no Estoque: ${produtoMaiorValor}`);
console.log(`Produtos Acima de R$ 5.000,00: ${produtoAcima5000.join(", ")}`);

/* 23.Sistema de Usuários

let usuarios = [
  { nome: "Lucas", idade: 17, ativo: true },
  { nome: "Marina", idade: 25, ativo: false },
  { nome: "Pedro", idade: 30, ativo: true },
  { nome: "Ana", idade: 15, ativo: true }
];

Faça um programa que:
Conte quantos usuários são maiores de idade.
Mostre apenas usuários ativos.
Descubra a idade média dos usuários ativos. */

let users = [
  { nome: "Lucas", idade: 17, ativo: true },
  { nome: "Marina", idade: 25, ativo: false },
  { nome: "Pedro", idade: 30, ativo: true },
  { nome: "Ana", idade: 15, ativo: true },
];

let userMaiorIdade = 0;
let qtdUserAtivos = 0;
let idadeTotalAtivos = 0;
let userAtivos = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].idade >= 18) {
    userMaiorIdade++;
  }
  if (users[i].ativo) {
    userAtivos.push(users[i].nome);
    qtdUserAtivos++;
    idadeTotalAtivos += users[i].idade;
  }
}

let idadeMedia = idadeTotalAtivos / qtdUserAtivos;

console.log(`Usuários maiores de Idade: ${userMaiorIdade}`);
console.log(`Usuários Ativos: ${userAtivos.join(`, `)}`);
console.log(
  `Idade Média do Usuários Ativos: ${parseFloat(idadeMedia.toFixed(2))}`,
);

/* 24. Função de Maior Número

Crie uma função que:
Receba 3 númers.
Retorne o maior deles.
Não pode usar Math.max. */

let maiorNumero2 = 0;

function maiorNumero(a, b, c) {
  let maiorNumero2 = a;
  if (b > maiorNumero2) {
    maiorNumero2 = b;
  }
  if (c > maiorNumero2) {
    maiorNumero2 = c;
  }
  return maiorNumero2;
}

console.log(maiorNumero(3, 6, 3));

/* 25. Função de Imposto

Crie uma função chamada calcularImposto que:
Receba um valor.
Se for maior que 1000, aplique 15%.
Caso contrário, aplique 8%.
Retorne o valor final com imposto. */

let d = 1000;

function calcularImposto2(d) {
  let finalImposto;
  if (d > 1000) {
    finalImposto = d * 1.15;
  } else {
    finalImposto = d * 1.08;
  }
  return finalImposto;
}

let valorFinalImposto = calcularImposto2(d);

console.log(
  `O valor do imposto de ${d} é R$ ${parseFloat(valorFinalImposto).toFixed(2)}`,
);

/* 26. Função de Contagem em Array

Crie uma função que:
Receba um array de números.
Retorne quantos números são pares. */

let listaNumeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function contagemArray(listaNumeros) {
  let numerosPares = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
      numerosPares++;
    }
  }
  return numerosPares;
}

let resultadoPares = contagemArray(listaNumeros);

// Alternativa
// let resultadoPares = listaNumeros.filter( n=> n % 2 === 0).length

console.log(`Quantidade de números pares: ${resultadoPares}`);

/* 27. Função de Busca em Objeto

Crie uma função que:
Receba um objeto de vendas.
Receba um nome de vendedor.
Retorne quanto ele vendeu.
Caso não exista, retorne "Vendedor não encontrado". */

let nomeVendedor27 = "Helena";

let vendas27 = [
  { nome: "Lucas", qtd: 200 },
  { nome: "Pedro", qtd: 300 },
  { nome: "Mario", qtd: 400 },
  { nome: "Helena", qtd: 500 },
];

function buscaDeVendedor(nomeVendedor27) {
  for (let i = 0; i < vendas27.length; i++) {
    if (vendas27[i].nome === nomeVendedor27) {
      return `${vendas27[i].nome} vendeu ${vendas27[i].qtd} produtos`;
    }
  }
  return `Vendedor ${nomeVendedor27} não encontrado`;
}

console.log(buscaDeVendedor(nomeVendedor27));

/* 28. Função de Média

Crie uma função que:
Receba um array de notas.
Retorne a média.
Se o array estiver vazio, retorne "Sem dados". */

let notas28 = [10, 9, 8, 3, 4, 7];

function media(notas28) {
  if (notas28.length === 0) {
    return `Sem Dados`;
  }
  let soma = 0;
  for (let nota of notas28) {
    soma += nota;
  }
  return soma / notas28.length;
}

console.log(parseFloat(media(notas28).toFixed(2)));

/* 29.Simulador de Saque
Crie uma função que:

Receba um objeto conta:

let conta = {
  titular: "Carlos",
  saldo: 3000
};

Receba um valor de saque.
Use while para impedir saque se saldo for insuficiente.
Use if para validar valor negativo.
Atualize o saldo corretamente. */

let conta = { titular: "Carlos", saldo: 3000 };
let withdraw = 2000;

function saque(withdraw) {
  let resultado = 0;
  for (let saldo in conta) {
    while (conta[saldo] > 0) {
      resultado = conta[saldo] - withdraw;
      if (resultado < 0) {
        return `Saldo Insuficiente`;
      }
      return resultado;
    }
  }
}

console.log(saque(withdraw));

/* 30. Sistema de Pontos com Loop
let jogador = {
  nome: "Player1",
  pontos: 0
};

Use while para simular 5 rodadas.
Em cada rodada:
Se rodada for par → ganha 10 pontos.
Se for ímpar → ganha 5 pontos.
Retorne o total final de pontos. */

let jogador = {
  nome: "Player1",
  pontos: 0,
};

let p = 1;

while (p <= 5) {
  if (p % 2 === 0) {
    jogador.pontos += 10;
  } else {
    jogador.pontos += 5;
  }
  p++;
}

console.log(jogador.pontos);
