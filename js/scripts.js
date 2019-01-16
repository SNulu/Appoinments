function details(a, b, c, d, e) {
  return a + b + c + d + e;
}




$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();

    var name = $("#name-input").val();
    var apptDate = $("#appt-date-input").val();
    var startTime = $("#start-time-input").val();
    var endTime = $("#end-time-input").val();
    var apptDesc = $("#appt-desc-input").val();
    var result = details(name, apptDate, startTime, endTime, apptDesc)


    $("#output").show();



  });
});
