// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.healthcare.create({
      data: {
        email: 'hasan.slater95@gmail.com',
        password: 'hasbug14?',
        first: 'hasan',
        last: 'slater',
        accounttype: 'new'
      },
    })
  }
  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  res.status(200).json({ name: 'lets query the database!' })
}
