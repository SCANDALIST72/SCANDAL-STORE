const App ={
    el:'#app',
    data() {
        
        return{
            count: 0,
            message: "адрес",
        }

    },
    methods :{
        add(){
            this.count++
        }
    }
}
Vue.createApp(App).mount('#app')