# Sky Map catalogue attribution

## HYG stellar data

Orbonix Sky Map supports a magnitude-limited derivative of the **HYG Database v4.1** by Astronexus.

Source: https://github.com/astronexus/HYG-Database/tree/main/hyg/CURRENT

HYG Database v4.1 is licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.

The generated Orbonix binary contains only fields needed for rendering: J2000 right ascension, J2000 declination, apparent visual magnitude, and B-V colour index. The companion metadata contains selected names/designations. The derivative catalogue remains subject to CC BY-SA 4.0.

The build helper is `scripts/build-hyg-stars.cjs`. Source catalogue data is intentionally not duplicated as the original ~32 MB CSV in the web bundle.
