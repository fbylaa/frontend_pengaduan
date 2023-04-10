import { useState } from 'react'

const Form = ({title, img}) => {
    const [notif, setNotif] = useState(false)
    const handleMessage = () => {
        setTimeout(() => {
            console.log('pesan terkirim');
            setNotif(true)
        }, 1000)
    }
    return (
        <form action="#" className='bg-gray-300 w-1/2 py-5 mx-auto rounded-md my-5'>
            {notif &&
                <div className='bg-green-400 p-3 rounded-lg w-full'>Pesan Terkirimmmm</div>
            }
            <div className='my-4'>
                <h1 className='text-3xl'>{title}</h1>
            </div>
            <div>
                <img src={img} className='w-1/4 block mx-auto' alt="" />
            </div>
            <div className='w-2/3 mx-auto'>
                <div className='mb-3'>
                    <label htmlFor="" className='block text-left mb-2'>Nama :</label>
                    <input type="text" placeholder='Nama' className='p-2 border-black rounded-lg w-full' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='block text-left mb-2'>Kendala :</label>
                    <input type="text" placeholder='Kendala' className='p-2 border-black rounded-lg w-full' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='block text-left mb-2'>Lokasi :</label>
                    <input type="text" placeholder='Lokasi' className='p-2 border-black rounded-lg w-full' />
                </div>
                <button onClick={handleMessage} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Kirim</button>
            </div>
        </form>
    );
}
export default Form;