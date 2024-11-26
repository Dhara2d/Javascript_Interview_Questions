const data = [
  {
    name: "US",
    children: [
      {
        name: "ABC",
        children: [
          {
            name: "Street 1",
            children: [
              {
                name: "House no 20",
                children: [
                  {
                    name: "Bedroom",
                  },
                  {
                    name: "Hall",
                  },
                ],
              },
              {
                name: "House no 40",
              },
            ],
          },
        ],
      },
      {
        name: "QWE",
        children: [
          {
            name: "Street 2",
            children: [
              {
                name: "House no 23",
              },
              {
                name: "House no 34",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "India",
    children: [
      {
        name: "XYZ",
        children: [
          {
            name: "Street 100",
            children: [
              {
                name: "House no 50",
              },
              {
                name: "House no 60",
              },
            ],
          },
        ],
      },
    ],
  },
];

function generateRandomData(level = 3, maxChildren = 5, currentLevel = 0) {
  const countries = [
    "US",
    "India",
    "China",
    "Germany",
    "UK",
    "Japan",
    "Canada",
    "France",
  ];
  const regions = ["ABC", "XYZ", "PQR", "QWE", "LMN"];
  const streets = ["Street 1", "Street 2", "Street 100", "Street 200"];
  const houses = [
    "House no 1",
    "House no 10",
    "House no 20",
    "House no 30",
    "House no 40",
    "House no 50",
    "House no 60",
    "House no 70",
  ];

  const randomName = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateChildren = (level) => {
    if (level >= 3) return []; // Limit depth
    const childrenCount = Math.floor(Math.random() * maxChildren);
    const children = [];
    for (let i = 0; i < childrenCount; i++) {
      children.push({
        name: randomName(streets),
        children: [
          {
            name: randomName(houses),
          },
          {
            name: randomName(houses),
          },
        ],
      });
    }
    return children;
  };

  return Array.from({ length: 100 }, (_, idx) => ({
    name: randomName(countries),
    id: idx + 1,
    children: [
      {
        name: randomName(regions),
        children: generateChildren(currentLevel + 1),
      },
    ],
  }));
}

const printStructure = (data, indent = 0) => {
  data.forEach((element) => {
    console.log(" ".repeat(indent) + element.name);
    if (element.children) {
      printStructure(element.children, indent + 3);
    }
  });
};
const start2 = performance.now();
printStructure(data);
const end2 = performance.now();
console.log(`Execution Time: ${(end2 - start2).toFixed(3)} ms`);

// US
//    ABC
//       Street 1
//          House no 20
//             Bedroom
//             Hall
//          House no 40
//    QWE
//       Street 2
//          House no 23
//          House no 34
// India
//    XYZ
//       Street 100
//          House no 50
//          House no 60
