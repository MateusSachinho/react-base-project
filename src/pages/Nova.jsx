import NovoComponente from "../components/NovoComponente/NovoComponente";
import Base from "./Base";

const Nova = () => {
    
    /* useEffect(()=> {
        onAuthStateChanged(auth, (user)=> {
            if (user) {
                window.sessionStorage.setItem("accessToken", user.accessToken);
            } else {
                window.sessionStorage.removeItem("accessToken");
            }
        })
    },[]) */
    
    
    return (
        <Base>
        <p>te amo</p>
        <h1>
       Te amo mais
        </h1>
        <NovoComponente/>
      </Base>
    )
}

export default Nova;