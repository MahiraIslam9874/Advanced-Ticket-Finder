// JS Part

// List of available locations
const LOCATIONS = ['Gulistan','Moghbazar','Tejgaon','Mohakhali','Bishwa Road','Khilkhet','Airport','Tongi','Abdullahpur','Dhanmondi','Motijheel','Uttara','Mirpur','Savar','Gazipur'];

// Ticket prices for each type
const TICKET_PRICES = { adult: 100, child: 60, female: 80 };

// Get references to HTML elements
const fromEl = document.getElementById('from');
const toEl = document.getElementById('to');

// Populate From & To dropdowns dynamically
LOCATIONS.forEach(loc=>{
  const o1 = document.createElement('option'); 
  o1.value = loc; 
  o1.textContent = loc; 
  fromEl.appendChild(o1);

  const o2 = document.createElement('option'); 
  o2.value = loc; 
  o2.textContent = loc; 
  toEl.appendChild(o2);
});

// Set default selected values
fromEl.value='Uttara';
toEl.value='Mohakhali';

// Function to calculate total ticket price
function calculatePrice(){
  const from = fromEl.value;
  const to = toEl.value;

  // Validate that From and To are not the same
  if(from === to){
    alert("From এবং To একই হতে পারবে না।"); // Alert user
    return;
  }

  // Get ticket type and number of seats
  const type = document.getElementById('ticketType').value;
  const seats = parseInt(document.getElementById('seat').value) || 1;
  const pricePerSeat = TICKET_PRICES[type];
  const total = pricePerSeat * seats;

  // Display the result
  document.getElementById('result').innerText = 
    `${from} → ${to}\nType: ${type.charAt(0).toUpperCase() + type.slice(1)}\nSeats: ${seats}\nTotal Price: ৳${total}`;
}


