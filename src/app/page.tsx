import Link from 'next/link';

export default async function HomePage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        cache: 'force-cache'
    });
    const data = await res.json();

    const buildTime = new Date().toLocaleString();

    return (
        <main>
            <h2>SSG (Static Site Generation)</h2>
            <p><strong>Title:</strong> {data.title}</p>

            <p><strong>Build Time:</strong> {buildTime}</p>
            <p><strong>Random Zahl:</strong> {Math.random()}</p>

            <p style={{ color: 'green' }}>
                👉 Diese Werte ändern sich NICHT beim Reload!
            </p>

            <h3>Navigation</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Link href="/server-page">
                    <button>Zur SSR Seite</button>
                </Link>

                <Link href="/ISR">
                    <button>ISR testen</button>
                </Link>

                <Link href="/api/hello">
                    <button>API testen</button>
                </Link>
            </div>
        </main>
    );
}