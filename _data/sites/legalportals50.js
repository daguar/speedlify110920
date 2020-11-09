module.exports = {
  name: "Legal portals", // optional, falls back to object key
	description: "50 state based legal help sites",
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
    "https://alaskalawhelp.org/",
    "http://www.azlawhelp.org/",
    "http://www.lawhelpca.org/",
    "https://delegalhelplink.org/",
    "https://www.alabamalegalhelp.org/",
    "https://www.arlegalservices.org/",
    "https://www.coloradolegalservices.org/",
    "https://ctlawhelp.org/en/home",
    "https://www.lawhelp.org/DC/",
    "https://www.floridalawhelp.org/",
    "https://www.georgialegalaid.org/",
    "https://www.lawhelp.org/hi/",
    "https://www.idaholegalaid.org/",
    "https://www.illinoislegalaid.org/",
    "https://www.indianalegalservices.org/",
    "https://www.iowalegalaid.org/",
    "https://www.kansaslegalservices.org/",
    "http://kyjustice.org/",
    "https://louisianalawhelp.org/",
    "https://ptla.org/",
    "https://www.peoples-law.org/",
    "https://www.masslegalhelp.org/",
    "https://michiganlegalhelp.org/",
    "https://www.lawhelpmn.org/",
    "https://www.mslegalservices.org/",
    "https://www.lsmo.org/",
    "https://www.montanalawhelp.org/",
    "https://www.legalaidofnebraska.org/",
    "https://nlslaw.net/",
    "https://nhlegalaid.org/",
    "https://www.lsnjlaw.org/Pages/Default.aspx",
    "https://www.lawhelpnewmexico.org/",
    "https://www.lawhelpny.org/",
    "https://www.lawhelpnc.org/",
    "http://www.legalassist.org/",
    "https://www.ohiolegalhelp.org/",
    "https://oklaw.org/",
    "https://oregonlawhelp.org/",
    "https://www.palawhelp.org/",
    "https://www.helprilaw.org/",
    "https://www.lawhelp.org/sc",
    "https://ujslawhelp.sd.gov/default.aspx",
    "https://www.tals.org/",
    "https://texaslawhelp.org/",
    "https://www.utahlegalservices.org/",
    "http://vtlawhelp.org/",
    "https://www.valegalaid.org/",
    "https://www.washingtonlawhelp.org/",
    "https://www.lawv.net/",
    "https://www.legalaction.org/",
    "https://www.lawyoming.org/",
	]
};
