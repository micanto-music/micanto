export default function ActivityIndicator()
{
    return(
        <div className="activity-indicator flex flex-1 justify-center items-center">
            <svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20"></circle>
            </svg>
        </div>
    );
}
