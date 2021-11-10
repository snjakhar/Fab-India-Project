var beds = [
  {
    sku: "10677218BD",
    name: "Bunai Single Bed",
    mrp: 34900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5340541684886398677/products/10677218BD.f.210421.jpg&height=475&width=475",
    size: "99cm x 2.06m x 1m",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },

  {
    sku: "10677218BD",
    name: "Chevron Queen Box Storage Bed",
    mrp: 69900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3274601796757816822/products/10677221BD.f.210421.jpg&height=475&width=475",
    size: "99cm x 2.06m x 1m",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },
  {
    sku: "10678116BD",
    name: "Chevron Queen Hydraulic Bed",
    mrp: 84900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6954526361385576417/products/10678116BD.f.210421.jpg&height=475&width=475",
    size: "1.6m x 2.12m x 98cm",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },
  {
    sku: "10677218BD",
    name: "Bunai Single Bed",
    mrp: 34900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5340541684886398677/products/10677218BD.f.210421.jpg&height=475&width=475",
    size: "99cm x 2.06m x 1m",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },

  {
    sku: "10677218BD",
    name: "Chevron Queen Box Storage Bed",
    mrp: 69900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3274601796757816822/products/10677221BD.f.210421.jpg&height=475&width=475",
    size: "99cm x 2.06m x 1m",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },
  {
    sku: "10678116BD",
    name: "Chevron Queen Hydraulic Bed",
    mrp: 84900,
    url: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6954526361385576417/products/10678116BD.f.210421.jpg&height=475&width=475",
    size: "1.6m x 2.12m x 98cm",
    detail: ["Queen Size Bed", "Seating Height-39cms"],
  },
];

var cartButton = document.getElementById("cartButton");
var items = 0;
//var bedroom_data_array = JSON.parse(localStorage.getItem("bedroom_section"));
display(beds);
function display(array) {
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  array.map(function (item) {
    var pc = document.getElementById("product_container");
    var div = document.createElement("div");
    pc.append(div);

    div.addEventListener("click", function () {
      openBox(item);
    });

    div.innerHTML = `<img class="image" src=${item.url}>`;
    var h3 = document.createElement("h3");
    h3.textContent = item.p_name;
    div.append(h3);
    var h4 = document.createElement("h4");
    h4.innerHTML = "M.R.P. ₹ " + item.mrp;
    div.append(h4);
    var btn = document.createElement("button");
    btn.textContent = "AddToCart";
    div.append(btn);
    btn.addEventListener("click", function () {
      cartButton.textContent = "-" + ++items;
      var cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
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
    arr = beds.sort(function (a, b) {
      return b.mrp - a.mrp;
    });
  } else if (e.target.value == "lowtohigh") {
    arr = beds.sort(function (a, b) {
      return a.mrp - b.mrp;
    });
  } else {
  }
  display(arr);
}

cartButton.addEventListener("click", function () {
  window.location.href = "cart.html";
});

function hideBox() {
  document.querySelector(".modalBox").style.display = "none";
  document.querySelector(".blackBox").style.display = "none";
}
function openBox(item) {
  var modal = document.querySelector(".modalBox");
  modal.style.display = "block";
  document.getElementById("modelImageBox").innerHTML = `<img src=${item.url}>`;
  document.querySelector(".pName").innerHTML = item.name;
  document.querySelector(".pSku").textContent = "SKU:"+item.sku;
  document.querySelector(".pSize").textContent = item.size;
  document.querySelector(".pMrp").textContent = "M.R.P. ₹"+item.mrp;

  for (var i = 0; i < item.detail.length; i++) {
    var li = document.createElement("li");
    li.textContent = item.detail[i];
    document.querySelector(".list").append(li);
  }
  var coun = 1;
  document.querySelector(".dec").addEventListener("click", function () {
    if (coun > 9) {
      alert("Not more then 10 item allowed per user");
      document.querySelector(".dec").removeEventListener();
    }
    document.getElementById("show").textContent = ++coun;
    var price = item.mrp * coun;
    document.querySelector(".pMrp").textContent = "M.R.P. ₹"+price;
  });

  document.querySelector(".inc").addEventListener("click", function () {
    if (coun < 2) {
      document.querySelector(".inc").removeEventListener();
    }

    document.getElementById("show").textContent = --coun;
    var price = item.mrp * coun;
    document.querySelector(".pMrp").textContent = "M.R.P. ₹"+price;
  });

  document.querySelector(".blackBox").style.display = "block";
}
