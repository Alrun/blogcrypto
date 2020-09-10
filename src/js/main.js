import { decimalFormat } from './utils'

const marketAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

const fetchData = async () => {
    try {
        const response = await fetch(marketAPI);

        if (!response.ok) {
            throw new Error('Ошибка сервера');
        }

        return await response.json();
    } catch (err) {
        console.log('Ошибка запроса: ', err.message);
    }
}


const getMarketData = async () => {
    const root = document.body.querySelector('#market');
    const data = await fetchData();

    const tableHead = `
        <thead>
            <tr>
                <th>#</th>
                <th>Coin</th>
                <th></th>
                <th>Price</th>
                <th style="text-align: right">Change (24h)</th>
                <th style="text-align: right"">Volume (24h)</th>
                <th style="text-align: right"">Market Cap</th>
            </tr>
        </thead>`;

    const paintCell = (cell) => (
        cell > 0
        ? `<td class="text-success" style="text-align: right">
            ${decimalFormat(cell)}%
        </td>`
        : `<td class="text-danger" style="text-align: right">
            ${decimalFormat(cell)}%
        </td>`
    )

    const tableRow = (row) => (
        `<tr>
            <td>${row.market_cap_rank}</td>
            <td>${row.name}</td>
            <td>${row.symbol.toUpperCase()}</td>
            <td>$ <b>${decimalFormat(row.current_price)}</b></td>
            ${paintCell(row.price_change_percentage_24h)}
            <td style="text-align: right"">$ ${decimalFormat(row.total_volume)}</td>
            <td style="text-align: right"">$ ${decimalFormat(row.market_cap)}</td>
        </tr>`
    )

    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    table.classList.add('table');
    table.innerHTML = tableHead;

    data.forEach(item => tableBody.insertAdjacentHTML('beforeend', tableRow(item)));

    table.append(tableBody);
    root.append(table);
};

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#market')) getMarketData();
});
