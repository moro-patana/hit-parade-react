import React, {useState, useRef, useEffect} from "react"
function UseHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }

     useEffect(() => {
         const instance = ref.current
        instance.addEventListener("mouseEnter", enter)
        instance.addEventListener("mouseLeave", leave)
        return () => {
            instance.removeEventListener("mouseEnter", enter)
            instance.removeEventListener("mouseLeave", leave)
    
        }
    }, [])
   return [hovered, ref]
}
export default UseHover;