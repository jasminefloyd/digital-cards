export default function QRcode() {

    return (
        <>
        <section className='qr-code-section'>
            <div className="qr-code">
                <img src='public/qr_ph.png' alt="QR Code" />
            </div>
            <p className='qrText'>Scan QR Code to open Contact</p>
        </section>
        </>
    )
}