// Search conditional check
function openSideMenu() {
    //use a class, since your ID gets mangled
    $("#mySidebar").addClass("active");
    $(".url p").addClass("cross");
    $(".url .show-cross").addClass("cross"); //add the class to the clicked element
};

function closeSideMenu() {
    $("#mySidebar").removeClass("active");
    $(".url p").removeClass("cross");
    $(".url .show-cross").removeClass("cross");
}


function searchClicked() {
    $("#search-input").toggle();
    $("#nav-items").toggle();
}

function addClicked() {
    $("#add-popup").toggle();
}

function profileClicked() {
    $("#profile").toggle();
}

function fontSettingsClicked() {
    $("#fontsettings").toggle();
}

function myfeedSelected(item) {
    var id1 = "#active-options-" + item;
    var id2 = "#active-options-noline-" + item;
    var id3 = "#active-option-" + item;
    $(id1).show();
    $(id2).hide();
    $(id3).show();
}

function myfeedUnSelected(item) {
    var id1 = "#active-options-" + item;
    var id2 = "#active-options-noline-" + item;
    var id3 = "#active-option-" + item;
    $(id1).hide();
    $(id2).show();
    $(id3).hide();
}

function checkboxClicked(event) {
    var x = document.getElementById("switch");
    var checkedValue = $('.checkbox:checked').val();
    if (checkedValue) {
        $("#original").css("color", "#3badd4fa");
        $("#summary").css("color", "#8d9396");
    } else {
        $("#summary").css("color", "#3badd4fa");
        $("#original").css("color", "#8d9396");
    }
}

function tagHover() {
    $("#tag-options").show();
}

function tagUnHover() {
    $("#tag-options").hide();
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}