import { useState } from 'react'
import { useSelector } from 'react-redux'
import './css/rules.css'


export default function Roules() {
    const myData = useSelector(state =>  state.data)
    const [mode, setMode] = useState(myData.mode1)
    
    return (
        <div>
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <h2 className="text-center" id='rules'>Rules Challenge:</h2>
            <br />
            <br />
            <ul style={{ display: 'inline' }}>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }}>Balance:</li>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }} className={mode === myData.mode1 ? "btn btn-success" : "btn btn-primary"} onClick={() => setMode(myData.mode1)}>10000$</li>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }} className={mode === myData.mode2 ? "btn btn-success" : "btn btn-primary"} onClick={() => setMode(myData.mode2)}>25000$</li>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }} className={mode === myData.mode3 ? "btn btn-success" : "btn btn-primary"} onClick={() => setMode(myData.mode3)}>50000$</li>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }} className={mode === myData.mode4 ? "btn btn-success" : "btn btn-primary"} onClick={() => setMode(myData.mode4)}>100000$</li>
                <li style={{ display: 'inline', margin: 'auto 50px', fontWeight: 'bold' }} className={mode === myData.mode5 ? "btn btn-success" : "btn btn-primary"} onClick={() => setMode(myData.mode5)}>200000$</li>
                
            </ul>
            <table className="table table-bordred">

                <thead className='tb1'>
                    <tr>
                        <td style={{ color: 'black' }}>*****</td>
                        <td>step 1 dnd trading challenge</td>
                        <td>step 2 dnd trading challenge</td>
                        <td>step 3 dnd trading challenge</td>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className='tb1'>Trading period</td>
                        <td className='tb2'>30 Days</td>
                        <td className='tb2'>60 Days</td>
                        <td className='tb2'>Indifinite</td>

                    </tr><tr>
                        <td className='tb1'>Minimum Trading Days</td>
                        <td className='tb2'>10 Days</td>
                        <td className='tb2'>10 Days</td>
                        <td className='tb2'>X</td>

                    </tr><tr>
                        <td className='tb1'>Maximum Daily loss</td>
                        <td className='tb2'>{mode.MAXIMUM_DAILY_LOSS[0]}</td>
                        <td className='tb2'>{mode.MAXIMUM_DAILY_LOSS[1]}</td>
                        <td className='tb2'>{mode.MAXIMUM_DAILY_LOSS[2]}</td>

                    </tr><tr>
                        <td className='tb1'>Maximum Loss</td>
                        <td className='tb2'>{mode.MAXIMUM_LOSS[0]}</td>
                        <td className='tb2'>{mode.MAXIMUM_LOSS[1]}</td>
                        <td className='tb2'>{mode.MAXIMUM_LOSS[2]}</td>

                    </tr><tr>
                        <td className='tb1'>Profit Target</td>
                        <td className='tb2'>{mode.PROFIT_TARGET[0]}</td>
                        <td className='tb2'>{mode.PROFIT_TARGET[1]}</td>

                        <td className='tb2'>X</td>

                    </tr><tr>
                        <td className='tb1'>Refundable Fee</td>
                        <td className='tb3'>{mode.REFUNDABLE_FEE[0]}</td>
                        <td className='tb2'>Free</td>
                        <td className='tb2'>Refund</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}