var talkingCalendar = function(date) {
 // Your code here

 var parts = date.split("/");
 var Year  = parts[0];
 var Month = parts[1];
 var Day   = parts[2];

 var Name = ""
 switch (Month) {
       case "01":
         Name = "January";
           break;
       case "02":
         Name = "February";
           break;
       case "03":
         Name = "March";
           break;
       case "04":
         Name = "April";
           break;
       case "05":
         Name = "May";
           break;
       case "06":
         Name = "June";
           break;
       case "07":
         Name = "July";
           break;
       case "08":
         Name = "August";
           break;
       case "09":
         Name = "September";
           break;
       case "10":
         Name = "October";
           break;
       case "11":
         Name = "November";
           break;
       case "12":
         Name = "December";
           break;
 }

 var Days = function(Day){
 if(Day == "01" || Day == "21" || Day == "31"){
   Text = Day + "st";
 }
 else if(Day == "02" || Day == "22"){
   Text = Day +"nd";
 }
 else if(Day == "03" || Day == "23"){
   Text = Day + "rd";
 }
 else{
   Text = Day + "th";
 }
}
 return Name + " " + Day + ", " + Year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
