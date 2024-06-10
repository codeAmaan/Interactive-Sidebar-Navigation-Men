// let hamburger = document.querySelector(".menu");
// let sidebar = document.querySelector(".sidebar");
// let itemList = document.querySelector(".item-list");
// let cross = document.querySelector("#cross");
// let bars = document.querySelector("#bars");
// let desc = document.querySelectorAll(".desc");
// let item = document.querySelectorAll(".item");
// let svg = document.querySelectorAll(".svg");

// hamburger.addEventListener("click", () => {
//   if (sidebar.style.width === "180px") {
//     // Close sidebar
//     sidebar.style.width = "60px";
//     bars.style.display = "block";
//     cross.style.display = "none";
//     hamburger.style.justifyContent = "center";
//     itemList.style.alignItems = "center";
//     itemList.style.paddingLeft = "0";

//     // Hide Description
//     for (i = 0; i < desc.length; i++) {
//       desc[i].style.display = "none";
//     }

//   }
//   else {
//     // Open sidebar
//     sidebar.style.width = "180px";
//     bars.style.display = "none";
//     cross.style.display = "block";
//     cross.style.paddingLeft = "1rem";
//     hamburger.style.justifyContent = "start";
//     itemList.style.alignItems = "flex-start";
//     itemList.style.paddingLeft = "14px";

//     // Show Description
//     for (i = 0; i < desc.length; i++) {
//       desc[i].style.display = "block";
//     }
//   }
// });

// ---------    Jquery code     ----------

//  Show Sidebar
$(document).ready(function () {
  $("#bars").click(function () {
    
    $(".sidebar").width(200)
    $("#bars").hide();
    $("#cross").show();
    $(".menu").css("justify-content", "start").css("padding-left", "1rem");
    $(".item-list")
      .css("align-items", "flex-start")
      .css("padding-left", "13px");
    $(".desc").css("display", "block");
  });

  //  Close Sidebar
  $("#cross").click(function () {
    $(".sidebar").width(60);
    $("#bars").show();
    $("#cross").hide();
    $(".desc").css("display", "none");
  });

});
