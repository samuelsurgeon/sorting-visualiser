# Sorting Algorithm Visualiser
A visualiser for different types of sorting algorithms. In this project I've implemented three simple sorting algorithms that sort in ascending order.

## Why did I make this?
I recently began my journey to become a Front-end developer and after dabbling with some HTML & CSS here and there, I decided finally to take the plunge and make a proper JavaScript app!

The goal of the project was to help me understand the fundamentals of JavaScript and React, so I only used those pieces of tech and avoided using Redux or any other addons for the animations.

Since its my first project please let me know if there are any blaringly obvious mistakes or anti-patterns. I struggled quite a bit figuring out where the logic for the animations should go and I definitely need to read up on React design patterns more. I used setTimeouts for the animations but might switch them out for requestAnimationFrame to make the code cleaner.

## The algorithms

Insertion sort, Bubble sort, and Selection sort - these are the three "simple" sorting algorithms I've chosen because their animations are obvious and easy to handle. Also, I'm not ready to tackle recursion just yet lol. 

## Responsiveness

Please note: The app is desktop only! It should work for any desktop screen size, but will break with a screen-size less than 500px. Larger desktop displays are fine because the array-bars' height is generated from the height of the user's screen.

## Browsers

Noticed some weird behaviour in Firefox, for best experience use Chrome or Safari!

## Credit
This project was inspired by and based off: https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial

In the tutorial he actually implements Merge Sort, which I haven't implemented here, however I did use Clement's website AlgoExpert.io for help with implementing the sorting algorithms. So definitely go check out AlgoExpert and also Clement's YouTube channel! :-)
