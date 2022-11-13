# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX is the syntax that is used in React to write HTML and JavaScript. It appears to be very similar to both languages and may appear as a blending of the two. For those that haven't worked in React, it may seem quite unfamiliar, but once you get the hang of it, you will see why React developers prefer to write React applications in JSX - for its structure and simplicity. One syntax difference between HTML and JSX is that in HTML you usually will put elements and information within a <div> but in JSX you use React Fragments <></>. Examples below.

HTML way
<div>
    <p>Lorem Ipsum</p>
</div>

React way
<>
    <p>Lorem Ipsum</p>
</>

Note: you can still use divs inside of React Fragments like so:

React way
<>
    <div>
        <p>Lorem Ipsum</p>
    </div>
</>

Researched answer:
JSX, or JavaScript Syntax Extension, is the syntax that is used to render HTML elements in a React application's user interface and write HTML. It both looks like HTML and JavaScript. While it is not necessary to use JSX in a React app, it is recommended for ease of use. Since JSX is not pure HTML or JavaScript, it has to be compiled before the browser can understand what needs to be rendered and displayed. One of the most common ways to compile JSX is to use a JavaScript runtime compiler called Babel. One difference between HTML and JSX is that self closing tags need forward slashes in them.


2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer:
Yarn is a Javascript package manager. With the Yarn command you can create applications and download packages that you can use for your application. You can also use the Yarn command to run a server. When you run the command yarn in the terminal, you get a folder called node_modules, a package.json file, and a yarn.lock file. As you run the yarn command to add more packages to your app, your package.json file will get updated to show what packages are installed in your project and what version of that package you are running/downloaded. 

Researched answer:
Yarn is an open-source JavaScript package manager made by Facebook in collaboration with other companies like Google. Yarn is an alternative to the popular NPM package manager but focused more on security and performance. Like NPM, Yarn handles dependencies between packages so that your application can run smoothly without conflicts in versions between different libraries and/or frameworks. When using Yarn to handle the dependencies in your app, a yarn.lock file will initially be created and updated as you download more components or libraries into your application. The yarn.lock file directly corresponds to the dependencies listed in the package.json file (also initially created). Yarn.lock locks those dependencies so that your app can work properly and versions of those libraries or frameworks still all work in harmony with eachother as you continue to add more features into your app with other libraries and frameworks.


3. What is an anonymous function in JavaScript?

Your answer:
An anonymous function in Javascript is a function that has no parameters. If you just want your function to do something but not interact with any data, use an anonymous function. Anonymous functions deal with behavior. Example below.

const myAnonymousFunction = () => {
    return "Hello, World"
}
console.log(myAnonymousFunction())
// Output: Hello, World


Researched answer:
An anonymous function, or function expression, is a function that has no name associated to the function. You simply set a variable to equal that function, but that function, instead of having a name, will just have the word 'function'. One important thing to note about anonymous functions is that they are hoisted, or able to be called even though the function call is before the function expression. If I were to call the anonymous function below assigned to the variable myGreeting before the function, I should not get an error: Example:

console.log(myGreeting())
// Output: Hello, World
const myGreeting = function() {
    return 'Hello, World'
}

Here is an anonymous function without a variable declaration.

(function () {
    console.log('Hello, World')
})

To access this function, you will need to assign the function to a variable like below.

const myGreeting = function() {
    return 'Hello, World'
}


4. What is the difference between state values and props in React?

Your answer:
In React, state values are variables that can hold data that either a developer hard codes or a user inputs themselves. State is a temporary storage of information. Once you hit refresh on a page, whatever information that was passed or stored is gone. Props, short for properties, is the way in React that information gets passed from a parent component to a child or nested component. Everything in React is done by components. Props are the unidirectional way of handling data from say the App.js file to a component(ex. LikeButton.js). Because props only flow in one direction like a river from the parent component to the child component, there needs to be a way for child components to also communicate with other nested components and even the parent component. The way by which we can achieve this is by using functional props. Functional props are functions that can be called from other components, thus allowing the ability to pass information multidirectionally.


Researched answer:
State and Props(or properties) both do different things with data. State holds the data in a temporary state in a component. Components use Props to funnel data down to nested components. Props flow information down to other components like a river. The data or information in Props shouldn't change as they go down the pipeline. However, components use State to change data or information by user interaction into the component itself. State data doesn't flow in any direction but stays within a component.


5. What is the DOM?

Your answer:
The DOM or Document Object Model is the way developers can see how the websites they create, the users of those websites, and the browser all interact. The DOM makes it so that the user of a website can interact with different elements of a page. It is also critical to the developer as they can use the DOM to manipulate elements on a page.


Researched answer:
The DOM is the document object model. The DOM represents objects in a webpage. Each element in a webpage is considered a node. The whole of the webpage can be seen as a tree of nodes or elements. As a developer, you can interact with the DOM and manipulate those individual nodes to present different things on a page and make it interactive. In order to interact with the DOM, you need a scripting language. JavaScript, a scripting language, is used to interact with the DOM. 


6. STRETCH: Which is the difference between a div and a span?

Your answer:
The difference between a span and a div tag is that a span tag is just used for styling text. A div tag, on the other hand, is used to seperate elements in a document, to contain information in, and to apply styling with CSS.

Researched answer:
The main difference between a div and a span has to do with what each of them do. A div is traditionally used to manipulate blocks of html code. On the other hand, a span tag is traditionally used to manipulate inline level code or a single element within a block.

<div style="width:300px;>
    <p><span style="font-weight:semi-bold;>Hello, World.</span> This is some sample text.</p>
</div>


## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
Because computer programs can become quite intricate, the idea of objects was introduced into programming languages so that there could be a seperation of concern between one object and another. Each object can contain some data. If you were to change one object, another object does not have to be affected. This idea significantly can prevent bugs and other errors in your program.


2. Ruby: 
Ruby is a backend, object-oriented, dynamically-typed language that was created for developers to have joy while coding. The syntax of the language is closer to how we speak than other programming languages. This can be perceived as being more fun to code for some developers. When you combine Rails, a web framework, with the Ruby language you can create powerful web applications that are organized in the MVC or Model View Controller structure. You can also just use Rails to create databases and APIs that can intereact with front-end, SPA frameworks like React or Vue.

3. Implicit return:
In Javascript, if you were to create a function, and call that function, if there were no return, the interpreter would return 'undefined.' That is because in JavaScript every function requires a return statement. However, in Ruby returns are implicit. If the developer does not include a return statement in a function, the interpreter will still run the function as if a return function were provided. In other words, the return statement in Ruby is optional and implicit.

4. Ruby blocks: 
A Ruby block is a piece or block of code that is an anonymous function. Such a function can get passed into a method and is characterized by the do and end keywords. 

5. Ruby hashes:
A Ruby hash is a set of key value pairs. The values of these pairs each have a unique key that can be referenced later. The hash syntax looks similar to a JavaScript object and both are basically the same idea in that both are a collection of data in the form of key value pairs.

A JavaScript Object:

const person = {
  gender: "male",
  name: "Philip",
  mood: "happy"
}

A Ruby Hash:

person = {
  "gender" => "male",
  "name" => "Philip",
  "mood" => "happy"
}