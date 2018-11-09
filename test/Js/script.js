
var map;
function initMap() {
    

    map = new google.maps.Map(document.getElementById('map'), {
        
        center: {lat: 43.729311, lng: -79.432360},
        zoom: 15,
        disableDefaultUI: true
    });
    var icon = {
        url: "Image/mark.png", // url
        scaledSize: new google.maps.Size(28, 40), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var marker = new google.maps.Marker({

        position: {lat: 43.729243, lng: -79.443798},

        map: map,

        title: 'Marker',

        icon: icon
    });
}