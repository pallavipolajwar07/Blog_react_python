import CustomNavbar from "./CustomNavbar";

const Base=({title="Welcome to our website",children})=>{
    return(
        <>
            <CustomNavbar />
            {<h5>This is header</h5>}
            {children}
            <h5>This is footer</h5>
        </>
    )
}

export default Base;