
const imageDir = 'http://static.zjuscda.club/images/member/';

const state = {
  department: 'council',
  offset: 0,
  members: {
    council: [
      {
        name: '唐建东',
        brief: '加入一个组织，你的初衷可能是索取，但当你爱上她，你的心愿一定是奉献。',
        text: '最初只是觉得这群人穿正装的样子好酷呀，所以想要加入这个地方，却发现自己误打误撞闯进了一个家。从此有了每天抱着手机看聊天记录忍不住笑出声的我，有了为她翘课翘其他活动的我，更有了鼓起勇气扛起协会这个重任的我。于是再也不会那么青涩，也不用一个人去食堂，更不用为实习孤军奋战，她给了我很多，我也想给她很多。',
        isTextShow: false,
        img: imageDir + 'council/唐建东.jpeg',
      },
      {
        name: '李晨熙',
        brief: '这里有很多挑战等待着我们。',
        text: '简单，不简单，大小说家，热血无赖。<br>爱苹果橘子，爱牛奶可乐，不过度自信，不跟随羊群。<br>追逐过天空中的流星，也将为欢乐赞颂。<br>有时把生活过的很爆炸，但从不是行尸走肉。<br>两难的抉择前并没有一个鹿盔，所以相信选择的就是最好的。',
        isTextShow: false,
        img: imageDir + 'council/李晨熙.png',
      },
      {
        name: '陈子玥',
        brief: '加入SCDA，成为想成为的那个人。',
        text: '从需要老人带的萌新，到主要参与一个大项目，一开始的时候其实并不知道自己能做成一些什么东西，也怕以自己的精力和经历承担不了太多的东西，但庆幸自己还是坚持了下来，生活更充实更有目标～目前分管协会对内事物，相信更多付出，更多收获，目标与大家一起追求卓越！',
        isTextShow: false,
        img: imageDir + 'council/陈子玥.jpeg',
      },
      {
        name: '王小青',
        brief: '带给你温暖和激情，我想这就是SCDA的可爱之处。',
        text: '作为外校生来到浙大，一切都是陌生的，我急切的寻求归属感，因此加入了SCDA，在这里果然不失所望而且出乎意料，我收获了友情以及更加积极向上的心态。一步一步走下来，对SCDA的爱让我愿意为它付出，也期待和更优秀的你们陪SCDA共同进步。',
        isTextShow: false,
        img: imageDir + 'council/王小青.jpeg',
      },
      {
        name: '任志军',
        brief: '来高精尖的职场探索，享亲人般的家庭温暖。',
        text: '如果我跟SCDA没有遇见，我不太能想象这两年的浙大生活过完，我会是怎么样的状态，可能做着不喜欢也不擅长的科研，玩着丧志的游戏，然后思索着迷茫的未来……但也幸好是我遇到了，碰到了这么一帮会做事也会搞事、能正经也能神经的人，他们狂掉节操的时候毫无下限，他们收割offer的时候也毫不手软。这终究是一个体制内的社团，但是真的被这么一群热血的人，带领着做出了一件件超越体制的事。',
        isTextShow: false,
        img: imageDir + 'council/任志军.jpeg',
      },
      {
        name: '王光霞',
        brief: 'Live in the present!',
        text: 'SCDA，在我心中这就是浙大玉泉最有活力、最有意义的社团！生活中，我常常希望看看别人的成长和正能量，以鼓励自己前进，认识一群各专业朋友相聚玩乐，开拓眼界思维，在协会这些都得到了，这里优秀的人，这里美好的事，感谢协会带给自己的成长！',
        isTextShow: false,
        img: imageDir + 'council/王光霞.jpeg',
      },
      {
        name: '何源',
        brief: '害怕失败是最无谓的事情。',
        text: '学会尝试是我在scda最大的收获。大学里面临很多选择：选工作，选实习，选专业，甚至选课，十分纠结时，我会对自己说：为什么不试试呢？于是我开始对选择的事情有了自己的感觉，感言，感想，到后来这些会连起来勾勒出自己的未来。尝试便是这样一个从无到有的过程，只要勇敢去接受它，就总会有所收获。',
        isTextShow: false,
        img: imageDir + 'council/何源.jpeg',
      },
      {
        name: '李安',
        brief: '因为这里 有最美的遇见和酸甜苦辣五味俱全的成长',
        text: '排版强迫症，选择恐惧拖延症晚期<br>不怎么有方向感，相信事情没那么糟的盲目乐观主义<br>五十六种性格，一百单八种爱好<br>夏天出生的小孩，喜欢西瓜、棒冰',
        isTextShow: false,
        img: imageDir + 'council/李安.jpeg',
      },
      {
        name: '刘空',
        brief: '春风十里，不如SCDA遇见你。',
        text: 'SCDA是有一种像家一样的东西在的，而且是一个大家庭，你能遇见很多精彩的人。你不必刻意去寻求意义，也不必为了某一个终点，这里更像是一次旅行，沿途的风景，你一定很想来看看吧。',
        isTextShow: false,
        img: imageDir + 'council/刘空.jpeg',
      },
      {
        name: '张汉杰',
        brief: 'If you want something you\'ve never had, you\'ve got to do something you\'ve never Done.',
        text: '加入职协，就是一个不断尝试，不断收获的过程。在协会里交到了可以谈心的好朋友，认识了许多优秀且比我努力的人，也不断的有机会锻炼自己，提升自己。感谢协会，也庆幸自己当初的选择。',
        isTextShow: false,
        img: imageDir + 'council/张汉杰.jpeg',
      },
    ],
    cr: [
      {
        name: '王小青',
        brief: '带给你温暖和激情，我想这就是SCDA的可爱之处。',
        text: '作为外校生来到浙大，一切都是陌生的，我急切的寻求归属感，因此加入了SCDA，在这里果然不失所望而且出乎意料，我收获了友情以及更加积极向上的心态。一步一步走下来，对SCDA的爱让我愿意为它付出，也期待和更优秀的你们陪SCDA共同进步。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/1王小青.jpg',
      },
      {
        name: '何哲楠',
        brief: '先出发，自有人随行。',
        text: 'scda主会是一个行动力令人惊叹的组织，无论是名企之路还是企业参观，各个环节都高效地执行。能和一群同样优秀的小伙伴一起去努力，去获得成绩，是一件幸福的事情。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/5何哲楠.jpg',
      },
      {
        name: '施浙琪',
        brief: '先交朋友，后做事！',
        text: '如果你觉得生活缺少点波澜，如果你想广交好友，那么在我加入SCDA之后，这些都有了。把自己的心事袒露在众人面前，感受到家庭的温暖和被信任的感觉，这种氛围真的很棒！此外，你会碰到很多大神，学到很多干货，学习生活双丰收！',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/2施浙琪.jpg',
      },
      {
        name: '陈侠',
        brief: '校招有人爱 有爱的人来校招',
        text: '在校招度过的半个学期内，感受到了之前素未谋面的一群人的热情与开朗。整个学期的心情因为这一点，变得格外地愉快。非常感谢这些伙伴，也感谢自己当初进入这个温暖的地方。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/7陈侠.jpg',
      },
      {
        name: '申佳佳',
        brief: '来校招，给你想要的家~',
        text: '大学从未加过任何社团的我，在某人的怂恿加自己的不服气之下，悄悄交了SCDA纳新表，又悄悄面了试，所以悄悄地成为SCDA的一员。在这里，你可以遇见你幻想过的人，也可以成为你想成为的人，感谢SCDA，感谢校招小单纯大家庭！',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/3申佳佳.jpg',
      },
      {
        name: '王亚伟',
        brief: 'SCDA真的很有家的感觉，在这里很愉快。',
        text: '作为一枚电气工科男，在SCDA里仰望众星，在大家的帮助下真的取得了很大的进步。校招里的每一个人都很亲近，浪的很开心。我觉得只有正式的话语才能表达我对加入SCDA感到的荣幸，也就是这句：SCDA，我爱你。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/9王亚伟.jpg',
      },
      {
        name: '钮草萍',
        brief: '我们在这里，等风也等你',
        text: '刚进入校招就被强力灌输最美是校招的概念，其实心心念念的大校招大概也是协会最单纯的地方了吧？顶着校招名号，可文艺可装逼可霸气可欢脱，这里有温婉的小姐姐，有帅气的小哥哥，有逗比有大神，校招ers干起活来正经且靠谱，玩起来有爱且创意十足……wuli大siao招，又何止于美呀。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/6钮草萍.jpg',
      },
      {
        name: '郭晨凯',
        brief: '讲真校招开发出了我很多潜力。',
        text: '校招作为整个学校独一无二的部门，负责学校所有的企业宣讲会。我有幸能作为校招成员可以跟企业有近距离的接触。<br>讲真，我觉得自己特别有幸能加入校招这么嗨的部门，认识到这么多优秀的校招小伙伴，可以一起玩游戏，一起看电影，也可以一起谈谈心。',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/4郭晨凯.jpg',
      },
      {
        name: '周文语',
        brief: '吃了大盘鸡就是SCDA的人了。',
        text: '很幸运加入了SCDA，这是一个暖暖的像家一样的地方，从接到面试通过的套路开始，到每次开会都能吃到的蛋糕，小清新家庭的宝石山家聚，管培小组火星工厂夜游，还有校招小天使处心积虑安排的KTV例会，很开心认识了大家！',
        isTextShow: false,
        img: imageDir + 'campusRecruitment/8周文语.jpg',
      },
    ],
    pm: [
      {
        name: '李冬',
        brief: '一入项管门，终身项管人',
        text: '第一次接触SCDA，被它的专业性和各路优秀的人儿所吸引，从此开始了与SCDA的故事。<br>仍记得破冰时的惊喜、 组家庭选mentor 时获得的归属感，还有一起拍微电影一起去舟山素拓，在这里总能找到和你谈心的人；每周项管例会大家干货满满的分享，在项管总能在某个不期而遇的时候给自己充充电。<br>期待着那个敢于优秀，踏实又有趣的你，让我们相聚在9月相聚在项管。',
        isTextShow: false,
        img: imageDir + 'projectManagement/lidong.jpg',
      },
      {
        name: '赵耀',
        brief: '虽叫赵耀，但我是一棵心向阳光的向日葵',
        text: '进入SCDA,收获颇多。先说内建内训，从组家庭，到舟山出游，再到模拟面试，这些让我们结识了诸多优秀的小伙伴，也提高了我们的职场认知和职业意识；再谈活动，从名企之路行业解密、企业参观初识名企，到职场训练全面培养，从入门到精通式的培养让我们SCDA无愧于自己的口号：Your Future, We Care!<br>心有想法，去实践吧，永远不走让自己遗憾的事，SCDA等你来。',
        isTextShow: false,
        img: imageDir + 'projectManagement/zhaoyao.jpg',
      },
      {
        name: '杨雨晨',
        brief: '与我一起，开怀大笑',
        text: '我是杨雨晨，加入SCDA是入住玉泉后最小确幸的事。一群和你夜宵聊聊八卦的朋友，一群永谦自习谈心共谋offer的战友，一大帮真诚给予帮助的前辈...在这个专业课与实验室徘徊的高年级本科生活中，协会是一剂快乐强心剂；在这个忐忑迷茫的求职季中，协会给你的不只是干货，还有战友间的鼓励。<br>加入SCDA，我在这里与你碰撞大学最美好的一抹色彩。',
        isTextShow: false,
        img: imageDir + 'projectManagement/雨晨.jpg',
      },
      {
        name: '奚爽',
        brief: '狼瘾少女开椰小能手',
        text: '大家好，我叫奚爽，是能源工程学院的学生，来自浙江宁波。<br>活泼开朗的乐天派，认真负责的实干者。<br>动如二哈，静若咸鱼。<br>人称狼瘾少女。<br>自从加入SCDA、加入项管这个大家庭，管培、企业参观、正装照，大家边学边玩；蛋糕、大盘鸡、聚会活动，各种惊喜层出不穷。<br>还犹豫什么呢，期待认识有趣的你们！',
        isTextShow: false,
        img: imageDir + 'projectManagement/xishuang.jpg',
      },
      {
        name: '李柱',
        brief: 'from zero to hero',
        text: '还记得当初之所以报名加入协会就是听说SCDA很厉害，结果进来后发现……呃……比想象中还要厉害！！！每个人都很能玩，做正事也超级能干，能把一堆事情都做的井井有条！所以想说很高兴加入SCDA，加入项目管理部，加入养老院总院～然后认识了辣么多有趣的人儿。欢迎加入SCDA项管，绝对会让你收获一堆有趣的朋友和一段独一无二的社团体验^_^',
        isTextShow: false,
        img: imageDir + 'projectManagement/李柱.jpg',
      },
      {
        name: '罗理琼',
        brief: 'Keep Smiling，Forever Young',
        text: '我叫罗理琼，化工研一小鲜肉一枚，偶尔打打羽毛球，偶尔跑跑步，偶尔看看电影，欢迎来约~进了scda之后，真的，真的收获了很多。scda的组织架构很棒，有家庭，管培小组，部门，让你的交际圈可以延展到各个地方。协会做的活动也很有趣，和就业特别的挂钩，对就业感兴趣的话，就能在这里能找到一群志同道合的伙伴，一起努力，一起进步，一起成长。',
        isTextShow: false,
        img: imageDir + 'projectManagement/罗理琼.jpg',
      },
      {
        name: '冯权',
        brief: '项管最单纯权',
        text: '大家好，我是项管部的冯权，在SCDA待了小半年，感慨颇多，在管培小组活动经历了人生中第一次拍电影，Mentor家庭制度让大家的关系更亲密，认识了许许多多优秀又有趣的人，大家敞开心扉交流、为完成共同的目标而努力，这真是一个能让你好好成长、快乐生活的协会！',
        isTextShow: false,
        img: imageDir + 'projectManagement/冯权.jpg',
      },
    ],
    hr: [
      {
        name: '李安',
        brief: '因为这里 有最美的遇见和酸甜苦辣五味俱全的成长',
        text: '排版强迫症，选择恐惧拖延症晚期<br>不怎么有方向感，相信事情没那么糟的盲目乐观主义<br>五十六种性格，一百单八种爱好<br>夏天出生的小孩，喜欢西瓜、棒冰',
        isTextShow: false,
        img: imageDir + 'humanResource/anan.jpg',
      },
      {
        name: '关玲玲',
        brief: 'SCDA，一个让我舍不得那么快离开的地方',
        text: '在SCDA，我看到了身边人是怎样工作，怎样学习、怎样从小单纯蜕变为老司机的。在人力，经历了很多很多暖心的时刻，这是一个值得用心交朋友的地方，也是一个值得我担起更多责任的地方。',
        isTextShow: false,
        img: imageDir + 'humanResource/lingling.jpg',
      },
      {
        name: '唐建东',
        brief: '加入一个组织，你的初衷可能是索取，但当你爱上她，你的心愿一定是奉献。',
        text: '最初只是觉得这群人穿正装的样子好酷呀，所以想要加入这个地方，却发现自己误打误撞闯进了一个家。从此有了每天抱着手机看聊天记录忍不住笑出声的我，有了为她翘课翘其他活动的我，更有了鼓起勇气扛起协会这个重任的我。于是再也不会那么青涩，也不用一个人去食堂，更不用为实习孤军奋战，她给了我很多，我也想给她很多。',
        isTextShow: false,
        img: imageDir + 'humanResource/pangdong.jpg',
      },
      {
        name: '康牧天',
        brief: '在这里，你将真正被夸奖',
        text: '我是一点也不帅一点也不暖一点也不可爱的天天，不爱吃喝不爱浪只喜欢科研和学习，谢谢大家mua。正式感言：天真的自己当初向往着高冷的SCDA，却没想到会遇到这么温暖包容的团体，遇到这么多超级好看性格随和的妹子和暖心的汉子们，在我还不老的年华，因为刚好遇见你，留下足迹才美丽，如果再相遇，我想，一定会记得你。',
        isTextShow: false,
        img: imageDir + 'humanResource/tiantian.jpg',
      },
      {
        name: '邵悠然',
        brief: '爱自己是终生浪漫的开始',
        text: '这个菇凉姓邵名悠然，情绪很丰富，爱哭爱笑爱闹腾，也爱山爱水爱风景，有仗剑走天涯的大梦想，也盼望着绕池漫步看鱼游的小悠闲。在SCDA，在人力，有了一群可以一起讨论梦想，又可以一起发呆的人，希望大家都要越来越幸运啊！',
        isTextShow: false,
        img: imageDir + 'humanResource/youran.jpg',
      },
      {
        name: '田野',
        brief: 'SCDA其乐融融，多姿多彩的家',
        text: '大学的社团关乎什么?以前的我以为是工作，是任务。<br>SCDA给我带来的则是完全不一样的感受。社团是丰富多彩的内建，是叱咤风云的精英的讲座，是屹立名企之林的企业专场，是朝气蓬勃充满活力的朋友，是其乐融融，和睦愉快的大家庭。能够在这里，在SCDA一起快乐度过大学生活，将是我一生难忘的经历。',
        isTextShow: false,
        img: imageDir + 'humanResource/tianye.jpg',
      },
      {
        name: '郑雪绒',
        brief: '友爱的人力是你的舞台',
        text: '大家好，我是SCDA人力的郑雪绒。非常开心加入职协的大家庭，认识了许多有趣或优秀的人。加入人力资源部以后，参与负责了各种有料的内训和友爱的内建活动，收获良多。来吧，这里是你的舞台，欢迎你的加入！',
        isTextShow: false,
        img: imageDir + 'humanResource/xuerong.jpg',
      },
      {
        name: '高华涛',
        brief: '非常喜欢SCDAers先从交朋友开始的协会氛围！',
        text: '在SCDA，收获的不仅仅是组织表达能力的锻炼和提升，更重要的是友谊！因为在这里，每一个新人的第一项task就是和大家交朋友，感谢SCDA这个优秀的团体和每一个吃过大盘鸡的人！',
        isTextShow: false,
        img: imageDir + 'humanResource/huatao.jpg',
      },
      {
        name: '梅至雅',
        brief: '遇见SCDA是一种缘分，是很美好的事情',
        text: '在这里的时间总是惊喜。在八舍的走廊全家的门口西湖的岸边夜聊；在永谦的小房间开会学习回忆过童年也期盼过未来；在数不清的以SCDA开头的群聊里互相调侃偷偷计划；在这里重新找到家的感觉。来到这里之前，我只是觉得披上正装的SCDAers精致能干；来到这里之后，更多时候的SCDAers热情有趣。所以我选择留下，也期待你到来。',
        isTextShow: false,
        img: imageDir + 'humanResource/meizi.jpg',
      },
      // {
      //   name: '陈然',
      //   brief: '',
      //   text: '',
      //   isTextShow: false,
      //   img: imageDir + 'humanResource/crcr.jpg',
      // },
    ],
    pr: [
      {
        name: '刘空',
        brief: '天上人间保健空（劳苦功高的前部长）',
        text: 'SCDA是有一种像家一样的东西在的，而且是一个大家庭，你能遇见很多精彩的人。你不必刻意去寻求意义，也不必为了某一个终点，这里更像是一次旅行，沿途的风景，你一定很想来看看吧。',
        isTextShow: false,
        img: imageDir + 'publicRelation/刘空.jpg',
      },
      {
        name: '朱伟伟',
        brief: '不安分的双面水瓶女',
        text: '蜗居在玉泉却不甘心做科研的工科女，喜欢所有美的一切。加入职协，加入公关，遇到了一群真诚体贴的家人。在这里，不需要刻意熟络，大家就像多年未见的朋友一样，大家一起玩，一起浪，一起开心，一起出糗。加入公关大家庭，不仅是能力的提升，我们想陪着你，风里雨里一起走过！',
        isTextShow: false,
        img: imageDir + 'publicRelation/朱伟伟.jpg',
      },
      {
        name: '邱思绮',
        brief: '静如处子 动若癫痫',
        text: '一个在紫金港也不甘寂寞的研究生小学妹（jie），在过去的半年里，和身在yq的SCDA主会来了场美轮美奂的异地恋。其实是个懒癌晚期患者，却心甘情愿每周跨越半个杭州，只为见协会里可爱的小(老)单(司)纯(机)们。吃货，最羡慕那种光吃不胖的人。梦想不大不小，唯愿一屋一狗一人心。',
        isTextShow: false,
        img: imageDir + 'publicRelation/邱思绮.jpg',
      },
      {
        name: '王斌',
        brief: '新手上路单纯斌',
        text: '喜欢SCDA，真的就是大家庭。一起吃喝玩乐浪，一起学习技能点。暖暖的生日推文和祝福，各种管培内建活动，还隐藏着无数桌游高端玩家。想学软件发推文，想拍美照玩桌游，想开车斗图，想活动不断，来公关就对啦！为什么我美颜如此，因为对公关爱的深沉。',
        isTextShow: false,
        img: imageDir + 'publicRelation/王斌.jpg',
      },
      {
        name: '朱家毅',
        brief: '想当段子手的公关剪刀手',
        text: '还在为如何变得更优秀而苦恼？想成为技术大神却无处从师？想拓宽交际却交友无门？觉得自己简历不够完美实习经历不够丰富？最重要的，你是否没有女（男）朋友！我曾经也这样空想，但加入SCDA公关部让这一切变成了现实～还等什么，停止空想，行动吧！',
        isTextShow: false,
        img: imageDir + 'publicRelation/朱家毅.jpg',
      },
      {
        name: '杨雯',
        brief: '拥有情怀乐观雯',
        text: '成为scda中的一员后，认识了一群可爱的小伙伴，一起浪&约宵夜；在公关大家庭中，认识了一群可以靠颜值但偏偏靠技术吃饭的有趣的你们，一群有意思的人做着有意义的事，不要犹豫，加入我们，We want you!',
        isTextShow: false,
        img: imageDir + 'publicRelation/杨雯.jpg',
      },
      {
        name: '赵丹',
        brief: '三秒钟热度的极度拖延症患者',
        text: '加入SCDA之前的我，好像内心充满了对前途不知所措的悲伤，万幸，进入了SCDA，认识了一帮优秀又有趣的人，这半年来，收获的不仅仅是各种技能，还有一个坚实的后盾，或许每个人都很忙，或许我们尚未谋面，但只要你是SCDAer,只要你在群里说出你的困难，总有人站出来帮你解决！',
        isTextShow: false,
        img: imageDir + 'publicRelation/赵丹.jpg',
      },
      {
        name: '熊伟东',
        brief: '漫无目的的行者东',
        text: '如果觉得学习任务琐碎无聊，科研生活枯燥乏味，那你一定还没加入我们。来SCDA遇到一群可爱的朋友。喜欢和大家一起认真高效的工作，一起肆无忌惮的玩乐。管培、内训、企业参观……我们有技术满满的大佬，也有单纯清新的老司机，以及期待你将带给我们的无限可能。所以，你还在等待什么？来SCDA，当一个公关人，作一个在浙里最重要的决定！',
        isTextShow: false,
        img: imageDir + 'publicRelation/熊伟东.jpg',
      },
      {
        name: '张晗',
        brief: '帅气的公关狼人一把手',
        text: 'SCDA的每一个部门、每一位成员都是非常棒的，加入SCDA之后你就会有一种“相见恨晚”的感觉。不管是协会满满的干货和资源，还是每一位优秀的协会老人，总有你能收获的独一无二的东西在这里。而公关作为邪会最后一片净土，公关的老单纯们欢迎想要加入的小单纯和老司机和我们一起聊技术谈人生。',
        isTextShow: false,
        img: imageDir + 'publicRelation/张晗.jpg',
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
