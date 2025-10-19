import React, { useEffect, useState, memo } from "react";
import GlassmorphicCard from '../components/GlassmorphicCard';
import { AlertTriangleIcon, PlayIcon, RotateCcwIcon } from 'lucide-react';
import { Editor } from '@monaco-editor/react';
import useDocumentTitle from '../useDocumentTitle';

const Playground = () => {
  const [language, setLanguage] = useState('html');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  // Default code samples for each language
  const defaultCode = {
    html: `<!DOCTYPE html>
<html>
<head>
  <style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #302600, #5E4900);
    color: white;
  }
  .container {
    text-align: center;
    padding: 2rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  button {
    background: #5E4900;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>Hello World!</h1>
    <p>This is a simple HTML example</p>
    <button onclick="alert('Button clicked!')">Click Me</button>
  </div>
</body>
</html>`,
    javascript: `// Define a function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Create an array of names
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
// Map through the array and create a greeting for each name
const greetings = names.map(name => ({
  name,
  greeting: "Hello, " + name + "!",
  color: getRandomColor()
}));
// Print the results
console.log('Generated Greetings:');
greetings.forEach(person => {
  console.log(person.greeting + ' (Color: ' + person.color + ')');
});`,
    typescript: `// Define types for our data
type Person = {
  name: string;
  age: number;
  skills: string[];
};
// Create a function with typed parameters and return value
function filterBySkill(people: Person[], skill: string): Person[] {
  return people.filter(person => 
    person.skills.includes(skill)
  );
}
// Sample data
const team: Person[] = [
  { name: "Alice", age: 28, skills: ["TypeScript", "React", "Node.js"] },
  { name: "Bob", age: 32, skills: ["Python", "Data Science", "TypeScript"] },
  { name: "Charlie", age: 24, skills: ["JavaScript", "UI Design", "CSS"] },
  { name: "Diana", age: 30, skills: ["TypeScript", "GraphQL", "Testing"] }
];
// Use our function
const typescriptDevs = filterBySkill(team, "TypeScript");
// Output results
console.log("TypeScript Developers:");
typescriptDevs.forEach(dev => {
  console.log(\`- \${dev.name} (Age: \${dev.age})\`);
  console.log(\`  Skills: \${dev.skills.join(", ")}\`);
});
// Calculate average age using TypeScript features
const averageAge = typescriptDevs.reduce(
  (sum, dev) => sum + dev.age, 0
) / typescriptDevs.length;
console.log(\`Average age of TypeScript developers: \${averageAge.toFixed(1)}\`);`,
    python: `# Define a function to calculate fibonacci numbers
def fibonacci(n):
    if n <= 0:
        return "Please enter a positive integer"
    elif n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
# Create a list of the first 10 fibonacci numbers
fib_sequence = [fibonacci(i) for i in range(1, 11)]
# Print the sequence
print("Fibonacci Sequence:")
for i, num in enumerate(fib_sequence):
    print(f"Fibonacci({i+1}) = {num}")
# Calculate the sum
total = sum(fib_sequence)
print(f"Sum of the first 10 Fibonacci numbers: {total}")`,
    java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
        // Create an array of numbers
        int[] numbers = {5, 3, 9, 1, 7};
        // Find the maximum value
        int max = findMax(numbers);
        System.out.println("Maximum value: " + max);
        // Sort the array
        bubbleSort(numbers);
        // Print sorted array
        System.out.print("Sorted array: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
    // Method to find maximum value in array
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    // Bubble sort implementation
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`,
    rust: `// A simple Rust program demonstrating basic features
// Define a struct with fields
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
// Define an enum with variants
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
// Implement methods for the Message enum
impl Message {
    fn call(&self) -> String {
        match self {
            Message::Quit => String::from("Quitting application"),
            Message::Move { x, y } => format!("Moving to position: ({}, {})", x, y),
            Message::Write(text) => format!("Text message: {}", text),
            Message::ChangeColor(r, g, b) => format!("Changing color to: rgb({}, {}, {})", r, g, b),
        }
    }
}
fn main() {
    // Create a new User instance
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    println!("User {} has email: {}", user1.username, user1.email);
    // Create some Message instances
    let messages = vec![
        Message::Quit,
        Message::Move { x: 10, y: 20 },
        Message::Write(String::from("Hello, Rust!")),
        Message::ChangeColor(255, 200, 100),
    ];
    // Process each message
    for (i, message) in messages.iter().enumerate() {
        println!("Message {}: {}", i + 1, message.call());
    }
    // Using a vector to store values
    let mut v = Vec::new();
    v.push(5);
    v.push(6);
    v.push(7);
    v.push(8);
    // Using a for loop to iterate
    let mut sum = 0;
    for num in &v {
        sum += num;
    }
    println!("Sum of vector values: {}", sum);
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Define a structure for a person
struct Person {
    char name[50];
    int age;
    float height;
};
// Function to print person details
void printPerson(struct Person p) {
    printf("Name: %s\\n", p.name);
    printf("Age: %d\\n", p.age);
    printf("Height: %.2f meters\\n", p.height);
}
// Function to find the oldest person
struct Person findOldest(struct Person people[], int size) {
    struct Person oldest = people[0];
    for (int i = 1; i < size; i++) {
        if (people[i].age > oldest.age) {
            oldest = people[i];
        }
    }
    return oldest;
}
int main() {
    printf("C Programming Example\\n");
    printf("=====================\\n\\n");
    // Dynamic memory allocation
    int* numbers = (int*)malloc(5 * sizeof(int));
    if (numbers == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    // Initialize array
    for (int i = 0; i < 5; i++) {
        numbers[i] = i * 10;
    }
    // Print array contents
    printf("Number array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n\\n");
    // Free allocated memory
    free(numbers);
    // Using structures
    struct Person people[3];
    // Initialize people
    strcpy(people[0].name, "Alice");
    people[0].age = 25;
    people[0].height = 1.65;
    strcpy(people[1].name, "Bob");
    people[1].age = 32;
    people[1].height = 1.80;
    strcpy(people[2].name, "Charlie");
    people[2].age = 28;
    people[2].height = 1.75;
    // Find and print the oldest person
    struct Person oldest = findOldest(people, 3);
    printf("The oldest person is:\\n");
    printPerson(oldest);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <memory>
// Define a base class
class Shape {
protected:
    std::string name;
public:
    // Constructor
    Shape(const std::string& n) : name(n) {}
    // Virtual function for polymorphism
    virtual double area() const = 0;
    // Virtual destructor
    virtual ~Shape() = default;
    // Getter method
    std::string getName() const { return name; }
};
// Derived class Circle
class Circle : public Shape {
private:
    double radius;
public:
    Circle(const std::string& n, double r) : Shape(n), radius(r) {}
    double area() const override {
        return 3.14159 * radius * radius;
    }
};
// Derived class Rectangle
class Rectangle : public Shape {
private:
    double width;
    double height;
public:
    Rectangle(const std::string& n, double w, double h) : Shape(n), width(w), height(h) {}
    double area() const override {
        return width * height;
    }
};
int main() {
    std::cout << "C++ Programming Example" << std::endl;
    std::cout << "======================" << std::endl << std::endl;
    // Using smart pointers for memory management
    std::vector<std::unique_ptr<Shape>> shapes;
    // Add shapes to the vector
    shapes.push_back(std::make_unique<Circle>("Small Circle", 3.0));
    shapes.push_back(std::make_unique<Rectangle>("Rectangle A", 4.0, 5.0));
    shapes.push_back(std::make_unique<Circle>("Large Circle", 7.0));
    // Calculate and display areas using polymorphism
    std::cout << "Shape Areas:" << std::endl;
    for (const auto& shape : shapes) {
        std::cout << "- " << shape->getName() << ": " << shape->area() << std::endl;
    }
    // Using STL algorithms
    std::vector<int> numbers = {5, 2, 8, 1, 9, 3, 7, 4, 6};
    std::cout << std::endl << "Original numbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    // Sort the vector
    std::sort(numbers.begin(), numbers.end());
    std::cout << std::endl << "Sorted numbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    // Find a specific number
    auto it = std::find(numbers.begin(), numbers.end(), 7);
    if (it != numbers.end()) {
        std::cout << std::endl << "Found number 7 at position: " 
                 << std::distance(numbers.begin(), it) << std::endl;
    }
    return 0;
}`,
    go: `package main
import (
	"fmt"
	"strings"
	"time"
)
// Define a struct type
type Task struct {
	ID        int
	Title     string
	Completed bool
	DueDate   time.Time
}
// Method for the Task struct
func (t Task) Summary() string {
	status := "Pending"
	if t.Completed {
		status = "Completed"
	}
	return fmt.Sprintf("Task %d: %s [%s] - Due: %s", 
		t.ID, t.Title, status, t.DueDate.Format("2006-01-02"))
}
// Function to filter tasks
func filterTasks(tasks []Task, completed bool) []Task {
	var filtered []Task
	for _, task := range tasks {
		if task.Completed == completed {
			filtered = append(filtered, task)
		}
	}
	return filtered
}
// Interface definition
type Printer interface {
	Print() string
}
// Implement the interface for Task
func (t Task) Print() string {
	return t.Summary()
}
// Another struct implementing Printer
type Message struct {
	Content string
	Author  string
}
func (m Message) Print() string {
	return fmt.Sprintf("Message from %s: %s", m.Author, m.Content)
}
// Function that accepts the interface
func printItems(items []Printer) {
	for _, item := range items {
		fmt.Println(item.Print())
	}
}
func main() {
	fmt.Println("Go Programming Example")
	fmt.Println("=====================")
	fmt.Println()
	// Create tasks
	tasks := []Task{
		{1, "Learn Go", false, time.Now().AddDate(0, 0, 2)},
		{2, "Build REST API", false, time.Now().AddDate(0, 0, 5)},
		{3, "Write documentation", true, time.Now().AddDate(0, 0, -1)},
		{4, "Deploy application", false, time.Now().AddDate(0, 0, 7)},
	}
	// Display all tasks
	fmt.Println("All Tasks:")
	for _, task := range tasks {
		fmt.Println(task.Summary())
	}
	// Filter completed tasks
	completedTasks := filterTasks(tasks, true)
	fmt.Println("\nCompleted Tasks:")
	for _, task := range completedTasks {
		fmt.Println(task.Summary())
	}
	// Using goroutines and channels for concurrency
	fmt.Println("\nDemonstrating concurrency with goroutines:")
	ch := make(chan string)
	// Start goroutines
	go func() {
		time.Sleep(100 * time.Millisecond)
		ch <- "Message 1"
	}()
	go func() {
		time.Sleep(50 * time.Millisecond)
		ch <- "Message 2"
	}()
	// Receive from channel
	fmt.Println(<-ch)
	fmt.Println(<-ch)
	// Using the interface
	fmt.Println("\nUsing interfaces:")
	var printers []Printer
	printers = append(printers, tasks[0])
	printers = append(printers, Message{"Hello, Go!", "Admin"})
	printers = append(printers, tasks[2])
	printItems(printers)
}`,
    lua: `-- Define a table (Lua's main data structure)
local person = {
    name = "Alice",
    age = 30,
    skills = {"Programming", "Design", "Communication"}
}
-- Function to print table contents
local function printTable(t, indent)
    indent = indent or ""
    for k, v in pairs(t) do
        if type(v) == "table" then
            print(indent .. k .. ":")
            printTable(v, indent .. "  ")
        else
            print(indent .. k .. ": " .. tostring(v))
        end
    end
end
-- Print person details
print("Person details:")
printTable(person)
-- Functions in Lua
local function factorial(n)
    if n <= 1 then
        return 1
    else
        return n * factorial(n - 1)
    end
end
print("\\nFactorials:")
for i = 1, 5 do
    print(string.format("Factorial of %d = %d", i, factorial(i)))
end
-- Object-oriented programming in Lua using tables and metatables
local Shape = {}
Shape.__index = Shape
function Shape:new(name)
    local obj = {name = name}
    setmetatable(obj, self)
    return obj
end
function Shape:describe()
    return "This is a " .. self.name
end
-- Create a derived "class"
local Circle = {}
Circle.__index = Circle
setmetatable(Circle, {__index = Shape}) -- Inheritance
function Circle:new(name, radius)
    local obj = Shape:new(name)
    setmetatable(obj, self)
    obj.radius = radius
    return obj
end
function Circle:area()
    return 3.14159 * self.radius * self.radius
end
function Circle:describe()
    return Shape.describe(self) .. " with radius " .. self.radius
end
-- Create and use objects
print("\\nObject-oriented programming:")
local myCircle = Circle:new("circle", 5)
print(myCircle:describe())
print("Area: " .. myCircle:area())
-- Closures and higher-order functions
local function counter(start)
    local count = start or 0
    return function()
        count = count + 1
        return count
    end
end
print("\\nDemonstrating closures:")
local c1 = counter(10)
print("Counter 1:", c1()) -- 11
print("Counter 1:", c1()) -- 12
local c2 = counter(100)
print("Counter 2:", c2()) -- 101
print("Counter 1:", c1()) -- 13
-- String manipulation
local text = "Lua programming is fun and powerful!"
print("\\nString operations:")
print("Original: " .. text)
print("Length: " .. #text)
print("Uppercase: " .. string.upper(text))
print("Find 'fun': " .. tostring(string.find(text, "fun")))
print("Replace: " .. string.gsub(text, "fun", "awesome"))
`
  };
  // Set default code on language change
  useEffect(() => {
    setCode(defaultCode[language] || '');
  }, [language]);
  const handleLanguageChange = e => {
    setLanguage(e.target.value);
  };
  const runCode = () => {
    setIsRunning(true);
    try {
      if (language === 'html') {
        setOutput(`<iframe 
          srcDoc="${code.replace(/"/g, '&quot;')}" 
          style="width:100%; height:100%; border:none;"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>`);
      } else if (language === 'javascript' || language === 'typescript') {
        try {
          // Create a function from the code and execute it
          const result = new Function(code)();
          setOutput(`<div class="p-4">
            <h3 class="text-lg font-semibold text-white mb-2">Output:</h3>
            <pre class="bg-black/30 p-3 rounded text-gray-300 overflow-auto">${result !== undefined ? String(result) : 'No output'}</pre>
            <p class="text-gray-400 mt-2 text-sm">Note: Check console for additional outputs</p>
          </div>`);
          // Execute the code to see console outputs
          // This is just for the side effects (like console.log)
          eval(code);
        } catch (error) {
          setOutput(`<div class="p-4">
            <h3 class="text-lg font-semibold text-white mb-2">Error:</h3>
            <pre class="bg-black/30 p-3 rounded text-red-400 overflow-auto">${error.toString()}</pre>
          </div>`);
        }
      } else {
        // For other languages, show simulated output
        const simulatedOutput = getSimulatedOutput(language, code);
        setOutput(`<div class="p-4">
          <h3 class="text-lg font-semibold text-white mb-2">Simulated Output:</h3>
          <pre class="bg-black/30 p-3 rounded text-gray-300 overflow-auto">${simulatedOutput}</pre>
          <p class="text-yellow-400 mt-2 flex items-center gap-2">
            <AlertTriangleIcon className="w-4 h-4" />
            <span>This is a simulated output. Server-side execution is not available in this playground.</span>
          </p>
        </div>`);
      }
    } catch (error) {
      setOutput(`<div class="p-4">
        <h3 class="text-lg font-semibold text-white mb-2">Error:</h3>
        <pre class="bg-black/30 p-3 rounded text-red-400 overflow-auto">${error.toString()}</pre>
      </div>`);
    }
    setIsRunning(false);
  };
  const resetCode = () => {
    setCode(defaultCode[language] || '');
  };
  // Simple simulation of output for server-side languages
  const getSimulatedOutput = (lang, code) => {
    switch (lang) {
      case 'python':
        if (code.includes('fibonacci')) {
          return 'Fibonacci Sequence:\nFibonacci(1) = 0\nFibonacci(2) = 1\nFibonacci(3) = 1\nFibonacci(4) = 2\nFibonacci(5) = 3\nFibonacci(6) = 5\nFibonacci(7) = 8\nFibonacci(8) = 13\nFibonacci(9) = 21\nFibonacci(10) = 34\nSum of the first 10 Fibonacci numbers: 88';
        }
        return 'Python output would appear here.\nThis is a simulated output.';
      case 'java':
        if (code.includes('bubbleSort')) {
          return 'Hello, Java World!\nMaximum value: 9\nSorted array: 1 3 5 7 9';
        }
        return 'Java output would appear here.\nThis is a simulated output.';
      case 'typescript':
        if (code.includes('filterBySkill')) {
          return 'TypeScript Developers:\n- Alice (Age: 28)\n  Skills: TypeScript, React, Node.js\n- Bob (Age: 32)\n  Skills: Python, Data Science, TypeScript\n- Diana (Age: 30)\n  Skills: TypeScript, GraphQL, Testing\nAverage age of TypeScript developers: 30.0';
        }
        return 'TypeScript output would appear here.\nThis is a simulated output.';
      case 'rust':
        if (code.includes('Message::')) {
          return 'User someusername123 has email: someone@example.com\nMessage 1: Quitting application\nMessage 2: Moving to position: (10, 20)\nMessage 3: Text message: Hello, Rust!\nMessage 4: Changing color to: rgb(255, 200, 100)\nSum of vector values: 26';
        }
        return 'Rust output would appear here.\nThis is a simulated output.';
      case 'c':
        if (code.includes('findOldest')) {
          return 'C Programming Example\n=====================\n\nNumber array: 0 10 20 30 40 \n\nThe oldest person is:\nName: Bob\nAge: 32\nHeight: 1.80 meters';
        }
        return 'C output would appear here.\nThis is a simulated output.';
      case 'cpp':
        if (code.includes('Shape')) {
          return 'C++ Programming Example\n======================\n\nShape Areas:\n- Small Circle: 28.2743\n- Rectangle A: 20\n- Large Circle: 153.938\n\nOriginal numbers: 5 2 8 1 9 3 7 4 6 \nSorted numbers: 1 2 3 4 5 6 7 8 9 \nFound number 7 at position: 6';
        }
        return 'C++ output would appear here.\nThis is a simulated output.';
      case 'go':
        if (code.includes('Task')) {
          return 'Go Programming Example\n=====================\n\nAll Tasks:\nTask 1: Learn Go [Pending] - Due: 2023-10-17\nTask 2: Build REST API [Pending] - Due: 2023-10-20\nTask 3: Write documentation [Completed] - Due: 2023-10-14\nTask 4: Deploy application [Pending] - Due: 2023-10-22\n\nCompleted Tasks:\nTask 3: Write documentation [Completed] - Due: 2023-10-14\n\nDemonstrating concurrency with goroutines:\nMessage 2\nMessage 1\n\nUsing interfaces:\nTask 1: Learn Go [Pending] - Due: 2023-10-17\nMessage from Admin: Hello, Go!\nTask 3: Write documentation [Completed] - Due: 2023-10-14';
        }
        return 'Go output would appear here.\nThis is a simulated output.';
      case 'lua':
        if (code.includes('factorial')) {
          return 'Person details:\nname: Alice\nage: 30\nskills:\n  1: Programming\n  2: Design\n  3: Communication\n\nFactorials:\nFactorial of 1 = 1\nFactorial of 2 = 2\nFactorial of 3 = 6\nFactorial of 4 = 24\nFactorial of 5 = 120\n\nObject-oriented programming:\nThis is a circle with radius 5\nArea: 78.53975\n\nDemonstrating closures:\nCounter 1: 11\nCounter 1: 12\nCounter 2: 101\nCounter 1: 13\n\nString operations:\nOriginal: Lua programming is fun and powerful!\nLength: 35\nUppercase: LUA PROGRAMMING IS FUN AND POWERFUL!\nFind \'fun\': 20\nReplace: Lua programming is awesome and powerful!';
        }
        return 'Lua output would appear here.\nThis is a simulated output.';
      default:
        return 'Program executed successfully.\nThis is a simulated output.';
    }
  };

  useDocumentTitle("Code Playground - Experiment, Learn and Play with code.")

  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1500]/90 to-[#302600]/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5E4900] rounded-full filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Code <span className="text-[#5E4900]">Playground</span>
            </h1>
            <p className="text-xl text-gray-300">
              Experiment with different programming languages and see your code come to life instantly.
            </p>
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="p-4 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <AlertTriangleIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Disclaimer</h3>
                <p className="text-gray-300">
                  This playground is for educational and entertainment purposes only. Any code you write here will not be stored and will be lost as soon as you leave this page. 
                  Server-side languages (Python, Java, etc.) are simulated and not actually executed.
                </p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
      {/* Playground */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Code Editor Side */}
            <GlassmorphicCard className="overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <label htmlFor="language-select" className="text-white">Language:</label>
                  <select id="language-select" value={language} onChange={handleLanguageChange} className="bg-black/30 text-white border border-[#5E4900]/50 rounded px-3 py-1 focus:outline-none focus:border-[#5E4900]">
                    <option value="html">HTML + CSS + JS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python (Simulated)</option>
                    <option value="java">Java (Simulated)</option>
                    <option value="rust">Rust (Simulated)</option>
                    <option value="c">C (Simulated)</option>
                    <option value="cpp">C++ (Simulated)</option>
                    <option value="go">Go (Simulated)</option>
                    <option value="lua">Lua (Simulated)</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button onClick={resetCode} className="bg-black/30 hover:bg-black/50 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors" title="Reset to default code">
                    <RotateCcwIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                  <button onClick={runCode} className="bg-[#5E4900] hover:bg-[#6E5910] text-white px-4 py-1 rounded flex items-center gap-1 transition-colors" disabled={isRunning}>
                    <PlayIcon className="w-4 h-4" />
                    <span>Run</span>
                  </button>
                </div>
              </div>
              <div className="h-[500px] w-full">
                <Editor height="100%" language={language === 'html' ? 'html' : language} value={code} onChange={setCode} theme="vs-dark" options={{
                minimap: {
                  enabled: false
                },
                fontSize: 14,
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true
              }} />
              </div>
            </GlassmorphicCard>
            {/* Output Side */}
            <GlassmorphicCard className="overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-white font-medium">Output</h3>
              </div>
              <div className="h-[500px] w-full bg-black/20 overflow-auto">
                {output ? <div dangerouslySetInnerHTML={{
                __html: output
              }} className="h-full" /> : <div className="p-6 text-center flex items-center justify-center h-full">
                    <p className="text-gray-400">
                      Click the "Run" button to see your code in action
                    </p>
                  </div>}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
      {/* Tips Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Playground <span className="text-[#5E4900]">Tips</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassmorphicCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Web Development</h3>
              <p className="text-gray-300">
                Try HTML, JavaScript, and TypeScript for web development. HTML includes CSS and JavaScript in a single file, while JavaScript and TypeScript code can be executed with console output.
              </p>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Systems Programming</h3>
              <p className="text-gray-300">
                Experiment with Rust, C, C++, and Go to learn about systems programming concepts. These languages are simulated in this playground but provide realistic examples.
              </p>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Scripting Languages</h3>
              <p className="text-gray-300">
                Python, Lua, and JavaScript offer powerful scripting capabilities. Try writing algorithms, data structures, or simple applications to see how these languages compare.
              </p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </div>;
};
export default Playground;