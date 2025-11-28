export function createAuthCookie(token: string) {
    document.cookie = `access_token=${token}`;
}