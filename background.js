// 	targetUrlPatterns: ["*://www.spiegel.de/*","*://spiegel.de/*"],
//	contexts: ["page"]
// --> Not supported yet by Firefox

browser.contextMenus.create({
	id: "decrypt",
	title: "Decrypt this page"
});
browser.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId == "decrypt") {
		browser.tabs.executeScript({
			file: "decryptor.js"
		});
	}
});
