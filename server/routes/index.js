const todoscontrollers = require('../controllers').todos;
const todosItemControllers = require('../controllers').todoItems;

module.exports = (app)=>{

    app.get('/api',(req,res) => res.status(200).send({
        message: 'Welcome to the todos API',
    }));

    app.post('/api/todos', todoscontrollers.create);

    app.get('/api/todos', todoscontrollers.list);

    app.post('/api/todos/:todoId/items', todosItemControllers.create);

}