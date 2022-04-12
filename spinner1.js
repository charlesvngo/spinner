process.stdout.write('hello from spinner1.js... \rheyyy\n');



setTimeout(() => {
  process.stdout.write('\r|.....');
}, 400);

setTimeout(() => {
  process.stdout.write('\r/.....');
}, 800);

setTimeout(() => {
  process.stdout.write('\r-.....');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r\\.....');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r|.....');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r/.....');
}, 2400);

setTimeout(() => {
  process.stdout.write('\r-.....');
}, 2800);

setTimeout(() => {
  process.stdout.write('\r\\.....');
}, 3200);

setTimeout(() => {
  process.stdout.write('\r|.....');
}, 3600);