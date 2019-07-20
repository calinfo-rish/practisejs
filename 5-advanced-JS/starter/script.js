// FUnction

var john ={
name: 'John',
yearOfBirth: 1990,
job : 'teacher'
};

//Function Constructor
var Person = function (name,yearOfBirth,job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job=job;

}
 var john =new Person ('John',1990,'teacher');