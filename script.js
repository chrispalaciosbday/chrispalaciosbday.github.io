(function() {

var pics = [
  ["https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/s720x720/1010935_10201431092081899_1336675385_n.jpg?oh=ab142dbbcbdb7d3a398d5a731ab488b9&oe=54F9A894&__gda__=1426640813_027754f58444a4b134d8ddf72320df43", "Steven Spielberg?"],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1910118_1206576855137_6408687_n.jpg?oh=568517833116b4a12c1f188a0634e522&oe=550906FB","Chris drinks coke straight from the bottle."],
  ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/182881_168303466550244_6922832_n.jpg?oh=492690e7d80277fd2a49936b7978f91c&oe=55082D1D&__gda__=1425876282_aa99e1e5cca7a7955e1516362d986493", "Chris inspired Kanye's 'Chris Glasses.'"],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/226601_170980052960484_143385_n.jpg?oh=1de8d03d24c2eba4b475e4bd935daa82&oe=5546CBE3", "The kind of guy crazy enough to play DDR on lego bricks."],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/230596_170979962960493_2996184_n.jpg?oh=b0e2a3a8c414501ff981522f7f290afe&oe=55094AF9", "SWAG"],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/246949_229314713749688_5403455_n.jpg?oh=e5029db0e90eb802a7866f136d049ef2&oe=5503CCF9", "YOLO"],
  ["https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/246877_234271009922196_7583280_n.jpg?oh=7553c87c1cf6ace2d9cddba8835d96a7&oe=5541FB4C&__gda__=1425707140_2cb18e5d22ea06e117b135e39ed2069c", "Somehow graduated from middle school."],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/247401_192339120813345_8115577_n.jpg?oh=fd53328d2ef609f8db083be655b5eef7&oe=5504DA81", "Even with the ordeal of an 8th grade dance."],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/316501_220130921378730_797158625_n.jpg?oh=698dae77fa78d4a218b5a012e54c06ba&oe=5505DA93","Livin' life on the wild side"],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/s720x720/298297_298006160213876_1468506587_n.jpg?oh=26b37971ca747302e9b97095de7c539f&oe=55019D98", "Hobbies: running, programming, blowing things up (with tesla coils)"],
  ["https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/p180x540/380670_254268257953764_1211287265_n.jpg?oh=dd81eac06f61c30f5653e31ea24aa167&oe=5542FAFE&__gda__=1429797337_45ba5a8683699246e80801d9e33ed6ad", "(and practicing in unsafe sax)."],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/s720x720/418118_376074645740360_491538141_n.jpg?oh=2bc3f91f69eaa97b1deb5b2841c24739&oe=553660D7", "Mundelein's most enigmatic person."],
  ["https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/420591_2849006345271_1365417391_n.jpg?oh=2718040af27816b2407b9ee0a8ee2660&oe=553E2A7F&__gda__=1425863704_c669c3c3092c0d81ea534713470a2aac", "When questioned, Chris always plays himself off."],
  ["https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/s720x720/556491_2923197079993_1795950475_n.jpg?oh=3125a8b59fd3e275e95022cca3b62eae&oe=550501B6&__gda__=1426557060_b88bde305aaa897dce56887bd724ea82", "Chris isn't one to fool around."],
  ["https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/s720x720/560659_3248172764182_632736557_n.jpg?oh=a947a9e6e906613e953643924fd778b1&oe=553DC88D&__gda__=1426950905_28b5d5a8c93a2b919aa7ceabb1224cf6", "Which is why everyone emulates him."],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/p180x540/426938_493300904029148_462005897_n.jpg?oh=7e86c514f5c5533ad21b91dc11d073e8&oe=5508FBC1", "Here he's seen planning his first thoughts of world domination."],
  ["https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash2/v/t1.0-9/s720x720/484004_3675012110809_1057511458_n.jpg?oh=8d023bc995490a5bc9b57229fa564e9b&oe=5508B293&__gda__=1430749876_d5302dc1a33e5366737d3144bf2a00ff", "Here he's seen contemplating the meaning of life, figuring it out, and forgetting to write it down."],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xpf1/v/l/t1.0-9/p180x540/381098_418971664816755_1698818832_n.jpg?oh=bc0071ebb5e823a522a0dcd70818de18&oe=55047549", "He's a terrible influence"],
  ["https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/p180x540/7242_487338657987147_1674257225_n.jpg?oh=3dc8a0c4b1855b846b4c1c00949c291d&oe=54FCAF8C&__gda__=1429945154_65800ed471b0fde2d3a661db3fd93e9e", "Chris is devious."],
  ["https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/p180x540/543612_487491317971881_136203480_n.jpg?oh=aaebe0a79f32b0e15b6cd2d87afd8536&oe=554714DB&__gda__=1426025084_8619a5b1e4a65e0f91c2632304bf9274", "Chris is a thug-rebel."],
  ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/s720x720/544049_2928015817081_755242008_n.jpg?oh=cd3d412d62be76aefdaf6bc81bb653af&oe=554400FB&__gda__=1426808278_b5c27db6cfcef550db8951ea6fb7abc5", "Chris lets himself go sometimes"],
  ["https://scontent-a-ord.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/579416_10201116451618569_486336115_n.jpg?oh=cce1adb7f1e7474cae26f529f1ceed7d&oe=5503081A", "because he knows"],
  ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/p180x540/1377560_556729011067748_1852765267_n.jpg?oh=468545ba4fbec6821342c84cdcb1c54b&oe=55016CD9&__gda__=1426383015_42635b31ba4518fe7fb88ee66c413dd0", "he's all that."],
  ["https://scontent-b-ord.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/s720x720/10646746_761261227253772_4624356087926193780_n.jpg?oh=de9beb314cff78aa2b0863ee111c2933&oe=5536D5CA", "A man of class, he's not one to miss a bowtie opportunity"],
  ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/s720x720/10734213_766793353367916_1101962538396772196_n.jpg?oh=3ad38dc3bb2e60408a775d5067be9cca&oe=54FF2C39&__gda__=1430453095_311363f04ebf9f1bdfb38e2acc4dd6f9", "except when he's a pharaoh because pharaohs don't wear bowties."],
  ["https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10731199_943857938962025_2618029529229613750_n.jpg?oh=e80ed97c0821c3335e3f00a332ad3065&oe=5503A08F&__gda__=1426361606_72e08a16ab9b680c58cb770088717829", "Or when he's on a shirt because his friends love him"]
];

var picsList = document.getElementById('pics');

for(var i = 0; i < pics.length; i++) {
  var li = document.createElement("li");
  
  var img = document.createElement("img");
  img.src = pics[i][0];
  li.appendChild(img);
  
  var p = document.createElement('p');
  p.textContent = pics[i][1];
  li.appendChild(p);
  
  picsList.appendChild(li);
}

})();
