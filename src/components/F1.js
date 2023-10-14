import "./styles.css";

function F1()
{
const myStyle = {
color:"blue",
backgroundColor:"orange"
}
return(
<div class="c1">
<h1 style={{color:"red"}}>Inline styling</h1>
<h2 style={myStyle}>Internal styling</h2>
</div>
)
}
export default F1;
