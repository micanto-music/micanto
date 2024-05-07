export function BaseCard ({children, width = 250, selected = '', selectAble = false}) {
    return(
        <div style={{width: width}} className={`card-wrap flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer ${selected}`}>
            {children}
        </div>
    );
}

