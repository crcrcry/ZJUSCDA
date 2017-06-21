import Vue from 'vue';
import Router from 'vue-router';

import homePage from '../components/app-container/home-page/';
import associationPage from '../components/app-container/association-page/';
import departmentPage from '../components/app-container/department-page/';
import activityPage from '../components/app-container/activity-page/';
import memberPage from '../components/app-container/member-page/';
import joinPage from '../components/app-container/join-page/';
import humanResource from '../components/app-container/department-page/humanResource';
import campusRecruitment from '../components/app-container/department-page/campusRecruitment';
import projectManagement from '../components/app-container/department-page/projectManagement';
import publicRelation from '../components/app-container/department-page/publicRelation';

// import blank from '../components/template';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage,
    },
    {
      path: '/association',
      component: associationPage,
    },
    {
      path: '/department',
      component: departmentPage,
      children: [
        {
          path: 'humanResource',
          component: humanResource,
        },
        {
          path: 'publicRelation',
          component: publicRelation,
        },
        {
          path: 'campusRecruitment',
          component: campusRecruitment,
        },
        {
          path: 'projectManagement',
          component: projectManagement,
        },
      ],
    },
    {
      path: '/activity',
      component: activityPage,
    },
    {
      path: '/member',
      component: memberPage,
    },
    {
      path: '/join',
      component: joinPage,
    },
  ],
});
