---
slug: "start-here"
title: "Start here"
date: "2022-10-13"
spoiler: "What's my plan?"
hidden: ""
---
My goal is to build a clone of the Uber app. I am fascinated by distributed systems; this is my way to explore and learn about them properly.

There are several components I envision for the app. For a start, a single server can host all of these. We might add more machines if the complexity or the increased load requires it.

## Storage layer
We need to persist data on drivers, customers, rides, and locations. The database must support a high throughput of writes as every driving car continuously updates its geolocation.

## APIs
The API layer will handle all kinds of requests to our system, such as requesting rides, calculating routes, or taking payments.

## Simulation
The simulation engine is the beating heart of the app. All traffic (pun intended) to our server will come from here - customers popping up, drivers accepting rides, cars updating their locations, or even unexpected delays or incidents happening.

## Frontend
There will be a frontend app that will display the city map. You'll see active routes and cars moving along them in real-time. There will be system monitors to observe the load on various components.
