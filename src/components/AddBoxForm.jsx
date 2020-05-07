import React, { useRef } from "react"

const AddBoxForm = props => {
    const {boxes, setBoxes} = props

    let box = {
        color: "",
        width: "100px",
        height: "100px",
    }

    const refColor = useRef("")
    const refDimensions = useRef("")

    const onColorChange = e => {
        box.color = e.target.value
    }

    const onDimensionChange = e => {
        const v = parseInt(e.target.value, 10)
        if (v <= 100 && v >= 0){
            box.width = `${e.target.value}px`
            box.height = `${e.target.value}px`
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        setBoxes([...boxes,box])
        refColor.current.value = ""
        refDimensions.current.value = null
        refColor.current.focus()
    }


    return(
        <div className="row">
            <div className="col-10 offset-1">
                <form onSubmit={onSubmit}>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Color:</label>
                        <div className="col-3">
                            <input onChange={ onColorChange } ref={ refColor } type="text" className="form-control"></input>
                        </div>
                        <label className="col-3 col-form-label">Height/Width: </label>
                        <div className="col-2">
                            <input onChange={ onDimensionChange } ref={ refDimensions } type="number" className="form-control"></input>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary btn-md btn-block">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBoxForm