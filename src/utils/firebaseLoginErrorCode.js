export const firebaseLoginErrorCodeMessageReturn = message => {
    switch (message) {
        case 'auth/invalid-email' :
            return 'Email inválido!';
        case 'auth/user-disabled':
            return 'Usuário desativado, entre em contato com o suporte';
        case 'auth/user-not-found': 
            return 'Usuário não encontrado!';
        case 'auth/wrong-password':
            return 'Senha incorreta!';
        default:
    }
}