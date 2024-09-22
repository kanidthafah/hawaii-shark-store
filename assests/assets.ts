interface Products {
  id: number;
  brand: string;
  price: number;
  size: string[];
  image: string[];
  fabric: string;
  detail: string;
  featured: boolean;
  date: number;
}

interface Outfit {
  id: number;
  title: string;
  img: string;
  description: string;
}

export const products: Products[] = [
  {
    id: 1,
    brand: "George",
    price: 350.0,
    size: ["s", "l", "xl"],
    image: [
      "/products/product1-1.jpg",
      "/products/product1-2.jpg",
      "/products/product1-3.jpg",
      "/products/product1-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 11012023,
  },
  {
    id: 2,
    brand: "Puritan",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product2-1.jpg",
      "/products/product2-2.jpg",
      "/products/product2-3.jpg",
      "/products/product2-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 12012023,
  },
  {
    id: 3,
    brand: "Pinepple Connection",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product3-1.jpg",
      "/products/product3-2.jpg",
      "/products/product3-3.jpg",
      "/products/product3-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 11012023,
  },
  {
    id: 4,
    brand: "George",
    price: 350.0,
    size: ["s", "m", "l"],
    image: [
      "/products/product4-1.jpg",
      "/products/product4-2.jpg",
      "/products/product4-3.jpg",
      "/products/product4-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 14012023,
  },
  {
    id: 5,
    brand: "George",
    price: 350.0,
    size: ["l", "xl"],
    image: [
      "/products/product5-1.jpg",
      "/products/product5-2.jpg",
      "/products/product5-3.jpg",
      "/products/product5-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 11032023,
  },
  {
    id: 6,
    brand: "Puritan",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product6-1.jpg",
      "/products/product6-2.jpg",
      "/products/product6-3.jpg",
      "/products/product6-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 11042023,
  },
  {
    id: 7,
    brand: "George",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product7-1.jpg",
      "/products/product7-2.jpg",
      "/products/product7-3.jpg",
      "/products/product7-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 11042023,
  },
  {
    id: 8,
    brand: "Island Shores",
    price: 350.0,
    size: ["s", "m", "l"],
    image: [
      "/products/product8-1.png",
      "/products/product8-2.jpg",
      "/products/product8-3.jpg",
      "/products/product8-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 11042023,
  },
  {
    id: 9,
    brand: "Torch",
    price: 450.0,
    size: ["s", "m", "l"],
    image: [
      "/products/product9-1.jpg",
      "/products/product9-2.jpg",
      "/products/product9-3.jpg",
      "/products/product9-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 22032023,
  },
  {
    id: 10,
    brand: "Old Navy",
    price: 350.0,
    size: ["m", "l"],
    image: [
      "/products/product10-1.png",
      "/products/product10-2.png",
      "/products/product10-3.png",
      "/products/product10-4.png",
    ],
    fabric: "100% Cotton",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 22032023,
  },
  {
    id: 11,
    brand: "Pinepple Connection",
    price: 350.0,
    size: ["m", "xl"],
    image: [
      "/products/product11-1.png",
      "/products/product11-2.png",
      "/products/product11-3.png",
      "/products/product11-4.png",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 22032023,
  },
  {
    id: 12,
    brand: "Princess Cruise",
    price: 350.0,
    size: ["m", "xl"],
    image: [
      "/products/product12-1.png",
      "/products/product12-2.png",
      "/products/product12-3.png",
      "/products/product12-4.png",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 22032023,
  },
  {
    id: 13,
    brand: "Djerba",
    price: 350.0,
    size: ["m", "l"],
    image: [
      "/products/product13-1.jpg",
      "/products/product13-2.jpg",
      "/products/product13-3.jpg",
      "/products/product13-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 25052023,
  },
  {
    id: 14,
    brand: "Pinepple Connection",
    price: 350.0,
    size: ["l", "xl"],
    image: [
      "/products/product14-1.jpg",
      "/products/product14-2.jpg",
      "/products/product14-3.jpg",
      "/products/product14-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 25052023,
  },
  {
    id: 15,
    brand: "Cubavera",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product15-1.png",
      "/products/product15-2.png",
      "/products/product15-3.png",
      "/products/product15-4.png",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 25052023,
  },
  {
    id: 16,
    brand: "Burmuda Bay",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product16-1.png",
      "/products/product16-2.png",
      "/products/product16-3.png",
      "/products/product16-4.png",
    ],
    fabric: "100% Silk",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 25052023,
  },
  {
    id: 17,
    brand: "Puritan",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product17-1.jpg",
      "/products/product17-2.jpg",
      "/products/product17-3.jpg",
      "/products/product17-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 15042023,
  },
  {
    id: 18,
    brand: "Batik Bay",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product18-1.png",
      "/products/product18-2.png",
      "/products/product18-3.png",
      "/products/product18-4.png",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 25052023,
  },
  {
    id: 19,
    brand: "Ocean Current",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product19-1.jpg",
      "/products/product19-2.jpg",
      "/products/product19-3.jpg",
      "/products/product19-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 15042023,
  },
  {
    id: 20,
    brand: "Sun Fusion",
    price: 350.0,
    size: ["l", "xl"],
    image: [
      "/products/product20-1.jpg",
      "/products/product20-2.jpg",
      "/products/product20-3.jpg",
      "/products/product20-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 15042023,
  },
  {
    id: 21,
    brand: "Jo Axx's",
    price: 350.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product21-1.jpg",
      "/products/product21-2.jpg",
      "/products/product21-3.jpg",
      "/products/product21-4.jpg",
    ],
    fabric: "100% Polyester",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 15042023,
  },
  {
    id: 22,
    brand: "Black Horse",
    price: 350.0,
    size: ["l", "xl"],
    image: [
      "/products/product22-1.jpg",
      "/products/product22-2.jpg",
      "/products/product22-3.jpg",
      "/products/product22-4.jpg",
    ],
    fabric: "100% Terivoile",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 18062023,
  },
  {
    id: 23,
    brand: "Odo",
    price: 350.0,
    size: ["xl"],
    image: [
      "/products/product23-1.jpg",
      "/products/product23-2.jpg",
      "/products/product23-3.jpg",
      "/products/product23-4.jpg",
    ],
    fabric: "100% Polyester",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 18062023,
  },
  {
    id: 24,
    brand: "Happy Bay",
    price: 350.0,
    size: ["xl"],
    image: [
      "/products/product24-1.jpg",
      "/products/product24-2.jpg",
      "/products/product24-3.jpg",
      "/products/product24-4.jpg",
    ],
    fabric: "100% Terivoile",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 18062023,
  },
  {
    id: 25,
    brand: "George",
    price: 350.0,
    size: ["m", "xl"],
    image: [
      "/products/product25-1.jpg",
      "/products/product25-2.jpg",
      "/products/product25-3.jpg",
      "/products/product25-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 18062023,
  },
  {
    id: 26,
    brand: "Preswick & Moore",
    price: 380.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product26-1.jpg",
      "/products/product26-2.jpg",
      "/products/product26-3.jpg",
      "/products/product26-4.jpg",
    ],
    fabric: "100% Silk",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
  {
    id: 27,
    brand: "Young Usa",
    price: 380.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product27-1.jpg",
      "/products/product27-2.jpg",
      "/products/product27-3.jpg",
      "/products/product27-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
  {
    id: 28,
    brand: "Marc Anthony",
    price: 400.0,
    size: ["l", "xl"],
    image: [
      "/products/product28-1.jpg",
      "/products/product28-2.jpg",
      "/products/product28-3.jpg",
      "/products/product28-4.jpg",
    ],
    fabric: "100% Lyocell",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
  {
    id: 29,
    brand: "George",
    price: 350.0,
    size: ["m", "xl"],
    image: [
      "/products/product29-1.jpg",
      "/products/product29-2.jpg",
      "/products/product29-3.jpg",
      "/products/product29-4.jpg",
    ],
    fabric: "100% Rayon",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
  {
    id: 30,
    brand: "v.h.o",
    price: 350.0,
    size: ["m", "xl"],
    image: [
      "/products/product30-1.jpg",
      "/products/product30-2.jpg",
      "/products/product30-3.jpg",
      "/products/product30-4.jpg",
    ],
    fabric: "100% Terivoile",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: true,
    date: 24072023,
  },
  {
    id: 31,
    brand: "Denim & Flower",
    price: 420.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product31-1.jpg",
      "/products/product31-2.jpg",
      "/products/product31-3.jpg",
      "/products/product31-4.jpg",
    ],
    fabric: "100% Cotton",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
  {
    id: 32,
    brand: "Tommy Bahama",
    price: 380.0,
    size: ["m", "l", "xl"],
    image: [
      "/products/product32-1.jpg",
      "/products/product32-2.jpg",
      "/products/product32-3.jpg",
      "/products/product32-4.jpg",
    ],
    fabric: "100% Silk",
    detail:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi temporibus, possimus dignissimos beatae sit corporis",
    featured: false,
    date: 24072023,
  },
];

export const outfit: Outfit[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/2.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/3.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/4.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/5.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/6.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/7.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/8.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/9.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/10.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 11,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/11.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 12,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/12.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 13,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/13.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 14,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/14.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
  {
    id: 15,
    title: "Lorem ipsum dolor sit.",
    img: "/outfit/15.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, recusandae.",
  },
];
