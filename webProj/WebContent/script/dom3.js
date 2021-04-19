var names=[];
        names[0]='유정모';
        names.push('구자혁'); //마지막 위치 추가
        names.push('석정원');
        names.pop();//마지막 위치 제거.
        delete names[0];// 요소정보 삭제.
        names.shift();// 처음 위치 제거.
        names.unshift('김이담');//처음 위치 추가
        names.push('공도현');
        names.push('소국진');
        names.push('전형민');
       
        // var show = document.getElementById('show');
        // var ulTag = document.createElement('ul');

        // show.appendChild(ulTag);

        var returnVal = names.map(function(val, idx, ary){
            var person={};
            person.name = val;
            person.num = idx;

            return person;
        });   

        console.log(returnVal);
        console.log('=========' );
       
        var returnFil = returnVal.filter(function(val,idx, ary){
            return idx % 2 ==0;

        });

        // names.forEach(function(val, adx, ary){
        //     console.log(`names 요소:  ${val}, ${adx},${ary}`); // console.log('names 요소: '+ i)
        //      });
        

        console.log(returnFil);  