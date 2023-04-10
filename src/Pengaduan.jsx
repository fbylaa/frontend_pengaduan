import { useState } from "react"
import Form from "./component/Pengaduan/Form"
import Kategori from "./component/Pengaduan/Kategori"
import Img1 from '../image/sosial.jpg'
import Img2 from '../image/pelayanan.jpg'
import Img3 from '../image/jembatanrusak.jpg'
import Img4 from '../image/jalanrusak.jpg'
import Navbar from "./component/Pengaduan/Navbar"

const Pengaduan = ()=> {
    const [active, setActive] = useState(0)
    const handleClick = (e) => {
        setActive(e)
    }
    console.log(active);
    return(
        <div className="border">
            <Navbar/>
            <div className="container mx-auto mt-4 text-center my-5">
                <h3>Silahkan Pilih Pengaduan Anda</h3>
                <div className="flex mt-10">
                    <Kategori nama="Sosial" onClick={() => handleClick(0)}/>
                    <Kategori nama="Pelayanan" onClick={() => handleClick(1)}/>
                    <Kategori nama="Jembatan Rusak" onClick={() => handleClick(2)}/>
                    <Kategori nama="Jalan Rusak" onClick={() => handleClick(3)}/>
                    <Kategori nama="Keluhan Lain" onClick={() => handleClick(4)}/>
                    <Kategori nama="Kritik" onClick={() => handleClick(5)}/>
                    <Kategori nama="Saran" onClick={() => handleClick(6)}/>
                </div>
                <div>
                    {active === 0 && <Form title={'Pengaduan Sosial'} img={Img1}/> }
                    {active === 1 && <Form title={'Pengaduan Pelayanan'} img={Img2}/> }
                    {active === 2 && <Form title={'Pengaduan Jembatan Rusak'} img={Img3}/> }
                    {active === 3 && <Form title={'Pengaduan Jalan Rusak'} img={Img4}/> }
                    {active === 4 && <Form title={'Pengaduan Keluhan Lain'} img={''}/> }
                    {active === 5 && <Form title={'Kritik'} img={''}/> }
                    {active === 6 && <Form title={'Saran'} img={''}/> }
                </div>
            </div>
        </div>
    )
}
export default Pengaduan