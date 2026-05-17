import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar } from "../components/ui/calendar";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { CheckCircle2, Award, Clock, Video } from "lucide-react";
import { toast } from "sonner";

const dietitians = [
  {
    id: 1,
    name: "Dr. Sarah Martinez",
    credentials: "RD, CDCES",
    specialty: "Type 2 Diabetes & Weight Management",
    experience: "12 years",
    bio: "Certified Diabetes Care and Education Specialist helping Type 2 patients lower A1C through carb control, weight management, and medication optimization.",
    rating: 4.9,
    consultations: 850,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    credentials: "RD, CDCES, CDE",
    specialty: "Type 1 Diabetes & Insulin Management",
    experience: "10 years",
    bio: "Expert in insulin-to-carb ratios, pump therapy, and CGM integration for Type 1 diabetes and insulin-dependent Type 2.",
    rating: 4.8,
    consultations: 620,
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    credentials: "RD, CDCES, BC-ADM",
    specialty: "Prediabetes & Prevention",
    experience: "15 years",
    bio: "Board-certified in Advanced Diabetes Management, specializing in reversing prediabetes and preventing Type 2 diabetes through lifestyle changes.",
    rating: 5.0,
    consultations: 1200,
  },
  {
    id: 4,
    name: "Dr. James Patterson",
    credentials: "RD, CDCES",
    specialty: "Diabetes Complications & Comorbidities",
    experience: "8 years",
    bio: "Specializes in managing diabetes with kidney disease, heart disease, or neuropathy through targeted nutrition therapy.",
    rating: 4.7,
    consultations: 480,
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export function Consultation() {
  const navigate = useNavigate();
  const [selectedDietitian, setSelectedDietitian] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  const handleSelectDietitian = (id: number) => {
    setSelectedDietitian(id);
    setShowBooking(true);
  };

  const handleBookConsultation = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your consultation");
      return;
    }

    toast.success("Consultation booked successfully!", {
      description: "You'll receive a confirmation email shortly.",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const selectedDietitianData = dietitians.find((d) => d.id === selectedDietitian);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {!showBooking ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Book a Diabetes Consultation</h1>
              <p className="text-gray-600">
                Connect with a Certified Diabetes Care and Education Specialist (CDCES) who can help optimize your diabetes management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dietitians.map((dietitian) => (
                <Card key={dietitian.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-green-600 text-white text-lg">
                          {dietitian.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="mb-1">{dietitian.name}</CardTitle>
                        <p className="text-sm text-gray-600 mb-2">{dietitian.credentials}</p>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {dietitian.specialty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{dietitian.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {dietitian.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {dietitian.consultations} consultations
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        {dietitian.rating}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => handleSelectDietitian(dietitian.id)}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={() => {
                setShowBooking(false);
                setSelectedDietitian(null);
                setSelectedDate(undefined);
                setSelectedTime(null);
                setNotes("");
              }}
              className="mb-6"
            >
              ← Back to Dietitians
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Selected Dietitian</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDietitianData && (
                    <div>
                      <Avatar className="w-20 h-20 mb-4">
                        <AvatarFallback className="bg-green-600 text-white text-xl">
                          {selectedDietitianData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{selectedDietitianData.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedDietitianData.credentials}
                      </p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
                        {selectedDietitianData.specialty}
                      </Badge>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>60 minute session</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-gray-500" />
                          <span>Video consultation</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Schedule Your Session</CardTitle>
                  <CardDescription>Select a date and time for your diabetes education session</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="rounded-md border"
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <Label className="mb-3 block">Select Time</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className={
                              selectedTime === time ? "bg-green-600 hover:bg-green-700" : ""
                            }
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Share any specific topics or questions you'd like to discuss..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                      onClick={handleBookConsultation}
                      disabled={!selectedDate || !selectedTime}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
