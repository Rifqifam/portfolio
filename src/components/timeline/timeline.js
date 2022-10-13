import timelinedata from "../data";
import TimelineItem from "./timlineitem";

const timeline = () => timelinedata.length > 0 && (
    <div className="timeline-container">
        {timelinedata.map((data,idx) => (
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
);

export default timeline;