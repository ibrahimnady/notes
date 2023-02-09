import React from 'react'
import '../Styles/Home.css'
import Swal from 'sweetalert2'
import AddNote from './AddNote';
import OpenNote from './OpenNote';
import EditNote from './EditNote';


export default function Home({ id }) {

    //function delete one product
    const deleteProduct = (product) => {
        Swal.fire({
            title: `Are You Sure Delete "${product.title}" `,
            showCancelButton: true,
        }).then((data) => {
            if (data.isConfirmed) {
                const URL = `http://localhost:9000/products/${product.id}`;
                fetch(URL, {
                    method: "DELETE",
                }).then((res) => res.json()).then(() => {

                });
            } else {
                console.log("error");
            }
        });
    }

    return (
        <>
            <div className='HM-bg'>
                <div className=' container-fluid text-white text-center'>
                    <div className="row ">
                        {/* note's */}
                        <div className=" col-sm-12 col-md-3">
                                    <div className='HM-headName w-75'>
                                        <h1 className=''>header</h1>
                                        <span className='HM-Date'>Date & Time</span>
                                    </div>
                            <div className='HM-bg-note w-75 text-center d-flex justify-align-content-between align-align-content-center'>
                                <div className='w-100'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsam. Obcaecati consectetur aperiam eum sint, at praesentium adipisci quaerat commodi quos, doloremque aliquam, architecto asperiores laborum debitis natus ea recusandae?</p>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-primary " type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#openNote">
                                                <i className="fa-solid fa-folder-open me-3"></i>
                                                Open
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" className=" btn " data-bs-toggle="modal" data-bs-target="#editeNote">
                                                <i className="fa-solid fa-pen me-3"></i>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={deleteProduct} type="button" className=" btn " >
                                                <i className="fa-solid fa-trash me-3"></i>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Modal Add Note -->  */}
                <AddNote />
                {/* <!-- Modal open Note -->  */}
                <OpenNote id={id} />
                {/* <!-- Modal edit Note -->  */}
                <EditNote id={id} />

            </div>
        </>
    )
}
