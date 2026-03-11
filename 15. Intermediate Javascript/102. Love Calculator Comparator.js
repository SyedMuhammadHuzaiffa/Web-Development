function loveCalculator(){

let name1 = prompt("Enter First Name");

let name2 = prompt("Enter Second Name");

let percentage = Math.round(Math.random() * 100);

if (percentage >= 70){

    alert("The Love between " +name1 + " and " + name2 + " is " + percentage + " % same like Laila Majnu");
}

else if(percentage > 30 && percentage < 70){
    alert("The Love between " +name1 + " and " + name2 + " is " + percentage + " % ");
}

else{
    alert("The Love between " +name1 + " and " + name2 + " is " + percentage + " %!!!!!!!!!!!!!!!!!! I think you both don't love eachother");
}



}


loveCalculator();