import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
     <div>
       <p style= {styles.header}> React webpack starter application </p>
     </div> 
    );
  }
}
const styles = {
  header: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: '42px'
    
  }
}

export default App; 
