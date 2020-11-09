module.exports = {
  name: "Legal portals", // optional, falls back to object key
	description: "State based legal help sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	//skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"http://www.coloradolegalhelpcenter.us/",
    "https://www.illinoislegalaid.org",
    "http://ptla.org/",
    "https://www.masslegalservices.org/",
    "https://michiganlegalhelp.org/",
    "https://www.lawhelpmn.org/",
    "https://www.ohiolegalhelp.org/",
    "https://philalegal.org/",
    "https://legalnav.org",
	]
};
