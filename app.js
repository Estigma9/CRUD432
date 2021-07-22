//Lógica VUE Agenda

const app = new Vue({
    el: '#app',
    data: {
        title: 'Tareas del Proyecto con VUE F-432',
        sesion: 5,
        profesores:{
            'nombre': 'Esteban',
            'ciclo': '3'
        },
        tareas: [],
        nuevaTarea: '',
        checked: false,

    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre : this.nuevaTarea,
                estado: this.checked,
            });
            //console.log(this.nuevaTarea);
            this.nuevaTarea = "";
            this.checked = false;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index){
            if(this.tareas[index].estado){
                this.tareas[index].estado = false;
            }else{
                this.tareas[index].estado = true;
            };
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index){
            if(!this.tareas[index].estado){
                this.tareas.splice(index, 1);
                localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
            };
        }

    },
    computed:{

    },
    beforeCreated(){

    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        };
    }
})



