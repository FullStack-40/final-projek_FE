export default function isEmail(email) {
  const emailRegex = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}
