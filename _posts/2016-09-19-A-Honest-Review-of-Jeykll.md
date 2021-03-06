---
layout: post
author: "Tyler"
---
I feel like it's kind of corny to make my first blog post a review of the technology I'm using to make said blog but I don't really care. The first think I like about Jeykll is how easy it is to set up. I will say however, I already had the developer environment set up so all I had to do set up a git repo and type in the command

{% highlight ruby %}
bundle exec jekyll new . --force
{% endhighlight %}

and I was off to the races. Note, this may be hard if you've never used gem or another package manager. Furthermore, everything is already cleanly packaged with sass from the get go and comes with everything you need to build a site in literally seconds. I love the fact that I can prototype my site in another branch, test it with one command,

{% highlight ruby %}
bundle exec jekyll serve
{% endhighlight %}

and merge it back to master, commit and push it into production immediately. I will admit I'm not using it for anything production level and I only have my own white box testing which is mostly typo checking cause... simple static website. 

Now onto the less glamourous parts. There's a lot going on. While I think it is beginner friendly,I don't think that's necessarily a good thing. It's prepackaged with a nice sass/css package called minima. It's clean, easy, and looks good right off the bat. If you hate it, Jeykll makes it really nice to find other templates and themes to make your site look really good. However, the default package makes your site a plain, generic blog site. I had to delete so much of their code to make it barebones enough so I could start rebuilding from scratch. 

If you're only building a blog and were completely new to web development, I could see why it's helpful. It includes all the layouts necessary and css right there. I've even seen other blog sites use the straight minima theme and maybe add a few lines of sass and suddenly blog site. 

However, if you're building more than one of these sites, it's going to be relatively annoying to delete all default html files each time and start rebuilding the css, markdowns, file structure from scratch. It would be nice to possibly include the _include, _layouts, and maybe an assets folder to encourage the user to expand. Obviously it's a fine line between being friendly to beginners and to those maybe slightly more experienced. 

I'm also not a very big fan of Ruby. It's a fine language, but the few lines I've written of it, I feel like I could've have written in fewer and more concise lines in Python. I would love this system in Python (and open sourced) so I could really dive in and modify it directly to my needs.

In the end, I feel like my problems are a little overembellished. It's a very fast way to build static websites and deploy them rapidly. It includes lots of neat little features and has a very simple templating system. The documentation is clear and very well written. It hasn't a very clean step by step process on each aspect of the section. It's so much nicer than my original site which was plain html and css. I honestly can't imagine using anything else and github-pages is totally free to host. Despite it's slight learning curve and annoying default file system, I think everyone should use this as their personal site generator especially if they don't need a backend or click and drag site generators.

