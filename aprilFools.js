// 1. Install dotjs for Chrome: 
//  mac: https://github.com/defunkt/dotjs
//  ubuntu: https://github.com/glenbot/dotjs-ubuntu 
//  windows: https://github.com/p3lim/dotjs-win
// 2. Change the `cssURL` variable to point to your own customized stylesheet
// 3. Copy this file as `default.js` in the .js directory
// 4. ???
// 5. PROFIT



// CHANGE THIS:
var cssURL = "https://raw.github.com/christiangenco/aprilFools.css/master/aprilFools.css";




// only do this *on or after* April Fools 2013
if(new Date() > new Date(2013, 3, 1, 0, 0, 0, 0))

// alternative: only do this *on* April Fools day 2013
// var d = new Date();
// if(d.getFullYear() == 2013 && d.getMonth() == 3 && d.getDate() == 1)

{
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("type", "text/css");
  css.setAttribute("href", cssURL);
  document.getElementsByTagName("head")[0].appendChild(css);
}
