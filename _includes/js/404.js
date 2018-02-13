var stored_lang = localStorage.getItem("lang");
var language = stored_lang || navigator.language;

var langcode;
if ( language.indexOf('es') > -1 )
	langcode = 'es';
else if ( language.indexOf('de') > -1 )
	langcode = 'de';
else
	langcode = 'en';

document.getElementById("navibar").lang = langcode;

if ( (stored_lang && stored_lang != language) || !stored_lang )
	localStorage.setItem("lang", language);
