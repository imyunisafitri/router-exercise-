import { Link } from "react-router-dom";
import SubBanner from "../components/SubBanner";
import Footer from "../components/Footer";
const Stories = () => {
  return (
    <div className="stories">
      <SubBanner title="STORIES"/>
      <div className="stories-content">
        <div className="stories-card">
          <p>1996</p>
          <h2>Lahirnya Miracle</h2>
          <p>---</p>
          <p>
            Dr. Lanny Junarti bersama dr. Jopy Wikana, mewujudkan mimpinya membangun dan mengelola
            klinik sebagai solusi bagi problem kecantikan dan kesehatan kulit, tepat pada tanggal 25
            Juli 1996, Miracle pertama berdiri di jalan Bengawan No. 39 Surabaya.
          </p>
        </div>
        <div className="stories-card">
          <p>2000</p>
          <h2>Cabang di Denpasar</h2>
          <p>---</p>
          <p>
            Pada tahun 2000, Miracle memberanikan diri membuka cabang kedua di Denpasar, Bali, untuk
            menjawab tantangan pada saat itu, yaitu membangun kesadaran masyarakat Bali akan
            pentingnya perawatan kulit.
          </p>
        </div>
        <div className="stories-card">
          <p>2001</p>
          <h2>Cabang di Balikpapan</h2>
          <p>---</p>
          <p>
            Tidak hanya di Jawa dan Bali, hanya berselang satu tahun setelah cabang Denpasar dibuka,
            Miracle membuka cabang ketiganya di kota Balikpapan pada tahun 2001. Masyarakat di
            Balikpapan sangat antusias dengan kehadiran Miracle pada saat itu.
          </p>
        </div>
        <div className="stories-card">
          <p>2002</p>
          <h2>Cabang Tunjungan Plaza & Miracle Pertama Pindah Lokasi</h2>
          <p>---</p>
          <p>
            Setelah membuka cabang di Denpasar dan Balikpapan, Miracle sadar akan perkembangan gaya
            hidup perkotaan pada saat itu, yaitu banyak orang yang menghabiskan waktu di mal.
            Miracle kemudian mengusung konsep baru 'klinik kecantikan di mal' dengan membuka cabang
            di Tunjungan Plaza, yang merupakan ikon mal di Surabaya, pada tahun 2002. Selain itu,
            untuk memberikan fasilitas yang lebih nyaman pada pelanggan, Miracle yang berlokasi di
            Jl.
          </p>
        </div>
        <div className="stories-card">
          <p>2003</p>
          <h2>Cabang Kuta</h2>
          <p>---</p>
          <p>
            Didasari atas kesetiaan & kepuasaan pelanggan Miracle Denpasar, Liliani M. membuat
            dirinya berkeinginan membuka cabang baru. Akhirnya, Miracle cabang Kuta dibuka pada
            tahun 2003.
          </p>
        </div>
        <div className="stories-card">
          <p>2004</p>
          <h2>Cabang di HR. Muhammad Surabaya</h2>
          <p>---</p>
          <p>
            Perkembangan Miracle tak terbendung lagi. Tahun demi tahun, selalu ada cabang-cabang
            baru yang dibuka. Tahun 2004, melihat perkembangan wilayah Surabaya Barat yang semakin
            pesat, Miracle membuka cabang di Jl. HR. Muhammad Surabaya.
          </p>
        </div>
        <div className="stories-next">
          <Link to="/">Continue Reading...</Link>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Stories;
