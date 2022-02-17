import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteData() {
  await prisma.requests.deleteMany();
  console.log("Data deleted");
}

async function main() {
  console.log("Seeding database...");
  await deleteData();
  await prisma.requests.createMany({
    data: [
      {
        title: "Title1",
        requestor: "Chris",
        body: "request body here",
      },
      {
        title: "Title2",
        requestor: "Josh",
        body: "request body here",
      },
    ],
  });
  console.log("Finished seeding database");
}

main();
