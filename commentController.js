$(document).ready(function() {
  var ui = new commentUI();
  var limit = 200;

  $(this).on("keyup", "#comment-form textarea", function() {
    ui.displayLength("#comment-form textarea", "#character-count", limit);
  });

  $(this).on("submit", "#comment-form", function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var content = $("#content").val();
    ui.clearForm("#name", "#content", "#alerts");

    if (nameIsValid(name) && contentIsValid(content, limit)) {
      var comment = new Comment(name, content);
      $("#comments").append("<p>" + comment.content + "</p>" +
        "<p>Posted by " + comment.author + "</p>");
      ui.clearForm("#name", "#content", "#alerts");
      ui.emptyFields("#name", "#content");
    }

    if (!nameIsValid(name)) {
      console.log("name");
      ui.displayNameAlert("#name", "#alerts");
    }

    if (!contentIsValid(content, limit)) {
      console.log("content");
      ui.displayContentAlert("#content", "#alerts", limit);
    }
  });
});

var nameIsValid = function(name) {
  return(name.length > 0);
};

var contentIsValid = function(content, limit) {
  return(content.length <= limit && content.length > 0);
};
