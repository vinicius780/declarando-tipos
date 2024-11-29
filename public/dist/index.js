const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada com sucesso !`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => { return ship.name === name; });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} Foi adicionado á tripulação da ${spaceship.name}`);
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} Não pode ser enviada. A nave ja está em missão !`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) { // math.floor arredonda pra baixo
        alert(`${spaceship.name} Não pode ser enviada. Tripulção insulficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} Enviada com sucesso !!!`);
    }
}
function firstMenuOption() {
    const name = prompt("Qual é o nome da nave a ser registrada ? ");
    const pilot = prompt(`Qual o nome do piloto da ${name} ? `);
    const crewLimit = Number(prompt(`Quantos tripulante a ${name} tem ?`));
    const confirmation = confirm(`Confirma o registro da ${name}\npiloto: ${pilot}\nLimite da tripulação ${crewLimit}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName); // find vai procurar para qual nave o membro vai
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = findSpaceship(spaceshipName); //vai procurar qual nave vai ser enviada
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `;
        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
