"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function RoyalIntro() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");

  useEffect(() => {
    // Lock scroll while intro is showing
    document.body.style.overflow = "hidden";
    
    // Give it 4 seconds to breathe
    const t1 = setTimeout(() => setPhase("exit"), 4000); 
    
    // Silky smooth 1.5s dissolve
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 5500); 
    
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ""; };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Fluid, slow emergence */
        @keyframes premium-logo-reveal {
          0% { transform: scale(1.1); opacity: 0; filter: blur(12px) brightness(1.5); }
          100% { transform: scale(1); opacity: 1; filter: blur(0) brightness(1); }
        }
        /* Slow, rich golden aura */
        @keyframes premium-glow {
          0% { box-shadow: 0 0 0px rgba(212,175,55,0), inset 0 0 0px rgba(212,175,55,0); }
          100% { box-shadow: 0 0 90px rgba(212,175,55,0.4), inset 0 0 30px rgba(212,175,55,0.2); }
        }
        /* Cinematic text tracking */
        @keyframes premium-text-tracking {
          0% { opacity: 0; letter-spacing: 0.1em; transform: translateY(15px); filter: blur(4px); }
          100% { opacity: 1; letter-spacing: 0.3em; transform: translateY(0); filter: blur(0); }
        }
        @keyframes premium-subtext {
          0% { opacity: 0; letter-spacing: 0.4em; transform: translateY(10px); }
          100% { opacity: 0.9; letter-spacing: 0.6em; transform: translateY(0); }
        }
        @keyframes premium-tagline {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Elegant line expand */
        @keyframes line-expand {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 0.5; }
        }
        /* Soft light passing over the logo */
        @keyframes premium-shimmer {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 200%; opacity: 0; }
        }
        /* Ambient rotation for mandala */
        @keyframes ambient-rotate {
          0% { transform: rotate(0deg) scale(1.1); opacity: 0; }
          30% { opacity: 0.08; }
          70% { opacity: 0.08; }
          100% { transform: rotate(20deg) scale(1.15); opacity: 0; }
        }
        /* Elegant floating gold dust */
        @keyframes float-up {
          0% { transform: translateY(20px) scale(0.8); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
        }
        /* Silky smooth dissolve exit */
        @keyframes premium-exit {
          0% { opacity: 1; transform: scale(1); filter: blur(0); }
          100% { opacity: 0; transform: scale(1.05); filter: blur(8px); }
        }
      `}}/>

      {/* Main Intro Wrapper */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 99999,
        backgroundColor: "#0a0102", // Deepest rich burgundy
        backgroundImage: "radial-gradient(circle at 50% 45%, #2a050d 0%, #0a0102 70%)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        /* Beautiful cinematic lens-blur dissolve */
        animation: phase === "exit" ? "premium-exit 1.5s cubic-bezier(0.33, 1, 0.68, 1) forwards" : "none"
      }}>
        
        {/* Ambient Floral & Stitching Embroidery Mandala */}
        <div style={{
           position: "absolute", width: "130vmin", height: "130vmin",
           backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23D4AF37' fill='none' stroke-width='0.3'%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3Ccircle cx='100' cy='60' r='40'/%3E%3Ccircle cx='100' cy='140' r='40'/%3E%3Ccircle cx='65.36' cy='80' r='40'/%3E%3Ccircle cx='134.64' cy='120' r='40'/%3E%3Ccircle cx='65.36' cy='120' r='40'/%3E%3Ccircle cx='134.64' cy='80' r='40'/%3E%3Ccircle cx='100' cy='100' r='85' stroke-dasharray='3 4' stroke-width='0.6'/%3E%3Ccircle cx='100' cy='100' r='90' stroke-width='0.2'/%3E%3C/g%3E%3C/svg%3E\")",
           backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat",
           animation: "ambient-rotate 6s linear forwards",
           pointerEvents: "none"
        }} />

        {/* Ambient Gold Dust Particles */}
        {[...Array(16)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${15 + (i * 73) % 70}%`, // Organic spread
            top: `${40 + (i * 47) % 40}%`,
            width: `${1 + (i % 3)}px`,
            height: `${1 + (i % 3)}px`,
            backgroundColor: "#D4AF37",
            borderRadius: "50%",
            boxShadow: "0 0 12px 2px rgba(212,175,55,0.5)",
            animation: `float-up ${3 + (i % 4)}s ease-in-out ${i * 0.25}s infinite`,
            opacity: 0,
            pointerEvents: "none"
          }} />
        ))}

        {/* The Logo Container */}
        <div style={{
          position: "relative",
          width: "220px", height: "220px",
          borderRadius: "50%",
          backgroundColor: "#FDF8F5",
          padding: "4px",
          border: "1px solid rgba(212,175,55,0.6)",
          /* Fluid, slow curve for the most premium feel (Ease Out Quint) */
          animation: "premium-logo-reveal 2.5s cubic-bezier(0.23, 1, 0.32, 1) both, premium-glow 3s ease-out forwards",
          overflow: "hidden",
          zIndex: 10
        }}>
          {/* Subtle light sweep */}
          <div style={{
             position: "absolute", top: 0, left: "-100%", width: "60%", height: "100%",
             background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
             transform: "skewX(-25deg)",
             animation: "premium-shimmer 4s cubic-bezier(0.25, 1, 0.5, 1) infinite 1.5s",
             zIndex: 5, pointerEvents: "none"
          }}/>
          <Image
            src="/images/harigeet-logo.jpg"
            alt="Harigeet Creations"
            width={220} height={220}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", mixBlendMode: "multiply" }}
            priority
          />
        </div>

        {/* Majestic Typography */}
        <div style={{
           marginTop: "55px", textAlign: "center", zIndex: 10
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 4.2rem)",
            color: "#D4AF37",
            margin: 0, fontWeight: 400,
            lineHeight: 1,
            textShadow: "0 5px 25px rgba(212,175,55,0.4)",
            animation: "premium-text-tracking 2.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s both"
          }}>
            HARIGEET
          </h1>
          <h2 style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.4rem)",
            color: "#FDF8F5",
            margin: "18px 0 0 0",
            fontWeight: 300,
            animation: "premium-subtext 2.5s cubic-bezier(0.23, 1, 0.32, 1) 0.8s both"
          }}>
            CREATIONS
          </h2>
        </div>
        
        {/* Minimal Divider & Tagline */}
        <div style={{
           display: "flex", flexDirection: "column", alignItems: "center",
           marginTop: "45px",
           animation: "premium-tagline 2s cubic-bezier(0.23, 1, 0.32, 1) 1.2s both"
        }}>
           <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
              <div style={{ 
                height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #D4AF37)",
                animation: "line-expand 1.5s ease-out 1s both", transformOrigin: "right"
              }} />
              <span style={{ color: "#D4AF37", fontSize: "0.8rem", opacity: 0.7 }}>✧</span>
              <div style={{ 
                height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #D4AF37)",
                animation: "line-expand 1.5s ease-out 1s both", transformOrigin: "left"
              }} />
           </div>
           <div style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "rgba(212,175,55,0.9)",
              letterSpacing: "0.22em",
              fontSize: "1.15rem",
              fontWeight: 300
           }}>
              Elegance in Every Stitch
           </div>
        </div>

      </div>
    </>
  );
}