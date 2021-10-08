import HoneyImage from '../../Images/guatemalahoneyprocess.png';
export default function Home(){
    return(

        <div>

            <img src={HoneyImage} alt="HoneyImage"/>

            <h1>This Summer, Help Us Cut Out the Middle Men of the 
                Coffee Industry to Directly Support Women Coffee Growers by 
                Purchasing a Rare Honey-Process Coffee!</h1>

            <h4>This unique coffee comes from our friends at Chica Bean,
                 an organization dedicated to providing more economic opportunity 
                 for their collective of women coffee growers. Check out all the 
                 great work that Chica Bean does on their website: www.chicabean.com</h4>
            
            <h4>This rare honey-process coffee is made by allowing the natural pulp of 
                the coffee cherry fruit to remain on during the drying process, giving
                 this coffee a unique natural nectary sweetness similar to honey!</h4>
            
            <button>Purchase Here</button>
        </div>

    );
}