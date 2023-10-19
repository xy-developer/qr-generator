import React, { useState } from 'react'
import { generateRandomID, svgToImageDownload } from './utils/helper';
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrcode , setQrcode] = useState(null)

  // generate random 
  const generateQRCode = () =>{
    const uuid = generateRandomID(20);
    setQrcode(uuid);
  }


  // download qr code 
  const downloadQrCode =() => {
    const svg = document.querySelector('svg');
    svgToImageDownload(svg,qrcode);
  }

  console.log(qrcode?.length)

  return (
    <div className='
            flex 
            flex-col 
            justify-center 
            h-full w-full 
            items-center '
    >
      <div className="
            drop-shadow-md 
            flex flex-col 
            justify-center 
            items-center 
            shadow-md 
            w-80 h-80 
            border-2 
            border-black"
        >
            
      {
        qrcode ? ( <QRCode value={qrcode} /> ) : "QR Code"
      }
      {
        qrcode?.length === 1782 && 
        <p style={{color:'red',fontWeight:'bolder',padding:'0.2em'}}>
            Content Length Exceeded
        </p>
      }
      </div>

    <div className="w-full max-w-xs">
        <form 
            className="
                bg-white 
                shadow-md 
                rounded px-8 
                pt-6 pb-8 mb-4"
        >
            <div className="mb-4">
                <label 
                    className="
                    block 
                    text-gray-700 
                    text-sm font-bold
                    mb-2"
                >
                    Generate from Your Input
                </label>
                <input 
                    className="
                        shadow 
                        appearance-none 
                        border 
                        rounded 
                        w-full 
                        py-2 
                        px-3 
                        text-gray-700 
                        leading-tight 
                        focus:outline-none 
                        focus:shadow-outline" 
                    type="text"
                    maxLength="1782"
                    onChange={(e)=> setQrcode(e.target.value)}
                    placeholder="write something here.."
                />
            </div>
        </form>
    </div>

      <div className="flex flex-col gap-2 p-8">
      <button 
        className="
            bg-blue-500 
            hover:bg-blue-700 
            text-white 
            font-bold 
            py-2 
            px-4 
            rounded"
        onClick={generateQRCode}
      >
        Generate QR Code
      </button>

      {
        qrcode && <button 
            className="
                bg-pink-500
                hover:bg-blue-700 
                text-white 
                font-bold 
                py-2 px-4 
                rounded"
            onClick={downloadQrCode}
        >
          Download
        </button>
      }
      </div>
    </div>
  )
}

export default QrCode