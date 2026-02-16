import { type Product } from '../types';
// Import your image here. using a placeholder for now if you haven't uploaded 'tricycle.jpg'
import tricycleImg from '../assets/images/tricycle3.jpg'; // Using an existing image as placeholder

export const products: Product[] = [
  {
    id: 'solar-tricycle-001',
    name: 'ESDAN Solar-Powered Tricycle',
    shortDescription: 'The future of intra-city transport. Zero emissions, silent operation, and strictly designed for the Nigerian terrain.',
    description: 'Engineered for durability and efficiency, the ESDAN Solar Tricycle reduces operational costs by 100% by eliminating fuel consumption. It features a rugged suspension system tailored for Nigerian roads and a high-efficiency solar roof that charges while you ride.',
    image: tricycleImg,
    specs: [
      { label: 'Battery', value: '60V 100Ah Lithium-ion' },
      { label: 'Motor', value: '1500W Brushless DC' },
      { label: 'Range', value: '120km per charge' },
      { label: 'Max Speed', value: '45 km/h' },
      { label: 'Charging Time', value: '6-8 hours (AC) / Continuous (Solar)' },
      { label: 'Passenger Capacity', value: 'Driver + 3 Passengers' },
    ],
    features: [
      'Roof-mounted High Efficiency Solar Panel',
      'Hydraulic Disc Brakes',
      'Digital Dashboard Display',
      'Heavy-duty Suspension',
      'USB Charging Ports for Passengers',
      'Reverse Camera Integration'
    ],
    videos: [
      "OOx3n2C0DMg",
      "8TOxlTraGcE",
    ]
  }
];