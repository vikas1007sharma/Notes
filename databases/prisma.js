/*

` ORM (Object-Relational Mapping) is a technique that allows developers to interact with a relational database using object-oriented programming languages. It abstracts the database operations into objects, so instead of writing SQL queries, developers can work with objects and methods to manage database records.

% Some popular ORMs include:
'Prisma: Works with Node.js backends, often used in conjunction with React for full-stack applications.
'Sequelize: A promise-based ORM for Node.js, commonly used in full-stack applications with React.
'TypeORM: Another ORM for Node.js that works well with React when using TypeScript.

` Prisma ORM
Prisma is a modern ORM for Node.js and TypeScript that simplifies database interactions. It provides an auto-generated query builder and allows developers to work with databases using an intuitive API. Prisma supports multiple databases, including MySQL, PostgreSQL, and SQLite, and it also generates types and queries based on the database schema.

Key features of Prisma:
Prisma Client: An auto-generated query builder to perform database operations.
Prisma Migrate: A tool for managing database migrations.
Prisma Studio: A graphical interface to view and interact with database records.
Prisma helps streamline database operations by providing a high-level abstraction with type safety and eliminating the need for repetitive SQL query writing.


$ Ensure you have Prisma installed and set up:
npm install @prisma/client
npx prisma init

$ Define your Prisma schema in prisma/schema.prisma:
datasource db {
  provider = "postgresql" // Change if needed
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id       Int      @id @default(autoincrement())
  name     String
  email    String   @unique
  age      Int?
  role     String   @default("USER")
  friends  User[]   @relation("UserFriends", references: [id])
}


$ Run the following to generate Prisma Client:
npx prisma migrate dev --name init
  
*/


// Import Prisma Client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a User
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      age: 25,
      role: 'ADMIN',
    },
  });
  console.log('User Created:', newUser);

  // Find all Users
  const allUsers = await prisma.user.findMany();
  console.log('All Users:', allUsers);

  // Find a User by ID
  const userById = await prisma.user.findUnique({
    where: { id: newUser.id },
  });
  console.log('User by ID:', userById);

  // Update a User's role by ID
  const updatedUser = await prisma.user.update({
    where: { id: newUser.id },
    data: { role: 'SUPERADMIN' },
  });
  console.log('Updated User:', updatedUser);

  // Delete a User by ID
  const deletedUser = await prisma.user.delete({
    where: { id: newUser.id },
  });
  console.log('Deleted User:', deletedUser);

  // Advanced Queries
  // =======================
  
  // Filtering, Sorting, Pagination
  const filteredUsers = await prisma.user.findMany({
    where: { age: { gte: 18 } },
    take: 10,
    skip: 0,
    orderBy: { age: 'desc' },
  });
  console.log('Filtered Users:', filteredUsers);

  // Find Users with specific roles
  const adminUsers = await prisma.user.findMany({
    where: { role: 'ADMIN' },
  });
  console.log('Admin Users:', adminUsers);

  // Count the number of Users
  const userCount = await prisma.user.count();
  console.log('Total Users:', userCount);

  // Add Friends (Relations) - Connecting Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      age: 30,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Charlie',
      email: 'charlie@example.com',
      age: 32,
      friends: { connect: { id: user1.id } },
    },
  });
  console.log('User with Friend:', user2);

  // Aggregation (Group by roles)
  const roleAggregation = await prisma.user.groupBy({
    by: ['role'],
    _count: { id: true },
  });
  console.log('User Count by Role:', roleAggregation);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
