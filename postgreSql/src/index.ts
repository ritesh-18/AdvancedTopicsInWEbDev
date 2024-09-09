//connecting with postgres sql db

import { Client } from "pg";
const client= new Client({
    connectionString:"postgresql://100xDB_owner:6Wg8hYOynjPG@ep-shy-leaf-a5nvhapx.us-east-2.aws.neon.tech/100xDB?sslmode=require"
})
client.connect().then((res)=>{
    console.log("Db connected sucessfully")
}).catch((Err)=>{
    console.error(Err)
})
async function createUsertable(){
    // await client.connect();
    //creating a table query
    const query= await client.query(
        `Create Table Users(
        Name Varchar(255),
        Age Int
        );`
    )
    
}
// createUsertable();
async function InsertAndFetch(){
    const dataEntry=await client.query(
        `Insert Into Users (Name , Age) Values ('ritesh' ,
        23 );`
        )
        // console.log(dataEntry)
        const data=await client.query(`Select * From Users;`)
        console.table(data.rows)
}
InsertAndFetch()