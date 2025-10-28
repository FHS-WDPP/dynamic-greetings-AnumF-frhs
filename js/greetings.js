        /**
         * The core logic function that determines the time of day and updates the display.
         */
        const now = new Date();
        let hour = now.getHours();
        console.log(now.getHours());
        hour = 12;
    
        //0-12 pm
        function updateGreeting() {

            // Get references to the three time-of-day element containers
            let greetingText = document.getElementById("greeting-text");

            
            // Get a reference to the body tag for background color changes

            


            // 1. Hide all elements first (ensures only one is shown)



            // 2. Conditional Logic: Determine the time frame using if/else statements
            


            // Morning: 5 AM (inclusive) to 12 PM (exclusive) -> Hours 5 to 11
             if ( hour< 12) {
                greetingText.textContent = "Good Morning!";
                document.querySelector(".afternoon").classList.add("d-none");
                document.querySelector(".night").classList.add("d-none");
                greetingText.parentElement.classList.add("night-gradient");
              }



                // Show Morning


            // Afternoon: 12 PM (inclusive) to 6 PM (exclusive) -> Hours 12 to 17

                  else if ( hour < 17) {
                greetingText.textContent = "Good Afternoon!";
                document.querySelector(".morning").classList.add("d-none");
                document.querySelector(".night").classList.add("d-none");
                document.getElementsByTagName("boafternoon")[0].classList.add("noon");
                greetingText.parentElement.classList.add("noon");

              }

                // Show Afternoon


            // Night: 6 PM (inclusive) to 4 AM (inclusive) -> Hours 18 to 4
                else {
                greetingText.textContent = "Goodnight!";
                document.querySelector(".afternoon").classList.add("d-none");
                document.querySelector(".morning").classList.add("d-none");
              }


            // Optional: Log the current time for debugging

        }

        // Run the function once when the script loads
        // Optional: Run the function every 30 seconds (or more frequently) to update automatically
        // Note: Students should understand this is for real-time changes
        // setInterval(updateGreeting, 30000); 
