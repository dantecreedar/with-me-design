import { AiFillCloseCircle } from "react-icons/ai"; 
import Whatsapp from './Whatsapp';
import DATA from "../../api/data.json"
import { useEffect, useState } from 'react';


function Product() {
    //Setear los hooks useState
    const [ users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    //funciones para traer datos de la api
    const URL = "/src/api/data.json";

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

    const results = !search ? users : users.filter((dato)=>
        dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
    
    useEffect(()=>{
        showData();
    }, [])


    function Modal() {
        return(
            <>
                
            </>
        )
    }
    return (

        <div className='text-neutral-700'>
                <div className="p-3">Buscas Oferta</div>
                {/* buscador */}
                <div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 bg-slate-100 m-3">
                            <input type="text" className="grow bg-slate-100" placeholder="Buscar" value={search} onChange={searcher}/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
            <div className="flex flex-wrap justify-center bg-white rounded-2xl">
                {/* card */}
                {
                    DATA && results.map( (user) => 
                        <div className="sm:card shadow-md m-3 border rounded-2xl" key={user.id}>
                            <div className="sm:flex">
                                
                                <div className="p-5">
                                <span className="indicator-item badge badge-primary p-3 text-white">Nuevo</span> 
                                    <h2 className="card-title p-2"> {user.name} !</h2>
                                    <p className="text-3xl p-5"> {user.title} </p>
                                    <p className="text-xl"> {user.offer} </p>
                                    {/* <Modal/> */}

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="bg-white transition-all hover:bg-orange-400 text-xl p-2 hover:text-white rounded-lg" onClick={()=>document.getElementById('my_modal_1').showModal()}> Solicitar </button>
                                            <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box bg-white">
                                                <h3 className="font-bold text-lg"> {user.title} </h3>
                                                <img className="md:w-26 rounded-xl" src={user.image} alt="Album"/>
                                                <p className="py-4">Puedes Solucitarlo el Pedido! </p>
                                                <p className="text-sm">Comunicate al Whatsapp y te indicaremos como solicitar tu producto</p>
                                                <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="text-red-500"><AiFillCloseCircle /></button>
                                                </form>
                                                </div>
                                            </div>
                                        </dialog>
                                </div>

                                <img className="md:w-32" src={user.image} alt="Album"/>
                            </div>
                        </div>
                    )
                }
            <Whatsapp/>
            </div>
        </div>
    )
}

export default Product