import * as React from 'react';
import '../shared/css/Component.css'

class Header extends React.Component {
  public constructor(props: any){
    super(props)
  }
  public render() {
    return (
      <div className="App">
        <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 mt-4">@AnsontheProgrammer</h1>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
          </div>
        </div>
        <div className="container header">
          <div className="row">
            <div className="col-md-4">
              <h2>Updates to One Stream</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
            <div className="col-md-4">
              <h2>Future of Music Streaming</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
            <div className="col-md-4">
              <h2>Everything Music</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
          </div>

        </div> 

        </main>
      </div>
    );
  }
}

export default Header;