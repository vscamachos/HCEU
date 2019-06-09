import User from "./models/user";
import Record from "./models/record";
import Initial_evaluation from "./models/initial_evaluation";
import bcrypt from "bcrypt";

export const resolvers = {
   Query: {    
     async Users() {
         return await User.find();
     },
     async Records() {
         return await Record.find();
     },
     async Initial_evaluations() {
      return await Initial_evaluation.find();
     }
   },
   Mutation: {
     async createUser(_, { input }){
      try{
          const hashPassword = await bcrypt.hash(input.password, 10)
          const { userName, userDocument, userBirthday, userRol, userTelphone, userAdress, userCountry, userEmail} = input;
          const newUser = {
            userName, userDocument, userBirthday, userRol, userTelphone, userAdress, userCountry, userEmail, password:hashPassword
          }          
          const user = new User(newUser);
          await user.save();        
          return true;
      }catch(error){
          console.log(error);
           return false;
      }
    },      
     async  deleteUser(_, {_id}){
       return await User.findByIdAndDelete(_id);
     },
     async updateUser(_, { _id, input }){
       return await User.findByIdAndUpdate(_id, input, { new: true });
     },
     async createRecord(_, { input }){
      const newRecord = new Record(input);
      await newRecord.save();
      return newRecord;
    },     
    async  deleteRecord(_, {_id}){
      return await Record.findByIdAndDelete(_id);
    },
    async updateRecord(_, { _id, input }){
      return await Record.findByIdAndUpdate(_id, input, { new: true });
    },
    async createInitial_evaluation(_, { input }){
      const newInitial_evaluation = new Initial_evaluation(input);
      await newInitial_evaluation.save();
      return newInitial_evaluation;
    },     
    async  deleteInitial_evaluation(_, {_id}){
      return await Initial_evaluation.findByIdAndDelete(_id);
    },
    async updateInitial_evaluation(_, { _id, input }){
      return await Initial_evaluation.findByIdAndUpdate(_id, input, { new: true });
    }            
   }
};