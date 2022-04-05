---
slug: "introduction-uber-clone"
title: "Building an Uber Clone: Introduction"
date: "2022-03-28"
spoiler: "Why am I doing this?"
---
Uber app has been fascinating to me for some time. It touches the physical world, it keeps this machinery of cars and people moving, it needs to be fast, reliable. The architecture is huge an real-time.
 
Building this app requires many things in the domain of system design. When you see the car icon moving on the screen, those are simply many successive reads from a database. What database choice do we need to support this? How will we represent the geolocation of a car? How do we send the information to the frontend in a continuous but efficient way? What APIs do we need to support these functionalities, both on the driver and on the rider side? In the frontend, how do we build the actual map in the frontend? How do we make the car animation butter smooth? How can we monitor the performance of our system? How do we test every component? The reads and writes, queue sizes? How do we ensure the system stays available when failures happen? How will we make our design choices and what tradeoffs are we going to make?
 
What are the important questions we are not even asking yet?

**This is some text in bold `and this is highlighted` and here we continue.**


Here's how we [embed a link](https://google.com) and here we continue again. But this link opens in the same tab.

*Note: This is a note surrounded by borders [another link](https://google.com) and here's an emoji *😀

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

This is a JSON block:

```json
{
  "name": "blog",
  "version": "1.0.0",
  "dependencies": {
    "sass": "^1.49.10"
  }
}
```

And this is a JS block:
```js
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
```