

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
    { name: '校', id: 'campusRecruitment' },
    { name: '项', id: 'projectManagement' },
    { name: '理', id: 'council' },
    { name: '人', id: 'humanResource' },
    { name: '公', id: 'publicRelation' },
  ];
}

export default { getNavName, getDepartmentName };
