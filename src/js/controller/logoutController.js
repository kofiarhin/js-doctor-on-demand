
export default function logoutController() {
    // clear session
    sessionStorage.clear("user");

    // redirect to login page
    window.location.href = "login.html"

}