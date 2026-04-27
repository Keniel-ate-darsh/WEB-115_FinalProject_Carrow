# WEB-115_FinalProject_Carrow

# Connect 4

WEB-115 Final Project Proposal Student: [Keniel Carrow] | Repo: WEB-115_FinalProject_[Carrow]

## Overview
This will be a connect 4 2D game that will maybe show animation (I haven't decided yet) There will be 2 modes one against a computer and the other against another person. There will be an image of a connect 4 board and there will be two colors yellow and red. 

## Features

 - Create a grid/table and have a image over it so the user can see moves and where things go
 - Animation on the chip falling and it following your mouse and going from column to column
 -Will check winner when someone gets 4 in a row
 - If you lose there will be a loser screen and if you win there will be a winner screen
 - You can reset the game after someone wins/loses

## Core Requirement Coverage
| Requirements | Implementation |
|--|--|
| If Staments and Loops | My code will have Ifs to check for winners and to display different scenes depending on if you loss or won. I will have loops to loop through the moves the computer will have and to check if someone is out of bounds and check for winners |
| Event Listeners | My code will have Ifs to check for winners and to display different scenes depending on if you loss or won. I will have loops to loop through the moves the computer will have and to check if someone is out of bounds and check for winners |
| DOM Element Creation | I will have a grid so the grid will be the parent to columns rows and cells.Also each new chip will be the child to the one pervious played to keep track of everything |
|Classes and Sub Classes| I will have a grid class and a Chip class. The grid class will be used to make the grid and keep track of everything that goes inside it. The chip class will deal with making the animation knowing where a chip is and making a chip childs of others. I will have a sub class of the correct path it will inherit from chip class and check if it is 4 in a row.

## DLC -- Additional Topics
I will use Fetch to get music when you win lose or the game is ongoing. 