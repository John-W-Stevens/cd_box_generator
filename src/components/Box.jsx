import React from "react"

const Box = props => {
    // expect props.box
    const {color, width, height} = props.box;


    console.log(props)

    console.log(color, width, height)

    return(
        <div style={{
            backgroundColor: color,
            width: width,
            height: height,
            display: "inline-block",
            border: "1px solid lightgrey",
            borderRadius: "5px",
            marginLeft: "5px",
            marginRight: "5px",
        }}></div>
    )
}

export default Box