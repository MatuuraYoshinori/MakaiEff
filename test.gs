function myFunction() {
 var date = new Date();
// 今日の日付を表示
Logger.log(date);
date.setDate(date.getDate()+ 1)
Logger.log(date);
Logger.log(Utilities.formatDate( date, 'Asia/Tokyo', 'yyyyMMdd: hhmmss'));

  var day = new Date();
  var endTime = new Date();

      var endDate = new Date();
        endDate.setDate(endTime.getDate() + 1)
        endDate.setHours(endTime.getHours())
        endDate.setMinutes(endTime.getMinutes());


    Logger.log(endDate.getHours());

}
