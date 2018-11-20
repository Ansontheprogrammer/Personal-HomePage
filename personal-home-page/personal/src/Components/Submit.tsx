import * as React from 'react';
import { addProject } from '../redux/actions';
import '../shared/css/Component.css'

export function submitForm(){
  addProject({
    // sample project
    description: 'this is a sample',
    devDeadline: new Date,
    id: 0,
    name: 'sample',
    prodDeadline: new Date,
    rating: 'pending',
  })
}

class Submit extends React.Component {
  public render() {
    return (
   		<div>
         <button onClick = {submitForm}>click to submit</button>
      </div>
    ) 
  }
}

export default Submit;