const spinAnimation = ['\r|.....', '\r/.....', '\r-.....', '\r\\.....'];
const totalSpins = 40;
let animationStep = 0;
for (let i = 1; i <= totalSpins; i++) {
  setTimeout(() => {
    process.stdout.write(spinAnimation[animationStep]);
    animationStep++;
    if (animationStep > 3) animationStep = 0;
  }, 400 * i);
}