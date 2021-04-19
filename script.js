"use strict";

var options = [
  {
    text: "school 1",
    value: "school 1",
  },
  {
    text: "school 2",
    value: "school 2",
  },
  {
    text: "school 3",
    value: "school 3",
  },
];
var buton = document.getElementById("button");
var Name = document.getElementById("name");
var date = document.getElementById("date");
var school = document.getElementById("school");
var nationalId = document.getElementById("nationalId");
var editButton = document.getElementById("edit");
var deletButton = document.getElementById("delet");
var table = document.getElementById("TaBle");

var count = 1;

// add option to select
var school = document.getElementById("school");
for (var i = 0, l = options.length; i < l; i++) {
  var option = options[i];
  school.options.add(new Option(option.text, option.value));
}

// delete Row

function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  table.deleteRow(i);
}
// add Row
function insRow() {
  count += 1;
  if (Name.value.length < 4 || Name.value.length > 10) {
    alert("name should be betwwen 4 and 10");
  } else if (nationalId.value.length !== 4 || isNaN(nationalId.value)) {
    alert("national Id  shuld be 4 digit");
  } else if (date.value.length == 0) {
    alert("please insert birth date");
  } else {
    var new_row = table.rows[1].cloneNode(true);
    // get the total number of rows
    new_row.cells[0].innerHTML = count;
    new_row.cells[1].innerHTML = Name.value;
    new_row.cells[2].innerHTML = date.value;
    new_row.cells[3].innerHTML = school.value;
    new_row.cells[4].innerHTML = nationalId.value;

    // append the new row to the table
    table.appendChild(new_row);
  }
}
//edit row
function editRow(row) {
  // get the row will be editable
  var editRow = row.parentNode.parentNode;
  editRow.cells[1].contentEditable = true;
  editRow.cells[2].contentEditable = true;
  editRow.cells[3].contentEditable = true;
  editRow.cells[4].contentEditable = true;
}
// change header color
function changeColor(back, font) {
  console.log(back, font);
  var x, i;
  x = document.querySelectorAll(".header");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = back;
    x[i].style.color = font;
  }
}
// change body color
function changeCellColor(back, font) {
  console.log(back, font);
  var x, i;
  x = document.querySelectorAll(".cell");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = back;
    x[i].style.color = font;
  }
}
///////////////////////////////

function solveProblem(n, t) {
  var i;
  if (t == 10) {
    if (n == 1) {
      return -1;
    } else {
      for (i = 0; i < n - 1; i++) {
        return 1;
      }
      return 0;
    }
  } else {
    for (i = 0; i < n; i++) {
      return t;
    }
  }
  return 0;
}
console.log(solveProblem(3, 2));
