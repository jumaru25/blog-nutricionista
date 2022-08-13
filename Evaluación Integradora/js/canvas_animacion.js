// JavaScript Document

function iniciar(){
var elemento=document.getElementById('lienzo');
lienzo=elemento.getContext('2d');
var x = 50;
var y = 10;
var movx = 3;
var movy = 3;
setInterval(function(){

if( x >= 960 || x <= 0 )
   movx = movx*-1;
if( y >= 23 || y <= 0 )
   movy = movy*-1;
    
x = x+movx;
y = y+movy;
    
lienzo.clearRect(0,0,960,25);
lienzo.fillStyle='#FF0000';
lienzo.beginPath();
lienzo.arc(x,y,5,0,Math.PI*2, false); 
lienzo.fill();},20);}
window.addEventListener("load", iniciar, false);