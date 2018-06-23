// Load the SDK asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

	window.fbAsyncInit = function() {

	FB.init({
		appId      : '1664768330401697',
		cookie     : true,  // enable cookies to allow the server to access 
						// the session
		xfbml      : true,  // parse social plugins on this page
		version    : 'v2.4' // use graph api version 2.5
  	});

  	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
  	});
	};

	function statusChangeCallback(response) {

	if (response.status === 'connected') {
	
		//fbData();

	}

}

function fbLogin(){

	$('#preload').addClass('active');
	$('#preload .preloader').addClass('show');

	FB.login(function(response) {

		fbData();

	}, {scope: 'public_profile,email'});

}


function fbData(){

	$('#preload').addClass('active');
	$('#preload .preloader').addClass('show');

	setTimeout(function(){

		FB.api('/me?fields=id,name,first_name,last_name,email', function(res) {
				
			$('#head-reigster-box, .px-regisbox-hr').remove();

			$('.px-regisbox-wrapper #firstname').val( res.first_name );
			$('.px-regisbox-wrapper #lastname').val( res.last_name );
			$('.px-regisbox-wrapper #email').val( res.email );

			$('#preload').removeClass('active');
			$('#preload .preloader').removeClass('show');

		});

	}, 1000);

}


$(document).ready(function(){

	$('#reigster-projects-3').on('submit', function(){

		if( validate() ){

			$('#preload').addClass('active');
			$('#preload .preloader').addClass('show');

			path = $('input[type=hidden][name=path]').val();

			$.post( path + '../../crm/register/register_urban-pulse-2016.php', $('#reigster-projects-3').serialize(), function( res ){

				$('#preload').removeClass('active');
				$('#preload .preloader').removeClass('show');

				if( res.trim() == 'dedicate' ){
					alert("อีเมล์นี้มีผู้ลงทะเบียนแล้ว");
				}else if( res.trim() == 'empty field' ){
					alert("กรุณากรอกข้อมูลครบทุกช่อง");
				}else{

					$('#thankyou').addClass('show').trigger('pxPopupAdShow');;

				}

			});

		}

		return false;

	});

});



function validate(){

	$('#reigster-projects-3').find('.has-error').removeClass('has-error');
	$('#reigster-projects-3').find('.txt-error').addClass('hidden');

	var result = true;

	$('.validate').each(function(){

		if( $(this).val() == '' && $(this).is('input[type=text]') ){
			$(this).parent().addClass('has-error');
			$(this).parent().find('.txt-error').removeClass('hidden');
		}

	});


	if( $('#email').val() != '' && !emailValidate( $('#email').val() ) ){
		$('#email').parent().addClass('has-error');
		$('#email').parent().find('.txt-error').removeClass('hidden');
	}

	if( $('input[name^=projects]:checked').length == 0 ){
		alert("กรุณาเลือกโครงการที่สนใจ");
		result = false;
	}


	if( $('#reigster-projects-3 .has-error').length > 0 ){
		result = false;
	}


	return result;
}



function emailValidate(emailAddress) {		
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}