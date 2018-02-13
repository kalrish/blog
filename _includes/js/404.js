var language = navigator.language;

var langcode;
if ( language.indexOf('es') > -1 )
	langcode = 'es';
else if ( language.indexOf('de') > -1 )
	langcode = 'de';
else
	langcode = 'en';

document.getElementById("navibar").lang = langcode;
