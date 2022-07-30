function birthyear2age(){
    event.preventDefault();

    var birthyear;
    var age;
    var d=new Date();

    birthyear = document.getElementById("birthYear").value;
    age = d.getFullYear() - birthyear;

    document.getElementById("result").innerHTML="Yaşınız: " + age;

 


}
