'use strict';

console.log('!');

function make_file(){

  let text= document.getElementById('txt_data').value;
  let file_name= document.getElementById('file_name').value;
  let file_type= document.getElementById('file_type').value;

  let blob = new Blob([text],{type:"text/plan"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = file_name+'.'+file_type;
  link.click();

}

window.onload=function(){
  document.querySelector('#make_btn').addEventListener('click',function(){make_file();});
}