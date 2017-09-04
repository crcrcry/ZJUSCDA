<template>
  <div id="container">
    <div id="board">
      <form-board :ifStart="ifStartJoin"></form-board>
    </div>
  </div>
</template>

<script>
  import formBoard from './form-board';

  export default {
    name: 'join-page',
    computed: {
      ifStartJoin() {
        return this.$store.state.join.ifStartJoin;
      }
    },
    components: {
      formBoard,
    },
    methods: {

    },
    mounted() {
      // 纳新信息提示
      const h = this.$createElement;
      const timeline = this.$store.state.join.timeline;
      const infoNode = [];
      timeline.forEach((item) => {
        infoNode.push(h('h', null, `${item.thing}：`));
        infoNode.push(h('h', {style: 'color: rgb(109, 126, 150); font-weight: 300'}, item.time));
        infoNode.push(h('br', null, null));
      });

      this.$notify.info({
        title: '纳新时间轴',
        message: h('p', null, infoNode),
        duration: 0,
        showClose: true,
      });

      this.$notify.info({...this.$store.state.join.tip});
    },
  };
</script>

<style scoped>
  #container{
    width: 93.75vw;
    height: 77vh;
    padding: 6.25vh 3.125vw;
  }

  #board{
    width: 93.75vw;
    height: 77vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 30px;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
</style>
