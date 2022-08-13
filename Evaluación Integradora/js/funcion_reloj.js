    function extract(){ 
   	fecha = new Date(); 
   	hora = fecha.getHours(); 
   	minuto = fecha.getMinutes(); 
   	segundo = fecha.getSeconds();
    str_segundo = new String (segundo); 
   	if (str_segundo.length == 1){ 
        segundo = "0" + segundo;} 
   	str_minuto = new String (minuto); 
   	if (str_minuto.length == 1){ 
      	minuto = "0" + minuto;} 
   	str_hora = new String (hora) 
   	if (str_hora.length == 1){ 
      	hora = "0" + hora;} 
    dia=fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
   	horactual = hora + " : " + minuto + " : " + segundo +" - "+ dia; 
   	document.form_reloj.reloj.value = horactual;
   	setTimeout("extract()",1000); 
    }
    function foco() {
        window.document.form_reloj.reloj.blur();
    }