import { Bioma } from '../models/bioma';

const biomas = [
  new Bioma(1, ['savana'], 10, [{ especie: 'MACACO', quantidade: 3 }]),
  new Bioma(2, ['floresta'], 5, []),
  new Bioma(3, ['savana', 'rio'], 7, [{ especie: 'GAZELA', quantidade: 1 }]),
  new Bioma(4, ['rio'], 8, []),
  new Bioma(5, ['savana'], 9, [{ especie: 'LEAO', quantidade: 1 }]),
];

export default biomas;