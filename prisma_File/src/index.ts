import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function InsertData(email:string , password:string , firstname:string , lastname:string,){
 try {
     const response =   await prisma.user.create({
            data: {
                email:email,
                password:password,
                firstName:firstname,
                lastName:lastname,
            }
        })
        console.log(response)
 } catch (error) {
     console.error(error)
 }

}
InsertData( "abcdef@gmail.com"  , "12345678" , "Ritesh4" , "Chauhan4")

async function getData(){
    try {
        const response= await prisma.user.findMany ()
        console.table(response)
    } catch (error) {
        console.log(error)
    }
}
getData()