var stored_lang = localStorage.getItem("lang");
if ( (stored_lang && stored_lang != page_lang) || !stored_lang )
	localStorage.setItem("lang", page_lang);
