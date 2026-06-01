/**
 * SquircleButton
 * sugestão de fonte: npm install @fontsource-variable/ibm-plex-sans
 * no index.css adicione: @import '@fontsource-variable/ibm-plex-sans/wght.css';
 *
 * @theme inline {
 *   --font-sans: 'IBM Plex Sans Variable', sans-serif;
 * }
 *
 * Botão SVG 3D com forma squircle, efeito de profundidade e suporte a ícones Lucide.
 *
 * @example Basic
 * ```tsx
 * import { Rocket, Zap } from "lucide-react"
 * import { SquircleButton } from "@/components/ui/SquircleButton"
 *
 * <SquircleButton variant="teal"   size="default"  label="Default"   icon={Zap} />
 * <SquircleButton variant="blue" label="Launch" icon={Rocket} />
 * ```
 *
 * @example Sizes
 * ```tsx
 * <SquircleButton variant="teal"   size="tiny"     label="Tiny"      icon={Zap} />
 * <SquircleButton variant="teal"   size="default"  label="Default"   icon={Zap} />
 * <SquircleButton variant="teal"   size="large"    label="Large"     icon={Zap} />
 * <SquircleButton variant="orange" size="full"     label="Full Width" icon={Zap} />
 * <SquircleButton variant="blue"   size="square"   icon={Zap} />
 * <SquircleButton variant="blue"   size="floating" icon={Rocket} onClick={fn} />
 * ```
 *
 * @example Palette iteration
 * ```tsx
 * import { BUTTON_VARIANTS } from "@/components/ui/squircle-button-variants"
 *
 * {BUTTON_VARIANTS.map((v) => (
 *   <SquircleButton key={v} variant={v} size="palette" label={v} icon={Palette} />
 * ))}
 * ```
 *
 * Props:
 * - `variant`  — cor: blue | green | red | orange | yellow | teal | pink | purple | slate | amber | white
 * - `size`     — modo: tiny(h30) | default(h44) | large(h60) | palette(h44) | square(h44,icon-only) | full(h44,fullWidth) | floating(h64,fixed)
 * - `label`    — texto em caixa alta (ignorado em square/floating)
 * - `fontWeight` — peso do texto: 500 | 600 | 700 | 800 | 900
 * - `icon`     — componente LucideIcon
 * - `onClick`  — callback de clique
 * - `className`— classes extras no wrapper
 */

import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type ComponentType } from "react";
import type { ButtonSize, ButtonVariant } from "./squircle-button-variants";
import { SIZE_CONFIG, VARIANT_COLORS } from "./squircle-button-variants";

const CTX = document.createElement("canvas").getContext("2d")!;

const squirclePath = (w: number, h: number, r: number, x: number, y: number): string => {
  let p = "";
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 31; i++) {
      const q = ((j + i / 30) * Math.PI) / 2;
      const c = Math.cos(q);
      const s = Math.sin(q);

      p +=
        (j || i ? "L" : "M") +
        (x + (c > 0 ? w - r : r) + Math.sign(c) * Math.pow(Math.abs(c), 0.6) * r) +
        " " +
        (y + (s > 0 ? h - r : r) + Math.sign(s) * Math.pow(Math.abs(s), 0.6) * r);
    }
  }

  return p + "Z";
};

const colorMix = (hex: string, pct: number, k: string) =>
  `color-mix(in srgb, #${hex} ${pct}%, ${k})`;

export interface SquircleButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  fontWeight?: 500 | 600 | 700 | 800 | 900;
  icon?: LucideIcon | ComponentType<any>;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  iconSize?: number;
  iconStrokeWidth?: number;
}

