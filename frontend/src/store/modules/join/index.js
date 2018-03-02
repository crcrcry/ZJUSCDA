
const state = {
  ifStartJoin: true,
  tip: {
    title: '纳新小提示',
    message: '点击保存按钮，数据可自动保存在本地哦。',
    duration: 13000, // 提示的持续事件，单位ms
    offset: 210, // 偏移量
  },
  timeline: [
    {
      thing: '纳新开始',
      time: '3.5'
    },
    {
      thing: '路演',
      time: '3.12 中午 永谦小剧场'
    },
    {
      thing: '小饭桌',
      time: '3.13 17:00 二食堂'
    },
    {
      thing: '宣讲会',
      time: '3.13 18:30 永谦二报'
    },
    {
      thing: '报名截止',
      time: '3.15 中午12：00'
    },
    {
      thing: '面试',
      time: '3.16-3.18 永谦小剧场'
    },
  ],
  formInfo: {
    q1: '问题一: 爱好、特长及技能',
    q2: '问题二: 对所报部门的理解及您的优势',
    time: [
      'A 3月16号 下午',
      'B 3月16号 晚上',
      'C 3月17号 上午',
    ],
  },
};

export default {
  state,
};
