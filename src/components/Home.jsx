import React from 'react';
import { Fade } from 'react-reveal';

const Home = () => {
    return (
        <div id='home'>
            <Fade left>
                <div className="whoami">
                    <h1 className='hello'>Hello there 😎</h1>
                    <p className="presentig-myself" style={{width:370+'px'}}>
                        I'm <span>Marko Prifti</span> 🇦🇱. I'm a Full-Stack Developer! I love to work with disciplined people and have great communication! It'll be great working with ya!
                    </p>
                    <Fade top>
                        <div className="tk-blob blob1" style={{'fill': '#1cf309'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
                                <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z" />
                            </svg>
                        </div>
                        <div className="tk-blob blob2" style={{'fill': '#1cf309'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.5 353.7">
                                <path d="M291.8 55.3c30.4 39.9 30.7 102 17 160.4-13.8 58.3-41.6 112.9-84 130.9s-99.3-.6-137-30C50.2 287.1 32 246.9 17 200.5 2.1 154.1-9.6 101.4 11.5 63.6 32.6 25.8 86.6 2.8 143.8.2c57.2-2.6 117.6 15.2 148 55.1z" />
                            </svg>
                        </div>
                    </Fade>
                </div>
            </Fade>
            <Fade right>
            <div className="my-stack">
                <h1 className='stack1'>My skills 🖥</h1>
                <p>As presented, this is the stack I work with in my projects.</p>
            </div>
            <div className='icons'>
                        <img id='icon'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        <img id='icon'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                        <i className="devicon-django-plain-wordmark" style={{color: 'white'}}></i>
                        <i className="devicon-tailwindcss-original-wordmark colored" style={{marginLeft: 10+'px', fontSize:95+'px'}}></i>
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" />
                        <img id='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />















            </div>
            </Fade>
        </div>
    );
}

export default Home;
