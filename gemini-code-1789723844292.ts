import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Obsidian Trench Coat',
        description: 'Tailored luxury wool trench coat with gold hardware.',
        price: 890.0,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80',
      },
      {
        name: 'Champagne Silk Dress',
        description: 'Fluid floor-length evening silk dress in Champagne.',
        price: 650.0,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })