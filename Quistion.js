import React from "react";

export default function Questions(props) {
    const Allanswers = props.allAnswers
    const answer = Allanswers.sort()
    return (
        <>
            {props.final
                ? 
                <div className="quistion" >
                    <div className="head">{props.question}</div>
                    <div className="choices">
                        <div className={props.green[0] ? "answer green" : props.red[0] ? "answer red" : "answer"} id={0} onClick={props.showValue}>{answer[0]}</div>
                        <div className={props.green[1] ? "answer green" : props.red[1] ? "answer red" : "answer"} id={1} onClick={props.showValue}>{answer[1]}</div>
                        <div className={props.green[2] ? "answer green" : props.red[2] ? "answer red" : "answer"} id={2} onClick={props.showValue}>{answer[2]}</div>
                        <div className={props.green[3] ? "answer green" : props.red[3] ? "answer red" : "answer"} id={3} onClick={props.showValue}>{answer[3]}</div>
                    </div>
                </div>
                :
                <div className="quistion" >
                    <div className="head">{props.question}</div>
                    <div className="choices">
                        <div className={props.trueAnswer[0] ? "answer active" : "answer"} id={0} onClick={props.showValue}>{answer[0]}</div>
                        <div className={props.trueAnswer[1] ? "answer active" : "answer"} id={1} onClick={props.showValue}>{answer[1]}</div>
                        <div className={props.trueAnswer[2] ? "answer active" : "answer"} id={2} onClick={props.showValue}>{answer[2]}</div>
                        <div className={props.trueAnswer[3] ? "answer active" : "answer"} id={3} onClick={props.showValue}>{answer[3]}</div>
                    </div>
                </div>
            }
        </>
    )
    
    // return (
    //     <>
    //         {props.final
    //             ?
    //             <div className="quistion" >
    //                 <div className="head"> What are the best place to think about your future in it</div>
    //                 <div className="choices">
    //                     <div className={props.green[0] ? "answer green" : props.red[0] ? "answer red" : "answer"} id={0} onClick={props.showValue}>Bathroom</div>
    //                     <div className={props.green[1] ? "answer green" : props.red[1] ? "answer red" : "answer"} id={1} onClick={props.showValue}>Bark</div>
    //                     <div className={props.green[2] ? "answer green" : props.red[2] ? "answer red" : "answer"} id={2} onClick={props.showValue}>Gaalid</div>
    //                     <div className={props.green[3] ? "answer green" : props.red[3] ? "answer red" : "answer"} id={3} onClick={props.showValue}>Comaa</div>
    //                 </div>
    //             </div>
    //             :
    //             <div className="quistion" >
    //                 <div className="head"> What are the best place to think about your future in it</div>
    //                 <div className="choices">
    //                     <div className={props.trueAnswer[0] ? "answer active" : "answer"} id={0} onClick={props.showValue}>Bathroom</div>
    //                     <div className={props.trueAnswer[1] ? "answer active" : "answer"} id={1} onClick={props.showValue}>Bark</div>
    //                     <div className={props.trueAnswer[2] ? "answer active" : "answer"} id={2} onClick={props.showValue}>Gaalid</div>
    //                     <div className={props.trueAnswer[3] ? "answer active" : "answer"} id={3} onClick={props.showValue}>Comaa</div>
    //                 </div>
    //             </div>
    //         }
    //     </>
    // )
}