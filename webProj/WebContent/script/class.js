class Student{
    constructor(name, age , score){
            this.name=name;
            this.age=age;
            this.score=score;
    }
showAge() {
    return this.age;
}    
showInfo(){
    return '이름은 ' + this.name + ', 점수는' + this.score;
    }
}

var students = [];
students[0] = new Student('정동영',25,80);
students[1] = new Student('김이담',24,83);
students[2] = new Student('석정원',22,75);
students[3] = new Student('공도현',35,67);

console.log(students);

function createTr(obj){
    var tr = '<tr>';
    tr +='  <td>'+obj.name + '</td>';
    tr +='  <td>'+obj.age + '</td>';
    tr +='  <td>'+obj.score + '</td>';
    tr +='</tr>';
    return tr;
}
var table='<table>';
    for(var i=0;i<students.length;i++){
      table+= createTr(students[i]);
    }
table +='</table>'
document.write(table);