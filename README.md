# Week-3-Assingment

18/09/2025
Added relevant HTML elemtents linked them to JS. (nice and easy)

Added cookieCount and cps and gave them values. (also easy)

Created the setInterval function to add a cookie every one second. Updated the DOM so that the "Cookies Collected" and "CPS" would be displayed on screen.
Added ability for saving in local storage using localStorage.setItem. Also used localStorage.getItem so if page was refreshed the count would continue unless cleared manually. (Used yesterdays workshop to help me out with all this)

Gave the cookieImage an event listener so that when clicked it would increas the count by plus 1.

Created async function to .await fetch the ShopUpgrades from the API

Added shop container class so When it comes to styling it wil be easier to have them grouped

Added a forEach loop for the upgrades.

Brain stopped working and struggled to get new shop item elemtents on screen. Tomorrows job I think.

19/09/
got the shop items displayed on screen using my forEach loop, document.createElement and appendChild. Also added a button to each using the same type of method.
Added shopItem.classList.add to give each upgrade the ability to be indivually styled if

I will add button functionality next to increase and decrease the the cps and cookieCount based on user interaction

Added the upgrade button functionality, this was easier than I thought. I still had to google things becasue I would often get the syntax mixed around and it wouldn't work. I was going to add a seperate eventListener for each button but I had a google and could put them all together inside one by an if else statement and using the state object alongside my forEach function

My biggest issue on these assignments is trying to remember the syntax of things and then how to link for example, a function to another function or other variables. I couldn't write it off the top of my head I dont think. I can explain each section and what they are for but sometimes I can't see what they actually do if that makes sense?

Adding styling next. I want to group cookie image and cookie count together so that when positioning they will be linked.

21/09
Added animation to the cookie so when clicking it will scale down and on mouse up it will revert back to normal size. I had to make a new event listener in JS for the scaling as I could not get it to work in css.

added colours to to each container.

I realised I had been styling while zoomed out 60% so now I am having to restyle everything for 100%

Added background image. I initally added an image and hit save and it threw all my positioning everywhere and wouldn't go back to how I had it. I also organised my CSS a bit more by having the containers only for sizing and then used the sub divs for the flair.
