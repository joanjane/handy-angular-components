
export class DateHelper {
    /**
     * Format date to 'yyyy-MM-dd' format
     * @param day
     */
    static formatIsoDate(day: Date): string {
        const monthNum = day.getMonth() +1;
        return `${day.getFullYear()}-${monthNum < 10? '0' : ''}${monthNum}-${day.getDate() < 10? '0' : ''}${day.getDate()}`
    }

    /**
     * Verify if both dates are the same day
     * @param day1 
     * @param day2 
     */
    static areDatesEqual(day1: Date, day2: Date): boolean {
        return day1 && day2 && this.formatIsoDate(day1) === this.formatIsoDate(day2);
    }

    /**
     * Checks if candidate is in range between startRange and endRange including both limits
     * @param candidate 
     * @param startRange 
     * @param endRange 
     */
    static isInRange(candidate: Date, startRange: Date, endRange: Date): boolean {
        if(!candidate || !startRange || !endRange) return false;

        const candidateFormatted = this.formatIsoDate(candidate);
        return candidateFormatted >= this.formatIsoDate(startRange) && candidateFormatted <= this.formatIsoDate(endRange);
    }

    /**
     * Checks if day1 is greater than day 2
     * @param day1 
     * @param day2 
     */
    static isGreater(day1: Date, day2: Date): boolean {
        return day1 && day2 && this.formatIsoDate(day1) > this.formatIsoDate(day2);
    }
}