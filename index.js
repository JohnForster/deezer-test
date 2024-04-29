const run = async () => {
  const response = await fetch("https://api.deezer.com/genre");

  const str = await response.text();

  console.log("response.headers:", JSON.stringify(response.headers, null, 2));
  console.log("response.status:", response.status);
  console.log(str);
};

run();
