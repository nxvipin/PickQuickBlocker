/* Require http://underscorejs.org/underscore-min.js
 * Require http://code.jquery.com/jquery.js
 *
 */

if (typeof _ === 'undefined') {
	throw ("Underscore.js is required but missing");
}

if (typeof jQuery === 'undefined') {
	throw ("jQuery is required but missing");
}

var pickquick = function ($, _) {
	"use strict";
	var allPosts = $('.uiUnifiedStory'),
		allPickQuick = _.filter(allPosts, function (post) {
			var url = $.trim($(post).find('span.caption').first().text());
			console.log(url);
			return url === "www.pickquick.co.in";
		});

	_.each(allPickQuick, function (post, index, allPickQuick) {

		$(post).animate({opacity : 0}, 1000, function () {
			$(post).hide();
		});
	});

};

setInterval(function () {
	"use strict";
	pickquick(jQuery, _);
}, 3000);
