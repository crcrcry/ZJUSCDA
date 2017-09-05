const imagesDir = 'http://static.zjuscda.club/images/association/';
const devImagesPath = '../../../static/images/association/';


const state = {
  title: '浙江大学<br>学生就业与职业发展协会',

  // 协会介绍，一段内容放于数组中成为一项
  description: [
    '成立于2003年10月16日，是全国高校中成立的第二家学生职业发展协会，是浙江大学就业与指导中心下属的五星级服务类社团。自成立以来，协会每年承接近千场企业校园招聘会，与众多名企保持合作关系，帮助浙大学子树立正确的职业价值观和发展观，推动学校、学生、企业的多向交流。',
    '协会一直秉承服务意识、家文化、精英文化，对外举办职场精英训练营、名企之路、企业参观等众多高质量活动；对内实行管培计划、内训计划、mentor制度，提高团队的凝聚力，提升内部成员的个人能力，为协会成员创造个人提升的发展空间。',
    '打造专业、成熟、真诚服务的精英团队，一直是我们不懈努力的动力。依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁，努力为学生拓展职业发展资源，提升浙大学子就业竞争力，是我们最终的目标。',
  ],

  // 三张图，按照上中下排列
  imgUrl: [
    devImagesPath + '1.jpg',
    devImagesPath + '2.jpg',
    devImagesPath + '3.jpg',
    devImagesPath + '4.jpg',
  ],
};

export default {
  state,
};
