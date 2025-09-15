const dataInicio = new Date("2025-08-03T00:00:00"); // Altere a data

function atualizaContador() {
    const agora = new Date();
    const diferenca = agora.getTime() - dataInicio.getTime();

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const anos = Math.floor(dias / 365.25);
    const diasRestantesAno = dias % 365.25;
    const meses = Math.floor(diasRestantesAno / 30.44);
    const diasRestantes = Math.floor(diasRestantesAno % 30.44);

    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;

    const texto = `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;

    document.getElementById("contador").innerHTML = texto;
}

setInterval(atualizaContador, 1000);