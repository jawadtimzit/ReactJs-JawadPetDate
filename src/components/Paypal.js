import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../csscomponent/Paypal.css";

function Paypal() {
  return (
    <div className="container" style={{marginTop:40}}>
    <section class="about-section" id="about-section">
        <div >
        <img height="300" src="/images/gift-set.jpg" className="image-set-toys"/>
        </div>
        <div className="content-about">
            <h3 className='h3-foodog'>They’ll <span className="dogfood-span">Love</span> the Select</h3>
            <p className="dog-food-p">Buy gifts to your dogs, you don't have to guess what they like. 
                Get a Free Doggie Bag Everyday Tote When You Buy 3 or More Toys From Tall Tails. 
                Featuring Their Newest Plush Toys Designed for Interactive Fun with Your Dog! 
                Use the Code iDog at Checkout to Claim Offer and Receive FREE shipping on US orders over $75.
            </p>

            </div>
    </section>
    
    
    <div  className="container" style={{textAlign:'center'}}>
      
      
      <p>
        <span className="book-price"></span>
      </p>
      <PayPalScriptProvider
        options={{ "client-id": "put your clinet id here" }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    ccurrency_code: "USD",
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
    </div>
  );
}

export default Paypal;