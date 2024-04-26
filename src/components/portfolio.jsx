import React from "react"

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1000px] px-3 pt-3 pb-20">
        <div className="flex flex-col lg:flex-row justify-between mb-[50px]">
          <div
            className="order-2 lg:order-1 mt-5"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h4 className="text-secondary font-secondary text-[40px]">
              Recent Work
            </h4>
            <div className=" text-gradient font-primary max-w-[700px] mx-auto text-[20px]">
              Berikut adalah proyek proyek yang telah saya kerjakan baik di
              kampus atau proyek mandiri saya
            </div>
          </div>
          <div
            className="order-1 lg:order-2  text-center"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h2 className=" text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              07
            </h2>
            <div>Complete Projects</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (307).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web</h4>
                  </div>
                  <p>Aplikasi Pemesanan Sony Nursery</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Profil Web.jpg" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web Blog</h4>
                  </div>
                  <p>Asian Tour</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (310).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web Blog</h4>
                  </div>
                  <p>Pramuka SMAN 3 Kota Probolinggo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (308).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web </h4>
                  </div>
                  <p>Aplikasi Web Koperasi Simpan Pinjam KSP Makmur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (311).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web </h4>
                  </div>
                  <p>Aplikasi Pendaftaran Sekolah</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (312).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Web </h4>
                  </div>
                  <p>Aplikasi Rental Mobil Aswaja Trans</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white w-full h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/Screenshot (313).png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-5">
                    <h4 className="text-gradient">Dekstop </h4>
                  </div>
                  <p>Aplikasi Kasir Rental Mobil Aswaja Trans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
