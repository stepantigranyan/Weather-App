import type { ForecastItem } from '@src/types/response';
import { getDayName } from '@src/utils/getTime';

export const groupedForecastsByDay = (arr: ForecastItem[]) => {
    const data = {};

    let date = arr[0].dt_txt.split(' ')[0];

    let item = [{ hour: arr[0].dt_txt.split(' ')[1].slice(0, 5), temp: arr[0].main.temp }];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].dt_txt.split(' ')[0] === date) {
            item.push({
                hour: arr[i].dt_txt.split(' ')[1].slice(0, 5),
                temp: arr[i].main.temp,
            });
        } else {
            data[getDayName(arr[i - 1].dt_txt.split(' ')[0])] = item;
            date = arr[i].dt_txt.split(' ')[0];
            item = [
                {
                    hour: arr[i].dt_txt.split(' ')[1].slice(0, 5),
                    temp: arr[i].main.temp,
                },
            ];
        }
    }

    return data;
};
