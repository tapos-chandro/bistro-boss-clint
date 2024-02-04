import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch('https://bistro-boss-server-5u30.onrender.com/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        })
    },[])
    return [menu, loading]
};

export default useMenu;