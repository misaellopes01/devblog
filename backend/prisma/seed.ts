import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('qwerty1234', 8);

  const super_admin = await prisma.user.create({
    data: {
      email: 'mecl.ely@gmail.com',
      name: 'Misael Lopes',
      role: 'ADMIN',
      password: hashedPassword,
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
