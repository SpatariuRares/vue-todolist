Vue.config.devtools = true;

const app =new Vue({
    el: '#root',
    data: {
        message: '',
        todolist:[
            {
                Title:"fare i compiti",
                Do:false,
            },
            {
                Title:"cucinare",
                Do:true,
            },
            {
                Title:"comprare la pasta",
                Do:false,
            },
        ],
    },
    methods: {
        pushList(){
            if(this.message!=""){
                this.todolist.push({Title:this.message,Do:false,});
                this.message="";
            }
        },
        removeFromList(index){
            this.todolist.splice(index, 1);
        },
        fatto(index){
            this.todolist[index].Do=!this.todolist[index].Do;
        }
    }
})