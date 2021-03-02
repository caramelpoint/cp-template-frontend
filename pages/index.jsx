import Head from "next/head"

const Landing = () => {
    return (
        <div>
            <Head>
                <title>My App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <DummyMain />
            </main>
        </div>
    )
}

export default Landing
