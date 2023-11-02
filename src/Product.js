import React, {useState,useEffect} from "react";
import "./App.css";
import dth from "./DTH.jpg"
import fib from "./img5.jpg"
import plan from "./img6.jpg"
import dsl from "./img7.jpg"
import mod from "./img8.jpg"

function App() {

    const [mobile,setMobile]=useState("");

    const onChange = (e)=>{
        setMobile(e.target.value);
    }

    const register = ()=>{
        fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile: mobile,
            }),
        })
        .then((res)=>res.json())
        .catch((err)=>{
            console.log(err);
        });
    }

    useEffect(()=>{

    },[]);

    return (
        <div className="App">
            <section id="Home" class="bg-dark">
                <div class="container">
                    <div class="row text-left g-4">
                        <div class="col-md">
                            <div class="card bg-sucess text-dark">
                                <div class="card-body text-left">
                                    <div>
                                        <h2>
                                            <b>Home</b>
                                        </h2>
                                        <p>
                                            Welcome to We Connect, the premier telecommunications
                                            company for all your communication needs. Our mission is
                                            to connect you to the world, anytime and anywhere, with
                                            reliable and affordable communication services. At We
                                            Connect, we pride ourselves on offering a wide range of
                                            communication services that are tailored to meet the
                                            unique needs of our customers. Whether you need a mobile
                                            phone plan, fixed-line phone service, internet
                                            connectivity, or entertainment packages, we have you
                                            covered.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Services" class="p-5 bg-dark">
                <div class="container">
                    <div class="row text-left g-4">
                        <div class="col-md">
                            <div class="card bg-sucess text-dark">
                                <div class="card-body text-left">
                                    <h3>
                                        <b>Services</b>
                                    </h3>
                                    <p>
                                        <b>Mobile Phone Plans</b> - Stay connected on the go with
                                        our affordable and flexible mobile phone plans. We offer a
                                        range of plans that cater to different budgets and
                                        communication needs, including talk, text, and data plans.
                                        <br></br>
                                        <b>Fixed-line Phone Services</b> - Our fixed-line phone
                                        services provide reliable and clear voice communication for
                                        your home or business. Choose from a range of plans that
                                        offer local, national, and international calling options.
                                        <br></br>
                                        <b>Internet Services</b> - Whether you need high-speed
                                        internet for streaming, browsing, or downloading, we have
                                        you covered. We offer a range of internet plans that cater
                                        to different speeds and data requirements.<br></br>
                                    </p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ContactUs" class="p-5 bg-dark">
                <div class="container">
                    <div class="row text-left g-4">
                        <div class="col-md">
                            <div class="card bg-sucess text-dark">
                                <div class="card-body text-left">
                                    <h3>
                                        <b>ContactUs</b>
                                    </h3>
                                    <div>
                                        <p>
                                            <b>E-mailid:</b>weconnect@we.com <br></br>
                                            <b>Phone no:</b>0427-2450193<br></br>
                                        </p>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="center">
                <label><b>MOBILE NUMBER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>

                <input type="text" maxlength="10" placeholder="Enter mobile number" value={mobile} onChange={onChange} />
                <button type="button" class="btn btn-outline-success" onClick={register}><a href="#Recharge"><b>Pay</b></a></button>

            </div>
            <br>
            </br>
            <br>
            </br>

            <section id="dth">

                <h1>DTH</h1>

                <img src={dth} align="center" /> 
                <div>
                    <b>Welcome to DTH!</b>
                    <p>DTH is the best way to enjoy your favorite TV channels with crystal-clear picture quality and sound. With a wide range of channels and affordable plans,<br></br> you can choose the perfect package that suits your needs.</p>
                </div>

                <br></br>

                <div>
                    <b>Premium</b>
                    <p>Airtel HD Recording Set Top Box₹1,289.<br></br>Tata Sky HD Box₹1,120.<br></br>Airtel DigitalTV HD Set top Box₹990.<br></br>Tata Sky Binge+ Android Set Top Box₹2,449.<br></br>DishTV Nxt HD+ Recorder Set Top Box₹1,003.<br></br>Videocon D2H HD Box₹1,050.<br></br>Airtel SD Set Top Box₹1,079.</p>
                </div>
            </section>

            <section id="fiber">
                <header><b>XSTREAM FIBER</b></header>

                <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/04/airtel-broadband-lite-plan-1200x900.jpg" height=" 450" width="750" align="center" />

                <br></br>
                <div>
                    <h3><b>Fiber Plans</b></h3>
                    <img src={fib} height="500" width="300" />
                </div>

            </section>

            <section id="plans">

                <header>
                    <h1>PLANS</h1>
                </header>


                <img src={plan} width="500" height="300" /> 

            </section>

            <section id="modem">

                <header>
                    <h1>DSL</h1>

                </header>


                <h2><b>Digital subscriber line</b></h2>
                <p>
                    **Digital Subscriber Line (DSL) is a type of internet connection technology that uses existing telephone lines to provide high-speed internet access.<br></br>**DSL uses a frequency range that is not used by voice telephone calls,allowing it to transmit data at a higher rate than a traditional dial-up modem
                </p>

                <img src={mod} align="center" /> 


                <h3><b>Features of DSL</b></h3>
                <p>    High-speed internet: DSL modems support high-speed internet connections that are much faster than dial-up connections.<br></br>

                    Connectivity: DSL modems provide internet connectivity through a phone line, and they typically come with Ethernet ports to connect to your devices.<br></br>

                    Compatibility: DSL modems are compatible with various DSL technologies, such as ADSL, SDSL, and VDSL.<br></br>

                    Built-in router: Some DSL modems have built-in routers that allow you to create a home network and connect multiple devices to the internet.<br></br>

                    Security: DSL modems often come with built-in security features such as firewalls and encryption to protect your network from unauthorized access.<br></br>

                    Ease of use: DSL modems are easy to set up and use, and most models come with web-based interfaces that make it easy to configure your modem and monitor your network</p>

            </section>

            <section id="dsl">
                <header>
                    <h1>Cable Modem</h1>

                </header>

                <p>A modem, which stands for "modulator-demodulator," is a device connecting your home to your internet service provider (ISP) through a physical connection. The modem translates the data from your ISP into a format that your home network devices can use.</p>
                <img src={dsl} width="500" height="300" align="center" />


                <h3><b>Features of Modem</b></h3>
                <p>Fast speeds.<br></br>Reliable Internet connection.<br></br>Easy to set up and manage.<br></br>Supports remote troubleshooting.<br></br> DOCSIS compatibility for more bandwidth channels.</p>

            </section>
            <form method="post" action="/submit-recharge" id="Recharge">
                <h2>
                    <b>ANNUAL PLAN</b>
                </h2>
                <div class="float-container" action="https//:mongodb://localhost:27017/lab/Recharge">
                    <div class="row:after">
                        <div class="float-child">
                            <div class="m_container">
                                <p class="m_card-text">OFFER- 365 DAYS + 23 DAYS<br></br><b>₹2999</b></p>
                                <p class="m_card-text">Benefits:<b>2.5GB/day</b></p>
                                <p class="m_card-text">Validity:<b>365 days</b></p><br>
                                </br>
                                <button  onClick={register} ><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row:after">
                    <div class="float-child">
                        <div class="m_container">
                            <p class="m_card-text">OFFER-365 days+30 DAYS<b>₹3999</b></p>
                            <p class="m_card-text">Benefits:<b>4GB/day</b></p>
                            <p class="m_card-text">Validity:<b>365 days</b></p><br>
                            </br>
                            <button  ><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                        </div>
                    </div>
                </div>
                <br></br>
                <h3>
                    <br>
                    </br>
                    <b>DAILY NO LIMIT</b>
                </h3>
                <div class="float-container">
                    <div class="row:after">
                        <div class="float-child">
                            <div class="m_container">
                                <p class="m_card-text"><b>₹299</b></p>
                                <p class="m_card-text">Benefits:<b>30GB</b></p>
                                <p class="m_card-text">Validity:<b>28 days</b></p><br></br>
                                <button><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row:after">
                    <div class="float-child">
                        <div class="m_container">
                            <p class="m_card-text"><b>₹599</b></p>
                            <p class="m_card-text">Benefits:<b>45GB</b></p>
                            <p class="m_card-text">Validity:<b>54 days</b></p><br></br>
                            <button  ><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                        </div>
                    </div>
                </div>
                <div class="bg-light">

                    <h4>
                        <br>
                        </br>
                        <b>BASE PLAN</b>
                    </h4>
                    <div class="float-container" >
                        <div class="row:after">
                            <div class="float-child">
                                <div class="m_container">
                                    <p class="m_card-text"><b>₹666</b></p>
                                    <p class="m_card-text">Benefits:<b>1.5GB/day</b></p>
                                    <p class="m_card-text">Validity:<b>84 days</b></p><br></br>
                                    <button  ><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row:after">
                        <div class="float-child">
                            <div class="m_container">
                                <p class="m_card-text"><b>₹777</b></p>
                                <p class="m_card-text">Benefits:<b>2GB/day</b></p>
                                <p class="m_card-text">Validity:<b>84 days</b></p><br></br>
                                <button ><a href="#" class="recharge-box" rel="noreferrer">Buy Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;