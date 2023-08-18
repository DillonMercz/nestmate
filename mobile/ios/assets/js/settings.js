function dzThemeSettings()
{
	var dzThemeSettings = '<ul class="theme-color-settings"><li><input class="filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color-red" /><label for="primary_color_1"></label></li><li><input class="filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color-green" /> <label for="primary_color_2"></label></li><li><input class="filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color-blue" /> <label for="primary_color_3"></label></li><li><input class="filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color-pink" /> <label for="primary_color_4"></label></li><li><input class="filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color-yellow" /> <label for="primary_color_5"></label></li><li><input class="filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color-orange" /> <label for="primary_color_6"></label></li><li><input class="filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color-purple" /> <label for="primary_color_7"></label></li><li><input class="filled-in" id="primary_color_8" name="primary_bg" type="radio" value="color-deeppurple" /> <label for="primary_color_8"></label></li><li><input class="filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color-lightblue" /> <label for="primary_color_9"></label></li><li><input class="filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color-teal" /> <label for="primary_color_10"></label></li><li><input class="filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color-lime" /> <label for="primary_color_11"></label></li><li><input class="filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color-deeporange" /> <label for="primary_color_12"></label></li></ul>';
}
console.log(`
███╗░░██╗███████╗░██████╗████████╗███╗░░░███╗░█████╗░████████╗███████╗
████╗░██║██╔════╝██╔════╝╚══██╔══╝████╗░████║██╔══██╗╚══██╔══╝██╔════╝
██╔██╗██║█████╗░░╚█████╗░░░░██║░░░██╔████╔██║███████║░░░██║░░░█████╗░░
██║╚████║██╔══╝░░░╚═══██╗░░░██║░░░██║╚██╔╝██║██╔══██║░░░██║░░░██╔══╝░░
██║░╚███║███████╗██████╔╝░░░██║░░░██║░╚═╝░██║██║░░██║░░░██║░░░███████╗
╚═╝░░╚══╝╚══════╝╚═════╝░░░░╚═╝░░░╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝`)

/* Theme Panel Save */
var themeOption = ['themeColor', 'themeVersion'];

(function ($) {
    "use strict";
    dzThemeSettings();

    // get the DOM elements from right sidebar
    const versionSelect = $('#theme_version');
    const themeButton = $('.theme-btn');
    const colorInputs = $('input[name="theme_color"]');

    // retrieve dark mode preference from localStorage
    const darkModePreference = localStorage.getItem('darkMode');

    // apply dark mode preference if set to true
    if (darkModePreference === 'true') {
        $('body').addClass('theme-dark');
        themeButton.addClass('active');
    }

    // change the theme version controller
    versionSelect.on('change', function () {
        const themeVersionValue = this.value;
        body.attr('data-theme-version', themeVersionValue);
        setCookie('themeVersion_value', themeVersionValue);
    });

    // toggle dark mode on theme button click
    themeButton.on('click', function () {
        $('body').toggleClass('theme-dark');
        themeButton.toggleClass('active');

        // store dark mode preference in localStorage
        const isDarkMode = $('body').hasClass('theme-dark');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // change the primary color controller
    colorInputs.on('click', function () {
        const themeColorValue = this.value;
        body.attr('data-theme-color', themeColorValue);
        setCookie('themeColor_value', themeColorValue);
    });

})(jQuery);


/* Cookies Function */
function setCookie(cname, cvalue, exhours) 
{
    var d = new Date();
    d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes */
    var expires = "expires="+ d.toString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setThemePanel(){
    jQuery.each(themeOption, function(index, themeOptionItem) {
		themeOptionItemValue = getCookie(themeOptionItem+'_value');
		//alert(themeOptionItemValue);
		//alert(themeOptionItem+' '+themeOptionItemValue);
		//alert('.'+themeOptionItem+'-view '+' .'+themeOptionItemValue);
		//alert(themeOptionItemValue);
		
		if(themeOptionItemValue != '' && themeOptionItemValue != 1){
			
			if(themeOptionItem == 'themeColor'){
				body.attr('data-theme-color', themeOptionItemValue);
			}else if(themeOptionItem == 'themeVersion'){
				body.addClass(themeOptionItemValue);
                jQuery('.theme-btn').addClass('active');
			}
		}
	});
	
	/* var ts_logo_selector = getCookie('themeStandardColor_logo_selector');
	
	var tf_logo_selector = getCookie('themeFullColor_logo_selector');
	
	if(ts_logo_selector != '' && tf_logo_selector != 1)
	{
		var ts_logo_image = getCookie('themeStandardColor_logo_image');
		
		var logoSelectorArr = ts_logo_selector.split(',');
		var logoSrcArr		= ts_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
	}
	
	if(tf_logo_selector != '' && tf_logo_selector != 1)
	{
		var tf_logo_image = getCookie('themeFullColor_logo_image');
		
		var logoSelectorArr = tf_logo_selector.split(',');
		var logoSrcArr		= tf_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
	} */
}


/* Cookies Function End */