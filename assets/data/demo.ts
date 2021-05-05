import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Júlia Monteiro",
    isOnline: true,
    match: "78",
    description:
      "Amo fotografia e viajar!",
    message:
      "Que maneiro! Podemos viajar para lá no feriado, eu amo fotografia e adoraria tirar algumas fotos lá!.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Fabíola Soares",
    match: "33",
    description:
      "Adoro música e dançar, curso cinema e filmes é minha paixão!",
    isOnline: false,
    message: "Que tal um cineminha um dia desses?",
    image: IMAGE_02,
  },
  
  {
    id: 3,
    name: "Patricia Morgado",
    match: "95",
    description:
      "Dançarina profissional, amo uma balada!",
    isOnline: true,
    message:
      "Semana que vem tem uma festa aqui na facul, topa?!",
    image: IMAGE_06,
  },
  {
    id: 4,
    name: "Beatriz Carvalho",
    match: "67",
    description:
      "Amo fazer dieta e treinar é minha paixão!",
    isOnline: true,
    message:
      "Você gosta de treinar? Poderíamos marcar de fazer alguma atividade juntos!",
    image: IMAGE_07,
  },
  {
    id: 5,
    name: "Luana Almeida",
    match: "74",
    description:
      "Adoro uma praia e passear na natureza, se você também gosta é MATCH na certa!.",
    isOnline: true,
    message:
      "Que tal irmos a praia?",
    image: IMAGE_09,
  },
  {
    id: 6,
    name: "Eduardo Honorato",
    match: "88",
    description:
      "Sou desenvolvedor front-end, se você gostou do meu perfil, só mandar uma mensagem!",
    age: "26 anos",
    location: "Taubaté, São Paulo - Brazil",
    info1: '1.79m, moreno e olhos castanhos claros',
    info2: "Ama pizza e viajar",
    info3: "Ama ir à praia, restaurantes e cinema",
    info4: "Visto por último hoje às 23h00",
    isOnline: false,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  }
];

export default data;
