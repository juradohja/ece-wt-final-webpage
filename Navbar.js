$(document).ready(function() {

  $.get("https://jsonplaceholder.typicode.com/comments", function(data, status){
    var tableData = "";
    for(var i=0; i<100; i++){
      var comment = data[i];
      tableData += '<tr>' +
          '<td>' + comment.name + '</td>' +
          '<td>' + comment.email + '</td>' +
          '<td>' + comment.body + '</td>' +
          '</tr>';
    }
    $("#commentsTable").append(tableData);
  });

  $.get("https://jsonplaceholder.typicode.com/photos", function(data, status){
    var tableData = "";
    for(var i=0; i<99; i++){
      var photo = data[i];
      tableData += '<div>' +
          '<img src="' + photo.thumbnailUrl +'">' +
          '<h5>' + photo.title + '</h5>' +
          '</div>'
    }
    $("#photosTable").append(tableData);
  });

  $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
    var tableData = "";
    data.forEach(function(post){
        tableData += '<tr>' +
            '<td>' + post.title + '</td>' +
            '<td>' + post.body + '</td>' +
            '</tr>';
    });
    $("#postsTable").append(tableData);
  });

  $.get("https://jsonplaceholder.typicode.com/users", function(data, status){
    var tableData = "";
    data.forEach(function(user){
        tableData += '<tr>' +
            '<td>' + user.username + '</td>' +
            '<td>' + user.name + '</td>' +
            '<td>' + user.email + '</td>' +
            '<td>' + user.phone + '</td>' +
            '<td>' + user.website + '</td>' +
            '</tr>';
    });
    $("#usersTable").append(tableData);
  });

});

function openMenu(evt, menu) {
  var i, tabs, tablinks;
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menu).style.display = "block";
  evt.currentTarget.className += " active";
}