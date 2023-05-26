export function redundantIsoString(date: Date) {
    return date.toISOString();
}

console.log(redundantIsoString(new Date()));

