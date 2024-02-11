const MAX_LENGTH = 5;

export const generate = () => {
  let ans = "";
  const subSet = "123456789abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < MAX_LENGTH; i++) {
    ans += subSet.charAt(Math.floor(Math.random() * subSet.length));
  }
  return ans;
};
