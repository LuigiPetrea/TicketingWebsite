window.onload = function() {
function calc(adults, children){ 
    return adults * 12 + children * 5;
}
if (adults < 0){
    adults = 0;
}
if(children < 0){
    children = 0;
}
  let btn = document.getElementById("buy");
  btn.onclick = function() {
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let price = calc(adults, children);
    alert(price);
  }
} 
