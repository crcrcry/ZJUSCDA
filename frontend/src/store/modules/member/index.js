const imageDir = '/static/images/';

const state = {
  department: 'council',
  offset: 0,
  members: {
    council: [
      {
        name: '会长：唐建东',
        brief: '加入一个组织，你的初衷可能是索取，但当你爱上她，你的心愿一定是奉献。',
        text: '最初只是觉得这群人穿正装的样子好酷呀，所以想要加入这个地方，却发现自己误打误撞闯进了一个家。从此有了每天抱着手机看聊天记录忍不住笑出声的我，有了为她翘课翘其他活动的我，更有了鼓起勇气扛起协会这个重任的我。于是再也不会那么青涩，也不用一个人去食堂，更不用为实习孤军奋战，她给了我很多，我也想给她很多。',
        isTextShow: false,
        img: imageDir + 'council/personal/唐建东.jpg',
      },
      {
        name: '实习会长：黄东华',
        brief: '不期而遇，相约可期，携手同行。',
        text: '从未预想到半年前提交SCDA报名表的那一秒，会成为这场最美秋冬邂逅的开端。在这里，学会了敢于优秀敢于挑战的勇气，经历了携手共进的温暖感动，更收获了最为难忘的相知相伴。从初识的青涩，到陪伴的长情，一路的同行成为SCDAers最深刻的无悔。未来还有很多故事，我们期待着，和你一起书写。',
        isTextShow: false,
        img: imageDir + 'council/personal/黄东华.jpg',
      },
      {
        name: '会长助理：王愿翔',
        brief: '想你不敢想，行你未曾行。',
        text: '加入SCDA让我结识了许多志不同道不合的小伙伴，而这恰恰带给了我无数的欢乐和启发。这里就是一个新世界，这里就是一个让你挖掘奇迹的乐园。想你不敢想，行你未曾行，一切都有SCDAers的作伴！我们期待一个陌生的你加入，然后继续我们陌生的旅程，探寻陌生的未知世界，成为一个陌生的自己！',
        isTextShow: false,
        img: imageDir + 'council/personal/王愿翔.jpg',
      },
      {
        name: '对外副会：朱伟伟',
        brief: '加入SCDA，成为更优秀的自己。',
        text: '加入SCDA，不仅对自己有了更加深入的认识，最重要的是有一群真诚而且优秀的人跟你共同成长。所以，不管你是因为什么原因想加入SCDA，你的收获都远超你的想象！来吧，我未来的伙伴！',
        isTextShow: false,
        img: imageDir + 'council/personal/朱伟伟.jpg',
      },
      {
        name: '对内副会：关玲玲',
        brief: '经历过才明白，SCDA有多好。',
        text: '真的有改变很多、收获很多、理解很多~遇见SCDA，遇见不同的有趣的人，一直一直都觉得很幸福！我付出了很多很多，最后都一点一点变成了感动和惊喜! 欢迎加入协会，最不安分的我们在这里等您。',
        isTextShow: false,
        img: imageDir + 'council/personal/关玲玲.jpg',
      },
      {
        name: '联络秘书：左盟',
        brief: '来不及解释了，快上车！',
        text: '很开心在SCDA遇见这么多可以共鸣的小伙伴，自己在向前的路上也变得不再那么孤单。讲真SCDA是一个充满机会的地方，这里不仅有硕果累累的前辈给你分享经验，还有大量的活动让你锤炼自己并接触各个行业。更重要的是，SCDA更是一个家，是你可以倾诉一切的地方，来吧，我们与你同在。',
        isTextShow: false,
        img: imageDir + 'council/personal/左盟.jpg',
      },
      {
        name: '财务秘书：章盛祥',
        brief: '除了诗和远方，这儿还有期待你到来的我们。',
        text: '半年前选择加入SCDA或许只因看到了人力纳新推文，但这半年里的收获的的确确远超了我的预期。这儿有你想要的一切，更有期待你到来的我们。加入这里，故事将由大家继续撰写！',
        isTextShow: false,
        img: imageDir + 'council/personal/章盛祥.jpg',
      },
      {
        name: '人力部长：李璐浓',
        brief: '遇见SCDA的这段日子，值得铭记。',
        text: '初遇见时拘谨的陌生人，最后都变成了相熟的朋友。一起练舞、一起日租、一起看恐怖片、一起打农药、一起水群……“一起”大概是我用的最多的词了，希望即使以后分离，也还能有很多个一起。',
        isTextShow: false,
        img: imageDir + 'council/personal/李璐浓.jpg',
      },
      {
        name: '项管部长：李丹',
        brief: '对未知的一切充满好奇。',
        text: '加入SCDA 项管是我做过的最正确的决定之一。在SCDA，遇到了许多优秀的人和有趣的事，也是在这里才真正开始思考自己的职业和人生规划。在项管，和许多可爱的人一起聊天开例会，聊到保安师傅来赶人也不觉尽兴。在未来一年，希望和有趣的你一起，做更多有趣的事。',
        isTextShow: false,
        img: imageDir + 'council/personal/李丹.jpg',
      },
      {
        name: '校招部长：王钰琦',
        brief: 'SCDA，有你有我有大家。',
        text: '作为一名在外漂泊了两年的电气研究生，在SCDA就像找到了家。非常庆幸自己当年选择加入SCDA，与一群有趣有料的小伙伴度过了一段美好的时光。在SCDA，有家人、有朋友、有干货、有成长。还等什么呢？快来加入吧。',
        isTextShow: false,
        img: imageDir + 'council/personal/王钰琦.jpg',
      },
      {
        name: '媒体部长：陶涛',
        brief: '遇见SCDA，遇见全世界。',
        text: '真的很幸运在来到玉泉的第一个学期加入职协，遇到了一群真诚温暖体贴的小伙伴，他们就像家人一样给予了我莫大的勇气。这里不仅有各种好玩新奇的内建活动，也有每年承接百余场企业宣讲会的责任与挑战。感谢SCDA，让我结识这样优秀又有趣的一群人，同时也期待敢于优秀的你加入我们！^_^',
        isTextShow: false,
        img: imageDir + 'council/personal/陶涛.jpg',
      },
    ],
    cr: [
      {
        name: '前部长：施浙琪',
        brief: '一入SCDA就再也不想出来了……',
        text: '校招小美好一直伴随着你，不管是在刚步入SCDA的时候，还是日常的生活中，乃至分开了，你们之间的联系也不会断了，有缘就要在这里遇到你！',
        isTextShow: false,
        img: imageDir + 'campus/personal/施浙琪.jpg',
      },
      {
        name: '部长：王钰琦',
        brief: 'SCDA，有你有我有大家',
        text: '作为一名在外漂泊了两年的电气研究生，在SCDA找到了家。非常庆幸自己当年选择加入SCDA，与一群有趣有料的小伙伴度过了一段美好的时光。在SCDA，有家人、有朋友、有干货、有成长。还等什么呢？快来加入吧～',
        isTextShow: false,
        img: imageDir + 'campus/personal/王钰琦.jpg',
      },
      {
        name: '沈艺',
        brief: '期待优秀的你',
        text: '非典型的工科女一个，看似高冷的外表下藏着一颗逗逼的心。与SCDA的相遇是一种缘分，在SCDA大家庭中收获了太多的感动和温暖，也结识了一群可爱的小伙伴，感谢SCDA带给我的一切，这里期待同样优秀的你。',
        isTextShow: false,
        img: imageDir + 'campus/personal/沈艺.jpg',
      },
      {
        name: '曹靖',
        brief: '来校招，变成你想变成的模样',
        text: '读研后做过的最棒的事情就是加入了SCDA，而且还最最幸运地进入了校招。在这里，从“十指不沾阳春水”，到“上得厅堂，下得厨房”；从“独酌无相亲”，到“天下谁人不识君”；从“日常从心”，到“花式勾搭HR”。来SCDA，变成你想变成的模样！',
        isTextShow: false,
        img: imageDir + 'campus/personal/曹靖.jpg',
      },
      {
        name: '许言君',
        brief: '遇见优秀',
        text: 'SCDA，大学期间最爱的社团，没有之一。逼格满满的活动，有趣靠谱的伙伴，停不下的热high，数不清的惊喜……这一切，只是为了期待，敢于优秀的你！',
        isTextShow: false,
        img: imageDir + 'campus/personal/许言君.jpg',
      },
      {
        name: '言森博',
        brief: 'SCDA是一段纯真的小美好',
        text: 'SCDA大概是我整个大学阶段经历过的最温暖纯真的地方了。没有疯疯傻傻吵吵闹闹，但每一个人都是这么的真诚靠谱让人觉得舒服通透。大家又都是这么的优秀，有着自己独特的想法与追求。很感激能抓住大四的尾巴遇见你们，亲爱的校招ers',
        isTextShow: false,
        img: imageDir + 'campus/personal/言森博.jpg',
      },
      {
        name: '孙璐佳',
        brief: '职协如彩虹，遇上方知有',
        text: '从大二开始，可以说大学最美好的时光都是和SCDA一起走过的，这里的人真诚以待，这里的事多姿多彩，这里像家一样永远为你敞开怀抱，给予脉脉温情与无限可能。我很庆幸遇见SCDA，遇见校招，也希望，遇见你。',
        isTextShow: false,
        img: imageDir + 'campus/personal/孙璐佳.jpg',
      },
      {
        name: '黄林新',
        brief: 'SCDA，留下你的大学印记',
        text: '这里有一群优秀的伙伴，有一支同心协力为浙大校园招聘服务的校招团队。这里是你的一个丰富多彩的生活圈子，一个可以邂逅美好的地方。',
        isTextShow: false,
        img: imageDir + 'campus/personal/黄林新.jpg',
      },
      {
        name: '徐聆忆',
        brief: '一句话：从分会到主会，对SCDA的爱不变',
        text: '在大四选择再次加入协会，是情结也是信任。这里不缺优秀的人，和优秀的人在一起总是能够更容易看清自己。认识优秀的人比做牛逼的事情更重要，正确认识自己，保持一颗学习的心，就会发现身边到处都是榜样。SCDA这种自带国奖×n的藏龙卧虎之地，能让人懂得什么叫“优秀的人比你还努力”。加入SCDA，稳赚不赔！',
        isTextShow: false,
        img: imageDir + 'campus/personal/徐聆忆.jpg',
      },
      {
        name: '郑一村',
        brief: '让时间过的有感觉一些',
        text: '来这里，遇见有趣的人，做开心的事，让时间过的更有感觉一点，让回忆变得更有意义一些。',
        isTextShow: false,
        img: imageDir + 'campus/personal/郑一村.jpg',
      },
    ],
    pm: [
      {
        name: '部长：李丹',
        brief: '对未知的一切充满好奇',
        text: '加入SCDA 项管是我做过的最正确的决定之一。在SCDA，遇到了许多优秀的人和有趣的事，也是在这里才真正开始思考自己的职业和人生规划。在项管，和许多可爱的人一起聊天开例会，聊到保安师傅来赶人也不觉尽兴。在未来一年，希望和有趣的你一起，做更多有趣的事',
        isTextShow: false,
        img: imageDir + 'pm/personal/李丹.jpg',
      },
      {
        name: '宫志伟',
        brief: '不忘初心',
        text: '加入SCDA这大半年来，其中的每个时刻都值得铭记：从项管部门的合力演出，到与家庭的爸妈兄妹的欢乐时光；从管培小组的默契配合，到周年庆众人欢聚一堂；从各个公司专场的社团新人，到名企之路策划达人。圣诞快乐轰趴，项管难忘例会……每一段经历在提升自我的同时也在内心打上SCDA这一深深的烙印。内心的悸动和思忖，莫要犹豫，勿忘初心，你会在SCDA找到属于自己的共鸣！',
        isTextShow: false,
        img: imageDir + 'pm/personal/宫志伟.jpg',
      },
      {
        name: '潘婧',
        brief: '很皮很皮的婧',
        text: '皮皮的我，遇上了皮皮的项管。科研中的皮皮虾，峡谷中的皮皮香。在被论文淹没的这一年里，能遇见项管的小伙伴，仿佛生活中多了一缕阳光。未来也请多多指教！大家一起皮这一下，非常开心',
        isTextShow: false,
        img: imageDir + 'pm/personal/潘婧.jpg',
      },
      {
        name: '王愿翔',
        brief: '典型不正经工科男',
        text: '如果你喜欢笑同时还坚定勇敢倔强，如果你喜欢浪同时还认真仔细负责，欢迎加入SCDA最单纯的项目管理中心，等待你的不只是需要你管理的项目，还有更多的peace and love，更多的灵感的火花与碰撞，我们想给你的不是冷冰冰的学习提升，而是温暖的一路携手同行。',
        isTextShow: false,
        img: imageDir + 'pm/personal/王愿翔.jpg',
      },
      {
        name: '程瑜珊',
        brief: '只想做个安静的美女子',
        text: '庆幸在短短的两年研究生生涯中能够遇到SCDA，遇到项管这么一群高颜值的优秀小伙伴~~项管贼单纯，期待小鲜肉们的加入。',
        isTextShow: false,
        img: imageDir + 'pm/personal/程瑜珊.jpg',
      },
      {
        name: '黄东华',
        brief: '相逢一回首，相知一杯酒',
        text: '从秋季加入协会开始，经历了许多难忘，每次回忆起来总有数不尽的感动，在项管，会遇上一群让你喜欢到毫无办法的人，一起做各种有趣的事，分享一切的喜怒哀乐，听说项管是车速最不慢的部门 ? 不 ，只是我记忆中所有的欢笑，都在这里。真诚，有趣，热情，项目管理中心，期待你的加入!',
        isTextShow: false,
        img: imageDir + 'pm/personal/黄东华.jpg',
      },
      {
        name: '楼冲',
        brief: 'SCDA给你无限可能性',
        text: '初入SCDA，被小伙伴们的热情所包围，各种新老面孔，在每一个特殊的日子，给你惊喜，让你感受到陪伴，友情，甚至还有甜蜜的爱情。一入项管门，一生项管人。在这里做你想做的，做你想不到的，一切的可能性在这里得以创造！',
        isTextShow: false,
        img: imageDir + 'pm/personal/楼冲.jpg',
      },
      {
        name: '王威',
        brief: '畅饮故事和酒，收获成长和爱',
        text: '我是王威，如题词一般，加入职协，诸多的故事与酒，只是冰山迷人的一角，优秀的氛围中，积极参与总是会有满意的收获，巨大的矿脉仍在等待着挖掘，优秀的未来期待你我的参与。',
        isTextShow: false,
        img: imageDir + 'pm/personal/王威.jpg',
      },
      {
        name: '贾冰',
        brief: '最舍不得，最放不下',
        text: '这里是最能闹的项管，也是最能干的项管。例会上大家各抒己见，热火朝天;聚餐时又无话不说，侃东侃西。这里有最优秀的人，也有开车最稳的司机，要来项管吗，快让我们先看看你的车速吧。',
        isTextShow: false,
        img: imageDir + 'pm/personal/贾冰.jpg',
      },
    ],
    hr: [
      {
        name: '部长：李璐浓',
        brief: '遇见SCDA的这段日子，值得铭记。',
        text: '初遇见时拘谨的陌生人，最后都变成了相熟的朋友。一起练舞、一起日租、一起看恐怖片、一起打农药、一起水群……“一起”大概是我用的最多的词了，希望即使以后分离，也还能有很多个一起。',
        isTextShow: false,
        img: imageDir + 'council/personal/李璐浓.jpg',
      },
      {
        name: '王贵洲',
        brief: '人力大家庭，等你来报名。',
        text: '我大概是协会“上班”距离最远的一个会员，也是最“小”的会员之一。因为我在紫金港读大三，要经常往返玉泉和紫金港，其他人会觉得这有些辛苦，但实际上我却十分乐意，因为见到协会的朋友是一件很开心的事。我们的协会，给我留下了太多美好的回忆。',
        isTextShow: false,
        img: imageDir + 'hr/personal/王贵洲.jpg',
      },
      {
        name: '何梦漪',
        brief: '你期待的我们都有，说起来也有遗憾，就差你了',
        text: '何梦漪，研一半年。不太喜欢户外，偶尔为了减肥跑跑步。不热衷科研，在专业中艰难跋涉；不热衷社交，白捡一个舒适的交友环境最得意；不热衷下棋，不过偶尔打个谱记个定式也有意思；不热衷平淡，折腾点行有余力的小事儿算个追求。',
        isTextShow: false,
        img: imageDir + 'hr/personal/何梦漪.jpg',
      },
      {
        name: '张良壮',
        brief: 'SCDA最吸引我的便是一群优秀而有趣的小伙伴。',
        text: '庆幸能够在枯燥的科研中加入SCDA，收获乐趣与感动，更收获求职经验与咨询。喜欢动漫，衷爱火影、海贼；喜欢电影，偏爱诺兰、姜文；喜欢运动，热衷篮球；喜欢美食，一年半的时间品尝过玉泉附近30余家大小餐馆；喜欢旅行，走过20余个大小城市。期待在这里遇见优秀的你。',
        isTextShow: false,
        img: imageDir + 'hr/personal/张良壮.jpg',
      },
      {
        name: '郭伟豪',
        brief: '人力说：所有的酒，都不如你。',
        text: '我是郭伟豪，大家都喜欢叫我翠翠！现在是材料科学与工程专业大三的小年轻。平时比较喜欢打篮球、唱歌、开黑打游戏blabla 加入SCDA之后经历了很多很棒的活动，认识了很多有趣的朋友！和不同专业的小伙伴们交流中，感觉自己的未来也多了一种可能！在这里找到一个温暖的集体，一起进步，一起成长～SCDA等你！',
        isTextShow: false,
        img: imageDir + 'hr/personal/郭伟豪.jpg',
      },
      {
        name: '刘盈兰',
        brief: '加入暖心的人力，行你所行，爱你所爱，遵从你心，无问西东。',
        text: 'SCDA是我待过的最暖，最有凝聚力的地方。还记得每一个偷偷策划的生日，用心编写的生日贺卡与推文，凌晨0点的生日祝福。除了日常内建活动，舞会、小饭桌、国王天使、微电影，还有约饭、K歌、日租、轰趴～这里有颜值与智慧并存的小伙伴，有可爱且能帮助你成长的家人，这里是我舍不得离开的地方。',
        isTextShow: false,
        img: imageDir + 'hr/personal/刘盈兰.jpg',
      },
      {
        name: '漆映荷',
        brief: 'SCDA，美好相遇。',
        text: '我是漆映荷，大四能源直博，喜舞蹈唱歌电影文字的非典型工科狗，早睡早起随身携带保温杯的老干部。欢迎你来SCDA和我一起吃脑花，也祝愿你在这里找到可以一起搞大事也可以一起聊心事的朋友。SCDA，来不了吃亏，来不了上当。',
        isTextShow: false,
        img: imageDir + 'hr/personal/漆映荷.jpg',
      },
      {
        name: '魏潇',
        brief: '爱人力，爱大家。',
        text: '我叫魏潇，来自能环大四。本以为是一个严肃正经的组织，进来之后却发现大家都优秀能干而又热情有趣。SCDA是一片沃土，每个人都能在这儿找到自己想要的东西，在SCDA能从各方面提升自己的职场竞争力，能遇见来自各专业的志同道合的朋友，还能收获很多令人感动暖心的时刻。所以你快来吧，我们在这儿等你呀',
        isTextShow: false,
        img: imageDir + 'hr/personal/魏潇.jpg',
      },
    ],
    pr: [
      {
        name: '前部长：朱伟伟',
        brief: '爱吃爱玩前部长',
        text: '在媒体已经呆了一年了，从新人到老人，从陌生到熟悉。在这里，我有一群最有趣最nice的伙伴，做着自己最喜欢的事情，媒体有一种神奇的力量，把每个人的心都紧紧连在一起。一入媒体门，终身媒体人！！',
        isTextShow: false,
        img: imageDir + 'media/personal/朱伟伟.jpg',
      },
      {
        name: '部长：陶涛',
        brief: '遇见SCDA，遇见全世界。',
        text: '真的很幸运在来到玉泉的第一个学期加入职协，加入媒体，遇到了一群真诚温暖体贴的小伙伴，他们就像家人一样给予了我莫大的勇气。这里不仅有各种好玩新奇的内建活动，也有承担大型校级项目的责任与挑战，总有一样能满足你。最后，请不要错过协会颜巅天团，媒体大家庭期待与你相遇！',
        isTextShow: false,
        img: imageDir + 'media/personal/陶涛.jpg',
      },
      {
        name: '顾沁雪',
        brief: '加入SCDA，遇见清晨的阳光，遇见远方的麦田，遇见你。',
        text: '总有些惊奇的际遇，比方说遇见SCDA，遇见媒(gong)体(guan)。我是一只非典型理科生，伪文艺女青年，喜欢谈天说地，听云识雨，喜欢很甜的故事，也喜欢即将出现的你。',
        isTextShow: false,
        img: imageDir + 'media/personal/顾沁雪.jpg',
      },
      {
        name: '徐晓倩',
        brief: '山水一程 是我有幸',
        text: '早知道最后会这么爱你，我一定选择更早加入你。但想来又怕错过现在遇到的任何一个小可爱，所以现在这样就很好。<br>不要犹豫啦，快来加入SCDA！不管你是想变得技能满满，还是想和一群优秀有趣又温暖的人一起工作玩耍，亦或是简单为了一场美好的遇见与体验，SCDA都能不负你所望。',
        isTextShow: false,
        img: imageDir + 'media/personal/徐晓倩.jpg',
      },
      {
        name: '方拓拓',
        brief: '这里有榜样也有朋友，更有无时无刻的惊喜和温暖，欢迎加入我们的大家庭！',
        text: '很开心在浙里遇到媒体的这群小可爱们，媒体是一个可爱、暖心、善良的大家庭，给我一种兄弟姐妹的归属感，谢谢你们带给我一份美好的回忆，希望我们部门和协会可以越来越好！',
        isTextShow: false,
        img: imageDir + 'media/personal/方拓拓.jpg',
      },
      {
        name: '张竞',
        brief: '爱浪的非典型工科女',
        text: '我和SCDA相识于初秋，至今加入协会已经半年，这里处处有惊喜，时时刻刻值得期待。在这里，你永远不是一个人，它是我们在浙大的归宿，八十多人的大群里，只要你有问题，总会有热心的他们为你解答。真心希望协会越来越好，你们越来越好。',
        isTextShow: false,
        img: imageDir + 'media/personal/张竞.jpg',
      },
      {
        name: '李佳雨',
        brief: '请说出你的故事。如果没有故事，我们陪你一起创造故事',
        text: '我有100种方法让你爱上媒体大家庭<br>但我只是微微一笑<br>因为我知道<br>你一定会找出第101种方法！',
        isTextShow: false,
        img: imageDir + 'media/personal/李佳雨.jpg',
      },
      {
        name: '徐健',
        brief: '一学期时间不长，一群人可爱难忘',
        text: '在SCDA，有一群可爱的人，每天都有新故事；在媒体，更有一群温暖的他和她，让你觉得像个家。如果说有什么会吸引着你也陪伴着你，那一定是真诚的情谊和羁绊；如果说有什么让你念念不忘而又恋恋不舍，那一定是温柔的陪伴与真情。在这里，你会遇见你欣赏的人与欣赏你的人，你会体验似曾相识的温暖与不曾有过的感动，你也会留下喜笑颜开的欢乐与流淌心间的美好。一起开过的那些例会，一起吃过的那些饭桌，一起度过的那些生日，一起聊过的天、做过的事、看过的景，一起走过的那平凡而不平淡的时光，都是那么珍贵、那么让人追念。加入SCDA，加入媒体，会是你正确而温柔的选择~',
        isTextShow: false,
        img: imageDir + 'media/personal/徐健.jpg',
      },
      {
        name: '田博',
        brief: '这个人很懒，什么都没留下',
        text: '很幸运加入SCDA，协会完善的制度构建出纵横交错的人际关系网，让我用很短的时间结识到不同部门、不同年级、不同专业的大朋友和小朋友，与各路大佬的接触丰富了生活充实了内心。媒体也是一个极有爱的集体，个个都是有技术颜值高的实力派小可爱，能满足你对于技术和友情的所有幻想，助你走向人生巅峰！',
        isTextShow: false,
        img: imageDir + 'media/personal/田博.jpg',
      },
      {
        name: '李少硕',
        brief: '加入SCDA，发现更好的自己和一群可爱的朋友！',
        text: '来SCDA遇到一群可爱的朋友，SCDA真的就是大家庭，一起吃喝玩乐浪，一起学习技能点，暖暖的生日推文和祝福！想学软件发推文，想拍美照玩桌游，想活动不断，来媒体就对啦！所以，你还在等待什么～',
        isTextShow: false,
        img: imageDir + 'media/personal/李少硕.jpg',
      },
    ],
  }
};

const mutations = {
  changeDepartment(state, payload) {
    state.department = payload.department;
    state.offset = 0;
  },

  changeOffset(state, payload) {
    const tmpOffset = state.offset + payload.direction;
    const maxOffset = Math.ceil(state.members[state.department].length/3)-1;
    if(tmpOffset < 0) return ;
    else if(tmpOffset > maxOffset) return ;
    state.offset = tmpOffset;
  },
};

const actions = {
  changeDepartment(context, payload) {
    context.commit('changeDepartment', payload);
  },

  changeOffset(context, payload) {
    context.commit('changeOffset', payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
