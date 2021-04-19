var formTag = document.createElement('form');
formTag.setAttribute('action','login.jsp');
formTag.setAttribute('method','get');


var inputId =document.createElement('input');
inputId.setAttribute('type','text');
inputId.setAttribute('name','id');

var inputPwd =document.createElement('input');
inputPwd.setAttribute('type','password');
inputPwd.setAttribute('name','passwd');

var inputsubmit =document.createElement('input');
inputsubmit.setAttribute('type','submit');
inputsubmit.setAttribute('value','Send');

var inputreset =document.createElement('input');
inputreset.setAttribute('type','reset');
inputreset.setAttribute('value','Cancel');    

var text2=document.createTextNode('passwd :');
var text1=document.createTextNode('id :');

formTag.appendChild(text1);
formTag.appendChild(inputId);
formTag.appendChild(text2);
formTag.appendChild(inputPwd);
formTag.appendChild(inputsubmit);
formTag.appendChild(inputreset);


console.log(formTag);


var show = document.getElementById('show');

show.appendChild(formTag);  
inputId.setAttribute('style','background-color:red');
inputPwd.setAttribute('style','background-color:gray');
show.setAttribute('style','background-color:skyblue');
