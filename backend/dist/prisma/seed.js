"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=seed.js.map