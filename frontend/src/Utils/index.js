

function getNavName() {
  return [
    { name: '协会介绍', id: 'association', path: '/association' },
    { name: '部门介绍', id: 'department', path: '/department' },
    { name: '活动介绍', id: 'activity', path: '/activity' },
    { name: '核心成员', id: 'member', path: '/member' },
    { name: '纳新报名', id: 'join', path: '/join' },
  ];
}

function getDepartmentName() {
  return [
    { name: '校招', id: 'campusRecruitment', brief: 'cr' },
    { name: '项管', id: 'projectManagement', brief: 'pm' },
    { name: '理事', id: 'council', brief: 'council' },
    { name: '人力', id: 'humanResource', brief: 'hr' },
    { name: '公关', id: 'publicRelation', brief: 'pr' },
  ];
}

function deepClone(obj) {
  const newObj = obj.constructor === Array ? [] : {};
  if(typeof obj !== 'object'){
    return obj;
  }else{
    for(let i in obj){
      newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
    return newObj;
  }
}

export default { getNavName, getDepartmentName, deepClone };
