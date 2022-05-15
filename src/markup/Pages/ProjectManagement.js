import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer6';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import TestimonialCarousel from './../Element/TestimonialCarousel';
import FormStyle from './../Element/FormStyle';

//Images
import rocket from './../../images/rocket.png';
import bnr from './../../images/banner/bnr7.jpg';
import tamplate from './../../images/tamplate.png';
import bg1 from './../../images/background/bg1.jpg';
import bgmap from './../../images/background/bg-map.jpg';

 
const BlogLeft = ({ title, number, info }) => {
   return (
		<>
			<div className="line-left clearfix">
                <div className="line-left-box">
					<div className="line-content-box ">
						<h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
						<p className="font-16">
							{info}
						</p>
					</div>
					<div className="line-num bg-primary-dark">{number}</div>
				</div>
			</div>	
		</>
    );
};
const BlogRight = ({ title, number, info }) => {
   return (
		<>
			<div className="line-right clearfix">
                <div className="line-right-box">
					<div className="line-content-box ">
						<h4 className="min-title text-uppercase text-primary m-t0 m-b15">{title}</h4>
						<p className="font-16">
							{info}
						</p>
					</div>
					<div className="line-num bg-primary-dark">{number}</div>
				</div>
			</div>	
		</>
    );
};

class ProjectManagement extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Loyihani boshqarish' activeMenu='Loyihani boshqarish' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Loyihaga start beriladi</h4>
                                    <h2 className="box-title m-tb0">
                                    Axborot oqimi to'g'ri yo'naltirish + Barcha manfaatdorlarni tsiklda ushlab turish = Loyihani samarali boshqarish
										<span className="bg-primary"></span>
									</h2>

                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <img src={rocket} alt="" className="fa faa-horizontal animated" />
                                        <h5 className="text-primary">Loyiha boshlandi</h5>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="time-line clearfix">
                                            <BlogLeft title='Loyiha tahlili' number='1' info="Mijoz fikri yoki g'oyasi to'liq tahlil qilinadi" />  
											<BlogRight title="Loyiha muammolarini o'rganish" number='2' info="Loyiha obyekti to'liq tahlil qilinadi, muammolar va ularga yechimlar ishlab chiqiladi" />
											<BlogLeft title="Ko'rsatmalar" number='3' info="Har bir bo'lim uchun ko'rsatma va shartlar beriladi" />
											<BlogRight title='Dizayn' number='4' info="Mahsulot uchun bir nechta dizaynlar ishlab chiqiladi, ichida eng ma'quli olinadi" />
											<BlogLeft title='Yaratish' number='5' info="Mutaxassislari dizayn asosida ko'rsatma va shartlarga amal qilib loyihaning dasturiy ta'minotini yaratadi"/>
											<BlogRight title='Test' number='6' info="Har bir mahsulot yaratilgandan so'ng test qilinadi. Testdan chiqqan xatoliklar tuzatiladi"/>									
											<BlogLeft title='Topshirish' number='13' info="Testdan chiqqan dastur mijozga topshiriladi"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <h5 className="text-primary">END</h5>
                                        <div className="arrow-bx fa faa-horizontal animated"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <img src={tamplate} alt="" />
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
						 {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}

                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default ProjectManagement;