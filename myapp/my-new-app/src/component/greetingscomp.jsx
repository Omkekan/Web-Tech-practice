const GreetingComp =()=>{

    const greeting =()=>{
        window.alert("Nice to Meet You");
    }
    const welcome = ()=>{
        window.alert("Welcome welcome");
    }
    return <div>
        <h2> This is a greetings comp</h2>
        <button type="button" onClick={()=> greeting()}>Click me</button>
        <h2 onMouseOver={()=>welcome()}> Hover on me</h2>
    </div>
}

export default GreetingComp;