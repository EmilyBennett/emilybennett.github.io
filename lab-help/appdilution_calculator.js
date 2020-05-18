$(document).ready(function(){



  $("#calculate").on('click', function () {; //get concent div
    var content = $('#my-contenteditable-div').html(); //get content

    var result_10 = (parseFloat(content)/10) - 1
    $("#result_10").empty();
    $("#result_10").append(result_10)

    var result_100 = (parseFloat(content)/100) - 1
    $("#result_100").empty();
    $("#result_100").append(result_100)

    var result_10_extra = 10*((parseFloat(content)/10) - 1)
    $("#result_10_extra").empty();
    $("#result_10_extra").append(result_10_extra)

    var result_100_extra = 10*((parseFloat(content)/100) - 1)
    $("#result_100_extra").empty();
    $("#result_100_extra").append(result_100_extra)

  });


 });
