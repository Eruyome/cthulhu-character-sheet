!function(){"use strict";function a(a,t){a.otherwise("/"),t.html5Mode({enabled:!1,requireBase:!1}),t.hashPrefix("!")}function t(){FastClick.attach(document.body)}var e=angular.module("application",["ui.router","ngAnimate","foundation","foundation.dynamicRouting","foundation.dynamicRouting.animations"]).config(a).run(t);a.$inject=["$urlRouterProvider","$locationProvider"],e.controller("characterController",["$scope","$http","$timeout",function(a,t,e){function l(t){Object.keys(t).forEach(function(e,l){for(var n,c,i,r,u=t[e].length,o=0;u>=o;o++)try{if("undefined"!=typeof t[e][o].calc){n=t[e][o].calc.stat,c=t[e][o].calc.operator,i=t[e][o].calc.modifier,"string"==typeof t[e][o].calc.modifier&&(i=a.data.player.stats_base[i].value),r=a.data.player.stats_base[n].value;var d=s[c](r,i);t[e][o].value_calc=99>d?d:99}}catch(v){}})}function n(e){t.get(e).then(function(t){a.data=t.data,c()})}function c(){Object.keys(a.data.player.stats_base).forEach(function(t,e){a.calculateDependencies(t,a.data.player.stats_base[t])})}function i(a,t){return t?a:!a}a.data={},a.currentTab=0;var s={"+":function(a,t){return a+t},"*":function(a,t){return a*t},"/":function(a,t){return a/t},"-":function(a,t){return a-t}};n("./assets/json/data.json"),a.onClickTab=function(t){a.currentTab=t},a.isActiveTab=function(t){return t==a.currentTab},a.getLength=function(a,t){try{var e=Math.ceil(a.abilities.common.length/2);return a.abilities.common.length%2&&(e-=t),e}catch(l){console.info("Data not ready yet.")}},a.calculateDependencies=function(t,e){if(l(a.data.abilities),"str"==t||"siz"==t){var n=a.data.player.stats_base.str.value+a.data.player.stats_base.siz.value,c=0;n>=2&&12>=n?c="-1D6":n>=13&&16>=n?c="-1D4":n>=17&&24>=n?c="+0":n>=25&&32>=n?c="+1D4":n>=33&&(c="+1D6"),a.data.player.stats_calc.dmg_bonus.value=c}if("con"==t||"siz"==t){var n=a.data.player.stats_base.con.value+a.data.player.stats_base.siz.value;n>0&&(a.data.player.stats_calc.hp_max.value=Math.ceil(n/2),a.isUndefined(a.data.player.stats_calc.hp.value)&&(a.data.player.stats_calc.hp.value=Math.ceil(n/2)),a.data.player.stats_calc.hp.value>a.data.player.stats_calc.hp_max.value&&(a.data.player.stats_calc.hp.value=a.data.player.stats_calc.hp_max.value))}if("pow"==t){var n=5*e.value<99?5*e.value:99;a.data.player.stats_calc.san_max.value=n,a.isUndefined(a.data.player.stats_calc.san.value)&&(a.data.player.stats_calc.san.value=n),a.data.player.stats_calc.san.value>a.data.player.stats_calc.san_max.value&&(console.log(a.data.player.stats_calc.san.value),a.data.player.stats_calc.san.value=a.data.player.stats_calc.san_max.value,console.log(a.data.player.stats_calc.san.value)),n=5*e.value<99?5*e.value:99,a.data.player.stats_calc.luck.value=n,a.data.player.stats_calc.magic_max.value=e.value,a.isUndefined(a.data.player.stats_calc.magic.value)&&(a.data.player.stats_calc.magic.value=e.value),a.isUndefined(a.data.player.stats_calc.magic.value)&&(a.data.player.stats_calc.magic.value=n),a.data.player.stats_calc.magic.value>a.data.player.stats_calc.magic_max.value&&(a.data.player.stats_calc.magic.value=a.data.player.stats_calc.magic_max.value)}if("int"==t){var n=5*e.value<99?5*e.value:99;a.data.player.stats_calc.idea.value=n}if("edu"==t){var n=5*e.value<99?5*e.value:99;a.data.player.stats_calc.know.value=n}},a.getStatus=function(a,t,e){var l="";return"magic"==a&&(l=e>=t&&1>e?"unconscious":"normal"),"hitpoints"==a&&(l=e>=t&&1>e?"unconscious":"normal"),"sanity"==a&&(l=e>=t&&1>e?"hopelessly insane":"normal"),l},a.validTimePeriod=function(t,e){return e="not"!=e,"undefined"==typeof t?!0:"anytime"===t?!0:!("anytime"!=a.data.options.timeSelect.value&&!i(t==a.data.options.timeSelect.value,e))},a.changeLanguage=function(){"English"==a.data.options.languageSelect.value?a.data.options.languageIndex=0:"Deutsch"==a.data.options.languageSelect.value&&(a.data.options.languageIndex=1)},a.addCustomAbility=function(){var t={name:[],value_added:0,value_total:0,skilled:!1,custom_name:""};a.data.abilities.custom.push(t)},a.removeCustomAbility=function(){for(var t=0;t<a.data.abilities.custom.length;t++)a.data.abilities.custom[t].skilled||a.data.abilities.custom.splice(t,1)},a.checkAvailableSkillPoints=function(){var t=a.data.abilities,e=0;Object.keys(a.data.abilities).forEach(function(l,n){for(var c=0;c<t[l].length;c++)a.isUndefined(t[l][c].value_added)||(e+=t[l][c].value_added)}),a.data.player.skillPoints_used=e},a.isUndefined=function(a){return"undefined"==typeof a},a.isEmpty=function(a){return a.length},a.calculateColspan=function(a){var t=0;return a&&t++,t},a.range=function(a,t,e){for(var l=[],n=e;a+t>n;n++)l.push(n);return l},a.isMaxStatValue=function(a){return a.indexOf("_max")<1},a.isVariableStat=function(a){switch(a){case"hp":return!0;case"san":return!0;case"magic":return!0}}}]),e.filter("max99",[function(){return function(a){return 99>a?a:99}}]),e.directive("sheet",function(){return{restrict:"A",templateUrl:"templates/directives/sheet.html",scope:!0}}),e.directive("ability",function(){return{restrict:"A",templateUrl:"templates/directives/ability.html",scope:!0,replace:!0}}),e.directive("ability2",function(){return{restrict:"A",templateUrl:"templates/directives/ability2.html",scope:!0,replace:!0}})}();