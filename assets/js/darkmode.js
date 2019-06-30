//

(function() {
    var darkMode = {
        lightThemeOn: true,
        cookieName: "tylerdross",
        init: function() {
            console.log('abcdedf');
			this.cacheDOM();
            this.bindEvents();
            this.initialize();
		},
        cacheDOM: function() {
            this.$darkModeClass = $(".dark-mode");

            this.$darkModeTag = $("#dark-mode");
            console.log(this.$darkModeClass);
            // this.$darkThemeTag = $('#dark_theme');
            // this.$lightThemeTag = $('#light_theme');
            this.$darkThemeTag = $("head").find('link[title="dark_theme"]')
            this.$lightThemeTag = $("head").find('link[title="light_theme"]')
        },
        bindEvents: function() {
                // this.$darkModeClass.on("click", this.$darkModeTag, this.darkModeSwitch.bind(this));
                this.$darkModeClass.on("click", this.$darkModeTag, this.darkModeSwitch.bind(this));
        },
        initialize: function() {
            const cookie = this.getCookie(this.cookieName)
            console.log(cookie)
            if (cookie == "") {
                this.setCookie(this.cookieName, "LIGHT")
            } else {
                if (cookie == "DARK") {
                    console.log("should be dark")

                    const onTheme = this.$darkThemeTag;
                    const offTheme = this.$lightThemeTag;
        
                    onTheme.attr('disabled', false);
                    offTheme.attr('disabled', true);
                    this.lightThemeOn = !false;
                } 
            }
        },
        darkModeSwitch: function() {
            const onTheme = this.lightThemeOn ? this.$lightThemeTag : this.$darkThemeTag;
            const offTheme = this.lightThemeOn ? this.$darkThemeTag : this.$lightThemeTag;
            const cookie_value = this.lightThemeOn ? "LIGHT" : "DARK";

            onTheme.attr('disabled', false);
            offTheme.attr('disabled', true);
            this.lightThemeOn = !this.lightThemeOn;
            
            this.setCookie(this.cookieName, cookie_value)
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