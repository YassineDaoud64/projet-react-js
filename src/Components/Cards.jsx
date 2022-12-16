import "./css/card.css"

export default function Cards() {
    return (
        <>
            <h2 className="text-center" id="cards">Evaluation Process:</h2>
            <br />
            <section className="details-card">
    <div className="container">
        <div className="row">
            <div className="col-md-4 ccd">
                <div className="card-content azer">
                    <div className="card-img">
                    </div>
                    <div className="card-desc">
                        <h2 >DND Trading Challenge:</h2>
                        <p  id='p1'> The DND Trading Challenge is the first step of the Evaluation process.You need to succeed here to advance into the Verification stage.Prove your trading skills and discipline in observing the trading objectives.</p>    
                    </div>
                </div>
            </div>
            <div className="col-md-4 ccd">
                <div className="card-content m-3 azer">
                    <div className="card-img">
                    </div>
                    <div className="card-desc">
                        <h1>Verfication:</h1>
                        <p id='p2'> The verfication is second and the last steep towards becoming the DND trading  Trader.Once you pass the verfication stage and your results are verified,you will be offered to trade for our proprietary trading firm  .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ccd">
                <div className="card-content azer">
                    <div className="card-img">
                    </div>
                    <div className="card-desc">
                        <h1>DND Trading Trader:</h1>
                        <p id='p3'> You are becoming a trader of DND trading proprietary trading firm.Trade responsibly and consistently and receive up to 90% of your profits.If you consistently generate profit on your DND Trading Account , we scale your account according to our scalling  plan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>

    )
}


