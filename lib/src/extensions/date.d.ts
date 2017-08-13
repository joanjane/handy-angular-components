export {}

declare global {
    interface Date {
        /**
         * Return yyyy-MM-dd formatted string
         */
        formatDatePart(): string;

        /**
         * This method removes the timezone difference with UTC to fix problems when serializing date with toJSON()
         * which changes the date part.
         */
        asUTC(): Date;
    }
}