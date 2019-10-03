$("#error").hide();
$("#hud").show();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(gotLocation, gotError)
} else {
    displayError("An error occured with your request.");
}

navigator.geolocation.getCurrentPosition(gotLocation);

function gotLocation(currentPosition) {
    $("#hud").hide();

    var $restaurants = $("span");

    $restaurants.each(function () {
        var restaurantLatitude = $(this).data("lat");
        var restaurantLongitude = $(this).data("lon");

        var distanceInMiles = calculateDistance(currentPosition.coords.latitude, currentPosition.coords.longitude, restaurantLatitude, restaurantLongitude);

        $(this).text(distanceInMiles + " miles");
    });
}

function gotError(error) {
    var message;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "You need to give permission to use your location to calculate distances.";
            break;
        case error.POSITION_UNAVAILABLE:
            message: "There was an error getting your location from your device.";
            break;
        case error.TIMEOUT:
            message = "It took too long getting your position.";
            break;
            default:
                message = "An unkown error has occured.";
                break;
    }
    displayError(message);
}

function displayError(message) {
    $("#hud").hide();
    $("#error").text(message).show("slow");
}