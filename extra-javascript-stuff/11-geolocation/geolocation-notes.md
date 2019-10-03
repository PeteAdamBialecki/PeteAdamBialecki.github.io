# **JavaScript Geolocation API**

        navigator.geolocation.getCurrentPosition(callback)
        navigator.geolocation.watchPosition(callback)

watchPosition

        function callback(position) {
            position.coords.latitude;
            position.coords.longitude;
            //positon.coords. ...
        }
