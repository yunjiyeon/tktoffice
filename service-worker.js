/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["event1.html","a6eab44afda327daa377c3ccc1c2a9a3"],["feed.html","91f06d8726c2e1496edbc5871fdfe0e0"],["feedDetails.html","6bb46eba23fbaaaa24fe86d662bff7df"],["images/icon1.png","8425741c8d531d1416739b33f9d6e6a9"],["images/icon2.png","f2f159cc23949962799efa4ac079c0f1"],["images/icon3.png","369374973e628ed2fc98b5b5e1c842ae"],["images/icon4.png","bd5fd431a10cac0feb80b1fdd1cfae6d"],["images/icon5.png","ef22a1c6eef99a1d28d1314ce1a3b456"],["images/screenshot1.png","4c505864982f8c463e8bd74bd4c5fa66"],["images/screenshot2.png","6ed427f21bdc5010fbc8491a958a6aed"],["images/screenshot3.png","622ea8bdec36c44d1cf8a7357867c1d8"],["images/screenshot4.png","5b579ef08e4cecafe16242cd0fde8848"],["images/screenshot5.png","b46fe1662b0cc0ce7c1c2b58b4a88bc7"],["img/2023CATS_B_1200 copy.jpg","5fa4cbe1744d067d9124f08fe3469c14"],["img/2023CATS_B_1200.jpg","5d9766ae9bb67f8e9a19236140a6c597"],["img/add_a_photo_FILL0_wght400_GRAD0_opsz48 copy.png","21462e8ba7612ba50e21763e7e65b155"],["img/add_a_photo_FILL0_wght400_GRAD0_opsz48.png","b0cfd7f864e3b731fa0059d69b7be014"],["img/applogo.png","5d23200e5884fcce59391066d539ea2a"],["img/applogo1.png","713135a1257dfbba61955baf557eb979"],["img/applogoW.png","b46f36561dbae18e70b5184ba9934926"],["img/b-feed.png","2e32545111acad0b9ebf95f866bf3fbb"],["img/b-home.png","0147dbbfefadb97a71a8746957beeae2"],["img/b-right.png","e5aeb392a09596f3081db8347db8639e"],["img/b-store.png","c7fc353f07869517e3aa39c7232ab8d5"],["img/b-ticketing.png","5484e9c6a4990742af1b07d882716735"],["img/b-user.png","5d31e48825ba6b4addd6b7bda86d6382"],["img/back-image.jpg","87dd313b3c8e70af19fa700ac9d33999"],["img/back-img.jpg","a53957a0d8c7cec0651c824d2c7f6a30"],["img/banner1.jpg","961493091058ae11c36f99af7ff0df04"],["img/banner2-1.jpg","e26a1e46a8ce311243408fe6784858d9"],["img/banner2-2.jpg","bddc0fbbcc87fc02d4815b3295da6c94"],["img/banner2.jpg","6782790b813c76936172a6ee1616a1b8"],["img/banner3.jpg","e3a0f6b9c6ce8a2990e3acd4c5e8682e"],["img/banner4.jpg","bf906a31ef80855c50a213df060e5ec6"],["img/banner5.png","cddc7c03623a6a9ad3938f22b7aeeedb"],["img/bbtn.png","86f5fc387ed3bf74b27c5ac04962620e"],["img/bottomBtn.png","93b9987ff7bef21e773319aa6c9a7b61"],["img/busan.png","f31b6c594753c857e262324b213c345d"],["img/camera_outdoor_FILL0_wght400_GRAD0_opsz48.png","391d24d2cf56c7e2ca1fd13d505caa34"],["img/catSale.jpg","e1275d01963e6506b30dcf638d090ae7"],["img/catSale1.jpg","dab1fefb0c81db1b595f0915892358af"],["img/catinfo1.jpg","1bbed155a53bbc3ae492594a79dada2e"],["img/cheongju.png","97cd53b386c06772a072dbc972a5c11e"],["img/clickHeart.png","fec9f44b764d466ae171b641afd6aecf"],["img/clickHeart1.png","09082f1bde6f034ac93790f83579e26c"],["img/close.png","cc8b7d70b654f783dc1772cf4e5d50b5"],["img/close_w.png","0ed46f889307e28396f460f0ac3a6c9e"],["img/comments.png","1a9079c97801a6e66f3d14e62fe9223b"],["img/con1 copy.jpg","c81b62538dc6ed46de42407e0efd4dd5"],["img/con1.jpg","f13533874ce69d5230461fae053dd095"],["img/concert1.jpg","d01825405ca6e01b6787a69b0a69e53a"],["img/concert10.jpg","f407233f2e6f7eb7c4b7e58a080e6bae"],["img/concert11.jpg","08fbdeb193a57e24ecc88c7f72097f64"],["img/concert2.jpg","258c5f7b31243dfd001de34624498d76"],["img/concert3.jpg","52194533a58e45a503d2ed310ab95235"],["img/concert4.jpg","9dd6c6922f3b3f3265216bb0c724c5c8"],["img/concert5.jpg","e8196ad755b31d573885e97b3578face"],["img/concert6.jpg","75b6fdef1448c1e42f5215b26f8ebeee"],["img/concert7.jpg","eb57406aa754f4994d86312b5bb9b61f"],["img/concert8.jpg","784ed05b932608658173747e27612985"],["img/concert9.jpg","8ed1b78c5c05dd33624804c76a1117c3"],["img/concertIcon.png","cc4003b8a07507b8b80b55c323c54bc1"],["img/concert_icon.png","0c50d61e39b93df06c480d86ca095093"],["img/concert_icon2.png","236d16a5af1d70d8cdfd6de24986e2b3"],["img/evenIcon.png","d5cf527cdb7caf1df17c7f190fcf4800"],["img/event1.png","7043d9eec23670222569c1be54061e5d"],["img/event2.png","d969095691a64bf495e73bc15d4db6fd"],["img/event3.PNG","a9a9394d8b3b9d084c9fd711489b313e"],["img/event4.png","42a0489a3c0f6f574b685918c3b05d6c"],["img/event5.jpg","bd966e649b88dc540f90693d1f491ed7"],["img/event6.jpg","aa89352e04cdf70b3a016d85031097a7"],["img/event7.jpg","cffb2ca1c3d9aef75e256f280a9f1e6c"],["img/event8.png","05f9ca7281f6182d47db28b9fe7a6536"],["img/event_available_FILL0_wght400_GRAD0_opsz48 copy.png","6030b4b38b1d57bae9a3d008492b4087"],["img/event_icon.png","98c2d6c5777ac05e1a86f6b6f009f018"],["img/exhibit.jpg","0328c1e1a7e282870829a7c45b4c7b3c"],["img/exhibit1.jpg","56c0b804cdffe480fdeef091e00021ab"],["img/exhibitICon.png","b03863349194a99a0922a1e90147ad2b"],["img/exhibit_icon.png","061b5a8ef10542cd5a22bb99a4b782fd"],["img/f1e7aa9c-6305-48c3-95f6-27c87bd2147b.jpg","6cad5e275097f1973120411f8be0a4a6"],["img/facebook.png","09a3c2f2471a0d7c71a71a1d99002dda"],["img/favicon.ico","390c4ede3e8e6f1431d993c3013c04b8"],["img/feed.png","56fe4211db6654331f3936ec14af8390"],["img/feed0-1.jpg","a2ddc2c1f5907ca5cdccbfe1e563b029"],["img/feed0-2.jpg","677d8f63157a70bf57e8ad2486c5089f"],["img/feed0-3.jpg","dd96bc9014608ffb5074aed72a62e4aa"],["img/feed0.jpg","46fc4951b4251daeeb7cf1de68e4a725"],["img/feed1.jpg","f9c884805d5af73ede895b472736ad75"],["img/feed1.png","9c3c63e092a4c168502e5c7fd0a5587d"],["img/feed10.jpg","98d18445e41f0c3ea1976454bbd83b6a"],["img/feed11.jpg","5ee6f81c59fa15a2a5c62a86a8efd0d6"],["img/feed12.jpg","a2ddc2c1f5907ca5cdccbfe1e563b029"],["img/feed13.jpeg","f25a88a36c54161e0ca32744c792a49c"],["img/feed14.png","0a782c0bb764d59dd1d56901fd5e918f"],["img/feed15.jpg","21e23ac6622e1266619a59f354337c25"],["img/feed16.jpg","e2f8d561b720870cdde27d1672c9af6d"],["img/feed17.jpg","8e8bc022090d5f257e8b48dd2d813b7e"],["img/feed18.jpg","5f2e906bfe35fdb100dba9c602b3cf9f"],["img/feed19.jpg","68acc715e73b06d781bc742f2bf1ede8"],["img/feed2.jpg","b6a922df904832480cf311648feb0c83"],["img/feed20.jpg","6817294d6249103d1bbe294e17a230bb"],["img/feed21-1.jpg","e26a1e46a8ce311243408fe6784858d9"],["img/feed3.jpg","0fad85045340bee15fbcd3825aa4ccb0"],["img/feed4.jpg","3bba71cb3ad206b2ae67dcea46cf1391"],["img/feed5.jpg","9b81c06140415fb5d0063ab3279fb13c"],["img/feed6.jpg","d288415b3ee12cc9b66830e604a7df64"],["img/feed7.jpg","bebaa0d2939dfd82ad98146150124b7f"],["img/feed8.jpg","de3e0a35dbdd6ee5d162785fbaaaacc0"],["img/feed9.jpeg","6c64ca103cfebd51dbfc7bf8d09d8bd0"],["img/gift.png","9f0409718c8d1e65ef3d6b9815a1865d"],["img/ham.png","5c131d648a0bc23273782d55cbb1a6bd"],["img/ham_dark.png","d39b676c8ad73d118dc2f3bff7d6f26d"],["img/heart.png","12762e3a2042c9230e61a6c3f7a1a72e"],["img/home_FILL0_wght400_GRAD0_opsz48 copy.png","1edd976dccfcf96d263d7fba2ef07f96"],["img/home_FILL0_wght400_GRAD0_opsz48.png","60c257eb85fb05d3310790dea99b9c89"],["img/hotClipIcon.png","12884020c8173e139cd3f553f088afcc"],["img/hotIcon.png","9da9a215b072e756294a24cc022d0203"],["img/hotclip.jpg","cd5a55b991d5e73b31c598627442f384"],["img/hotclipIcon (2).png","fc2e4516ca7e1e45dd9df2b4750fd2ba"],["img/instagrame.png","1fd75deb5779db51e52b614869704201"],["img/interveiw7.jpg","c74ee10b901b767ed676d7706babf00a"],["img/interview2.jpg","83f6da9277576686b822c47227cabba9"],["img/interview3.jpg","6e259804952e201be9894d3cead63903"],["img/interview4.jpg","399bdc0db568d6f53f3d11959628a5cf"],["img/interview5.jpg","5253fd9d39addfecb618d03af1668bfc"],["img/interview6.jpg","b36e516958585e03979dd0cf12e92edf"],["img/jpos1.jpg","8cef2abd9f83f19d9ffc63f2ffeda1b2"],["img/jpos2.jpg","138f46bbed322267deba8b899b053273"],["img/label-y.png","93c6092475cd99f4bdacd8f31e6435d5"],["img/label.png","0aedc2e58703079f93bfcbb809c8bffd"],["img/lo1.jpg","9901e09d650e63945c0510e62fbc77e2"],["img/local_mall_FILL0_wght400_GRAD0_opsz48 copy.png","09ecf489a79c3f8b12fa3b9ab12c6ef1"],["img/local_mall_FILL0_wght400_GRAD0_opsz48.png","ba2e7679d6ee77d220b685b3acc08419"],["img/log2.jpg","be89e3bf2980b919ef9d4db5eaba896b"],["img/logo.jpg","5a839d9b811a1ef334291ec882e5a823"],["img/logo_W.png","90b52c9225d6dcea4373311f03da47d9"],["img/logoicon.png","50522d36318f9ea8f3b213085c41903b"],["img/m1.jpg","b5547b38db3567b035a193df0398d3b8"],["img/main1.jpg","53fec6a76a982bfc27f83b4415d6f79f"],["img/main2.jpg","4620cda65d8e34210c9df7884de63ed9"],["img/main3.jpg","6cc126ba6f3dc80801e53eb26ac23dfe"],["img/main4.jpg","733917438696cea2e9f1bc2ed7d5e8cb"],["img/main5.jpg","e85a1b85cffbc7af4b192d1a3db32389"],["img/main6.jpg","a75c4fbc7fd200677e068306d4d982b2"],["img/main7.jpg","0164204d0069c20b9068839e5979a3bf"],["img/main8.jpg","8ad9742564a01134a7d27d38d1cf464c"],["img/main9.jpg","61720cd7da20e145a2395f0bca067997"],["img/more.jpg","d512aa69f8f349e111f15965504cc4b6"],["img/mps_app_cap_2.png","f2b6c3c6504c31150540d3c2c30395de"],["img/mps_logo.png","771322933e67c292c858fb598940229f"],["img/mps_logo_dark.png","46da8dff73d9ef7b862d3e820808858a"],["img/mulog1.jpg","56c85a812af8d73a433b99d46b040a98"],["img/mulog2.jpg","a93ce2868435669dd96476759d29a94c"],["img/mupos1.jpg","15a162ba272f0acf98cd7502b56701ce"],["img/mupos2.jpg","1874dc203329fa9e33d383f63f55467b"],["img/mupos3.jpg","64ecd31806ad22f2abdd69f2a4bc25c2"],["img/mupos4.jpg","f4f1c23d1b55728fb54c4dc0cde5acc6"],["img/mupos5.jpg","bd361e0c031d8ea53c111c62ca122714"],["img/mupos6.jpg","217cb3cfdf0bd374cb53874bb17b143e"],["img/mupos7.jpg","6c3b49cf0fb2d305af3d5fda459f4b44"],["img/mupos8.jpg","345738081db73bb8fca60a0916e380d7"],["img/musical1.jpg","f395f3b819103935728697775721eed1"],["img/musical2.jpg","490e1eb60b62a0381694049972ec318e"],["img/musical3.jpg","a0646cdb7010a5fbe4d392ffc94804bd"],["img/musical4.jpg","8a15bf41bd34f3fcc40af3efe2b30e60"],["img/musical5.jpg","8032bdb720588c37ce6985996ba5b4b1"],["img/musical6.jpg","79a27a1efe1d939d49ee3dc28444a88d"],["img/musicalIcon.png","ef1ede246c40c61464cc4420237c6ae8"],["img/musical_icon.png","883cb619d1ff009d4278246ee8a44b16"],["img/mymenu1.png","983a62a5b2bc4df8d29cd77d21d80b74"],["img/mymenu2.png","b1d46f6a18116ae1c6d1fbf020d3e941"],["img/mymenu3.png","26be1d6a7104005a4ba93023f034a85a"],["img/mymenu4.png","b9a74ff289274374a269e83b4f62d995"],["img/paly5.jpg","dcf7c219225ce78b152d619e43594910"],["img/percent_FILL0_wght400_GRAD0_opsz48 copy.png","56d04dbd45324fefdde0d62e9ffcc1c9"],["img/percent_FILL0_wght400_GRAD0_opsz48.png","24b9038843dfc81be525b3230192dd6f"],["img/person_FILL0_wght400_GRAD0_opsz48 copy.png","1400cb7963b653565020fb422a77b486"],["img/person_FILL0_wght400_GRAD0_opsz48.png","5d31e48825ba6b4addd6b7bda86d6382"],["img/play1.jpg","9901e09d650e63945c0510e62fbc77e2"],["img/play10.jpg","5ec4c8944c82016c1c0ad8a7b1523a03"],["img/play2.jpg","746c8d03b3b36589139d47e07e0af718"],["img/play3.jpg","e2daf8a1ca5a0e4c200212ddae0bf545"],["img/play4.jpg","910751ec405ec33e41e4d5e8c2f9b93a"],["img/play6.jpg","24afc91101c2b43b4cac917f02c1685b"],["img/play7.jpg","37b545a5a3c23ecfa2c6b418f27c5e59"],["img/play8.jpg","44946202e97690edeb36f1b99f4a2219"],["img/play9.jpg","23a0dcc45c5001445aefb8c11ba853a9"],["img/playIcon.png","86124cb5c56e653a502660bea209a40c"],["img/play_icon.png","66f47854ca2e3aa7f6f356367c4038f1"],["img/play_icon2.png","72da82c56cc327fce98d46db64d28407"],["img/play_icon3.png","ff5720ea97404ddd4a4bacbb7ae3add2"],["img/play_icon4.png","e8c1a66ce784f66c897279c28b8ffff3"],["img/playbtn5.png","e7967c775b63b40d69bb4bf665b40fd5"],["img/playbtn6.png","01ae2163128d934633bceac93943ef3f"],["img/pos9.jpg","75a524533990bc718c46230db605ec24"],["img/post-1.jpg","dbaeebbbd2c6ea37cc626fb737547e1a"],["img/post-2.jpg","79898087aa0792efec8b2ff9a982feb2"],["img/post-3.jpg","ce42a786e2d1817a5349f050dccfddb2"],["img/post-4.jpg","8add447338c4d5844ac0617811080926"],["img/post-5.jpeg","ce01071221e4fdb9f3bc3fecbe900236"],["img/post-5.jpg","056962e436d95d4fa658bb3c0659e662"],["img/post-5.jpg.crdownload","a331fbd8f212ceed6ad8bb4bb54eba5f"],["img/post-6.jpg","f6f4429c23a3df868775b3decc2d9a1f"],["img/post-7.jpg","f7caec785d1afb6451737089f72a625d"],["img/post.png","2d121c09fda703c57cc2194fb1a12247"],["img/post2.png","14f002b44b174b80298ab023ebe88367"],["img/post3.png","4e836ec912c246375f7c4631f74af7c9"],["img/qnaIcon.png","c8f9b43d777238d3945d5cfe391090da"],["img/qna_icon.png","bd4cc530032ff254d97ded77ba1523ae"],["img/refresh.png","7db506954e4ec3743f954a585e79dbe5"],["img/right.png","af356729178a51269d811a18adf05017"],["img/saleIcon.png","f28b8ade251e4e816e5d455cacf2c998"],["img/sale_icon.png","5e68c3fdfcea962481e97a66ae7eaa17"],["img/search.png","aa1492b1978317774d8bbfddcea41e43"],["img/sejong.png","cb2ae8ca30c3cd702204b6952a174ae7"],["img/seoul.png","920b4df683a21e6add77ad72dcc350bb"],["img/sharing.png","dd0bdfd09caf0334c62e6fd8078b0e5a"],["img/star_half_FILL0_wght400_GRAD0_opsz48.png","28e131e2edc953cb4272fc5246381b6a"],["img/store1.jpg","5f93bf8b3a1756dfec53d8a30f16e4a8"],["img/store10.jpg","e669739f30d450b55d5d061ae706c965"],["img/store2.jpg","25d8a2ee90ebe6ab3b4519dd30f07e9d"],["img/store3.jpg","c8e39061891d04d2523801456fc035f4"],["img/store3.webp","2cc250c9e4c1abafd27e59c6077e0591"],["img/store4.jpg","f2d26d7a363a4422b2fc94f906d30bfc"],["img/store5.jpg","7b05122deeebec621803d3909af20904"],["img/store6.jpg","22459a74b8f5706e88a11b83b4a45a61"],["img/store7.jpg","fe0e3aad97f413103bcbc9e876c944a8"],["img/store8.jpg","54c079fe991077beecc096f9b0f088e7"],["img/store9-1.jpg","278e3d6bcd9e6fc6eb652ea65198f38c"],["img/store9-2.png","e47d5ebfa74c5c41ec3c162d11778a08"],["img/store9-3.png","b74e6191d8c834a2f5dd265603ccb8ea"],["img/store9-4.png","8ab3c767fd3040412dc6328cf6ee4fa0"],["img/store9.jpg","0bb2db86a8ad66a7e25d3e05cd0a3c28"],["img/storeIcon.png","c75c1bfc696cdd5911f0ceb8b01a0cfd"],["img/store_icon.png","1a85afa1c362d26c9faaa55f5a0e68d4"],["img/tag_FILL0_wght400_GRAD0_opsz48 copy.png","4cb55f02a6745ca9326f02c6af26ee66"],["img/tag_FILL0_wght400_GRAD0_opsz48.png","c135dc3ea65faf98cb394d075b038483"],["img/textlog.jpg","f00c89f186a37270d99eb08cc44e326b"],["img/textlog_dark.png","9cc423f7fc5026738d4c371661451e1b"],["img/textlogoD.png","e6a97f02c8279cae7883e390a4113a44"],["img/textlogo_w.png","757bad3eb23bf69e95bf8f88ee0191cd"],["img/ticket.png","af70b5bb32559107955cbb34d59e0fcf"],["img/tk.png","53a0e1bae2c451f09b6c1da13b1b1497"],["img/tkt.png","dedbb67e8dae56e7cbe07f883d7dd2a5"],["img/tkt_dark.png","4e4f233c87bc4527ebe5d88fce60049a"],["img/topBtn.png","9386ee7de6c39181b6be428af2e32168"],["img/unnamed.png","5d23200e5884fcce59391066d539ea2a"],["img/verified_FILL0_wght400_GRAD0_opsz48 copy.png","b1c4a7b4e9412085f5f1e9422a254de8"],["img/verified_FILL0_wght400_GRAD0_opsz48.png","79521c28b7333ae7cf0b0da1f92788e3"],["img/w-right.png","c3dc543a39b66801ce8e5aba842e59ed"],["img/webicon.png","90e0a9bc29788d9fe874e378e319131c"],["img/youtube.png","91b4f6e87d28b46c6bd62e68994ddf99"],["index.html","eeb3a3054e61790e4fa8e88b66c67169"],["js/main.js","cf9801c6f8d011d2d56ec802d025ec7d"],["scss/main.css","67b549ce191481e1b00eecef58f28c57"],["scss/sub.css","4cb766a0268015913a2185b0da0b88af"],["store.html","ecdfa8440033b9c2019789488a1d75ef"],["ticketing.html","f6e7c139460b6ff195cf8843d2d2bea9"],["ticketingDetails.html","b4f6afa9f057fc4a186cc3ad0c7e7f16"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/this\\.is\\.a\\.regex/, toolbox.networkFirst, {});




