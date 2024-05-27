
export const questions = {
  JavaScript: {
    easy: [
      {
        question: "What is the use of isNaN function?",
         options: ["To check if a value is not a number", "To check if a value is null", "To check if a value is undefined", "To check if a value is an object"],
         correctAnswer: "To check if a value is not a number"
      },
      {
        question: "What is the output of 2 + '2' in JavaScript?",
         options: ["4", "'22'", "undefined", "NaN"],
         correctAnswer: "'22'"
      },
      {
        question: "Which company developed JavaScript?",
         options: ["Mozilla", "Microsoft", "Sun Microsystems", "Netscape"],
         correctAnswer: "Netscape"
      },
      {
        question: "What is the correct syntax to create a new object in JavaScript?",
         options: ["var obj = {};", "var obj = [];", "var obj = new Object[];", "var obj = Object();"],
         correctAnswer: "var obj = {};"
      },
      {
        question: "What does DOM stand for?",
         options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
         correctAnswer: "Document Object Model"
      },
      {
        question: "Which method is used to round a number to its nearest integer?",
         options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.random()"],
         correctAnswer: "Math.round()"
      },
      {
        question: "How do you declare a JavaScript variable?",
         options: ["variable carName;", "v carName;", "var carName;", "var: carName;"],
         correctAnswer: "var carName;"
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
         options: ["onchange", "onclick", "onmouseover", "onmouseclick"],
         correctAnswer: "onclick"
      },
      {
        question: "How do you find the number with the highest value of x and y?",
         options: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.floor(x, y)", "Math.round(x, y)"],
         correctAnswer: "Math.max(x, y)"
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
         options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
         correctAnswer: "alert('Hello World');"
      }
    ],
    medium: [
      {
        question: "What is a JavaScript closure?",
         options: ["A function having access to its own scope only", "A function having access to the parent scope, even after the parent function has closed", "A function having access to the global scope only", "A function that is restricted to only the local scope"],
         correctAnswer: "A function having access to the parent scope, even after the parent function has closed"
      },
      {
        question: "Which of the following is not a reserved word in JavaScript?",
         options: ["interface", "throws", "program", "short"],
         correctAnswer: "program"
      },
      {
        question: "What is the result of the following code: Boolean('false')?",
         options: ["false", "true", "null", "undefined"],
         correctAnswer: "true"
      },
      {
        question: "Which method is used to parse a JSON string into a JavaScript object?",
         options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toObject()"],
         correctAnswer: "JSON.parse()"
      },
      {
        question: "What will be the output of the following code? console.log(typeof NaN);",
         options: ["number", "string", "object", "undefined"],
         correctAnswer: "number"
      },
      {
        question: "Which of the following is not a JavaScript data type?",
         options: ["undefined", "number", "boolean", "float"],
         correctAnswer: "float"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
         options: ["*", "=", "+", "-"],
         correctAnswer: "="
      },
      {
        question: "What is the correct way to write a JavaScript array?",
         options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = {1:'red', 2:'green', 3:'blue'}"],
         correctAnswer: "var colors = ['red', 'green', 'blue']"
      },
      {
        question: "Which method removes the last element from an array and returns that element?",
         options: ["pop()", "push()", "join()", "map()"],
         correctAnswer: "pop()"
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
         options: ["//", "/* */", "#", "<!-- -->"],
         correctAnswer: "//"
      }
    ],
    hard: [
      {
        question: "What will the following code output? console.log(0.1 + 0.2 == 0.3);",
         options: ["true", "false", "undefined", "NaN"],
         correctAnswer: "false"
      },
      {
        question: "How can you get the total number of arguments passed to a function?",
         options: ["arguments.length", "args.length", "len(arguments)", "arguments.size"],
         correctAnswer: "arguments.length"
      },
      {
        question: "Which of the following is correct about JavaScript callbacks?",
         options: ["They are synchronous", "They are asynchronous", "They are functions passed as arguments to other functions", "They are methods used to bind events"],
         correctAnswer: "They are functions passed as arguments to other functions"
      },
      {
        question: "Which of the following is not a built-in JavaScript object?",
         options: ["Date", "Math", "Array", "Element"],
         correctAnswer: "Element"
      },
      {
        question: "What does the 'use strict' directive do?",
         options: ["Enables strict mode", "Enables debugging", "Disables strict mode", "Enables error checking"],
         correctAnswer: "Enables strict mode"
      },
      {
        question: "Which of the following methods can be used to delay the execution of a function?",
         options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
         correctAnswer: "setTimeout()"
      },
      {
        question: "What will be the output of the following code? console.log([] + []);",
         options: ["0", "null", "undefined", "''"],
         correctAnswer: "''"
      },
      {
        question: "Which of the following is the correct way to create an object with a prototype?",
         options: ["Object.create(prototype)", "Object.new(prototype)", "Object.prototype(prototype)", "Object.construct(prototype)"],
         correctAnswer: "Object.create(prototype)"
      },
      {
        question: "What will be the result of the following code? var a = [1, 2, 3]; var b = a; b.push(4); console.log(a);",
         options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 3, 4, 4]", "[4]"],
         correctAnswer: "[1, 2, 3, 4]"
      },
      {
        question: "Which of the following will return the type of a variable?",
         options: ["typeof", "type", "isType", "getType"],
         correctAnswer: "typeof"
      }
    ]
  },
  Python: {
    easy: [
      {
        question: "What is the output of print(2 ** 3)?",
         options: ["6", "8", "9", "12"],
         correctAnswer: "8"
      },
      {
        question: "What is the output of print('Hello, World!'.replace('World', 'Python'))?",
         options: ["Hello, World!", "Hello, Python!", "Hello, Java!", "Hello, World! Python"],
         correctAnswer: "Hello, Python!"
      },
      {
        question: "Which of the following is the correct way to create a function in Python?",
         options: ["function myFunction()", "def myFunction()", "create myFunction()", "void myFunction()"],
         correctAnswer: "def myFunction()"
      },
      {
        question: "How do you create a list in Python?",
         options: ["list = []", "list = ()", "list = {}", "list = <>"],
         correctAnswer: "list = []"
      },
      {
        question: "Which keyword is used to begin a class definition in Python?",
         options: ["def", "class", "create", "function"],
         correctAnswer: "class"
      },
      {
        question: "How do you check the data type of a variable in Python?",
         options: ["checkType(x)", "typeof(x)", "type(x)", "getType(x)"],
         correctAnswer: "type(x)"
      },
      {
        question: "Which of the following is a valid variable name in Python?",
         options: ["2my_var", "my-var", "my_var", "my var"],
         correctAnswer: "my_var"
      },
      {
        question: "Which of the following is used to create an empty set in Python?",
         options: ["{}", "[]", "set()", "set([])"],
         correctAnswer: "set()"
      },
      {
        question: "How do you add a comment in Python?",
         options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "-- This is a comment"],
         correctAnswer: "# This is a comment"
      },
      {
        question: "How do you get the length of a list in Python?",
         options: ["len(list)", "length(list)", "size(list)", "count(list)"],
         correctAnswer: "len(list)"
      }
    ],
    medium: [
      {
        question: "What is the output of the following code? print('Hello' + ' ' + 'World!')",
         options: ["Hello World!", "HelloWorld!", "Hello World! ", "Hello + World!"],
         correctAnswer: "Hello World!"
      },
      {
        question: "How do you access the first element of a list in Python?",
         options: ["list.first()", "list[0]", "list(0)", "list[1]"],
         correctAnswer: "list[0]"
      },
      {
        question: "Which of the following is used to handle exceptions in Python?",
         options: ["try...catch", "try...finally", "try...except", "try...throw"],
         correctAnswer: "try...except"
      },
      {
        question: "Which function is used to convert a string to an integer in Python?",
         options: ["int()", "str()", "float()", "chr()"],
         correctAnswer: "int()"
      },
      {
        question: "What will be the output of the following code? print(bool(0), bool(3.14), bool(''))",
         options: ["False True False", "True True True", "False False False", "True False True"],
         correctAnswer: "False True False"
      },
      {
        question: "Which of the following methods is used to remove an element from a list in Python?",
         options: ["remove()", "delete()", "discard()", "pop()"],
         correctAnswer: "remove()"
      },
      {
        question: "Which of the following is not a keyword in Python?",
         options: ["finally", "elif", "assert", "function"],
         correctAnswer: "function"
      },
      {
        question: "Which method can be used to return the number of items in a dictionary?",
         options: ["len()", "count()", "size()", "get()"],
         correctAnswer: "len()"
      },
      {
        question: "How do you write an infinite loop in Python?",
         options: ["while 1:", "while true:", "while (1):", "while (true):"],
         correctAnswer: "while true:"
      },
      {
        question: "What is the output of the following code? print(list(range(5)))",
         options: ["[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4]", "[0, 1, 2, 3, 4, 5]", "[1, 2, 3, 4]"],
         correctAnswer: "[0, 1, 2, 3, 4]"
      }
    ],
    hard: [
      {
        question: "Which of the following is true for variable names in Python?",
         options: ["unlimited-length", "all private", "underscore and ampersand are the only two special characters allowed", "none of the above"],
         correctAnswer: "unlimited-length"
      },
      {
        question: "What will be the output of the following code? print(0.1 + 0.2 == 0.3)",
         options: ["True", "False", "Error", "None of the above"],
         correctAnswer: "False"
      },
      {
        question: "What is the output of the following code? print([i for i in range(3)])",
         options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[None, None, None]"],
         correctAnswer: "[0, 1, 2]"
      },
      {
        question: "Which of the following functions is a built-in function in Python?",
         options: ["factorial()", "print()", "seed()", "sqrt()"],
         correctAnswer: "print()"
      },
      {
        question: "Which of the following is the correct syntax to open a file for reading in Python?",
         options: ["open(filename, 'r')", "open(filename, 'rb')", "open(filename, 'rt')", "open(filename, 'rw')"],
         correctAnswer: "open(filename, 'r')"
      },
      {
        question: "What is the output of the following code? print(type(lambda: None))",
         options: ["<class 'function'>", "<class 'lambda'>", "<class 'method'>", "<class 'none'>"],
         correctAnswer: "<class 'function'>"
      },
      {
        question: "What is the output of the following code? print({1, 2, 3} & {3, 4, 5})",
         options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "{1, 2, 3}"],
         correctAnswer: "{3}"
      },
      {
        question: "What is the output of the following code? print((lambda x: x*2)(3))",
         options: ["3", "6", "9", "12"],
         correctAnswer: "6"
      },
      {
        question: "Which of the following is not a valid way to define a set in Python?",
         options: ["{1, 2, 3}", "set([1, 2, 3])", "{1, 2, 2, 3}", "set((1, 2, 3))"],
         correctAnswer: "{1, 2, 2, 3}"
      },
      {
        question: "What is the output of the following code? print('hello'.capitalize())",
         options: ["Hello", "HELLO", "hello", "H"],
         correctAnswer: "Hello"
      }
    ]
  },
  React: {
    easy: [
      {
        question: "What is React?",
         options: ["A JavaScript library for building user interfaces", "A CSS framework", "A database management tool", "A programming language"],
         correctAnswer: "A JavaScript library for building user interfaces"
      },
      {
        question: "What is JSX?",
         options: ["A syntax extension for JavaScript", "A templating engine", "A state management tool", "A CSS preprocessor"],
         correctAnswer: "A syntax extension for JavaScript"
      },
      {
        question: "Which method is used to create components in React?",
         options: ["React.component()", "React.createComponent()", "React.createElement()", "React.renderComponent()"],
         correctAnswer: "React.createElement()"
      },
      {
        question: "How do you create a functional component in React?",
         options: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "const MyComponent = React.Component", "function = MyComponent() => {}"],
         correctAnswer: "function MyComponent() {}"
      },
      {
        question: "What is the purpose of the render() method in React?",
         options: ["To update the state", "To handle events", "To define the UI structure", "To manage props"],
         correctAnswer: "To define the UI structure"
      },
      {
        question: "What is the correct way to pass a prop to a child component?",
         options: ["<ChildComponent propName={value} />", "<ChildComponent propName:value />", "<ChildComponent propName=value />", "<ChildComponent {propName:value} />"],
         correctAnswer: "<ChildComponent propName={value} />"
      },
      {
        question: "What is state in React?",
         options: ["An immutable data structure", "A CSS rule", "A built-in method", "An object that determines how the component renders and behaves"],
         correctAnswer: "An object that determines how the component renders and behaves"
      },
      {
        question: "Which hook is used to manage state in functional components?",
         options: ["useEffect", "useReducer", "useContext", "useState"],
         correctAnswer: "useState"
      },
      {
        question: "What is the purpose of ReactDOM in React?",
         options: ["To provide server-side rendering", "To provide a virtual DOM", "To render React components to the DOM", "To manage component lifecycle"],
         correctAnswer: "To render React components to the DOM"
      },
      {
        question: "What is the purpose of keys in React?",
         options: ["To identify elements in a list", "To manage state", "To pass props", "To handle events"],
         correctAnswer: "To identify elements in a list"
      }
    ],
    medium: [
      {
        question: "How do you handle events in React?",
         options: ["Using event handlers", "Using state", "Using props", "Using lifecycle methods"],
         correctAnswer: "Using event handlers"
      },
      {
        question: "What is the purpose of the useEffect hook?",
         options: ["To manage state", "To perform side effects", "To handle props", "To define the component structure"],
         correctAnswer: "To perform side effects"
      },
      {
        question: "How do you pass data from a child component to a parent component?",
         options: ["Using state", "Using props", "Using context", "Using a callback function"],
         correctAnswer: "Using a callback function"
      },
      {
        question: "What is the purpose of the Context API?",
         options: ["To manage state", "To handle side effects", "To pass data through the component tree without props", "To create components"],
         correctAnswer: "To pass data through the component tree without props"
      },
      {
        question: "What is a higher-order component (HOC) in React?",
         options: ["A function that takes a component and returns a new component", "A built-in React method", "A type of React hook", "A way to handle state"],
         correctAnswer: "A function that takes a component and returns a new component"
      },
      {
        question: "How do you optimize performance in a React application?",
         options: ["Using keys in lists", "Using inline styles", "Using componentDidMount", "Using controlled components"],
         correctAnswer: "Using keys in lists"
      },
      {
        question: "What is the purpose of the useReducer hook?",
         options: ["To manage complex state logic", "To handle side effects", "To pass data through the component tree", "To create context"],
         correctAnswer: "To manage complex state logic"
      },
      {
        question: "What is the difference between state and props in React?",
         options: ["State is mutable, props are immutable", "State is immutable, props are mutable", "Both are mutable", "Both are immutable"],
         correctAnswer: "State is mutable, props are immutable"
      },
      {
        question: "How do you handle conditional rendering in React?",
         options: ["Using if-else statements", "Using the switch statement", "Using ternary operators or logical &&", "Using for loops"],
         correctAnswer: "Using ternary operators or logical &&"
      },
      {
        question: "What is the purpose of the React.memo function?",
         options: ["To memoize a component and avoid unnecessary re-renders", "To create context", "To handle side effects", "To manage state"],
         correctAnswer: "To memoize a component and avoid unnecessary re-renders"
      }
    ],
    hard: [
      {
        question: "What is server-side rendering (SSR) in the context of React?",
         options: ["Rendering the component tree on the server before sending it to the client", "Rendering components only on the client-side", "Using a server to manage state", "Using server APIs to fetch data"],
         correctAnswer: "Rendering the component tree on the server before sending it to the client"
      },
      {
        question: "What is the difference between useCallback and useMemo?",
         options: ["useCallback memoizes a function, useMemo memoizes a value", "useCallback memoizes a value, useMemo memoizes a function", "Both memoize functions", "Both memoize values"],
         correctAnswer: "useCallback memoizes a function, useMemo memoizes a value"
      },
      {
        question: "How do you implement code splitting in a React application?",
         options: ["Using React.lazy and Suspense", "Using higher-order components", "Using state and props", "Using the Context API"],
         correctAnswer: "Using React.lazy and Suspense"
      },
      {
        question: "What is the purpose of the shouldComponentUpdate lifecycle method?",
         options: ["To decide if a component should re-render", "To initialize state", "To clean up side effects", "To manage context"],
         correctAnswer: "To decide if a component should re-render"
      },
      {
        question: "What is a React portal?",
         options: ["A way to render children into a DOM node outside the parent component", "A way to create context", "A way to handle state", "A way to manage props"],
         correctAnswer: "A way to render children into a DOM node outside the parent component"
      },
      {
        question: "How do you handle errors in a React component?",
         options: ["Using componentDidCatch", "Using try...catch blocks", "Using useEffect", "Using useState"],
         correctAnswer: "Using componentDidCatch"
      },
      {
        question: "What is the purpose of the useRef hook?",
         options: ["To access a DOM element directly", "To manage state", "To handle side effects", "To create context"],
         correctAnswer: "To access a DOM element directly"
      },
      {
        question: "What is the difference between controlled and uncontrolled components?",
         options: ["Controlled components have their state managed by React, uncontrolled components manage their own state", "Uncontrolled components have their state managed by React, controlled components manage their own state", "Both are managed by React", "Both manage their own state"],
         correctAnswer: "Controlled components have their state managed by React, uncontrolled components manage their own state"
      },
      {
        question: "How do you pass props to a component rendered by React Router?",
         options: ["Using the render prop", "Using the to prop", "Using the component prop", "Using the path prop"],
         correctAnswer: "Using the render prop"
      },
      {
        question: "What is the purpose of the useLayoutEffect hook?",
         options: ["To perform side effects that need to occur before the browser paints", "To manage state", "To handle routing", "To create context"],
         correctAnswer: "To perform side effects that need to occur before the browser paints"
      }
    ]
  },
  SQL: {
    easy: [
      {
        question: "What does SQL stand for?",
         options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Question Language"],
         correctAnswer: "Structured Query Language"
      },
      {
        question: "Which SQL statement is used to retrieve data from a database?",
         options: ["SELECT", "GET", "EXTRACT", "OPEN"],
         correctAnswer: "SELECT"
      },
      {
        question: "Which SQL statement is used to update data in a database?",
         options: ["SAVE", "MODIFY", "UPDATE", "CHANGE"],
         correctAnswer: "UPDATE"
      },
      {
        question: "Which SQL statement is used to delete data from a database?",
         options: ["REMOVE", "DELETE", "DROP", "ERASE"],
         correctAnswer: "DELETE"
      },
      {
        question: "Which SQL statement is used to insert new data into a database?",
         options: ["INSERT INTO", "ADD NEW", "UPDATE", "INSERT NEW"],
         correctAnswer: "INSERT INTO"
      },
      {
        question: "What does the WHERE clause do in SQL?",
         options: ["Filters records", "Sorts records", "Deletes records", "Updates records"],
         correctAnswer: "Filters records"
      },
      {
        question: "Which SQL keyword is used to sort the result-set?",
         options: ["SORT BY", "ORDER BY", "ALIGN BY", "GROUP BY"],
         correctAnswer: "ORDER BY"
      },
      {
        question: "Which SQL function is used to count the number of rows in a table?",
         options: ["TOTAL()", "COUNT()", "SUM()", "NUMBER()"],
         correctAnswer: "COUNT()"
      },
      {
        question: "Which operator is used to search for a specified pattern in a column?",
         options: ["LIKE", "MATCH", "SEARCH", "PATTERN"],
         correctAnswer: "LIKE"
      },
      {
        question: "How do you select all the columns from a table named 'Employees'?",
         options: ["SELECT * FROM Employees", "SELECT all FROM Employees", "SELECT columns FROM Employees", "SELECT everything FROM Employees"],
         correctAnswer: "SELECT * FROM Employees"
      }
    ],
    medium: [
      {
        question: "Which SQL statement is used to create a new table?",
         options: ["ADD TABLE", "CREATE TABLE", "NEW TABLE", "MAKE TABLE"],
         correctAnswer: "CREATE TABLE"
      },
      {
        question: "What is a primary key in SQL?",
         options: ["A unique identifier for each record", "A foreign key", "A key that refers to another table", "A default value for a column"],
         correctAnswer: "A unique identifier for each record"
      },
      {
        question: "Which SQL clause is used to group rows that have the same values?",
         options: ["GROUP BY", "ORDER BY", "PARTITION BY", "COLLATE BY"],
         correctAnswer: "GROUP BY"
      },
      {
        question: "Which SQL function is used to calculate the sum of a numeric column?",
         options: ["SUM()", "COUNT()", "TOTAL()", "ADD()"],
         correctAnswer: "SUM()"
      },
      {
        question: "What does the JOIN keyword do in SQL?",
         options: ["Combines rows from two or more tables", "Deletes records", "Updates records", "Sorts records"],
         correctAnswer: "Combines rows from two or more tables"
      },
      {
        question: "Which SQL statement is used to remove a table from the database?",
         options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
         correctAnswer: "DROP TABLE"
      },
      {
        question: "What is a foreign key in SQL?",
         options: ["A key that uniquely identifies a record", "A key used to link two tables together", "A key that is used for sorting records", "A key that is used to update records"],


         correctAnswer: "A key used to link two tables together"
      },
      {
        question: "Which SQL statement is used to create a new database?",
         options: ["ADD DATABASE", "NEW DATABASE", "CREATE DATABASE", "MAKE DATABASE"],
         correctAnswer: "CREATE DATABASE"
      },
      {
        question: "Which SQL keyword is used to remove duplicate rows from a result set?",
         options: ["UNIQUE", "DISTINCT", "DISCRETE", "FILTER"],
         correctAnswer: "DISTINCT"
      },
      {
        question: "Which SQL statement is used to add a new column to an existing table?",
         options: ["ADD COLUMN", "MODIFY COLUMN", "INSERT COLUMN", "ALTER TABLE"],
         correctAnswer: "ALTER TABLE"
      }
    ],
    hard: [
      {
        question: "What is a subquery in SQL?",
         options: ["A query nested inside another query", "A query that joins multiple tables", "A query that filters records", "A query that updates records"],
         correctAnswer: "A query nested inside another query"
      },
      {
        question: "Which SQL clause is used to filter groups based on a condition?",
         options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
         correctAnswer: "HAVING"
      },
      {
        question: "What is the purpose of the INDEX in SQL?",
         options: ["To improve the speed of data retrieval", "To enforce data integrity", "To define a primary key", "To define a foreign key"],
         correctAnswer: "To improve the speed of data retrieval"
      },
      {
        question: "Which SQL function is used to find the highest value in a column?",
         options: ["MAX()", "MIN()", "HIGHEST()", "TOP()"],
         correctAnswer: "MAX()"
      },
      {
        question: "What is the purpose of the ALTER TABLE statement?",
         options: ["To modify the structure of an existing table", "To delete records from a table", "To insert records into a table", "To create a new table"],
         correctAnswer: "To modify the structure of an existing table"
      },
      {
        question: "What is a UNION operator in SQL?",
         options: ["Combines the results of two or more SELECT statements", "Combines the columns of two or more tables", "Filters records", "Sorts records"],
         correctAnswer: "Combines the results of two or more SELECT statements"
      },
      {
        question: "What does the term 'normalization' mean in the context of SQL?",
         options: ["Organizing data to reduce redundancy", "Creating tables", "Writing queries", "Creating indexes"],
         correctAnswer: "Organizing data to reduce redundancy"
      },
      {
        question: "What is the difference between INNER JOIN and OUTER JOIN?",
         options: ["INNER JOIN returns only matching rows, OUTER JOIN returns all rows from one table and the matching rows from the other", "INNER JOIN combines rows from two tables, OUTER JOIN filters rows", "INNER JOIN updates records, OUTER JOIN deletes records", "INNER JOIN sorts records, OUTER JOIN groups records"],
         correctAnswer: "INNER JOIN returns only matching rows, OUTER JOIN returns all rows from one table and the matching rows from the other"
      },
      {
        question: "Which SQL statement is used to grant privileges to a user?",
         options: ["GRANT", "PERMIT", "ALLOW", "GIVE"],
         correctAnswer: "GRANT"
      },
      {
        question: "Which SQL function is used to return the current date and time?",
         options: ["NOW()", "CURDATE()", "GETDATE()", "CURRENT_TIMESTAMP"],
         correctAnswer: "NOW()"
      }
    ]
  }
}
