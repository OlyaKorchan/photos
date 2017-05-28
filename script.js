window.fbAsyncInit = function () {
    FB.init({
        appId: '299708440455432',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function LoginToFacebook() {
    var photos = [];
    FB.login(function (response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Good to see you, ' + response.name + '.');
            });
            FB.api('/me/photos?type=uploaded', function (response) {
                photos = response.data;
                for (var i = 0; i < photos.length; i++){
                    FB.api('/me/' + photos[i].id + '', function(response){
                        console.log(response.data);
                    });
                }
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'email,user_photos,public_profile'
    });
    
}

document.getElementById("login").addEventListener("click", LoginToFacebook, false);