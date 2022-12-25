import chrome from './img/chrome.png';
import vscode from './img/vscode.png';
import nodejs from './img/nodejs.png';
import npm from './img/npm.png';
import git from './img/git.png';

const DisplayImg = () => {

    return (
        <div className='d-flex justify-content-center custom-padding me-4'>
           <img className="me-4" src={chrome} style={{height:"100px"}}/>
           <img className="me-4" src={vscode} style={{height:"100px"}}/>
           <img className="me-4" src={nodejs} style={{height:"100px"}}/>
           <img className="me-4" src={npm} style={{height:"100px"}}/>
           <img className="me-4" src={git} style={{height:"100px"}}/>
        </div>
    )
}

export default DisplayImg;