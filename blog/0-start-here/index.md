---
slug: "start-here"
title: "Start here"
date: "2022-10-13"
spoiler: "What's my plan?"
hidden: "true"
---
I want to learn distributed systems.
I work as a software engineer at Owlin. I've been a developer for over 4 years.
I came to a point where books just don't cut it. I believe I can truly learn and master concepts by building things.

I read Designing Data Intensive Application. System Design Interview. The explanations are too high level.

So as said by Richard Feynman, and often paraphrased by great Andrej Karpathy, "what I can't build, I don't understand". In the spirit of this motto, let's build our own Uber.

I'm going to build a clone of the Uber app.
Some time ago, I started reading Uber Engineering blog, where. I found it fascinating in many ways, but I realized one thing - many concepts I just didn't understand. It's too high level. I've never worked with event streams. Never built a microservice. Never worked with maps.

I love my current job - I get plenty of responsibility and work on things I find fascinating - big data, architectural work, working on the full stack. But there I things I don't get to work with. This is my opportunity to touch those things.

There are many aspects of such an app I find fascinating.

I'll start out small - with a single server. I'll write deployment pipelines, server code, APIs, frontend, simulation engine.

What are the components of the system I can foresee right now?

Server
- A linux machine on a cloud that will host the server

Storage layer
- persist data on drivers, riders, rides, locations
- cache for a quick lookup

APIs
- request a ride, payments

Simulation engine
- call APIs - place drivers and riders on the map, emit data on car location

Frontend
- a map that will display cars moving, various useful data on what's going on
- real-time

Possible add-ons
- Analytics
- Monitoring
- Machine learning