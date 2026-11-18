import CharCardForFiveDays from '@src/components/cards/CharCardForFiveDays.tsx';
import CharCardForOneDay from '@src/components/cards/CharCardForOneDay';
import WeatherMainCard from '@src/components/cards/WeatherMainCard';


const Forecast = () => {

    return (
        <div className="grid grid-rows-auto gap-y-5">
            <div className="grid grid-cols-2 gap-x-5">
                <WeatherMainCard />
                <CharCardForFiveDays />
            </div>
            <CharCardForOneDay />
        </div>
    );
};

export default Forecast;
