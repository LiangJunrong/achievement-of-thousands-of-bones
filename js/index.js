var app = new Vue({
  el: "#app",
  data: {
    id: 1, // 自增，确保能快速找到数据
    todo: "", // 双向绑定输入框
    todoInfos: [
      // 已不需要，注释掉
      // {
      //   id: 10, // id 唯一且自增
      //   isChecked: false, // 未完成和放弃为 false，完成为 true
      //   isEdit: false, // 是否在编辑
      //   todoTitle: "敌军 1", // todo 标题
      //   state: 0, // 0 - 未完成，1 - 完成，2 - 放弃完成
      // },
    ]
  },
  methods: {
    addTodoItem() {
      // 每次点击，往数组中添加一组数据
      this.todoInfos.push({
        id: this.id, // id 唯一且自增
        isChecked: false, // 未完成和放弃为 false，完成为 true
        isEdit: false, // 是否在编辑
        todoTitle: this.todo,  // todo 标题
        state: 0, // 0 - 未完成，1 - 完成，2 - 放弃完成
      })
      // id 自增
      this.id++;
      // 清空输入框
      this.todo = "";
    },
    /**
     * 这里使用了三种写法
     * 1. map + splice
     * 2. splice + findIndex
     * 3. filter
     */
    // // 1. map + splice 写法
    // deleteInfo(recycleItem) {
    //   this.todoInfos.map((item, index) => {
    //     if(item.id == recycleItem.id) {
    //       this.todoInfos.splice(index, 1);
    //     }
    //   })
    // },
    // // 2. splice + findIndex 写法
    // deleteInfo(recycleItem) {
    //   this.todoInfos.splice( this.todoInfos.findIndex( v => v.id === recycleItem.id), 1);
    // },
    // 3. filter 写法
    deleteInfo(recycleItem) {
      this.todoInfos = this.todoInfos.filter( (x) => {
        return x.id != recycleItem.id;
      })
    }
  }
})