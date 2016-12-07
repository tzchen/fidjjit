$(function() {
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '1704747783175388',
          xfbml      : true,
          version    : 'v2.8'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    var client_id = "1704747783175388";
    var client_secret = "fa448beb412c56421fdb1f2c3cec65f1";

    $.get(
        "https://graph.facebook.com/oauth/access_token?client_id="
        + client_id + "&client_secret=" 
        + client_secret + "&grant_type=client_credentials"
    )

    FB.api(
        '/fasasuw/events',
        'GET',
        {},
        function(response) {
            // code goes here
        }
    );


    
    $('main').append()
    
});