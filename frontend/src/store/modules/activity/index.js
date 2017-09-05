
const imagesDir = 'http://static.zjuscda.club/images/activity/';
const devImagesPath = '../../../static/images/activity/';


const state = {
  open: 0,
  ifOuterActivity: true,
  outerActivity: [
    {
      id: 'c1',
      name: '名企之路',
      state: false,
      text: [
        '在浙江大学，每年都会有一大批优秀学子进入世界五百强企业、大型国有企业以及知名民营企业就职，而对于广大的在校学生而言，这些进入名企的学长、学姐是非常宝贵的资源。肩负着“提高浙大学生就业竞争力”这一使命的SCDA策划了“名企之路”这样一个大型求职经验交流会活动，希望通过搭建这样一个平台，让步入名企的“前辈”为在校学子传授经验，让在校生早日树立正确的职业价值观和发展观；同时也创造机会让更多的优秀企业走入校园，被更多的同学所了解，提升优秀企业在浙大的知名度和影响力。',
        '“名企之路”自举办以来，旨在帮助浙大学子走近职场，逐梦未来，深受师生们喜爱。场场爆满的经验交流会对大学生和参与企业都产生了深远的影响。经过十一年的努力，我们愈加的成熟，活动的举办也愈加成功。相信长期的经验和人气积攒，势必能帮助我们进一步提高活动的影响力，让广大浙大学子和企业可以从中收获更多。',
      ],
      cardImgUrl: imagesDir + '名企之路/1.jpg',
      introImgUrl: [
        imagesDir + '名企之路/2.jpg',
        imagesDir + '名企之路/3.jpg',
      ],
    },
    {
      id: 'c2',
      name: '职场精英训练营',
      state: true,
      text: [
        '本着提高浙大学子就业竞争力的目标，自2006年起，由浙江大学就业办主办，浙江大学学生就业与职业发展协会（SCDA）协办的”职场精英训练营”已成功举办十届，在校内外引起巨大反响，已成为浙大的精品活动，受到了学校领导、校外名企的高度关注。',
        '活动内容覆盖简历、面试、行业指导、人际交往等多项求职课题，以期为企业和求职者搭建一个自由交流的平台。活动在提升浙大学子就业竞争力的同时，也让更多的优秀企业走入校园，提升其在校园中的影响力和知名度，除此之外，与学生的交流也为校园招聘打下良好基础。综上，该活动促成了学生、企业、学校三方共赢的局面。',
      ],
      cardImgUrl: imagesDir + '职场精英/1.jpg',
      introImgUrl: [
        imagesDir + '职场精英/2.jpg',
        imagesDir + '职场精英/3.jpg',
      ],
    },
    {
      id: 'c3',
      name: '企业参观',
      state: false,
      text: [
        '作为协会的大型A类活动之一，企业参观的目的是拉近学生和企业的距离，创造一个沟通的桥梁，是一个让同学们充分的了解自己目标企业的双赢活动。通过企业参观，学生可以直接走近企业，对部门、运营机制、企业文化有更深入的了解，帮助学生确定自己的就业目标。',
        '企业参观活动已举办到第四年，所涉及的企业已经包括阿里巴巴、网易等互联网公司；可口可乐、农夫山泉等快消品牌；思科、艾默生、科磊等工业公司，活动直接影响人数近千人，受到同学们的一致好评。',
      ],
      cardImgUrl: imagesDir + '企业参观/1.jpeg',
      introImgUrl: [
        imagesDir + '企业参观/2.jpeg',
        imagesDir + '企业参观/3.jpeg',
      ],
    },
    {
      id: 'c4',
      name: '企业招聘专场',
      state: true,
      text: [
        '作为浙江大学就业办下属协会，SCDA属性即为学生和企业沟通的桥梁，而校园招聘专场则是广大学生和企业交流的平台，每年承接近千场的校园招聘宣讲会，为几万名应届毕业生服务，充分体现了协会作为五星级服务型社团的“服务意识”。服务浙大同学既是我们的职责，也是我们的荣耀，专场也作为协会立会之本，更是我们最宝贵的财富。',
      ],
      cardImgUrl: imagesDir + '专场招聘会/1.jpeg',
      introImgUrl: [
        imagesDir + '专场招聘会/2.jpeg',
        imagesDir + '专场招聘会/3.jpeg',
      ],
    },
  ],
  innerActivity: [
    {
      title: '2015 周年庆',
      image: devImagesPath + '内部活动/2015周年庆.jpeg',
    },
    {
      title: '2016 周年庆',
      image: devImagesPath + '内部活动/2016周年庆.jpg',
    },
    {
      title: '2016 mentor 之夜',
      image: devImagesPath + '内部活动/2016mentor之夜.jpeg',
    },
    {
      title: '2017 mentor 之夜',
      image: devImagesPath + '内部活动/2017mentor之夜.jpeg',
    },
    {
      title: '2017 内训-管培颁奖',
      image: devImagesPath + '内部活动/内训-管培颁奖.jpeg',
    },
    {
      title: '2017 内训-管培微电影',
      image: devImagesPath + '内部活动/内训-管培微电影.jpeg',
    },
    {
      title: '2017 内训-模拟面试',
      image: devImagesPath + '内部活动/内训-模拟面试.jpg',
    },
    {
      title: '2016 内训-实习分享',
      image: devImagesPath + '内部活动/内训-实习分享.jpg',
    },
    {
      title: '2016 纪龙山探险',
      image: devImagesPath + '内部活动/2016纪龙山探险.jpeg',
    },
    {
      title: '2017 舟山素拓',
      image: devImagesPath + '内部活动/2017舟山素拓.jpeg',
    },
    {
      title: '2016 跨年别墅趴',
      image: devImagesPath + '内部活动/跨年别墅趴.jpeg',
    },
    {
      title: '2017 撕名牌',
      image: devImagesPath + '内部活动/撕名牌.jpeg',
    },
    {
      title: '2016 万圣节化妆舞会',
      image: devImagesPath + '内部活动/万圣节化妆舞会.jpg',
    },
    {
      title: '2017 舞会',
      image: devImagesPath + '内部活动/舞会.jpeg',
    },
    {
      title: '2017 SCDA 的碧海蓝天',
      image: devImagesPath + '内部活动/SCDA的碧海蓝天.jpeg',
    },
  ],
};

const mutations = {
  changeActivityType(state, payload) {
    state.ifOuterActivity = payload.ifOuterActivity;
  }
};

const actions = {
  changeActivityType(context, payload) {
    context.commit('changeActivityType', { ...payload });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
