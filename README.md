# Project Documentation: Cars

## Overview

My App consists of both client side rendered components and server side rendered comopnents and it is built with Next.js. It allows users to book a barbershop appointment.

### The link to the website is https://barbershop-bar8.vercel.app

![Cars](https://user-images.githubusercontent.com/106311309/230741582-e7f9954e-e37f-45d2-adcf-debcf9d6e8a4.jpg)

## Technology Stack

 * Next.js
 * TypeScript
 * Tailwind CSS
 * Prisma
 * MongoDB

## Project Architecture

The app consists of several main components:

 * Booking: A page where users can make an appointment for a barber session.
 * Gallery: A page where users can go through different pictures of haircuts done by the barbers of the barbershop.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the project repository from GitHub.
2. Install the dependencies using `npm install`.
3. Create a `.env` file and add your DATABASE_URL for MongoDB.
4. Run the server by using `npm run dev`.

## Project Features

 * Book an appointment, it dynamically generates the available appointments
 * Gallery that showcases some of the barbers' work
 * Google Maps locations of the barbershops
