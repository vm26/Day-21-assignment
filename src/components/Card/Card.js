import './Card.css'
function Card(props){   
    return(    
        <div className='inner-container'>
            <div className='header'>                
            <p className='title'>{props.title}</p>
           <h1>{props.rate}<span class="size">/month</span></h1>
            </div>
            <div className='body'>
            <p><i class="fas fa-check"></i>{props.title!=='FREE'?<b>{props.user}</b>:props.user}</p>
            <p><i class="fas fa-check"></i>{props.storage}</p>
            <p><i class="fas fa-check"></i>Unlimited Public Projects</p>
            <p><i class="fas fa-check"></i>Community Access</p>
            {props.title==='FREE'?<p class='light'><i class="fas fa-times"></i>Unlimited Private Projects</p>:<p><i class="fas fa-check"></i>Unlimited Private Projects</p>}
            {props.title==='FREE'?<p class='light'><i class="fas fa-times"></i>Dedicated Phone support</p>:<p> <i class="fas fa-check"></i>Dedicated Phone support</p>}               
            {props.title==='PRO'?<p><i class="fas fa-check"></i><b>Unlimited </b>{props.domain}</p>:props.title==='FREE'?<p class='light'><i class="fas fa-times"></i>{props.domain}</p>:<p><i class="fas fa-check"></i>{props.domain}</p>}
            {props.title==='PRO'?<p><i class="fas fa-check"></i>Monthly status Reports</p>:<p class='light'><i class="fas fa-times"></i>Monthly status Reports</p>}    
            <button className='btn'>BUTTON</button>      
            </div>        
        </div>    
    );
}
export default Card;
