---
slug: "setting-up-server"
title: "#1 Setting up a server"
date: "2022-10-14"
spoiler: "The box where everything happens"
---
Today I've set up a server on Digital Ocean. I went for the cheapest option with 1GB memory and 25GB disk. I installed Ubuntu 20.04 on it. Here's the overview from the Digital Ocean dashboard.

![Digital Ocean server](./server-1.png)

The important part is the IPv4 address. I can access my server at this address, via the __*ssh*__ command. Out of the box, the Ubuntu server on the Digital Ocean only has the __*root*__ user. I need to prefix the user name before the address bit.

```
ssh root@178.62.242.234
```

Once I type in the password, I'm inside my server.

```
➜  ~ ssh root@178.62.242.234
root@178.62.242.234's password: 
Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-110-generic x86_64)
...
```