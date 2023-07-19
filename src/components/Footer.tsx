import './footer.css'
import { footerStore } from '../zustand/footerState'

export default function Footer() {

  const { footerState, changeFooterState } = footerStore();

  const changeState = () => {
    changeFooterState(footerState);
  }

  return (
    <div id={footerState ? 'footerOn' : 'footerOff'} className='bg-[#061539] border-t-[1px] border-[orange] h-[13vh] w-full text-[white] flex justify-center items-center mt-[2.5%]'>
      <div id={footerState ? 'footerDisplayOff' : 'footerDisplayOn'}>

        <span className={footerState ? 'footerTextOff' : 'footerTextOn'}>Created by
          <a className={footerState ? 'footerTextOff' : 'text-[orange] border-b-[1px] border-blue-600'} href='https://www.instagram.com/alan_anr/' target='_blank'> Alan</a>
        </span>
        <br />
        <div className={footerState ? 'footerTextOff' : 'footerTextOn'}>
          <span onClick={changeState} className={footerState ? 'footerTextOff' : 'border-b-[1px] border-blue-600 cursor-pointer footerTextOn'}>Support the development of those
            <span className={footerState ? 'footerTextOff' : 'text-[#00a0ec] footerTextOn'}> gains</span>
          </span>
        </div>


        <div className={footerState ? 'secondContentOn relative' : 'secondContentOff'}>
          <button onClick={changeState} id='footerButton' className={footerState ? 'top-[10%] left-10 absolute cursor-pointer rounded bg-[#061333] h-[40%] w-[7%]' : 'secondFooterTextOff'}>Back</button>
          <h3 className={footerState ? 'secondFooterTextOn text-[1.5rem] text-[orange]' : 'secondFooterTextOff'}>crypto transfer</h3><br />
          <span id='cafecito' className={footerState ? 'secondFooterTextOn border-b-[1px] border-blue-600 miau' : 'secondFooterTextOff'}>TMidDcT4HvZj2U1vMzwpgdpReHcahLixTt</span>
        </div>

        <div className={footerState ? 'secondContentOn' : 'secondContentOff'}>
          <h3 className={footerState ? 'secondFooterTextOn text-[1.15rem] text-[orange]' : 'secondFooterTextOff'}>Cafecito</h3>
          <a id='cafecito' className={footerState ? 'border-b-[1px] border-blue-600 secondFooterTextOn' : 'secondFooterTextOff'} href='https://cafecito.app/alantyping' target='_blank'>Support with a coffee ☕</a>
        </div>
      </div>
    </div>
  )
}
