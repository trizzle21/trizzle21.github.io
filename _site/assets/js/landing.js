
(function(){
    var launch = {
        cookieName: "tylerdross",
        init: function(){
			this.cacheDOM();
			this.bindEvents();
			this.render();
		},
        cacheDOM: function(){
            this.$body = $("#full");
            
            this.$about = this.$body.find("#About");
            this.$work = this.$body.find("#Work");
            this.$blog = this.$body.find("#Blog");
            this.$contact = this.$body.find("#Contact");
            
            this.$sub_about = this.$about.find("#who");
            this.$sub_work = this.$work.find("#what");
            this.$sub_blog = this.$blog.find("#talk");
            this.$sub_contact = this.$contact.find("#reach");
            
        },
        bindEvents : function(){
            this.$about.on("mouseenter mouseleave", this.$about, this.show.bind(this, this.$sub_about));
            this.$work.on("mouseenter mouseleave", this.$work, this.show.bind(this,this.$sub_work ));
            this.$blog.on("mouseenter mouseleave", this.$blog, this.show.bind(this,this.$sub_blog ));
            this.$contact.on("mouseenter mouseleave", this.$contact, this.show.bind(this,this.$sub_contact ));
        },
        render : function(){
            //Might not have anything yet  
            this.$sub_about.toggle();
            this.$sub_work.toggle();
            this.$sub_blog.toggle();
            this.$sub_contact.toggle();

        },
        show : function(jqloc){
            jqloc.toggle();
            const highlightValue = this.getHighlightValue();
            // console.log(highlightValue);
            $.each([this.$sub_about, this.$sub_work, this.$sub_blog, this.$sub_contact], function( index, value ) {
                if(jqloc == value){
                    value.closest('div').css('color', highlightValue)
                } else {
                    value.closest('div').css('color','grey')
                }
            
            });


        },
        getHighlightValue: function() {
            const cookieValue = this.getCookie(this.cookieName);
            if (cookieValue == "" || cookieValue == "LIGHT") {
                return "black";
            } else {
                return "white";
            }

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

        
        
    }
    launch.init();
})()