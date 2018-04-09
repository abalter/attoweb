**Note** This currently (04/09/2018) does not work as I'm in the middle of building this out from my actual website. If you are interested, you can visit my [personal website](http://arielbalter.com) to see it in action.

# AttoWeb
A ridiculously small, pseudo-dynamic, fully client-side web framerwork with a RESTful API.

## About
I basically created this project to build my own website. It served a number of purposes for me. I wanted to:

1. use a super-lean, markdown-based microframework.
1. use GitHub as my editing UI.
1. easily deploy on shared hosting where I do not have access to reverse-proxy ports.
1. take the opportunity to translate my resume, cv, and work-samples to Markdown.
1. build it without having to learn a client-side framework (for the time being) such as React or Angular.
1. challenge myself to build something useful in JavaScript.

## How I built it
Web _micro-frameworks_ serve as very purpose-driven website building tools. There are a number of more-or-less easy to use [static site generators](https://github.com/myles/awesome-static-generators) out there. However, they did not fit my needs. I wanted something even smaller, and more importantly, does not run as a micro-server such as apps written in Python, NodeJS, Ruby, Go, etc. These all run on dedicated ports (e.g. 8080) and need to be reverse-proxied to a domain name.

However, JavaScript really has all I need:
1. AJAX files from the server.
1. Render the markdown to HTML.
1. Style the markdown with CSS.

So, I started scribbling with JavaScript. I came up with the idea of using a fake-ish RESTful api so that I didn't have to hard-code any paths. I later found out this is called "client side routing." I got it to basically work, and decided it was worth using for my website.

## The Name
I needed a name for this thing for GitHub. It's definitely smaller than a microframework. The names [PicoWeb](https://github.com/pfalcon/picoweb) and [FemtoWeb](https://github.com/QuarterCode/FemtoWeb) web have already been taken. Next in line was AttoWeb.

## How it works
All you need in the HTML is some containers for the content. For exmaple

```
<div id='part1'></div>
<div id='part2'></div>
```

Suppose you set up the app to originally render _initial.md_ into `#part2`:

_initial.md_
```
# Title
Some content including a [link](#source=content/other.md&target=part2)
```

becomes

```
<p id='content'>Some content including a <a href="#source=content/other.md&target=part2">link</a></p>
```

When you click on the link, first atto catches the _click_ event and stops the default behavior which would trigger a page reload. The DOM has an event `hashchange` that tells when the hash has changed regardless of a page reload. So, without reloading the page, atto can grab `window.location.hash` and render the new content. The query in the hash tells atto to AJAX the code from _http://\[........\]/content/other.md_, render it into HTML, and stick it in the element with id _#content_.

That's basically all there is to it. I'm working on a simple plugin system, which I used to create the responsive nav in my website. I also want to include optional routing so you could pre-define the queries into link shortcuts such as `[link](other)`.

The entire app is contained in single JavaScript file of (currently) around 250 lines, at least half of which are comments.

That's as far as I plan to take it. At least I hope so. Otherwise it will grow into a femto-framework, burgeon into a pico-framework, and finally bloat into a micro-framework. And who wants that?
