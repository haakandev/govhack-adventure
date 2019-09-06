import logo from "./logo.svg";

export default [
  {
    id: 1,
    name: "Adventure 1",
    image: logo,
    story: {
      start: {
        id: [1, 1],
        text: "Bla bla bla, bla bla. Decide!",
        image: logo,
        left: { text: "This", next: "A" },
        right: { text: "That", next: "B" }
      },
      A: {
        id: [1, 2],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Option A", next: "endA" },
        right: { text: "Option B", next: "endA" }
      },
      B: {
        id: [1, 3],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Pick me!", next: "endB" },
        right: { text: "Or pick me!", next: "endB" }
      },
      endA: {
        id: [1, 4],
        text:
          "Because you chose the left option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      },
      endB: {
        id: [1, 5],
        text:
          "Because you chose the right option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      }
    }
  },
  {
    id: 2,
    name: "Adventure 2",
    image: logo,
    story: {
      start: {
        id: [2, 1],
        text: "Bla bla bla, bla bla. Decide!",
        image: logo,
        left: { text: "This", next: "A" },
        right: { text: "That", next: "B" }
      },
      A: {
        id: [2, 2],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Option A", next: "endA" },
        right: { text: "Option B", next: "endA" }
      },
      B: {
        id: [2, 3],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Pick me!", next: "endB" },
        right: { text: "Or pick me!", next: "endB" }
      },
      endA: {
        id: [2, 4],
        text:
          "Because you chose the left option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      },
      endB: {
        id: [2, 5],
        text:
          "Because you chose the right option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      }
    }
  },
  {
    id: 3,
    name: "Adventure 3",
    image: logo,
    story: {
      start: {
        id: [3, 1],
        text: "Bla bla bla, bla bla. Decide!",
        image: logo,
        left: { text: "This", next: "A" },
        right: { text: "That", next: "B" }
      },
      A: {
        id: [3, 2],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Option A", next: "endA" },
        right: { text: "Option B", next: "endA" }
      },
      B: {
        id: [3, 3],
        text: "New decision! Bla bla bla, bla bla",
        image: logo,
        left: { text: "Pick me!", next: "endB" },
        right: { text: "Or pick me!", next: "endB" }
      },
      endA: {
        id: [3, 4],
        text:
          "Because you chose the left option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      },
      endB: {
        id: [3, 5],
        text:
          "Because you chose the right option in your first decision, you die.",
        image: logo,
        sources: [
          {
            url: "www.google.com",
            text: "Dataset A"
          },
          {
            url: "www.google.com",
            text: "Research Paper B"
          }
        ]
      }
    }
  }
];
