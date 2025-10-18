import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const Summary: React.FC<{ formData: any }> = ({ formData }) => {
  return (
    <React.Fragment>
      <span className="block border-b p-5 text-lg">Summary</span>

      <form
        className="flex flex-col gap-4 p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number:</Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date:</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Time:</Label>
          <Input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location:</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="barber">Barber:</Label>
          <Input
            type="text"
            id="barber"
            name="barber"
            value={formData.barberName}
            readOnly
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service:</Label>
          <Input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            readOnly
          />
        </div>
      </form>
    </React.Fragment>
  );
};
