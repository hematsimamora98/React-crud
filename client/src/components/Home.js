import React, {useState,useEffect} from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
import {MdDeleteOutline, MdOutlineModeEdit} from "react-icons/md"

export const Home = () => {

    const [items, setItems]= useState([])
    const getItems=()=>{
        axios({
            method: "GET",
            url: "http://localhost:4321/items"
        }).then(res => {
            setItems(res.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteHandler = async (id) => {
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then(async(result) => {
                if (result.isConfirmed) {
                    await axios({
                        method: "DELETE",
                        url: `http://localhost:4321/items/delete/${id}`,
                    });
                    getItems()
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              });
            
        } catch (err) {
            console.log(err);
        }
    };

useEffect(() => {
    getItems()
}, []);

    return (
        <div className="container">
            <h3>Home Page</h3>

            <table className="table table-boordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,i)=>{
                        const{id,name,category,price,stock}=item;
                        return(
                            <tr key={id}>
                                <td>{i+1}</td>
                                <td>{name}</td>
                                <td>{category}</td>
                                <td>Rp. {price}</td>
                                <td>{stock} pcs</td>
                                <td>
                                    <button onClick={() => deleteHandler(id)}
                                        className="btn btn-outline-danger">
                                            <MdDeleteOutline className="me-1"/>
                                        Delete
                                    </button>
                                    <button className="btn btn-outline-info">
                                        <MdOutlineModeEdit className="me-1"/>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;
