const vm = Vue.createApp({
    data(){
        return {
            message: 'Hello World !',
            /*todos: [
                {id:0, content:'Tache #1'},
                {id:1, content:'Tache #2'}
            ]*/
            todos:['Sauver le monde','Apprendre Vue JS','Boire un café']
        }
    },
    methods:{
        inverser(){
            this.todos.reverse();
        },
        ajouterNote(message){
            this.todos.push(message);
        }
    }
})
vm.component('note',{
    props: ['content'],
    template: `<p>{{content}}</p>`

});
vm.component('ajout',{
    props:[],
    emits: ['nouvellenote'],
    data(){
        return{
            interne: 'Nouveau message'
        }
    },
    methods:{
        enregistrerNote(){
        this.$emit('nouvellenote',this.interne);
        this.interne='';
        }
    },
    template: `<input type="text" v-model="interne" />
               <a href="#" @click="enregistrerNote" v-if="interne != '' ">Ajouter</a>
               {{interne}}`
})
vm.mount('#app');