import React,{useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './Style.css'
function App() {
  

  return(
    <div >
      <div className='Container' >
       <div className='box1' >
         <div className='box' id='bx' >
           <h1 style={{color:'yellow',fontStyle:'italic',fontWeight:'lighter'}} >FingerFood</h1>
           <table  >
            <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Mozzrella Sticks</td>
              <td>6pcs</td>
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Chicken Nuggets</td>
              <td>6pcs</td>
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Chilli-chese Nuggets</td>
              <td>6pcs</td>
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Kartofellechen</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Rindsmurt mit Brochen</td>
              
              <td>3,80</td>
              </tr>
              <br/>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
                <td>Dips</td>
                <td>0,50</td>              
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:200}} >
                <td>Wdhlodr</td>
                <td>for</td>              
                <td style={{color:'yellow'}} >FingerFood</td>              
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:200}} >
                <td>Barbeque</td>
                <td>Salsa</td>              
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:250}} >
                <td>Sour Cream</td>
                <td>Cheddar Chicken</td>              
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
                <td>Gaurcamole</td>
                             
              </tr>
           </table>
         </div>
         <div className='box' >
         <h1 style={{color:'lightgreen',fontStyle:'italic',fontWeight:'lighter'}} >Salat</h1>
           <table  >
            <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Hahchen salat</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Thungfisch</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Avacado salat</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Beligaon salat</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Krasault salat</td>
              
              <td>3,80</td>
              </tr>
              
           </table>
         </div>
         <div className='box' >
         <h1 style={{color:'crimson'}} >Extras</h1>
           <table  >
            <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Burger Patty</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Chicken patty</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Cheddar kalse</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Beacon(pute)</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Spiegelei</td>
              
              <td>3,80</td>
              </tr>
              
           </table>
         </div>
         <div className='box' >
         <h1 style={{color:'yellow',fontStyle:'italic',fontWeight:'lighter'}} >Fries</h1>
           <table  >
            <tr style={{display:'flex',justifyContent:'space-between',width:400}} >
              <td>Pommes</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Sobkhartofien</td>
              
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>Chilli-chese fries</td>
            
              <td>3,80</td>
              </tr>
              <tr style={{display:'flex',justifyContent:'space-between',width:400}}>
              <td>chese fries</td>
              
              <td>3,80</td>
              </tr>
                            
           </table>
         </div>
         <div className='box' id='foodPara' >
         A burger is a so tasty food. ... burger has some good specialities and some bad. Good specialities are this that it contain salad like tomato,cucumber,onion etc. It is so big food that we are so hungry and if we eat it than our stomach will fill so much.
         </div>
       </div>
       <div className='box2' >
       <div className='boxs'  >
         <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7oUHZWbONck8MO60euG2LYFNH_ey1fsvV-41zx5bppyrOUYhRazmIRcZfaNBlCoXgaY&usqp=CAU' style={{height:200,width:440}} />
       </div>
       <div className='boxs' id='boxinf' >
         <div className='boxsinfo' >
           <h1>Offnungszeiten</h1>
           <p>Mo-So 11:30-22:30 Uhr</p>
         </div>
         <div className='boxsinfo' >
           <h1>Einfach Vorbestellen</h1>
           <p>06181/966 98 77</p>
         </div>
       </div>  

       <div className='boxs' id='boximg' >
         
         <div className='boximg1' >
         <h1 style={{color:'white'}} >Burger</h1>
           <img src='https://digitalmarketing.blob.core.windows.net/13481/images/items/image713102.png' style={{height:220,width:220}} />
         </div>
         <div className='boximg2' >
         <h1 style={{color:'white'}} >Buggates</h1>
         <img src='https://digitalmarketing.blob.core.windows.net/13481/images/items/image713102.png' style={{height:230,width:220}} />

         </div>
       </div>
       <div className='boxs' id='contactInfo' >
         <h1>Kanaltorplatz 10</h1>
         <p>63450 Hanau</p>
         <div className='ContactImg' >
           <div className='contImg' >
         <img src='https://ak.picdn.net/shutterstock/videos/1063781113/thumb/5.jpg?ip=x480' style={{height:120,width:150,marginTop:-35,marginLeft:-20}} ></img>
           </div>
           <div className='contImg' >
         <img src='https://static.digit.in/default/73db3ef096146a5100f8c442557de9629b2f2f5b.jpeg?tr=w-1200' style={{height:50,width:100,marginLeft:-20}} ></img>
           </div>
         {/* <img src='https://ak.picdn.net/shutterstock/videos/1063781113/thumb/5.jpg?ip=x480' style={{height:50,width:50}} ></img> */}
         </div>
         <p>#burgerfoodhanau</p>
       </div>
       </div>
      </div>
    </div>
  );
}

export default App;
