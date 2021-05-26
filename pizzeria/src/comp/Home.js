import React from 'react';
import './home.css'
import Home3 from './Home3.png';
import Home1 from './Home1.png';
import Home2 from './Home2.png';


export default class Home extends React.Component{

    render(){
        return(
            <div class="container">
                <div class="text-center">       
                    <h2>Our Story</h2>
                </div>
                

                <div>
                    <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
h wacky and tun excuses The person witn the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
that Pizzeria's Fresn Pan Pizza is the Tastiest Pan Pizza. Ever !</p>
                </div>

                <div>
                    <p>
                    Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
Pizza They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
                    </p>
                </div>

                <div>
                    <p>We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
h wacky and tun excuses The person witn the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
that Pizzeria's Fresn Pan Pizza is the Tastiest Pan Pizza. Ever !</p>
                </div>

                <br />
                
                <div class="row">
                    <div class="col-lg-6">
                        <img src={Home3} alt="home"/>
                    </div>

                    <div class = "col-lg-6">
                        <br/><br/><br/>
                        <div class="row">
                            <h3>Ingredients</h3>
                        </div>
        
                        <div class="row">
                            <p>We're ruthless about goodness. We nave no qualms about tearing up a day-old
lettuce leat (straight trom the farm), or steaming a baby (carrot). Cut Cut Chop.
Chop. Steam. Steam. Stir Stir. While they're still young and tresn - that's our motto. It
makes the kitchen a better place</p>
                        </div>
                    </div>

                </div>

                <div class="row">
                    
                    <div class = "col-lg-6 ">
                        <br/><br/><br/><br/>
                        <div class="row">
                            <h3>Our Chefs</h3>
                        </div>

                        <div class="row">
                            <p>They make sauces sing and salads dance. They create magic witn skill,
knowledge, passion, and stirring spoons (among other things). They
make goodness so good, It doesn't know what to do witn itself. We do
though. We send it to you.</p>
                        </div>
                    </div>

                    <div class="col-lg-6 pull-right">
                        <img src={Home1}  alt="Chef" />
                    </div>

                </div>

                <div class="row">

                <div class="col-lg-6 pull-left">
                        <img src={Home2} width='100%' alt="DeliveryTime"/>
                    </div>
                    
                    <div class = "col-lg-6">
                        <br/><br/><br/><br/><br/><br/>
                        <div class="row">
                            <h1>45 min delivery</h1>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <center><p>Copyrights @ 2021 Pizzeria. All rights reserved</p></center>
                </div>
            </div>
        )
    }
}