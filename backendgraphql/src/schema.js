import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query{        
        Users: [User]
        Records: [Record]
        Initial_evaluations: [Initial_evaluation]
    }
    type User {
        _id: ID
        userName: String!
        userDocument: Int!
        userDescription: String!
        userBirthday: String!
        userRol: String!
        userTelphone: String!
        userAdress: String!
        userCountry: String!
        userEmail: String!
    }
    type Record {
        _id: ID
        id_Paciente: String!
        id_Medico: String!        
    }
    type Initial_evaluation {
        _id: ID
        id_Paciente: String!
        alergia_Medicamento: String!
    }
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        createRecord(input: RecordInput): Record
        deleteRecord(_id: ID): Record
        updateRecord(_id: ID, input: RecordInput): Record
        createInitial_evaluation(input: Initial_evaluationInput): Initial_evaluation
        deleteInitial_evaluation(_id: ID): Initial_evaluation
        updateInitial_evaluation(_id: ID, input: Initial_evaluationInput): Initial_evaluation
    }
    input UserInput {
        userName: String!
        userDocument: Int!
        userDescription: String!
        userBirthday: String!
        userRol: String!
        userTelphone: String!
        userAdress: String!
        userCountry: String!
        userEmail: String!
    }
    input RecordInput {
        id_Paciente: String!
        id_Medico: String!        
    }
    input Initial_evaluationInput {
        id_Paciente: String!
        alergia_Medicamento: String!
    } 
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})