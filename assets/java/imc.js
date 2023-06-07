alert('Eu, Kelven venho dizer: Seja Bem-vindo! --> Click em OK para sair. <--');

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputNome = evento.target.querySelector('#nome');
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const nome = String(inputNome.value);
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!nome){
        setResultado(`${nome} Tente novamente. `, false);
        return;
    }
    if (!peso){
        setResultado(`${nome} Tente novamente.`, false);
        return;
    }
    if (!altura){
        setResultado(`${nome} Tente novamente. `, false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC ${nome} é: ${imc} <br>você está : ${nivelImc}.`;

    setResultado(msg, true);

    


});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1ºgrau','Obesidade 2ºgrau', 'Obsidade 3ºgrau'];

if (imc >= 44.1) return nivel[5];
if (imc >= 37.7) return nivel[4];
if (imc >= 31.3) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc < 18.5)  return nivel[0];
}

6,4
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrago-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);

    setResultado.innerHTML = msg;
    resultado.appendChild(resultado);

}

