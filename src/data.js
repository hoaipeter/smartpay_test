// Arrow characters to use: ▼ ▶ •
const BACKEND_DATA = [
  {
    id: "1",
    name: "Out of Stock",
  },
  {
    id: "2",
    name: "Bakery",
    children: [
      {
        id: "6",
        name: "Toast bread white",
      },
      {
        id: "7",
        name: "Mixed grain toast bread",
      },
    ],
  },
  {
    id: "3",
    name: "Fruit & Veg",
    children: [
      {
        id: "8",
        name: "Fruit",
        children: [
          {
            id: "12",
            name: "Apples & Pears",
            children: [
              {
                id: "19",
                name: "Apple",
              },
              {
                id: "20",
                name: "Green Pear",
              },
              {
                id: "21",
                name: "Brown Pear",
              },
            ],
          },
          {
            id: "13",
            name: "Bananas",
            children: [
              {
                id: "22",
                name: "Banana",
              },
              {
                id: "23",
                name: "Organic Bananas",
              },
              {
                id: "24",
                name: "Green Bananas",
              },
            ],
          },
          {
            id: "14",
            name: "Berries",
            children: [
              {
                id: "25",
                name: "Blueberry",
              },
              {
                id: "26",
                name: "Strawberry",
              },
            ],
          },
        ],
      },
      {
        id: "9",
        name: "Vegetable",
        children: [
          {
            id: "15",
            name: "Carrot",
          },
          {
            id: "16",
            name: "Broccoli",
          },
        ],
      },
      {
        id: "10",
        name: "Salad Ingredients",
        children: [
          {
            id: "17",
            name: "Spinach baby leaf",
          },
        ],
      },
      {
        id: "11",
        name: "Fresh Herbs & Spices",
        children: [
          {
            id: "18",
            name: "Garlic",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Easter",
  },
  {
    id: "5",
    name: "Valentines day",
  },
];

export default BACKEND_DATA;
