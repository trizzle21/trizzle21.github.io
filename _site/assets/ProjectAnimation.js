


(function(){
    var project = {
        init: function(){
			this.cacheDOM();
			this.bindEvents();
			this.render();
		},
		cacheDOM: function(){
			this.$filter_button_on = $('.filter_button on');
			this.$filter = $('.filter');

		},
		bindEvents:function(){

		},
		render : function(){

		}


	}
	project.init();
})();

$('.filter_button off').on('onclick', function(){

})