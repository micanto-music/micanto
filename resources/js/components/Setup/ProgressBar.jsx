export default function ProgressBar ({page}){

    const progress = (page - 1) / 3* 100;

    return (
        <div className="progress-bar mt-5 mb-5">
            <div className="progress-line">
                <div className="progress-finished" style={{width: progress+'%'}}>
                </div>
            </div>
        </div>
    )

}
