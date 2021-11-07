var bedroom_data_array = JSON.parse(localStorage.getItem("bedroom_section"));
display(bedroom_data_array);
function display(array) {
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  array.map(function (item) {
    
    var pc = document.getElementById("product_container");
    var div = document.createElement("div");
    pc.append(div);
    div.innerHTML = `<img src=${item.url}>`;
    var h3 = document.createElement("h3");
    h3.textContent = item.p_name;
    div.append(h3);
    var h4 = document.createElement("h4");
    h4.textContent = "M.R.P. ₹ " + item.price;
    div.append(h4);
    var btn = document.createElement("button");
    btn.textContent = "AddToCart";
    div.append(btn);
    btn.addEventListener("click", function () {
      var cartArray = JSON.parse(localStorage.getItem("cartItem"))||[];
      cartArray.push(item.sku);
      localStorage.setItem("cartItem", JSON.stringify(cartArray));
    });

    //  div.textContent=item.p_name;
    // div.textContent=item.price;
  });
}

var sorting = document.getElementById("sortingBox");
sorting.addEventListener("change", sort_by_price);
function sort_by_price(e) {
  var arr = [];
  if (e.target.value == "hightolow") {
    arr = bedroom_data_array.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (e.target.value == "lowtohigh") {
    arr = bedroom_data_array.sort(function (a, b) {
      return a.price - b.price;
    });
  } else {
  }
  display(arr);
}
