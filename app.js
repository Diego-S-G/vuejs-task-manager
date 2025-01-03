var app = new Vue({
    el: '#app',
    components: {
        'task': {
            props: ['task'],
            template: `<div class="ui segment task" v-bind:class="task.completed ? 'done' : 'todo'">
                            <div class="ui grid">
                                <div class="left floated twelve wide column">
                                    <div class="ui checkbox">
                                        <input type="checkbox" name="task" v-on:click="app.toggleDone($event, task.id)" :checked="task.completed">
                                        <label>{{ task.name }} <span class="description">{{ task.description }}</span></label>
                                    </div>
                                </div>
                                <div class="right floated three wide column">
                                    <i class="icon pencil blue" alt="Edit" v-on:click="app.editTask($event, task.id)"></i>
                                    <i class="icon trash red" alt="Delete" v-on:click="app.deleteTask($event, task.id)"></i>
                                </div>
                            </div>
                        </div>`
        } // app.toggleDone(...) pq sem não funciona, por causa do escopo
    },
    data: {
        tasks: [
            { id: 1, name: 'Todo 1', description: 'Go to the store', completed: true },
            { id: 2, name: 'Todo 2', description: 'Finish the tutorial', completed: true },
            { id: 3, name: 'Todo 3', description: 'Clean the house', completed: true },
            { id: 4, name: 'Todo 4', description: 'Go to the gym', completed: false },
            { id: 5, name: 'Todo 5', description: 'Get some sleep', completed: false }
        ],
        task: {},
        message: 'Bankai Katen Kyokotsu Karamatsu Shinjuu'
    },
    computed: {
        completedTasks: function() {
            return this.tasks.filter(item => item.completed === true);
        },
        todoTasks: function() {
            return this.tasks.filter(item => item.completed === false);
        }
    },
    methods: {
        toggleDone: function(event, id) {
            event.stopImmediatePropagation();

            let task = this.tasks.find(item => item.id == id);
            
            if (task) {
                task.completed = !task.completed;
                console.log(`Task ${task.name} is now ${task.completed ? 'done' : 'todo'}`);
            }
        },
        editTask: function(event, id) {
            event.stopImmediatePropagation();

            let task = this.tasks.find(item => item.id == id);

            if (task) {
                this.task = { name: task.name, description: task.description, completed: task.completed };
            }
        },
        deleteTask: function(event, id) {
            event.stopImmediatePropagation(); // clicking it does not trigger any other event handlers at the same time

            let taskIndex = this.tasks.findIndex(item => item.id == id);

            if (taskIndex > -1) {
                this.$delete(this.tasks, taskIndex); // vue method to delete an item from a collection
                console.log(`Task with id ${id} was deleted`);
            }
        }
    }
})