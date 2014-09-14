
<script> 

var rendererOptions = {
    draggable: true
  };
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
  var directionsService = new google.maps.DirectionsService();
  var map;

 
  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var newyork = new google.maps.LatLng(40.773887,-73.980238);
    var myOptions = {
      zoom:13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: newyork
    }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));

    google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
      computeTotalDistance(directionsDisplay.directions);
    });
    
   /* calcRoute();*/
  
  defaultSettings();
  
  }
  
  function calcRoute() {
    
    
  if (document.getElementById("start").value != "") {
    activeSettings();
  }
  else{
    defaultSettings();
    }
  

    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var request = {
        origin:start, 
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  

  }
  
  function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000.
    document.getElementById("total").innerHTML = "Total Distance:" + total + " mi";
  }   
  
  function defaultSettings(){
  /* set properties */
  document.getElementById("map_canvas").style.width="100%";
  document.getElementById("directionsPanel").style.display="none";
  document.getElementById("total").style.display="none";    
    }
  
  function activeSettings(){
  /* set properties */
  document.getElementById("map_canvas").style.width="70%";
  document.getElementById("directionsPanel").style.display="block";
  document.getElementById("total").style.display="block";   
  
    }
  
  window.onload=function(){
    initialize();

    }
  
</script>









                                                                                                                     <script>(function() {with (this[2]) {with (this[1]) {with (this[0]) {return function(event) {calcRoute()
};}}}})</script>