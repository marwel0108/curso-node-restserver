 const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usersRoute = '/api/users';

        // Middlewares
        this.middlewares();

        // Rutas de la app
        this.routes();
        
    }

    middlewares() {

        //cors
        this.app.use( cors() );

        // Parsea y lectura del body
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use( this.usersRoute, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port }`);
        });
    }
}

module.exports = Server;