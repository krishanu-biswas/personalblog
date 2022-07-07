import React from "react";
import logo from "./logo.png";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      newItem: { id: "", img: null, text: "" },

      list: []

    }
  }


  addItem = (event) => {
    // console.log(this.state.newItem);
    event.preventDefault();

    if (1) {
      const newItem = {
        id: Date.now(),
        img: this.state.newItem.img,
        text: this.state.newItem.text
      }
      const list = [...this.state.list];
      // console.log(newItem);
      list.push(newItem);
      this.setState({
        list,
        newItem: { id: "", img: null, text: "" }

      });

    }


  }
  // fileData = () => {
  //   console.log(this.state.list);

  //   if (this.state.list.length > 0) {
  //     return (
  //       this.state.list.map((item, index) => {
  //         <div key={index}>
  //           {/* <div>
  //             {item.img}

  //           </div> */}
  //           <div>
  //             {item.text}
  //           </div>

  //         </div>
  //       })

  //     );
  //   }
  // }
  handleChange(event) {
    const oldstate = this.state;
   
    const itm=URL.createObjectURL(event.target.files[0]);
    oldstate.newItem.img=itm;
    this.setState(oldstate);
  }
  handleText(event) {
    const oldstate = this.state;
    oldstate.newItem.text = event.target.value;
    this.setState(oldstate);
  }

  render() {




    return (
      <>

        <div >
          <header className='App-header'>
            <img src={logo} className='App-logo' />

          </header>
          <div className="container">
            <h3>LIST AN ITEM ...</h3>

            <br />
            <input type="file" className="input-image" placeholder="choose image" onChange={(event) => this.handleChange(event)} />
            <br />
            <input type="text" className="input-title" placeholder="Write a title" value={this.state.newItem.text} onChange={(event) => this.handleText(event)} />
            <br />
            <button className="publish" onClick={(event) => this.addItem(event)}>publish</button>


            <div className="ads" >
              {this.state.list && this.state.list.map((item, index) =>
                <div className="pdt">

                  <img className="output-img" id={index} src={item.img} />
                  <br />
                  <p className="pdt-txt" id={index}>{item.text}</p>
                </div>)}


            </div>




          </div>


        </div>
      </>
    );

  }
}
export default App;


