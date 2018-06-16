import React from 'react';

import {CategoryMenu} from './categoryMenu';
import * as Routes from '../../config/navigation/routesBuilder';



export class LoginMenu extends React.Component {
  static navigationOptions = {
    title: 'Login'.toUpperCase()
  };
  render() {
    return (
     <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes}/>
    )
  }
}
