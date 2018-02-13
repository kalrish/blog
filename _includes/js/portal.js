var stored_lang = localStorage.getItem("lang");
var language = stored_lang || navigator.language;

var langcode;
if ( language.indexOf('es') > -1 )
	langcode = 'es';
else if ( language.indexOf('de') > -1 )
	langcode = 'de';
else
	langcode = 'en';

document.getElementById("navibar").setAttribute("lang", langcode);

var post_list = document.getElementById("post-list");
post_list.lang = langcode;
for ( var post_list_children = post_list.children, post_list_children_length = post_list_children.length, i = 0 ; i < post_list_children_length ; ++i )
{
	var post_list_item = post_list_children[i];
	post_list_item.classList.add( post_list_item.lang === langcode ? "samelang" : "difflang" );
}

if ( (stored_lang && stored_lang != language) || !stored_lang )
	localStorage.setItem("lang", language);
