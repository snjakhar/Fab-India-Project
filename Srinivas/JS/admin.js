document
    .getElementById("bedroom_form")
    .addEventListener("submit", bedroom_data);

var bedroom_data_array =
    JSON.parse(localStorage.getItem("bedroom_section")) || [];

function bedroom_data(e) {
    e.preventDefault();
    var form_id = document.getElementById("bedroom_form");
    var cat = form_id.bedroom_select.value;

    var sku_id = document.getElementById("b_sku");
    var sku = sku_id.value;

    var p_name_id = document.getElementById("b_p_name");
    var p_name = p_name_id.value;

    var price_id = document.getElementById("b_price");
    var price = price_id.value;

    var color_id = document.getElementById("b_color");
    var color = color_id.value;

    var url_id = document.getElementById("b_url");
    var url = url_id.value;

    var size_id = document.getElementById("b_size");
    var size = size_id.value;

    var other_detail_id = document.getElementById("b_other_detail");
    var other_detail = other_detail_id.value;

    var data = {
        cat: cat,
        sku: sku,
        p_name: p_name,
        price: price,
        color: color,
        url: url,
        size: size,
        other_detail: other_detail,
    };
    bedroom_data_array.push(data);
    localStorage.setItem("bedroom_section", JSON.stringify(bedroom_data_array));
}

//Living Section

document.getElementById("living_form").addEventListener("submit", living_data);

var living_data_array =
    JSON.parse(localStorage.getItem("living_section")) || [];

function living_data(e) {
    e.preventDefault();
    var form_id = document.getElementById("living_form");
    var cat = form_id.living_select.value;

    var sku_id = document.getElementById("l_sku");
    var sku = sku_id.value;

    var p_name_id = document.getElementById("l_p_name");
    var p_name = p_name_id.value;

    var price_id = document.getElementById("l_price");
    var price = price_id.value;

    var color_id = document.getElementById("l_color");
    var price = color_id.value;

    var url_id = document.getElementById("l_url");
    var price = url_id.value;

    var size_id = document.getElementById("l_size");
    var size = size_id.value;

    var other_detail_id = document.getElementById("l_other_detail");
    var other_detail = other_detail_id.value;

    var data = {
        cat: cat,
        sku: sku,
        p_name: p_name,
        price: price,
        color: color,
        size: size,
        other_detail: other_detail,
    };
    living_data_array.push(data);
    localStorage.setItem("living_section", JSON.stringify(living_data_array));
}

//Study Section

document.getElementById("study_form").addEventListener("submit", study_data);

var study_data_array = JSON.parse(localStorage.getItem("study_section")) || [];

function study_data(e) {
    e.preventDefault();
    var form_id = document.getElementById("study_form");
    var cat = form_id.study_select.value;

    var sku_id = document.getElementById("s_sku");
    var sku = sku_id.value;

    var p_name_id = document.getElementById("s_p_name");
    var p_name = p_name_id.value;

    var price_id = document.getElementById("s_price");
    var price = price_id.value;

    var color_id = document.getElementById("s_color");
    var color = color_id.value;

    var url_id = document.getElementById("s_url");
    var price = url_id.value;

    var size_id = document.getElementById("s_size");
    var size = size_id.value;

    var other_detail_id = document.getElementById("s_other_detail");
    var other_detail = other_detail_id.value;

    var data = {
        cat: cat,
        sku: sku,
        p_name: p_name,
        price: price,
        color: color,
        size: size,
        other_detail: other_detail,
    };
    study_data_array.push(data);
    localStorage.setItem("study_section", JSON.stringify(study_data_array));
}