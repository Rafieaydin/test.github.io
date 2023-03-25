
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('lang').innerHTML = "Latitude :" + position.coords.latitude;
    document.getElementById('long').innerHTML = "Longitude :" + position.coords.longitude;
   
        axios.get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+position.coords.latitude+'&longitude='+position.coords.longitude+'&localityLanguage=id').then(response => {
        // console.log(response.data);
        document.getElementById('negara :').innerHTML = "Negara :" + response.data.countryName;
        document.getElementById('kota :').innerHTML = "kota :" + response.data.city;
        document.getElementById('Network :').innerHTML = "Network :" + response.data.principalSubdivisionCode;
        
          });
    axios.get('https://ipapi.co/json/').then(response => {
        document.getElementById('ip :').innerHTML = "IP :" + response.data.ip;
    });
    const map = new maplibregl.Map({
        container: 'map', // container's id or the HTML element in which MapLigitbre GL JS will render the map
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=opggJpjbC7ntyy3YGTv0`, // style URL
        center: [position.coords.longitude,position.coords.latitude], // starting position [lng, lat]
        zoom: 18, // starting zoom
      });
      map.addControl(new maplibregl.NavigationControl(), 'top-right');
});
}else{
    console.log("Geolocation is not supported by this browser.");
}