import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Wave parameters
    let lines: any[] = [];
    const gap = 40;
    
    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    class Line {
      y: number;
      amplitude: number;
      frequency: number;
      speed: number;
      offset: number;
      color: string;

      constructor(y: number) {
        this.y = y;
        this.amplitude = Math.random() * 30 + 20;
        this.frequency = Math.random() * 0.005 + 0.002;
        this.speed = Math.random() * 0.001 + 0.0005;
        this.offset = Math.random() * Math.PI * 2;
        // Brand color #7fffd4 (127, 255, 212) with low opacity
        this.color = `rgba(127, 255, 212, ${Math.random() * 0.1 + 0.02})`;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        
        for (let x = 0; x < width; x+=5) {
          const y = this.y + Math.sin(x * this.frequency + time * this.speed + this.offset) * this.amplitude 
                     + Math.sin(x * this.frequency * 0.5 + time * this.speed * 1.5) * (this.amplitude * 0.5);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }

    function init() {
      lines = [];
      // Create lines covering the screen height
      for(let y = 0; y < height; y += gap) {
        lines.push(new Line(y));
        // Add a few more random ones for depth
        if(Math.random() > 0.5) lines.push(new Line(y + gap/2));
      }
    }

    let time = 0;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      // Dark background fill to ensure clean redraw
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      lines.forEach(line => line.draw(ctx, time));
      time += 1;
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 selection:bg-brand selection:text-dark-900"
    >
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-60"
      />
      
      {/* Gradient Overlay for Vignette */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-dark-900 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="inline-block relative">
             <h2 className="text-brand font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4 relative z-10">
               Excelencia Legal en Ecuador
             </h2>
             <div className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Defendemos <br/>
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
                Su Futuro
              </span>
              <span className="absolute -inset-1 blur-2xl bg-brand/10 -z-10"></span>
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
            Mejía & Asociados: donde la tradición jurídica se encuentra con la innovación estratégica. Soluciones integrales para un mundo cambiante.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#contact" 
              className="px-10 py-4 bg-brand text-dark-900 font-bold tracking-wide rounded-sm hover:bg-brand-light transition-all duration-300 shadow-[0_0_20px_rgba(127,255,212,0.2)] hover:shadow-[0_0_30px_rgba(127,255,212,0.4)] flex items-center gap-2 group"
            >
              Consulta Gratuita
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="px-10 py-4 border border-white/10 text-white font-medium hover:bg-white/5 hover:border-brand/30 transition-all duration-300 tracking-wide rounded-sm"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;