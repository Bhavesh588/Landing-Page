import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import UserRegister from '../../components/userregister/userregister.component';
import Project from '../../components/projects/project.component';
import Features from '../../components/features/features.component';

import './top.scss';
import './middle.scss';
import './features.scss';
import './details.scss';
import './footer.scss';
import './Register.scss'

export default class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <img src={require('../../assets/logo.jpg')} alt="Logo" width="70px" height="110px" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col title text-center">
                                Lovely Beach Estate
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center moto">
                                Modern Home Located in the CARIBBEAN <br /> Price at $3,590,900
                                <br /><br />
                                Willemstad, Curacao
                            </div>
                        </div>
                    </div>
                    <div className="drop">
                        <button className="btn-scroll" onClick={() => scrollToComponent(this.Middle, {offset: 5, align: 'top'})}>
                            <img src={require('../../assets/scroll.png')} alt="Scroll" className="scroll" />
                        </button>
                    </div>
                </div>
                <div className="row middle" id="middle" ref={(div) => { this.Middle = div; }}>
                    <div className="container">
                        <div className="row">
                            <div className="col title text-center">
                                <span className="welcome">Welcome</span> HOME
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <div className="des">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Quae pariatur tenetur alias odit odio molestiae cumque 
                                    nihil aliquid. Quis exercitationem nulla ullam esse 
                                    illum maiores, quasi quos dolorum placeat nam?
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col col-width">
                                    <Project imageurl={require('../../assets/Interior_Image_1.jpg')}
                                            bedrooms='6'
                                            bathrooms='5'
                                            living='3,580'
                                            year='2013'
                                            house='Single Family'></Project>
                                </div>
                                <div className="col col-width">
                                    <Project imageurl={require('../../assets/Interior_Image_2.jpg')}
                                            bedrooms='8'
                                            bathrooms='8'
                                            living='2,548'
                                            year='2010'
                                            house='Two Family'></Project>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col col-width">
                                    <Project imageurl={require('../../assets/Interior_Image_3.jpg')}
                                            bedrooms='2'
                                            bathrooms='1'
                                            living='4,500'
                                            year='2000'
                                            house='Single Family'></Project>
                                </div>
                                <div className="col col-width">
                                    <Project imageurl={require('../../assets/Interior_Image_4.jpg')}
                                            bedrooms='8'
                                            bathrooms='8'
                                            living='4,500'
                                            year='2014'
                                            house='Single Family'></Project>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-primary" id="features">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col title text-center">
                                HELLO <span className="welcome">Neighbor</span>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <div className="des">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Amet dolore magni culpa. Dignissimos, sequi? 
                                    Ab soluta consequuntur asperiores amet impedit 
                                    nobis nisi velit praesentium non voluptate, 
                                    ullam natus modi cumque.
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col col-width">
                                    <Features
                                        imageurl={require('../../assets/Home.png')}
                                        title='FINE CUISINE'
                                        des='Delicious Local and International cuisine.'
                                    >
                                    </Features>
                                </div>
                                <div className="col col-width">
                                    <Features
                                        imageurl={require('../../assets/Location.png')}
                                        title='BEACHES'
                                        des='White sand beaches and aquatic Location.'
                                    >
                                    </Features>
                                </div>
                                <div className="col col-width">
                                    <Features
                                        imageurl={require('../../assets/Service.png')}
                                        title='SERVICES'
                                        des='Better services and Good Support'
                                    >
                                    </Features>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="details">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-width text-center">
                                <img src={require('../../assets/profile.jpg')} alt="profile" className="img-details" />
                            </div>
                            <div className="col-md-6 col-width">
                                <div className="title-de">
                                    GREAT <span className="service">Service</span>
                                    <hr />
                                </div>
                                <div className="name">
                                    <b>BHAVESH SOLANKI</b>
                                </div>
                                <div className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Possimus reprehenderit incidunt error nemo 
                                    fugiat natus soluta eveniet a debitis aliquam 
                                    eligendi dolor suscipit, nihil, accusantium libero
                                    veniam dolores perferendis non! 
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Possimus reprehenderit incidunt error nemo 
                                    fugiat natus soluta eveniet a debitis aliquam 
                                    eligendi dolor suscipit, nihil, accusantium libero
                                    veniam dolores perferendis non!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="Register">
                    <div className="container">
                        <div className="row pos justify-content-center">
                            <div className="col text-center">
                                <UserRegister/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright">&copy; by Bhavesh Solanki</div>
                            </div>
                            <div className="col text-right">
                                <div className="foot-name">Lovely Beach Estate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}