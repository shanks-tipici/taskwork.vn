jQuery(function($) {'use strict';	
    // Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		var _name = $('#name').val().trim();
		var _phone = encodeURIComponent($('#phone').val());
		var _mail = $('#mail').val();
		var _company = $('#company').val();
		var _province = $('#province').val();
		var _number = $('#number').val();
		$.ajax({
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSfhk0OxI4g_nu-UHOx_kmHNWLSuIgeks3i4GsOaQI4w8nlB1Q/formResponse', //$(this).attr('action'),
			data: {"entry.606349017": _name, 
				"entry.1400741283": _mail,
				"entry.1854460666": _phone, 
				"entry.824254450": _company, 
				"entry.1677786378": _province, 
				"entry.1656746715": _number, 
			},
			type: "POST",
			dataType: "xml",
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i>Đang gửi..</p>').fadeIn() );
			},
			statusCode: {
                0: function() {
					form_status.html('<p class="text-success">Cảm ơn bạn! Chúng tôi sẽ gọi cho bạn sớm nhé</p>').delay(3000).fadeOut();
					form.trigger("reset");
                },
                200: function() {
					form_status.html('<p class="text-success">Cảm ơn bạn! Chúng tôi sẽ gọi cho bạn sớm nhé</p>').delay(3000).fadeOut();
					form.trigger("reset");
                }
            }
		})//.done(function(data){
		//	form_status.html('<p class="text-success">Cảm ơn bạn! Chúng tôi sẽ gọi cho bạn sớm nhé</p>').delay(3000).fadeOut();
		//});
	});
});