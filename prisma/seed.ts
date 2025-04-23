import { PrismaClient, Prisma } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

const priceData: Prisma.PriceCreateInput[] = [
  {
    title: 'Загальна хірургія',
    items: {
      create: [
        {
          name: 'Консультація хірурга',
          price: 650,
        },
        {
          name: 'Повторна консультація хірурга (в межах одного випадку)',
          price: 550,
        },
        {
          name: 'Зняття дренажу',
          price: 490,
        },
        {
          name: 'Видалення кліща',
          price: 610,
        },
      ],
    },
  },
  {
    title: 'Анестезіологія',
    items: {
      create: [
        {
          name: 'Консультація анестезіолога',
          price: 980,
        },
        {
          name: 'Анестезія до 30 хвилин 1 категорія',
          price: 1100,
        },
        {
          name: 'Анестезія до 60 хвилин 2 категорія',
          price: 3630,
        },
        {
          name: 'Анестезія до 120 хвилин 3 категорія',
          price: 4620,
        },
      ],
    },
  },
  {
    title: 'Ортопедія та травматологія',
    items: {
      create: [
        {
          name: 'Консультація ортопеда-травматолога',
          price: 650,
        },
        {
          name: 'Повторна консультація ортопеда-травматолога (в межах одного випадку)',
          price: 550,
        },
        {
          name: 'Онлайн консультація ортопеда-травматолога',
          price: 550,
        },
        {
          name: "Ін'екція внутрішньосуглобова",
          price: 850,
        },
        {
          name: 'Вправлення звиху, репозиція',
          price: 1090,
        },
        {
          name: "Зняття пов'язки (гіпс/пластик)",
          price: 490,
        },
        {
          name: 'Накладення бинту скотчкаст/софт-каст (Scotchcast/Soft Cast) 1 категорії',
          price: 850,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of priceData) {
    await prisma.price.create({ data: u });
  }
}
main();
