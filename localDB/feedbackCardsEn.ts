export const feedbackCardsEn = [
  {
    id: 1,
    image: '/avatars/avatar_4.jpg',
    name: 'Любка Островская',
    date: '5.11.2024',

    description:
      'Клиника очень хорошая.травматолог-ортопед Бубна Владимир Михайлович доктор высочайшего класса,профессионал в своём деле и Человек с большой буквы. Оперировал мужа три месяца назад (эндопртезирование тазобедренных суставов обоих конечностей).Былидо во многих клиниках, консультировались со многими докторами,но побывав на приёме у Владимир Михайловича-доверились сразу без каких либо колебаний. Спасибо огромное вам и всей вашей команде.',
    stars: 5,
  },
  {
    id: 2,
    image: '/noavatar.gif',
    name: 'Лена',
    date: '17.12.2024',
    description: 'Врач 10 из 10',
    stars: 5,
  },
  {
    id: 3,
    image: '/avatars/avatar_1.jpg',
    name: 'Ангелина',
    date: '28.10.2023',
    description:
      'Лучшего врача не стоит и искать. Внимательный к свои пациентам.',
    stars: 5,
  },
  {
    id: 4,
    image: '/avatars/avatar_2.jpg',
    name: 'Оксана',
    date: '16.06.2020',
    description:
      'Я занимаюсь любительским фигурным катанием. На тренировке получила травму - винтообразный перелом 2х костей голени.Мой спаситель - это Доктор Бубна Владимир Михайлович!!! Он, в бригаде лучших специалистов, провели сложнейшую 5ти часовую операцию. Я несказанно благодарна своему Врачу и Другу - Владимиру Михайловичу!!! Спасибо - Низкий Вам поклон !! Я снова тренируюсь, я делаю успехи... В спорте сложно обойтись без травм. Но я уверенна в помощи и поддержке любимого Врача.!!! СПАСИБО!!!',
    stars: 5,
  },
  {
    id: 5,
    image: '/noavatar.gif',
    name: 'Лариса',
    date: '29.02.2020',
    description:
      'Сын с раннего возраста занимается футболом, поэтому частые травмы, ушибы и так дальше нам не в новость. Судьба свела нас с отличным специалистом - Владимиром Михайловичем Бубной, который неоднократно спасал мечту нашего сына.',
    stars: 5,
  },
  {
    id: 6,
    image: '/noavatar.gif',
    name: 'Любовь',
    date: '22.01.2022',
    description:
      'В этом году зима хоть и была практически без снега, но свои сюрпризы преподнесла. Фактически с появлением первого снега очень сильно подвернула ногу, но сильная загруженность две нидели не давала возможности пойти к врачу. Когда боль стала просто невыноси',
    stars: 5,
  },
  {
    id: 7,
    image: '/avatars/avatar_3.jpg',
    name: '',
    date: '25.02.2022',
    description: 'Бубна Владимир Михайлович спас мою стопу. Врач от Бога.',
    stars: 5,
  },
  {
    id: 8,
    image: '/noavatar.gif',
    name: 'Радуга',
    date: '24.09.2010',
    description:
      'В 31-й больнице, на 4-м этаже в отделении хирургии кисти работает очень квалифицированный доктор Бубна Владимир Михайлович, у этого молодого человека (лет 30 на вид) определённый подход к каждому пациенту, человек отдается работе на все 100%.У него оперировалась я, а затем ,позже, и внука прооперировали 8-ми летнего, результатом ОЧЕНЬ довольны. Доктор от Бога!',
    stars: 5,
  },
  {
    id: 9,
    image: '/beth.jpg',
    name: 'Ветн',
    date: '03.08.2011',
    description:
      'В результате, прооперировали меня Артюшенко Олег Фёдорович и Бубна Владимир Михайлович в 31 больнице и отношение было прекрасное,и хирурги хорошие.Всем рекомендую.',
    stars: 5,
  },
];

export type TFeebackCard = {
  id: number;
  image: string;
  name: string;
  date: string;
  description: string;
  stars: number;
};
