Tested On firefox 26, Chrome Version 29.0.1547.62
===========================================================
Main Html file - MovieBokking.html
JavaScript File - scripts/calculations.js

-------------------------------------------------------------------------------------------
// Assumtion :- Ticket Price = 100 - As there is not mentioned ticket price
// Validations :- Default Date is todays date & no. of tickets is 0 if user not selected.

------------------------------------------------------------------------------------------
Calculations :-

* No discount applicable -- (Week-end Ticket booking ...within first 10 movies)
  -----------------------------------------------------------------------------
total_amount = ticketPrice * no.of.tickets
e.g.
 total_amount = 100 * 2
     total_amount = 200 RS

* Week Day ticket booking having 5% discount -(2 Tickets each 100 RS 5% discount)
  ----------------------------------------------------------------------------------------
amount = ticketPrice * no.of.tickets
discount = amount*discount %

e.g.
    amount = 100*2
    amount = 200
    discount  = 5%
    discount = amount * .05
             = 200 * .05
             = 10
    total_amount = amount - discount
     total_amount   = 200 - 10
                    = 190 RS

* Movies booked till date more than 10 then having 10% discount -(2 Tickets each 100 RS 10% discount)
  ----------------------------------------------------------------------------------------
amount = ticketPrice * no.of.tickets
discount = amount*discount %

e.g.
    amount = 100*2
    amount = 200
    discount  = 10%
    discount = amount * .10
             = 200 * .10
             = 20
    total_amount = amount - discount
     total_amount   = 200 - 20
                    = 180 RS


* Movies booked till date more than 10 plus booking on week day then having 5+10% = 15% discount -(2 Tickets each 100 RS 15% discount)

amount = ticketPrice * no.of.tickets
discount = amount*discount %

e.g.
    amount = 100*2
    amount = 200
    discount  = 15%
    discount = amount * .15
             = 200 * .15
             = 30
    total_amount = amount - discount
     total_amount   = 200 - 30
                    = 170 RS

