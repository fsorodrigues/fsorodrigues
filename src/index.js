// importing react framework
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

// importing bootstrap scripts
import 'bootstrap';

// importing layouting & styling frameworks
import '../node_modules/bootstrap/scss/bootstrap.scss';

// importing custom stylesheets
import './style/main.scss';

// import HelloWorld from './hello';
import App from './containers/App';
// import Social from './components/Social';

library.add(fab);

// if (process.env.NODE_ENV === "development") {
//     require('dotenv').config();
// }

const root = document.getElementById('root');

const renderer = ReactDOMClient.createRoot(root);

renderer.render(
    <div className={"container-fluid mt-5 mb-4"}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
)



// <div className="container-fluid mt-5">
//     <div className="row">
//         <div className="col-12 col-md-3 offset-lg-1 col-lg-2">
//             <p>Felippe Rodrigues</p>
//             <p>newsroom developer,
//                 data journalist</p>
//             <h6><a>fsorodrigues [at] gmail</a></h6>
//             <h6>
//                 <FontAwesomeIcon icon={['fab', 'facebook']} />
//                 <FontAwesomeIcon icon={['fab', 'twitter']} />
//                 <FontAwesomeIcon icon={['fab', 'instagram']} />
//                 <FontAwesomeIcon icon={['fab', 'github']} />
//                 <span className="text-muted">/fsorodrigues</span>
//             </h6>
//         </div>
//         <div className="col-12 col-md-9 col-lg-7">
//             <Tabs/>
//         </div>
//     </div>
//
// </div>
