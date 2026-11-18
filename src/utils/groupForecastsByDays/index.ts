import type { ForecastItem } from '@src/types/response';
import { getDayName } from '@src/utils/getTime';

export const groupedForecastsByDays = (arr: ForecastItem[]) => {
    const newArr: { temp: number; date: string }[] = [];

    let date = arr[0].dt_txt.split(' ')[0];
    let count = 1;
    let middleTemp = arr[0].main.temp;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].dt_txt.split(' ')[0] === date) {
            count++;
            middleTemp += arr[i].main.temp;
        } else {
            const obj: { temp: number; date: string } = {
                temp: middleTemp / count,
                date: getDayName(date),
            };

            newArr.push(obj);

            date = arr[i].dt_txt.split(' ')[0];
            count = 1;
            middleTemp = arr[i].main.temp;
        }
    }

    return newArr;
};
