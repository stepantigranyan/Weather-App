import { Sun, CloudSun, Cloud, Cloudy } from 'lucide-react';

export const getCloudStatus = (
    percent: number,
    className: string = 'h-5 w-5'
) => {
    if (percent === 0)
        return { label: 'Clear sky', icon: <Sun className={className} /> };
    if (percent <= 25)
        return {
            label: 'Few clouds',
            icon: <CloudSun className={className} />,
        };
    if (percent <= 50)
        return {
            label: 'Scattered clouds',
            icon: <CloudSun className={className} />,
        };
    if (percent <= 84)
        return {
            label: 'Broken clouds',
            icon: <Cloud className={className} />,
        };
    return {
        label: 'Overcast clouds',
        icon: <Cloudy className={className} />,
    };
};
