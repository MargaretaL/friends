var graphqlHTTP = require('express-graphql');
import express from 'express'
import webpack from 'webpack';
import path from 'path';
import WebPackDevServer from 'webpack-dev-server';
import {schema} from './data/schema';

const APP_PORT = 3000;
const GRAPHQL_PORT = 8000;


// Graphql Server
const GraphQLServer = express();


//GraphQLServer.get('/', (req, res) => res.send('Graphql is cool!!!')) 

// OLD WITHOUT RELAY
// class Friend { // class which we'll reuse to create oblects in ur resolvers.
//     constructor(id, {firstName, lastName, gender, language, email}) { // then this class will take values and create
//         this.id= id;
//         this.firstName= firstName;
//         this.lastName= lastName;
//         this.gender= gender;
//         this.language= language;
//         this.email= email;
//     }
// }

// const friendDatabase = { // in memory database
// //  1: {firstName: "Andreas"}
// }

// // The global (root) provides a resolver function for each API endpoint
// const global = {
//     getFriend:({id}) => {
//         return new Friend(id, friendDatabase[id])
//     },
//     createFriend:(parameter) => {
//         let id = require('crypto').randomBytes(10).toString('hex');
//         friendDatabase[id]= parameter.input;
//         return new Friend(id, parameter.input);
//     },
//     updateFriend: ({id, input}) => {
//         friendDatabase[id]= input;
//         return new Friend(id, input);
//     }
// };


GraphQLServer.use('/', graphqlHTTP({
    schema: schema,
    pretty:true,
    graphiql: true,
}));

GraphQLServer.listen(GRAPHQL_PORT, () => console.log(`Running a GraphQL API server at localhost:${GRAPHQL_PORT}`));

// Relay

const compiler = webpack({
    entry: ['whatwg-fetch', path.resolve(__dirname, 'src', 'App.js')], // inside here webpack will try to combine all files into one bundle. App.js is the entry point.
    module: {
        rules: [ // these loaders are used to convert them to an output
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            }
        ]
    },
    output: {filename: 'App.js', path: '/'} // output of our files, when the server loads its gonna look for that bundle here.
})

const app = new WebPackDevServer(compiler, {
    contentBase: '/public/',
    proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
    publicPath: '/src/',
    stats: {colors: true}
})

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.listen(APP_PORT, () => console.log('listening on port 3000'))