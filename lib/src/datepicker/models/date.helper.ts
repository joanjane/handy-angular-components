
export class DateHelper {
    /**
     * Format date to 'yyyy-MM-dd' format
     * @param day
     */
    static formatIsoDate(day: Date | string): string {
        var d = this.ensureDateObject(day);

        const monthNum = d.getMonth() + 1;
        return `${d.getFullYear()}-${monthNum < 10 ? '0' : ''}${monthNum}-${d.getDate() < 10 ? '0' : ''}${d.getDate()}`
    }

    /**
     * Verify if both dates are the same day
     * @param day1 
     * @param day2 
     */
    static areDatesEqual(day1: Date | string, day2: Date | string): boolean {
        return day1 && day2 && this.formatIsoDate(day1) === this.formatIsoDate(day2);
    }

    /**
     * Checks if candidate is in range between startRange and endRange including both limits
     * @param candidate 
     * @param startRange 
     * @param endRange 
     */
    static isInRange(candidate: Date | string, startRange: Date | string, endRange: Date | string): boolean {
        if (!candidate || !startRange || !endRange) return false;

        const candidateFormatted = this.formatIsoDate(candidate);
        return candidateFormatted >= this.formatIsoDate(startRange) && candidateFormatted <= this.formatIsoDate(endRange);
    }

    /**
     * Checks if day1 is greater than day 2
     * @param day1 
     * @param day2 
     */
    static isGreater(day1: Date | string, day2: Date | string): boolean {
        return day1 && day2 && this.formatIsoDate(day1) > this.formatIsoDate(day2);
    }

    /**
     * Checks if day1 is greater or equal than day 2
     * @param day1 
     * @param day2 
     */
    static isGreaterOrEqual(day1: Date | string, day2: Date | string): boolean {
        return day1 && day2 && this.formatIsoDate(day1) >= this.formatIsoDate(day2);
    }

    /**
     * Get today date at 00:00h
     */
    static today(): Date {
        const today = new Date();
        this.resetTime(today);
        return today;
    }

    /**
     * Resets time part from Date object to 00:00:00.000h
     */
    static resetTime(date: Date | string) {
        if(typeof date === 'string') {
            date = this.formatIsoDate(date);
            return;
        }

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }

    static ensureDateObject(date: Date | string): Date {
        return typeof date === 'string' ? new Date(date) : date;
    }
}