---
name: MagnetMaze Lite
colors:
  surface: '#12131c'
  surface-dim: '#12131c'
  surface-bright: '#383843'
  surface-container-lowest: '#0d0e17'
  surface-container-low: '#1a1b24'
  surface-container: '#1e1f29'
  surface-container-high: '#282933'
  surface-container-highest: '#33343e'
  on-surface: '#e3e1ef'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e3e1ef'
  inverse-on-surface: '#2f303a'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#f3ffd4'
  on-tertiary: '#253600'
  tertiary-container: '#b3f100'
  on-tertiary-container: '#4d6a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#b7f700'
  tertiary-fixed-dim: '#a0d800'
  on-tertiary-fixed: '#141f00'
  on-tertiary-fixed-variant: '#374e00'
  background: '#12131c'
  on-background: '#e3e1ef'
  surface-variant: '#33343e'
typography:
  display-arcade:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-arcade-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system for this arcade puzzle experience is rooted in a **High-Energy Neon** aesthetic, blending the nostalgia of 80s cabinets with the sleekness of modern **Glassmorphism**. The target audience seeks a fast-paced, "flow state" experience where visual feedback is immediate and visceral. 

The UI should evoke a sense of kinetic energy and digital precision. By utilizing deep, "infinite" backgrounds contrasted against hyper-saturated light sources, the design system creates a high-contrast environment where the game mechanics—magnetism and motion—are the primary focus. Surfaces are treated as semi-transparent digital glass, floating over a structural grid that implies a controlled, high-tech simulation.

## Colors

The palette is anchored by **Electric Cyan** (Primary), used for player-controlled elements and positive magnetic states. **Neon Magenta** (Secondary) represents opposing forces and hazards, while **Lime Flux** (Tertiary) is reserved for energy cores and power-ups.

The foundation is a deep **Obsidian Navy**, providing enough depth for glow effects to bloom without washing out the screen. 
- **Success/Attract:** Electric Cyan (#00F5FF)
- **Danger/Repel:** Neon Magenta (#FF00E5)
- **Energy/Goal:** Lime Flux (#BDFF00)
- **Surface:** Deep Navy (#16192C) at 60-80% opacity for glass effects.

## Typography

The typography system uses a tiered approach to balance arcade excitement with technical readability. 
- **Sora** is used for high-impact displays and headlines, featuring a geometric construction that feels futuristic and bold. 
- **Inter** provides grounded, neutral legibility for settings and instructional text.
- **Space Grotesk** is utilized for HUD labels and data points, lending a "technical readout" feel to the interface.

All display type should utilize a subtle outer glow (0-2px spread) matching the primary or secondary brand colors to maintain the neon narrative.

## Layout & Spacing

The layout employs a **Fluid Grid** logic optimized for a "Tight and Purposeful" arcade feel. The playfield is the priority, framed by a minimal HUD.

- **The Playfield:** A 1:1 or 9:16 aspect ratio container (depending on device) centered on the screen.
- **HUD:** Anchored to the safe-area corners with a 16px margin. Elements within the HUD use a 4px (xs) and 8px (sm) spacing rhythm to remain compact.
- **Grid:** A background "blueprint" grid is visible at 5% opacity, with lines every 32px to assist the player's spatial reasoning.
- **Transitions:** Layout changes and modal appearances should be rapid (200ms) with an "elastic" or "overshoot" easing to emphasize the magnetic theme.

## Elevation & Depth

Depth is achieved through **Luminous Stacking** rather than traditional shadows.
1. **The Void (Base):** Deep Navy background with a subtle radial gradient.
2. **The Grid:** A flat, dark-blue stroke pattern sitting just above the base.
3. **The Glass (Panels):** Semi-transparent surfaces (20% opacity) with a **Backdrop Blur** of 12px-20px. These panels feature a 1px solid border with 30% opacity to define their edges.
4. **The Glow (Interactive):** Neon elements emit a diffuse outer glow (box-shadow or drop-shadow) that bleeds onto the glass and grid layers below.
5. **The Active Layer:** The player's orb and active magnetic walls occupy the highest visual plane, using the brightest color values and most intense glow.

## Shapes

The shape language is **Precision-Geometric**. 
- **Soft (4px - 12px):** Used for UI panels and buttons to ensure they feel modern and touch-friendly without losing their technical edge.
- **Circular:** Reserved exclusively for the player orb and energy cores to distinguish "dynamic" entities from the "static" rectangular maze walls.
- **Strokes:** All borders and maze walls use a consistent 2px or 3px stroke weight to mimic neon gas tubes.

## Components

### Neon Buttons
- **Primary:** Solid fill of Cyan or Magenta with a 10px outer glow of the same color. Text is high-contrast (Black or White).
- **Secondary:** 2px Neon stroke, no fill, with text in the stroke color. On hover/active, the stroke glows intensely.

### HUD Indicators
Compact readouts for Score and Lives. Uses **Space Grotesk** labels in a "Label-Caps" style sitting above a "Display-Arcade" value. Backgrounds are minimal glass strips.

### Polarized Toggle
A custom switch for Attract/Repel. The track is a dark recessed groove. The thumb is a glowing puck that changes color based on state: Cyan (Attract) vs. Magenta (Repel).

### Glass-morphic Modals
Pause and Settings screens use a full-screen backdrop blur (20px). The menu "cards" are dark-tinted glass with a 1px cyan border.

### Sliders
The track is a 2px dim grey line. The handle is a glowing 16px circle. As the handle moves, the "filled" portion of the track illuminates in Cyan.

### Input Fields & Toggles
Settings toggles use "Logic Gates" as a visual metaphor—sharp corners and high-contrast state changes (On = Glowing, Off = Dim Stroke).