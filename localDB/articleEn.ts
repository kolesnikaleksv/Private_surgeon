export const articleEn = [
  {
    id: 1,
    date: '6 March 2025',
    author: 'Dr.Bubna',
    title: 'Osteoarthritis',
    avatarImg: '/avatar.png',
    article:
      'Osteoarthritis is the single most common cause of disability in older adults and the 2010 Global Burden of Disease Study estimated that 10% to 15% of all adults aged over 60 had some degree of symptomatic Osteoarthritis [1;2]',
    articleImg: '/osteoarthritis.webp',
    category: 'Orthopaedics',
  },
  {
    id: 2,
    date: '12 Januarry 2024',
    author: 'Dr.Bubna',
    title: 'Bunions',
    avatarImg: '/avatar.png',
    article:
      'At The Private Clinic, we know how debilitating bunions can be, impacting your mobility and quality of life. That’s why we offer a revolutionary minimally invasive bunion removal surgery—performed without metal fixtures, screws, or downtime.',
    articleImg: '/bunion_operation.jpg',
    category: 'Orthopaedics',
  },
  {
    id: 3,
    date: '23 October 2023',
    author: 'Intern Olex',
    title: 'Earlobe Repair Surgery',
    avatarImg: '/frOlex.jpg',
    article:
      'Earlobe repair is a procedure to correct, reshape or rejuvenate the lowest portion of the ear. Your physician makes an incision just above the tear or stretched-out area of the lobe, trims off excess tissue and reshapes the area. Very fine stitches are used to close the incision in layers and complete the procedure.',
    articleImg: '/earhole_before_after.png',
    category: 'Plastic',
  },
  {
    id: 4,
    date: '4 September 2021',
    author: 'Intern Olex',
    title: 'Breast Augmentation',
    avatarImg: '/frOlex.jpg',
    article:
      "Breast augmentation is surgery to increase breast size. It's also called augmentation mammoplasty. It involves placing breast implants under breast tissue or chest muscles. For some people, breast augmentation is a way to feel better about themselves. For others, it's part of rebuilding a breast for various conditions. If you're thinking of having breast augmentation, talk with a plastic surgeon. Make sure you know what the surgery involves, including possible risks and complications, as well as how to take care of yourself after surgery.",
    articleImg: '/breast_augmentation.jpeg',
    category: 'Plastic',
  },
  {
    id: 5,
    date: '14 NOvember 2020',
    author: 'Dr.Bubna',
    title: 'Breast Augmentation',
    avatarImg: '/avatar.png',
    article:
      'Arthroscopy is a surgical procedure used to diagnose and treat problems inside a joint. Arthroscopy uses a small, fiber optic camera called an arthroscope that enables the surgeon to see inside the joint — and identify any problems — through a small incision, or portal. The arthroscope, which is approximately the size of a pencil (or even thinner in some cases), contains:  A small lens A miniature camera A lighting system Typically, the surgeon makes one or more separate small incisions to insert specialized tools, including probes, graspers, and shavers, into the wrist to treat any conditions they identify with the arthroscope.',
    articleImg: '/wrist_arthroscopy.png',
    category: 'Wrist surgery',
  },
];

export type CardData = {
  id: number;
  date: string;
  author: string;
  title: string;
  avatarImg: string;
  article: string;
  articleImg: string;
  category: string;
};
