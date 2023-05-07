export default function Logo() {
    return (
        <>
            <img
                className="mx-auto h-10 w-auto mt-2"
                src={require('../../src/logo.svg').default}
                alt="Check Travel"
            />

        </>
    )
}