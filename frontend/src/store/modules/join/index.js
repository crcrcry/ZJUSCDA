
const state = {
  ifStartJoin: true,
  joinInfo: {
    title: 'SCDA 秋纳 9.15-9.30 ',
    message: '小提示：若想修改报名信息，重新填写表单并选择简历，填好后提交即可；若只想修改简历，直接选择文件提交即可。',
    duration: 0, // 提示的持续事件，单位ms
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
