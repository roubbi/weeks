

var menuData = {
  menu: [
    { name: "Google", link: "http://google.com" },
    { name: "Facebook", link: "http://facebook.com" },
    { name: "Instagram", link: "http://nstagram.com" },
    { name: "Twitter", link: "http://twitter.com" },
  ]
};

var source = $('#menu-template').html();
var template = Handlebars.compile(source);
var newHTML = template(menuData);

// append our new html to the page
$('.menu').append(newHTML);