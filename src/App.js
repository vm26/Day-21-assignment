import Card from './components/Card/Card'
import './App.css'
var data=[
  {
    title:'FREE',
    rate:'$0',
    user:'Single User',
    storage:'5GB Storage',   
    domain:'Free SubDomain'    
  },
  {
    title:'PLUS',
    rate:'$9',
    user:'5 Users',
    storage:'50GB Storage',    
    domain:'Free SubDomain'
   
  },
  {
    title:'PRO',
    rate:'$49',
    user:'Unlimited Users',
    storage:'150GB Storage',    
    domain:'Free SubDomains',
   
  }
];

function App() {
  return (
   <div class='outer-container'>   
    {
      data.map((ele,index)=>
        <Card key={index} title={ele.title} rate={ele.rate} user={ele.user} storage={ele.storage} domain={ele.domain}/>
      )
    }         
    </div>
  );
}

export default App;
