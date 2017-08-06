---
layout: page
title: How & Why documentation
permalink: /why/
---

Documentation is an underestimated discipline in almost every company. Allthough we know documentation is able to help a team, projects and companies in many ways. Yet we seem to ignore its power and keep postponing it to the very last moment. The ["Framer Munich Meetup Agenda App"](../) is an example of how to do documentation first and this can:

* Minimize meetings
* faster onboarding individuals
* discover product touchpoints
* empower general communication
* Help making educated decisions
* Prevent repeated knowledge sharing
* increase impact of testings

Bottom line: Documentation can help you saving a lot of time. For engineers its a neccessarity, for designers it isn't yet. Documentation made me a better designer. It takes bravery and guts to admit you know almost nothing about your project in the beginning. Your documentation will reflect that, bold and visible to you and others.


## Get Started
Take a pen and some paper, grab your colleagues and figure out why you are there and why someone is giving you money to do this. A [design sprint](http://www.gv.com/sprint/) is helpful for kickstarting your project. Spicing up your sketching skills helps your confidence but everyone can sketch!

<img src="../assets/illustration-designsprint.jpg" class="imgfit"/> 

## Start writing

Find a platform. Which software or cloud solution is able to provide that is [collected in a google sheet](https://docs.google.com/spreadsheets/d/15Pv5R7PUbzoQm3y5n6bMCyR3-5SzqoUOQqh8QOApy3U/edit#gid=0) If you happen to know a solution which isn't on this list, please please <a href="mailto:marie.schweiz@gmail.com">tell me</a>.

### Find your Project objective

Writing down an objective ([Example](../#what-is-framer-muc-agenda-app-)) of your project is good. It helps you to keep focus and everyone else has a fast understanding on what your users goal is and how you empower him. Also keeps you from thinking about how you would use this product for yourself. An objective should be:

* As long as needed and as short as possible
* Understandable (e.g. plain english instead of latin)
* Express how you fullfill your user need
* take a prominent place in your documentation

<img src="../assets/illustration-objective.jpg" class="imgfit"/> 

### Breaking down your project

A product contains usually a couple of features and patterns connecting them. It helps to figure out how big your product will be and which elements are global and which one are just connected to certain features. Hirachy helps you  setting up a list of files you need to write. A little app like 'Framer Munich Agenda App' does not need several documents. Bigger projects have one for each feature or pattern.

A navigation bar is a pattern. With several features attached

A login form is a feature with several scenarios.


### Learn more about the user

Add what users like to archive, their goals ([Example](../#user-group)) and so on. Talk to them, observe them and anchor this information to your documentation. It will help to avoid a common and unconsious mindset 'this product is designed for me'. 

Examples what you could add: 
* Pain & Gainpoints
* Jobstories & Personas 
* Userjourneys

<img src="../assets/illustration-researcher.jpg" class="imgfit"/> 

### Writing for features

Depending on your project size or complexity it might be suitable to have one document for each feature ([Example](../#meetup-information)). If you split up a documentation, it saves time to not go through all definitions again in each document. Keeping a structure helps:

* Objective
* MVP or Version
* Appearance (where is it anchored in your mental model)
* Scenario 1
* Scenario 2
* Scenario 3... and so on...

take a look at [this Example](../#schedule-overview)

### Embedding screens and Prototypes

For each feature or pattern it helps to have an objective and a prototype, visualizing how you deal with it. Then, add your scenarious and its variations. Patterns can be described with just text or:

* Screens
* Flows
* Prototypes (Framer, Marvel etc)
* Gifs

**Pro tip:** Start with a description and animated gif how it works. Deliver transparency with a flow and offer Screens for detailed views. Your colleagues might need the last one to create their own documents or point to a certain screen.

**Note on Framer:** because firefox doesn't play well with framer and most corporations have blockers for external js libraries, I recommend creating a gif and offer a link to your framer prototype is a good solution to give everyone access to your work. Use <a href="www.cockos.com/licecap/">liceCap</a> to make gifs for older browsers.

### Testing and documentation

One of the most powerful parts in documentation are embedded test results. Instead of collecting test results and throw them over the fence, embedd them into your documentation and link it ([Example](../#meetup-information)). This documentation has a [changelog](/changelog/) which is handy for testresults. An <a href="../misc/2017/06/13/thefirsttest.html">exemplary test documentation</a> contains:

* Test setup and testscript for the interviwer
* Scope of this testing
* Question you had and their answers
* Your conclusions
* Your notes while you have tested
* New questions for the next tests

Note on design sprints: Summarize your sprint and add it like a test is sharing your effort and insight. Sprints usually contain research and testing which should be accesssible.

<img src="../assets/illustration-testing.jpg" class="imgfit"/> 


## Summary

Don't make it beautiful, don't make it perfect. It has to be written in plain and understandable english. Your colleagues will ask you to add this and that to your documentation and in the end you'll feel exausted but with 100% controll over your design. Project managers will prepare their decisions for you and your development team will wait for your commits. Its an amazing booster for your product and team work.


## Credits

[Silvia Bormüller](https://twitter.com/svorklab) for the help, being a good colleague and partner in crime. If you like what you are reading, [Tom Johnson](https://twitter.com/tomjohnson) is an amazing technical writer and sharing a lot of knowledge via [idratherbewriting.com](http://idratherbewriting.com/). I recommend reading what [Joel is writing about software documentation](https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/) and thanks to Christian, he has to listen without asking for it.

# Technology used in this repository

* [https://jekyllrb.com](https://jekyllrb.com) plain text into static websites, host via github
* [Anchor JS](https://www.bryanbraun.com/anchorjs/) for urls you can share
* [Tocible Js](https://github.com/markserbol/tocible) for Table of content overview menus
* [Roboto](https://fonts.google.com/specimen/Roboto) A type you can use


# Useful links and stuff to read

* A [documentation theme for Jekyll](http://idratherbewriting.com/documentation-theme-jekyll/)
* A [Medium article how to use Git](https://medium.com/@dfosco/git-for-designers-856c434716e)
* [Rionas McNamaras Talk about g3docs](https://www.usenix.org/conference/srecon16europe/program/presentation/macnamara)
* A [software for creating gifs](www.cockos.com/licecap/)
* A [list of documentation tools](https://docs.google.com/spreadsheets/d/15Pv5R7PUbzoQm3y5n6bMCyR3-5SzqoUOQqh8QOApy3U/edit#gid=0) you could use