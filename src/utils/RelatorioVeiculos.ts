import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string {
    if (veiculos.length === 0){
        console.log("Nenhum veículo encontrado...")
    }

    let relatorio = "Relatório de Veículos:\n";
    relatorio += "----------------------\n";
    
    veiculos.forEach((veiculo, index) => {
      relatorio += `Veículo ${index + 1}:\n`;
      relatorio += `  Marca: ${veiculo.marca}\n`;
      relatorio += `  Modelo: ${veiculo.modelo}\n`;
      relatorio += `  Ano: ${veiculo.ano}\n`;
      relatorio += "----------------------\n";
    });

    return relatorio;
}