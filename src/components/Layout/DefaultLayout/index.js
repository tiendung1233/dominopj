import Fooder from "./Fooder/Fooder";
import Header from "./Header/Header";
function DefaultLayout({children}) {
    return (
        <div>
            <Header/>
            <div className="">
                <div className="content">{children}</div>
            </div>
            <Fooder/>
        </div>
    );
}

export default DefaultLayout;
