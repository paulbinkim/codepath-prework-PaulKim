# Paul Kim Pre-Work Memory Game

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Paul Kim

Time spent: 5 hours spent in total (Excluding Submission Steps)

Link to project: 

Website: https://noisy-foam-princess.glitch.me

Code: https://glitch.com/edit/#!/noisy-foam-princess?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] User has a limited amount of time to enter their guess on each turn
* [X] Game button appearance change goes beyond color (e.g. add an image)

<!-- 
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones) 
-->

The following **additional** features are implemented:

- [X] Difficulty Setting for Speeds (Easy, Medium, Hard)
- [X] Display Remaining Guesses Left
- [X] Max and Current Score Tracker
- [X] Volume Changer
- [X] Display Volume Changer
- [X] Start/Stop Buttons Switch Colors
- [X] Winning Image Displayed
- [X] Losing Image Displayed


## Video Walkthrough (GIF)

GIF Video Walk Through of Implemented Functionality

Easy Success Trial

![EasySuccess](https://user-images.githubusercontent.com/69881202/164789551-af51cc19-92b0-4b41-91d6-d84c74aa045e.gif)

Medium Failure Trial

![MediumFailure](https://user-images.githubusercontent.com/69881202/164789582-f8c41655-e888-4800-908f-f7dc8872c7c7.gif)

Hard Success Trial

![HardSuccess](https://user-images.githubusercontent.com/69881202/164789606-adaa9285-1b28-46f2-b4cf-be350a369c89.gif)

Button Features Trial

![Button Features](https://user-images.githubusercontent.com/69881202/164789628-1351440e-6a12-4dcc-ac62-a37c3e95e344.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  
    * Stack Overflow -- General Reference for HTML, CSS, and Javascript.

    * W3Schools -- General Reference for HTML and CSS.

    * University of Southern California Lecture Notes (ITP 104 (Intro. Web Dev), CSCI 201 (Principles of Software Engineering)) -- General CSS, HTML, JS Documentation.

    * https://www.intmath.com/trigonometric-graphs/music.php -- General Reference for Musical Frequencies

    * https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework -- Main Reference (Tutorial)

    * Lots of JavaScript Reference and CSS Styling Help.
    * Lots of Dynamic HTML Help.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    Undoubtedly the biggest challenge I faced while creating this submission was setting up and implementing the countdown timer that constrained the player when repeating the melodic sequence. The feature was a challenge because throughout the code, I discovered that there were many aspects and areas of logic where we needed to reset the counter. For example, I knew I had to use countDown() and setInterval() function to correctly pace the timer, but I ran into cases where I was stuck in an infinite loop where the player had less and less time to input their answer, even when I thought my logic circuit was correct. After researching this issue on StackFlow and attempting various different functions and techniques to debug, I realized I was missing the function clearInterval() before setInterval(). When this function was implemented, I was able to not only successfully terminate the existing timer that was counting down, but also allowed the player to have the correct time remaining after each run, to input their answer. 

    Another problem I faced when creating the timer function is having the timer terminate and start again with a 1 second delay between rounds. I researched different methods to implement this and applied the information I learned to find a solution that is most feasible with my code. Essentially, I created a setTimeout() function that recursively called a second setTimeout() function. By setting the first one to have a delay equal to the longest note and the second one to have a 1 second delay, I was able to successfully create and implement the timer function. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    After completing the submission, I became intrigued about the various web-apps we can create when combining frontend and backend languages. I recently recreated Yelp for a project for my software engineering class, and am now curious about how I am able to more smoothly implement HTML/CSS with the backend languages I am familiar with to better improve my Yelp code and user experience. While creating this project, I realized there is so much about programming that I have yet to learn or even become exposed to, and I am curious to see the power and extent of what integrating different tech stacks can hold. 

    Further, I am interested in learning more about the frontend aspects of coding, such as user design using various frameworks like React and Angular. While creating the submission when I was experimenting with different fonts and color schemes, I realized even a slight change in the color of a singular button can disrupt the comfort and overall user experience. This raises the question as to how web developers are able to create a website and/or program that would maximize both user functionality and experience. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- I would first and foremost add more comments and documentation to make my code more understandable to the general public and clearly map out my logic.

- Make the game friendly and accessible to all devices (iOS and Android). I have only tested this program/web page on my Macbook Pro, and would like to extend its usability to mobile devices and possibly even other devices with various screen resolutions.

- If time allowed, I would’ve definitely experimented with tone frequencies and even created a unique beat, rather than just a series of monotonic notes.

- Continue iterating upon design because there is always room for better UI/UX design.

- Improve scalability/extensibility to find a way to make this web project into something bigger than a singular game. For example, possibly adding more games to extend this web platform into a hub for numerous simple Javascript games like this one.

- Further reduce the delay when resetting the timer (it’s a little buggy).

- Some 1v1 features among friends where users can play against each other and compete to see who gets a higher score.

- Introduce variability in number of buttons - let the user decide how many buttons they can play with and further possibly relate the difficulty setting with the number of buttons there are displayed.

- Many more possibilities to extend this program if given unlimited time.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/trxF6ad47Ac)

## License

    Copyright [Paul Kim]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
