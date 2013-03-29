# aprilFools.css ☺

_by Wes Bos_ [<img src="http://wes.io/Ntgi/content">](http://twitter.com/wesbos)

Put these CSS definitions into your co-workers Custom.css file.  They will be applied to every website they visit as well as their developer tools. They are commented out by default, so make sure to uncomment your favourite ones! 

Mac: `~/Library/Application Support/Google/Chrome/Default/User StyleSheets/Custom.css` (s/Chrome/Chrome Canary/ if they use the yellow icon Canary version)

PC: `C:/Users/YourUsername/AppData/Local/Google/Chrome/User Data/Default/User StyleSheets/Custom.css`

Ubuntu (Chromium): `~/.config/chromium/Default/User StyleSheets/Custom.css`


	/*
	  Turn every website upside down
	*/
	body {
	  -webkit-transform: rotate(180deg);
	}

![](http://wes.io/NuBm/content)

	/*
	  blur every website for a split second every 30 seconds
	*/
	body {
	  /*-webkit-animation: blur 30s infinite;*/
	}

![](http://wes.io/Ntu2/content)

	/*
	  Spin every Website
	*/ 
	body {
	  /*-webkit-animation: spin 5s linear infinite;*/
	}

![](http://wes.io/Ntsb/content)

	/*
	  Flip all images upside down
	*/
	img {
	  /*-webkit-transform: rotate(180deg);*/
	}

![](http://wes.io/Nti1/content)


## See them all in [aprilFools.css](https://github.com/wesbos/aprilFools.css/blob/master/aprilFools.css)

## aprilFools.js

[aprilFools.js](aprilFools.js) is a script to dynamically load `aprilFools.css` *on or after* April Fools day 2013.

You'll need to install [dotjs](https://github.com/defunkt/dotjs) to get this to work (there's no good javascript analog to `Custom.css`, thankfully). Then copy over the contents of [aprilFools.js](aprilFools.js) into it. Be sure to change the `cssURL` to a customized URL with enabled features.