let participantes = [
  {
    nome: "Gabriel Nobrega",
    email: "gabrielnobrega@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },

  {
    nome: "Alan Santana",
    email: "alansantana-@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },

  {
    nome: "Ana Paula",
    email: "anapaula@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "Gilberto Silva",
    email: "gilberto@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "Luciana Maria",
    email: "lucinamaria@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "Gabriel Lobo",
    email: "gabrielobo@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "fernando Matos",
    email: "fernandomatos@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "joão Matos",
    email: "joãomatos@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "Mario Viana",
    email: "marioViana@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
  {
    nome: "Luigi Nobre",
    email: "luiginobre@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    DataCheckIn: new Date(2024, 2, 25, 19, 20),
  },
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
<button 
data-email="${participante.email}"
onclick="fazerCheckIn(event)"
>
confirmar chek-in
</button>
`;
  }

  return `
  <tr> 
    <td>
      <strong>
         ${participante.nome}
    </strong>
    <br> 
    <small>
    ${participante.email}
    </small>
    </td>
  <td>${dataInscricao}</td>
  <td> ${dataCheckIn}</td>
  </tr>
 `;
};
const atualizarLista = (participantes) => {
  let output = "";
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }

  //substituir informação do html

  document.querySelector("tbody").innerHTML = output;
};
atualizarLista(participantes);

const adicionarParticipante = (event) => {
  event.preventDefault();

  const dadosDoFormulario = new FormData(event.target);

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  };

  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email;
  });
  if (participanteExiste) {
    alert("email já cadastrado!");
    return;
  }

  participantes = [participante, ...participantes];
  atualizarLista(participantes);

  event.target.querySelector('[name="nome"]').value = "";
  event.target.querySelector('[name="email"]').value = "";
};

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = "Tem certza que deseja fazer o check-in";
  if (confirm(mensagemConfirmacao) == false) {
    return;
  }

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email;
  });

  participante.dataCheckIn = new Date();

  atualizarLista(participantes);
};
