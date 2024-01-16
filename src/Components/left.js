import React from 'react';
import './style.css'

// left component implementation 
// simply a headline and some social links have been displayed 
const Left = (props) => {
    return (
        <div className="left">
            <div className="bg-img"></div>
            <div className="left-inner">
                <div className="info">
                    <h2 className="name">{props.name}</h2>
                    <div className="subtext">{props.subtext}</div>
                    <div className="jobStatus">{props.jobStatus}</div>
                    <div className="social-links">
                        <a href={props.twitterURL} rel='noreferrer' target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                        <a href={props.instaURL} rel='noreferrer' target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href={props.githubURL} rel='noreferrer' target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                        <a href={props.linkedinURL}  rel='noreferrer' target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