export function SquircleButton({
  variant = "blue",
  size = "default",
  label = "",
  fontWeight = 900,
  icon: Icon,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  iconSize: customIconSize,
  iconStrokeWidth = 2.5,
}: SquircleButtonProps) {
  const { height, square, floating, fullWidth } = SIZE_CONFIG[size];

  const uid = useId().replace(/:/g, "");
  const [pressed, setPressed] = useState(false);
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const [btnW, setBtnW] = useState(0);

  const p = pressed ? 1 : 0;
  const [hb, hd] = VARIANT_COLORS[variant];
  const isWhite = variant === "white";
  const scale = height / 40;
  const upperLabel = label.toUpperCase();

  /**
   * Regra visual:
   * - square + icon + label => mostra apenas o ícone
   * - square + icon sem label => mostra o ícone
   * - square + label sem icon => mostra o texto
   * - não-square => mostra ícone e/ou texto normalmente
   */
  const showIcon = Boolean(Icon);
  const showLabel = Boolean(upperLabel && (!square || !Icon));

  const computeW = useCallback(
    (containerW?: number) => {
      if (fullWidth && containerW) return containerW / scale - 10;

      CTX.font = `${fontWeight} 15px system-ui`;

      if (square) return 48;

      return Math.ceil((CTX.measureText(upperLabel).width + (Icon ? 72 : 54)) * 1.1);
    },
    [fullWidth, scale, square, upperLabel, Icon, fontWeight]
  );

  useEffect(() => {
    if (!fullWidth || !wrapperRef.current) return;

    const ro = new ResizeObserver(([entry]) => {
      setBtnW(computeW(entry.contentRect.width));
    });

    ro.observe(wrapperRef.current);

    return () => ro.disconnect();
  }, [fullWidth, computeW]);

  const resolvedBtnW = fullWidth ? btnW : computeW();

  if (!resolvedBtnW) {
    return <div style={{ height: `${60 * scale}px` }} />;
  }

  const w = resolvedBtnW;
  const faceY = 4 + p * 5;
  const baseY = 12;
  const z = Math.min(0.5, 20 / w);
  const dy = floating ? 24 - p * 12 : 4 - p * 2;
  const std = floating ? 12 - p * 6 : 3 - p * 1.5;
  const op = floating ? 0.15 : 0.3;

  const hi = colorMix(hb, 70, "white");
  const sh = colorMix(hd, 35, "black");
  const sideCount = Math.max(0, baseY - faceY);
  const iconSize = customIconSize ?? Math.round((square ? 22 : 18) * scale);

  return (
    <button
      ref={wrapperRef}
      type={type}
      disabled={disabled}
      aria-label={label || undefined}
      title={square && Icon && label ? label : undefined}
      className={[
        "relative appearance-none border-none bg-transparent p-0 m-0 select-none [-webkit-tap-highlight-color:transparent] focus:outline-none",
        disabled ? "opacity-50 cursor-not-allowed grayscale" : "cursor-pointer",
        fullWidth ? "block w-full" : "inline-block",
        className,
      ].join(" ")}
      style={{
        width: fullWidth ? undefined : `${(w + 10) * scale}px`,
        height: `${60 * scale}px`,
      }}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => !disabled && setPressed(false)}
      onPointerLeave={() => !disabled && setPressed(false)}
      onClick={disabled ? undefined : onClick}
    >
      <svg
        viewBox={`0 0 ${w + 10} 60`}
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <filter id={`b${uid}`} x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dy={dy} stdDeviation={std} floodColor={sh} floodOpacity={op} />
          </filter>

          <linearGradient id={`g${uid}`}>
            <stop offset="0" stopColor={colorMix(hd, 65, "white")} />
            <stop offset={z} stopColor={colorMix(hd, 90, "white")} />
            <stop offset={1 - z} stopColor={colorMix(hd, 90, "white")} />
            <stop offset="1" stopColor={colorMix(hd, 65, "white")} />
          </linearGradient>
        </defs>

        <path
          d={squirclePath(w, 40, 18, 5, baseY)}
          fill={colorMix(hd, 60, "black")}
          filter={`url(#b${uid})`}
        />

        <path
          d={squirclePath(w, 40, 18, 5, baseY)}
          fill={colorMix(hd, 80, "black")}
          stroke="rgba(151,160,177,0.7)"
          strokeWidth={1}
        />

        {Array.from({ length: sideCount }).map((_, k) => (
          <path
            key={k}
            d={squirclePath(w, 40, 18, 5, faceY + 1 + k)}
            fill={`url(#g${uid})`}
          />
        ))}

        <path
          d={squirclePath(w, 40, 18, 5, faceY)}
          fill={isWhite ? "#fff" : `#${hb}`}
          stroke={isWhite ? "#DBE3EE" : hi}
          strokeWidth={1.5}
        />
      </svg>

      <div
        className={[
          "absolute inset-x-0 flex items-center justify-center pointer-events-none",
          isWhite ? "text-blue-500" : "text-white",
        ].join(" ")}
        style={{
          top: `${faceY * scale}px`,
          height: `${40 * scale}px`,
          gap: `${6 * scale}px`,
        }}
      >
        {showIcon && Icon && <Icon size={iconSize} width={iconSize} height={iconSize} strokeWidth={iconStrokeWidth} />}

        {showLabel && (
          <span
            className="tracking-[1px] font-sans leading-none"
            style={{
              fontSize: `${14 * scale}px`,
              fontWeight,
            }}
          >
            {upperLabel}
          </span>
        )}
      </div>
    </button>
  );
}
