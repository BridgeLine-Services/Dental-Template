"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { RotateCcw, CheckCircle2, Eraser } from "lucide-react";

interface SignaturePadProps {
  value?: string;
  onChange?: (signatureDataUrl: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
  height?: number;
  disabled?: boolean;
}

export function SignaturePad({
  value,
  onChange,
  label = "Digital Signature",
  required = false,
  error,
  height = 160,
  disabled = false,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(!value);

  // Initialize canvas context
  const getContext = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#0f172a"; // Dark slate stroke
    }
    return ctx;
  }, []);

  // Resize canvas according to container width
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#0f172a";
      }

      // If initial value exists, load it
      if (value) {
        const img = new Image();
        img.src = value;
        img.onload = () => {
          ctx?.drawImage(img, 0, 0, rect.width, height);
          setIsEmpty(false);
        };
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [height, value]);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    e.preventDefault();
    const ctx = getContext();
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || disabled) return;
    e.preventDefault();
    const ctx = getContext();
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setIsEmpty(false);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas && onChange) {
      const dataUrl = canvas.toDataURL("image/png");
      onChange(dataUrl);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setIsEmpty(true);
    if (onChange) {
      onChange("");
    }
  };

  return (
    <div className="w-full space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {!isEmpty && !disabled && (
          <button
            type="button"
            onClick={clearCanvas}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        )}
      </div>

      <div
        className={`relative border rounded-lg bg-slate-50/50 transition-colors ${
          error ? "border-red-400 focus-within:ring-2 focus-within:ring-red-200" : "border-slate-300 focus-within:border-brand-500"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-crosshair"}`}
      >
        <canvas
          ref={canvasRef}
          style={{ height: `${height}px` }}
          className="w-full rounded-lg touch-none block"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        {isEmpty && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-slate-400 text-sm">
            <Eraser className="w-5 h-5 mb-1 text-slate-300" />
            <span>Sign here using touch or mouse</span>
          </div>
        )}

        {/* Baseline indicator */}
        <div className="pointer-events-none absolute bottom-6 left-6 right-6 border-b border-dashed border-slate-300" />
      </div>

      {error ? (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      ) : !isEmpty ? (
        <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Signature captured
        </p>
      ) : null}
    </div>
  );
}
