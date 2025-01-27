function atualizaData() {
    const dataInicio = new Date('2023-12-24T14:20:00');
    const agora = new Date();

    const diferencaTempo = agora - dataInicio;

    const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const semanas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
    const dias = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

    document.getElementById('data').innerText = `${anos} anos, ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza a cada segundo (1000 milissegundos)
setInterval(atualizaData, 1000);

// Chama a função imediatamente para exibir a idade ao carregar a página
atualizaData();
