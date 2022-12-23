import React from 'react'
import "./Block.css"
import {cn} from "@bem-react/classname"

const Block = () => {

    const cnBlock = cn("Block")

  return (
    <div className={cnBlock()}>
        <li className={cnBlock("DateManufacture")}>
            20
        </li>
        <li className={cnBlock("Month")}>
            24
        </li>
        <li className={cnBlock("Percent")}>
            100%
        </li>
        <ul className={cnBlock("Cost")}>
            <li className={cnBlock("Cost", {color:"blue"})}>
            30000 руб
            </li>
            <li className={cnBlock("Cost", {color: 'red'})}>
            -24000 руб
            </li>
            <li className={cnBlock("Cost", {color: 'green'})}>
               6000 руб
            </li>

        </ul>



    </div>
  )
}

export default Block