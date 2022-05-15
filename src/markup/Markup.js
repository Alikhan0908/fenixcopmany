import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';


import Index7 from './Pages/Index7';
import Aboutus2 from './Pages/Aboutus/Aboutus2';

import Error404 from './Pages/Error/Error404';

import UnderMaintenance from './Pages/UnderMaintenance';
import Expertise from './Pages/Expertise';
import ProjectManagement from './Pages/ProjectManagement';
import OurProjects from './Pages/OurProjects';
import ProjectDetails from './Pages/ProjectDetails';
import Team from './Pages/Team';
import Faqs from './Pages/Faqs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import Service from './Pages/Service/Service.js';

import ScrollToTop from './Element/ScrollToTop';
import PortfolioFullWidth from './Pages/Portfolio/PortfolioFullWidth';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename="/">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Index7} />
                        <Route path='/about-2' exact component={Aboutus2} />
                        <Route path='/under-maintenance' exact component={UnderMaintenance} />
                        <Route path='/expertise' exact component={Expertise} />
                        <Route path='/project-management' exact component={ProjectManagement} />
                        <Route path='/our-projects' exact component={OurProjects} />
                        <Route path='/project-details' exact component={ProjectDetails} />
                        <Route path='/team' exact component={Team} />
                        <Route path='/faqs' exact component={Faqs} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/contact' exact component={Contact} />
                        <Route path='/service' exact component={Service} />
                        <Route path='/portfolio-full-width' exact component={PortfolioFullWidth} />	
                        <Route path='*' exact component={Error404} />					
					</Switch>
                </div>
				<ScrollToTop />
				<ThemeButton />
            </BrowserRouter>	
		)
	}
	
}

export default Markup;