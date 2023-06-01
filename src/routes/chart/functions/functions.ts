
// Obtener percentage o dólares

export const getDolar = (capital: number, percentage: number): number => {
    return parseFloat(((percentage / 100) * capital).toFixed(2))
}

export const getPercentage = (capital: number, dolar: number): number => {
    return parseFloat(((dolar / capital) * 100).toFixed(2))
}

// Obtener Date

export const getDate = () => {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getMonth() + 1; // Sumamos 1 al mes porque los meses empiezan en 0
    const year = fecha.getFullYear()
    const fechaString = `${day}/${month}/${year}`;

    return fechaString
}

// Obtener n° de trade

export const changeTrade = (trade: number): number => {
    return trade += 1
}

// obtener capital

export const getCapitalByPercentage = (capital: number, percentage: number): number => {
    return parseFloat((((percentage / 100) * capital) + capital).toFixed(2))
};

export const getCapitalByDolar = (capital: number, dolar: number): number => {
    return parseFloat((capital + dolar).toFixed(2))
};