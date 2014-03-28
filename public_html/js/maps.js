
function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(51.08, -114.135353),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(map_canvas, mapOptions);
    markers(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

function markers(map) {
    var iconBase = 'https://maps.google.com/mapfiles/';
    var location = [
        new google.maps.LatLng(51.071, -114.135353),
        new google.maps.LatLng(51.0745, -114.13456),
        new google.maps.LatLng(51.0782, -114.13556),
        new google.maps.LatLng(51.0734, -114.13345),
        new google.maps.LatLng(51.0711, -114.1387),
        new google.maps.LatLng(51.0715, -114.1321),
        new google.maps.LatLng(51.0766, -114.1344),
        new google.maps.LatLng(51.0723, -114.1366),
        new google.maps.LatLng(51.0742, -114.1377),
        new google.maps.LatLng(51.0700, -114.1345)
    ]

    for (var i = 0; i < location.length; i++) {
        new google.maps.Marker({
            position: location[i],
            map: map,
            icon: iconBase + 'marker_purple.png'
        });
    }

}
