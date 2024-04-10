function initMap() {
    // Map options
    var options = {
        zoom: 13,
        center: {lat: 41.883, lng: -87.632} // Coordinates of Chicago
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add markers
    addMarker({lat: 41.895, lng: -87.624}, 'Nutella Cafe'); // Nutella Cafe
    addMarker({lat: 41.882, lng: -87.623}, 'Millennium Park'); // Millennium Park
    addMarker({lat: 41.851, lng: -87.634}, 'Chinatown'); // Chinatown

    // Add Marker Function
    function addMarker(coords, title) {
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: title
        });
    }
}
