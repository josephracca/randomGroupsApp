# randomGroupsApp
Application that allows you to Add Names to a List and Generate Randomized groups by size of group or number of groups!


UPDATE: feedback from Angel Pantoja (TA for Codestack Academy)

	
Good work on this assignment. I really like the design of this project. Most of the functionality is there and is working properly.

//===============FIX===============//
The only concern I have is with your slider. Upon serving I noticed that your slider was not working. I took a look at your code and I noticed that you have two IDs on your slider. I thought off the bat removing the second id would've fixed it, but it didn't. I then noticed that you were trying to call a function onChange. So what I did was change your function that you were calling to an eventListener of “change”. To my surprise that actually didn't fix it either.

I proceeded to skim through your code and noticed that you were setting the attributes right away for the min and max values. Due to that the values were not able to change. Once I removed those attributes, and your app started to work with the “ BY NO. OF PEOPLE”  and only that one.

Also good work with the data validation, I like how I'm not able to enter a duplicate but you should let the user know they've tried to enter a duplicate name.

Summary of Fixes:
the slider needs to update on load if there are any entries in the list, also needs to update when the list has an addition or subtraction...
- need to adjust the radio buttons and check for overlapping or multiple ids
- clicking on the radio buttons should also update the mins and maxs for each...

//===============ADD===============//
ADD: prompt user when they have entered the same entry...