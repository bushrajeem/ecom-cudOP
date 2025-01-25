import { useEcommerce } from '../features/commerce'

function Esidebar() {
    const {state, dispatch} = useEcommerce();
  return (
    <div>
      {state.itemlist.map((item) => {
        <div>
          {item.name}
        </div>
      })}
      <button 
      className='bg-slate-200 box-border p-5 rounded-2xl'
      onClick={() => {dispatch({type: "CLEAR_CART", payload: "id"})}}>Clear</button>
    </div>
  )
}

export default Esidebar
