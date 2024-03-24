var currentDate = new Date();
var rootPath = "https://legal.vantainteractive.com/favicon/";
var logoPride = new Image();
var logoBk = new Image();
var logoVD = new Image();
logoPride.src = rootPath + "vi-logo-big-pride.png";
logoBk.src = rootPath + "vi-logo-big-wh.png";
logoVD.src = rootPath + "vi-logo-big-heart.png";

var startDate_PrideMonth = new Date(currentDate.getFullYear(), 5, 1);
var endDate_PrideMonth = new Date(currentDate.getFullYear(), 5, 30);
var date_ValentinesDay = new Date(currentDate.getFullYear(), 1, 8);

if (
	currentDate >= startDate_PrideMonth && currentDate <= endDate_PrideMonth
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoPride.src;
	});
} else if (
	currentDate.getMonth() === date_ValentinesDay.getMonth() &&
	currentDate.getDate() === date_ValentinesDay.getDate()
) {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
		headerLogo.src = logoVD.src;
	});
} else {
	document.addEventListener('DOMContentLoaded', function() {
		var headerLogo = document.getElementById('logo');
	headerLogo.src = logoBk.src;
	});
}

