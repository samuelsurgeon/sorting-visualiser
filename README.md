# Sorting Algorithm Visualiser
A visualiser for different types of sorting algorithms. In this project I've implemented three simple sorting algorithms that are sorted in ascending order.

## Why did I make this?
I recently embarked on a journey to become a Front-end developer and after dabbling with some HTML & CSS here and there, I decided finally to take the plunge and make a fully fledged JavaScript app - my first proper web project!

JavaScript and React are the two pieces of tech that I used because I wanted to get familiar with their fundamentals. I didn't use Redux or any other addons for the animations.

Since its my first project please let me know if there are any blaringly obvious mistakes or anti-patterns. I struggled quite a bit with figuring out where the logic for the animations should go. I definitely need to read up on React Design Patterns more. I've used setTimeouts for the animations but might switch them out for requestAnimationFrame to make the code cleaner.

## The algorithms

Insertion sort, Bubble sort, and Selection sort - they're three of the "simple" sorting algorithms I chose because their animations are more obvious and easier to deal with. Also, I'm not ready to tackle a project with recursion just yet lol. 

## Responsiveness

Please note: The app is desktop only! The app should work for any desktop screen size, but will break with a screen-size less than 500px. Larger desktops displays are fine too because the generated array-bars' height is dynamically determined from the height of the user's screen.

## Browsers

Noticed some weird behaviour in Firefox, for best experience use Chrome or Safari!

## Credit
This project was inspired by and based off: https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial

In the tutorial he actually implements Merge Sort, which I haven't implemented here, however I used Clement's website AlgoExpert.io for help with implementing the sorting algorithms I ended up using. So definitely go check out AlgoExpert and also Clement's YouTube channel! :-)
