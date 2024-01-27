const { app } = require('@azure/functions');



const SnakeFunction = async (request, context) => {

    const name = request.query.get('name') || 'world';

    return { body: `Hello, ${name}!` };
}


app.http('SnakeFunction', {
    handler: SnakeFunction
});
