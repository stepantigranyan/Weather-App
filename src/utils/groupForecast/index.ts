import type { ForecastItem } from '@src/types/response';

export const groupedForecast = (arr: ForecastItem[]) => {
    // const newArr = [];

    let date = arr[0].dt_txt;
    let count = 1;
    let middleTemp = arr[0].main.temp;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].dt_txt === date) {
            count++;
            middleTemp += arr[i].main.temp;
        } else {

        }
    }
}