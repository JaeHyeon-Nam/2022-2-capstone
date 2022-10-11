import React, {Component} from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Page2 from "./mainpage/Page2"


class RouterComponent extends Component{

    state = {
        openDrawer:false
    }


    render(){
        return(

                <BrowserRouter>

                        <Switch>
                            <Route path="/" render={(props) => (<Page2 openDrawer = {this.state.openDrawer}/>)}/>
                            
                          
                        </Switch>

                </BrowserRouter>

        )
    }
}



export default RouterComponent;