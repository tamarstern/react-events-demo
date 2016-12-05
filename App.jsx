import React from 'react';


class App extends React.Component {
   
   constructor() {
      super();
		
      this.state =  {
             data: []
         
      };

      this.updateState = this.updateState.bind(this);
   }
    

   updateState(e) {
      var fromMale = e.fromMale;
      var fromFemale = e.fromFemale;
      if(fromMale == true) {
          this.setState({
            data:  [
            {
               "name":"Oren"
            },				
            {
               "name":"Lior"
            },
            {
               "name":"Alon"
            },
            {
               "name":"Amir"
            }, 
            {
               "name":"Yoav"
            },
            {
               "name":"Jonathan"
            },
            {
               "name":"Michael"
            }
         ]
        });
      } else if(fromFemale == true) {
          this.setState({
            data:  [
             {
               "name":"Tamar"
            },				
            {
               "name":"Ayala"
            },
            {
               "name":"Liron"
            },
            {
               "name":"Michal"
            },
            {
               "name":"Ella"
            },
         ]
        });
      }
      
   }
   
   maleButtonClick(e) {
    e.fromMale = true;
    e.fromFemale = false;
    this.updateState(e);
   }

  femaleButtonClick(e) {
      e.fromFemale = true;
      e.fromMale = false;
      this.updateState(e);
   }

   
   render() {
      
      return (
          <div>
            <h1>Choose Gender</h1>
            <button type="button" onClick={(e) => this.maleButtonClick(e)}>Male</button>
            <button type="button" onClick={(e) => this.femaleButtonClick(e)}>Female</button>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}



class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
         </tr>
      );
   }
}



export default App;
