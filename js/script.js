function calc() {  
   var name1 = document.getElementById("name1").value;
   var name2 = document.getElementById("name2").value;
   var name1L = name1.toLowerCase();
   var name2L = name2.toLowerCase();
   var result = document.getElementById("res");
   var perc = Math.random();
   perc = Math.floor(perc * 100) + 1;

   if(name1L == "arun" && name2L == "pratima") { 
      result.innerHTML = "<img src= 'images/heart.gif' id= 'heart'><p class= 'resText'><span class= 'name'>"+name1+"</span> and <span class= 'name'>"+name2+"</span> have the best love story ever. They are made for each other. Love between them cannot be expressed in Percentage.</p>";
   } else if (name1L == "arun" && name2L != "pratima") {
      result.innerHTML = "<img src= 'images/heart.gif' id= 'heart'><p class= 'resText'>The probability of succesful relationship between <span class= 'name'>"+name1+"</span> and <span class= 'name'>"+name2+"</span> is 0%.";
   } else if (name1L != "arun" && name2L == "pratima") {
      result.innerHTML = "<img src= 'images/heart.gif' id= 'heart'><p class= 'resText'>The probability of succesful relationship between <span class= 'name'>"+name1+"</span> and <span class= 'name'>"+name2+"</span> is 0%.";
   } else {
      result.innerHTML = "<img src= 'images/heart.gif' id= 'heart'><p class= 'resText'>The probability of succesful relationship between <span class= 'name'>"+name1+"</span> and <span class= 'name'>"+name2+"</span> is "+perc+"%."; 
   }
}
