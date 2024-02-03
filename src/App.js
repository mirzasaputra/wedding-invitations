import { useEffect } from "react";
import audio from './music/background-songs.mp3'

function App() {
  const countDownTime = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 26, 2024 07:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.querySelectorAll('.display-days').forEach(val => val.innerHTML = days)
      document.querySelectorAll('.display-hours').forEach(val => val.innerHTML = hours)
      document.querySelectorAll('.display-minutes').forEach(val => val.innerHTML = minutes)
      document.querySelectorAll('.display-seconds').forEach(val => val.innerHTML = seconds)
    }, 1000);
  };

  const handleLockScreen = (e) => {
    const audioElement = new Audio(audio)
    audioElement.addEventListener('ended', function() {
      this.currentTime = 0
      this.play()
    }, false)
    audioElement.play()
    document.querySelector('.lock-screen').classList.add('hide')
  }

  useEffect(() => {
    countDownTime()
  }, [])

  return (
    <div className="App">
      <div className="lock-screen d-flex align-items-center justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8 col-11 text-center">
          <i className="fa fa-heart text-danger  fa-2x mb-2"></i>
          <h2 className="wedding-title-init font-josefin-sans">T&P</h2>
          <strong className="font-antipasto fs-5 text-uppercase">
            The Wedding Of
          </strong>
          <h1 className="wedding-title font-josefin-sans text-uppercase">
            Taufiq & Putri
          </h1>
          <div className="d-flex gap-3 w-100 align-items-center justify-content-center my-3">
            <div
              className="border rounded py-3 text-center time-box"
              style={{ width: 90 }}
            >
              <h3 className="m-0 display-days">0</h3>
              <span className="text-muted">Hari</span>
            </div>
            <div
              className="border rounded py-3 text-center time-box"
              style={{ width: 90 }}
            >
              <h3 className="m-0 display-hours">0</h3>
              <span className="text-muted">Jam</span>
            </div>
            <div
              className="border rounded py-3 text-center time-box"
              style={{ width: 90 }}
            >
              <h3 className="m-0 display-minutes">0</h3>
              <span className="text-muted">Menit</span>
            </div>
            <div
              className="border rounded py-3 text-center time-box"
              style={{ width: 90 }}
            >
              <h3 className="m-0 display-seconds">0</h3>
              <span className="text-muted">Detik</span>
            </div>
          </div>
          <button className="btn btn-outline-custom mt-5" onClick={ handleLockScreen }>
            Open Invitation <i className="fa fa-arrow-down ms-2 blink-animation"></i>
          </button>
        </div>
      </div>

      {/* section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />

      {/* Section 3 */}
      <Section3 />

      {/* Maps */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d993.113477516625!2d114.32040992846349!3d-8.425325672842282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjUnMzEuMiJTIDExNMKwMTknMTUuOCJF!5e1!3m2!1sid!2sid!4v1706928148081!5m2!1sid!2sid" width="100%" height="650" style={{ border: 0 }} allowfullscreen="false" className="maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      {/* Section 4 */}
      <Section4 />
    </div>
  );
}

function Section1(props) {
  return (
    <div className="section bg-custom py-5 section-1">
      <div className="row align-items-center justify-content-center m-0">
        <div className="col-12 text-center text-custom">
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </div>
        <div className="col-12 text-center text-custom">
          أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
        </div>
        <div className="col-md-9 col-sm-10 col-12 text-center text-custom">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </div>
        <div className="col-md-9 col-sm-10 col-12 text-center is-translation">
          <p>Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
          <p>Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
          <p>Surah Ar-Rum:21</p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center m-0 col-md-9 col-12 mx-auto mt-5">
        <div className="col-md-5 col-12 text-center">
          <div className="image-frame">
            <img src="/images/men.jpg" alt="foto mempelai pria" width="100%" />
          </div>
          <h1 className="font-alsscript fw-bold name-tag mb-0">Taufiq Hidayat</h1>
          <span className="font-josefin-sans fw-bold fs-5">Putra Dari Bapak Anonymous & Ibu Anonymous</span>
        </div>
        <div className="col-md-2 col-12 text-center font-josefin-sans fw-bold" style={{ fontSize: '9rem' }}>&</div>
        <div className="col-md-5 col-12 text-center">
          <div className="image-frame">
            <img src="/images/women.jpg" alt="foto mempelai wanita" width="100%" />
          </div>
          <h1 className="font-alsscript fw-bold name-tag mb-0">Firda Astrian Saputri</h1>
          <span className="font-josefin-sans fw-bold fs-5">Putri Dari Bapak Marjani & Ibu Wagirah</span>
        </div>
      </div>
    </div>
  )
}

