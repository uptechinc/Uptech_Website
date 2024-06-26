import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: 'Uptech Incorporated Limited',
  applicationName:"Uptech Incorporated Limited",
  authors: {
    url: "https://www.linkedin.com/in/uptechincorp/",
    name: "Uptech Incorporated Limited"
  },
  keywords: ["ourlime", "ourlime.com", "uptech", "uptech.com", "uptechincorp", "uptechincorp.com" ,"social media platform", "online community", "social networking", "connect with friends", "social media app", "share moments", "online interaction", "follow and share", "interactive platform", "social engagement", "online socializing", "social media connection", "create and share", "discover new content", "social feed", "personalized feed", "connect with people", "social media profiles", "social interaction online", "online community platform"],

  description: 'Corporate Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body>
        {children}
          <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
