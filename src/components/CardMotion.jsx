import * as React from "react"
import { motion, useCycle } from "framer-motion"

/**
 * An example of animating the boxShadow property.
 */

const style = {
    width: 100,
    height: 600,
    background: "white",
    opacity: 1,
    boxShadow: "5px 5px 50px #000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
}

export const CardMotion = () => {
    const [elevation, cycle] = useCycle(
        { boxShadow: "5px 5px 50px #152486" },
        { boxShadow: "5px 5px 5px #000" }
    )

    return (
        <motion.div
            animate={elevation}
            transition={{ duration: 2 }}
            onTap={() => cycle()}
            style={style}
        />
    )
}