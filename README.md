# ShoreSquad - Beach Cleanup Community Platform

ShoreSquad is a web application that helps organize and coordinate beach cleanup activities in Singapore. It features real-time weather updates, event management, and interactive location mapping to make beach cleanup initiatives more accessible and organized.

## Features

- 🌤️ Real-time weather forecasts from data.gov.sg
- 🗺️ Interactive cleanup location mapping
- 📅 Event scheduling and management
- 👥 Community engagement tools
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (comes with Node.js)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shoresquad.git
cd shoresquad
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API keys:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Weather API Integration

The application uses Singapore's data.gov.sg API for weather forecasts. The weather component includes:

- 4-day weather forecast
- Temperature, humidity, and wind information
- Auto-refresh every 30 minutes
- Error handling with automatic retries
- Responsive design for all screen sizes

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
