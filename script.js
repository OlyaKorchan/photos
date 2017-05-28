window.fbAsyncInit = function () {
    FB.init({
        appId: '299708440455432',
        cookie: true,
        xfbml: true,
        version: 'v2.9'
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
console.log(response);
        // if (response.authResponse) {
        //     console.log('Welcome!  Fetching your information.... ');
        //     // FB.api('/me', function (response) {
        //     //     console.log('Good to see you, ' + response.name + '.');
        //     //     console.log(response);
        //     // });
        //     // FB.api('/me/friends', function (response) {
        //     //     console.log(response.data);
        //     // });
        // } else {
        //     console.log('User cancelled login or did not fully authorize.');
        // }
    }, {
        scope: 'email,public_profile,user_friends',
        return_scopes: true
    });
    
}

document.getElementById("login").addEventListener("click", LoginToFacebook, false);