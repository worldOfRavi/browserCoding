export const accordian = [
    {
        id:1,
        question:"What is the Virtual DOM in React, and how does it improve performance?",
        answer:"The Virtual DOM is an in-memory representation of the real DOM. React updates the Virtual DOM first, calculates the differences (diffing), and efficiently updates only the changed parts in the real DOM. This approach minimizes expensive DOM manipulations, improving performance and ensuring a smoother user experience."
    },
    {
        id:2,
        question:"What are React Hooks? Name some commonly used hooks?",
        answer:"React Hooks are functions introduced in React 16.8 that allow state and lifecycle features in functional components. Common hooks include useState for state management, useEffect for side effects, useContext for accessing context, useMemo for performance optimization, and useCallback for memoizing functions"
    },
    {
        id:3,
        question:"What is the difference between controlled and uncontrolled components in React?",
        answer:"Controlled components rely on React state to manage form data, offering better control and validation. In contrast, uncontrolled components rely on the DOM for managing form data, accessed via ref. Controlled components are more predictable and commonly used in modern applications"
    },
    {
        id:4,
        question:"What is the difference between React.Component and React.PureComponent?",
        answer:"React.Component always re-renders when its parent does, while React.PureComponent uses a shallow comparison of props and state to avoid unnecessary re-renders. PureComponent is ideal for performance optimization when props and state are simple."
    },
    {
        id:5,
        question:"What is React.memo and when would you use it?",
        answer:"React.memo is a higher-order component that memoizes functional components, preventing re-renders if their props haven’t changed. It’s useful for optimizing performance in components that render the same output for identical props."
    },
  
] 