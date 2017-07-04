/*
	Javascript module for About.




*/

;(function(){
    var slide = {
    	slide_count : 0,
        max_count:5,
    	init : function(){
			this.cacheDOM();
			this.bindEvents();
			this.render();

    	},
        cacheDOM: function(){
        	
            this.$bodyTag = $('body');
            this.$slide = $('.slide');
        	this.$upArrow = $('.up-arrow');
        	this.$downArrow = $('.scroll-down-arrow');
            this.$arrow = $('.arrow');
            this.$slideContainer = $('.slide-container');
            this.$head = $('.head');

        },
        bindEvents: function(){
            
            this.$downArrow.on('click', this.$arrow, this.changeSlide.bind(this, 'down'));
			//this.$bodyTag.on('scroll', this.$arrow, this.changeSlide.bind(this, 'down'));

            // this.$slideContainer.on('click', this.$upArrow, this.changeSlide(this, 'up'))
        },
        render: function(){
        },
        changeSlide: function(direction) {
            if (this.slide_count > this.max_count){
                return;
            }
            count = '.slide-' + this.slide_count;
            current_slide = this.$slideContainer.find(count);
            var fade;
            if (this.slide_count == this.max_count){
                this.$head.removeClass('hidden').addClass('visible');
                this.$downArrow.removeClass('visible').addClass('hidden');
                this.$bodyTag.css('overflow','scroll');
                fade = 500;
            } else{
                fade = 2000
            }

            if(direction == 'up'){
        		this.slide_count -= 1;
        	} else {
        		this.slide_count += 1;
        	}
            next_slide = this.$slideContainer.find('.slide-' + this.slide_count);
            next_slide.hide().fadeIn(fade);

            current_slide.css('transform: translate3d(0px, 100%, 0px);');

            current_slide.removeClass('active');
            next_slide.addClass('active');

        }


    }
  	slide.init()
  })();