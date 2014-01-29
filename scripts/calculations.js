addEventListener("message",msgWorkerHandler,true);
function msgWorkerHandler(event){
   var 	data = event.data;
	calTotalPrice(data.no_of_tickets,data.selected_date,data.no_of_booked_movies);
}

function calTotalPrice(noOfTickets,selectedDate,noOfBookedMovies){
  	   var ticketPrice = 100;
      var totalAmount = 0;
      var amount = ticketPrice*noOfTickets;
      var discountAmount2 = 0; 
    	discountAmount = checkForDiscount(amount,selectedDate);	
    	if(parseInt(noOfBookedMovies) >= 10)
    	{
			discountAmount2 = amount*.10;    		
    	} 
    	var totalDiscount = (discountAmount + discountAmount2);
    	totalAmount = (amount - totalDiscount);
    	postMessage(totalAmount);
  }	
  
  function checkForDiscount(amount,selectedDate){
  	var discountAmount = 0;
		if (selectedDate.getDay() != 0 && selectedDate.getDay() != 6)
	{
		discountAmount =  amount*.05;
	}
	return discountAmount;
  }