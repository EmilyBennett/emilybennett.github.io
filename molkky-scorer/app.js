$(document).ready(function(){

  var titles = ['1 Player', '2 Player', '3 Player', '4 Player', '5 Player','6 Player'];
  var state = 0;

  for (var i = 0; i < 6; i++) {
    $("#player-display").append(`<img src="playerdoll.svg" alt="Player" data-index="${i}" class="image-container" width=50px>`);
  }

  $players = $("#player-display").children(); //assign all children

  //Setup Choice
  hoverOn();
  $("#player-display").addClass('players-choosing'); //add player choosing classes to all

  $players.on('click', function () {
    //mark all objects
    var index = $(this).attr('data-index');
    markplayersAsActive(index);


    if (($("#player-display").hasClass('players-choosing'))) {
      $("#player-display").removeClass('players-choosing');
      console.log("added players selected")
      $("#player-display").addClass('players-selected');
      hoverOff()
      addTable(index);
    } else if (($("#player-display").hasClass('players-selected'))) {
      $("#player-display").removeClass('players-selected');
      console.log("added players choosing")
      $("#player-display").addClass('players-choosing');
      hoverOn()
      removeTable();
    } else {
      console.log("couldn't switch")
    }




  });

  function hoverOn() {
    $players.on('mouseover', function () {
      var index = $(this).attr('data-index');
      markplayersAsActive(index);
    });

    $players.on('mouseout', function () {
      unmarkActive();
    });
  }

  function hoverOff() {
    $players.off('mouseover');
    $players.off('mouseout');
  }


  function markplayersAsActive(index) {
    for (var i = 0; i <= index; i++) {
      $($players.get(i)).attr("src","playerdollfilled.svg");
    }
  }

  function unmarkActive() {
    for (var i = 0; i <= 6; i++) {
      $($players.get(i)).attr("src","playerdoll.svg");
    }
  }

  function addTable(index) {
    for (var i = 0; i <= index; i++) {
      $("#player-table").append(`<tr><td class="pt-3-half" contenteditable="true">Player</td></tr>`);
    }
  }

  function removeTable(index) {
    $("#player-table").empty();
  }

});




const $tableID = $('#table');
const $BTN = $('#export-btn');
const $EXPORT = $('#export');

const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>
</tr>`;

 $('.table-add').on('click', 'i', () => {

   const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

   if ($tableID.find('tbody tr').length === 0) {

     $('tbody').append(newTr);
   }

   $tableID.find('table').append($clone);
 });

 $tableID.on('click', '.table-remove', function () {

   $(this).parents('tr').detach();
 });

 $tableID.on('click', '.table-up', function () {

   const $row = $(this).parents('tr');

   if ($row.index() === 1) {
     return;
   }

   $row.prev().before($row.get(0));
 });

 $tableID.on('click', '.table-down', function () {

   const $row = $(this).parents('tr');
   $row.next().after($row.get(0));
 });

 // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {

     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });
