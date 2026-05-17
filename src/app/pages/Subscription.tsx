import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { CheckCircle2, Truck, Calendar, CreditCard, MapPin } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    id: "5-day",
    name: "5-Day Plan",
    description: "Weekday meals only",
    mealsPerWeek: 15,
    pricePerWeek: 89.99,
    popular: false,
  },
  {
    id: "7-day",
    name: "7-Day Plan",
    description: "Full week coverage",
    mealsPerWeek: 21,
    pricePerWeek: 119.99,
    popular: true,
  },
  {
    id: "custom",
    name: "Custom Plan",
    description: "Choose specific meals",
    mealsPerWeek: 12,
    pricePerWeek: 74.99,
    popular: false,
  },
];

export function Subscription() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("7-day");
  const [deliveryFrequency, setDeliveryFrequency] = useState("bi-weekly");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);
  const deliveryPrice = deliveryFrequency === "weekly" ? 9.99 : 4.99;
  const totalPrice = selectedPlanData ? selectedPlanData.pricePerWeek + deliveryPrice : 0;

  const handleSubscribe = () => {
    if (!address.street || !address.city || !address.state || !address.zip) {
      toast.error("Please complete your delivery address");
      return;
    }

    toast.success("Subscription activated!", {
      description: "Your first delivery will arrive next week.",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Subscribe to Diabetes-Friendly Meal Delivery</h1>
          <p className="text-gray-600">
            Carb-controlled, blood sugar-friendly meals delivered to your door. Every meal includes exact carb counts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Plan Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Plan</CardTitle>
                <CardDescription>Select how many meals you'd like each week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedPlan === plan.id
                                ? "border-green-600 bg-green-600"
                                : "border-gray-300"
                            }`}
                          >
                            {selectedPlan === plan.id && (
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{plan.name}</h3>
                              {plan.popular && (
                                <Badge className="bg-green-600">Most Popular</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{plan.description}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {plan.mealsPerWeek} meals per week
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">${plan.pricePerWeek}</p>
                          <p className="text-sm text-gray-500">per week</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Frequency */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Delivery Frequency
                </CardTitle>
                <CardDescription>How often would you like to receive meals?</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={deliveryFrequency} onValueChange={setDeliveryFrequency}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="bi-weekly" id="bi-weekly" />
                    <Label htmlFor="bi-weekly" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Every 2 Weeks</div>
                      <div className="text-sm text-gray-600">$4.99 delivery fee</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Weekly</div>
                      <div className="text-sm text-gray-600">$9.99 delivery fee</div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Address
                </CardTitle>
                <CardDescription>Where should we deliver your meals?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    placeholder="123 Main St"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="San Francisco"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="CA"
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input
                    id="zip"
                    placeholder="94102"
                    value={address.zip}
                    onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-semibold">{selectedPlanData?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Meals per week</span>
                    <span className="font-semibold">{selectedPlanData?.mealsPerWeek}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-semibold capitalize">{deliveryFrequency}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Meal Plan</span>
                    <span>${selectedPlanData?.pricePerWeek.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>${deliveryPrice.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total per week</span>
                  <span className="text-green-600">${totalPrice.toFixed(2)}</span>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-green-900 mb-1">Every Meal Includes</p>
                      <ul className="space-y-1 text-green-800">
                        <li>• Exact total & net carb counts</li>
                        <li>• Low glycemic index foods</li>
                        <li>• Balanced protein & fiber</li>
                        <li>• CDCES-approved recipes</li>
                        <li>• Flexible cancellation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                  onClick={handleSubscribe}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Subscribe Now
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Cancel anytime. No long-term commitment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
