import React from 'react'
import { Heading, Paragraph, Button } from '@/components'

export default function Home() {
  return (
    <div className="container section-padding">
      <div className="text-center mb-12">
        <Heading level={1}>Welcome to Our Luxury Hotel</Heading>
        <Paragraph className="mt-4 text-lg">
          Experience unparalleled elegance and comfort in the heart of the city.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-cream-100 p-8 rounded-lg">
          <Heading level={3} className="text-gold-600">
            Luxurious Rooms
          </Heading>
          <Paragraph className="mt-4">
            Discover our collection of elegantly appointed suites, each designed to provide the ultimate in comfort and sophistication.
          </Paragraph>
        </div>

        <div className="bg-cream-100 p-8 rounded-lg">
          <Heading level={3} className="text-gold-600">
            Fine Dining
          </Heading>
          <Paragraph className="mt-4">
            Indulge in world-class cuisine prepared by our award-winning chefs in our award-winning restaurants.
          </Paragraph>
        </div>

        <div className="bg-cream-100 p-8 rounded-lg">
          <Heading level={3} className="text-gold-600">
            Premium Amenities
          </Heading>
          <Paragraph className="mt-4">
            Relax and rejuvenate with our spa, fitness center, and other premium facilities available 24/7.
          </Paragraph>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="primary">Book Your Stay</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  )
}
