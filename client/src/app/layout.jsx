import "../../src/App.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Job Application Tracker</title>
                <meta name="description" content="Track your job applications" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <div className="container">
                    <header className="py-6">
                        <h1 className="text-3xl font-bold">Job Application Tracker</h1>
                        <p className="text-gray-600">Keep track of your job search progress</p>
                    </header>
                    <main>{children}</main>
                    <footer className="py-6 mt-12 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Job Application Tracker
                    </footer>
                </div>
            </body>
        </html>
    )
}
