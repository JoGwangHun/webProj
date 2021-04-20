  // var tables= document.getElementById('tb1');
       
        
    // function createTitle2(){
    //     var trTag=document.createElement('tr');
    //         for(var i=0; i<arguments.length;i++){
    //             var th1=document.createElement('th');
    //             th1.innerHTML=arguments[i];
    //             trTag.appendChild(th1);
    
    //         }
    //         tables.appendChild(trTag);
    //         }

      
    // function MainTable(){
    //     for(var p of persons){
    //       var button=document.createElement('button'); //child 
    //       var tr1=document.createElement('tr');
         
    //       for( var field in p){
    //         var td1= document.createElement('td');
    //         td1.innerHTML=p[field];
    //         tr1.appendChild(td1);
    //       }
          
    //       tables.appendChild(tr1);
    //       var buttons=document.createElement('td'); //버튼 td
    //       buttons.appendChild(button); //버튼 td >child
    //       button.innerHTML="삭제";
    //       tr1.appendChild(buttons);

    //       buttons.onclick=function(){
    //           this.parentNode.remove();
    //       }
    //     }
    // }
        
       //-----------------------------------------------------




//donEx.js
function createTitle(){
    var trTag = document.createElement('tr');
    trTag.style.backgroundColor='gray';
    for(var i=0; i<arguments.length;i++){
        var td1 = document.createElement('th');
        td1.innerHTML=arguments[i];
        trTag.appendChild(td1);
    }
   

    tb2.appendChild(trTag);
}



function createData(){
for(var p of persons){
var trTag=document.createElement('tr');
trTag.setAttribute('id',p.id)
trTag.onmouseover=mousOverFnc;
trTag.onmouseout=mousOutFnc;     

for (var field in p){      
   if(field == 'id'){
      var tdTag=document.createElement('td');
      tdTag.onclick=modifyFunc; 
      var text=document.createTextNode(p[field]);
        trTag.appendChild(tdTag);
        tdTag.appendChild(text);
   }else if(field =='name'){
    var tdTag=document.createElement('td');
    var link = document.createElement('a');
    link.setAttribute('href','dom.jsp?name='+p.name+' &id='+p.id+'&score='+p.score+'&gender='+p.gender);
    link.innerHTML =p.name;
    tdTag.appendChild(link);
    trTag.appendChild(tdTag);
    
   }else{
    var tdTag=document.createElement('td');
    var text = document.createTextNode(p[field]);
        trTag.appendChild(tdTag);
        tdTag.appendChild(text);
   }
     
}
var btn = document.createElement('button');
btn.innerHTML='삭제';
btn.onclick=deleteRow;

var tdTag = document.createElement('td');
tdTag.appendChild(btn);
trTag.appendChild(tdTag);

tb2.appendChild(trTag);

}
}

function mousOverFnc(){
    this.style.backgroundColor='yellow';
}
function mousOutFnc(){
    this.style.backgroundColor='';
}
function deleteRow(){
 this.parentNode.parentNode.remove();
}
function modifyFunc(){
    var idVal= this.innerHTML;
    var nameVal=this.previousSibling.innerHTML;
    var scoreVal=this.nextSibling.innerHTML;
    var genVal= this.parentNode.childNodes[3].innerHTML;
        
        document.getElementById('name').value= nameVal;
        document.getElementById('id').value= idVal;
        document.getElementById('id').readOnly=true;
        document.getElementById('id').style.backgroundColor="gray";
        document.getElementById('score').value= scoreVal;
    var genders= document.querySelectorAll('input[name="gender"]');
       for(var i=0; i<genders.length;i++){
           if(genders[i].value ==genVal){
            genders[i].checked= true;
           }
       }
}
function saveBtnFnc(){
    var iName=   document.getElementById('name');
           var iId= document.querySelector('input[name="id"]');
           var iScore = document.getElementsByTagName('input')[2];
           var iGender=document.querySelector('input[name="gender"]:checked');
        //    console.log(iGender.value);

          var trTag=document.createElement('tr');
              trTag.onmouseover=mousOverFnc;
              trTag.onmouseout=mousOutFnc;

            //name
           var tdTag=document.createElement('td');
           tdTag.innerHTML=iName.value;
           trTag.appendChild(tdTag);
           //id
           var tdTag=document.createElement('td');
           tdTag.innerHTML=iId.value;
           trTag.appendChild(tdTag);
           //score
           var tdTag=document.createElement('td');
           tdTag.innerHTML=iScore.value;
           trTag.appendChild(tdTag);
            //gender
           var tdTag=document.createElement('td');
           tdTag.innerHTML=iGender.value;
           trTag.appendChild(tdTag);
           //button
           var btn = document.createElement('button');
             btn.innerHTML='삭제';
             btn.onclick=deleteRow;
      
           var tdTag = document.createElement('td');
                tdTag.appendChild(btn);
                trTag.appendChild(tdTag);
          
           tb2.appendChild(trTag);
        
}

function modifyBtnFnc(){
    var id = document.getElementById('id').value;
    var targetTr =document.getElementById(id);
    console.log(targetTr);
    targetTr.children[0].innerHTML
           =document.getElementById('name').value;
    targetTr.children[2].innerHTML
           =document.getElementById('score').value;
    targetTr.children[3].innerHTML
           =document.querySelector('input[name="gender"]:checked').value;
}
    
