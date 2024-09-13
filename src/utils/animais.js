import { Animal } from "../models/animal";

const animais = {
  'LEAO': new Animal('LEAO', 3, ['savana'], true),
  'LEOPARDO': new Animal('LEOPARDO', 2, ['savana'], true),
  'CROCODILO': new Animal('CROCODILO', 3, ['rio'], true),
  'MACACO': new Animal('MACACO', 1, ['savana', 'floresta'], false),
  'GAZELA': new Animal('GAZELA', 2, ['savana'], false),
  'HIPOPOTAMO': new Animal('HIPOPOTAMO', 4, ['savana', 'rio'], false),
};

export default animais;