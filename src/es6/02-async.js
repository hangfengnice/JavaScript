const fetchData = () => new Promise(resolve =>
  setTimeout(() => resolve('data'), 500));

async function test() {
  const data = await fetchData()
  console.log('data', data);
  const data1 = await fetchData()
  console.log('data1', data1);
  return 'data2'
};
test().then(res => console.log(res))
