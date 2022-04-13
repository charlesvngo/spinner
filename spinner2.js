const spinAnimation = ['\r|.....', '\r/.....', '\r-.....', '\r\\.....'];
for (let i = 1; i <= 40; i++) {
  setTimeout(() => process.stdout.write(spinAnimation[i % 4]), 400 * i);
}