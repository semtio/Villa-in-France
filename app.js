// Дата заезда
document.addEventListener('DOMContentLoaded', function () {
    var arrival = document.getElementById('arrival');
    var today = new Date();

    // Форматирование даты до YYYY-MM-DD
    var day = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2); // Месяц начинается с 0
    var formattedDate = today.getFullYear() + "-" + month + "-" + day;

    arrival.value = formattedDate;
});