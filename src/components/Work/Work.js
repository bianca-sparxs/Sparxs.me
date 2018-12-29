import React, { Component } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import BHacks from '../BHacks';
import InnT from '../InnT';
import TSM from '../TSM';
import Routes from '../Routes';


class Work extends Component {
  render() {
    return (
      
      <div className="Work">
        <Grid fluid>
					<Row>
						<Col md={4}> WHy aren't you working omg</Col>
						<Col md={8}> 
							<BHacks />
        			<InnT />
        			<TSM />
						</Col> 
							
					</Row>
        
        </Grid>
        

      </div>
    
    );
  }
}

export default Work;
