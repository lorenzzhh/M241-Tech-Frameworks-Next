import Link from 'next/link';
import {Button} from "@/app/components/Button";

export default async function ServerPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
        cache: 'no-store'
    });
    const data = await res.json();

    const requestTime = new Date().toLocaleString();

    return (
        <main>
            <h2>SSR (Server Side Rendering)</h2>
            <p><strong>Title:</strong> {data.title}</p>

            <p><strong>Request Time:</strong> {requestTime}</p>
            <p><strong>Random Zahl:</strong> {Math.random()}</p>

            <p style={{ color: 'red' }}>
                👉 Diese Werte ändern sich bei JEDEM Reload!
            </p>

            <Link href="/">
                <Button label={"Zurück zur SSG Seite"}></Button>
            </Link>
        </main>
    );
}