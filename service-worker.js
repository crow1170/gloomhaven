"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/gloomhaven/index.html","cb3a232e70e6a53bace286ab5221815f"],["/gloomhaven/static/css/main.30c0c44a.css","6c4f60e720bebb386dc3a8239d9c93d8"],["/gloomhaven/static/js/main.ddc03974.js","2e07ec1bbd05b49b02a38f1fc76d49b1"],["/gloomhaven/static/media/air.fac591e3.svg","fac591e3c321b5669e75c36ffb603b83"],["/gloomhaven/static/media/any_element.34db005c.svg","34db005c43d0c6b86c12575e5ba9a87a"],["/gloomhaven/static/media/aoe-4-with-black.8b2be9d7.svg","8b2be9d77f1a25b7fa17938e96a264de"],["/gloomhaven/static/media/aoe-circle-with-middle-black.7be792df.svg","7be792dfe0914581a1c5e38a0eb281f6"],["/gloomhaven/static/media/aoe-circle-with-side-black.aeb051db.svg","aeb051dbf6c9a9db815f54ff6deacfe2"],["/gloomhaven/static/media/aoe-circle.0a6787b3.svg","0a6787b3efbf243435aa9129ae38b99c"],["/gloomhaven/static/media/aoe-line-3-with-black.b39ca936.svg","b39ca9367d23e4614e6a31e36b2698eb"],["/gloomhaven/static/media/aoe-line-4-with-black.502d737d.svg","502d737d8d0e6b91285a2a45a5e8669b"],["/gloomhaven/static/media/aoe-line-6-with-black.a7f1b116.svg","a7f1b116e1471b680a3e720af74ae9e4"],["/gloomhaven/static/media/aoe-triangle-2-with-black.ad30957e.svg","ad30957e31eb04dd5f065e16c48616b2"],["/gloomhaven/static/media/aoe-triangle-2.12278694.svg","122786948008380f24f614a177e6875f"],["/gloomhaven/static/media/aoe-triangle-3-with-corner-black.1f34cc03.svg","1f34cc0381ebe3862a95eabad88aae98"],["/gloomhaven/static/media/attack.a1598f5a.svg","a1598f5a051ca44ea571d8fd9a871d26"],["/gloomhaven/static/media/attack_modifier_card_back.5873f272.jpg","5873f272dfddd3868e1733b0b25b4d90"],["/gloomhaven/static/media/bless.59479e31.svg","59479e31da2a3d02fd161e16577062e2"],["/gloomhaven/static/media/bless_card.f7db781d.jpg","f7db781dc0e2c5f4053d70f3e6b1b84b"],["/gloomhaven/static/media/curse.9664421c.svg","9664421ce60fbb8830f7a3b14d9c89c9"],["/gloomhaven/static/media/curse_card.74c2e27d.jpg","74c2e27d945943fd2d83d9c64e6a78a3"],["/gloomhaven/static/media/dark.39e1aa10.svg","39e1aa1049148ac27ce9c6ecb2540eab"],["/gloomhaven/static/media/disarm.079d79cd.svg","079d79cdabefd485672e127b9837bc03"],["/gloomhaven/static/media/earth.443bd9ff.svg","443bd9ff0c694e5fb81dfa3cd4ba8412"],["/gloomhaven/static/media/elderDrakeSpecial1Area.b81e97cb.svg","b81e97cb5285d668a64cb06f9cff9e9c"],["/gloomhaven/static/media/fire.673d53c2.svg","673d53c2f4d6db43f507fca97ffebc8f"],["/gloomhaven/static/media/ice.06520bc7.svg","06520bc71c0f1447abee20675c5b6af9"],["/gloomhaven/static/media/immobilize.d10777f5.svg","d10777f5e7f4456f28f0e6c6bb36df02"],["/gloomhaven/static/media/inoxBodyguardSpecial1Area.7c623f77.svg","7c623f77764724aede7acac33c0a7e2d"],["/gloomhaven/static/media/invisible.94f6aac1.svg","94f6aac18f7e3a0f01143a0e60b7eaf0"],["/gloomhaven/static/media/light.ef434304.svg","ef434304ecebfa6de270789229b728e6"],["/gloomhaven/static/media/monster_card_back.1c2fbc78.jpg","1c2fbc7815e9941206a287bf60009c53"],["/gloomhaven/static/media/move.4bfeefc7.svg","4bfeefc7a62e1082b4e2171f3403ad09"],["/gloomhaven/static/media/muddle.96983af1.svg","96983af10205de5c42c3b92205807def"],["/gloomhaven/static/media/poison.7d7f60b4.svg","7d7f60b482afb14e571cb82d482d1916"],["/gloomhaven/static/media/pull.6a4770c0.svg","6a4770c0df2054c9267b522700a636d5"],["/gloomhaven/static/media/push.c3799cf8.svg","c3799cf8b3745f56456bce69fd6faa1c"],["/gloomhaven/static/media/range.1ade028b.svg","1ade028be23c8667098ed4261735916b"],["/gloomhaven/static/media/rolling.9b121fe8.svg","9b121fe8b47366463ca39b53ac1b71b1"],["/gloomhaven/static/media/shuffle.45f1850f.svg","45f1850feb5d65d64201fd318cd055e0"],["/gloomhaven/static/media/sightlessEyeSpecial1Area.24f4acca.svg","24f4accafc8a65cdda6d585695c933ec"],["/gloomhaven/static/media/sightlessEyeSpecial2Area.c723bd57.svg","c723bd57ce507e2d0f9fd88656203a1e"],["/gloomhaven/static/media/strengthen.8acb9b8e.svg","8acb9b8ecef3675500bb1d25e2ceebb4"],["/gloomhaven/static/media/stun.b82f281d.svg","b82f281dd42c84601e47c559788f2d9f"],["/gloomhaven/static/media/use_element.eb11cf13.svg","eb11cf13cbae0be5be82a5f854f27d0c"],["/gloomhaven/static/media/wound.52753d3c.svg","52753d3cfb0d514dcd181636928d2d30"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/gloomhaven/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});