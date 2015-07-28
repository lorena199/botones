function  color() {
	document.body.style.backgroundColor="red";
	alert("Fondo Rojo");
}

function blue() {
	document.body.style.backgroundColor="blue";
	alert("Fondo Azul");
}

function hora() {
	var fecha = new Date();
	<!--alert("Día: "+fecha.getDate()+"\nMes: "+(fecha.getMonth()+1)+"\nAño: "+fecha.getFullYear());//-->
	alert("La Hora del sistema es: "+fecha.getHours()+" : "+fecha.getMinutes()+" : "+fecha.getSeconds());
}
function fecha(){
	var fecha=new Date();
document.write("Día: "+fecha.getDate()+"\nMes: "+(fecha.getMonth()+1)+"\nAño: "+fecha.getFullYear());
}
function url(){
	location.href;
	alert(location.href);
}