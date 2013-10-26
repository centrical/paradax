/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function(e){var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r)};t.DEFAULTS={loadingText:"loading..."},t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.is("input")?"val":"html",i=n.data();e+="Text",i.resetText||n.data("resetText",n[r]()),n[r](i[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var t=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");t.prop("type")==="radio"&&e.find(".active").removeClass("active")}this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("bs.button"),s=typeof n=="object"&&n;i||r.data("bs.button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle"),t.preventDefault()})}(window.jQuery),+function(e){var t=function(e,t){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",e,t)};t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.prototype.init=function(t,n,r){this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(r);var i=this.options.trigger.split(" ");for(var s=i.length;s--;){var o=i[s];if(o=="click")this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if(o!="manual"){var u=o=="hover"?"mouseenter":"focus",a=o=="hover"?"mouseleave":"blur";this.$element.on(u+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},t.prototype.getDefaults=function(){return t.DEFAULTS},t.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},t.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,r){n[e]!=r&&(t[e]=r)}),t},t.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout),n.hoverState="in";if(!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},t.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(n.timeout),n.hoverState="out";if(!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},t.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.tip();this.setContent(),this.options.animation&&n.addClass("fade");var r=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,s=i.test(r);s&&(r=r.replace(i,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(r),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var o=this.getPosition(),u=n[0].offsetWidth,a=n[0].offsetHeight;if(s){var f=this.$element.parent(),l=r,c=document.documentElement.scrollTop||document.body.scrollTop,h=this.options.container=="body"?window.innerWidth:f.outerWidth(),p=this.options.container=="body"?window.innerHeight:f.outerHeight(),d=this.options.container=="body"?0:f.offset().left;r=r=="bottom"&&o.top+o.height+a-c>p?"top":r=="top"&&o.top-c-a<0?"bottom":r=="right"&&o.right+u>h?"left":r=="left"&&o.left-u<d?"right":r,n.removeClass(l).addClass(r)}var v=this.getCalculatedOffset(r,o,u,a);this.applyPlacement(v,r),this.$element.trigger("shown.bs."+this.type)}},t.prototype.applyPlacement=function(e,t){var n,r=this.tip(),i=r[0].offsetWidth,s=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),u=parseInt(r.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(u)&&(u=0),e.top=e.top+o,e.left=e.left+u,r.offset(e).addClass("in");var a=r[0].offsetWidth,f=r[0].offsetHeight;t=="top"&&f!=s&&(n=!0,e.top=e.top+s-f);if(/bottom|top/.test(t)){var l=0;e.left<0&&(l=e.left*-2,e.left=0,r.offset(e),a=r[0].offsetWidth,f=r[0].offsetHeight),this.replaceArrow(l-i+a,a,"left")}else this.replaceArrow(f-s,f,"top");n&&r.offset(e)},t.prototype.replaceArrow=function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},t.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},t.prototype.hide=function(){function i(){t.hoverState!="in"&&n.detach()}var t=this,n=this.tip(),r=e.Event("hide.bs."+this.type);this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?n.one(e.support.transition.end,i).emulateTransitionEnd(150):i(),this.$element.trigger("hidden.bs."+this.type),this},t.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},t.prototype.hasContent=function(){return this.getTitle()},t.prototype.getPosition=function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},t.prototype.getCalculatedOffset=function(e,t,n,r){return e=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-n/2}:e=="top"?{top:t.top-r,left:t.left+t.width/2-n/2}:e=="left"?{top:t.top+t.height/2-r/2,left:t.left-n}:{top:t.top+t.height/2-r/2,left:t.left+t.width}},t.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},t.prototype.tip=function(){return this.$tip=this.$tip||e(this.options.template)},t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},t.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.toggleEnabled=function(){this.enabled=!this.enabled},t.prototype.toggle=function(t){var n=t?e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;n.tip().hasClass("in")?n.leave(n):n.enter(n)},t.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tooltip"),s=typeof n=="object"&&n;i||r.data("bs.tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),+function(e){var t=function(n,r){this.$element=e(n),this.options=e.extend({},t.DEFAULTS,r),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.DEFAULTS={toggle:!0},t.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},t.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var t=e.Event("show.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var r=n.data("bs.collapse");if(r&&r.transitioning)return;n.collapse("hide"),r||n.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var o=e.camelCase(["scroll",i].join("-"));this.$element.one(e.support.transition.end,e.proxy(s,this)).emulateTransitionEnd(350)[i](this.$element[0][o])},t.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var t=e.Event("hide.bs.collapse");this.$element.trigger(t);if(t.isDefaultPrevented())return;var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!e.support.transition)return r.call(this);this.$element[n](0).one(e.support.transition.end,e.proxy(r,this)).emulateTransitionEnd(350)},t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("bs.collapse"),s=e.extend({},t.DEFAULTS,r.data(),typeof n=="object"&&n);i||r.data("bs.collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i),o=s.data("bs.collapse"),u=o?"toggle":n.data(),a=n.attr("data-parent"),f=a&&e(a);if(!o||!o.transitioning)f&&f.find('[data-toggle=collapse][data-parent="'+a+'"]').not(n).addClass("collapsed"),n[s.hasClass("in")?"addClass":"removeClass"]("collapsed");s.collapse(u)})}(window.jQuery),+function(e){function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(e.style[n]!==undefined)return{end:t[n]}}e.fn.emulateTransitionEnd=function(t){var n=!1,r=this;e(this).one(e.support.transition.end,function(){n=!0});var i=function(){n||e(r).trigger(e.support.transition.end)};return setTimeout(i,t),this},e(function(){e.support.transition=t()})}(window.jQuery);