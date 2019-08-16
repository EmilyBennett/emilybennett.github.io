$(document).ready(function(){



  $("#calculate").on('click', function () {; //get concent div
    var content = $('#my-contenteditable-div').html(); //get content

    var result_0_1 = (parseFloat(content)/0.1) - 1
    $("#result_0_1").empty();
    $("#result_0_1").append(result_0_1)

    var result_0_01 = (parseFloat(content)/0.01) - 1
    $("#result_0_01").empty();
    $("#result_0_01").append(result_0_01)

    var result_0_1_extra = 10*((parseFloat(content)/0.1) - 1)
    $("#result_0_1_extra").empty();
    $("#result_0_1_extra").append(result_0_1_extra)

    var result_0_01_extra = 10*((parseFloat(content)/0.01) - 1)
    $("#result_0_01_extra").empty();
    $("#result_0_01_extra").append(result_0_01_extra)

    var result_0_1_8ml = (0.1/(parseFloat(content))*8)
    $("#result_0_1_8ml").empty();
    $("#result_0_1_8ml").append(result_0_1_8ml)

    var result_0_1_8ml_ul = (0.1/(parseFloat(content))*8000)
    $("#result_0_1_8ml_ul").empty();
    $("#result_0_1_8ml_ul").append(result_0_1_8ml_ul)

    var result_0_01_8ml = (0.01/(parseFloat(content))*8)
    $("#result_0_01_8ml").empty();
    $("#result_0_01_8ml").append(result_0_01_8ml)

    var result_0_01_8ml_ul = (0.01/(parseFloat(content))*8000)
    $("#result_0_01_8ml_ul").empty();
    $("#result_0_01_8ml_ul").append(result_0_01_8ml_ul)


  });


 });
