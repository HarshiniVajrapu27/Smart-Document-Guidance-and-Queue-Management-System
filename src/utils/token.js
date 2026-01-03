export function generateToken(name){
  const timestamp = Date.now().toString().slice(-4);
  const randomStr = Math.random().toString(36).substring(2,8).toUpperCase();
  const initials = (name || 'G').split(' ').map(w => w[0]||'').join('').toUpperCase().slice(0,3);
  return `${initials}-${randomStr}-${timestamp}`;
}
