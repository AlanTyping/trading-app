import './footer.css'
import { footerStore } from '../../zustand/footerState'

export default function Footer() {

  const { footerState, changeFooterState } = footerStore();

  const changeState = () => {
    changeFooterState(footerState);
  }

  return (
    <div id={footerState ? 'footerOn' : 'footerOff'} className='bg-[#061539] text-[0.93rem] min-h-[90px] border-t-[1px] border-[orange] h-[12.5vh] w-full text-[white] flex justify-center items-center mt-[2.5%]'>
      <div id={footerState ? 'footerDisplayOff' : 'footerDisplayOn'}>

        {/* Closed footer section */}
        <span className={footerState ? 'footerTextOff' : 'footerTextOn'}>Created by <a className={footerState ? 'footerTextOff' : 'text-[orange] border-b-[1px] border-blue-600'} href='https://www.instagram.com/alan_anr/' target='_blank'>Alan  </a></span>
        <div className={footerState ? 'footerTextOff' : 'footerTextOn'}>
          <span onClick={changeState} className={footerState ? 'footerTextOff' : 'border-b-[1px] border-blue-600 cursor-pointer footerTextOn'}>If you find it usefull, I appreciate your
            <span className={footerState ? 'footerTextOff' : 'text-[#00a0ec] footerTextOn'}> support</span>
          </span>
        </div>


        {/* Opened footer section */}
        <div id='crypto-transfer' className={footerState ? 'secondContentOn' : 'secondContentOff'}>
          <button onClick={changeState} id='footerButton' className={footerState ? 'animacion top-[10%] left-[2%] absolute cursor-pointer rounded bg-[#061333] h-[20%] w-[7%]' : 'secondFooterTextOff'}>Back</button>

          <h3 id='crypto-footer-title' className={footerState ? 'secondFooterTextOn poppins text-[1.7rem] orange-animation text-[orange] mb-2' : 'secondFooterTextOff'}>Crypto transfer</h3>
          <p className={footerState ? 'secondFooterTextOn animacion-borde border-b-[1px] border-blue-600 miau' : 'secondFooterTextOff'}>TMidDcT4HvZj2U1vMzwpgdpReHcahLixTt</p>
        </div>

        <div id='cafecito-section' className={footerState ? 'secondContentOn poppins' : 'secondContentOff'}>
          <h3 id='cafe-footer-title' className={footerState ? 'secondFooterTextOn text-[1.7rem] orange-animation text-[orange] mb-2' : 'secondFooterTextOff'}>Cafecito</h3>
          <a id='coffee-support' className={footerState ? 'secondFooterTextOn animacion-borde border-b-[1px] border-blue-600 ' : 'secondFooterTextOff'} href='https://cafecito.app/alantyping' target='_blank'>Support with a coffee <span className='coffee'>&#9749;</span></a>
        </div>
      </div>
    </div>
  )
}
