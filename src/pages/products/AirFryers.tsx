import { Card } from "@/components/ui/card";
import { ProductFooter } from "@/components/layout/ProductFooter";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const AirFryers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">The Kitchen Independence Challenge: A Senior's Story</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Margaret stood in her kitchen, staring at the large conventional oven with a mix of frustration and concern. At 73, 
              she'd always taken pride in cooking her own meals, but lately, things had become more challenging. The heavy pots 
              and pans, the constant bending to check on food, the worry about forgetting to turn off the oven – these daily 
              struggles were slowly chipping away at her confidence and independence.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              Like many seniors, she found herself increasingly relying on microwave meals or skipping proper cooking altogether. 
              The joy of preparing her favorite crispy foods – the chicken wings her grandchildren loved, the roasted vegetables 
              she enjoyed – seemed to be slipping away. The fear of burns from hot oil or forgetting about food in the oven had 
              turned cooking from a pleasure into a source of anxiety.
            </p>

            <h2 className="text-3xl font-semibold mt-12 mb-6">The Air Fryer Revolution: A Game-Changing Solution</h2>

            <p className="text-xl text-gray-700 mb-6">
              This is where air fryers enter the picture, revolutionizing how seniors approach cooking. These compact, 
              user-friendly appliances offer a safer, simpler way to prepare delicious, crispy foods without the risks 
              and complications of traditional cooking methods. With built-in timers, automatic shut-off features, and 
              easy-to-use controls, air fryers are specifically designed to address the cooking challenges seniors face daily.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-semibold mb-6">From Frustration to Freedom: A Kitchen Revolution</h2>
            
            <p className="text-xl text-gray-700 mb-6">
              For too many seniors, the kitchen has become a source of anxiety rather than joy. The fear of burns from 
              hot oil, the struggle with heavy pots and pans, and the constant worry about leaving the stove on have 
              turned what should be a pleasurable activity into a daily challenge. Many find themselves relying on 
              unhealthy microwave meals or skipping proper meals altogether, impacting both their physical health and 
              emotional well-being.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              But imagine a different reality: A kitchen where cooking is once again a source of joy and independence. 
              Where the aroma of perfectly cooked meals fills the air, and family gatherings are centered around 
              delicious, home-cooked food. This isn't just a dream – it's the reality that an air fryer can bring 
              to your life.
            </p>

            <p className="text-xl text-gray-700 mb-8">
              With an air fryer, you can rediscover the pleasure of cooking without the worry. No more fear of hot oil 
              splashes. No more heavy lifting of pots and pans. No more anxiety about forgetting to turn off the stove. 
              Just simple, safe, and delicious cooking that puts you back in control of your kitchen and your independence.
            </p>

            <h2 className="text-3xl font-semibold mb-8">Our Top Recommended Air Fryers for Seniors</h2>
          </div>

          <div className="space-y-8 mb-12">
            <div className="space-y-8">
              {/* Premium Pick */}
              <Card className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full">
                  Premium Pick
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/lovable-uploads/da364eca-b340-43c3-a3d5-1e14a2c30840.png" 
                      alt="Philips Premium XXL Air Fryer" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold">9.9</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Philips Premium XXL Air Fryer</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Extra-large capacity perfect for family meals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Digital touchscreen with preset programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Dishwasher safe parts for easy cleaning</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full md:w-auto"
                      onClick={() => window.open("https://amzn.to/428Xi1S", "_blank")}
                    >
                      Check Price
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Best Value */}
              <Card className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full">
                  Best Value
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/lovable-uploads/256acd34-43ad-4f08-96ac-a09f6cae2ea4.png" 
                      alt="Ninja AF101 Air Fryer" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold">9.5</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Ninja AF101 Air Fryer</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Simple, intuitive digital controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>4-quart capacity ideal for 1-2 people</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Dishwasher-safe parts for easy cleanup</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full md:w-auto"
                      onClick={() => window.open("https://amzn.to/4gOukZz", "_blank")}
                    >
                      Check Price
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Budget Pick */}
              <Card className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-full">
                  Budget Pick
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/lovable-uploads/8b9d697e-95d3-4ef7-ac8b-1f0908f36e89.png" 
                      alt="Dash Compact Air Fryer" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold">9.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Dash Compact Air Fryer</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Simple dial controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Compact size perfect for small spaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 text-primary flex-shrink-0" />
                        <span>Lightweight and easy to store</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full md:w-auto"
                      onClick={() => window.open("https://amzn.to/3DNtmhQ", "_blank")}
                    >
                      Check Price
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-semibold mb-6">Your Journey to Kitchen Freedom Starts Here</h2>
            
            <p className="text-xl text-gray-700 mb-6">
              Every day we hear from seniors whose lives have been transformed by making the switch to an air fryer. 
              They tell us about rediscovering their love of cooking, about the pride they feel serving healthy, 
              home-cooked meals to their families again, and about the confidence they've regained in the kitchen.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              Whether you choose the premium features of the Philips XXL, the perfect balance of the Ninja AF101, 
              or the simplicity of the Dash Compact, you're not just buying an appliance – you're investing in your 
              independence, safety, and quality of life. Each of these models has been carefully selected to meet the 
              specific needs of seniors, with features like automatic shut-off, easy-to-read displays, and simple controls.
            </p>

            <p className="text-xl text-gray-700 mb-6">
              Don't let the joy of cooking become a thing of the past. With the right air fryer, you can embrace a 
              future where preparing meals is once again a pleasure, not a challenge. Take the first step toward 
              reclaiming your kitchen independence today.
            </p>
          </div>
        </div>
      </main>
      <ProductFooter />
    </div>
  );
};

export default AirFryers;
