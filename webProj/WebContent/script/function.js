// function.js
    function sum(num3,num4){
        var num1 = 10;
        var num2 = 20;
        console.log(num1+num2+ num3+num4);
        return num1+num2+num3+num4;
    }
        sum(30,40,50);

        // var result= sum(30,40,50);
        var numAry = [3,2,5,6,7];
        function arySum(ary){
             var sum=0;
            for(var i=0;i<ary.length;i++){
                sum+=ary[i];
            }
            return sum;
        }

        var result= arySum(numAry);
        document.write('결과값은'+result);

        function multi(grade){
        var tableTag = '<table frame="void" border="1">';
         for(var i=1;i<=9;i++){
             tableTag+='<tr>';
             tableTag+='    <td>'+grade+'*'+i+'</td>';
             tableTag+='    <td>=</td>';
             tableTag+='    <td>'+ (grade * i) + '</td>'
             tableTag+= '<tr>'
         }
             tableTag+='</table>';
        document.write(tableTag);
        }
        for(var i=2;i<=9;i++){
            multi(i);
        }
