export const beerCalculator = (pers, temp) => {
  if (pers && temp) {
    let cant = 0;

    cant =      temp >= 20 && temp <= 24
        ? pers
        : temp < 20
          ? pers * 0.75
          : temp > 24
        ? pers * 2
            : 0;

    return cant;
  }
  return 0;
};

export const fToCelsius = temp => Math.round(((temp - 32) * 5) / 9);
