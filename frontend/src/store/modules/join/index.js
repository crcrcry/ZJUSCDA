
const state = {
  ifStartJoin: true,
  joinInfo: {
    title: 'SCDA 秋季纳新',
    message: '纳新时间为9月1日至9月10日，请尽快报名哦。',
    duration: 3500, // 提示的持续事件，单位ms
  },
  formInfo: {
    q1: '问题一: 爱好、特长及技能',
    q2: '问题二: 对所报部门的理解及您的优势',
    time: [
      'A 9月1号 下午',
      'B 9月2号 下午',
      'C 9月3号 下午',
      'D 9月4号 下午',
      'E 9月5号 下午',
      'F 9月6号 下午',
    ],
  },
};

export default {
  state,
};
