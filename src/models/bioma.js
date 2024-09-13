class Bioma {
  constructor(numero, bioma, tamanhoTotal) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.animaisExistentes = [];
  }

  // TODO: espaço suficiente para cada indivíduo
  verificarEspaco() {

    let espacoEmUso = 0, espacoAtual;

    this.animaisExistentes.forEach((tipo, quantidade) => {
      espacoEmUso += tipo.tamanho * quantidade;
    });


    // TODO: Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
    if (this.animaisExistentes.length > 1) {
      espacoEmUso += 1;
    }

    espacoAtual = this.tamanhoTotal - espacoEmUso;

    return espacoAtual;
  }



  // TODO: Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
  verificarReceberDeAnimais(animal, quantidade) {
    const espacoNecessario = animal.tamanho * quantidade, espacoLivre = this.verificarEspaco();

    if(espacoNecessario > espacoLivre) return false;

    // Um animal se sente confortável se está num bioma adequado
    const biomaAdequado = animal.bioma.forEach(b => {
      if(this.bioma.includes(b)){
        return true;
      }
    })
    if(!biomaAdequado) return false;
    
    
    // TODO: Animais carnívoros devem habitar somente com a própria espécie
    const possuiCarnivoros = this.animaisExistentes.forEach(
      (animal) => {
        if(animal.carnivoro) return true
      }
    )

    if(!animal.carnivoro && possuiCarnivoros) return false;

    // TODO: Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
    if(animal.nome === 'HIPOPOTAMO' && !(this.bioma.includes('savana') || this.bioma.includes('rio'))) return false;
  
    // TODO: Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
    if(animal.nome === 'MACACO' && quantidade === 1 && this.animaisExistentes.length === 0) return false;

    return true;
  }
}
  


export { Bioma }