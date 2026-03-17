'use client'

import { useEffect } from "react";

export default function OtelixWidget() {
  useEffect(() => {

    if (window.otelixScriptInjected) return
    
    window.otelixScriptInjected = true
    
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://otelix.pro/js/hotelBdraivLoader.js&t=${new Date().getTime()}`
    
    document.body.appendChild(script)
    

    return () => {
     
      document.body.removeChild(script)
      window.otelixScriptInjected = false
    }
  }, [])

  return (
    <div 
      className="hotelBdraivForm"
      data-online="1"
      data-frame_width="100"
      data-frame_height="100"
      data-online_full="1"
      data-frame_src="https://otelix.pro/bookOnline/852/t-651"
      data-class_frame_src="https://otelix.pro/bookOnline/852/t-651/c-otelixClass"
      style={{ minWidth: '100%', height: '100px' }}
    >
      &nbsp;
    </div>
  )
}