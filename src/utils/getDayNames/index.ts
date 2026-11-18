import type { ForecastItem } from '@src/types/response';

export const getDayNames = (arr: ForecastItem[]) => {
    const days = new Set<string>();
    
    arr.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        days.add(date);
    });

    return [...days].slice(0, days.size - 1);
}