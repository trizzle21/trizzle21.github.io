

// 
;(function(){
    var contact = {
        url: "https://k7maig28k2.execute-api.us-east-1.amazonaws.com/prod/contact-me",
        init : function(){
			this.cacheDOM();
			this.bindEvents();
    	},
        cacheDOM: function(){
            this.$contactForm = $("#contact-form");
            this.$submit = $("#contact-submit");
            this.$firstName = $('#first-name-input');
            this.$lastName = $('#last-name-input');
            this.$emailName = $('#email-input');
            this.$descriptionName = $('#description-input');
            this.$success = $('#success');

        },
        bindEvents: function(){
            this.$submit.on('click', this.submit, this.submitForm.bind(this));
        },
        submitForm: function(){
            const validation = this.validate()
            if(!validation){
                return;
            }
            const name = this.$firstName.val() + ' ' + this.$lastName.val();
            
            payload = {
                'name': name,
                'email': this.$emailName.val(),
                'text': this.$descriptionName.val(),
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
              .fail(() => this.handleError());
          
              event.preventDefault();          
          
        },
        validate: function(){
            var raiseError = true;
            if(!this.$firstName.val()){
                this.$firstName.css({'border-color': 'red'});
                raiseError = false;
            }
            if(!this.$lastName.val()){
                this.$lastName.css({'border-color': 'red'});
                raiseError = false;
            }
            if(!this.$emailName.val()){
                this.$emailName.css({'border-color': 'red'});
                raiseError = false;
            }

            return raiseError
        },
        handleSuccess: function(event){
            this.$success.css({'display': 'inline-block'});
        },
        handleError: function(){
            console.log('fail!')
        }        
    }
    contact.init()
  })();