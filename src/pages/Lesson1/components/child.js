const Child = (props)=>{

    return (
    <div style={{border:"1px solid black"}}>
        <div>I am a {props.props.name} component.</div>
        <div>I am a {props.props.age} years old</div>
        <div>I am a {props.props.gender}</div>
    </div>)

}

export default Child;