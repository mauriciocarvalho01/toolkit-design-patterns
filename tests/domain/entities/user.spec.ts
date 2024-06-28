import { User } from '@/domain/entities/user'

// ESTRUTURAL ---> Decorator Pattern

// Por que é bom?

// Por que é ruim?

describe('User', () => {
    it('Garantir que o email seja válido', async () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        // const user = new User('Pablo Escobar', 'pablito157gmail.com');
        try {
            const user = new User('Pablo Escobar', 'pablito157gmail.com')
            console.log(user)
        } catch (error: any) {
            // Then: Resultado esperado
            expect(error.message).toContain('Email inválido')
        }
    })

    it('Garantir nome com tamanho válido', async () => {
        // Given: Contexto inicial ou pré-condições
        // Não há necessidade de configurar pré-condições específicas neste caso.

        // When: Ação que está sendo testada
        try {
            const user = new User('Jhon Wikipedia', 'jhonybony@outlook.com')
            console.log(user)
        } catch (error: any) {
            // Then: Resultado esperado
            expect(error.message).toContain('O nome dever conter entre 6 e 255 caracteres')
        }
    })
})
