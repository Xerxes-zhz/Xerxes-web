import './nav.css';
// import hello from './axios'
import Axios from "axios";
function Nav(){
    hello1()
    return (
        <body>
            <h1>Xerxes-web</h1>
            <div id='clock' />
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/">git</a> 
                    </li>
                    <li>
                        <a href="https://baidu.com">baidu</a>
                    </li>
                    <li>
                        <a href="#">Russia Block</a>
                    </li>
                </ul>
            </nav>
            <script>
                
            </script>
        </body>
    )
    
}
function hello1(){
    // const axios = require('axios');
    Axios.get('/')
    .then(function (response){
        console.log('response: ',response.data);
    })
    .catch(function (error){
        console.log("error: ",error);
    })
    
    // return response
}

export default Nav;