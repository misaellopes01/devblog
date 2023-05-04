import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const super_admin = await prisma.user.create({
    data: {
      email: 'mecl.ely@gmail.com',
    },
    select: {
      email: true,
    },
  });

  console.log(super_admin);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
