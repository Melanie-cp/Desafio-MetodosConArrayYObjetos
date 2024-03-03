const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

//1. Agregar las siguentes horas al arreglo de traumatología
traumatologia.push({ hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" }, { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" }, { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" }, { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" }, { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6 ", prevision: "FONASA" })

//2. Eliminar el primer y último elemento del arreglo de rediología
radiologia.shift()
radiologia.pop()
console.log(radiologia)

//3. Imprimir en la página HTML la lista de consultas médicas de Dental
//codigo propio:
// const renderDental = () => {
//     dentalList.innerHTML = ''
//     dental.forEach((item) => {
//         dentalList.innerHTML += `<p>${item.hora} - ${item.especialista} - ${item.paciente} - ${item.rut} - ${item.prevision}</p>`
//     })
// }
// renderDental()

//pasar a tabla de boostrap con ayuda de chatgpt:
const dentalList = document.querySelector("#dentalList")
dental.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.hora}</td>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
    `;
    dentalList.appendChild(row);
});


//4. Iprimir un listado total de todos los pacientes que se atendieron en el centro médico

function nombresPacientes(array) {
    return array.map(paciente => paciente.paciente);
}

const nombresRadiologia = nombresPacientes(radiologia);
const nombresTraumatologia = nombresPacientes(traumatologia);
const nombresDental = nombresPacientes(dental);

const pacientesTotal = nombresRadiologia.concat(nombresTraumatologia, nombresDental);


const listadoPacientes = document.querySelector('#listadoPacientes');
const renderPacientesTotal = () => {
    listadoPacientes.innerHTML = ''
    pacientesTotal.forEach((nombre) => {
        listadoPacientes.innerHTML += `<li class="flex-item">${nombre}</li>`
    })
}
renderPacientesTotal()

//5. Filtrar aquellos pacientes que indican del de isapre en la lista médica de dental

const dentalIsapre =
    dental.filter(function (dental) {
        return dental.prevision === "ISAPRE"
    });

const listaPacientesDentalIsapre = document.querySelector("#listaPacientesDentalIsapre");
const renderDentalIsapre = () => {
    listaPacientesDentalIsapre.innerHTML = ''
    dentalIsapre.forEach((item) => {
        listaPacientesDentalIsapre.innerHTML += `<li class="list-group-item">${item.paciente}</li>`
    })
}
renderDentalIsapre()


//6.Filtrar aquellos pacientes que indican ser de fonasa en la lista de traumatología

const traumatologiaFonasa =
    traumatologia.filter(function (traumatologia) {
        return traumatologia.prevision === "FONASA"
    });
const listaPacientesTraumaFonasa = document.querySelector("#listaPacientesTraumaFonasa")
const renderTraumaFonasa = () => {
    listaPacientesTraumaFonasa.innerHTML = ''
    traumatologiaFonasa.forEach((item) => {
        listaPacientesTraumaFonasa.innerHTML += `<li class="list-group-item">${item.paciente}</li>`
    })
}
renderTraumaFonasa()


//se estilizó la seccion de info con chatgpt
function mostrarInfo(elemento, titulo) {
    const output = document.getElementById('output');
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');

    const titleElement = document.createElement('p');
    titleElement.textContent = titulo;
    infoContainer.appendChild(titleElement);

    elemento.forEach(item => {
        const patientElement = document.createElement('p');
        patientElement.textContent = `${item.paciente} - ${item.prevision}`;
        infoContainer.appendChild(patientElement);
    });

    const firstLastElement = document.createElement('p');
    firstLastElement.classList.add('first-last');
    firstLastElement.textContent = `Primera atención: ${elemento[0].paciente} - ${elemento[0].prevision} | Última atención: ${elemento[elemento.length - 1].paciente} - ${elemento[elemento.length - 1].prevision}`;
    infoContainer.appendChild(firstLastElement);

    output.appendChild(infoContainer);
}

mostrarInfo(radiologia, 'Cantidad de atenciones para Radiología: ' + radiologia.length);
mostrarInfo(traumatologia, 'Cantidad de atenciones para Traumatología: ' + traumatologia.length);
mostrarInfo(dental, 'Cantidad de atenciones para Dental: ' + dental.length);

// document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


// document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