function Section2(props) {
  return (
    <div className="section-2 p-2 text-center" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <div className="bg-custom"></div>
      <h1 className="font-alsscript mb-0 text-white" style={{ fontSize: '3.5rem'}}>26 Februari 2024</h1>
      <img src="/images/save-the-date.gif" alt="save-the-date" height="200" className="my-3" />
      <div className="col-md-4 col-sm-8 col-12 mx-auto mt-3">
        <div className="row align-items-center text-white">
          <div className="col-3">
            <h2 className="font-josefin-sans display-days">0</h2>
            <span className="font-josefin-sans">Hari</span>
          </div>
          <div className="col-3">
            <h2 className="font-josefin-sans display-hours">0</h2>
            <span className="font-josefin-sans">Jam</span>
          </div>
          <div className="col-3">
          <h2 className="font-josefin-sans display-minutes">0</h2>
            <span className="font-josefin-sans">Menit</span>
          </div>
          <div className="col-3">
          <h2 className="font-josefin-sans display-seconds">0</h2>
            <span className="font-josefin-sans">Detik</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section3(props) {
  return (
    <div className="section-3 bg-custom py-5">
      <div className="container">
        <div className="text-center font-alsscript fs-1">Senin,</div>
        <div className="col-md-2 col-sm-4 col-6 mx-auto d-flex align-items-center justify-content-center gap-2" style={{ marginTop: -25 }}>
          <h1 className="m-0 font-josefin-sans fw-bold" style={{ fontSize: '5.5rem' }}>26</h1>
          <div>
            <p className="m-0 p-0 font-antipasto fw-bold fs-2">Februari</p>
            <p className="mb-2 p-0 font-josefin-sans fw-bold fs-2" style={{ marginTop: '-10px' }}>2024</p>
          </div>
        </div>
        <div className="row m-0 align-items-center col-sm-8 mx-auto mt-4">
          <div className="col-md-6 col-12 text-center">
            <h1 className="font-alsscript fw-bold">Akad Nikah</h1>
            <span className="font-josefin-sans text-black fs-4">09.00 - Selesai</span>
          </div>
          <div className="col-md-6 col-12 text-center">
            <h1 className="font-alsscript fw-bold">Resepsi Pernikahan</h1>
            <span className="font-josefin-sans text-black fs-4">13.00 - Selesai</span>
          </div>
        </div>
        <div className="col-12 text-center mt-4 mb-5">
          <button className="btn btn-outline-custom"><i className="fa fa-calendar-alt me-2"></i> Simpan Tanggal</button>
        </div>
        <div className="d-flex gap-2 col-md-6 col-sm-8 col-12 mx-auto align-items-center justify-content-center line-break">
          <hr/><i className="fa fa-heart"></i><hr/>
        </div>
        <div className="col-5 mx-auto text-center my-4">
          <h1 className="font-alsscript fw-bold mb-3">Lokasi</h1>
          <p className="font-josefin-sans text-black fs-5">Dusun. Krajan, RT.  001/RW. 002, Desa. Tembokrejo, Kec. Muncar. Patung Pacul ke Barat, belakang SDN 5 Tembokrejo atau belakang KUD Lestari.</p>
          <a href="https://maps.app.goo.gl/f8RGxSmgZ7GL3Q8b9" target="_blank" className="btn btn-outline-custom"><i className="fa fa-map-marker-alt me-2"></i> Lihat Maps</a>
        </div>
      </div>
    </div>
  )
}

function Section4() {
  return (
    <div className="section-4 bg-custom py-5">
      <div className="container">
        <h1 className="font-alsscript text-center fw-bold">Komentar</h1>
        <div className="d-flex gap-2 align-items-center justify-content-center col-md-3 col-sm-5 col-10 line-break mx-auto mb-3">
          <hr className="m-0 p-0"/><i className="fa fa-heart"></i><hr className="m-0 p-0"/>
        </div>
        <div className="col-md-5 col-sm-8 col-12 mx-auto mt-4">
          <div className="mb-3">
            <label for="name">Nama</label>
            <input type="text" className="form-control" placeholder="Nama..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
