

let inputText = document.getElementById('inputText');
let listContainer = document.getElementById('listContainer');

function addList(){
if(inputText.value===''){
alert("empty")
}else{
let listContainer = document.getElementById('listContainer');
let li = document.createElement("li");

listContainer.appendChild(li).innerHTML= inputText.value;

let btn = document.createElement("button");
  btn.textContent = "✓";
  btn.className = "btn";
  btn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  li.appendChild(btn);

  let btn2 = document.createElement("button");
  btn2.className = "btn2";
  btn2.textContent = "X";
  btn2.addEventListener("click", function (e) {
    deleteTask(e);
  });
  li.appendChild(btn2);


  if (listContainer.firstChild) {
    listContainer.insertBefore(li, listContainer.firstChild);
  } else {
    listContainer.appendChild(li);
  }

}

}
