#Feed Scraping Personal Blog

_This project is intended to be largely personal. The user stories will be for myself. Also, it’s just about the news._

I’ve never been satisfied with any of the feed readers that have been on the market. Even Google Reader, which many users still recall as the go to model for what an Atom/RSS reader should be, didn’t work well enough for me. I loved it and used it all the time, but I knew it could improve. Then they just killed it and threw it in a pile that includes a bunch of dead startups they’d acquired instead.

Pulse and Flipboard, though they had unique, alluring aesthetics didn’t come close. I think when I first tried them, they didn’t even allow users to copy and paste feeds or add custom sources. I’d tried others too and have long desired to make my own feed reader that could satisfy what I’m looking for.

There is Feedly though, and it’s pretty awesome. It’s basically everything I could have ever wanted…a few years ago. Unfortunately, no one cares about RSS anymore. It’s tragic. I used to look forward to my commute to and from work. Many years ago, as a news-loving youngster, a significant proportion of news sources provided full-content in their feeds, so users could open an app and read many stories while sitting on a subway seat (without the reception to retrieve data like the full news stories).

Now, with MTA investments run amuck, there seem to be far fewer seats on the train, and worse, far fewer organizations that provide full content feeds of their news. I’m quite certain that’s why people are apathetic to what’s going on in the world and would prefer to search for Pokemon while bumping into their sweaty, Pokemon playing counterparts. It seems though that Pokemon has made it more difficult for passengers to catch pokemon on a moving train…because Pokemon knows Howard Zinn and would prefer that subway riders get informed.

Well, I’m here to save New Yorkers from the travail of playing mindless games on crowded trains by giving them a fresh opportunity to read mindless news instead! While many organizations have poured millions of dollars into creating such apps, I’m certain that I can outdo all of them. I’m about to graduate from a bootcamp! Also, I’m just making this for myself, so I can say that it’s better for my needs than anyone else’s.

Actually, I think I have legitimate concerns, and I haven’t seen an app that implements all of them. In addition to consuming rss readers, I’ve used services that scrape websites, like Instapaper and Read It Later/Pocket. I’ve also seen Fizal use React Native to scrape a site. With a lack of full feeds available, such scrapers become necessary to allow for full articles to be pulled and stored on devices. What if an RSS reader did both?

Below, I provide MVP user stories and wireframes along with a procedural timeline for my MVP and what I intend to have as a more complete app.

##MVP User Stories
Upon visiting the page, users will have the option to enter as guests or login (if they are not already logged in). The MVP will be a responsive website.

####Guest Users
As a guest, I want to go to a site and choose from a category of curated feeds.  
Like, there might be a category called popular, American cable entertainment, and it would include:

+ MSNBC,
+ CNN, and
+ Fox News.

There could also be categories for news or there could be a tech category with sites like:

+ Ars Technica,
+ Slashdot,
+ The Verge, and
+ Lifehacker.

There would certainly have to be a corgi category

Once I choose a category, the page would be structured with two columns, one slim column on the left with a list of feeds and settings and a primary column with a search bar at the top and the content of the feeds below

I want the content of the feeds to include the following for each article:

- Article Title
- Article Image
- Date Article Published
- Article Summary
- Counter of Thumbs Up/Down

I can use the search bar to search the content of the feeds in the category that I choose
If I click on a feed on the left, then only the articles from the selected feed would show up in the primary column

If I click on the Article title, then the original page will pop up in a separate tab.

If I click on the image or the summary, I want a modal window to open with the following:

- Article Title
- Article Image
- Date Article Published
- Article Full Content
- Counter of Thumbs Up/Down

If I haven’t clicked on a specific site, then I would want to be able to sort the articles by date (descending) or group them alphabetically by feed. If I have clicked on a specific site on the left, then I would like all articles to be sorted by date

I want to be able to see whether registered users gave an article a thumbs up/down

I want to have the opportunity to create an account or login

####Registered Users
As a registered user, I would like to access most of what the guest user accesses with more CRUD functionality

Once I log in, it should look like the Guest user page after the guest user clicked on one of the categories, but feeds that I had chosen would be listed on the left along with user settings and, finally, curated categories at the bottom.

The search bar would accept searches of my subscribed sites, and if I post a url into the search bar, the site would assume that I’ve posted a feed and add it to my feed list (See additional features for checking whether urls are actually feeds)

I would be able to add feeds by posting URLs of feeds into the search bar

I’d like to see add buttons next to any of the curated sites so that I could add those to my list of sites.

I would like to be able to delete feeds that I’ve added.

I would to be able to edit the names of my feeds

I would like to save articles (as offered by the feed—see additional features for article scraping)

I would like to have a link on the left that loads saved articles

I would like to be able to anonymously rate the articles with an up or down vote

Once I’ve saved an article, I would like to be able to make private comments on the articles, like as my own little personal blog. Alternatively, if I make a comment on an article, it will automatically be saved. If I choose to remove that article from my saved list, it will remove my comment about it as well.

I would like to be able to see how I've rated article, and I would like to see an icon that indicates whether I've made a personal, private comment about an article.



##Additional Features
As a user, when I click on the title, I would like have the original page open in a new window; when I click on the image or content, I would like to see what the feed offers for full content; and when I click on scrape, I would like to scrape the content of the original article (like how Pocket/Instapaper/Fizal do it). I would like to be able to save scraped pages to my list

As a registered user, I would like to be able to choose different settings for the content and layout of my initial homepage and create categories for certain feeds

As a registered user, I would like to be able to reorder how grouped feeds are displayed (if I choose to list my articles by feeds instead of chronologically, then I want to be able to change the order of which feeds are shown, by moving them in the left column

As a registered user, I would like to limit the number of articles per feed

As a registered user, I would like the search bar to check to see if posted urls are actually feeds

As a registered user, I would like to accept p

As a registered user, I would like to have the option of making my posts public or private.

As a registered user, I would like to have links in the left column that bring up articles I've voted and commented on

##Ultimate Features

Ultimately, once the web version works sufficiently, I would like to code another version in React Native for mobile devices

##Timeline for MVP
By this Monday, I want to have completed the Guest User requirements portion of the MVP using Node, Express and PostgreSQL

Before next weekend, I want to have completed the MVP for Registered users and updated it to use React for the front end.

Over next weekend, I want to iron out bugs, make sure authentication works well, deploy the site and work on the styling

If I’m able to move more quickly (I want to stick to the sequence above, but if I can deploy an MVP before the weekend), then I would like to work on the additional features over the weekend.

_I may experiment with Feedly's API_
