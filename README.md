ReactJS
------------------------------------------------

    Pre-Requisites
        HTML 5
            All HTML DOM elements, Forms, Form Validation Attributes, HTML Media Elements, HTML 5 API
        
        CSS 3
            Selectors, CSS-Properties (box model properties, font, text, list and table related properties)
        
        Javascript  (ES 6)
            Javascript Objects and classes - Math, String, Date
            Functions, Closures, Arrow Functions, Call Backs
            DOM API - window, document, 
            OOPs - Class and Object, constructor, methods, static methods
            ES6 - Modules (import and export), Promise, async and await, Template literals, spread operator
            Arrays and Array prototype functions like map,reduce,foreach ..etc.,

        Bootstrap 5 (optional)

    Lab SetUp
        NodeJs      DevPlatform
        VSCode      IDE
        Chrome      Browser / Client

        NodeJS supports execution of development tools like building tool, testing tool,
        pakcage / dependency management ...etc.,.

        But the final app is executed in a browser.

    Working With NodeJS

        npm as a build tool (node package manager) (package refers to one JS project).

        To create a JS project on NodeJS
            md proj-name
            cd proj-name
            npm init -y

        'package.json' is the buidl file for npm.

        npm i package-name --save
        npm i package-name --dev-save
        npm i -g package-name 
        npm uninstall package-name --save

        'node_modules' folder that hosues all the downloaded dependencies.

        'npm i' will get back the 'node_modules' folder along all the requried
        dependencies as per the list of dependencies in the package.json.

    ReactJS

        is a SPA (single page application) framework based on JavaScript.

        An spa is a web application that has only one html page (index.html).

        The javascript attached to the application will generate html dynamically
        on the client itself and will update the content of index.html from time to time. 
        Which means no html needs to generated on the server or transfer from the server
        to the client or unload and reload of a page wont be needed.

        like many othe SPA-frameworks, ReactJS also works based on html extendability.

        HTML extendability menas that we can create our own html elements in ReactJS.

        Html elements created in ReactJS are called ReactJS Components.

    Creating ReactJs App

        Create an node project
        install all the requried react-scripts into the project
        configure the react-scripts and build configs.

        (or)

        npm i -g create-react-app
        create-react-app app-name

        (or)

        npx create-react-app app-name

    React Components

        Function Components

            a function component is any function that returns an html-element or another react-component.

            const Header = () => (
                <header>
                    <h1>HR Automation Portal</h1>
                </header>
            );

            const Dashboard = () => (
                <div>
                    <Header />
                    <h2>This is my dashboard</h2>
                </div>
            );

            <Dashboard />

        Class Components

            is a javascript class that extends Component from 'react.js' module

            React.Component provides
                (a) state
                (b) setState()
                (c) render()
                (d) and a few more life cycle methods


            import { Component } from 'react';

            class EmployeesList extends Component {
                constructor(){
                    super();
                    //state contains all the data needed to be managed by the component
                    this.state = {
                        title:"My HR App"
                    }; 
                }

                render(){ //it is this mehtod that gives the html dom of the component.
                    return (
                        <div>
                            <h2>{this.state.title}</h2>
                        </div>
                    );
                }
            }

            <EmployeesList />

        High Order Components

            is component that returns another component.

    JSX - JavaScript eXtended

        JSX is a html embeded JavaScript.

        .js

            let myPara = docuemtn.createElement("p");
            myPara.innerText = "Hello! this si a para";

            let friends = ["Vamsy","Rahul",'Shrma","Avinash"];

            let myList = document.createElement("ol");
            for(let i=0;i<friends.length;i++){
                let myLI = document.createElement("li");
                myLI.innerText = friends[i];
                myList.append(myLI);
            })

        .jsx

            let myPara = <p>Hello! this is a para</p>;

            let friends = ["Vamsy","Rahul",'Shrma","Avinash"];

            let myList =  ( 
                <ol>
                    {  friends.map( f => <li>{f}</li> ) }    
                </ol> 
            );


        JSX Rules

            1. JSX is case sensitive
            2. use all html in lower case only 
            3. any react components are expected to be initial capitals.
            4. attribute name shoudl follwo camelCase
            5. 'class' is not a valid attribute as it is a keyword in JavaScript and use 'className'
                instead.

            
    state, render(), setState()

        state is the field inehreted from React.Component and is used
        to hold all the data the component needs to work with. state whenever
        gets modified, will invoke the 'render()' and updates the html-content on the
        screen.

        state is immutable. (we can not change any part of the state).

        state is always replaced using 'setState()' method.

        'setState()' is going accept full or partial state.

    Working With Forms

        Controlled Form Component

            Each input element of a form is attached to a 'ref' variable.

            a 'ref' variable is a variable created outside the component state.

            whenever the form is submitted, we ahve collecte data from all the 'ref' 
            varaibles .

            'ref' variables are very costly on the memory and they actually have]
            a different purpose.

        UnControlled Form Component

            Each input element is attached to a field in the 'state'.

            As state is immutable, the input fields are not editable.

            We will use onChange event of the input field to receve the new value
            into the respective state field.

            When the form is submitted, the data is already inside the state.

            This ensures 'single source of truth'.

    ReactJS props

        'props' stand for proeprties is used to ship data from parent ot child or vice-versa.

        a parent component can pass data through attributes of a child component.
        And a child component can access that data through 'props'

    Integrating Bootstrap with ReactJS

        npm i bootstrap

        import bootstrap.bundle JS and bootstrap.min.css CSS file into index.js

    