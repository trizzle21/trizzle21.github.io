console.log("loaded!");

(function(){
    var launch = {
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
            this.$about.on("mouseenter mouseleave", this.$about, this.show.bind(this,this.$sub_about ));
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
        }
        
        
    }
    launch.init();
})()