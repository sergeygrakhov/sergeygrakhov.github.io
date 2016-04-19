'use strict';
    function Human()  {
            this.name = 'Ivan';
            this.age = 33;
            this.sex = 'male';
            this.height = 177;
            this.weight = 75;
    }
var newHuman = new Human();

    function  Worker() {
        this.workAt = 'Frontend';
        this.salary = 30000;
        this.work = function () {
            alert('I am working');
        }
    }
    function Student()  {
        this.studyAt= 'GoIT';
        this.scholarship= 1000;
        this.watchSerials = function () {
            alert('I am watching serial!');
        }
    }
    Worker.prototype = newHuman;
    Student.prototype = newHuman;
    var worker1 = new Worker();
    var worker2 = new Worker();
    var student1 = new Student();
    var student2 = new Student();
console.log(worker1);
console.log(worker2);
console.log(student1);
console.log(student2);


//
//worker1.name = 'Girl';
//worker1.age = 22;
//worker1.sex = 'female';
//worker1.height = 155;
//worker1.weight = 50;
//worker1.workAt = 'Tv';
//worker1.salary = 10000;
//worker2.name = 'John';
//worker2.age = 44;
//worker2.sex = 'male';
//worker2.height = 180;
//worker2.weight = 90;
//worker2.workAt = 'LMS';
//worker2.salary = 20000;
//student1.name = 'Peter';
//student1.age = 20;
//student1.sex = 'male';
//student1.studyAt = 'KPI';
//student1.scholarship = 500;
//student1.height = 145;
//student1.weight = 45;
//student2.na2e = 'Ira';
//student2.age = 21;
//student2.sex = 'female';
//student2.studyAt = 'KNEU';
//student2.scholarship = 700;
//student2.height = 180;
//student2.weight = 50;
//console.log(worker1);
//console.log(worker2);
//console.log(student1);
//console.log(student2);