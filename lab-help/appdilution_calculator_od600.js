$(document).ready(function(){



  $("#calculate").on('click', function () {; //get concent div
    var content = $('#my-contenteditable-div').html(); //get content

    var result_0_1 = (parseFloat(content)/0.1) - 1
    var result_0_01 = (parseFloat(content)/0.01) - 1
    var result_0_1_extra = 10*((parseFloat(content)/0.1) - 1)
    var result_0_01_extra = 10*((parseFloat(content)/0.01) - 1)
    var result_0_1_8ml = (0.1/(parseFloat(content))*8)
    var result_0_1_8ml_ul = (0.1/(parseFloat(content))*8000)
    var result_0_01_8ml = (0.01/(parseFloat(content))*8)
    var result_0_01_8ml_ul = (0.01/(parseFloat(content))*8000)

    assign($("#result_0_1"),result_0_1)
    assign($("#result_0_01"),result_0_01)
    assign($("#result_0_1_extra"),result_0_1_extra)
    assign($("#result_0_01_extra"),result_0_01_extra)
    assign($("#result_0_1_8ml"),result_0_1_8ml)
    assign($("#result_0_1_8ml_ul"),result_0_1_8ml_ul)
    assign($("#result_0_01_8ml"),result_0_01_8ml)
    assign($("#result_0_01_8ml"),result_0_01_8ml)
    assign($("#result_0_01_8ml_ul"),result_0_01_8ml_ul)

    function assign(object,calculation) {
      object.empty();
      object.append(round(calculation,2))
    }

    function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

  });


 });
