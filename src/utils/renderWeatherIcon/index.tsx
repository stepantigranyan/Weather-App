import {Cloud, CloudRain, Sun} from "lucide-react";

export const renderWeatherIcon = (
    condition: "sun" | "cloud" | "rain",
    className = "h-6 w-6"
) => {
    switch (condition) {
        case "sun":
            return <Sun className={`${className} text-amber-500`} />;
        case "rain":
            return <CloudRain className={`${className} text-blue-500`} />;
        default:
            return <Cloud className={`${className}`} />;
    }
};