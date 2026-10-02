const MydetailsComp=(props)=>{
    return <div><h2> this is a function component</h2>
            <p> Fname:{props.Fname},Lname:{props.Lname},Contact:{props.Contact},
                Gender:{props.Gender},Address:{props.Address}
            </p>
            </div>;
            
}

export default MydetailsComp;