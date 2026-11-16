export const getTime = (time: number, timezone: number) => {
    const date = new Date((time + timezone) * 1000);

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
};

export const getDayName = (time?: number) => {
    let now: Date;

    if (time) {
        now = new Date((time) * 1000);
    } else {
        now = new Date();
    }

    return now.toLocaleDateString('en-US', { weekday: 'long' });
};

export const getFullDate = (time?: number) => {
    let now: Date;

    if (time) {
        now = new Date((time) * 1000);
    } else {
        now = new Date();
    }

    return now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
