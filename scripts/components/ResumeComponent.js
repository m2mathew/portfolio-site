'use strict';

let React = require('react');

module.exports = React.createClass({


	render () {

		return (
			<section className="container resume-box">
				<div className="title">
					<h1 className="text-left">Mike Mathew</h1>
					<h3 className="text-left">front end web developer</h3>
				</div>

				<div className="row col-lg-10 col-lg-offset-1">
					<h3>Summary</h3>
					<p>My journey has taken me from leading young people and teaching bands and drum lines around Texas to making websites and web applications for everyone. As I continue to grow as a developer, I would love to work alongside a collaborative team that values education and community.</p>
					<p>In my previous positions, I was able to practice daily public speaking and leading groups of all sizes through a variety of projects. I remain excited about education and hope to use my influence to make my community a better place each day.</p>
				</div>

				<div className="row col-lg-10 col-lg-offset-1">
					<h3>Specialties </h3>
					<p><strong>Skills and Languages:</strong></p>
					<p>JavaScript, HTML5, CSS3, DOM, jQuery, React, Backbone, Web Applications, Web Development</p>
					<p><strong>Computer & Operating Systems:</strong></p>
					<p>Mac OS X,  iWork suite (Pages, Numbers, Keynote), MS Office (Word, Excel, PowerPoint), Sibelius 7, Virtual Drumline 2</p>
				</div>

				<div className="row col-lg-10 col-lg-offset-1">
					<h3>Education</h3>
					<p><strong>The Iron Yard</strong>, Austin, Texas · Front End Engineering Certification (November 2015)</p>
					<p><strong>Texas A&M University-Commerce</strong>, Commerce, Texas  · Candidate for Master of Music Education (Summer 2016)  · Bachelor of Science in Music Education (May 2002)</p>
				</div>

				<button id="resume-button" className="btn-lg col-lg-8 col-lg-offset-2"><a href="../../assets/Resume-Michael_Mathew.pdf">Get the .pdf!</a></button>

			</section>
		);
	}
});
