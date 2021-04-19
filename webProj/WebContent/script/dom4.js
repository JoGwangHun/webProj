var ps = document.querySelector('div>p');
        ps.textContent = 'hello';
        ps.style.background = 'yellow';
       // ps.forEach(function (val){
        //     console.log(val);
        //     val.textContent='<h1>hello</h1>';       
        //     val.style.backgroundColor = 'green';    
        // });

       var numbers=[];
       for(i=1;i<=10;i++){
           numbers.push(i);
       }
       
        var evenVal = numbers.filter(function(val){
            return val % 3 ==0;
        });
        var mapVal = evenVal.map(function(val){
            return val * 2 ;
        });

        mapVal.forEach(function(val){
            console.log(val);
        });