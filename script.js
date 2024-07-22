/* ----------------------------------------------------------------------------------------
  Data de criação: 21/07/2024
  Hora de criação: 22:00
  Autor: Emerson Felix
  Descrição: Este código define uma classe `Heroi` para criar e gerenciar heróis com atributos 
  como nome, idade e tipo. O método `atacar` determina o tipo de ataque baseado no tipo de herói.
 ===========================================================================================*/

// Define o nome do herói
const nomeHeroi = "Gandalf";
// Define a idade do herói
const idadeHeroi = 600;
// Define o tipo do herói (ex: guerreiro, mago, monge, ninja)
const tipoHeroi = "mago";

// Define a classe Heroi
class Heroi {
  // Construtor que inicializa os atributos name, idade e tipo
  constructor(name, idade, tipo) {
    this.name = name; // Atribui o nome do herói
    this.idade = idade; // Atribui a idade do herói
    this.tipo = tipo; // Atribui o tipo do herói
  }

  // Método para determinar o tipo de ataque do herói
  atacar() {
    if (this.tipo === "mago") {
      // Verifica se o tipo é "mago"
      return "magia"; // Retorna "magia" se o tipo for "mago"
    } else if (this.tipo === "guerreiro") {
      // Verifica se o tipo é "guerreiro"
      return "espada"; // Retorna "espada" se o tipo for "guerreiro"
    } else if (this.tipo === "monge") {
      // Verifica se o tipo é "monge"
      return "artes marciais"; // Retorna "artes marciais" se o tipo for "monge"
    } else if (this.tipo === "ninja") {
      // Verifica se o tipo é "ninja"
      return "shuriken"; // Retorna "shuriken" se o tipo for "ninja"
    } else {
      // Caso o tipo seja desconhecido
      return "tipo de herói desconhecido"; // Retorna uma mensagem indicando tipo desconhecido
    }
  }
}

// Cria uma nova instância da classe Heroi com os atributos definidos
let novoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
// Imprime a mensagem com o tipo de ataque do herói
console.log(
  `O ${novoHeroi.tipo} ${novoHeroi.name} atacou usando ${novoHeroi.atacar()}`
);
