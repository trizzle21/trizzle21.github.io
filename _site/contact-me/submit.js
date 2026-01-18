

// 
;(function(){
    var contact = {
        url: "https://k7maig28k2.execute-api.us-east-1.amazonaws.com/prod/contact-me",
        init : function(){
			this.cacheDOM();
            this.bindEvents();
			this.setTimestamp();
    	},
        cacheDOM: function(){
            this.$contactForm = $("#contact-form");
            this.$submit = $("#contact-submit");
            this.$firstName = $('#first-name-input');
            this.$lastName = $('#last-name-input');
            this.$emailName = $('#email-input');
            this.$descriptionName = $('#description-input');
            this.$success = $('#success');
			this.$error = $('#error');
			this.$company = $('#company-input');
			this.$timestamp = $('#timestamp-input');

        },
        bindEvents: function(){
            this.$submit.on('click', this.submitCaptcha.bind(this));
			this.$contactForm.on('submit', this.submitFormFromEnter.bind(this));
        },
		setTimestamp: function(){
			this.$timestamp.val(Date.now());
		},
		submitFormFromEnter: function(event){
			event.preventDefault();
			this.$submit.trigger('click');
		},
		submitCaptcha: function(event){
			event.preventDefault();
			this.$success.hide();
			this.$error.hide();
			if (!this.validate()) {
				return;
			}
			if (window.grecaptcha && window.grecaptcha.execute) {
				this.$submit.prop('disabled', true);
				window.grecaptcha.execute();
				return;
			}
			this.handleError('Captcha unavailable. Please try again.');
		},
        submitForm: function(token){
            const validation = this.validate();
            if(!validation){
                return;
            }
			if (this.isLikelyBot()){
				this.handleError('Something went wrong. Please try again.');
				return;
			}
			if (!token) {
				this.handleError('Captcha unavailable. Please try again.');
				return;
			}
            const name = this.$firstName.val() + ' ' + this.$lastName.val();
            
            var payload = {
                'name': name,
                'email': this.$emailName.val(),
                'text': this.$descriptionName.val(),
				'captcha': token || '',
				'company': this.$company.val(),
				'timestamp': this.$timestamp.val()
            };
            $.ajax({
                contentType: 'application/json',
                data: JSON.stringify(payload),
                crossDomain : true,
                dataType: 'json',
                type: 'POST',
                url: this.url,
              })
              .done((e) => this.handleSuccess(e))
              .fail(() => this.handleError('Unable to submit right now. Please try again.'))
			  .always(() => this.resetCaptcha());
          
        },
        validate: function(){
            var raiseError = true;
			this.clearErrors();
            if(!this.$firstName.val() || this.$firstName.val().length < 2){
                this.$firstName.addClass('has-error');
                raiseError = false;
            }
            if(!this.$lastName.val() || this.$lastName.val().length < 2){
                this.$lastName.addClass('has-error');
                raiseError = false;
            }
			if(!this.isValidEmail(this.$emailName.val())){
				this.$emailName.addClass('has-error');
				raiseError = false;
			}
			if(!this.$descriptionName.val() || this.$descriptionName.val().length < 10){
				this.$descriptionName.addClass('has-error');
				raiseError = false;
			}
			if (!raiseError) {
				this.$error.text('Please fix the highlighted fields.').show();
			}

            return raiseError
        },
		clearErrors: function(){
			this.$firstName.removeClass('has-error');
			this.$lastName.removeClass('has-error');
			this.$emailName.removeClass('has-error');
			this.$descriptionName.removeClass('has-error');
		},
		isValidEmail: function(value){
			if (!value) {
				return false;
			}
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
		},
		isLikelyBot: function(){
			if (this.$company.val()) {
				return true;
			}
			var started = parseInt(this.$timestamp.val(), 10);
			if (!started) {
				return true;
			}
			return (Date.now() - started) < 3000;
		},
		resetCaptcha: function(){
			if (window.grecaptcha && window.grecaptcha.reset) {
				window.grecaptcha.reset();
			}
			this.$submit.prop('disabled', false);
			this.setTimestamp();
		},
        handleSuccess: function(event){
            this.$success.css({'display': 'inline-block'});
			this.$contactForm[0].reset();
        },
        handleError: function(message){
			this.$error.text(message || 'Unable to submit right now.').show();
        }        
    }
	window.onContactCaptcha = function(token){
		contact.submitForm(token);
	};
    contact.init();
  })();
