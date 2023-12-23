const fetchAdvice = async ({ queryKey }) => {
  const apiRes = await fetch("https://api.adviceslip.com/advice");

  if (!apiRes.ok) {
    throw new Error(`advice fetch not ok`);
  }

  return apiRes.json();
};

export default fetchAdvice;
