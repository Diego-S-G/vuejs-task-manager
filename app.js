var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 1, name: 'Todo 1', description: 'Go to the store', completed: true },
            { id: 2, name: 'Todo 2', description: 'Finish the tutorial', completed: true },
            { id: 3, name: 'Todo 3', description: 'Clean the house', completed: true },
            { id: 4, name: 'Todo 4', description: 'Go to the gym', completed: false },
            { id: 5, name: 'Todo 5', description: 'Get some sleep', completed: false }
        ],
        message: 'Bankai Katen Kyokotsu Karamatsu Shinjuu'
    },
    computed: {
        completedTasks: function() {
            return this.tasks.filter(item => item.completed === true);
        },
        todoTasks: function() {
            return this.tasks.filter(item => item.completed === false);
        }
    }
})