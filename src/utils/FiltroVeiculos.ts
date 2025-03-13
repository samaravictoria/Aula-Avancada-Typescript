import { Veiculo } from "../interface/Veiculo";

export class FiltroVeiculos{

    static filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
        return veiculos.filter(v => v.ano === ano);
    }

    static filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[]{
        return veiculos.filter(
            v => v.marca.toLowerCase() === marca.toLocaleLowerCase());
    }

    static filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[]{
        return veiculos.filter(
            v => v.modelo.toLowerCase() === modelo.toLocaleLowerCase());
    }
}