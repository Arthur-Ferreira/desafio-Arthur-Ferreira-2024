import animais from './utils/animais';
import biomas from './utils/biomas';


class RecintosZoo {

  analisaRecintos(animal, quantidade) {

    if (!animais[animal]) {
      return { erro: "Animal inválido", recintosViaveis: null };
    }
    
    if(quantidade <= 0) {
      return { erro: "Quantidade inválida", recintosViaveis: null };
    }

    const especie = animais[animal];
    const recintos = [];

    biomas.forEach((bioma) => {
      if(bioma.verificarReceberDeAnimais(especie, quantidade)) {
        const espacoDisponivel = bioma.verificarEspaco();
        const espacoNecessario = especie.tamanho * quantidade;
        recintos.push(`Recinto ${bioma.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${bioma.tamanhoTotal})`);
      }
    });


    // TODO: Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!). Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.

    if(recintos.length === 0) {
      return { erro: "Não há recinto viável", recintosViaveis: null };
    }
    
    
    return { erro: null, recintosDisponiveis }
  }
}

export { RecintosZoo as RecintosZoo };
