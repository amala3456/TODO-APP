
function fetchAndDisplayTodos() {
    var tableBody = document.getElementById("todo-table-body");
  
    // Clear existing table rows
    tableBody.innerHTML = "";
  var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var todos = JSON.parse(xhr.responseText);
        var completedTaskCount = 0;
  
        todos.forEach(function (todo) {
          var row = document.createElement("tr");
          row.innerHTML =
            "<td>" +
            todo.title +
            "</td>" +
            "<td><input type='checkbox'></td>";
  
          tableBody.appendChild(row);
  
          var checkbox = row.querySelector("input[type='checkbox']");
          checkbox.addEventListener("change", function(){
            if (checkbox.checked) {
              completedTaskCount++;
            } else {
              completedTaskCount--;
            }
  
            checkbox.disabled = true;
  
            if (completedTaskCount % 5 === 0) {
              alert(`Congrats. ${completedTaskCount} Tasks have been Successfully Completed`);
            }
          });
        });
      } else {
        console.error("Failed to fetch todos. Status code: " + xhr.status);
      }
    };
    xhr.send();
  }
  
  window.onload = fetchAndDisplayTodos;