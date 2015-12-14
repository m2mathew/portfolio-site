'use strict';

let React = require('react');
let Modal = require('react-bootstrap').Modal;

module.exports = React.createClass({
	getInitialState() {
	   return { showModal: false };
	},
  	close() {
    	this.setState({ showModal: false });
  	},
	open() {
    	this.setState({ showModal: true });
  	},
	componentWillMount() {
	    $('#myModal').on('shown.bs.modal', () => {
			$('#myInput').focus()
		});
	},
	render () {

		return (
			<div className="container about-box">
				<div className="row text-justify">
					<h3><strong>HOW TO MAKE A FRONT END DEVELOPER NAMED MIKE</strong> &bull; FALL IN LOVE WITH LEARNING &bull; GET A TRS-80 FROM UNCLE RICKY AND LEARN TO PROGRAM IN BASIC &bull; START HITTING THINGS WITH DRUMSTICKS &bull; PLAY LOTS OF VIDEO GAMES &bull; TAKE TWO YEARS OF COMPUTER SCIENCE IN HIGH SCHOOL USING C++ AND TURBO PASCAL &bull; SIT NEXT TO FUTURE WIFE IN COMPUTER SCIENCE &bull; MAJOR IN MUSIC EDUCATION IN COLLEGE &bull;

						<a data-toggle="modal" href="#dci" className="text-callout">TOUR AND PERFORM WITH A DRUM AND BUGLE CORPS</a>

                      <div className="modal fade" id="dci" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div>
                              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>

                            </div>
                            <div className="modal-body">
                              <img className="modal-pic" src="../../images/drum-corps-crown-2000.jpeg" alt="Mike on tour with Carolina Crown 2000"/>
                            </div>
                            <h4 className="modal-title">I marched with the Troopers in 1996 and Carolina Crown in 2000, both playing quads in the drum line. This experience is unlike anything else. We traveled on charter buses for a summer and stayed in high schools in each city. It is kind of like the army meets marching band.</h4>

                          </div>
                        </div>
                      </div>

					&bull; SPEND EQUAL TIME WRITING MUSIC ON A COMPUTER AS PERFORMING IT &bull; GET MARRIED TO YOUR HIGH SCHOOL SWEETHEART &bull; GRADUATE COLLEGE AND TEACH MUSIC FOR OVER A DECADE &bull; MAKE WEBSITES FOR YOUR BAND PROGRAMS &bull; HAVE THREE KIDS ALONG THE WAY &bull; BECOME THE GUARDIAN FOR YOUR BROTHER &bull; REALIZE THAT YOU SPEND AS MUCH TIME FORMATTING AN EMAIL AS TEACHING &bull; START LEARNING MORE CODE &bull; SWITCH GEARS FROM BEING A BAND DIRECTOR TO A WEB DEVELOPER &bull; ENROLL AT A CODE SCHOOL THREE HOURS FROM HOME &bull; KEEP LEARNING AND MAKING AWESOME THINGS.</h3>
				</div>
			</div>
		);
	}
});
