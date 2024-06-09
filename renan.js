// Conversão de Bases Numéricas
function converterBase() {
  const numero = document.getElementById('numero').value;
  const deBase = document.getElementById('deBase').value;
  const paraBase = document.getElementById('paraBase').value;
  let resultado;

  const paraDecimal = (num, base) => parseInt(num, base);
  const deDecimal = (num, base) => num.toString(base);

  try {
    const decimal = paraDecimal(numero, getBaseValue(deBase));
    resultado = deDecimal(decimal, getBaseValue(paraBase)).toUpperCase();
    document.getElementById('resultadoBases').innerHTML = `Resultado: ${resultado}`;
    document.getElementById('resultadoBases').classList.remove('hidden');
  } catch (error) {
    document.getElementById('resultadoBases').innerHTML = `Erro: ${error.message}`;
    document.getElementById('resultadoBases').classList.remove('hidden');
  }
}

function getBaseValue(base) {
  switch(base) {
    case 'binario': return 2;
    case 'decimal': return 10;
    case 'octal': return 8;
    case 'hexadecimal': return 16;
    default: throw new Error('Base desconhecida');
  }
}

// Calculadora de Registradores
function calcularRegistrador() {
  const registrador1 = document.getElementById('registrador1').value;
  const registrador2 = document.getElementById('registrador2').value;

  const somaBinaria = (bin1, bin2) => {
    const dec1 = parseInt(bin1, 2);
    const dec2 = parseInt(bin2, 2);
    const soma = dec1 + dec2;
    return soma.toString(2);
  };

  try {
    const resultado = somaBinaria(registrador1, registrador2);
    document.getElementById('resultadoReg').innerHTML = `Resultado: ${resultado}`;
    document.getElementById('resultadoReg').classList.remove('hidden');
  } catch (error) {
    document.getElementById('resultadoReg').innerHTML = `Erro: ${error.message}`;
    document.getElementById('resultadoReg').classList.remove('hidden');
  }
}

// Conversor de Texto para Binário
function converterTextoParaBinario() {
  const texto = document.getElementById('texto').value;

  const textoParaBinario = (text) => {
    return text.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
  };

  try {
    const resultado = textoParaBinario(texto);
    document.getElementById('resultadoBin').innerHTML = `Resultado: ${resultado}`;
    document.getElementById('resultadoBin').classList.remove('hidden');
  } catch (error) {
    document.getElementById('resultadoBin').innerHTML = `Erro: ${error.message}`;
    document.getElementById('resultadoBin').classList.remove('hidden');
  }
}
function valorTotal(){
  let Fax1 = document.getElementById("faixa1").value
  let Fax2 = document.getElementById("faixa2").value
  let Fax3 = document.getElementById("faixa3").value
  let Fax4 = document.getElementById("faixa4").value

  let soma = (Fax1 + Fax2)
  let mult = parseInt(soma * Fax3)
  let valMin = parseFloat(mult - (Fax4/100 * mult))
  let valMax = parseFloat(mult + (Fax4/100 * mult))
  let resist = ("O valor da resistência é " + mult + "Ω" + " " + 
  "e o valor da tolerância estará entre " + valMin + "Ω" + " e " + valMax + "Ω")

  document.getElementById("resultado").innerHTML = resist
}
function mudarCor(){
  var Valf1 = document.getElementById("faixa1").value
  var Valf2 = document.getElementById("faixa2").value
  var Valf3 = document.getElementById("faixa3").value
  var Valf4 = document.getElementById("faixa4").value
  
  switch(Valf1){
      case("0"):document.getElementById("Color1").style.backgroundColor = "black"  
      break;
      case("1"):document.getElementById("Color1").style.backgroundColor = "brown"
      break;
      case("2"):document.getElementById("Color1").style.backgroundColor = "red"
      break;
      case("3"):document.getElementById("Color1").style.backgroundColor = "orange"
      break;
      case("4"):document.getElementById("Color1").style.backgroundColor = "yellow"
      break;
      case("5"):document.getElementById("Color1").style.backgroundColor = "green"
      break;
      case("6"):document.getElementById("Color1").style.backgroundColor = "blue"
      break;
      case("7"):document.getElementById("Color1").style.backgroundColor = "violet"
      break;
      case("8"):document.getElementById("Color1").style.backgroundColor = "gray"
      break;
      case("9"):document.getElementById("Color1").style.backgroundColor = "white"
      break;
  }
  switch(Valf2){
      case("0"):document.getElementById("Color2").style.backgroundColor = "black"  
      break;
      case("1"):document.getElementById("Color2").style.backgroundColor = "brown"
      break;
      case("2"):document.getElementById("Color2").style.backgroundColor = "red"
      break;
      case("3"):document.getElementById("Color2").style.backgroundColor = "orange"
      break;
      case("4"):document.getElementById("Color2").style.backgroundColor = "yellow"
      break;
      case("5"):document.getElementById("Color2").style.backgroundColor = "green"
      break;
      case("6"):document.getElementById("Color2").style.backgroundColor = "blue"
      break;
      case("7"):document.getElementById("Color2").style.backgroundColor = "violet"
      break;
      case("8"):document.getElementById("Color2").style.backgroundColor = "gray"
      break;
      case("9"):document.getElementById("Color2").style.backgroundColor = "white"
      break;
  }
  switch(Valf3){
      case("1"):document.getElementById("Color3").style.backgroundColor = "black"  
      break;
      case("10"):document.getElementById("Color3").style.backgroundColor = "brown"
      break;
      case("100"):document.getElementById("Color3").style.backgroundColor = "red"
      break;
      case("1000"):document.getElementById("Color3").style.backgroundColor = "orange"
      break;
      case("10000"):document.getElementById("Color3").style.backgroundColor = "yellow"
      break;
      case("100000"):document.getElementById("Color3").style.backgroundColor = "green"
      break;
      case("1000000"):document.getElementById("Color3").style.backgroundColor = "blue"
      break;
      case("10000000"):document.getElementById("Color3").style.backgroundColor = "violet"
      break;
  }
  switch(Valf4){
      case("5"):document.getElementById("Color4").style.backgroundColor = "gold"
      break;
      case("10"):document.getElementById("Color4").style.backgroundColor = "silver"
      break;
  }
}
