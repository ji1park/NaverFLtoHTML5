// ==UserScript==
// @name    naver FLASH to HTML5 Video
// @match   *://blog.naver.com/MultimediaFLVPlayer.nhn?*
// ==/UserScript==

if (window.top === window.self) {
    //--- Script is on domain_B.com when/if it is the MAIN PAGE.
}
else {
    //--- Script is on domain_B.com when/if it is IN AN IFRAME.
    // DO YOUR STUFF HERE.
    var links,thisLink;
links = document.evaluate("//a[@href]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('http://serviceapi.nmv.naver.com/flash/redirectToMp4Url.nhn?vid=',
                                          'http://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?wmode=opague&vid=');
}
}
