function onGeoOk(position){
    console.log(position);
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
}
function onGeoError(){
    alert("can't");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);