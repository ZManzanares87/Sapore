
  function initMap() {
    var myLatLng = {lat: 40.785091, lng: -73.968285}; /* Posición del mapa */
    
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12 /* Nivel de zoom */
    });
    
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Mi marcador' /* Texto del marcador */
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);


