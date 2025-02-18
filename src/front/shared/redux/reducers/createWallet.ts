export const initialState = {
  currencies: {
    btc: false,
    eth: false,
    bnb: false,
    matic: false,
    arbeth: false,
    xdai: false,
    ghost: false,
    next: false,
    '{eth}usdt': false,
    '{eth}swap': false,
  },
  secure: '',
  step: 1,
}


export const newWalletData = (state, payload) => {
  const { type, data } = payload

  return ({
    ...state,
    [type]: data,
  })
}
