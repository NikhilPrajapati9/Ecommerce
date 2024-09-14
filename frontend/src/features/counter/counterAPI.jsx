// A mock function to mimic making an async request for data
export function fetchCount() {
  return new Promise(async (resolve) => {
    const request = await fetch("http://localhost:8080");
    const data = await request.json();
    resolve({data});
  });
}
