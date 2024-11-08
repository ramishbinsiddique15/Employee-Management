const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description: "Create a modern UI design for the homepage.",
        date: "2024-11-01",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Bug #231",
        description: "Resolve the issue with the login form.",
        date: "2024-10-30",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Database",
        description: "Improve database performance and response times.",
        date: "2024-11-05",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sara",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Implement Dark Mode",
        description: "Add dark mode support to the app.",
        date: "2024-10-25",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research Market Trends",
        description: "Analyze current trends in user experience.",
        date: "2024-11-07",
        category: "Research",
      },
    ],
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "QA Testing",
        description: "Conduct QA tests for the new release.",
        date: "2024-11-02",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Document API",
        description: "Update API documentation for recent changes.",
        date: "2024-10-28",
        category: "Documentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup Server Monitoring",
        description: "Implement server performance monitoring tools.",
        date: "2024-11-06",
        category: "IT",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Marketing Plan",
        description: "Draft a marketing strategy for the new product.",
        date: "2024-10-27",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Develop Social Media Content",
        description: "Create content for the upcoming social media campaign.",
        date: "2024-11-04",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Audit Site Accessibility",
        description: "Ensure compliance with accessibility standards.",
        date: "2024-11-08",
        category: "Audit",
      },
    ],
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update User Guide",
        description: "Revise the user guide with the latest features.",
        date: "2024-11-03",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Optimization",
        description: "Optimize website for better search engine ranking.",
        date: "2024-10-26",
        category: "SEO",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Prototype New Feature",
        description: "Build a prototype for the new product feature.",
        date: "2024-10-29",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Zara",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees: employees, admin: admin };
};
