export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="de">
      <body style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Next.js TypeScript Demo</h1>
      {children}
      </body>
      </html>
  );
}
