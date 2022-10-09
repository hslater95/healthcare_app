// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  //get data submitted in the body of the request
  let first_name = req.body.first
  let last_name = req.body.last
  let email = req.body.email;
  let password = req.body.password;
  let account_type = req.body.account;
  const prisma = new PrismaClient();
  console.log(email);
  let num;
  async function validate_email() {
    num = await prisma.healthcare.count(
      {
        where: { email: email },
      
      });
      return num;
  }
  async function main() {
    if (num !== 0) {
      await res.status(200).send('You are already registered! Please Sign in.');
      return;
    }
    await prisma.healthcare.create({
      data: {
        email: email,
        password: password,
        first: first_name,
        last: last_name,
        accounttype: account_type
      },
    })
    await res.status(200).send('You have been successfully registered!\nYou will be recieving an email from us shortly.');
  }
  await validate_email();
  await main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
  //optional logging to see the response when next.js is running


}
