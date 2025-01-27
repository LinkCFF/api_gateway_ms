import { Responses, ResponseStatus } from '../../types/response.types'

class UpdateUserService {
  public async updateUserService (email: string, password: string): Promise<Responses> {
    const responses: Responses = {
      status: ResponseStatus.OK,
      message: 'hello!',
      answer: {
        message: 'hello!'
      }
    }

    const url: string = 'https://mpc-users-ms.onrender.com' + '/user/put'

    const fetchData = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // inject the query and variables
        email,
        password
      })
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
      .catch((err) => {
        console.log(err)
        responses.status = ResponseStatus.INTERNAL_SERVER_ERROR
      })
    responses.answer = fetchData
    return responses
  }
}

export default new UpdateUserService()
