define("app",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.App=function e(){t(this,e)}}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["exports","./environment"],function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){e.use.standardConfiguration().feature("resources"),r.default.debug&&e.use.developmentLogging(),r.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=s;var r=n(t);Promise.config({warnings:{wForgottenReturn:!1}})}),define("resources/index",["exports"],function(e){"use strict";function t(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=t}),define("user/user-api",["exports","aurelia-dependency-injection","aurelia-fetch-client"],function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.UserAPI=void 0;var r,i;e.UserAPI=(r=(0,t.inject)(n.HttpClient),r(i=function(){function e(t){s(this,e),this.httpClient=t,this.configurehttpRouter()}return e.prototype.configurehttpRouter=function(){this.httpClient.configure(function(e){e.useStandardConfiguration().withBaseUrl("https://randomuser.me/api/")})},e.prototype.getAllUsers=function(){var e=this;return new Promise(function(t){e.httpClient.fetch("?results=50").then(function(e){return t(e.json())})})},e}())||i)}),define("user/user-list",["exports","aurelia-dependency-injection","./user-api"],function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.UserList=void 0;var r,i;e.UserList=(r=(0,t.inject)(n.UserAPI),r(i=function(){function e(t){s(this,e),this.userApi=t,this.users=null}return e.prototype.get=function(){var e=this;this.userApi.getAllUsers().then(function(t){return e.users=t.results})},e.prototype.created=function(){this.get()},e}())||i)}),define("text!app.html",["module"],function(e){e.exports='<template><require from="./styles.css"></require><require from="./user/user-list"></require><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><a class="navbar-brand text-center" href="#"><span>Users List API</span></a></div></nav><div class="container"><user-list class="col-md-12"></user-list></div><loading-indicator></loading-indicator></template>'}),define("text!styles.css",["module"],function(e){e.exports="\nbody{\n    margin-top:60px;\n    width: 100%;\n}\n.navbar-header {\n    float: left;\n    padding: 15px;\n    text-align: center;\n    width: 100%;\n}\n.navbar-brand {float:none;}\n.span-block{\n    display: block !important;\n}\n.see-more-btn{\n    margin-top:5px;\n    margin-bottom: 25px;\n    border-radius:60px;\n}"}),define("text!user/user-item.html",["module"],function(e){e.exports='<template bindable="curUser"><h4 class="list-group-item-heading">${user.name.first} ${user.name.last}</h4><p class="list-group-item-text">${user.email}</p><img class="img-circle" src.bind="user.picture.medium"></template>'}),define("text!user/user-list.html",["module"],function(e){e.exports='<template><require from="./user-item.html"></require><div class="user-list" if.bind="users != null"><div repeat.for="user of users" class="col-md-3"><img class="img-circle img-responsive" src.bind="user.picture.large"><h4 class="text-primary text-muted">${user.name.first} ${user.name.last}</h4><p class="list-group-item-text"><span class="span-block">${user.email} </span><span class="span-block">${user.cell} </span><span class="span-block text-capitalize">${user.location.city}</span></p><a class="btn btn-primary btn-sm see-more-btn" route-href="route: user-details; params.bind: {id:user.name.first}">See more</a></div></div></template>'});