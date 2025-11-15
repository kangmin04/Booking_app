import './navbar.scss'
const Navbar = () => {
    //src에서 /profile.svg는 절대경로로 어떤 페이지에서 참조하던 해당 주소를 가져온다. 
    //but /없이 걍 profile.svg면 상대경로로 /users로 접속한 페이지에서 해당 파일을 불오면 브라우저는 /users/profile.svg로 요청해버림. 
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.svg" alt="" />
                <span>Kim</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" className="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/profile.svg" alt="" />
                    <span>Kangmin</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" /> 
            </div>
        </div>
    )

}

export default Navbar