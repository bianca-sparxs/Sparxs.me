import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import '../../App.css';
import Button from '@material-ui/core/Button';
// import Routes from "../Routes";

var Rojo = {
	backgroundColor: "red",
	height: "100vh",
	width: "100%"
};
	




class BHacks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}

		this.grow = this.grow.bind(this);

	}

	grow = () => {
		this.setState({ active: !this.state.active });
	}

    render(){
			const { active } = this.state
			let content = active ? "expanded" : "collapsed";
			// const { toggleGrow } = expanded ? 'expanded' : 'collapsed'; 
			return (
				
				<Grid fluid>
					{/* <Routes /> */}
					<Row>
						<Col md={12}>
							<div>
							<button onClick={this.grow} >
								{active ? 'View Less' : 'View More'}
							</button>
							<div className={content}>
								Halvah jelly beansp liquorice jelly macaroon gummi bears tootsie roll gummi bears sweet. Sesame snaps powder donut lemon drops lollipop lemon drops cake danish. Croissant brownie chocolate bar dragée chocolate gummi bears croissant muffin cupcake. Cheesecake cake sweet roll cake danish dessert cupcake icing. Chocolate bar cookie brownie pastry croissant chocolate cake jelly beans oat cake powder. Carrot cake macaroon cookie halvah cake candy apple pie brownie. Macaroon tart marshmallow jujubes wafer sweet roll wafer chupa chups. Danish chupa chups cheesecake tart. Lollipop toffee marshmallow. Danish bonbon dragée carrot cake jelly gingerbread danish chocolate cake. Tart marzipan sweet sugar plum. Soufflé cupcake bear claw. Cupcake macaroon chupa chups. Dessert chocolate cake bonbon jujubes tiramisu.

Jujubes cheesecake dragée cookie lemon drops dessert cake. Gummies gingerbread gummies tart topping powder dessert soufflé. Bonbon lemon drops chupa chups dragée marshmallow caramels toffee powder. Sweet halvah pudding wafer topping. Cake candy cupcake. Halvah halvah lollipop. Marshmallow candy canes apple pie cake tootsie roll chupa chups muffin marzipan candy canes. Biscuit biscuit carrot cake croissant cookie. Jelly sweet roll soufflé macaroon pastry cupcake toffee topping candy canes. Jujubes toffee topping gingerbread jelly dragée. Soufflé lemon drops sesame snaps jujubes caramels caramels marzipan chupa chups. Cotton candy dragée chocolate cookie cake apple pie icing sweet chocolate bar. Apple pie bear claw jelly beans chocolate cake brownie biscuit. Pastry topping ice cream chocolate cake cookie cotton candy soufflé soufflé gummies.

Candy tiramisu topping marzipan ice cream jelly-o. Tootsie roll liquorice lollipop pie cheesecake. Tiramisu marshmallow candy canes pastry pastry caramels ice cream. Donut cake gingerbread candy cheesecake. Candy canes topping cake sesame snaps chocolate liquorice gingerbread caramels. Lemon drops ice cream macaroon cookie chocolate cake. Pastry halvah carrot cake soufflé jelly jelly beans. Jelly soufflé muffin chupa chups tart cookie wafer. Cupcake cheesecake dessert bear claw bonbon sesame snaps cookie. Powder carrot cake cake lollipop liquorice jelly-o sesame snaps. Cotton candy lollipop chocolate cake halvah pie tootsie roll tiramisu cupcake brownie. Icing chocolate sweet roll caramels danish sugar plum.

Dessert cake jelly cake wafer cake jujubes. Pastry toffee lollipop ice cream candy lollipop tart. Danish cotton candy danish danish tootsie roll tiramisu apple pie. Biscuit bonbon bear claw bear claw cotton candy marshmallow brownie dragée icing. Toffee powder sesame snaps croissant apple pie cake donut halvah gingerbread. Caramels marzipan liquorice jelly-o lollipop donut. Gummi bears gingerbread dessert donut cake. Cookie bonbon topping chocolate bar. Jelly cookie apple pie toffee tart. Macaroon marzipan sweet roll. Chocolate bar lemon drops halvah donut cupcake marshmallow. Topping croissant tootsie roll. Danish biscuit chocolate cheesecake jelly beans toffee tootsie roll tootsie roll pie.
							</div>
							
								{active && <div> show more text </div> }
								<h1>{active ? "TRUE MAKE LONG" : "FALSE BE GONE"}</h1>


							</div>
						</Col>
					
						
		
										
					</Row>
					

				</Grid>
				

			);
	}
}


BHacks.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  shortBio: PropTypes.string
};

BHacks.defaultProps = {
  title: "Project Name",
  date: "Month Year",
  shortBio: "Like a 100 word "
};

export default BHacks;


