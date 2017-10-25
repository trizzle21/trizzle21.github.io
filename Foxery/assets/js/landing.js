/*


*/


;(function(){
    var launch = {
        activeSlide: 0,
        init: function(){
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function(){
            this.$scrollButton = $(".scroll-button");
            this.$slideSelector = $(".slide-selector");


        },
        bindEvents: function(){
            this.$scrollButton.on('click', this.scrollToTop.bind(this));
            this.$slideSelector.on('click', this.changeSlideEvent.bind(this));     

        },
        render: function(){
            this.interval = setInterval(this.changeNextSlide.bind(this), 3000);

        },
        scrollToTop:function(){
            $( document ).scrollTop(0);
        },
        changeSlideEvent:function(){
            var clickedButton = $(event.target);
            clearInterval(this.interval);
            if(clickedButton.data().roleSlide == 0 || clickedButton.data().roleSlide){
                this.changeSlide(clickedButton.data()['roleSlide']);
                this.interval = setInterval(this.changeNextSlide.bind(this), 3000);


            }else {
                clickedButton = clickedButton.closest('div');
                if(clickedButton.data().roleSlide == 0 || clickedButton.data().roleSlide){
                    this.changeSlide(clickedButton.data()['roleSlide']);
                    this.interval = setInterval(this.changeNextSlide.bind(this), 3000);

                }
            }

        },
        changeSlide:function(slide_count){
            var currentSlide = $('#slide-' + this.activeSlide);
            var nextSlide = $('#slide-' + slide_count);
            this.activeSlide = slide_count;
            currentSlide.fadeOut(200, function(){
                currentSlide.removeClass('active');
                nextSlide.addClass('active');
            
            });            

            $('.selected').removeClass('selected');
            $('#slide-selector-' + slide_count).addClass('selected');

        },
        changeNextSlide:function(){
            slide_count = this.activeSlide + 1;
            var overCheck = false;
            if(slide_count == 3){
                overCheck = true
                slide_count = 0;
            }
        
            var currentSlide = $('#slide-' + this.activeSlide);
            var nextSlide = $('#slide-' + slide_count);
            $('.selected').removeClass('selected');
            $('#slide-selector-' + slide_count).addClass('selected');

            if (overCheck){
                this.activeSlide = 0

            }else {
                this.activeSlide = this.activeSlide + 1;
            }
            
            currentSlide.fadeOut(200, function(){
                currentSlide.removeClass('active');
                nextSlide.addClass('active');
            
            });            




        }


    }    

    launch.init();


})();
