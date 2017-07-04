
const imageDir = '../../../../static/images/member/';

const state = {
  department: 'council',
  offset: 0,
  members: {
    council: [
      {
        name: '陈然a',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然b',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然c',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然d',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
    ],
    cr: [
      {
        name: '陈然1',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然2',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然3',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
      {
        name: '陈然4',
        brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
        text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
        isTextShow: false,
        img: imageDir + 'council/chenran3.jpg',
      },
    ],
    pm: [],
    hr: [],
    pr: [],
  }
};

const mutations = {
  changeDepartment(state, payload) {
    state.department = payload.department;
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
