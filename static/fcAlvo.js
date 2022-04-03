function fcAlvo() {
    const birthday = document.querySelector('.your-bday')
    let buttonElement = document.querySelector('.calculate-btn');
    const fcMaximum = 220;
    let resultMax = document.querySelector('.result-tree');
    let resultUpper = document.querySelector('.result-two');
    let resultLower = document.querySelector('.result-one');
    let valueCalcMax = null;
    // funções:
    // Cáculo do Frequência cardíaca máxima da pessoa:
    function calcFCMax(fcMaximum, birthday) {
        return fcMaximum - birthday;
    }

    // Lançando resultado acima, para o HTML:
    function setCalcFCMax() {
        resultMax.innerHTML = `Frequência Cardíaca Máxima:
    <br>${calcFCMax(fcMaximum, birthday.value)} spm<br><br> `;
    }

    // Cálculo da Zonal alvo Superior:
    function calcUpper() {
        return (valueCalcMax * upper) / 100 + ' spm';
    }

    // Lançando resultado acima, para o HTML:
    function setCalcUpper() {
        resultUpper.innerHTML = `Limite Superior da Zona Alvo: 
    <br>${calcUpper()}<br><br>`;
    }

    // Cálculo da Zona alvo Inferior:
    function calcLower() {
        return (valueCalcMax * lower) / 100 + ' spm';
    }

    // Lançando resultado acima, para o HTML:
    function setCalcLower() {
        resultLower.innerHTML = `Limite Inferior da Zona Alvo:
    <br>${calcLower()}<br><br>*spm: sístoles por mínuto*`;
    }

    function activeClick() {
        buttonElement.addEventListener('click', () => {

            upper = document.querySelector('.upper-limit').value;

            lower = document.querySelector('.lower-limit').value;

            valueCalcMax = calcFCMax(fcMaximum, birthday.value);

            setCalcFCMax();

            setCalcUpper();

            setCalcLower();
        });
    }

    function initKeyboard() {
        document.addEventListener('keyup', (e) => {
            // console.log(e.key);
            if (e.key === 'Enter' || e.key === 'Tab') {

                upper = document.querySelector('.upper-limit').value;

                lower = document.querySelector('.lower-limit').value;

                valueCalcMax = calcFCMax(fcMaximum, birthday.value);

                setCalcFCMax();

                setCalcUpper();

                setCalcLower();

            }
        });
    }

    function init() {
        initKeyboard();
        activeClick();

    }

    init();

} fcAlvo();