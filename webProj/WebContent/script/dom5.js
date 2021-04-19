
      var buttons=  document.getElementsByTagName('button');
      console.log(buttons);
      for(var i=0; i<buttons.length; i++){
     buttons[i].setAttribute('onclick','showTable()');
      }
      var p1 = { 
              name: '성진아',
              score:80,
               age:25
      }
      var p2 = {
              name: '김수민',
              score:83,
              age:30
      }
      var p3 = {
              name: '장재우',
              score:85,
              age:18
      }
     
      for( var field in p3){
           console.log(field,p3[field]);
      }
      var persons = [p1,p2,p3];
      // for(var p of persons){  //배열의 개수만큼반복
      //     console.log(p.name);
      //     console.log(p.score);
      // }
      //<table border='1'><tr><td>성진아</td>....</table>
   
  function showTable() {
    var tb= document.createElement('table');
      tb.setAttribute('border','1');
    

      for(var p of persons){ //배열에서 반복
      var tr1 = document.createElement('tr');
      for(var field in p){ // object에서 반복
      var td1 = document.createElement('td');
      td1.innerHTML=p[field]; 
      tr1.appendChild(td1);
      // var td2=document.createElement('td');
      // td2.innerHTML=p.score;

      }
      tb.appendChild(tr1);
      // tr1.appendChild(td1);
      // tr1.appendChild(td2);
     
      }
      
      var show =document.getElementById('show');
          show.appendChild(tb);
  }