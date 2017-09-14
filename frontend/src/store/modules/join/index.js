
const state = {
  ifStartJoin: true,
  tip: {
    title: '纳新小提示',
    message: '若想修改报名信息，重新填写表单并选择简历，填好后提交即可；若只想修改简历，直接选择文件提交即可。',
    duration: 13000, // 提示的持续事件，单位ms
    offset: 210, // 偏移量
  },
  timeline: [
    {
      thing: '纳新开始',
      time: '9.15'
    },
    {
      thing: '路演',
      time: '9.22 永谦小剧场'
    },
    {
      thing: '小饭桌',
      time: '9.24 二食堂'
    },
    {
      thing: '宣讲会',
      time: '9.24 地点暂时未定'
    },
    {
      thing: '报名截止',
      time: '9.26 中午12：00'
    },
    {
      thing: '面试',
      time: '9.27-9.29 永谦小剧场'
    },
  ],
  formInfo: {
    q1: '问题一: 爱好、特长及技能',
    q2: '问题二: 对所报部门的理解及您的优势',
    time: [
      'A 9月27号 上午',
      'B 9月27号 下午',
      'C 9月27号 晚上',
      'D 9月28号 上午',
      'E 9月28号 下午',
      'F 9月28号 晚上',
    ],
  },
};

export default {
  state,
};
