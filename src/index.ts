import { EstoqueVeiculos } from "./classes/EstoqueVeiculos"
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos"
import { Carro } from "./interface/Carro"
import { Moto } from "./interface/Moto"
import { Veiculo } from "./interface/Veiculo"
import { FiltroVeiculos } from "./utils/FiltroVeiculos"
import { gerarRelatorio } from "./utils/RelatorioVeiculos"

const meuCarro: Carro = {
    marca: "Nissan",
    modelo: "Kicks",
    ano: 2018,
    portas: 4,

    acelerar: () => "O carro está acelerando!"
}

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,

    acelerar: () => "A moto está acelerando!"
}

console.log(`Carro: ${meuCarro}`)
console.log(meuCarro.acelerar)
console.log(minhaMoto.acelerar)

const gerenciadorCarro = new GerenciadorVeiculos<Carro>();
const gerenciadorMoto = new GerenciadorVeiculos<Moto>();

gerenciadorCarro.adicionar(meuCarro);
gerenciadorMoto.adicionar(minhaMoto);

//Listando os veículos em cada um dos gerenciadores
gerenciadorCarro.listarVeiculos();
gerenciadorMoto.listarVeiculos();

//Removendo os itens da lista
gerenciadorCarro.remover(meuCarro);
gerenciadorMoto.remover(minhaMoto);

//Verificando se a remoção foi feita
gerenciadorCarro.listarVeiculos();
gerenciadorMoto.listarVeiculos();
gerenciadorMoto.listarVeiculos();

//Utilizando a classe EstoqueVeiculos
const estoqueCarro = new EstoqueVeiculos<Carro>();
const estoqueMoto = new EstoqueVeiculos<Moto>();

estoqueCarro.adicionarEstoque("Opala", 3);

estoqueCarro.consultaEstoque("Opala");

estoqueMoto.adicionarEstoque("Suzuki", 3);

estoqueMoto.consultaEstoque("Suzuki");

estoqueMoto.removerEstoque("Suzuki", 1);
estoqueMoto.consultaEstoque("Suzuki");

estoqueCarro.removerEstoque("Opala", 2);
estoqueCarro.consultaEstoque("Opala");

//Testando a classe FiltroVeiculos

//Criando a lista de veículos
const veiculosList: Veiculo[] = [
    {
        marca: "Nissan", modelo: "Kicks", ano: 2018,
        acelerar: () => "O veículo está acelerando!"
    },
    { 
        marca: "Honda", modelo: "Civic", ano: 2020, 
        acelerar: () => "O veículo está acelerando!"
    },
    { 
        marca: "Ford", modelo: "Focus", ano: 2018,
        acelerar: () => "O veículo está acelerando!"
    },
    { 
        marca: "Toyota", modelo: "Camry", ano: 2019, 
        acelerar: () => "O veículo está acelerando!"
    },
  ];

//Realizando os testes
const veiculosAno2018 = FiltroVeiculos.filtrarPorAno(veiculosList ,2018);
const veiculosNissan = FiltroVeiculos.filtrarPorMarca(veiculosList, "Nissan");

console.log("Veículos do ano 2018:", JSON.stringify(veiculosAno2018, null, 2));
console.log("Veículos da marca Nissan:", JSON.stringify(veiculosNissan, null, 2));

//Utilizando a função de FiltroVeiculos
const relatorio = gerarRelatorio(veiculosList);
console.log(relatorio);