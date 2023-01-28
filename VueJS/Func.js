const App ={
    el:'#app',
    data() {
        
        return{
            count: 0,
            message: "адподолалода",
        }

    },
    methods :{
        add(){
            this.count++
        }
    }
}
Vue.createApp(App).mount('#app')