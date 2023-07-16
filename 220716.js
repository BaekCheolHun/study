function MyBotton( ){
    return (
        <button>
            I'm a button
        </button>
    );
}
export default function MyApp(){
    return (
        <div>
            <h1>
                Welcome to my app
            </h1>
            <MyBotton />
            </div>
    );
}

function AboutPage(){
    return (
        <>
            <h1>
                About
            </h1>
            <p>
                Hello, There. <br />How do you do?
            </p>
        </>
    )
}