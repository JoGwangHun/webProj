
// obj3
var tableTag = '<table frame="void" border="1">';
    for(var i=1;i<=9;i++){
            tableTag+='<tr><td id="td1">2*'+i+'</td>'+'<td id="td3">=</td>'+'<td id="td2">'+(2*i)+'</td>'
             +'<td id="td1">3*'+i+'</td>'+'<td id="td3">=</td>'+'<td id="td2">'+(3*i)+'</td>'
             +'<td id="td1">4*'+i+'</td>'+'<td id="td3">=</td>'+'<td id="td2">'+(4*i)+'</td></tr>'
        }

tableTag+='</table>';
document.write(tableTag);