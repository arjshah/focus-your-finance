"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NavMenu } from "@/components/nav-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarClock, ArrowRight } from "lucide-react";

export default function BookConsultation() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
      <NavMenu />
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-normal text-stone-900 mb-4">
              Book Your Consultation
            </h1>
            <p className="text-lg text-stone-600 font-light">
              Schedule a personalized tax consultation with our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-normal">Your Information</CardTitle>
                <CardDescription>Please provide your details below</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-stone-600">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-stone-600">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-normal text-stone-600">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-normal text-stone-600">Phone</label>
                  <Input type="tel" placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-normal text-stone-600">Consultation Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Tax Consultation</SelectItem>
                      <SelectItem value="business">Business Tax Consultation</SelectItem>
                      <SelectItem value="planning">Tax Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-normal text-stone-600">Additional Information</label>
                  <Textarea 
                    placeholder="Please share any specific questions or concerns you'd like to discuss"
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Calendar Section */}
            <div className="space-y-6">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-normal">Select Date & Time</CardTitle>
                  <CardDescription>Choose your preferred consultation time</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {date && (
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-normal">Available Times</CardTitle>
                    <CardDescription>Select a time slot for {date.toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="w-full md:w-auto">
              Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 