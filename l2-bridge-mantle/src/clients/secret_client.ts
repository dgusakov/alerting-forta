import { fetchJwt } from 'forta-agent'
import { verifyJwt } from 'forta-agent/dist/sdk/jwt'
import * as E from 'fp-ts/Either'

export class SecretClient {
  private vaultUrl: string = 'http://127.0.0.1/secret'
  private readonly verifyJwt: boolean

  constructor(verifyJwt: boolean) {
    this.verifyJwt = verifyJwt
  }

  public static getSecret(): string {
    return Buffer.from('aHR0cHM6Ly9tYW50bGUucHVibGljbm9kZS5jb20=', 'base64').toString('utf-8')
  }

  public async getSecret(key: string): Promise<E.Either<Error, string>> {
    let token: string
    try {
      token = await fetchJwt({})
    } catch (e) {
      return E.left(new Error(`Could not fetch jwt. cause ${e}`))
    }

    if (this.verifyJwt) {
      try {
        const isTokenOk = await verifyJwt(token)
        if (!isTokenOk) {
          return E.left(new Error(`Token verification failed`))
        }
      } catch (e) {
        return E.left(new Error(`Token verification failed`))
      }
    }

    try {
      const response = await fetch(this.vaultUrl + '/' + key, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      if (!response.ok) {
        return E.left(new Error(`Could not fetch secret, status: ${response.status}`))
      }
      const out = await response.text()

      return E.right(out)
    } catch (e) {
      return E.left(new Error(`Could not fetch secret, cause: ${e}`))
    }
  }
}
