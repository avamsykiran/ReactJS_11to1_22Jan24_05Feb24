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

    Shadow DOM / Virtual DOM

        is a temporary DOM copy maintaiend by React.
        any rendering will resutl in regerating the ShadowDom first and this is
        very less costly as it is not directky linked to the browser rendering.

        After the entire Shadow DOM is regenerated, it is compred with the actual DOM
        and the differecnes are identified and then the actual dom is
        managed to suite the differences. Thus it is less costly tan regeneraing the entire
        actual DOM.

        "key" is an attribute that is expected to have unique value for each record is
        used to compare records from showdow dom with records on actual dom.

    Class Component Life cycle Methods

        constructor()               //initilizing state
            ↓
        render()                    //generate and return the html-dom
            ↓
        componentDidMount()         //execute any task immidiately after the first-render()

                /***************************************************************/
        |-----→        any sort of event handling can happen
        |               as a part of it 'setState()' may get called
        |       /***************************************************************/
        |                        setState() is if invoked
        |                           ↓
        |                        render()               //generate and return the html-dom
        |                           ↓
        |                       componentDidUpdate()    //executeing any tasks after each render()
        |                           ↓
        -----------------------------                                    

    React Hooks

        A react hook is a pure function that provides additional enchancement to a function componenet.

        a hook must be invoekd in the top-most liens of code of a function component.

        useState Hook

            let [reader,writer] = useState(fieldInitialValue);

            example:
                let [empId,setEmpId] = useState(101);
                let [fullName,setFullName] = useState("Vamsy");
                let [skills,setSkills] = useState(["java","angular","reactjs"]);
                let [address,setAddress] = useState({flatNo:9015,area:"MVV City",city:"Visakhapatnam"});

        useEffect Hook

            useEffect(() => {},[]);
                the callBack is equivalent to componentDidMount(), the callBack is executed only once that too
                after the first render of the component.

            useEffect(() => {},[field1,field2,...]);
                the callBack is equivalent to componentDidUpdate(), the callBack is executed after every render of the component but only when any of the fields in the dependency array had their values changed.

            useEffect(() => {});
                the callBack executes unconditionally after every render.

    React Hook form

        npm i react-hook-form

        useForm({defaultValues}); return an object that has
            a register method
            a handleSubmit method
            a setValue method
            a reset method
            a formState: {errors} to pick errors

    State Management Using redux and react redux.

        npm i redux react-redux 

        redux is a state managment library that can handle state centrally and isolatedly
        for an app.

            store           is a global object that has all the data/state of the application.
                            an app has one and only one store.

                            let myStore = createStore(myReducer);

            reducer         is a user defiend pure javascript function. it takes the currentState and
                            an action as params and returns the modifeid state.

                            const myReducer = (state,action) => {

                                //based on the action, state is modified

                                return modifiedState;
                            }

            action          is a object that has a payload and an action type.
                            'type' is the operation to be executed,
                            'payload' is the data needed for the operation to take place.

                            const action1 = {type:"ADD",emp};
                            const action2 = {type:"REMOVE",empId:101};

            dispatch        is a built-in method used by a component to send an action to the reducer.

                            dispatch(action1);

        react-redux is the integration library for redux into react.

            <Provider></Provider>

                is used to wrap the store on to the top-level-component of our Application.

                    <Provider store={myStore}>
                        <App />
                    </Provider>

            useSelector()

                is a hook that is used to select only the requried part of the global state
                into our component.

                let emps = useSelector( state => state.emps );
                let empsCount = useSelector( state => state.emps.length );

            useDispatch()

                is going return a 'dispatch' method related to the current store.

                const dispatch = useDispatch();

        Using these libraries, we can eliminate state management from components.

        store (all state) →------------------------------------------
        ↑                               |                           |
        |                               ↓                           ↓
        |                               |                           |
        |                               useSelector()              useSelector() 
        |                               ↓                           ↓ 
        |                               Component1              Component2
        |                               |                           |
        |                               | dispatch = useDispatch()  | 
        |                               | dispatch(action)          | dispatch = useDispatch()
        |                               |                           | dispatch(action)
        |                               |                           |
        ↑                               |                           |
        | modifedState                  ↓                           ↓
        reducer ←-----------------------←---------------------------←

    Fake Rest-Api using json-server

        md contacts-api
        cd contacts-api
        npm init -y
        npm i json-server@0.17.4

        create a contacts-api/data.json and populate it with hypothetical data
        modify contacts-api/package.json file to put "start":"json-server --port 9999 --watch ./data.json"

        npm start

    Rest-Api calls using axios

        npm i axios

        axios.get(endPoint) returns Promise
        axios.delete(endPoint) returns Promise
        axios.post(endPoint,reqBody) returns Promise
        axios.put(endPoint,reqBody) returns Promise

    Thunk Middleware to handle asynchronous calls

        npm i redux-thunk

        Generally action are objects 
        But a thunkAction is a function that sits between component and reducer and
        keeps dispatching action objects to the reducer alongside an asynchronous call.

        store (all state) →------------------------------------------
        ↑                               |                           |
        |                               ↓                           ↓
        |                               |                           |
        |                               useSelector()              useSelector() 
        |                               ↓                           ↓ 
        |                               Component1              Component2
        |                               |                           |
        |                               | dispatch = useDispatch()  | 
        |                               | dispatch(action)          | dispatch = useDispatch()
        |                               |                           | dispatch(thunkAction)
        |                               |                           |
        ↑                               |                           ↓
        | modifedState                  ↓         -------[Thunk Action Function]------    
        reducer | ←---------------------←         |                                  |
                | ←-------------------------------|    dispatch(waitActionObj)       |
                |                                 |    axiosCall                     |
                | ←-------------------------------|    ifOK, dispatch(dataActionObj) |
                | ←-------------------------------|    ifERR, dispatch(errActionObj) |
                                                  |                                  |
                                                  ------------------------------------
    
    React Routing

        npm i react-router react-router-dom --save

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<C1 />} />
                    <Route path="/a" element={<C2 />} />
                    <Route path="/b" element={<C3 />} />
                    <Route path="/c/:pathVariable" element={<C4 />} />
                </Routes>

                <Footer />

            </BrowserRouter>


            <Link to"" ></Link>       instead of <a></a>

            <Navigate to="" />  