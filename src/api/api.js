const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export async function currencyAPI(e) {
    e.preventDefault();

    const amount = document.getElementById('amount');
    const convertedAmount = document.getElementById('convertedAmount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const result = document.getElementById('result');

    const loading = document.getElementById('loading')
    const btn = document.getElementById('btn')

    try {
        loading.style.display = 'block';
        btn.style.display = 'none';

        const response = await fetch(API_URL + fromCurrency.value);
        const data = await response.json();

        const rate = data.rates[toCurrency.value];
        const conversion = (amount.value * rate).toFixed(2);
        convertedAmount.value = conversion;

        result.innerHTML = `
        <p style='font-size: 1.4rem; text-align: center'>
            ${amount.value} ${fromCurrency.value} = ${conversion} ${toCurrency.value}
        <p/>
        <p style='font-size: 0.7rem; text-align: center'>
            Taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
        <p/>`
    } catch (err) {
        alert("An error just happened! Try again.")
    }

    loading.style.display = 'none';
    btn.style.display = 'block';
}