Bootstrap3-FixedFooterPanel
===========================

This is a sample snippet that shows how you can set up a fixed footer notification panel which will contain its content with a scrollbar.

It slides up when activated and slides down when complete.

Demo
====
There are three files included in this repository, `index.html`, `bootstrap-footerpanel.css`, `bootstrap-footerpanel.js`.

Either grab them and put them into your website project or for even easier ease I have also put these up on two popular interactive playgrounds:

  - [Bootply](http://www.bootply.com/N88CLXCzjq)
  - Bootsnipp to be added

Browser Compatibility
=====================
I've tested it in:

  - Chrome 39
  - Firefox 33.1, 34.0

Toggle Panel Display via JavaScript
===================================
You can toggle the panel using the normal [Bootstrap Collapse api](http://getbootstrap.com/javascript/#collapse).

In my sample I've named the panel `#footer-panel` so to toggle it you can use:

    $("#footer-panel").collapse('toggle');
	$("#footer-panel").collapse('show');
	$("#footer-panel").collapse('hide');

Toggle Default Mode (Open / Closed) va Markup
=============================================
You can toggle the panel's initial display, using the normal [Bootstrap Collapse api](http://getbootstrap.com/javascript/#collapse).

Simple add the class `in` to the element that has the `collapse` class on it, eg:

    <div id="footer-panel" class="panel panel-danger panel-collapse collapse in" role="tabpanel" aria-labelledby="footer-panel-heading">

Events
======
You can use all of the standard events defined in the normal [Bootstrap Collapse api](http://getbootstrap.com/javascript/#collapse).

| Event Type	        | Description |
| ----------------------|-------------|
| show.bs.collapse		| This event fires immediately when the show instance method is called. |
| shown.bs.collapse		| This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete). |
| hide.bs.collapse		| This event is fired immediately when the hide method has been called. |
| hidden.bs.collapse	| This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete). |

I have actually used the `shown` event to tweak the heights so the inner content scrollbar fits properly.

Accessibility Notes
===================
If you make some changes to this then don't forget to be a good web developer and update the `aria` tags to reflect your new names and if you change it to be open set `aria-expanded="true"`.

Improvements
============
If you have feedback, please open an issue or initiate a pull request. I'm happy to make improvements where possible.

Website
=======
There is a blog post announcing this but all the information you need is in this readme:

  - TODO: add blog post here

Release History
===============
v1.0 - 03-Dec-2014 - Initial release
  
License
=======
This software is released under the [GNU General Public License v3](http://www.gnu.org/licenses/gpl-3.0.txt). 

If this causes issues with your project please open an issue on GitHub as I just picked this one as it seemed unrestrictive.