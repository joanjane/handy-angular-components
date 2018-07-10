export class DateUtils {
  static formatDatePart(date: Date): string {
    return date.getFullYear() + '-' +
      ((date.getMonth() + 1 < 10) ? '0' : '') + (date.getMonth() + 1) + '-' +
      (date.getDate() < 10 ? '0' : '') + date.getDate();
  }

  static asUTC(date: Date): Date {
    const newDate = new Date(date);
    newDate.setHours(date.getHours() - (date.getTimezoneOffset() / 60));
    return newDate;
  }
}