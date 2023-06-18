// Variavel com as cotações de cada moeda
const rates = { 
 USD:0.21, // 1 Real = 0.21 Dolares 
 EUR:0.19, // 1 Real = 0.19 Euros
 GBP:0.16 // 1 Real = 0,16 Libras
};

//Selecionamos cada id do html 
const convertButton = document.getElementById("convertButton");
const amoutInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const resultDiv = document.getElementById("result");

//Quando o botão de conversão é clicado, uma função é executada. Ela pega a quantidade digitada pelo usuário e a moeda selecionada na lista suspensa.
convertButton.addEventListener("click",() =>{
    const amount = amoutInput.value;
    const currency = currencySelect.value;

// verifica se tanto o valor (amount) quanto a moeda (currency) foram fornecidos pelo usuário. Essa verificação garante que ambos os campos estejam preenchidos antes de realizar a conversão.
if (amount && currency) {
// Vai ser pego o valor digitado vezes a cotação de cada moeada
    const convertedAmount = amount * rates[currency];
// Atribui o valor convertido a textcontent o convert amount é usado par arredondar os valores
    resultDiv.textContent = convertedAmount.toFixed(2) + " " + currency;
  }
});
