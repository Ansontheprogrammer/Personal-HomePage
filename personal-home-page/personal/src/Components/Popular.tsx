import * as React from 'react';
import '../App.css';
import '../shared/css/Component.css'


export function getCarousel(){
	return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
	{/*Carousel*/}
	<ol className="carousel-indicators">
	  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"/>
	  <li data-target="#carousel-example-generic" data-slide-to="1"/>
	  <li data-target="#carousel-example-generic" data-slide-to="2"/>
	</ol>

	<div className="carousel-inner" role="listbox">
	  <div className="item active">
		<img src="..." alt="..."/>
		<div className="carousel-caption">
		  ...
		</div>
	  </div>
	  <div className="item">
		<img src="..." alt="..."/>
		<div className="carousel-caption">
		  ...
		</div>
	  </div>
	  ...
	</div>
  
	{/*Controls*/}
	<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
	  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>
	  <span className="sr-only">Previous</span>
	</a>
	<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
	  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"/>
	  <span className="sr-only">Next</span>
	</a>
  </div>
}
class Popular extends React.Component {

  public render() {
    return (
   		<div>
				 <h2>Finished Projects</h2>
			</div>
    );
  }
}

export default Popular;