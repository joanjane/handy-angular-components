Date.prototype.formatDatePart = function() {
    return this.getFullYear() + '-' +
        ((this.getMonth() + 1 < 10) ? '0' : '') + (this.getMonth() + 1) + '-' +
        (this.getDate() < 10 ? '0' : '') + this.getDate();
};

Date.prototype.asUTC = function() {
    var date = new Date(this);
    date.setHours(this.getHours() - (this.getTimezoneOffset() / 60));
    return date;
};