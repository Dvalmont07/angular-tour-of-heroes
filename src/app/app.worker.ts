/// <reference lib="webworker" />

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`;
//   postMessage(response);
// });

addEventListener('message', (data) => {
  // This is running in the web-worker
  console.log('\nData Size: ' + JSON.stringify(data));
  console.time('Web Worker 1');
  let val = 'a';
  for (let k = 0; k <= 10; k++) {
    val = 'b';

  }



  console.timeEnd('Web Worker 1');
  postMessage(val);
});
