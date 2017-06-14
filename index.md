---
#
# You don't need to edit this file, it's empty on purpose.
# Edit minima's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: start
---

# What is "Framer MUC Agenda App" ?
**Objective:** Giving registered attendees of [Framer Munich Meetup](https://www.meetup.com/de-DE/meetup-group-framerjs-munich/) a sneek peak on what is happening on June 26th. Let new designers know how amazing interaction design can be. Serve as example on how to documentate interaction design.

## MVP definition
The first Prototype will cover the most important information for attendees and one featured animation:

* **What** (Framer Meetup Munich)
* **When** (June 26th)
* **Where** (at Google Germany)
* **What** is happening (Schedule)
* **Who** is speaking
* **Which** workshops are available
* **What** should every attendee bring

In Version 2, additional information could be useful:

* Hashtag usage ( e.g. #FramerMUC )
* Speaker information
* Sponsor information
* Workshop details & follow up information


### User group

Munich based designer with or without coding background. Interested in interaction design and product documentation. 

**Goals:** "learning more about framer", "level up their career profile" or "join the animation movement"

**Painpoints:** "Not being able to code", "Social awkwardness" and "company regulations"

**Userstory:** Annie has never wrote code before but she is used to designing mobile applications. Her colleagues demanding more detailed animations and **She wants** to create them in time **so that** her product becomes more polished.

**Jobstory: When a user** has limited ressources, time and doesn't want to spend money or too much time yet, **he has to** go to a meetup and see what other designers are doing, **so he can** decide for himself about learning or investing time in framer.


#### Exemplary Userjourney

<img src="https://marieschweiz.github.io/ixd-documentation/materials/Userjourney-01.png" class="imgfit"/> 



## Main concept

With only 3 views, all informations should be wrapped and served interactive. Information is structured by importance so users have no trouble to get everything about the meetup with just two or three tabs. 

1. First priority is **What, When and where**, so users are able to figure out their availability. 

2. Feature transition is charging users emotionally and **get them exited** about our upcoming meetup. (Feature transitions can highlight a meetup topic or sponsor)

3. Schedule overview with **information to empower their decision**

4. How to catch up with attendees and where to find the next meetup or workshop to meet all of us again.

MISSING FLOW

### Meetup information

<iframe class="prototype-right" src="https://framer.cloud/Sickv"></iframe>

**Objective:** Inform potential attendees about what is happening (A meetup about framer) when (June 26th) and where (at google munich)

As soon the App opens a button is offering speech input. By tapping our [feature animation](#feature-animation) is asking you to say something. Tapping the voice button will activate it and its starts pulsing. The pulse has to be visible enough to get attention but should [not trigger emotions such as stress or hurry](https://marieschweiz.github.io/ixd-documentation/misc/2017/06/13/thefirsttest.html#1-framer-meetup-information). A calming mindset is recommended.



### Feature animation

<iframe class="prototype-right" src="https://framer.cloud/QElto"></iframe>
**Objective:** give users attendees a sneek peak about what framer can archive.

Speech recognition is a highly demanded feature and framer is able to do that. Googles speech Api can be accessed via framer and listen to a users voice. [Example for Google Voice input](https://github.com/baiIey/framer-speech-api) Framer wrote also an article about how to [build Speech recognition](https://blog.framer.com/prototyping-speech-recognition-in-framer-js-9cbbbd01757)

By letting them go through with any voice input, framer is just showing off. accuracy isn't neccessary.


### Schedule Overview

<iframe class="prototype-right" src="https://framer.cloud/EXpCI"></iframe>
**Objective:** Let the user read and decide fast about the meetups schedule and content and what he is interested in or should he/she join at all.

Has a user said something, the meetup schedule will slide in. A scrollview allows them to explore the whole meetup and its content.


## Deleriverables

The idea is to have a prototype available. By definition this project is in a published state. Other projects might not and measurements are in order.

### Measurements

