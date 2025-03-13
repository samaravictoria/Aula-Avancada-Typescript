import { Veiculo } from "../interface/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo> {
    private veiculos: T[] = [];

    constructor() {}

    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
    }

    remover(veiculo: T): void {
        // Encontra o índice do veículo se existir e o remove
        const index = this.veiculos.indexOf(veiculo);
        if (index !== -1) {
            this.veiculos.splice(index, 1);
        } else {
            console.log("Veículo não encontrado");
        }
    }

    listarVeiculos(): void {
        console.log("Lista de veículos: ", this.veiculos);
    }
}