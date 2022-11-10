// import DcLogo from '../../../public/assets/img/icons8-discord.svg'
// import LinkedInLogo from '../../../public/assets/img/icons8-linkedin.svg'
// import InstaLogo from '../../../public/assets/img/icons8-instagram.svg'
import Image from 'next/image'

const Footer = () => {
    return ( 
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-l-6 col-md-6 footer-info">
                            <h3>Torche</h3>
                            <p>Torche Education adalah perusahaan startup teknologi pendidikan yang berbasis di Indonesia,dengan fokus pada teknik kimia, teknik bioproses, dan mata pelajaran teknik proses lainnya.</p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Link</h4>
                            <ul>
                                <li><a href="https://torche.app#hero">Beranda</a></li>
                                <li><a href="https://torche.app#about">Tentang Kami</a></li>
                                <li><a href="https://torche.app#services">Layanan</a></li>
                                <li><a href="https://torche.app/courses">Kursus</a></li>
                                <li><a href="https://torche.app/careers">Karir</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Kontak Kami</h4>
                            <p>
                                <strong>PT. Obor Pengetahuan Indonesia untuk Masyarakat</strong><br/>
                                Jl. Kelapa Lilin Utara XIV Blok DG 8 No. 27<br/>Kab. Tangerang, Banten 15810<br/>Indonesia<br/>
                                <strong>Whatsapp Business:</strong> +62 851 5521 6117<br/>
                                <strong>Email:</strong> admin@torche.app<br/>
                            </p>

                            <div className="social-links">
                                <a href="https://twitter.com/TorcheEdu" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.facebook.com/torche.edu" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/torche.app/" className="instagram">
                                    {/* <Image src={InstaLogo} alt="logo discord"/> */}
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCQnYuE3KU3CzcAjVhuCQtNw" className="youtube"><i className="bi bi-youtube"></i></a>
                                <a href="https://www.linkedin.com/company/torche-education/" className="linkedin">
                                    {/* <Image src={DcLogo} alt="logo discord"/> */}
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://vt.tiktok.com/ZSeu2n4ca/" className="tiktok"><i className="bi bi-tiktok"></i></a>
                                <a href="https://discord.com/invite/2fYBrcK785" className="discord">
                                    {/* <Image src={DcLogo} alt="logo discord"/> */}
                                    <i className="bi bi-discord"></i>
                                </a>
                                <a href="https://wa.me/+6285155216117" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
                                <a href="https://page.line.me/229wiguf" className="line"><i className="bi bi-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="copyright">&copy; Copyright <strong>NewBiz</strong>. All Rights Reserved</div>
                    <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;