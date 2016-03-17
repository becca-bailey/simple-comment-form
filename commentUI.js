function commentUI() {

}

commentUI.prototype.displayLength = function(textLocation, feedbackLocation, limit) {
  var remainder = limit - $(textLocation).val().length;
  if (remainder < 20) {
    $(feedbackLocation).html(remainder + " characters remaining");
    if (remainder < 0) {
      $(feedbackLocation).css("color", "red");
    }
    else {
      $(feedbackLocation).css("color", "black");
    }
  }
  else {
    $(feedbackLocation).empty();
  }
};

commentUI.prototype.displayNameAlert = function(nameLocation, alertLocation) {
  $(nameLocation).css("border", "1px solid red");
  $(alertLocation).append("<p>You must include a name</p>");
};

commentUI.prototype.displayContentAlert = function(contentLocation, alertLocation, limit) {
  $(contentLocation).css("border", "1px solid red");
  $(alertLocation).append("<p>Content must be between 0 and " + limit + " characters.</p>");
};

commentUI.prototype.clearForm = function(nameLocation, contentLocation, alertLocation) {
  $(alertLocation).empty();
  $(nameLocation).css("border", "2px inset");
  $(contentLocation).css("border", "1px solid gray");
};

commentUI.prototype.emptyFields = function(nameLocation, contentLocation) {
  $(nameLocation).val("");
  $(contentLocation).val("");
};
