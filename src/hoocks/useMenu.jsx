import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() =>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    const axiosPublic = useAxiosPublic()


    const { isPending,  data:menu , refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: () =>
          axiosPublic.get('/menu').then(res =>
            res.data
          ),
    })
    return [menu, refetch, isPending]
};

export default useMenu;