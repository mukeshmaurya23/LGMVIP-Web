// function testVariable() {
//   var strText = document.getElementById("textone").value;

//   var result = strText;
//   document.getElementById("spanResult").textContent = result;
// }

function function1() {
  document.getElementById("span").innerHTML = "";
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    document.getElementById("span").innerHTML = "Please enter the field";
  } else {
    let result = document.getElementById("spanResult");
    let pos = result.firstElementChild;
    let a = document.createElement("a");
    a.textContent = "x";
    a.href = "javascript:void(0)";
    a.className = "remove";
    li.appendChild(a);
    if (pos == null) {
      result.appendChild(li);
    } else {
      result.insertBefore(li, pos);
    }
  }
  document.getElementById("myInput").value = "";
}
let btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
  let result = document.getElementById("spanResult");
  let li = e.target.parentNode;
  result.removeChild(li);
});
