import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Pages/Hello';

let appNode = document.querySelector('#app');
ReactDOM.render(<Hello compiler='TypeScript' framework='React' />, appNode);
