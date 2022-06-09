// Add new items to the list:
function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //Cross out an item:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //Add the delete button:
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }

  //Reorder the items:
  $("#list").sortable();
}
