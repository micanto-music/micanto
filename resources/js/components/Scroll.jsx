import {useEffect} from "react";

export default function Scroll({children}) {

    const scrollListener = () => {
        const scroller = document.getElementById('main-scroll');
        let header = document.getElementById("compact-header");
        if(header) {
            let scrollTop = scroller.scrollTop;
            let opacity = scrollTop / 170 - 0.3;
            if(opacity > 1) opacity = 1;
            header.style.opacity = opacity;
        }
    }

    useEffect(() => {
        const scroller = document.getElementById('main-scroll');
        if(scroller) {
            scroller.addEventListener("scroll", scrollListener );

            return  () => {
                scroller.removeEventListener('scroll', scrollListener);
            };
        }
    }, []);

    return (
        <div className="main-scroll" id="main-scroll">
            {children}
        </div>
    );
}
