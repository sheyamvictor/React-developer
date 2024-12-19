const title = React.createElement('div', { id: "parent" }, [

    React.createElement('div', { id: "child" }, [
        React.createElement('h1', { id: "title" }, "Welcome"),
        React.createElement("h2", { id: "title" }, "To Learn Coding"),
    ]),

    React.createElement('div', { id: "child2" }, [
        React.createElement('h1', { id: "title" }, "Hello World!"),
        React.createElement("h2", { id: "title" }, "React Developer :)"),
    ])

]);

console.log(title);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(title)