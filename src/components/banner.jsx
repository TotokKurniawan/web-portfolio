import { TypeAnimation } from "react-type-animation"
import React from "react"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 flex items-center justify-center"
    >
      <div className="w-full text-center">
        <div className="block text-center font-secondary font-black text-[-30px] mx-auto">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Totok Kurniawan",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Mahasiswa",
                2000,
                "Politeknik Negeri Jember",
                2000,
                "Programer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary ml-3 "
            />
          </div>
        </div>

        <div className="max-w-[750px] text-center mx-auto mt-5">
          Saya adalah seorang mahasiswa yang bersemangat dalam menciptakan
          solusi teknologi informasi yang inovatif. Dengan pengalaman yang telah
          saya peroleh, saya berkeinginan untuk terus mengembangkan perangkat
          lunak dan mengelola proyek-proyek yang menantang. Saya berkomitmen
          untuk memberikan kontribusi yang berarti bagi setiap proyek yang saya
          jalankan, karena saya percaya bahwa dengan dedikasi dan keterampilan
          yang saya miliki, saya dapat memberikan dampak positif yang signifikan
        </div>
      </div>
    </div>
  )
}
