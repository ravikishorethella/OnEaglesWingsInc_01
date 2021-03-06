$(document).ready(function() {
  // mobile hamburger
  $(".mobile a").click(function(e) {
    $(this)
      .parent()
      .parent()
      .toggleClass("mopen");
    $(this).html($(this).html() == "Close X" ? "Menu" : "Close X");
    e.preventDefault();
  });

  // code for the user form
  $.support.placeholder = (function() {
    var i = document.createElement("input");
    return "placeholder" in i;
  })();

  // Hide labels by default if placeholders are supported
  if ($.support.placeholder) {
    $(".form-label").each(function() {
      $(this).addClass("js-hide-label");
    });

    // Code for adding/removing classes here
    $(".form-group")
      .find("input, textarea")
      .on("keyup blur focus", function(e) {
        // Cache our selectors
        var $this = $(this),
          $parent = $this.parent().find("label");

        if (e.type == "keyup") {
          if ($this.val() == "") {
            $parent.addClass("js-hide-label");
          } else {
            $parent.removeClass("js-hide-label");
          }
        } else if (e.type == "blur") {
          if ($this.val() == "") {
            $parent.addClass("js-hide-label");
          } else {
            $parent
              .removeClass("js-hide-label")
              .addClass("js-unhighlight-label");
          }
        } else if (e.type == "focus") {
          if ($this.val() !== "") {
            $parent.removeClass("js-unhighlight-label");
          }
        }
      });
  }

});

// code for the stories

function myFunction(a,b,c){
  readToggle(a,b,c);
}

function readToggle(dot, more, btnId){
  var dots = document.getElementById(dot);
  var moreText = document.getElementById(more);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

