import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="">
            <input type="email" />
          </label>
          <label htmlFor="">
            <input type="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </section>
    )
  }
}
