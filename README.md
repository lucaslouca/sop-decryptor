# sop-decryptor: decrypt SPIEGEL Plus articles

**DISCLAIMER:** The information below is for information purposes only.

I happened to be browsing on [SPIEGEL Online](http://www.spiegel.de) the other day and noticed that articles published for non [SPIEGEL Plus](http://www.spiegel.de/spiegelplus/) subscribers were still partially available on the article's page in readable form while the largest portion of the text was blurred out and available only for paying subscribers.

So the first thing I did was to take a closer look at the blurred out text (which was just _underneath_ an overlay with a CSS filter style). I noticed that the text structure was resembling an ordinary paragraph style (if I can express it like that), with the words just being gibberish:
```
 /// voe Ijmmbsz Dmjoupo/ Efs ibcfo Epobme.Usvnq.Boiåohfs jn Xbimlbnqg kb bvdi bohfejdiufu- tjf 
usfggf tjdi sfhfmnåàjh nju Bsuhfopttfo jo fjofs Xbtijohupofs Qj{{fsjb/ Epsu njttcsbvdif tjf Ljoefs-
 u÷uf tjf voe usjolf jis Cmvu/
```

In the above example you can see that the letter '/' is used three consecutive times or that it is often followed by a space. This made me think that '/' may be a replacement for the character '.'.

Another fun fact is that SPIEGEL Plus articles are only partially encrypted so that the reader can develop an interest for the article and then hopefully (for them) decide to buy it. The particular article that I happen to be reading was an interview like article, where _SPIEGEL_ interviewed a guy named _Butter_, with _SPIEGEL_ asking a question and _Butter_ answering it. Fortunately for me this was a repeating pattern with participant names being styled in **bold** text in both the plain and encrypted text for easy detection. I could easily see that _SPIEGEL:_ was always matching to _TQJFHFM;_ and _Butter:_ to _Cvuufs;_ in the cipher text. Using this I could easily see that the letter 'E' was matching to 'F', 'e' to 'f', ':' to ';'...

<a href="https://lucaslouca.com/wp-content/uploads/2017/02/sop-article.png"><img src="https://lucaslouca.com/wp-content/uploads/2017/02/sop-article.png" alt="" width="512" class="aligncenter size-full wp-image-1614" /></a>

This made me think that this cipher was nothing more than a simple substitution cipher where each letter in the original message is replaced with some other predefined letter. Taking a look at the following ASCII table one can easily see that the ASCII code `x` of the plain text character has been replaced with the character represented by the ASCII code `x+1`: 'E' (ASCII 69) has been replace with `F` (ASCII 70), etc.

<a href="https://lucaslouca.com/wp-content/uploads/2017/02/sop-ascii.png"><img src="https://lucaslouca.com/wp-content/uploads/2017/02/sop-ascii.png" alt="" width="500" height="385" class="aligncenter size-full wp-image-1618" /></a>

This cipher is also known as [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). Anyhow, I thought it might be fun to write a small Firefox extension that I can use to view those articles. The extension basically removes the blurring overlay and replaces the encrypted text with their plain text version.

<a href="https://lucaslouca.com/wp-content/uploads/2017/02/sop-decryptor-context-menu-screenshot.png"><img src="https://lucaslouca.com/wp-content/uploads/2017/02/sop-decryptor-context-menu-screenshot.png" alt="" width="256" class="aligncenter size-full wp-image-1620" /></a>

If you don't know how to temporary install a Firefox extension you can refer to this [guide](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox).
