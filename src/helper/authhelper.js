// // Check user in token
const isLoggedIn = () => {
  let user = localStorage.getItem("token");
  return user ? true : false;
};

// Coockies best authontication
function SetTokenFromCoockies(token, session_id) {
  const expirationDays = 2000; // You can adjust this as needed
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `token=${token}; ${expires}; path=/`;
}

// get and check user valid are no
function GetTokenFromCoockies() {
  const name = "token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

module.exports = {
  SetTokenFromCoockies,
  isLoggedIn,
  GetTokenFromCoockies,
};
