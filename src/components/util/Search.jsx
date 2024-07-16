import { useEffect, useState } from "react"
import IMAGENES from "../Api/data.json"
/* function Buscar() {
    return(
        <>
            <div>
                <label className="input input-bordered flex items-center gap-2 bg-slate-100 m-3">
                    <input type="text" className="grow bg-slate-100" placeholder="Buscar" value={search}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </>
    )
} */


function Search() {
        //Setear los hooks useState
        const [ users, setUsers] = useState([]);
        const [search, setSearch] = useState("");
    
        //funciones para traer datos de la api
        const URL = "/src/Api/data.json";

        const showData = async ()=>{
            const respuesta =   await fetch(URL);
            const data = await respuesta.json();
            console.log(data);
            setUsers(data);
        } 
        
        //meotdo de busqueda

        /* caputar datos con search */
        const searcher = (e) => {
            setSearch(e.target.value);
           /*  console.log(e.target.value) */
        }

        //metodo filtrado - 1 por titulo
        /* let results = [];
        if(!search)
        {
            results = users

        }else{
            results = users.filter((dato)=>
            dato.title.toLowerCase().includes(search.toLocaleLowerCase())
            )
        } */
        //metodo filtrado - 1 por titulo
        const results = !search ? users : users.filter((dato)=>
            dato.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
        
        useEffect(()=>{
            showData();
        }, [])

        //renderizamos la vista
    
    return (
        <div>
            <div className="p-3">Buscas Escuela</div>
            {/* buscador */}
            <div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 bg-slate-100 m-3">
                        <input type="text" className="grow bg-slate-100" placeholder="Buscar" value={search} onChange={searcher}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>

            <div className="">
                <div className="grid md:grid-cols-2  gap-2 border shadow-md row-span-5 bg-emerald-50 p-5">
                    {
                        IMAGENES && results.map( (user)=> 
                            <div key={user.id} className="border bg-white">
                                <div>
                                    <div className=""> 
                                        <div className="text-2xl p-5">{user.title} </div>
                                        <div className="flex justify-center p-3"><img src={user.image} alt="" className="md:w-5/12"/></div>
                                        <div className="text-center p-5"> <a href={user.url} className="p-5 backdrop-blur-lg hover:text-blue-500 md:text-sm cursor-pointer" target="_blank" rel="noreferrer">{user.url}</a> </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search