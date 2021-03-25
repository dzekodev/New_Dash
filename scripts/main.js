//copyright-------------------------
var d = new Date();
var n = d.getFullYear();


document.getElementById("copyright").innerHTML = "All Right reseaved " + n; 

//map------------------------------
var myCenter = new google.maps.LatLng(33.974886, -6.822269);

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);