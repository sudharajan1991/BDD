Feature: testautomation login

@Test1
Scenario: Click on skip back button

#Mapping : after creating methods and all we hv to come here. to remove the warning creare next line and click backspace. warnign will be removed.
#select the click on the line and click CTRL+move the mouse point over the line. It will show url link and it will link the java lines

Given login to demo automation with URL "http://demo.automationtesting.in/Index.html"
When Skip sign in should launch the register page 
Then Register page should get display
And close the browser


@Test2
Scenario Outline: checking firstname
Given login to demo automation with URL "http://demo.automationtesting.in/Index.html"
When Skip sign in should launch the register page 
Then Register page should get display and enter "<firstname>" and "<lastname>"
And close the browser

#If we want to check more than one input(eg: firstname,lastname) then we have to give Scenario Outline: and by using Examples: we can enter all our inputs
Examples:
	|firstname|lastname|
	|sudha|rajan|
	|Saranya|rajan|
	



