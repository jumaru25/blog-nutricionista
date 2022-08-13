var databox, db;
function iniciar(){
  databox = document.getElementById('databox');
  var button = document.getElementById('save');
  button.addEventListener('click', agregarobjeto, false);
 
  var request = indexedDB.open('mydatabase');
  request.addEventListener('error', errores, false);
  request.addEventListener('success', crear, false);
  request.addEventListener('upgradeneeded', creardb, false);
}
function errores(e){
  alert('Error: ' + e.code + ' ' + e.message);
}
function crear(e){
  db = e.target.result;
  mostrar();
}
function creardb(e){
  var datababase = e.target.result;
  var mystore = datababase.createObjectStore('movies', {keyPath: 'id'});
  mystore.createIndex('SearchYear', 'date', {unique: false});
}
function agregarobjeto(){
  var keyword = document.getElementById('keyword').value;
  var title = document.getElementById('text').value;
  var nivel = document.getElementById('nivel').value;
  var year = document.getElementById('year').value;
 
  var mytransaction = db.transaction(['movies'], "readwrite");
  var mystore = mytransaction.objectStore('movies');
  var request = mystore.add({id: keyword, name: title, urgencia: nivel, date: year});
  request.addEventListener('success', mostrar);
  document.getElementById('keyword').value = '';
  document.getElementById('text').value = '';
  document.getElementById('year').value = '';
}
function mostrar(){
  databox.innerHTML = '';
  var mytransaction = db.transaction(['movies']);
  var mystore = mytransaction.objectStore('movies');
  var newcursor = mystore.openCursor();
    newcursor.addEventListener('success', mostrarlista, false);
}
function mostrarlista(e){
  var cursor = e.target.result;
  if(cursor){
    databox.innerHTML += '<div>' + cursor.value.id + ' - ' + cursor.value.name + ' - ' + cursor.value.urgencia + ' - ' + cursor.value.date + ' <input type="button" class="botones" onclick="eliminarobjeto(\'' + cursor.value.id + '\')" value="Eliminar"></div>';
 
    cursor.continue();
  }
}
function eliminarobjeto(keyword){
  if(confirm('Está seguro?')){
    var mytransaction = db.transaction(['movies'], "readwrite");
    var mystore = mytransaction.objectStore('movies');
    var request = mystore.delete(keyword);
    request.addEventListener('success', mostrar);
  }
    }
addEventListener('load', iniciar, false);