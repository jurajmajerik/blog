---
slug: "serving-web-page"
title: "#10 Serving a web page"
date: "2022-11-03"
spoiler: "Getting our app frontend"
hidden: ""
---
*From now on, every post will have its own branch in the Github repository. See the code for this post on the [serving-web-page](https://github.com/jurajmajerik/server/tree/serving-web-page) branch.*

Today I've set up the serving of my app's frontend. First, I changed the domain of the server from ```api.jurajmajerik.com``` to ```app.jurajmajerik.com```. At this point, it's okay to serve both the frontend and the APIs from the same server. With this setup, the ```app``` domain name is more fitting. I might separate them out later.

To start, in the GoDaddy dashboard, I added a new [A record](https://support.dnsimple.com/articles/differences-between-a-cname-alias-url/) with the name ```app``` and pointed it to my server's IPv4 address.

![Godaddy DNS setup](./img-1.png)

I also needed to generate a new SSL certificate, as any certificate pertains to a specific domain name. Because of this, if you try to access a domain at HTTPS with an non-matching certificate, you'll get a warning.

![HTTPS failure](./img-2.png)

To solve this, I just followed the processed described in the earlier [HTTPS](https://jurajmajerik.com/blog/using-https) article, substituting ```api``` with ```app```. I then updated the ```http.ListenAndServeTLS()``` method with the location of the newly generated certificate and the key.

Next, I set up a ```static``` folder in my ```server``` directory. Here, I placed an ```index.html``` file with a simple "Hello world" message. In the future, any frontend files such as *.css*, *.js*, or any assets will be served from this folder.

The code to serve frontend files is a simple one-liner added to the main function. At the ```/``` path, let's serve all of the files in the ```static``` folder:

```go
http.Handle("/", http.FileServer(http.Dir("./static")))
```

I first ran ```main.go``` locally and checked if the file was served at ```localhost:8080```. Then, I deployed it to the production server and started the server script there.

![Serving web page](./img-3.png)

Our app frontend is now being served at [https://app.jurajmajerik.com](https://app.jurajmajerik.com)!

*See the code for this post on the [serving-web-page](https://github.com/jurajmajerik/server/tree/serving-web-page) branch.*