//

(function() {
    var darkMode = {
        lightThemeOn: false,
        cookieName: "tylerdross",
        init: function() {
			this.cacheDOM();
            this.bindEvents();
            this.initialize();
		},
        cacheDOM: function() {
            this.$darkModeClass = $(".dark-mode");

            this.$darkModeTag = $("#dark-mode");
            this.$darkThemeTag = $("head").find('link[title="dark_theme"]');
            this.$lightThemeTag = $("head").find('link[title="light_theme"]');

            this.$personalSite = $('#personalsitelogo');
            this.$stirLogo = $('#stir-logo');
            this.$foxeryLogo = $('#foxery-logo');
            this.$focuslyLogo = $('#focusly-logo');
            this.$logos = [this.$personalSite, this.$stirLogo, this.$foxeryLogo, this.$focuslyLogo]
        },
        bindEvents: function() {
            this.$darkModeTag.on("click", this.$darkModeTag, this.darkModeSwitch.bind(this));
        },
        initialize: function() {
            const cookie = this.getCookie(this.cookieName)
            if (cookie == "") {
                this.setCookie(this.cookieName, "LIGHT")
            } else {
                if (cookie == "DARK") {
                    this.lightThemeOn = false;
                    const onTheme = this.$darkThemeTag;
                    const offTheme = this.$lightThemeTag;
                    this.flipImage();
                    this.flip_label()
                    onTheme.attr('disabled', false);
                    offTheme.attr('disabled', true);
                } 
            }
        },
        darkModeSwitch: function() {
            const onTheme = this.lightThemeOn ? this.$lightThemeTag : this.$darkThemeTag;
            const offTheme = this.lightThemeOn ? this.$darkThemeTag : this.$lightThemeTag;
            const cookie_value = this.lightThemeOn ? "LIGHT" : "DARK";
            this.flipImage();
            this.flip_label()
            onTheme.attr('disabled', false);
            offTheme.attr('disabled', true);
            this.lightThemeOn = !this.lightThemeOn;
            
            this.setCookie(this.cookieName, cookie_value)
        },
        flipImage: function() {
            const flipValue = this.lightThemeOn ? "0" : "100";
            for(image of this.$logos) {
                image.css("filter", "invert(" + flipValue + "%)");
            }
        },
        flip_label: function() {
            const textValue = this.lightThemeOn ? "Dark Mode" : "Light Mode";
            this.$darkModeTag.text(textValue)
        },
        getCookie: function(cookie_name) {
            var name = cookie_name + "=";
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
        },
        setCookie: function(cookie_name, cookie_value) {
            var d = new Date();
            d.setTime(d.getTime() + (2*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";          
        },
    }
    darkMode.init()
})();