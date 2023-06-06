import { Inertia } from '@inertiajs/inertia'
import { HiTrash } from "react-icons/hi2";
import React from 'react'
import Swal from 'sweetalert2'
export default function Delete({ url, id, label }) {

    // define method destroy
    const destroy = async (id) => {
        Swal.fire({
            title: 'Are You Sure?',
            text: "Your Data Can't Recovery!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete It!',
            cancelButtonText: 'Nope'
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`${url}/${id}`)

                Swal.fire({
                    title: 'Success!',
                    text: 'Data has been deleted!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <>
            <button onClick={() => destroy(id)} className="flex items-center gap-1 py-2 px-4 rounded-lg bg-rose-200 font-semibold text-sm shadow-sm hover:bg-rose-300">
                <HiTrash size={'16'}/> {label}
            </button>
        </>
    )
}
