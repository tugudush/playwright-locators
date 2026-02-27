If until now.
Inside the course we talked about locators which are aimed at the users of our website, for example, the get by role or get by text.
So things that the user sees and interacts with.
In this lecture we will talk about a completely different locator aimed for testers.
And that is the get by test ID.
The advantage of this locator is that it is very robust, and it will work most of the time, because we will add a separate attribute inside our code a data test ID attribute.
Let's see a simple example inside this course inside this lecture, and then talk more about this locator.
For example, inside our application, if we check the cookie banner remember you have to.
If you already accepted this you have to simply go to this cookies and site data right here.
You have to clear it.
And then you will see this cookie banner.
If I will right click one of these buttons.
You'll see each one of them has this attribute.
The data test ID and then a simple string which acts as an ID.
Let's use this and let's write a simple test with this example.
I'm inside a new file and as always, first of all we need the test and the expect functions from playwright.
And let's write a simple get by test ID example in which we will accept the cookies, and you will see how easy it is to locate elements which has a which have a test ID.
First of all, we need to go to the main page.
So I will say await page, go to and then the empty string our base URL.
And then if we simply want to access the accept cookies button.
So accept button, we simply can say page get by test ID.
And then we simply pass the required test.
Test ID the test ID in our case is this accept cookies.
So I can simply pass this one right here.
And this is all I have to do in order to locate this element.
Well of course, this is a two way job.
In order for an element to have a test ID, it needs to be added to the HTML of the page.
Otherwise this of course won't work.
So in order to use this implementation, let me find it.
In order to use test IDs, you have to manually add them to your HTML.
This is one disadvantage.
The advantage is that you can always rely on them once you have them.
Well, let's finish the test and see if they are working.
So let's click this button.
So I'll call await this Accept Cookies button.
I will click it.
And if you remember the functionality as soon as we are clicking the button it should not be visible anymore.
So I will call await.
Expect our button not to be visible.
Let's see if this is working and if this get by test ID is reliable.
Yes, it works very fine.
The important question is now when should we use this get by test ID locator.
And one answer to this question would be when our code is very dynamic.
Let's think, for example, at a page which has very dynamic content, or a page which is translated into multiple languages, and we only have one test suite for all the languages.
A get by tested approach should be working just fine.
Another way in which we can use this get by test ID is with complicated code, which otherwise would be very hard to reach.
So let's think about some very complicated elements inside our HTML.
Think about something very complex.
Well, in order for you to reach a certain button or a certain element, you would have to write a lot of code.
On the other hand, if you want to make your job easy, you can simply put a data test ID on the element you are searching on inside the HTML code, and then you can simply retrieve it with the get by test ID locator.
And a very important mention.
Let's think that maybe you are want to implement the data test ID's inside your test suite you are using playwright and maybe your website was optimized for another test runner that uses maybe other another form of data test ID.
Maybe this data test ID looks different.
Well, playwright has you covered and you have the option that documentation tells us.
If inside your code base you have a different test ID attribute, you can simply add it to the playwright configuration and everything will be just fine.
Now let's think about some advantages and disadvantages of this get by test ID.
So the advantages of this get by test ID is that it is simple to implement.
It is robust so it will work most of the time.
And the elements are easy to locate.
And if we think about disadvantages we can find only one.
But it is an important disadvantage is that this test ID is not aimed at users.
And first of all, and second of all, you have to also add them inside your code base.
So you have to work in two places.
