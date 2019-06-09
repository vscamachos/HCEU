import express from "express";
import graphqlHTTP from "express-graphql";
import cors from 'cors';
import schema from "./schema";
import { connect } from "./database";

const app = express();

app.use(cors({
    origin:["http://localhost:3000"]
}));
connect();

app.get('/', (req,res)=>{
    res.json({
        message: 'Hello'
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,   
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Server on port ${PORT}`));