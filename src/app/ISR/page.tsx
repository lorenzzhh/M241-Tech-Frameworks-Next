// app/page.tsx
import Link from 'next/link';

export default async function HomePage() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any', {
        next: { revalidate: 10 } // ISR: Seite wird max. alle 10 Sekunden aktualisiert
    });
    const data = await res.json();

    const buildTime = new Date().toLocaleString();

    return (
        <main>
            <h2>ISR (Incremental Static Regeneration)</h2>
            <p><strong>Joke:</strong> {data.type === 'single' ? data.joke : `${data.setup} — ${data.delivery}`}</p>            <p><strong>Build/Fetch Time:</strong> {buildTime}</p>
            <p><strong>Random Zahl:</strong> {Math.random()}</p>

            <p style={{ color: 'orange' }}>
                👉 Diese Seite aktualisiert sich automatisch alle 10 Sekunden!
            </p>

            <h3>Navigation</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Link href="/server-page">
                    <button>Zur SSR Seite</button>
                </Link>
                <Link href="/">
                    <button>Zur SSG Seite</button>
                </Link>
            </div>
        </main>
    );
}