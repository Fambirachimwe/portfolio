import React, {useState} from 'react';
// import './App.css';
import FaceBook from "./img/work/facebook-clone.PNG";
import Airbnb from "./img/work/airbnb-clone.PNG";
import Hulu from "./img/work/hulu-clone.PNG";
// import Langson from "./img/work/langson-archi.PNG";
import CarRental from "./img/work/car-rental.PNG";
import UZWIFI from './img/work/uzwifi.PNG';
import CLEANINGCREW from "./img/work/cleaningcrew.png"
import { Avatar } from "@material-ui/core";

import{ init } from 'emailjs-com';
init("user_RZ1p36Otsmeq4SQOKbLK7");

function App() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleName = (e) => {
		setName(e.target.value)
	}
	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handleMessage = (e) => {
		setMessage(e.target.value)
	}

	const sendEmail = () => {
		window.emailjs.send(
			'gmail', 
			
			"templateId",
			{message_html: message, from_name: name, reply_to: email}
			).then(res => {
			  console.log('Email successfully sent!')
			  alert("Message Sent :)")
			  setMessage("");
			  setEmail("");
			  setName("");
			})
			// Handle errors here however you like, or use a React error boundary
			.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(name, email, message)
		sendEmail();
	}

	

  return (
    <div className="App">
     

      
		 <div className="fixed-bg" 
      style={{
        // background: "rgb(41,79,191)",
        // background: "linear-gradient(90deg, rgba(41,79,191,1) 9%, rgba(25,13,200,1) 41%, rgba(0,254,255,1) 83%)
      }
      }
     ></div>
		<div className="fixed-bg-overlay"  style={{
        // background: "rgb(221,223,228)",
        // background: "linear-gradient(90deg, rgba(231,231,231,1) 27%, rgba(228,229,255,1) 59%, rgba(255,255,255,1) 100%)"
      }
      }></div>
	
				
	
		<div id="pre_load" className="preloader-it">
			<div id="la_anim" className="la-anim-1"></div>
		</div> 
	

    {/* <!--Container--> */}
		<div class="container-fluid">
			<div class="row">
				<div id="vertical_nav_wrap" class="col-lg-4 col-xs-12 pad-zero vertical-nav-wrap">
					
					{/* <!--Navigation--> */}
					<nav class="navbar navbar-default vertical-nav" role="navigation">
						<div class="navbar-header">
						  <button type="button" class="btn btn-default navbar-toggle" data-toggle="collapse" 
							 data-target="#navbar_collapse">
							 <span class="mask"></span>
							 <span class="btn-label">
								<span class="pe-7s-menu"></span>
							 </span>
						  </button>
						</div>
						<div class="collapse navbar-collapse" id="navbar_collapse">
							<ul class="nav navbar-nav">
								<li><a data-scroll href="#body"></a><span>about</span></li>
								<li><a data-scroll href="#services_sec"></a><span>services</span></li>
								<li><a data-scroll href="#skill_sec"></a><span>skills</span></li>
								<li><a data-scroll href="#work_sec"></a><span>work</span></li>
								<li><a data-scroll href="#edu_sec"></a><span>education</span></li>
								{/* <li><a data-scroll href="#exp_sec"></a><span>experience</span></li> */}
								{/* <li><a data-scroll href="#client_sec"></a><span>clients</span></li> */}
								{/* <li><a data-scroll href="#achivement_sec"></a><span>achivements</span></li> */}
								<li><a data-scroll href="#contact_sec"></a><span>contact</span></li>
							</ul>
						</div>
					</nav>
					{/* <!--/Navigation--> */}
					
				</div>
				
				<div class="col-lg-8 col-xs-12 pad-zero">
					
					{/* <!--Header--> */}
					<header>
						<div class="header-wrap col-lg-10 center-div">
							<div class="float-left name" style={{display: "flex"}}>
								<a data-scroll href="#body">
									<span style={{paddingRight: " 20px"}}>
										TATENDA FAMBIRACHIMWE
									</span>
								</a>	

								<Avatar  src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-0/p206x206/101764938_2942274589227056_5841983222887481344_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=hILPlEbDKyQAX_T75yC&_nc_ht=scontent.fcpt7-1.fna&tp=6&oh=48ad31f431d576fd26d9241884bd3e9e&oe=5F88FEB8" />
							</div>	
							
							{/* <div class="float-right social-download-wrap">
								<a href="#" class="btn btn-default float-left">
									<span class="mask"></span>
									<span class="btn-label">
										<b>download resume</b>
										<span class="icon pe-7s-download"></span>
									</span>
								</a>
							</div>	 */}
						</div>
						<div class="clearfix"></div>
					</header>
					{/* <!--/Header--> */}
					
					{/* <!--Main Content--> */}
					<div id="main_content" class="content-block margin-top-150 margin-top-sm-70 margin-top-xs-50">
					
						{/* <!--Introduction Sec--> */}
						<section id="intro_content_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad">
							<div class="person-img margin-bottom-xs"></div>
							<h1>
								Hey!<span id="typed"></span>
							</h1>
							<h6>
								about
							</h6>
							<p class="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
							I help designers, small agencies and businesses bring their ideas to life. Powered by Adobe XD, VS Code and coffee, I turn your requirements into reality - on time and on budget.
							</p>
							<p class="wow fadeInUp" data-wow-duration=".4s">
								I am a complete social animal. Find my work on <a class="goto-social" href="https://github.com/Fambirachimwe" target="_blank">Github</a> 

							</p>
							<div class="per-signature margin-top-sm wow fadeInUp" data-wow-duration=".4s">
								{/* <img class="img-responsive" src="./img/signature.png" alt="signature"/> */}
							</div>
						</section>
						{/* <!--/Introduction Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--WhatWeDo Sec--> */}
						<section id="services_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap  sec-pad-top sec-pad-bottom-xs">
							<h6>what i do</h6>
							<div class="row">
								<div class="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay="0s">
									<span class="icon pe-7s-graph3"></span>
									<span class="key-fact">
										ANALYSIS		
									</span>
								</div>
								<div class="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".1s">
									<span class="icon pe-7s-browser"></span>
									<span class="key-fact">
										PROGRAMMING		 
									</span>
								</div>
								<div class="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".2s">
									<span class=" icon pe-7s-tools"></span>
									<span class="key-fact">
										TESTING		
									</span>
								</div>
								<div class="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".3s">
									<span class="icon pe-7s-note2"></span>
									<span class="key-fact">
										DOCUMENTATION
									</span>
								</div>
							</div>	
						</section>
						{/* <!--/WhatWeDo Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Skills Sec--> */}
						<section id="skill_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad-top sec-pad-bottom-xs">
							<h6>technical skills</h6>
							<p class="wow fadeInUp" data-wow-duration=".4s">As a reluctant developer, I fled from a traditional path and explored my creativity, through trying my hands on various techniques and software. Software is more than just a tool, and I try to dig deep into it. Today, I knack for critical thinking, empathy and creativity to create viable and impactful solutions using these technologies.</p>
							<div class="row margin-top-40">
								<div class="col-sm-5 margin-bottom-sm">
									<span class="progress-cat">HTML 5</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<span data-width="97">
													<strong><i>97</i>%</strong>
												</span>
											</div>
										</div>	
									</div>
								</div>
								<div class="col-sm-offset-1 col-sm-5 margin-bottom-sm">
									<span class="progress-cat">REACT JS</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<span data-width="90">
													<strong><i>90</i>%</strong>
												</span>
											</div>
										</div>	
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="col-sm-5 margin-bottom-sm">
									<span class="progress-cat">MATERIAL UI</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<span data-width="80">
													<strong><i>80</i>%</strong>
												</span>	
											</div>
										</div>	
									</div>
								</div>
								<div class="col-sm-offset-1 col-sm-5 margin-bottom-sm">
									<span class="progress-cat">JAVASCRIPT</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<span data-width="98">
													<strong><i>98</i>%</strong>
												</span>
											</div>
										</div>	
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="col-sm-5 margin-bottom-sm">
									<span class="progress-cat">NODE JS</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<span data-width="86">
													<strong><i>86</i>%</strong>
												</span>
											</div>
										</div>	
									</div>
								</div>
								<div class="col-sm-offset-1 col-sm-5 margin-bottom-sm">
									<span class="progress-cat">M.E.R.N STACK</span>
									<div class="progress-bar-graph"> 
										<div class="progress-bar-wrap">
											<div class="bar-wrap">
												<div class="bar-wrap">
													<span data-width="73">
														<strong><i>73</i>%</strong>
													</span>
												</div>	
											</div>
										</div>	
									</div>
								</div>
								<div class="clearfix"></div>
							</div>	
						</section>
						{/* <!--/Skills Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Work Sec--> */}
						<section id="work_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad">
							<h6>work</h6>
						
							<div id="portfolio-wrap" class="padding-sec-lg">
            					<ul id="portfolio" class="auto-construct  project-gallery" data-col="2">
									<li  class="item"   data-src="./img/work/facebook-clone.png" data-sub-html="<h6>DESIGN LAB</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>" >
										<a href="https://facebook-clone-1153a.web.app/">
										<img class="img-responsive" src={FaceBook}  alt="Image description" />
										<span class="hover-cap">FACEBOOK CLONE</span>
										</a>
									</li>
									<li class="item"    data-sub-html="<h6>MODERN WORK</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
										<a href="https://airbnb-clone-a9dd4.web.app/">
										<img class="img-responsive" src={Airbnb}  alt="Image description" />
										<span class="hover-cap">Airbnb CLONE</span>
										</a>
									</li>
									<li class="item" data-src="./img/mock4.jpg" data-sub-html="<h6>UX PLATFORM</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
										<a href="https://cleaning-crew-255.web.app/">
										<img class="img-responsive" src={CLEANINGCREW}  alt="Image description" />
										<span class="hover-cap">Cleaning Crew</span>
										</a>
									</li>
									<li class="item" data-src="http://vimeo.com/1084537" data-poster="img/mock3.jpg" data-sub-html="<h6>MONOBRANDING</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
										<a href="https://hulu-clone-2980.web.app/">
										<img class="img-responsive" src={Hulu} alt="Image description" />
										<span class="hover-cap">HULU CLONE</span>
										</a>
									</li>
									
									<li class="item" data-src="./img/mock5.jpg" data-sub-html="<h6>FALL/WINTER</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
										<a href="http://fambirachimwe.pythonanywhere.com/">
										<img class="img-responsive" src={CarRental}  alt="Image description" />	
										<span class="hover-cap">CAR RENTAL</span>
										</a>
									</li>
									<li class="item" data-html="#video1" data-sub-html="<h6>FANTASTIC MAN</h6><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
										<a href="https://uz-wifi-zone.web.app/">
										<img class="img-responsive" src={UZWIFI} style={{height: "200px", "objectFit": "fill", margin: "0 auto"}}  alt="Image description" />
										<span class="hover-cap">UZ Wifi-zone PWA</span>
										</a>
									</li>
									
								</ul>
								{/* <!-- Hidden video div --> */}
								{/* <div style={{display:"none"}} id="video1">
									<video class="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">
										<source src="videos/video1.mp4" type="video/webm"/>
										<source src="videos/video1.webm" type="video/webm"/>
										 Your browser does not support HTML5 video.
									</video>
								</div> */}
							</div>
						</section>
						{/* <!--/Work Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Qualfication Sec--> */}
						<section id="edu_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad">
							<h6>education</h6>
							<p class="wow fadeInUp" data-wow-duration=".4s">
								I spent 3 years learning Web Design & Development and Currently studying for Hons in Computer Science at the University of Zimbabwe. I think one should never stop learning and go through a process of acquiring knowledge.
							</p>
							<div class="qualfication-wrap">
								<div class="qualfication first-row wow fadeInUp" data-wow-duration=".4s">
									<div class="col-sm-2">
										<span class="row-count"><span>1</span></span>
									</div>
									<div class="col-sm-2">
										<span class="yr-pers vertical-align-pad">2010-2016</span>
									</div>
									<div class="col-sm-5">
										<span class="insti vertical-align-pad">St Pauls Musami and Mutambara High</span>
									</div>
									<div class="col-sm-3">
										<span class="design vertical-align-pad">
											O & A level
										</span>
									</div>
								</div>
								<div class="qualfication wow fadeInUp" data-wow-duration=".4s">
									<div class="col-sm-2">
										<span class="row-count"><span>2</span></span>
									</div>
									<div class="col-sm-2">
										<span class="yr-pers vertical-align-pad">2017-Current</span>
									</div>
									<div class="col-sm-5">
										<span class="insti vertical-align-pad">University of Zimbabwe, Harare</span>
									</div>
									<div class="col-sm-3">
										<span class="design vertical-align-pad">
											Bachelor of Computer Science
										</span>
									</div>
								</div>
								{/* <div class="qualfication wow fadeInUp" data-wow-duration=".4s">
									<div class="col-sm-2">
										<span class="row-count"><span>3</span></span>
									</div>
									<div class="col-sm-2">
										<span class="yr-pers vertical-align-pad">2009-2012</span>
									</div>
									<div class="col-sm-5">
										<span class="insti vertical-align-pad">Queensglen Public University, California</span>
									</div>
									<div class="col-sm-3">
										<span class="design vertical-align-pad">
											Web Design Diploma
										</span>
									</div>
								</div> */}
								
							</div>
						</section>	
						{/* <!--/Qualfication Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Experience Sec--> */}
						{/* <section id="exp_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap  sec-pad">
							<h6>experience</h6>
							<div class="exp-timeline-wrap">
								<div class="row exp-timeline timeline-active">
									<div class="col-xs-2">
										<div class="timeline-st"></div>
									</div>
									<div class="col-xs-10 exp-content-wrap">
										<div class="row">
											<div class="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0s">
												<div class="col-sm-3 duration"><span>mar 2014 - present</span></div>
												<div class="col-sm-9">
													<span class="job-desn">UI Developer</span>
													<span class="job-loc">Fakebook Studio, New York
	</span>
													<p class="job-summary p-small">In this small yet expanding company, I had the opportunity to turn my passion for the web in a job right after graduation. Being the only designer in the company I have often dealt with the whole process of designing for our customers.</p>
												</div>
											</div>	
										</div>
									</div>	
								</div>
								<div class="row exp-timeline">
									<div class="col-xs-2">
										<div class="timeline-st"></div>
									</div>
									<div class="col-xs-10 exp-content-wrap">
										<div class="row">
											<div class="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0.2s">
												<div class="col-sm-3 duration"><span>Jul 2013 — Mar 2014</span></div>
												<div class="col-sm-9">
													<span class="job-desn">Visual Communication Designer</span>
													<span class="job-loc">Dropzone, NYC
	</span>
													<p class="job-summary p-small">Being in a very well structured company, with clear and defined work procedures, helped me grow both personally and professionally, as well as enjoying a young and international working environment. I had the opportunity to redefine the way I work in a more intelligent way.</p>
												</div>
											</div>	
										</div>
									</div>	
								</div>
								<div class="row exp-timeline">
									<div class="col-xs-2">
										<div class="timeline-st"></div>
									</div>
									<div class="col-xs-10 exp-content-wrap">
										<div class="row">
											<div class="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0.4s">
												<div class="col-sm-3 duration"><span>Jan 2013 – Jul 2013</span></div>
												<div class="col-sm-9">
													<span class="job-desn">Web Publishing
	</span>
													<span class="job-loc">Daisystreet, NYC
	</span>
													<p class="job-summary p-small">Being the first design agency in my career and being one among the best in New York, I've learned to be proficient in a fast-paced work environment.</p>
												</div>
											</div>	
										</div>
									</div>	
								</div>
								<div class="row exp-timeline">
									<div class="col-xs-2">
										<div class="timeline-st"></div>
									</div>
									<div class="col-xs-10 exp-content-wrap">
										<div class="row">
											<div class="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0.6s">
												<div class="col-sm-3 duration"><span>Oct 2011 – Jan 2013</span></div>
												<div class="col-sm-9">
													<span class="job-desn">Intern Developer
	</span>
													<span class="job-loc">Oxwalk Ducks, California
	</span>
													<p class="job-summary p-small">Create frameworks to guide critical thinking, to streamline the ideation process and to visualize complex concepts. Uses various graphic approaches to make complex ideas more tangible.</p>
												</div>
											</div>	
										</div>
									</div>	
								</div>
							</div>
						</section>	 */}
						{/* <!--/Experience Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Client Sec--> */}
						{/* <section id="client_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div client-wrap  sec-pad wow bounceIn" data-wow-duration=".4s">
							<h6>clients</h6>
							<div class="client-carousel">
								<img src="./img/client1.png" alt="client"/>
								<img src="./img/client2.png" alt="client"/>
								<img src="./img/client3.png" alt="client"/>
								<img src="./img/client4.png" alt="client"/>
								<img src="./img/client5.png" alt="client"/>
								<img src="./img/client2.png" alt="client"/>
							</div>
						</section> */}
						{/* <!--/Client Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Achivement Sec--> */}
						{/* <section id="achivement_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div achivement-wrap  sec-pad-top sec-pad-bottom-sm">
							<h6>achivements</h6>
							<p class="wow fadeInUp" data-wow-duration=".4s">It always seems impossible until its done. Participated in more than 100 contests run online and run by government. I got first prize for Logo Design done for a Fashion Brand in 2015, the ceremony held in Germany.</p>
							<div class="achivement-list-wrap margin-top-40">
								<ul class="row">
									<li class="col-sm-6">
										<ul>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0s">
											<span class="dash-pointer">-</span>
											<span class="achive-pts">First Price for Logo Design in Berman Design Award</span>
											</li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".2s"><span class="dash-pointer">-</span><span class="achive-pts">Honorable Mention at International Design Awards</span></li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".4s"><span class="dash-pointer">-</span><span class="achive-pts">AICB New York, USA</span></li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".6s"><span class="dash-pointer">-</span><span class="achive-pts">International CNDY Awards New York, USA</span></li>
										</ul>
									</li>
									<li class="col-sm-6">
										<ul>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0s"><span class="dash-pointer">-</span><span class="achive-pts">Drix Club des Directeurs Artistiques Paris, France</span></li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0.2s"><span class="dash-pointer">-</span><span class="achive-pts">A&AD Awards (Yellow & Black Pencils) London, UK</span></li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".4s"><span class="dash-pointer">-</span><span class="achive-pts">Global Dffie Awards New York, USA</span></li>
											<li class="margin-bottom-xs wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s"><span class="dash-pointer">-</span><span class="achive-pts">The Intercontinental Advertising Award (The Cup) (ICAA) Spain</span></li>
										</ul>
									</li>
								</ul>
							</div>	
						</section> */}
						{/* <!--/Achivement Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Contact Sec--> */}
						<section id="contact_sec"  class="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad-top sec-pad-bottom-sm">
							<h6>contact</h6>
							<div data-ng-controller="ContactController" class="align-center wow fadeInUp" data-wow-duration=".4s">
								<h3>Hello <span  data-ng-bind={name}></span>, I'd love to hear from you.</h3>
								<div>
									<form  name="contactform"  class="row form-horizontal" role="form" onSubmit={handleSubmit}>
										<div class="form-group input--hoshi col-sm-6" data-ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
											<div class="input-wrap">
												<input autocomplete="off" value={name} onChange={handleName} data-ng-model="formData.inputName" type="text" class="form-control input__field input input__field--hoshi" id="inputName" name="inputName" placeholder="Name" required />
												<label class="input__label input__label input__label--hoshi input__label--hoshi-color-1 input__label--hoshi input__label--hoshi-color-1" ></label>
											</div>	
										</div>
										<div class="form-group  input--hoshi col-sm-6" data-ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
											<div class="input-wrap">
												<input autocomplete="off" value={email} onChange={handleEmail} data-ng-model="formData.inputEmail" type="email" class="form-control input input__field input__field--hoshi" placeholder="Email" id="inputEmail" name="inputEmail" required />
												<label class="input__label input__label--hoshi input__label--hoshi-color-1"></label>
											</div>	
										</div>
										<div class="form-group  input--hoshi col-sm-12" data-ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
											<div class="input-wrap">
												<textarea data-ng-model="formData.inputMessage" value={message} onChange={handleMessage} class="form-control input input__field input__field--hoshi" rows="4" id="inputMessage" name="inputMessage" placeholder="message" required></textarea>
												<label class="input__label input__label--hoshi input__label--hoshi-color-1"></label>
											</div>	
										</div>
										<div class="form-group col-sm-12">
											<div class="align-center">
												<button type="submit"  class="btn btn-default" data-ng-disabled="submitButtonDisabled">
												<span class="mask"></span>
												<span>send message</span>
												</button>
											</div>
										</div>
									</form>
									<p data-ng-class="result"></p>
								</div>
							</div>
							
							<div class="email-direct">
								<p class="wow fadeInRight" data-wow-duration=".4s">Or simply email me at <a href="mailto:t.svaku@gmail.com">t.svaku@gmail.com</a></p>
							</div>
						</section>
						{/* <!--Contact Sec--> */}
						
						<hr class="separater-hr"/>
						
						{/* <!--Footer--> */}
						<footer class="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap  sec-pad">
							<div class="row">
								<div class="col-sm-6 available-wrap">
									<span class="available-pointer"></span>
									<span class="available-tag">Available for Freelance Projects.</span>
								</div>
								<div class="col-sm-6">
									<div class="social-icons-wrap float-right">
										{/* <!--Social Icons--> */}
										<ul class="social-icons float-right">
											<li>
												<a href="https://www.facebook.com/tatenda.fambirachimwe/" class="social-icon">
													<span class="fa" data-hover="&#xf09a;">&#xf09a;</span>
												</a>
											</li>
											{/* <li>
												<a href="#" class="social-icon">
													<span class="fa" data-hover="&#xf099;">&#xf099;</span>
												</a>
											</li>
											<li>
												<a href="#" class="social-icon">
													<span class="fa" data-hover="&#xf16e;">&#xf16e;</span>
												</a>
											</li> */}
											<li>
												<a href="https://www.instagram.com/tatenda_fambirachimwe/" class="social-icon">
													<span class="fa" data-hover="&#xf16d;">&#xf16d;</span>
												</a>
											</li>
										</ul>
										{/* <!--/Social Icons--> */}
									</div>
									<div class="goto-top text-right float-right">
										<a data-scroll href="#body">
											<span data-hover="top">
												top
											</span>
										</a>
									</div>
									<div class="copywrite-wrap text-right float-right">
										{/* <p class="copywrite">Fabricated by <b> &copy; 2017.</b> Updated <b>June, 2017.</b></p> */}
									</div>
								</div>	
							</div>	
						</footer>
						{/* <!--/Footer--> */}
						
					</div>	
					{/* <!--/Main Content--> */}
					
				</div>
			</div>	
		</div>
		{/* <!-- /Container --> */}
    

  
    </div>
  );
}


export default App;
