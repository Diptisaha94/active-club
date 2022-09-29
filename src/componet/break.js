import './break.css';
const Break = () => {
    //const [break,setBreak]=useState(0);
    const breakTime=(e)=>{
        const newTime = e.target.innerText;
        console.log(newTime);
    }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className="d-flex break-time">
                <p onClick={breakTime}>10m</p>
                <p>20m</p>
                <p>30m</p>
                <p>40m</p>
                <p>50m</p>
            </div>
        </div>
    );
};

export default Break;