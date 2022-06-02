# weather-app
Weather app project for the Odin Project.

---Features---

    -Get current weather data for anywhere on the planet!

    -Search for a city, province (or territory or state), or country!

    -Or continent apparently! just tried it. How useful could that possibly be?

    -Switch from celsius to fahrenheit!

    -Temperature, location, local time, and cloud % all displayed!

    -Cute little sun/moon/clouds

    -Time is displayed with sun/moon

    -Cloud % shown with amount of clouds

    -Scene brightness based on local time of selected location.

    -Rain! Try typing in a city where it is currently raining.

    -Responsive for desktop layouts. Not designed for mobile.

---Devlog---

May 30th, 2022

    Webpack dev server is awesome. I learnt this when I got it working for the first time. However, it took me like three hours to get working. For the next few projects/assignments, I dreaded returning to it cause I didn't really understand it, despite the convenience it brings when you get it working.

    I am happy to say that I still don't understand how most of it works, but it only took me like 30 minutes to set up from scratch, with all the bells and whistles. Regardless of how the start of this weather app goes, today was a productive day. Finished my hearthstone non-API, read about async/await which seems much more straightforward and useful now, set up webpack and also cleaned my room. And did my laundry. Great day. Thanks rockstar energy.

    This weather app will be simple, but handsome. That is my plan. Since I went overboard with the last API thing, I should be able to get this weather app set up faster than I could have otherwise.

May 31st, 2022

    Found what should be an elegeant solution for adding current time based on city name. Having issues with CORS though. I think it's only a problem because of webpack dev server, so I'm setting up the github pages to try that out.

    Not how I was intended to use that other API. Some sort of backend I guess. Switched to a different API with similar usage and it works great now.

    Tweaking everything to work just right has been a bit of a pain. I also filled an entire sketchbook page with notes regarding calculating moon/sun position and backdrop brightness in relation to the selected time. This is because I've become bad at math since high school. Still got it to work, and other than the slowdown, which I may be able to fix, it works great.

    Added clouds as well today. Wasn't sure how I was gonna animate them at first, but the first setup I tried actually looks pretty cool, or at least on theme for the site.

June 1st, 2022

    Today's plan. Finish cloud logic, add darkening of the background based on cloudiness as well as time of day, and style the weather info/input. Add unit conversion button, and fix widescreen view. All in all, things that should be easy to implement as most of the logic is done, and all the assets are done. Not quite sure how I'm going to the rain though.

June 2nd, 2022

    Clouds basically work as intended. The only catch is that the animation for them is not perfect. I went way overboard for this project, so I'm moving on for now and may clean it up later. Only need to work on the UI now.

    Oh, and go buy Stacklands on steam. It's $5. And it caused me to stay up so late that I could barely program yesterday.

    Relatively quick and fun 2.5 day project, including drawing time. Somehow most of that time was spent fixing the damn clouds. Which still look jank. At some point, I'm gonna come back to these old projects and maybe fix minor things like that.


---To-Do---

DONE-Desktop media query (skip mobile first)
DONE-F to C to F
DONE-big background representing time, with darkness/stars/moon/sun
DONE-dynamic clouds
DONE-style weather info
DONE-fix wide desktop layout
DONE-add rain effects.
CANCEL-add stars?
DONE-city error message
DONE-fix cloud positioning
CANCEL (no API data for this?)-display country and city