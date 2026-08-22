let x = 9834;
console.log(Math.abs(x));

//! প্রবলেম: E-Commerce Order Aggregator & Categorizer

function processOrders(orders) {
  let prossedItem = orders.filter((item) => item.status === "completed");
  const grouped = prossedItem.reduce((acc, order) => {
    const cat = order.category;

    if (!acc[cat]) {
      acc[cat] = {
        totalRevenue: 0,
        totalItems: [],
        lastPurchasedItem: "",
      };
    }

    acc[cat].totalRevenue += order.price;
    acc[cat].totalItems.push(...order.items);
    acc[cat].lastPurchasedItem = order.items.at(-1);
    return acc;
  }, {});

  return grouped;
}
const orders = [
  {
    id: 101,
    category: "Electronics",
    price: 1200,
    items: ["Laptop", "Mouse"],
    status: "completed",
  },
  {
    id: 102,
    category: "Clothing",
    price: 80,
    items: ["Shirt"],
    status: "completed",
  },
  {
    id: 103,
    category: "Electronics",
    price: 300,
    items: ["Headphones"],
    status: "pending",
  },
  {
    id: 104,
    category: "Clothing",
    price: 150,
    items: ["Pants", "Belt"],
    status: "completed",
  },
  {
    id: 105,
    category: "Electronics",
    price: 500,
    items: ["Monitor"],
    status: "completed",
  },
  {
    id: 106,
    category: "Home",
    price: 200,
    items: ["Lamp"],
    status: "cancelled",
  },
  {
    id: 107,
    category: "Home",
    price: 450,
    items: ["Chair", "Table"],
    status: "completed",
  },
];

console.table(processOrders(orders));

//! Student Result Analytics System


function analyzeResults(students) {
  let passedStudents = students.filter((st) => st.status === "passed");
  let grouped = passedStudents.reduce((acc, student) => {
    let cl = student.class;

    if (!acc[cl]) {
      acc[cl] = {
        totalMarks: 0,
        studentCount: 0,
        topScorer: "",
        maxMark: 0,
      };
    }

    acc[cl].totalMarks += student.mark;
    acc[cl].studentCount += 1;

    if (student.mark > acc[cl].mark) {
      acc[cl].maxMark = student.mark;
      acc[cl].topScorer = student.name;
    }
    return acc;
  }, {});

  for (let cl in grouped) {
    delete grouped[cl].maxMark;
  }

  const sortedEntirs = Object.entries(grouped).sort((a, b) => {
    b[1].totalMarks - a[1].totalMarks;
  });

  return Object.fromEntries(sortedEntirs);
}
const students2 = [
  { name: "Rahim", class: "Ten", mark: 85, status: "passed" },
  { name: "Karim", class: "Nine", mark: 40, status: "failed" },
  { name: "Sumon", class: "Ten", mark: 92, status: "passed" },
  { name: "Tamim", class: "Nine", mark: 78, status: "passed" },
  { name: "Sabbir", class: "Ten", mark: 30, status: "failed" },
  { name: "Nabil", class: "Nine", mark: 88, status: "passed" },
];
console.table(analyzeResults(students2));
