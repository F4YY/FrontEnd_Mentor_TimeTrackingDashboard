import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    BGnamecard,
    BGtimecard,
    Hstack,
    Icontimecard,
    Namecard,
    Profpic,
    Styledtimetrackdash,
    Threedot,
    TimeCard,
    Vstack,
    Vstackflexi} from './styled/Timetracking.styled';
import profpic from './images/image-jeremy.png';
import Datas from '../data.json';
import threedot from './images/icon-ellipsis.svg';

export const TimeTrackingDashboard = () => {
    const [termFrame, setTermframe] = React.useState({
        activeFrame:'weekly',
        timeFrames:['daily','weekly','monthly'],
    });
    const toggleActive = (index) => {
        setTermframe({...termFrame, activeFrame:termFrame.timeFrames[index]})
    }

    function toggleActiveStyles(index){
        if(termFrame.timeFrames[index] === termFrame.activeFrame){
            return 'active';
        }else{
            return 'inactive'
        }
    }
    console.log();

  return (
    <Container>
        <Styledtimetrackdash>
            <BGnamecard>
                <Vstack>
                    <Namecard>
                        <Profpic src={profpic} alt='profpic'/>
                        <p className='reportfor_timetrack'>
                            Report for
                        </p>
                        <p className='name_timetrack'>
                            Jeremy Robson
                        </p>
                    </Namecard>
                    {termFrame.timeFrames.map((timeFrame,index)=>
                        <Vstackflexi>
                            <p className={toggleActiveStyles(index)}
                                key={index}
                                onClick={()=>{
                                    toggleActive(index);
                                }}
                            >
                                {timeFrame}
                            </p>
                        </Vstackflexi>
                    )}
                </Vstack>
            </BGnamecard>
            {Datas.map((data)=>{
                return(
                    <BGtimecard
                        key={data.title}
                        $gridarea={data.gridarea}
                        $bgcolor={data.bgcol}
                    >
                        <Icontimecard src={require(`${data.icon}`)} alt={data.icon} />
                        <TimeCard>
                            <Hstack className='timecard_spread'>
                                <p>
                                    {data.title}
                                </p>
                                <Threedot src={threedot} alt='threedot' fill="yellow" stroke="red"/>
                            </Hstack>
                            {termFrame.activeFrame === 'daily'?(
                                <Vstackflexi>
                                    <p className='timecard_current'>
                                        {data.timeframes.daily.current}hrs
                                    </p>
                                    <p className='timecard_previous'>
                                        Last Week - {data.timeframes.daily.previous}hrs
                                    </p>
                                </Vstackflexi>
                            ):(
                                null
                            )}
                            {termFrame.activeFrame === 'weekly'?(
                                <Vstackflexi>
                                    <p className='timecard_current'>
                                        {data.timeframes.weekly.current}hrs
                                    </p>
                                    <p className='timecard_previous'>
                                        Last Week - {data.timeframes.weekly.previous}hrs
                                    </p>
                                </Vstackflexi>
                            ):(
                                null
                            )}
                            {termFrame.activeFrame === 'monthly'?(
                                <Vstackflexi>
                                    <p className='timecard_current'>
                                        {data.timeframes.monthly.current}hrs
                                    </p>
                                    <p className='timecard_previous'>
                                        Last Week - {data.timeframes.monthly.previous}hrs
                                    </p>
                                </Vstackflexi>
                            ):(
                                null
                            )}
                        </TimeCard>
                    </BGtimecard>
                )}
            )}
        </Styledtimetrackdash>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Time Tracking Dashboard.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
