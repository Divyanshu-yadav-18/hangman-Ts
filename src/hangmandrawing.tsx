const HEAD = (
    <div style={{height:"50px", width:"50px",borderRadius:"100%", border:"10px solid white", position:"absolute", top:"50px",right:"-30px", marginLeft:"120px",}}/>
)

const BODY = (
    <div style={{height:"100px", width:"10px",background:"white", position:"absolute", top:"120px",right:"0px", marginLeft:"120px",}}/>
)

const RIGHT_ARM = (
    <div style={{height:"10px", width:"100px",background:"white", position:"absolute", top:"150px",right:"-100px", rotate:"-30deg", transformOrigin:"left bottom",}}/>
)

const LEFT_ARM = (
    <div style={{height:"10px", width:"100px",background:"white", position:"absolute", top:"150px",right:"10px", rotate:"30deg", transformOrigin:"right bottom",}}/>
)

const RIGHT_LEG = (
    <div style={{height:"10px", width:"100px",background:"white", position:"absolute", top:"210px",right:"-90px", rotate:"60deg", transformOrigin:"left bottom",}}/>
)

const LEFT_LEG = (
    <div style={{height:"10px", width:"100px",background:"white", position:"absolute", top:"210px",right:"0", rotate:"-60deg", transformOrigin:"right bottom",}}/>
)

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses:number
}
export function HangmanDrawing({ numberOfGuesses}: HangmanDrawingProps){
    return (
        <div style={{
            position:"relative"
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{height:"50px", width:"10px", background:"white", position:"absolute",top:0,right:0,}}/>
            <div style={{height:"10px", width:"200px", background:"white", marginLeft:"120px",}}/>
            <div style={{height:"400px", width:"10px", background:"white", marginLeft:"120px",}}/>
            <div style={{height:"10px", width:"250px", background:"white",}}/>
        </div>
    )
}