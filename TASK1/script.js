var input = document.getElementsByClassName("inside")[0];
var add = document.getElementsByClassName("integrate")[0];
var tasks = document.getElementsByClassName("todo")[0];

function addToList() {
  var item = document.createElement("DIV");
  item.innerHTML = '<i class="fas fa-check-circle"></i> ' + input.value;
  item.classList.add("element");
  tasks.appendChild(item);
  input.value = "";

  item.addEventListener("click", function () {
    this.remove();
  });
}

add.addEventListener("click", addToList);
