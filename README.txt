---ADDING BADGES---
To add a new badge to BadgeSetScript use this function:
createBadge("StaffAdmin", "http://b3.ifrm.com/5920/164/0/f7000477/sunrise_clan_banners_administrator_mini.jpg", "Administrator", false);

This is broken up into these parts
createBadge( -Start Function

"StaffAdmin", - The identifying name for the badge that we'll use later to set it to people's badge sets

"http://b3.ifrm.com/5920/164/0/f7000477/sunrise_clan_banners_administrator_mini.jpg", - The image file's url

"Administrator", - The hover text for the image on the pages

false -  - I have no idea what this does but it says false on all of them so keep it in there

); - End Function

---SAVING FILES---
Make sure what you have done is error free, AND I MEAN IT. This is more important than an english degree test. Text is case sensitive and requires proper use of punctuation symbols to compile and run correctly!

Once you've made sure it is error-free, go to the bottom of the page and click commit changes, ensuring that "Commit directly to the master branch." is checked. This will store the changes and replace the old version.

---UPDATING THE FILES ON THE FORUM---
I use https://rawgit.com/ to have the GitHub scripts work on the forum. When a change has been made to the script this needs to be updated too. 

To do this: 
1. Grab the script page's URL (NOT THE EDIT PAGE, JUST THE VIEW PAGE, AND NOT THE "Copy Path" BUTTON'S OUTPUT).
2. Paste this link into the text box in the middle of https://rawgit.com/
3. Copy the link it gives you out of the left text box. DO NOT USE THE LINK FROM THE ONE ON THE RIGHT!
4. Open the Board Template page on the Admin CP, find the "Above the Copyright" section, scroll down a little and you'll see the four scripts that run the badge system. The URLs here each have the file name in them so you shouldn't have a difficult time find the one you need to replace the URL of.
5. Once you have replaced the URL, save the Board Template and the changes will be live!
